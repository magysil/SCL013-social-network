/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable spaced-comment */
/* eslint-disable import/no-cycle */
import { checkEmail } from '../lib/fireBase.js';
import { db, auth } from '../main.js';
import {
  validateRegister,
  validatePassword,
  validateEmail,
  validatePasswordCharacters,
} from '../lib/validate.js';

export default () => {
  const views = /*html*/ `
  <!-- Inicio -->
  <div class='bodyBox'>
        <div class='headerPrincipal'>
          <header class='headerContent'>
            <a class='logoPrincipal' href='#'><img id='logoPrincipal' src='img/logo.png' alt='Logo app'></a>
          </header>
        </div>
        <!--  -->
        <div class='bodyUser'>
          <div class='userlogin'>
            <p class='txtUser'></p>
            <input type='email' id='email' class='email' placeholder='     Correo electronico'>
            <p class='txtPassword'></p>
            <input type='password' id='password' class='password' placeholder='     Contraseña'>
            <p class='txtPassword'></p>
            <input type='password' id='password2' class='password' placeholder='     Repite tu contraseña'>
            <p class='txtUser'></p>
            <input type='email' id='name' class='email' placeholder='     Nombre'>
            <p class='txtUser'></p>
            <input type='email' id='nickName' class='email' placeholder='     Nickname'>
            <p class='txtUser'></p>
            <input type='email' id='city' class='email' placeholder='     Ciudad'>
            <br>
            <a href='#' id='btnLogin' class='btnLogin'>
              <span id='span1'></span>
              <span id='span2'></span>
              <span id='span3'></span>
              <span id='span4'></span>
              Registrar</a>
          </div>
        </div>
        <!--  -->
   
        <div class='registeredUser'>
          <p id= 'registeredUser'>¿Tienes Cuenta?<a href='#/home' id='register' > Ingresa AQUI!!! </a></p> 
        </div>
        <!--  -->
        <div class='reg-footer'> 
          <p>© min Corp.</p>
        </div>
      </div>
    </div>
    
      <!-- Fin --> `;

  const body = document.body;
  body.setAttribute('class', 'bodyStyle');

  const divElement = document.createElement('div');
  divElement.innerHTML = views;

  const btnLogin = divElement.querySelector('#btnLogin');

  btnLogin.addEventListener('click', (event) => {
    event.preventDefault();
    const email = divElement.querySelector('#email').value;
    const password = divElement.querySelector('#password').value;
    const repitPassword = divElement.querySelector('#password2').value;
    const displayName = divElement.querySelector('#name').value;
    const nickName = divElement.querySelector('#nickName').value;
    const city = divElement.querySelector('#city').value;
    const photoURL = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';
    // eslint-disable-next-line no-undef
    const valid = validateRegister(
      email,
      password,
      repitPassword,
      displayName,
      nickName,
      city,
    );
    // eslint-disable-next-line no-undef
    const validPassword = validatePassword(password, repitPassword);
    const validatePasswordCharactersp = validatePasswordCharacters(password);
    const validateEmailp = validateEmail(email);
    // eslint-disable-next-line no-bitwise
    if ((valid === false) & (validPassword === false)) {
      alert('Completa los campos vacios y contraseña incorrecta');
      // eslint-disable-next-line no-bitwise
    } else if ((valid === true) & (validPassword === false)) {
      alert('Contraseña incorrecta');
      // eslint-disable-next-line no-bitwise
    } else if ((valid === false) & (validPassword === true)) {
      alert('Completa los campos');
    } else if (validatePasswordCharactersp === false) {
      alert('Contraseña debe tener minimo 6 caracteres');
    } else if (validateEmailp === false) {
      alert('Email incorrecto');
    } else {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(credencial => db.collection('users').doc(credencial.user.uid).set({
          email,
          displayName,
          nickName,
          city,
          photoURL,
        }))
        .then(() => {
          const user = firebase.auth().currentUser;
          user.updateProfile({
            displayName,
            photoURL,
          });
          location.hash = '#/home';
          checkEmail();
          alert('Debe verificar su correo antes de ingresar');
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
          alert(
            'La dirección de correo electrónico ya está en uso por otra cuenta.',
          );
        });
      console.log(email, password);
    }
  });
  return divElement;
};
