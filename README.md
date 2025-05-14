# Final Project - Blog Web Application

## Project Overview

This web application is a blog website that allows users to create an account and blog posts with images.

---

## Main Features

- Account creation
- User authentication
- Create and edit blog posts with images
- Rich text editing with React Quill
- React + Vite frontend
- Backend API with Node.js and Express
- Database using MongoDB
- Mobile friendly design

---

## Technologies Used

### MERN Tech Stack

- **MongoDB**: NoSQL database for users, posts, and other information.
- **Express.js**: Backend framework for routes, APIs, and middleware.
- **React.js**: Frontend library for building the user interface.
- **Node.js**: JavaScript runtime for running Express.js.

### Other Technologies

- **CORS**: Enables communication between React frontend and Express backend.
- **Mongoose**: Connects and interacts with MongoDB using models.
- **JSON Web Tokens**: Handles user authentication by assigning tokens.
- **React Router DOM**: Handles navigation and routing in React apps.
- **bcryptjs**: Hashes passwords for secure storage.
- **cookie-parser**: Parses cookies attached to client requests.
- **multer**: Handles file uploads.
- **fs**: Reads and writes files on the server.
- **date-fns**: Provides customizable date and time formatting for blog posts.
- **react-quill**: Rich text editor for blog content.

---

## Setup Instructions

### Frontend Setup

1. `cd client`
2. `npm install`
3. `npm run dev`

*If the localhost is not working after running `npm run dev`, type `o` and press Enter to open in your web browser.*

### Backend Setup

1. `cd api`
2. `npm install`
3. `nodemon index.jsx`

---

## Folder Structure

Final-Project/
│
├── api/
│   ├── models/
│   │   ├── Post.js
│   │   └── User.js
│   └── index.jsx
│
└── client/
    └── src/
        ├── pages/
        │   ├── CreatePost.jsx
        │   ├── EditPost.jsx
        │   ├── HomePage.jsx
        │   ├── LoginPage.jsx
        │   ├── PostPage.jsx
        │   └── RegisterPage.jsx
        ├── App.css
        ├── App.jsx
        ├── Editor.jsx
        ├── Header.jsx
        ├── Layout.jsx
        ├── main.jsx
        ├── Post.jsx
        └── UserContext.jsx

The project is separated into **client** (frontend) and **api** (backend) folders.

---

## Code Explanation

### Backend

- **models/Post.js**: Contains the schema for blog posts.
- **models/User.js**: Contains the schema for users.
- **api/index.jsx**:
  - `app.use(...)`: Applies middleware for JSON parsing, CORS, static files, and cookies.
  - `mongoose.connect(...)`: Connects to MongoDB.
  - `app.post('/register', ...)`: Registers new users and hashes passwords.
  - `app.post('/login', ...)`: Authenticates users and returns a token if valid.
  - `app.get('/profile', ...)`: Returns user info based on the token.
  - `app.post('/logout', ...)`: Logs out the user by clearing the authentication token.
  - `uploadMiddleware.single('file')`: Accepts a single uploaded file from the client.
  - `app.post('/post', ...)`: Creates a new blog post.
  - `app.put('/post', ...)`: Updates an existing blog post.
  - `app.get('/post', ...)`: Retrieves the latest 20 blog posts.
  - `app.get('/post/:id', ...)`: Retrieves a specific blog post by ID.

### Frontend

#### src/pages/

- **CreatePost.jsx**: Allows logged-in users to create new blog posts with title, summary, cover image, and content. Uses `FormData` for file uploads and redirects to the homepage on success.
- **EditPost.jsx**: Allows users to edit existing blog posts. Uses `useParams()` to fetch and update a specific post.
- **HomePage.jsx**: Displays a list of blog posts fetched from the backend.
- **LoginPage.jsx**: Handles user login, sets user info in `UserContext`, and redirects on success.
- **RegisterPage.jsx**: Handles user registration, sends credentials to the backend, and provides feedback.
- **PostPage.jsx**: Displays a full blog post. Shows "Edit this post" button if the user is the author.

#### src/

- **App.jsx**: Handles routing for the application.
- **Editor.jsx**: Rich text editor component using React Quill.
- **Header.jsx**: Navigation bar. Uses `UserContext` to check login status and display appropriate links. Handles logout.
- **Layout.jsx**: Defines the main layout of the website.
- **main.jsx**: Entry point for rendering the app. Uses `StrictMode`, `createRoot`, and `BrowserRouter`.
- **Post.jsx**: Main post component used in `HomePage.jsx`.
- **UserContext.jsx**: React Context for managing user authentication information. Provides `userInfo` and `setUserInfo` to child components.

---

## Challenges Faced

- The tutorial was fast-paced and had a strong accent, making it challenging to follow at times.
- The video was outdated; `react-quill` was deprecated. I chose to use `react-quill-new` (community-maintained) for compatibility.
- Debugged typos and missing variables from the tutorial.
- The tutorial did not include a delete post function.

---

## Future Improvements

- Add a moderator page for managing posts.
- Implement a delete post function.
- Improve the design for a more visually appealing interface.

---

## Screenshots

- Homepage
- Login Page
- Register Page
- Post Page
- Create a Post Page
- Update a Post Page

**Others:**
