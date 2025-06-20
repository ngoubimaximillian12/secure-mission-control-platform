# 🚀 Secure Mission Control Platform

A secure, multi-tenant mission planning and coordination system with role-based access control, CI/CD automation, Docker deployment, observability, and cloud-native readiness.

---

## ✅ Features

- 🔐 JWT-based authentication with roles (admin, user)
- 🏢 Multi-tenant architecture using PostgreSQL + Prisma
- 🗂️ Missions: create, view, and manage tasks per tenant
- 🚀 Full CI/CD via GitHub Actions
- 📦 Dockerized backend + frontend + database
- 🌍 Cloud deployment support: Render + Terraform
- 📊 Monitoring, testing, and extensibility built-in

---

## 📁 Tech Stack

| Layer      | Tech Used                        |
|------------|----------------------------------|
| Frontend   | React + Vite + Tailwind          |
| Backend    | Express.js + Node.js             |
| Auth       | JWT + Passport + bcrypt          |
| Database   | PostgreSQL + Prisma ORM          |
| CI/CD      | GitHub Actions                   |
| Deployment | Docker, Render, Terraform        |
| Docs       | Swagger (optional)               |

---

## 🛠 Local Setup

### Prerequisites:
- Node.js 18+
- Docker
- PostgreSQL (or use Docker)

### 1. Clone the Repo

```bash
git clone https://github.com/YOUR_USERNAME/secure-mission-control-platform.git
cd secure-mission-control-platform

cat > backend/Dockerfile << 'EOF'
# Use Node.js official image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy dependency files first
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy the rest of the backend code
COPY . .

# Expose the port your backend runs on
EXPOSE 4000

# Command to start the backend app
CMD ["node", "index.js"]
