function comprobarSeleccion() {
    // Obtener los valores seleccionados por el usuario
    var nombreSeleccionado = document.getElementById("nombre").value;
    var apellidoSeleccionado = document.getElementById("apellido").value;
    var actividadSeleccionada = document.getElementById("actividad").value;
  
    // Comprobar si la selección es correcta
    var nombreCorrecto = "Uldarico";
    var apellidoCorrecto = "Andrade";
    var actividadCorrecta = "python";
  
    if (
      nombreSeleccionado === nombreCorrecto &&
      apellidoSeleccionado === apellidoCorrecto &&
      actividadSeleccionada === actividadCorrecta  || nombreSeleccionado === "Tatiana" && apellidoSeleccionado === "Cabrera" && actividadSeleccionada === "Java"  ||
      nombreSeleccionado === "Sandra" && apellidoSeleccionado === "Rueda" && actividadSeleccionada === "Base"   ) {
      alert("La respuesta es correcta");
    } else{
      alert("La respuesta es incorrecta");
    }
  }
  