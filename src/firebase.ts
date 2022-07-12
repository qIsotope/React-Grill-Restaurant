
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
<<<<<<< HEAD
=======
import { getStorage } from "firebase/storage";
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

<<<<<<< HEAD
const auth = getAuth(app);
=======
const auth = getAuth(app);

export const storage = getStorage(app);

>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
