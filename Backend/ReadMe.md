# Backend Project

This is a backend project built with ASP.NET Core and SQL Server.

## Prerequisites

- .NET 6.0 SDK or later
- SQL Server or PostgreSQL
- Visual Studio or JetBrains Rider

## Getting Started

1. Clone the repository:
    ```sh
    git clone https://github.com/YourUsername/YourRepository.git
    cd YourRepository
    ```

2. Update the connection strings in `appsettings.json`:
    ```json
    {
      "ConnectionStrings": {
        "DefaultConnection": "Your SQL Server connection string",
        "PostgresConnection": "Your PostgreSQL connection string"
      }
    }
    ```

3. Run the database migrations:
    ```sh
    dotnet ef database update
    ```

4. Build and run the project:
    ```sh
    dotnet run
    ```

## API Endpoints

- `GET /api/questions` - Get all questions
- `GET /api/questions/unanswered` - Get unanswered questions
- `GET /api/questions/{questionId}` - Get a specific question by ID

## Technologies Used

- ASP.NET Core
- Entity Framework Core
- SQL Server / PostgreSQL
- Swagger

## License

This project is licensed under the MIT License.