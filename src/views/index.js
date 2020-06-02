import { userLogin, statusUser } from "../lib/fireBase.js";

export default () => {
  const views = `
    <!-- Inicio -->
    <div id="headerPrincipal" class="headerPrincipal">
      <header class="headerContent">
        <a id="logoPrincipal" class="logoPrincipal" href="#"><img class="imgLogoPrincipal" src="img/logoPrincipal.png" alt=""></a>
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
        <a href="#/olvidoPassword">¿Olvidaste tu Contraseña?</a>
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
      <a href="#/authGoogle">Iniciar Sesión con Google</a>
    </div>
    <div id="bodyUserRegistrar" class="bodyUserRegistrar">
      <a id="btnRegister" href="#/userRegister">¿No tienes cuenta? Registrate</a>
    </div>
    <!--  -->
    <div class="footer">
      <p>© 2020 Old Beat Music</p>
    </div>
    </div>
    <!-- Fin -->
	`;
  const divElement = document.createElement("div");
  divElement.innerHTML = views;

  const btnLogin = divElement.querySelector("#btnLogin");

  btnLogin.addEventListener("click", () => {
    const email = divElement.querySelector("#email").value;
    const password = divElement.querySelector("#password").value;
    userLogin(email, password);
    statusUser();
  });

  return divElement;
};
