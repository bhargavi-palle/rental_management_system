# Property Rental Management System

A full-stack web application for managing rental properties, tenants, rent payments, maintenance requests, and user activities through a centralized platform.

## 🌐 Live Demo

**Frontend:**  
https://rental-management-system-phi.vercel.app

**Backend API:**  
https://rental-management-backend.onrender.com

**GitHub Repository:**  
https://github.com/bhargavi-palle/rental_management_system

---

## 📌 Project Overview

The Property Rental Management System is a MERN-based web application designed to simplify property rental management.

The system provides separate functionality for users to register and log in, manage rental properties, view available properties, handle rental payments, submit maintenance requests, and manage their profile.

The application follows a full-stack architecture where the React frontend communicates with a Node.js and Express backend, while MongoDB Atlas is used for storing application data.

---

## ✨ Features

### 🔐 User Authentication
- User registration
- User login
- Secure password hashing using bcrypt
- JWT-based authentication
- Protected routes
- Logout functionality

### 🏠 Property Management
- Add rental properties
- View available properties
- Edit property details
- Manage property information
- View rental properties through the dashboard

### 💰 Rent Payment Management
- Manage rent payment information
- View rent payment details
- Track rental payment-related information

### 🔧 Maintenance Management
- Submit maintenance requests
- View maintenance requests
- Manage maintenance-related information

### 👤 User Profile
- View user profile
- Manage user-related information

### 📊 Dashboard
- Centralized dashboard
- Access property management features
- Access rental and payment information
- Access maintenance requests

### 🛡️ Protected Routes
Authenticated users can access protected application pages using JWT-based authorization.

---

## 🛠️ Technologies Used

### Frontend

- React.js
- Vite
- JavaScript
- HTML5
- CSS3
- React Router

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- CORS
- dotenv

### Deployment

- Vercel — Frontend
- Render — Backend
- MongoDB Atlas — Database

---

## 📁 Project Structure

```text
Property_Rental_Management/
│
├── frontend/
│   ├── public/
│   │   ├── favicon.svg
│   │   └── icons.svg
│   │
│   ├── src/
│   │   ├── assets/
│   │   │   ├── hero.png
│   │   │   ├── property.png
│   │   │   ├── react.svg
│   │   │   └── vite.svg
│   │   │
│   │   ├── components/
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── Sidebar.jsx
│   │   │
│   │   ├── layouts/
│   │   │   └── DashboardLayout.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── AddProperty.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── EditProperty.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Maintenance.jsx
│   │   │   ├── MyRental.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── RentPayments.jsx
│   │   │   └── ViewProperties.jsx
│   │   │
│   │   ├── services/
│   │   │   ├── propertyApi.js
│   │   │   └── propertyService.js
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── Home.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── index.html
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md