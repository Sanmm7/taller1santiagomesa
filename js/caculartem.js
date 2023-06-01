function convertirTemperatura() {
    // Obtener el valor ingresado por el usuario
    var temperatura = parseFloat(document.getElementById("inputTemp").value);
  
    // Obtener las unidades de conversión seleccionadas
    var from = document.getElementById("selectFrom").value;
    var to = document.getElementById("selectTo").value;
  
    // Realizar la conversión
    var resultado;
  
    if (from === "celsius" && to === "fahrenheit") {
      resultado = (temperatura * 9 / 5) + 32;
    } else if (from === "celsius" && to === "kelvin") {
      resultado = temperatura + 273.15;
    } else if (from === "fahrenheit" && to === "celsius") {
      resultado = (temperatura - 32) * 5 / 9;
    } else if (from === "fahrenheit" && to === "kelvin") {
      resultado = (temperatura - 32) * 5 / 9 + 273.15;
    } else if (from === "kelvin" && to === "celsius") {
      resultado = temperatura - 273.15;
    } else if (from === "kelvin" && to === "fahrenheit") {
      resultado = (temperatura - 273.15) * 9 / 5 + 32;
    }
    else{
      alert("No se puede convertir, revise su seleccion")
    }
  
    // Mostrar el resultado en una alerta con dos cifras decimales
    alert("El resultado de la conversión es: " + resultado.toFixed(2));
  }
  