# Mern-JWT-Authentication
This is a starter app for a MERN stack application with authentication.This is for a SPA (Single Page Application) workflow that uses the [Vite](https://vitejs.dev/guide/) Build tool.

![readme](https://github.com/Vysint/Mern-JWT-Authentication/assets/109030133/5ed06d8c-80e3-4b34-9da9-3a4f34e449de)

It includes the following:
- Backend API with Express & MongoDB
- Routes for auth, logout,register/signup,profile, update profile
- JWT Authentication stored in HTTP-only cookie
- Protected routes and endpoints
- Custom middleware to check JSON web token and store in cookie
- Custom error middleware
- React frontend to register/signup, login,logout, view Profile and update Profile

# Usage
- Create a MongoDB database and obtain your `MongoDB URI`-[MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)

## Env Variables
Rename the `.env.example` file to `.env` and add the following

```
NODE_ENV = development
PORT=5000
MONGO_URI=your mongodb uri
JWT_SECRET='yoursecretkey'
```
Change the `JWT_SECRET` to what you want

### Install Dependencies (client/frontend and server/backend)
```
cd client/frontend
npm install
```

#### Run

```
#Run client/frontend (:3000) & server/backend (:5000)
npm run dev

#Run backend only
npm run server
```
# Build and Deploy
```
#Create client/frontend prod build
cd client
npm run build
```
