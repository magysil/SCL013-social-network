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


myFunction(); */

//Enlace de elementos al HTML
const viewAuthUser = document.getElementById("container");

//Funcion que crea los elementos de inicio de sesion
const userLoginView = () => {
  let userLogin = "";
  userLogin += `<!-- Inicio -->
  <div class="bodyBox">
        <div class="headerPrincipal">
          <header class="headerContent">
            <a class="logoPrincipal" href="#"><img id="logoPrincipal" src="img/logo2-01.png" alt="Logo app"></a>
          </header>
        </div>
        <!--  -->
        <div class="bodyUser">
          <div class="userlogin">
            <p class="txtUser"></p>
            <input type="email" id="email" class="email" placeholder="     Usuario">
            <p class="txtPassword"></p>
            <input type="password" id="password" class="password" placeholder="     Contraseña">
            </br>
            <a href="#" id=passRecover>¿Olvidaste tu contraseña?</a>
            </br>
            <a href="#" id="btnLogin" class="btnLogin">
              <span id="span1"></span>
              <span id="span2"></span>
              <span id="span3"></span>
              <span id="span4"></span>
              Iniciar sesión</a>
          </div>
        </div>
        <!--  -->
        <div class="bodyUserGoogle">
          <a href="#">Conectar con Google</a>
        </div>
        <div class="bodyUserRegistrar">
          <p id= "bodyUserRegistrar" >¿No tienes una cuenta?</p> <a href="#" id="re" > Regístrate </a>
        </div>
        <!--  -->
        <div class="footer">
          <p>© min Corp.</p>
        </div>
      </div>
    </div>
    
      <!-- Fin -->`;
  viewAuthUser.innerHTML = userLogin;

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Rutas
routes(window.location.hash);
window.addEventListener("hashchange", () => {
  routes(window.location.hash);
});