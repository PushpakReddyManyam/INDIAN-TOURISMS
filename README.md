# MERN Stack Tourism Web Application

A beautiful, simple, and responsive tourism application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). 
This project was designed to be beginner-friendly for college students, while featuring a highly modern and aesthetic UI.

## Project Structure

```
final project/
│
├── backend/            # Express.js Server
│   ├── models/         # Mongoose Schemas (Place.js)
│   ├── routes/         # API Endpoints (places.js)
│   ├── .env            # Environment configurations
│   ├── server.js       # Main entry point for the backend
│   └── package.json    # Backend dependencies
│
└── frontend/           # React.js application
    ├── src/            
    │   ├── components/ # Header.jsx, PlaceCard.jsx
    │   ├── App.css     # General UI Styles
    │   ├── index.css   # Premium global aesthetic styles
    │   └── App.jsx     # Main Application Component
    └── package.json    # Frontend dependencies
```

## Features
- **Modern UI**: Dark mode, glassmorphism, smooth animations.
- **RESTful API**: Supports fetching (`GET`) and adding (`POST`) places.
- **Responsive**: Adjusts automatically to mobile and desktop screens.

## Setup Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/try/download/community) installed and running locally on port 27017 (or a MongoDB Atlas URI string)

### 1. Backend Setup
1. Open a terminal and navigate to the `backend/` directory:
   ```bash
   cd backend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Ensure MongoDB is running. If you are using a custom MongoDB URI, update the `.env` file in the `backend` folder.
4. Start the server:
   ```bash
   node server.js
   ```
   *The server should run on `http://localhost:5000`.*

### 2. Frontend Setup
1. Open a new terminal and navigate to the `frontend/` directory:
   ```bash
   cd frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   *The React app should open in your default browser at `http://localhost:5173`.*

## Adding Data
Use **Postman** to add places to the database via the POST API. Refer to the `Postman_Sample_Requests.md` file for example requests.
