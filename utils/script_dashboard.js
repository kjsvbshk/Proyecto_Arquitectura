// Efecto de desplazamiento suave al hacer clic en los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function initMap() {
    // Código para inicializar el mapa en Colombia
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 4.5709, lng: -74.2973 }, // Coordenadas de Colombia
        zoom: 5, // Ajusta el zoom según sea necesario
    });

    // Agregar un marcador en Bogotá
    const markerBogota = new google.maps.Marker({
        position: { lat: 4.611, lng: -74.08175 }, // Coordenadas de Bogotá
        map: map,
        title: "Bogotá"
    });

    // Agregar un marcador en Medellín
    const markerMedellin = new google.maps.Marker({
        position: { lat: 6.2442, lng: -75.5812 }, // Coordenadas de Medellín
        map: map,
        title: "Medellín"
    });

    // Agregar un marcador en Cali
    const markerCali = new google.maps.Marker({
        position: { lat: 3.4372, lng: -76.5225 }, // Coordenadas de Cali
        map: map,
        title: "Cali"
    });
}

D