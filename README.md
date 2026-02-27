ISS Tech – Company Website & Contact System

🔗 https://isstech.ca

Production-ready company website built with React (Vite) and Tailwind CSS, featuring a custom neon SaaS interface.
Includes a decoupled Node.js + Express backend used for secure contact form processing and transactional email delivery via Resend API.

Originally bootstrapped with Lovable and later extended, customized, and production-prepared using VS Code development workflows.

Tech Stack

Frontend

React (Vite)

TypeScript

Tailwind CSS

shadcn/ui

Backend

Node.js

Express.js

Resend Email API

REST API

Deployment

Production domain deployment

Environment-based configuration

CORS configuration for frontend/backend communication

Project Structure
frontend/
  src/
backend/
  server.js
  package.json

Local Development Setup
Frontend
npm install
npm run dev

Backend
cd backend
npm install
node server.js

Environment Variables

Create a .env file in the backend directory:

PORT=
CORS_ORIGIN=
RESEND_API_KEY=
SENDER_EMAIL=
RECEIVER_EMAIL=

Features

Fully responsive SaaS-style UI

Company services and product showcase

Contact form integrated with backend email delivery

Production-ready full-stack architecture

Environment-based configuration for deployment

Notes

Initial UI scaffolding was generated using Lovable and later significantly customized, extended, and production-integrated with backend services and deployment configuration using standard development workflows.

License

MIT

Git Workflow

Clone the repository:

git clone https://github.com/<your-username>/iss-tech-website.git
cd iss-tech-website

Create a feature branch:

git checkout -b feature/your-feature-name

Commit changes:

git add .
git commit -m "Add: description of change"

Push to repository:

git push origin feature/your-feature-name

Deployment Notes

Before deployment, ensure environment variables are configured:

PORT=
CORS_ORIGIN=
RESEND_API_KEY=
SENDER_EMAIL=
RECEIVER_EMAIL=

Update VITE_API_URL in the frontend environment file to point to the production backend domain.

