import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdYwIY3YlBIjsMzK46jyqsQNobmNAktwg",
    authDomain: "crwn-db-81e43.firebaseapp.com",
    projectId: "crwn-db-81e43",
    storageBucket: "crwn-db-81e43.appspot.com",
    messagingSenderId: "7381288828",
    appId: "1:7381288828:web:d0f18f571ca71153fa86f9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);