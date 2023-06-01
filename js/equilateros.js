function determinarTipoTriangulo() {
    // Obtener los valores de los tres lados del triángulo ingresados por el usuario
    var lado1 = parseFloat(document.getElementById("lado1").value);
    var lado2 = parseFloat(document.getElementById("lado2").value);
    var lado3 = parseFloat(document.getElementById("lado3").value);
  
    // Verificar el tipo de triángulo
    if (lado1 === lado2 && lado2 === lado3) {
      alert("El triángulo es equilátero");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
      alert("El triángulo es isósceles");
    } else {
      alert("El triángulo es escaleno");
    }
  }
  