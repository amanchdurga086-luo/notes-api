# 📝 Notes API

A production-oriented RESTful Notes API built using **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**. This project demonstrates clean backend architecture by implementing the **MVC Pattern**, **Service Layer**, centralized error handling, request validation, and REST API best practices.

---

## 🚀 Features

- ✨ Create, Read, Update, and Delete (CRUD) Notes
- 🏗️ MVC (Model-View-Controller) Architecture
- 📂 Service Layer Architecture
- 📦 MongoDB Database Integration
- 📝 Request Validation
- ⚠️ Centralized Error Handling
- 🔄 Async Error Handling
- 📄 Custom API Response Structure
- ❌ Custom API Error Handling
- 🌍 Environment Variable Configuration
- 📬 RESTful API Design
- 🧪 API Testing with Postman
- 🔒 Security Middleware (Helmet, CORS, Rate Limiting)
- 📊 Request Logging using Morgan

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Tools
- Postman
- Git
- GitHub
- Nodemon
- dotenv

---

## 📁 Project Structure

```text
Notes-API/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── noteController.js
│
├── middleware/
│   ├── asyncHandler.js
│   ├── errorHandler.js
│   └── validateNote.js
│
├── models/
│   └── Note.js
│
├── routes/
│   └── noteRoutes.js
│
├── services/
│   └── noteService.js
│
├── utils/
│   ├── ApiError.js
│   ├── ApiResponse.js
│   └── validateObjectId.js
│
├── app.js
├── server.js
├── package.json
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

Go to project directory

```bash
cd YOUR_REPOSITORY
```

Install dependencies

```bash
npm install
```

---

## Configure Environment Variables

Create a `.env` file in the project root.

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string
```

---

## Run the Project

Development Mode

```bash
npm run dev
```

Production Mode

```bash
npm start
```

Server will run at

```
http://localhost:3000
```

---

# 📌 API Endpoints

## Create Note

```http
POST /notes
```

### Request Body

```json
{
    "title": "Learn Node.js",
    "content": "Complete Express and MongoDB tutorial."
}
```

---

## Get All Notes

```http
GET /notes
```

---

## Get Note By ID

```http
GET /notes/:id
```

---

## Update Note

```http
PUT /notes/:id
```

### Request Body

```json
{
    "title": "Updated Title",
    "content": "Updated Content"
}
```

---

## Delete Note

```http
DELETE /notes/:id
```

---

# 📄 Sample API Response

```json
{
    "success": true,
    "message": "Note created successfully",
    "data": {
        "_id": "...",
        "title": "Learn Node.js",
        "content": "Complete Express tutorial."
    }
}
```

---

# ❌ Sample Error Response

```json
{
    "success": false,
    "message": "Note not found"
}
```

---

# 🧠 Concepts Implemented

- REST API
- CRUD Operations
- MVC Architecture
- Service Layer
- Express Middleware
- Environment Variables
- MongoDB Integration
- Mongoose ODM
- Request Validation
- Global Error Handling
- Custom Error Classes
- Async Error Handling
- API Response Standardization
- Security Middleware
- Logging

---

# 🔒 Security Features

- Helmet
- CORS
- Express Rate Limiter
- Environment Variables

---

# 📊 Logging

Implemented request logging using **Morgan** to monitor incoming HTTP requests during development.

---

# 🧪 Testing

The API has been tested using **Postman**.

---

# 🚀 Future Improvements

- JWT Authentication
- User Registration & Login
- Password Hashing (bcrypt)
- Authorization
- Refresh Tokens
- MongoDB Atlas Deployment
- Swagger API Documentation
- Docker Support
- Unit Testing
- CI/CD Pipeline