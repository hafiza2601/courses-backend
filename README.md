# Educational Content API

This is a RESTful API for managing educational content such as courses and lessons. Built with Node.js, Express, and MongoDB, this API supports CRUD operations, search functionality, and implements basic security and performance optimizations.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
  - [Courses](#courses)
  - [Lessons](#lessons)
- [Data Models](#data-models)
- [License](#license)

## Features

- Create, Read, Update, and Delete (CRUD) operations for courses and lessons.
- Search functionality based on keywords for both courses and lessons
- Input validation and error handling.
- Protection against common web vulnerabilities.

## Technologies Used

- **Node.js**: JavaScript runtime for building the API.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: ODM library for MongoDB and Node.js.
- **dotenv**: Module for loading environment variables.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing.
- **express-validator**: Middleware for validating request data

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB (local or cloud instance)
- Git

### Installation

Follow the instructions below to set up and run the project on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/hafiza2601/courses-backend.git
cd courses-backend
```

### 2. Install the Dependencies

```bash
npm install
```

### 3. Create a `.env` File

Create a `.env` file in the root directory by copying the `.env.example` file.

```bash
cp .env.example .env
```

### 4. Start the Server

```bash
npm start
```

The server will start running on the port specified in your `.env` file.

## API Endpoints

### Courses

#### Create a Course

- **Endpoint**: `POST /api/courses`
- **Request Body**:
  ```json
  {
    "title": "Course Title",
    "description": "Course Description"
  }
  ```

#### Get All Courses

- **Endpoint**: `GET /api/courses`

#### Get a Course by ID

- **Endpoint**: `GET /api/courses/:id`

#### Update a Course

- **Endpoint**: `PUT /api/courses/:id`
- **Request Body**:
  ```json
  {
    "title": "Updated Title",
    "description": "Updated Description"
  }
  ```

#### Delete a Course

- **Endpoint**: `DELETE /api/courses/:id`
