# Supabase Setup

Sentence Finder can run without Supabase. When Supabase is configured, users can sign in and sync exercise progress across browsers.

## 1. Create the project

Create a Supabase project, then copy the project URL and publishable public key from Project Settings > API.

For local root-server development, you can paste them into `config/supabase-config.js`:

```js
window.CARS_SUPABASE_CONFIG = {
  url: "https://your-project.supabase.co",
  anonKey: "sb_publishable_your_key"
};
```

For Cloudflare Pages, set `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY` as build environment variables instead. The build script writes `dist/config/supabase-config.js` automatically.

The publishable key is designed to be used in browser apps. Do not put a secret or service-role key in this file.

## 2. Create the progress table

Open the Supabase SQL editor and run `supabase/schema.sql`.

That script creates `public.user_progress`, enables row level security, and adds policies so users can only read and write their own progress rows.

## 3. Configure auth

In Authentication > Providers, keep Email enabled.

For local testing, add this redirect URL:

```text
http://localhost:5173/**
```

For production, set the site URL to your Cloudflare Pages URL and add this redirect URL:

```text
https://your-cloudflare-pages-domain.pages.dev/**
```
