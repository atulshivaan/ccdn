Dashboard Application


Overview
This is a Dashboard Application built with React, React Router, Vite, Tailwind CSS, and WebSocket for real-time communication. The app includes various features like user authentication, a protected route system, user management, and a dashboard with data visualization (using Recharts).

The application allows users to login, signup, and view a dashboard that displays user statistics. The dashboard is protected, meaning only authenticated users can access the main dashboard and its features.

Features:
Authentication: Login and Signup flow with basic form validation.

Protected Routes: Only authenticated users can access the dashboard and other protected routes.

User Management: Features to view, add, edit, delete, and view detailed profiles of users.

Dashboard: Displays user statistics and graphs for better visualization.

WebSocket: Real-time communication to handle updates (though still under development).

Table of Contents

Technologies Used

Project Setup

Features

Directory Structure

Authentication Flow

WebSocket Integration

Troubleshooting

Future Enhancements

Technologies Used
React: Frontend framework.

React Router: For routing and navigation.

Tailwind CSS: Utility-first CSS framework for styling.

Vite: A fast build tool and development server.

Recharts: Data visualization library for displaying graphs.

WebSocket: For real-time communication (currently under implementation).

Axios: For making API requests.

React Toastify: For displaying toast messages.

Project Setup
Prerequisites
Ensure that you have the following installed:

Node.js (version 18+)

npm (or Yarn)

Vite for fast build and development

Installation
Clone the repository:

bash


git clone <repository-url>
cd <project-folder>
Install dependencies:

bash


npm install
Run the development server:

bash


npm run dev
Open the app in your browser:

bash


http://localhost:3000
Features
Authentication
Signup: Users can create an account.

Login: Users can log in with their credentials.

Protected Routes: Certain routes (e.g., dashboard, profile) require authentication. Unauthenticated users are redirected to the Landing Page.

User Management
Home: Displays a dashboard with user statistics.

Users Page: Displays a list of users with options to edit, delete, or view detailed profiles.

Add/Edit/Delete User: Manage users with forms for creating, editing, and deleting user data.

Dashboard
Data Display: Shows statistics like total users, active users, new signups, and revenue.

Charts: Displays a bar chart with monthly user statistics.

Directory Structure
bash


src/
├── assets/                   # Static assets (e.g., images, icons)
├── components/               # Reusable components (e.g., Navbar, Sidebar, etc.)
├── pages/                    # All page components
│   ├── Home.js               # Dashboard/Home Page
│   ├── Users.js              # Users management page
│   ├── Login.js              # Login page
│   ├── Signup.js             # Signup page
│   ├── Profile.js            # Profile page
│   ├── Settings.js           # Settings page
│   ├── UserDetails.js        # User details page
│   └── LandingPage.js        # Landing page
├── crud/                     # CRUD operations (add, edit, delete users)
├── App.js                    # Main entry file for routing and layout
└── index.css                 # Tailwind CSS imports and global styles
Authentication Flow
Landing Page: This page contains two options for users — Login and Signup.

Login: Users can log in with their credentials.

Signup: Users can create a new account by providing their name, email, and password.

Protected Routes: Once authenticated, users can access the Dashboard and other protected routes.

WebSocket: WebSocket is used for real-time communication (currently under development).

WebSocket Integration
WebSocket is used to establish real-time communication, allowing the dashboard to update live data. The WebSocket connection is established based on the user's authentication token and the configured port.

Example WebSocket connection:

js


const socketUrl = `ws://localhost:${socketPort}/?token=${userToken}`;
const socket = new WebSocket(socketUrl);
Issues:
Currently working on fixing WebSocket URL construction.

Ensure proper authentication is passed as a token in WebSocket URL.

Troubleshooting
Blank Screen: If you see a blank screen, make sure to check the browser console for errors related to WebSocket or routing issues.

CSP Error (Content Security Policy): If you're facing issues related to eval being blocked, make sure your vite.config.js is properly set up, and you're using an appropriate plugin or loader for WebSocket.

Router Error: Ensure that only one <BrowserRouter> is used to wrap your entire app. Nested Routers can cause issues.

Future Enhancements
WebSocket Real-time Updates: Improve real-time updates using WebSockets to handle user-related changes on the fly.

Chart Data: Integrate dynamic data for charts and graphs, including more sophisticated analytics.

User Roles: Implement roles (e.g., admin, user) for access control.

API Backend: Connect to a backend API to persist user data and other information (MongoDB, Express).
