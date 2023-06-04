function handleClick() {
    alert("¡Se hizo clic en el botón!");
  }
  
  function handleMouseOver() {
    var element = document.getElementById("myElement");
    element.style.backgroundColor = "yellow";
  }
  
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      alert("Presionaste la tecla Enter");
    }
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    var form = event.target;
  }
  
  function handleLoad() {
    console.log("La página se ha cargado completamente");
  }
  
  function handleMouseEnter() {
    alert("El mouse ha entrado en el elemento");
  }
  
  function handleMouseLeave() {
    alert("El mouse ha salido del elemento");
  }
  
  function handleScroll() {
    console.log("Se ha desplazado la página o un elemento");
  }
  
  function handleFocus() {
    console.log("El campo de entrada ha obtenido el foco");
  }
  
  function handleBlur() {
    console.log("El campo de entrada ha perdido el foco");
  }
  
  
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
  