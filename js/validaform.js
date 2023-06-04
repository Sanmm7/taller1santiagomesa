function validateForm() {
    var tipoDocumento = document.getElementById("tipo-documento").value;
    var noDocumento = document.getElementById("no-documento").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var fechaNacimiento = document.getElementById("fecha-nacimiento").value;
    var correoElectronico = document.getElementById("correo-electronico").value;
    var password = document.getElementById("password").value;
    var confirmarPassword = document.getElementById("confirmar-password").value;
    var aceptarTerminos = document.getElementById("aceptar-terminos").checked;

    // Restablecer estilos de error
    resetErrorStyles();

    // Validar campos obligatorios
    if (tipoDocumento === "") {
        showError("error-tipo-documento", "Seleccione un tipo de documento");
    }
    if (noDocumento === "") {
        showError("error-no-documento", "Ingrese el número de documento");
    }
    if (nombre === "") {
        showError("error-nombre", "Ingrese su nombre");
    }
    if (apellido === "") {
        showError("error-apellido", "Ingrese su apellido");
    }
    if (fechaNacimiento === "") {
        showError("error-fecha-nacimiento", "Ingrese su fecha de nacimiento");
    }
    if (correoElectronico === "") {
        showError("error-correo-electronico", "Ingrese su correo electrónico");
    }
    if (password === "") {
        showError("error-password", "Ingrese una contraseña");
    }
    if (confirmarPassword === "") {
        showError("error-confirmar-password", "Confirme su contraseña");
    }
    if (!aceptarTerminos) {
        showError("error-aceptar-terminos", "Debe aceptar los términos de uso");
    }

    // Validar longitud del No. documento
    if (noDocumento.length < 5) {
        showError("error-no-documento", "El número de documento debe tener al menos 5 caracteres");
    }

    // Validar caracteres alfanuméricos en Nombre y Apellido
    var alphanumericRegex = /^[A-Za-z0-9\s]+$/;
    if (!alphanumericRegex.test(nombre)) {
        showError("error-nombre", "El nombre solo puede contener caracteres alfanuméricos");
    }
    if (!alphanumericRegex.test(apellido)) {
        showError("error-apellido", "El apellido solo puede contener caracteres alfanuméricos");
    }

    // Validar fecha de nacimiento (mayores de 18 años)
    var currentDate = new Date();
    var birthDate = new Date(fechaNacimiento);
    var minBirthDate = new Date("2002-01-01"); // Año 2002 en adelante
    var age = currentDate.getFullYear() - birthDate.getFullYear();
    if (currentDate < minBirthDate || age < 18) {
        showError("error-fecha-nacimiento", "Debe tener al menos 18 años para registrarse");
    }

    // Validar dominio de correo electrónico
    var emailRegex = /^[a-zA-Z0-9._%+-]+@misena.edu.co$/;
    if (!emailRegex.test(correoElectronico)) {
        showError("error-correo-electronico", "El correo electrónico debe tener el dominio @misena.edu.co");
    }

    // Validar contraseña
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).*$/;
    if (password.length < 10 || !passwordRegex.test(password)) {
        showError("error-password", "La contraseña debe tener al menos 10 caracteres, incluyendo al menos una letra mayúscula, una letra minúscula, un número y un carácter especial");
    }

    // Confirmar contraseña
    if (password !== confirmarPassword) {
        showError("error-confirmar-password", "Las contraseñas no coinciden");
    }

    // Validar aceptar términos
    if (!aceptarTerminos) {
        showError("error-aceptar-terminos", "Debe aceptar los términos de uso para registrarse");
    }

    // Devolver falso si hay errores
    return !document.querySelectorAll(".error").length;

    // Mostrar mensaje de error
    function showError(elementId, errorMessage) {
        var element = document.getElementById(elementId);
        element.textContent = errorMessage;
        element.parentNode.classList.add("error");
    }

    // Restablecer estilos de error
    function resetErrorStyles() {
        var errorElements = document.querySelectorAll(".error");
        errorElements.forEach(function (element) {
            element.textContent = "";
            element.parentNode.classList.remove("error");
        });
    }
}

function showTerms() {
    document.getElementById("terms-modal").style.display = "block";
}

function hideTerms() {
    document.getElementById("terms-modal").style.display = "none";
}