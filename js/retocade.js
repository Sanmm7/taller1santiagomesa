function realizarOperacion() {
    // Obtener el valor ingresado por el usuario
    var palabra = document.getElementById("palabra").value;
  
    // Obtener la opción seleccionada por el usuario
    var opcion = document.getElementById("opcion").value;
  
    // Convertir la opción a un número entero
    opcion = parseInt(opcion);
  
    // Evaluar la opción seleccionada y mostrar el resultado en una alerta
    switch (opcion) {
      case 1:
        alert("La longitud de la palabra es: " + palabra.length);
        break;
      case 2:
        alert("La palabra en mayúsculas es: " + palabra.toUpperCase());
        break;
      case 3:
        alert("La palabra en minúsculas es: " + palabra.toLowerCase());
        break;
      case 4:
        alert("El primer carácter de la palabra es: " + palabra.charAt(0));
        break;
      default:
        alert("Opción inválida. Por favor, elija una opción válida.");
        break;
    }
  }
  