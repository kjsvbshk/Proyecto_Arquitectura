import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";
import { configurePersistence } from "../../utils/firebase";

configurePersistence();

// onAuthStateChanged(auth, (user) => {
//     if (!user) {
//         window.location.href = "../login.html"
//         alert("No has iniciado sesion")
//     } 
// })