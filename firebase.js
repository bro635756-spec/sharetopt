import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAFtCQjGACAmoOSEIazC648I1BaLPkT8-U",
    authDomain: "share-your-thoughts-e15a7.firebaseapp.com",
    databaseURL: "https://share-your-thoughts-e15a7-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "share-your-thoughts-e15a7",
    storageBucket: "share-your-thoughts-e15a7.firebasestorage.app",
    messagingSenderId: "102377464042",
    appId: "1:102377464042:web:78864708767905d41f77d3"
};

// Firebase'i başlat
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
