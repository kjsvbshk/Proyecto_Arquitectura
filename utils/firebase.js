import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase/firebase-config"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, setPersistence, browserLocalPersistence } from "firebase/auth"

export const onRegister = async (email, password, role, username) => {
    try {

        const Userresponse = await onRegisterUserDoc(email, role, username)

        if (Userresponse) {
            const authresponse = await createUserWithEmailAndPassword(auth, email, password)
            const user = authresponse.user;

            console.log(user)
            alert("Usuario Creado Correctamente seras redirigido a la pagina principal");
        }
    } catch (error) {
        alert("Error al crear usuario"+error.message);
        console.log(error)
    }
}

// Inicio de sesion con correo  y contrasena
export const onLogin = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
        alert("La sesion se ha iniciado sesion correctamente");
        console.log("Se inicio sesion correctamente")
    } catch (error) {
        alert("Error al iniciar sesion: "+error.message);
        console.log(error)
    }
}

// Inicio de sesion con Google
export const signInWithGoogle = async ()=> {
    const provider = new GoogleAuthProvider();

    try{
        const result = await signInWithPopup(auth,provider);
        const user = result.user;
        console.log("Se inicio correctamente sesion con Google", user);

        alert("Inicio se sesion con Google exitoso");

    }catch (error){
        console.error("Error al inciar sesion con Google",error.message);
        alert("Error al inciar sesion con Google: "+ error.message);
        return null;
    }
};

export const onLogout = async () => {
    try {
        await signOut(auth)
        console.log("Se cerro sesion correctamente");
        alert("La sesion se ha cerrado correctamente");
    } catch (error) {
        alert("Error al cerrar sesion: " + error.message);
        console.log(error)
    }
}

export const configurePersistence = () =>{
    setPersistence(auth, browserLocalPersistence)
    .then(()=>{
        console.log("Configuracion de persistencia exitosa");
    })
    .catch((error)=>{
        console.error("Error al configurar la persistencia en la sesion", error);
    });
}


const onRegisterUserDoc = async (email, role, username) => {
    try {
        console.log("Creando coleccion")

        await addDoc(collection(db, "Datos"), {
            usuario: username,
            correo: email,
            roles: role
        });

        return true

    } catch (error) {
        alert("Error al subir los datos: " + error.message);
        console.error("Error al subir los datos", error);

        return false
    }
}