-- Run once in the Supabase SQL editor for the project in SUPABASE_URL.
create table if not exists public.cms_admin (
  id smallint primary key check (id = 1),
  password_hash text not null
);
create table if not exists public.cms_content (
  route text not null,
  language text not null check (language in ('en', 'ar')),
  element_key text not null,
  field text not null check (field in ('text', 'src', 'alt', 'href')),
  value text not null,
  updated_at timestamptz not null default now(),
  primary key (route, language, element_key, field)
);
create table if not exists public.cms_login_attempts (
  ip text primary key,
  attempts integer not null default 0,
  window_start timestamptz not null default now()
);
alter table public.cms_admin enable row level security;
alter table public.cms_content enable row level security;
alter table public.cms_login_attempts enable row level security;
revoke all on public.cms_admin from anon, authenticated;
revoke all on public.cms_content from anon, authenticated;
revoke all on public.cms_login_attempts from anon, authenticated;
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('cms-media', 'cms-media', true, 10485760, array['image/jpeg','image/png','image/webp','image/gif'])
on conflict (id) do update set public = true, file_size_limit = excluded.file_size_limit, allowed_mime_types = excluded.allowed_mime_types;
