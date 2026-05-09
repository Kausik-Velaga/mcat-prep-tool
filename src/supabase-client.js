(function () {
  let client = null;

  function getConfig() {
    return window.CARS_SUPABASE_CONFIG || {};
  }

  function isConfigured() {
    const config = getConfig();
    return Boolean(config.url && config.anonKey && window.supabase?.createClient);
  }

  function getClient() {
    if (!isConfigured()) {
      return null;
    }

    if (!client) {
      const config = getConfig();
      client = window.supabase.createClient(config.url, config.anonKey);
    }

    return client;
  }

  async function getUser() {
    const supabaseClient = getClient();

    if (!supabaseClient) {
      return null;
    }

    const { data, error } = await supabaseClient.auth.getUser();

    if (error) {
      return null;
    }

    return data.user;
  }

  async function signIn(email, password) {
    const supabaseClient = getClient();

    if (!supabaseClient) {
      throw new Error("Supabase is not configured yet.");
    }

    return supabaseClient.auth.signInWithPassword({ email, password });
  }

  async function signUp(email, password) {
    const supabaseClient = getClient();

    if (!supabaseClient) {
      throw new Error("Supabase is not configured yet.");
    }

    return supabaseClient.auth.signUp({ email, password });
  }

  async function signOut() {
    const supabaseClient = getClient();

    if (!supabaseClient) {
      return;
    }

    await supabaseClient.auth.signOut();
  }

  function onAuthStateChange(callback) {
    const supabaseClient = getClient();

    if (!supabaseClient) {
      return () => {};
    }

    const { data } = supabaseClient.auth.onAuthStateChange(callback);
    return () => data.subscription.unsubscribe();
  }

  window.CARS_AUTH = {
    getClient,
    getUser,
    isConfigured,
    onAuthStateChange,
    signIn,
    signOut,
    signUp
  };
})();
