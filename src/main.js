// Este es el punto de entrada de tu aplicacion

/* import { myFunction } from "./lib/index.js";

myFunction(); */

//Enlace de elementos al HTML
const viewAuthUser = document.getElementById("contenedor");

//Funcion que crea los elementos de inicio de sesion
const userLoginView = () => {
  let userLogin = "";
  userLogin += `<!-- Inicio -->
        <div class="headerPrincipal">
          <header class="headerContent">
            <a id="logoPrincipal" class="logoPrincipal" href="#"><img src="img/logoPrincipal.png" alt=""></a>
          </header>
        </div>
        <!--  -->
        <div class="bodyUser">
          <div class="userlogin">
            <p class="txtUser">Usuario</p>
            <input type="email" id="email" class="email" placeholder="Ingrese E-mail">
            <p class="txtPassword">Contraseña</p>
            <input type="password" id="password" class="password" placeholder="Ingrese Contraseña">
            </br>
            <a href="#">¿Olvidaste tu Contraseña?</a>
            </br>
            <a href="#" id="btnLogin" class="btnLogin">
              <span id="span1"></span>
              <span id="span2"></span>
              <span id="span3"></span>
              <span id="span4"></span>
              Iniciar Sesión</a>
          </div>
        </div>
        <!--  -->
        <div class="bodyUserGoogle">
          <a href="#">Iniciar Sesión con Google</a>
        </div>
        <div class="bodyUserRegistrar">
          <a href="#">¿No tienes cuenta? Registrate</a>
        </div>
        <!--  -->
        <div class="footer">
          <p>© 2020 Old Beat Music</p>
        </div>
      </div>
      <!-- Fin -->`;
  viewAuthUser.innerHTML = userLogin;
};
userLoginView();

//Variables Input de Inicio de Sesion
let btnLogin = document.getElementById("btnLogin");
let email = document.getElementById("email");
let password = document.getElementById("password");

//Evento Click del inicio de Sesion
btnLogin.addEventListener("click", ()=> {
  const emailValue = email.value;
  const passwordValue = password.value;
  console.log(emailValue);
  console.log(passwordValue);
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
});

