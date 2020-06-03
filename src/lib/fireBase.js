//Funcion Registrar Usuario
export const authRegister = (email, password) =>
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      })
      .then(function () {
        checkEmail();
      });

//Funcion Inicio de sesion de Usuario
export const userLogin = (email, password) =>
firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
});      

export const statusUser = () =>{
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            var name = user.name;

            var txtVerificado = "";
            if (emailVerified === false) {
                console.log('Email no Verificado');
            }
            else {
                console.log('Email verificado');
            }
            console.log(`Usuario Logueado ${email}, ${txtVerificado}`);
console.log(user);
            console.log(emailVerified);
        } else {
            console.log('Usuario NO Logueado ');

        }
    }); email - password.html
}

const checkEmail = () =>{
        var user = firebase.auth().currentUser;
        user.sendEmailVerification().then(function () {
        }).catch(function (error) {
        });
}




