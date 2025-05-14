# Project Overview

This web application is a blog website that allows users to create an account and blog post with images.

**Main Features:**

* Account creation
* User Authentication
* Create and edit blog posts with images
* React Quill text editor
* React + Vite Frontend
* Backend API with Node.js and Express
* Database using MongoDB

**Technologies Used**

Here are the technologies that I used in the application:

**MERN Tech stack:**

```
MongoDB: A NoSQL database used to store the users, posts, and other information.
Express.js: Backend framework that handles the routes, APIs, and the middleware
React.js: A frontend library for building the user interface and interactive components
Node.js: Javascript runtime that runs Express.js
```

**Other technologies used:**

* CORS: Enables communications between the React Frontend and the Express Backend
* Mongoose: Connects and interacts to MongoDB using models
* JSON Web Tokens: Handles user authentication by assigning tokens
* React Router DOM: Handles user navigation and routing in react apps
* Bcryptjs: Hashes passwords for storage
* Cookie parser: Parses cookies attached to client requests
* Multer: Handles file uploads
* Fs: Handles the reading and writing of files on the server
* Date-fns: Provides customizable date and time for blog posts
* React Quill: A simple text editor

**Setup Instructions**

## Frontend Setup

1. cd client
2. npm install
3. npm run dev

*if the localhost is not working, while running “npm run dev”, type “o” and press enter to open in web browser

##Backend Setup: 

1. cd api
2. npm install
3. nodemon index.jsx

**Folder Structure**

**Final-Project/**

|--**api/**

**|     |--models/**

**|     |        |--Post.js**

**|     |        |--User.js**

**|     |--index.jsx**

|--**client/**

**|     |--src/**

**|     |     |--pages/**

**|     |     |     |--CreatePost.jsx**

**|     |     |     |--EditPost.jsx**

**|     |     |     |--HomePage.jsx**

**|     |     |     |--LoginPage.jsx**

**|     |     |     |--PostPage.jsx**

**|     |     |     |--RegisterPage.jsx**

**|     |     |--App.css**

**|     |     |--App.jsx**

**|     |     |--Editor.jsx**

**|     |     |--Header.jsx**

**|     |     |--Layout.jsx**

**|     |     |--main.jsx**

**|     |     |--Post.Jsx**

**|     |     |--UserContext.jsx**

This is the main folder structure of my project. It is mainly separated into the **client**and **api**folders. The **client** is the frontend while the **api** is the backend of the project.

**Code Explanation**

**BACKEND**:

**models/**

**Post.js**- Contains the schema for the Post

**User.js**- Contains the schema for the User

### api/Index.js

* app.use(...): Applies middleware to parse JSON, handles CORS, static files, and parse cookies.

* mongoose.connect(...): Connects the server to the MongoDB database

* app.post(‘/register’, …): Registers new user and hashes the password

* app.post('/login', ...): Authenticates user, and returns a token if valid

* app.get('/profile', ...): Returns user info based on the token

* app.post('/logout', ...): Logs out the user by clearing the authentication token.

* uploadMiddleware.single('file'): Accepts a single uploaded file from the client

* app.post('/post', ...): Creates a new blog post.

* app.put('/post', ...): Updates an existing blog post

* app.get('/post', ...): Retrieves the latest 20 blog posts from the database.

* app.get('/post/:id', ...): Retrieves a specific blog post by its ID.

**FRONTEND:**

**src/pages/**

1. CreatePost.jsx

* Allows the logged in user to create a new blog post that consists of a title, summary, cover image, and the main content of the post.
* Stores form inputs
* **redirect** acts as a flag to navigate the user to the homepage after successful post creation
* Uses **FormData**to include text fields + file uploads
* **files[0]** selects the first file the user uploaded
* it then sends the form data to the backend
* **credentials: ‘include’** allows cookies like JWT token to be sent with the request
* if the server responds with success, the user is redirected to the homepage
* Each input is sent to the functions above
* **Editor** is a separate **jsx** file with the text editor

2. EditPost.jsx

* Allows the user to edit the blog post
* Almost uses the same code as **CreatePost.jsx**with some additions
* **UseParams()**: retrieves the post id from the URL
* Used to fetch and update a specific post
* Automatically loads the content of the blog post

3. HomePage.jsx

* Displays the list of blog posts from the backend on the homepage

**Challenges Faced**

* It was mostly following the tutorial. The person was speaking a little bit fast plus the accent made it somewhat difficult to understand but I managed to understand him.
* Since the video was made 3 years ago, react-quill was depreciated. This means that I need to either: (1) downgrade my react so it was compatible with react-quill, (2) use react-quill-new which is the fan updated version of react-quill made by the community, or (3) find another alternative to react-quill. I chose option 2 since it was easier to implement and I got to follow the tutorial. There were also typos and missing variables that I missed while following the tutorial but managed to debug it.
* Since I followed the tutorial, the tutorial did not include a delete post function.

**Future Improvements**

* A mod page for moderators to manage posts.
* A delete post function
* Better design as the webpage looks bland

**Screenshots Include**

* Others: Include photos of you and/or you partner while doing your code

[https://youtu.be/xKs2IZZya7c?si=PWKhlMY1v7G-3zff](https://youtu.be/xKs2IZZya7c?si=PWKhlMY1v7G-3zff)

Last progress 1:52:17 - 05/04/25
