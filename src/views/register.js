export default () =>{

	const views = `
    <!-- Inicio -->
    <div class="headerPrincipal">
      <header class="headerContent">
        <a id="logoPrincipal" class="logoPrincipal" href="#"><img class="imgLogoPrincipal" src="img/logoPrincipal.png" alt=""></a>
      </header>
    </div>
    <!--  -->
    <div class="bodyUser">
      <div class="userlogin">
        <p class="txtUser">Registro de Usuario</p>
        <p class="txtUser">Usuario</p>
        <input type="email" id="email" class="email" placeholder="Ingrese E-mail">
        <p class="txtPassword">Contraseña</p>
        <input type="password" id="password" class="password" placeholder="Ingrese Contraseña">
        </br>
        <a href="#" id="btnLoginRegister" class="btnLogin">
          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
          <span id="span4"></span>
          Registrar</a>
      </div>
    </div>
    <!--  -->
    <div class="bodyUserGoogle">
      <a href="#/authGoogle">Iniciar Sesión con Google</a>
    </div>
    <div  class="bodyUserLogin">
      <a id="btnRegister" href="#/home">¿Tienes cuenta? Inicia Sesion</a>
    </div>
    <!--  -->
    <div class="footer">
      <p>© 2020 Old Beat Music</p>
    </div>
  </div>
  <!-- Fin -->
	`;
	const divElement = document.createElement('div');
	divElement.innerHTML =  views;	

	return divElement;
};

