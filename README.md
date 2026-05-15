# Workshop Avanade Fullstack

A fullstack web application built with **Spring Boot** (backend) and **Angular** (frontend) as part of the Avanade Fullstack Workshop. The project is an eco-friendly product inventory manager with categories and items.

## Tech Stack

### Backend
- **Java 21**
- **Spring Boot 4.0.6**
- **Spring Data JPA** (Hibernate)
- **H2 Database** (in-memory)
- **Lombok**
- **Gradle 9.4.1**

### Frontend
- **Angular 21**
- **TypeScript 5.9**
- **RxJS**

## Project Structure

```
workshop-avanade-fullstack/
├── backend/               # Spring Boot REST API
│   ├── src/main/java/com/workshop/fullstack/
│   │   ├── models/        # JPA entities (Category, Item)
│   │   ├── repositories/  # Spring Data repositories
│   │   ├── services/      # Business logic layer
│   │   └── controllers/   # REST controllers
│   └── src/main/resources/
│       ├── application.properties
│       └── import.sql      # Database seed script
└── frontend/              # Angular SPA
    └── src/app/
```

## Getting Started

### Prerequisites
- Java 21+
- Node.js 18+
- npm

### Running the Backend

```bash
cd backend
chmod +x gradlew
./gradlew bootRun
```

The API will be available at `http://localhost:8080`.

### Running the Frontend

```bash
cd frontend
npm install
npm start
```

The app will be available at `http://localhost:4200`.

## Database Seed Script

The file `backend/src/main/resources/import.sql` automatically populates the H2 database on startup with sample categories and items. This script is executed by Hibernate every time the application starts, since the database is in-memory.

The seed data includes 10 eco-friendly categories and 10 sample items across those categories.

## API Endpoints

### Categories

| Method | Endpoint           | Description           |
|--------|--------------------|-----------------------|
| GET    | `/api/categories`  | List all categories   |
| POST   | `/api/categories`  | Create a new category |

### Items

| Method | Endpoint     | Description      |
|--------|--------------|------------------|
| GET    | `/api/items` | List all items   |
| POST   | `/api/items` | Create a new item|

#### Create Item — Request Body Example

```json
{
  "itemName": "Solar Panel 20W",
  "itemQuantity": 15,
  "categoryId": 1
}
```

## H2 Console

With the application running, you can access the H2 database console at:

**http://localhost:8080/h2-console**

| Field     | Value                   |
|-----------|-------------------------|
| JDBC URL  | `jdbc:h2:mem:workshopdb`|
| User Name | `sa`                    |
| Password  | *(empty)*               |