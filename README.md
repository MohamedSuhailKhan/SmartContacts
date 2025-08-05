# Smart Contacts - Full Stack Application

This is a full-stack application for managing contact lens prescriptions. The frontend is built with React and Vite, and the backend is a Node.js/Express server with a MongoDB database.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or higher)
- [Docker](https://www.docker.com/get-started)

### Running the Application

The entire application (frontend, backend, and database) can be run using Docker Compose.

1.  **Build and run the services:**

    ```bash
    sudo docker compose up --build -d
    ```

    This will start the following services:
    -   `frontend`: The React application, accessible at `http://localhost:3000`
    -   `backend`: The Node.js API server, accessible at `http://localhost:3001`
    -   `mongo`: The MongoDB database

2.  **Seed the database:**

    To populate the database with initial product and admin data, run the following command:

    ```bash
    sudo docker compose run --rm backend node seeder.js
    ```

    The default admin credentials are:
    -   **Username:** `admin`
    -   **Password:** `password123`

### Development

If you want to run the frontend and backend separately for development:

#### Frontend

1.  Navigate to the root directory.
2.  Run `npm install`
3.  Run `npm run dev`

The frontend will be available at `http://localhost:3000`.

#### Backend

1.  Navigate to the `backend` directory.
2.  Make sure you have a `.env` file with the `MONGO_URI` and `JWT_SECRET`.
3.  Run `npm install`
4.  Run `npm run dev`

The backend server will start on port 3001.
