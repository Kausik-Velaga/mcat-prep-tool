# Supabase Setup

Sentence Finder can run without Supabase. When Supabase is configured, users can sign in and sync exercise progress across browsers.

## 1. Create the project

Create a Supabase project, then copy the project URL and anon public key from Project Settings > API.

Paste them into `config/supabase-config.js`:

```js
window.CARS_SUPABASE_CONFIG = {
  url: "https://your-project.supabase.co",
  anonKey: "your-public-anon-key"
};
```

The anon key is designed to be used in browser apps. Do not put a service role key in this file.

## 2. Create the progress table

Open the Supabase SQL editor and run `supabase/schema.sql`.

That script creates `public.user_progress`, enables row level security, and adds policies so users can only read and write their own progress rows.

## 3. Configure auth

In Authentication > Providers, keep Email enabled.

For local testing, add this site URL:

```text
http://localhost:5173
```

For production, add the hosted domain after deployment.
