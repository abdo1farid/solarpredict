import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC6v-CBxSXW4R-TGOO0KWMoyemORNsUoRs",
    authDomain: "solarpredict-b8c25.firebaseapp.com",
    projectId: "solarpredict-b8c25",
    storageBucket: "solarpredict-b8c25.appspot.com",
    messagingSenderId: "261373414790",
    appId: "1:261373414790:web:3ed228c8e7d09de9a680c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);