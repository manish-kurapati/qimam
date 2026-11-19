# Qimam Al-Intaj website

Bilingual static website with a content editor at `/admin/`. Website pages are built into `dist/`. The CMS API runs as a Vercel Node function and stores content, the admin passcode hash, login throttling, and uploaded images in Supabase.

## Supabase setup

1. Open the Supabase project with reference `uiqtblxolrxvxojirrou` and run [supabase/schema.sql](supabase/schema.sql) in its SQL Editor. This creates the CMS tables and public `cms-media` storage bucket. Run it before opening the admin panel.
2. Set these **server-side** environment variables in Vercel for Preview and Production:

   - `SUPABASE_URL=https://uiqtblxolrxvxojirrou.supabase.co`
   - `SUPABASE_SECRET_KEY=` the project's `sb_secret_` key.
   - `QIMAM_ADMIN_PASSCODE=` a private initial passcode of 12–200 characters.

   Never use the secret key in browser code or a `VITE_` variable. The publishable and anon keys are not needed for this server-side CMS.
3. Deploy the branch. The first successful login seeds a hash of `QIMAM_ADMIN_PASSCODE` in `cms_admin`; later edits to that environment variable do not change the active passcode. Use **Change passcode** in `/admin/` to change it.

Since credentials were shared in chat, rotate the secret key in Supabase after deploying and update the Vercel environment variable. Keep the admin passcode private.

## Run locally (PowerShell)

Create `.env.local` from `.env.example` and fill in the server-only values. `.env.local` is ignored by Git and loaded by `dev:cms`.

```powershell
npm.cmd run build
npm.cmd run dev:cms
```

Open `http://localhost:4173/admin/`. `npm.cmd run dev` starts a website-only preview; it does not enable the API. If an admin passcode hash already exists in Supabase, use that existing passcode, not the environment variable.

## Checks

```powershell
npm.cmd test
npm.cmd run build
node cms-integration-test.mjs
```

The integration test uses a local Supabase API simulation and exercises login, authorization, content save/read/delete, passcode change, and logout through the HTTP server. A live end-to-end check additionally requires the SQL setup, Vercel environment variables, and deployment. No live Supabase data is changed by the integration test.

## Content and media

The public site shows the built-in content until an edit is saved. Admins may edit English and Arabic text, links, image descriptions, and images. Uploaded images live in the Supabase `cms-media` bucket. The service-role key is only read by the API function. Database tables have row-level security enabled and no browser access policy.
