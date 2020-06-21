/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import { auth } from '../main.js';


//----------------------------------------------------------------
// Funcion Inicio de sesion de Usuario
//----------------------------------------------------------------
export const userLogin = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password)
  .then(() => {
    location.hash = '#/userPost';
  })
  .catch((error) => {
    alert('Correo o Contraseña Invalida');
    const errorMessage = error.message;
    console.log(errorMessage);
  });

//----------------------------------------------------------------
// Status de Usuario Activo
//----------------------------------------------------------------
export const statusUser = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const emailVerified = user.emailVerified;
      if (emailVerified === false) {
        alert('Debe verificar su correo antes de ingresar');
        location.hash = '#/home';
      } else {
        location.hash = '#/userPost';
      }
    } else {
      console.log('Usuario NO Logueado ');
      location.hash = '#/home';
    }
  });
};

//----------------------------------------------------------------
// Cerrar Sesion de usuario
//----------------------------------------------------------------
export const logOut = () => firebase.auth().signOut();

//----------------------------------------------------------------
// Validar Email de Usuario que se registra
//----------------------------------------------------------------
export const checkEmail = () => {
  const user = auth.currentUser;
  user.sendEmailVerification().then(() => {
  }).catch(() => {
  });
};

//----------------------------------------------------------------
// Autentificacion Google
//----------------------------------------------------------------
export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      console.log('token del usuario ', token);
      // The signed-in user info.
      const user = result.credential;
      console.log('usuario google ', user);
      // ...
      // eslint-disable-next-line no-restricted-globals
      location.hash = '#/userPost';
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      console.log('Error Codigo ', errorCode);
      const errorMessage = error.message;
      console.log('Mensaje de error ', errorMessage);
      // The email of the user's account used.
      const email = error.email;
      console.log('Email ingresado ', email);
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      console.log('credencial ', credential);
      // ...
    });
};

//----------------------------------------------------------------
// Reseteo de contraseña
//----------------------------------------------------------------
export const resetPassword = (emailAddress) => {
  firebase.auth().sendPasswordResetEmail(emailAddress).then(() => {
    // Email sent.
  }).catch(() => {
  });
};
