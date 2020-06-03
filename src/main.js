// Este es el punto de entrada de tu aplicacion

/* import { myFunction } from "./lib/index.js";

}

//Enlace de elementos al HTML
const viewAuthUser = document.getElementById("container");

//Funcion que crea los elementos de inicio de sesion
const userLoginView = () => {
  let userLogin = "";
  userLogin += `<!-- Inicio -->
  <div class="bodyBox">
        <div class="headerPrincipal">
          <header class="headerContent">
            <a class="logoPrincipal" href="#"><img id="logoPrincipal" src="img/logo.png" alt="Logo app"></a>
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

