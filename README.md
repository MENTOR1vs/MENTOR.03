# MENTOR

MENTOR is a full-stack web application for managing mentorship requests between **Coders** and **Mentors**.

Coders can request help, track mentorship status, and manage personal goals. Mentors can accept, schedule, reject, and complete requests. Administrators can view platform information through a read-only dashboard.

## Main features

- Registration, login, logout, and JWT sessions.
- Roles: `CODER`, `MENTOR`, and `ADMIN`.
- Mentorship request management.
- User profiles and personal goals.
- Public landing page.
- Light and dark themes with custom accent colors.
- Administrative dashboard.
- PostgreSQL persistence.
- Responsive single-page application.

## Technologies

- **Frontend:** HTML, CSS, Vanilla JavaScript, Vite, SweetAlert2
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **Authentication:** JWT, HttpOnly cookies, bcrypt
- **Environment:** Docker and Docker Compose

## Requirements

Install the following tools before running the project:

- Docker Desktop
- Git

Node.js is only required when running the client and server without Docker.

## Run with Docker

### 1. Open the project folder

```powershell
cd C:\path\to\MENTOR.03-main
```

### 2. Create the environment file

Windows PowerShell:

```powershell
Copy-Item example.env .env
```

macOS or Linux:

```bash
cp example.env .env
```

The default configuration is ready for local development. Change `JWT_SECRET` before using the project outside a local environment.

### 3. Build and start the application

```powershell
docker compose up -d --build
```

### 4. Open the services

- Application: http://localhost:5173
- API health check: http://localhost:3000/api/health
- pgAdmin: http://localhost:5050
- PostgreSQL: `localhost:5432`

## Demo accounts

| Role | Email | Password |
|---|---|---|
| Coder | `coder@mentor.test` | `123456` |
| Mentor | `mentor@mentor.test` | `123456` |
| Admin | `admin@mentor.test` | `123456` |

## pgAdmin connection

Log in to pgAdmin with:

```text
Email: admin@admin.com
Password: admin
```

Register a PostgreSQL server using:

```text
Host: db
Port: 5432
Database: mentor_db
Username: admin
Password: 123456
```

## Project structure

```text
MENTOR.03-main/
├── client/              # Vite frontend
├── server/              # Express REST API
├── database/            # Schema, seed, and migrations
├── docker-compose.yaml  # Local services
├── example.env          # Environment variable example
└── README.md
```

## Useful commands

View running containers:

```powershell
docker compose ps
```

View logs:

```powershell
docker compose logs -f
```

Rebuild only the client:

```powershell
docker compose up -d --build client
```

Stop the project:

```powershell
docker compose down
```

Reset the database and start again:

```powershell
docker compose down -v
docker compose up -d --build
```

> The schema and seed files run automatically only when the PostgreSQL volume is created for the first time.

## Run without Docker

Create a local PostgreSQL database, update the database variables in `.env`, and execute:

```powershell
cd server
npm install
npm run dev
```

In a second terminal:

```powershell
cd client
npm install
npm run dev
```

The API must run on port `3000` and the client on port `5173` unless the environment configuration is changed.

## Troubleshooting

### Port already in use

Change the related value in `.env`, for example:

```env
API_PORT=3001
CLIENT_PORT=5174
```

### Database changes are not applied

Reset the PostgreSQL volume:

```powershell
docker compose down -v
docker compose up -d --build
```

### Frontend does not show recent changes

Rebuild the client and refresh the browser with `Ctrl + F5`:

```powershell
docker compose up -d --build --force-recreate client
```

## Team

Developed as an educational full-stack project for the RIWI integrative project.