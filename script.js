import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase, get, ref, child, update } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZJTH0Znyi13etPM6Ag5M-lQ_WeqXOIsU",
    authDomain: "scrumflow-6e479.firebaseapp.com",
    projectId: "scrumflow-6e479",
    storageBucket: "scrumflow-6e479.appspot.com",
    messagingSenderId: "828323679259",
    appId: "1:828323679259:web:6db3cfbf89942cc3d4fcbe",
    measurementId: "G-2427QNHC73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
const auth = getAuth(app);
const dbref = ref(db);

let EmailInput = document.getElementById('email');
let PasswordInput = document.getElementById('password');
let loginButton = document.getElementById('submit');

loginButton.addEventListener('click', function () {
    console.log("Login user ausführung");

    signInWithEmailAndPassword(auth, EmailInput.value, PasswordInput.value)
        .then((userCredential)=>{
            const user = userCredential.user;
            const dt = new Date();

            update(ref(db, 'users/' + user.uid), {
                last_login: dt,
            })
            console.log(user.email);
            window.location.href = "https://noah-pesendorfer.github.io/Scrumflow-Home/"
        })
        .catch((error) =>{
            alert(error.message)
            console.log(error.code);
            console.log(error.message);
        })

        .catch((error) =>{
            alert(error.message)
            console.log(error.code);
            console.log(error.message);
        })
});

const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        // ...
    } else {
    }
});

/*Logout.addEventListener('submit', (e) =>{
  const auth = getAuth();
  signOut(auth).then(() => {
    alert('User logged out');
  }).catch((error) => {
    alert(error.message)
    console.log(error.code);
    console.log(error.message);
  });

})*/
