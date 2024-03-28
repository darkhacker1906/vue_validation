import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAuGeGqqrtZtg8uRX_1kh9u3YVpDLUIipM",
  authDomain: "vue-validation-20821.firebaseapp.com",
  projectId: "vue-validation-20821",
  storageBucket: "vue-validation-20821.appspot.com",
  messagingSenderId: "935751882425",
  appId: "1:935751882425:web:2d0020f0905d5e8eb9ed68"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const signOut = () => auth.signOut(); 
export { app, auth, signOut };