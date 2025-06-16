# 📰 TabNews Clone

A complete TabNews implementation developed following the [Curso.dev](https://curso.dev) course, built with **Next.js**, **PostgreSQL**, and **Docker**.

[![Node.js](https://img.shields.io/badge/Node.js-20+-green.svg)](https://nodejs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black.svg)](https://nextjs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue.svg)](https://postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-compose-blue.svg)](https://docker.com/)
[![Jest](https://img.shields.io/badge/Jest-Testing-red.svg)](https://jestjs.io/)

## 🚀 About the Project

This project is a complete implementation of a news and discussion platform similar to TabNews, developed as part of learning at Curso.dev. The application includes a user system, authentication, content management, and a robust REST API.

## ✨ Features

### 🔐 User System

- **Account creation** with unique data validation
- **Profile updates** (username, email, password)
- **Uniqueness validation** for username and email
- **Secure password hashing** with bcryptjs
- **Case-insensitive support** for usernames

### 📊 Complete REST API

- **System Status** - Real-time monitoring
- **User Management** - Complete CRUD
- **Migration System** - Database versioning
- **Standardized error handling**
- **Robust data validation**

### 🛠️ Infrastructure

- **PostgreSQL** with Docker for development
- **Automatic migrations** with node-pg-migrate
- **Comprehensive integration tests**
- **Database connection monitoring**
- **Containerized development environment**

## 🛠️ Tech Stack

### Backend

- **Next.js 14** - Full-stack React framework
- **PostgreSQL 16** - Relational database
- **node-pg-migrate** - Migration system
- **bcryptjs** - Password hashing
- **next-connect** - API routing

### Frontend

- **React 18** - User interface
- **SWR** - Data fetching and caching
- **CSS Modules** - Styling

### DevOps & Testing

- **Docker Compose** - Containerization
- **Jest** - Testing framework
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **Commitizen** - Commit standardization

## 🚦 API Endpoints

### Status

- `GET /api/v1/status` - System and database status

### Users

- `POST /api/v1/users` - Create new user
- `GET /api/v1/users/[username]` - Get user by username
- `PATCH /api/v1/users/[username]` - Update user data

### Migrations

- `GET /api/v1/migrations` - List pending migrations
- `POST /api/v1/migrations` - Run pending migrations

## 🏃‍♂️ How to Run

### Prerequisites

- Node.js 20+
- Docker and Docker Compose
- Git

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/clone-tabnews.git
cd clone-tabnews
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the project in development**

```bash
npm run dev
```

This command will:

- Start PostgreSQL database with Docker
- Wait for database to be available
- Run migrations
- Start Next.js server

### Available Commands

```bash
# Development
npm run dev                    # Start complete development environment
npm run test                   # Run all tests
npm run test:watch            # Run tests in watch mode

# Docker Services
npm run services:up           # Start services (PostgreSQL)
npm run services:stop         # Stop services
npm run services:down         # Remove containers

# Migrations
npm run migrations:create     # Create new migration
npm run migrations:up         # Run pending migrations

# Code Quality
npm run lint:prettier:check   # Check formatting
npm run lint:prettier:fix     # Fix formatting
npm run lint:eslint:check     # Check linting

# Commits
npm run commit               # Assisted commit with Commitizen
```

## 🧪 Tests

The project has a complete suite of **integration tests** covering all API endpoints:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch
```

## 🤝 Contributing

This project is part of learning at [Curso.dev](https://curso.dev). Contributions are welcome!

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## 🎓 Learning

This project was developed as part of the [Curso.dev](https://curso.dev) course, which teaches modern web development with a focus on best practices, testing, and code quality.

### Applied Concepts

- **API Design** - Well-structured RESTful APIs
- **Database Design** - Modeling and migrations
- **Testing** - Comprehensive automated testing
- **DevOps** - Containerization and automation
- **Clean Code** - Clean and maintainable code
- **Git Flow** - Professional version control

---

⭐ **Developed with ❤️ following [Curso.dev](https://curso.dev)**
