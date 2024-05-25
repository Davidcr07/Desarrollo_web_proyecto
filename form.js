document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formulario");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;
        const mensaje = document.getElementById("mensaje").value;

        console.log("Información del formulario:");
        console.log("Nombre:", nombre);
        console.log("Email:", email);
        console.log("Teléfono:", telefono);
        console.log("Mensaje:", mensaje);


        form.reset();
    });
});
