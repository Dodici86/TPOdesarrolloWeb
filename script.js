//Validación de un formulario con Javascript
//Fuente: https://desarrolloweb.com/articulos/1767.php
function valida_envia() {
    //valido el nombre
    if (document.fvalida.nombre.value.length == 0) {
    alert("Tiene que escribir su nombre")
    document.fvalida.nombre.focus()
    return 0;
    }
    //valido el apellido
    if (document.fvalida.apellido.value.length == 0) {
        alert("Tiene que escribir su Apellido")
        document.fvalida.apellido.focus()
        return 0;
        }
    //valido la edad. tiene que ser entero mayor que 18
    edad = document.fvalida.edad.value
    edad = validarEntero(edad)
    document.fvalida.edad.value = edad
    if (edad == "") {
    alert("Tiene que introducir un número entero en su edad.")
    document.fvalida.edad.focus()
    return 0;
    } else {
    if (edad < 18) {
    alert("Debe ser mayor de 18 años.")
    document.fvalida.edad.focus()
    return 0;
    }
    }
    //valido el interés
    if (document.fvalida.interes.selectedIndex == 0) {
        alert("Debe seleccionar un motivo de su contacto.")
        document.fvalida.interes.focus()
        return 0;
    }
    //el formulario se envia
    alert("Muchas gracias por enviar el formulario");
    document.fvalida.submit();
    }
    function validarEntero(valor) {
    //intento convertir a entero.
    //si era un entero no le afecta, si no lo era lo intenta convertir
    valor = parseInt(valor)
    //Compruebo si es un valor numérico
    if (isNaN(valor)) {
    //entonces (no es numero) devuelvo el valor cadena vacia
    return ""
    } else {
    //En caso contrario (Si era un número) devuelvo el valor
    return valor
    }
    }

    