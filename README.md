# Lynk

A small social media app with a React frontend and Express/MongoDB backend.

## Requirements

- Node.js 18 or newer
- MongoDB running locally, or a MongoDB connection string

## Run locally

1. In `social-media-backend`, copy `.env.example` to `.env` and set `MONGODB_URI` if needed.
2. From this directory, run `npm install` and `npm install --prefix social-media-backend`.
3. Run `npm start` to start the API on port 5000 and React on port 3000.

The frontend uses `REACT_APP_API_URL` when set, and otherwise calls `http://localhost:5000`.
To make a production frontend build, run `npm run build`.

## API

- `POST /signup` with `{ "name", "email", "password" }`
- `POST /login` with `{ "email", "password" }`

The API starts after it connects to MongoDB. Configure `MONGODB_URI` and `PORT` in the backend environment.
