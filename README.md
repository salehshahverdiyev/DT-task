# Country Info API

This is a REST API built with Express.js and Sequelize, providing information about countries and allowing users to manage holiday calendars.

## Features
- Fetch country information
- Manage holiday calendars
- PostgreSQL database integration

## Technologies Used
- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM
- TypeScript
- dotenv

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/salehshahverdiyev/DT-task
   cd DT-task
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and configure the database connection:
   ```env
   PORT=3000
   DATABASE_URL="postgres://postgres:yourpassword@localhost:5432/country_info_db"
   DB_NAME="country_info_db"
   DB_USER="postgres"
   DB_PASSWORD="yourpassword"
   DB_HOST="localhost"
   ```

4. Run the application:
   ```bash
   npm run dev
   ```

## API Endpoints

### Country Routes
- **GET /api/countries** - This endpoint should return a list of available countries.
- **GET /api/country/:code** - This endpoint should provide the following data: List of Border Countries, Population Data, Flag URL

### Calendar Routes
- **POST /api/users/:userId/calendar/holidays** - Add holidays to a user's calendar
- For testing just use random userID, because I didn't create a User model.
  
#### Request Body Example:
```json
{
  "countryCode": "US",
  "year": 2024,
  "holidays": [
    { "name": "New Year's Day", "date": "2024-01-01" },
    { "name": "Independence Day", "date": "2024-07-04" }
  ]
}
```