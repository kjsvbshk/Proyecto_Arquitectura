import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../../firebase/firebase-config";
import { onLogin, signInWithGoogle } from "../../utils/firebase";


onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Existe sesion");
    window.location.href = "./main.html"
  } else {
    console.log("No existe sesion");
  }
});

// Inicio con Google
document.getElementById("formulario-google").addEventListener("submit", async (event)=>{
  event.preventDefault();
  const user = await signInWithGoogle();

  if (user){
    window.location.href = "./main.html"
  } else {
    console.log("No existe sesion");
  }

});


// Inicio con Formulario
document.getElementById("formulario-sesion").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  onLogin(email, password)
});