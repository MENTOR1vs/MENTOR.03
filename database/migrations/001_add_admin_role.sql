BEGIN;

CREATE EXTENSION IF NOT EXISTS pgcrypto;

ALTER TABLE users
  DROP CONSTRAINT IF EXISTS valid_user_role;

ALTER TABLE users
  ADD CONSTRAINT valid_user_role
    CHECK (
      role IN (
        'CODER',
        'MENTOR',
        'ADMIN'
      )
    );

ALTER TABLE users
  DROP CONSTRAINT IF EXISTS coder_requires_clan;

ALTER TABLE users
  ADD CONSTRAINT coder_requires_clan
    CHECK (
      role <> 'CODER'
      OR clan_id IS NOT NULL
    );

INSERT INTO users (
  clan_id,
  first_name,
  last_name,
  email,
  password_hash,
  role,
  biography
)
VALUES (
  NULL,
  'System',
  'Administrator',
  'admin@mentor.test',
  crypt(
    '123456',
    gen_salt('bf', 10)
  ),
  'ADMIN',
  'Administrator account for reviewing users and mentorship requests.'
)
ON CONFLICT (email) DO UPDATE
SET
  role = 'ADMIN',
  clan_id = NULL,
  updated_at = CURRENT_TIMESTAMP;

COMMIT;