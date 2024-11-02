// Efecto de desplazamiento suave al hacer clic en los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function initMap(){
    // inicalizar mapa
    const map = new google.maps.Map(document.getElementById("map"),{
        center:{lat:4.5709, lng:-74.2973}, zoom:5,
    });
    // marcadores en ciudades
    const markerBogota = new google.maps.Marker({
        position:{lat:4.61,lng:-74.08175},map:map,title:"Bogota"
    });

    const markerMedellin = new google.maps.Marker({
        position:{lat:6.2442,lng:-75.5812},map:map, title: "Medellin"
    });

    const markerCali = new google.maps.Marker({
        position: {lat:3.4372, lng:-76.5225},map:map, title:"Cali"
    });

}
