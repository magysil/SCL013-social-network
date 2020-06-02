// Este es el punto de entrada de tu aplicacion

//import { authRegister } from "./lib/fireBase.js";
import { routes } from "./routes/index.routes.js";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCi3YgirCn8pkyynZD1ivOy0l2zHgeXcXY",
  authDomain: "oldbeat-fdfd8.firebaseapp.com",
  databaseURL: "https://oldbeat-fdfd8.firebaseio.com",
  projectId: "oldbeat-fdfd8",
  storageBucket: "oldbeat-fdfd8.appspot.com",
  messagingSenderId: "871020668050",
  appId: "1:871020668050:web:24ce924e5592ac3ea7f24b",
  measurementId: "G-27R5W16948",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//Enlace de elementos al HTML
//const viewAuthUser = document.getElementById("contenedor");

routes(window.location.hash);
window.addEventListener("hashchange", () => {
  routes(window.location.hash);
});



