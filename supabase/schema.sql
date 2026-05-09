create table if not exists public.user_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  exercise_id text not null,
  answered_question_ids text[] not null default '{}',
  correct_question_ids text[] not null default '{}',
  updated_at timestamptz not null default now(),
  primary key (user_id, exercise_id)
);

alter table public.user_progress enable row level security;

create policy "Users can read their own progress."
on public.user_progress
for select
to authenticated
using ((select auth.uid()) = user_id);

create policy "Users can create their own progress."
on public.user_progress
for insert
to authenticated
with check ((select auth.uid()) = user_id);

create policy "Users can update their own progress."
on public.user_progress
for update
to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_user_progress_updated_at on public.user_progress;

create trigger set_user_progress_updated_at
before update on public.user_progress
for each row
execute function public.set_updated_at();
