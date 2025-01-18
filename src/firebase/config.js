import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBuTTWNArzt_XqBDYJ3oukoD_lCR7DWfxI",
    authDomain: "proyecto-tienda-db.firebaseapp.com",
    projectId: "proyecto-tienda-db",
    storageBucket: "proyecto-tienda-db.appspot.com",
    messagingSenderId: "914196092733",
    appId: "1:914196092733:web:0be860b66737d067785754",
    measurementId: "G-SYCBWYKPV0"
};

// Inicializamos Firebase
export const app = initializeApp(firebaseConfig);

// Inicializamos Firestore
export const db = getFirestore(app);
