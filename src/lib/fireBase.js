/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
// Funcion Registrar Usuario

export const authRegister = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
  checkEmail();
})
  .catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage);
  });
// Funcion Inicio de sesion de Usuario

export const userLogin = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password)
  .catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage);
  });

export const statusUser = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // let displayName = user.displayName;
      const email = user.email;
      const emailVerified = user.emailVerified;
      /* let photoURL = user.photoURL;
      let isAnonymous = user.isAnonymous;
      let uid = user.uid;
      let providerData = user.providerData;
      let name = user.name; */
      let txtVerificado = '';
      if (emailVerified === false) {
        console.log('Email no Verificado');
        txtVerificado = 'Email no verificado';
        alert('Debe verificar su correo antes de ingresar');
      } else {
        console.log('Email verificado');
        // eslint-disable-next-line no-restricted-globals
        location.hash = '#/userPost';
        txtVerificado = 'Email verificado';
        console.log(`Usuario Logueado ${email}, ${txtVerificado}`);
      }
    } else {
      console.log('Usuario NO Logueado ');
    }
  });
};


export const logOut = () => firebase.auth().signOut();

const checkEmail = () => {
  const user = firebase.auth().currentUser;
  user
    .sendEmailVerification()
    .then(() => { })
    .catch(() => { });
};

// Funcion Autentificacion Google
export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = result.credential.accessToken;
    console.log('token del usuario ', token);
    // The signed-in user info.
    const user = result.user;
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

// Reseteo de contraseña
export const resetPassword = (emailAddress) => {
  firebase.auth().sendPasswordResetEmail(emailAddress).then(() => {
    // Email sent.
  }).catch(() => {
    // An error happened.
  });
};
