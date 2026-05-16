# Backend — Workshop Avanade Fullstack

Spring Boot REST API for the eco-friendly product inventory manager.

## Tech Stack

- **Java 21**
- **Spring Boot 4.0.6**
- **Spring Data JPA** (Hibernate 7)
- **H2 Database** (in-memory)
- **Lombok**
- **Gradle 9.4.1**
- **springdoc-openapi 2.8.6** (Swagger UI)

## Project Structure

```
src/main/java/com/workshop/fullstack/
├── config/
│   └── CorsConfig.java         # CORS configuration (allows localhost:4200)
├── controllers/
│   ├── CategoryController.java
│   └── ItemController.java
├── models/
│   ├── Category.java
│   └── Item.java
├── repositories/
│   ├── CategoryRepository.java
│   └── ItemRepository.java
├── services/
│   ├── CategoryService.java
│   └── ItemService.java
└── Application.java

src/main/resources/
├── application.properties
└── import.sql                  # Database seed script
```

## Running

```bash
chmod +x gradlew
./gradlew bootRun
```

API available at `http://localhost:8080`.

## Database Seed Script

`src/main/resources/import.sql` is executed automatically by Hibernate on every startup. It populates the in-memory H2 database with:

- 10 eco-friendly categories
- 10 sample items across those categories

## API Endpoints

### Categories

| Method | Endpoint          | Description           |
|--------|-------------------|-----------------------|
| GET    | `/api/categories` | List all categories   |
| POST   | `/api/categories` | Create a new category |

### Items

| Method | Endpoint     | Description       |
|--------|--------------|-------------------|
| GET    | `/api/items` | List all items    |
| POST   | `/api/items` | Create a new item |

#### Create Item — Request Body

```json
{
  "itemName": "Solar Panel 20W",
  "itemQuantity": 15,
  "categoryId": 1
}
```

#### Get Items — Response Format

```json
[
  {
    "itemId": 1,
    "itemName": "Painel Solar Portátil 20W",
    "itemQuantity": 15,
    "category": {
      "categoryId": 1,
      "categoryName": "Energia Renovável"
    }
  }
]
```

## H2 Console

With the application running, access the H2 database console at:

**http://localhost:8080/h2-console**

| Field     | Value                    |
|-----------|--------------------------|
| JDBC URL  | `jdbc:h2:mem:workshopdb` |
| User Name | `sa`                     |
| Password  | *(empty)*                |

## Swagger UI

With the application running, access the interactive API documentation at:

**http://localhost:8080/swagger-ui/index.html**
