const formulario = document.getElementById("formulario")


formulario.addEventListener('submit', function ()
 {
    const nombre = document.getElementById('nombre').value
    const email = document.getElementById('email').value
    const telefono = document.getElementById('telefono').value
    const mensaje = document.getElementById('mensaje').value

    console.log("El nombre es" + nombre)
    console.log("El email es" + email)
    console.log("El telefono es" + telefono)
    console.log("El mensaje es" + mensaje)

}
)