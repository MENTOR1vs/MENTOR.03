/*
 * MENTOR database schema
 *
 * Creates the tables, relationships, constraints, and indexes
 * required by the application.
 *
 * Main entities:
 * - clans
 * - users
 * - mentorship_requests
 * - personal_goals
 */

-- Enables cryptographic functions used by the development seed
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Stores the clans available Coder registration

CREATE TABLE clans (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL UNIQUE
);

--  Stores authentication, role, profile and clan info
-- Roles: CODER, MENTOR, ADMIN

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  -- Coders reference one clan, Mentors and Admin use null
  clan_id INTEGER REFERENCES clans(id) ON DELETE SET NULL, 
  first_name VARCHAR(80) NOT NULL,
  last_name VARCHAR(80) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  -- Stores the bycript hash. The original password doesn't get stored
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(20) NOT NULL,
  biography TEXT DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

-- Restricts accounts to roles supported by the application

  CONSTRAINT valid_user_role
    CHECK (role IN ('CODER', 'MENTOR','ADMIN')),

--Bussines rule: every Coder must belong to a clan
    CONSTRAINT coder_requires_clan
    CHECK (role <> 'CODER' OR clan_id IS NOT NULL)
);

-- Stores the complete mentorship workflow
-- A request begins as PENDING and may become ACCEPTED, REJECTED, COMPLETED, CANCELLED
CREATE TABLE mentorship_requests (
  id SERIAL PRIMARY KEY,
 --  Identifies the Coder who created the request 
  coder_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  -- Identifies wich mentor accepted the request
  mentor_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
  topic VARCHAR(150) NOT NULL,
  description TEXT NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'PENDING',
  scheduled_at TIMESTAMPTZ,
  observations TEXT DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT valid_request_status
    CHECK (status IN ('PENDING', 'ACCEPTED', 'REJECTED', 'COMPLETED', 'CANCELLED'))
);

-- These index improve filtering by user and status 
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_requests_coder ON mentorship_requests(coder_id);
CREATE INDEX idx_requests_mentor ON mentorship_requests(mentor_id);
CREATE INDEX idx_requests_status ON mentorship_requests(status);

-- This helps prevent that a Coder creates two active request with the same topic
CREATE UNIQUE INDEX unique_active_topic_per_coder
ON mentorship_requests (coder_id, LOWER(topic))
WHERE status IN ('PENDING', 'ACCEPTED');

-- Stores learning goals created by autheticated users, each goal belongs to one user
CREATE TABLE personal_goals (
  id SERIAL PRIMARY KEY,
-- Deletes the personal goal automatically when the accounnt is deleted
  user_id INTEGER NOT NULL
    REFERENCES users(id)
    ON DELETE CASCADE,

  title VARCHAR(150) NOT NULL,

  description TEXT NOT NULL DEFAULT '',

  due_date DATE NOT NULL,

  completed BOOLEAN NOT NULL DEFAULT FALSE,

  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

  updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
--Improves searches by owner and due date

CREATE INDEX idx_personal_goals_user_id
ON personal_goals(user_id);

CREATE INDEX idx_personal_goals_due_date
ON personal_goals(due_date);