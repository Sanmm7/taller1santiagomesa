function openModal(figura) {
    var modal = document.getElementById("modal");
    var modalTitle = document.getElementById("modal-title");
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var resultado = document.getElementById("resultado");
  
    if (figura === "circle") {
      modalTitle.textContent = "Círculo";
      input1.placeholder = "Radio";
      input2.style.display = "none";
    } else if (figura === "triangle") {
      modalTitle.textContent = "Triángulo";
      input1.placeholder = "Lado 1";
      input2.placeholder = "Lado 2";
      input2.style.display = "block";
    } else if (figura === "rectangle") {
      modalTitle.textContent = "Rectángulo";
      input1.placeholder = "Base";
      input2.placeholder = "Altura";
      input2.style.display = "block";
    } else if (figura === "square") {
      modalTitle.textContent = "Cuadrado";
      input1.placeholder = "Lado";
      input2.style.display = "none";
    }
  
    modal.style.display = "block";
  }
  
  function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
  }
  
  function calcular() {
    var modalTitle = document.getElementById("modal-title").textContent;
    var input1 = parseFloat(document.getElementById("input1").value);
    var input2 = parseFloat(document.getElementById("input2").value);
    var resultado = document.getElementById("resultado");
  
    if (modalTitle === "Círculo") {
      var perimetro = 2 * Math.PI * input1;
      var area = Math.PI * Math.pow(input1, 2);
  
      resultado.innerHTML = "<strong>Perímetro:</strong> " + perimetro.toFixed(2) +
                            "<br><strong>Área:</strong> " + area.toFixed(2);
    } else if (modalTitle === "Triángulo") {
      var perimetro = input1 + input2 + input2;
      var area = (input1 * input2) / 2;
  
      resultado.innerHTML = "<strong>Perímetro:</strong> " + perimetro.toFixed(2) +
                            "<br><strong>Área:</strong> " + area.toFixed(2);
    } else if (modalTitle === "Rectángulo") {
      var perimetro = 2 * (input1 + input2);
      var area = input1 * input2;
  
      resultado.innerHTML = "<strong>Perímetro:</strong> " + perimetro.toFixed(2) +
                            "<br><strong>Área:</strong> " + area.toFixed(2);
    } else if (modalTitle === "Cuadrado") {
      var perimetro = 4 * input1;
      var area = Math.pow(input1, 2);
  
      resultado.innerHTML = "<strong>Perímetro:</strong> " + perimetro.toFixed(2) +
                            "<br><strong>Área:</strong> " + area.toFixed(2);
    }
  }
  
  var closeBtn = document.getElementsByClassName("close")[0];
  closeBtn.onclick = function() {
    closeModal();
  }
  
  window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target === modal) {
      closeModal();
    }
  }
  