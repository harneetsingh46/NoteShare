# NoteShare

NoteShare is a full-stack student notes sharing platform where students can
create, share, search, and manage academic notes.

## Features

- User registration and login
- JWT authentication
- HTTP-only cookie authentication
- Persistent authentication
- Protected routes
- Create notes
- View all notes
- View individual notes
- Update notes
- Delete notes
- Search notes
- Filter notes by subject
- Filter notes by semester
- Notes associated with their creator
- Responsive user interface

## Tech Stack

### Frontend

- React
- React Router
- Axios
- Tailwind CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt

## Project Structure

```text
NoteShare/
├── frontend/
│   ├── src/
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── package.json
│
├── .gitignore
└── README.md