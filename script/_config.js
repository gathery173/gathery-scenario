import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getDatabase, ref, set, push, onValue, update, remove, get } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnIGTQ1rt_6tSMXGUDLcX3WkZggMKcec0",
    authDomain: "gathery-53f8c.firebaseapp.com",
    databaseURL: "https://gathery-53f8c-default-rtdb.firebaseio.com",
    projectId: "gathery-53f8c",
    storageBucket: "gathery-53f8c.appspot.com",
    messagingSenderId: "149464461222",
    appId: "1:149464461222:web:038bae0c2424df59552967",
    measurementId: "G-LHXSGJSZ60"
  };


  export const app = initializeApp(firebaseConfig);
  export const db = getDatabase(app);
export {ref, set, push, onValue, update, remove, get}

