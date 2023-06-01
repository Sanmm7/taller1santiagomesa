// Función para el evento 'click'
function handleClick() {
    alert("¡Se hizo clic en el botón!");
  }
  
  // Función para el evento 'mouseover'
  function handleMouseOver() {
    var element = document.getElementById("myElement");
    element.style.backgroundColor = "yellow";
  }
  
  // Función para el evento 'keydown'
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      alert("Presionaste la tecla Enter");
    }
  }
  
  // Función para el evento 'submit'
  function handleSubmit(event) {
    event.preventDefault();
    var form = event.target;
    // Realizar validación y enviar el formulario
  }
  
  // Función para el evento 'load'
  function handleLoad() {
    console.log("La página se ha cargado completamente");
  }
  
  // Función para el evento 'mouseenter'
  function handleMouseEnter() {
    alert("El mouse ha entrado en el elemento");
  }
  
  // Función para el evento 'mouseleave'
  function handleMouseLeave() {
    alert("El mouse ha salido del elemento");
  }
  
  // Función para el evento 'scroll'
  function handleScroll() {
    console.log("Se ha desplazado la página o un elemento");
  }
  
  // Función para el evento 'focus'
  function handleFocus() {
    console.log("El campo de entrada ha obtenido el foco");
  }
  
  // Función para el evento 'blur'
  function handleBlur() {
    console.log("El campo de entrada ha perdido el foco");
  }
  
  // Asignar los manejadores de eventos a los elementos correspondientes
  
  document.getElementById("myButton").addEventListener("click", handleClick);
  
  document.getElementById("myElement").addEventListener("mouseover", handleMouseOver);
  
  document.getElementById("myInput").addEventListener("keydown", handleKeyDown);
  
  document.getElementById("myForm").addEventListener("submit", handleSubmit);
  
  window.addEventListener("load", handleLoad);
  
  document.getElementById("myElement").addEventListener("mouseenter", handleMouseEnter);
  
  document.getElementById("myElement").addEventListener("mouseleave", handleMouseLeave);
  
  window.addEventListener("scroll", handleScroll);
  
  document.getElementById("myInput").addEventListener("focus", handleFocus);
  
  document.getElementById("myInput").addEventListener("blur", handleBlur);
  