//Funcion Registrar Usuario
export const authRegister = (email, password) => 
firebase.auth().createUserWithEmailAndPassword(email, password);



