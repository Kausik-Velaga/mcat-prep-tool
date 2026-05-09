(function () {
  const elements = {
    authSetup: document.querySelector("#authSetup"),
    authCard: document.querySelector("#authCard"),
    accountStatus: document.querySelector("#accountStatus"),
    accountEmail: document.querySelector("#accountEmail"),
    authForm: document.querySelector("#authForm"),
    email: document.querySelector("#email"),
    password: document.querySelector("#password"),
    signInButton: document.querySelector("#signInButton"),
    signUpButton: document.querySelector("#signUpButton"),
    signOutButton: document.querySelector("#signOutButton"),
    authMessage: document.querySelector("#authMessage")
  };

  function setMessage(message, variant = "neutral") {
    elements.authMessage.textContent = message;
    elements.authMessage.className = `template-preview account-message is-${variant}`;
  }

  function setBusy(isBusy) {
    elements.signInButton.disabled = isBusy;
    elements.signUpButton.disabled = isBusy;
  }

  async function renderAccount() {
    const isConfigured = window.CARS_AUTH?.isConfigured();
    elements.authSetup.hidden = isConfigured;
    elements.authCard.hidden = !isConfigured;

    if (!isConfigured) {
      return;
    }

    const user = await window.CARS_AUTH.getUser();
    const isSignedIn = Boolean(user);

    elements.accountStatus.textContent = isSignedIn ? "Signed in" : "Signed out";
    elements.accountEmail.textContent = user?.email || "Use your email and password to continue.";
    elements.authForm.hidden = isSignedIn;
    elements.signOutButton.hidden = !isSignedIn;

    if (isSignedIn) {
      setMessage("Your progress will sync to this account when you practice.", "valid");
    }
  }

  async function handleAuthAction(action) {
    const email = elements.email.value.trim();
    const password = elements.password.value;

    if (!email || !password) {
      setMessage("Enter an email and password.", "invalid");
      return;
    }

    setBusy(true);
    setMessage(action === "sign-up" ? "Creating account..." : "Signing in...");

    try {
      const response =
        action === "sign-up"
          ? await window.CARS_AUTH.signUp(email, password)
          : await window.CARS_AUTH.signIn(email, password);

      if (response.error) {
        setMessage(response.error.message, "invalid");
        return;
      }

      if (action === "sign-up" && !response.data.session) {
        setMessage("Account created. Check your email to confirm your address before signing in.", "valid");
        return;
      }

      setMessage("You are signed in.", "valid");
      await renderAccount();
    } catch (error) {
      setMessage(error.message, "invalid");
    } finally {
      setBusy(false);
    }
  }

  elements.signInButton?.addEventListener("click", () => handleAuthAction("sign-in"));
  elements.signUpButton?.addEventListener("click", () => handleAuthAction("sign-up"));
  elements.signOutButton?.addEventListener("click", async () => {
    await window.CARS_AUTH.signOut();
    setMessage("You are signed out.");
    await renderAccount();
  });

  window.CARS_AUTH?.onAuthStateChange(() => {
    renderAccount();
  });

  renderAccount();
})();
