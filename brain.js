const input = document.getElementById("input");
const boton = document.getElementById("boton");
const input2 = document.getElementById("input2");
const boton2 = document.getElementById("boton2");
const texto = document.getElementById("texto");
const texto2=document.getElementById("texto2");
const input3 = document.getElementById("input3");
const boton3 = document.getElementById("boton3");
const texto3 = document.getElementById("texto3");

boton.addEventListener("click", function(){
  let loQue = parseInt(input.value);
  if(!isNaN(loQue))
  {
    if(loQue<12)
    {
      texto.textContent="buenos días";
    }
    else {
      texto.textContent="buenas tardes";
    }
  }
  else {
    texto.textContent="Llena el cuadro anterior";
  }
});
boton2.addEventListener("click", function(){
  let laQua = parseInt(input2.value);
  if(!isNaN(laQua))
  {
    switch (laQua) {
      case 7:
        texto2.textContent="mesa de la suerte, 10% de descuento"
        // Tab to edit
        break;
      case 3:
      case 13:
      case 9:
        texto2.textContent="haaaa, mesa mala, .2 más a la cuenta";
        break;
      
      default:
        // Tab to edit
        texto2.textContent="bienvenido a la mesa";
        break;
    }
  }
  else
  {
    texto2.textContent="Llena el cuadro anterior";
  }
  
});
boton3.addEventListener("click", function() {
  let leQue = input3.value;
  if(leQue != "")
  {
    texto3.textContent="Hola " + leQue;
  }
  else
  {
    texto3.textContent="Llene el cuadro anterior";
  }

});
          
