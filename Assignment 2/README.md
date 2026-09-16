# Student Management REST API

A simple REST API built with **Node.js** and **Express.js** to manage student records
using in-memory array/JSON data (no database). Built for Web Dev III – Unit 2, Lab Assignment 2.

## Project Structure

```
student-management-api/
├── app.js
├── package.json
├── routes/
│   └── studentRoutes.js
├── middleware/
│   └── logger.js
└── data/
    └── students.js
```

## Setup & Run

```bash
npm install
npm start
```

Server runs at: `http://localhost:3000`

For auto-restart during development:
```bash
npm run dev
```

## API Endpoints

| Method | Endpoint        | Description              | Success Status |
|--------|-----------------|---------------------------|-----------------|
| GET    | /students       | Get all students          | 200             |
| GET    | /students/:id   | Get a single student      | 200             |
| POST   | /students       | Create a new student      | 201             |
| PUT    | /students/:id   | Update an existing student| 200             |
| DELETE | /students/:id   | Delete a student          | 200             |

### Error Status Codes
- `400 Bad Request` – invalid ID or missing/invalid fields in body
- `404 Not Found` – student or route does not exist
- `500 Internal Server Error` – unexpected server error

## Sample Request Bodies

**POST /students**
```json
{
  "name": "Sneha Patel",
  "age": 22,
  "course": "MCA"
}
```

**PUT /students/1**
```json
{
  "name": "Aarav Sharma",
  "age": 21,
  "course": "B.Tech CSE (Updated)"
}
```

## Testing with Postman

1. Open Postman and create a new Collection called `Student Management API`.
2. Add requests for each endpoint above, e.g.:
   - `GET http://localhost:3000/students`
   - `GET http://localhost:3000/students/1`
   - `POST http://localhost:3000/students` (Body → raw → JSON, use sample above)
   - `PUT http://localhost:3000/students/1` (Body → raw → JSON)
   - `DELETE http://localhost:3000/students/1`
3. For POST/PUT, go to the **Body** tab → select **raw** → choose **JSON** from the dropdown,
   and paste a sample body.
4. Send each request and confirm the status code and JSON response match the table above.
5. Check your terminal — the custom logger middleware will print each request
   (method, URL, timestamp) as it comes in.

## Notes
- Data is stored **in memory** (an array in `data/students.js`) and resets whenever the server restarts, as required (no database/Mongoose used).
- Routing is modularized via `express.Router()` in `routes/studentRoutes.js`.
- A custom logger middleware (`middleware/logger.js`) logs every incoming request.
