# Full Stack Project

This is a full stack project with a backend built using ASP.NET Core and SQL Server, and a frontend built using React and Redux.

## Prerequisites

- .NET 6.0 SDK or later
- SQL Server or PostgreSQL
- Node.js and npm
- Visual Studio or JetBrains Rider

## Getting Started

### Backend

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

4. Build and run the backend project:
    ```sh
    dotnet run
    ```

### Frontend

1. Navigate to the `frontend` directory:
    ```sh
    cd frontend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm start
    ```

## Docker Compose

You can also run the entire project using Docker Compose. Ensure Docker and Docker Compose are installed on your machine, then run the following command in the root of your project directory:

```sh
docker-compose up
```


## API Routes - Backend
GET /api/questions - Get all questions  
GET /api/questions/unanswered - Get unanswered questions  
GET /api/questions/{questionId} - Get a specific question by ID  

## API Routes - Fronted
/ - Home page  
/questions - List of questions  
/questions/{questionId} - Question details page  
/ask - Ask a new question  


## Backend  
ASP.NET Core  
Entity Framework Core  
SQL Server / PostgreSQL  
Swagger  

## Frontend  
React  
Redux  
Axios  


## Questions
This is an older learning project I wrote (Not usefull for anything except to be used as a personal reference)
