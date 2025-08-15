# MERN Notes Application

This project is a simple note-taking app built with the MERN stack. The backend uses Node.js/Express and MongoDB, and the frontend is built with React.

## Setup

### 1. Clone the Repository

```
git clone <repo-url>
cd MERN-APPLICATIONS
```

### 2. Backend Setup

```
cd backend
npm install
```

#### Environment Variables

- Create a `.env` file in the backend folder and add the following:

```
MONGO_URI=your_mongodb_connection_string
PORT=5002
```

#### Start the Backend

```
npm run dev
```

### 3. Frontend Setup

```
cd ../frontend
npm install
```

#### Start the Frontend

```
npm run dev
```

## Usage

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend API: [http://localhost:5002/api/notes](http://localhost:5002/api/notes)

### Features

- Add, delete, update, and list notes
- Rate limiting and CORS protection
- Error and loading states

## Common Issues

- **404 Not Found:** The note does not exist in the database or the backend endpoint is missing.
- **CORS Error:** Check CORS settings if frontend and backend are on different ports.
- **MongoDB Connection Error:** Make sure your MONGO_URI is correct and accessible.

## Contributing

Pull requests and issues are welcome.

---

If you have any problems, please share your code and error details so we can help!
