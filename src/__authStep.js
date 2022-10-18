/*
Auth Setup
==========
1. create firebase project
2. enable web
3. enable sign in method
4. install firebase
5. get firebase cofiq in your firebase.confiq.js file
export file from firebase.confiq.js file

Create UserContext (Auth Context): UserContext --> component name, userContext provides AuthContext

2. Create AuthContext
3. set AuthContext.Provider
4. Make sure you set the children
5. export AuthContext to be used inside useContext hook
6. get form data.
7. getAuth in the user context


Firebase Hosting
=================
// One time for each computer
================================
1. We have to install global npm in our machine or device:
 npm install -g firebase-tools.
2. firebase login

//One time for each project
===========================
1. firebase init
Make sure: for public directory: you select: build
single page application: y

//for every deploy 
===================
1. npm run build
2. firebase deploy
3.

*/