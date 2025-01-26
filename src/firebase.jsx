// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDsgwjwUu8KvN6OGEITvtgVn7JOF6Cpc0k",
    authDomain: "star-ships-89d5f.firebaseapp.com",
    projectId: "star-ships-89d5f",
    storageBucket: "star-ships-89d5f.firebasestorage.app",
    messagingSenderId: "1058870699431",
    appId: "1:1058870699431:web:a93c9e2cbab0e04abcc282",
    measurementId: "G-VQWXYNN695"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firebase services
export const auth = getAuth(app);
export default app;

