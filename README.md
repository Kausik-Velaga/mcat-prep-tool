# Sentence Finder

Sentence Finder is a static MCAT CARS evidence-finding practice tool. It can run locally with no backend, and it can sync user progress through Supabase when configured.

## Local Development

```sh
npm run dev
```

Open `http://localhost:5173`.

## Cloudflare Pages Deployment

Create a Cloudflare Pages project from the GitHub repository.

Use these build settings:

```text
Framework preset: None
Build command: npm run build
Build output directory: dist
Root directory: /
```

Add these Cloudflare Pages environment variables under **Settings > Environment variables**:

```text
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_PUBLISHABLE_KEY=sb_publishable_your_key
```

The build step writes those values into `dist/config/supabase-config.js`. The publishable key is safe to expose in browser code; never use a Supabase secret/service-role key in this app.

## Supabase Setup

1. Create a Supabase project.
2. Run `supabase/schema.sql` in the Supabase SQL editor.
3. In Supabase Authentication settings, add these URLs:

```text
Site URL: https://your-cloudflare-pages-domain.pages.dev
Redirect URLs:
http://localhost:5173/**
https://your-cloudflare-pages-domain.pages.dev/**
```

If you add a custom domain later, add that domain to the Supabase redirect URLs too.

## Deployment Flow

1. Push changes to GitHub.
2. Cloudflare Pages builds from GitHub.
3. Cloudflare injects Supabase env vars during `npm run build`.
4. The deployed static site talks to Supabase Auth and the `user_progress` table.
