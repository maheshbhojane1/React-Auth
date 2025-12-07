React Firebase Authentication – Login & Signup System

A simple and clean authentication system built using React, Firebase Authentication, and Firestore.
This project was created as an interview assignment to demonstrate skills in:

✅ Frontend development
✅ React Hooks
✅ Firebase services
✅ Secure user authentication
✅ Firestore user management
✅ Clean UI + Routing
✅ Error handling + Toast notifications

Routing

/signup → Create new account

/login → User login page

/profile → Protected profile screen

⚡ React + Firebase Hooks

useState, useEffect

onAuthStateChanged

Real-time authentication state listener

🎉 Toast Notifications

Success toast on signup


src/
│── components/
│    ├── signup.jsx
│    ├── login.jsx
│    ├── profile.jsx
│    └── firebase.js
│
├── App.js
├── App.css
└── index.js

Authentication Flow Explanation
1. User signs up

Firebase creates a user account

Firestore saves user details

Toast shows “User Registered Successfully”

2. User logs in

Firebase verifies credentials

Toast shows “User Logged In”

User is redirected to /profile

3. Profile page loads

A real-time auth listener checks logged-in user

Firestore fetches user details

Displays “Welcome, FirstName”, LastName”, "Email"

Success toast on login

Error toast on invalid inputs
