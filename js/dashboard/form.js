import { sendForm } from '../../utils/firebase';

document.getElementById("formulario-unete").addEventListener("submit", async(event)=>{
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const historia = document.getElementById("historia").value;
    const tema = document.getElementById("tema").value;

    alert("solicitud enviada. Recibiras una notificacion cuando sea revisada.");
    document.getElementById("formulario-unete").reset();

    sendForm(nombre,historia,tema)

});