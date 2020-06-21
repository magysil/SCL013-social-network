/* eslint-disable spaced-comment */
/* eslint-disable import/no-cycle */
/* eslint-disable no-alert */
import { resetPassword } from '../lib/fireBase.js';

export default () => {
  const views = /*html*/ `
  <!-- Inicio -->
  <div class='bodyBox'>

        <div class='headerPrincipal'>
          <header class='headerContent'>
            <a class='logoPrincipal' href='#'><img id='logoPrincipal' src='img/logo2-01.png' alt='Logo app'></a>
          </header>
        </div>
        <!--  -->
        <div class='bodyUser'>
          <div class='userlogin'>
          <p class='txtUser'>Inserta tu e-mail para
          </br> la recuperacion de tu contraseña.</p>
            <br>
            <input type='email' id='email' class='email' placeholder='     Usuario'>
            <p class='txtPassword'></p>
          
            <a href='#' id='btnLogin' class='btnLogin'>
              <span id='span1'></span>
              <span id='span2'></span>
              <span id='span3'></span>
              <span id='span4'></span>
              Enviar</a>
          </div>
        </div>
        <!--  -->
        <div class='bodyUserWithAcount'>
          <p id= 'bodyUserRegistrar' >Regresar Al Inicio</p> 
          <a href='#/home' id='register' > Ingresa AQUI!!! </a>
        </div>
        <!--  -->
        <div class='footer'>
          <p>© min Corp.</p>
        </div>
      </div>
    </div>


    
      <!-- Fin -->`;

  const body = document.body;
  body.setAttribute('class', 'bodyStyle');

  const divElement = document.createElement('div');
  divElement.innerHTML = views;

  const resetButton = divElement.querySelector('#btnLogin');
  resetButton.addEventListener('click', () => {
    const emailAddress = divElement.querySelector('#email').value;
    resetPassword(emailAddress);
    alert('Revisa tu Correo');
    // eslint-disable-next-line no-restricted-globals
    location.hash = '#/home';
  });

  return divElement;
};
