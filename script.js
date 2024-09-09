document.getElementById('tirar').onclick = tirarRuleta;
var saldo = 100;
var numeroApuesta = 1;
var numeroRuleta = -1;

function spinRuleta(){
  return Math.floor(Math.random() *10)
}

function mostrarMensaje(resultado, color, mensaje){
   var resultadoDiv = document.getElementById('resultado');
   var mensajeResultado = document.getElementById('mensaje-resultado');
   resultadoDiv.style.display = 'block';
   mensajeResultado.innerHTML = resultado;
   mensajeResultado.style.color = color;
  
  document.getElementById('numero-apostado').innerHTML = numeroApuesta;
  document.getElementById('numero-ruleta').innerHTML = numeroRuleta;
  document.getElementById('saldo-atual').innerHTML = "$" + saldo;

 console.log({
   resultado: resultado,
   color: color,
   mensaje: mensaje
 })
}
  
function tirarRuleta(){
  numeroApuesta = parseInt(document.getElementById('numero').value);

  if (isNaN(numeroApuesta) || numeroApuesta < 0 || numeroApuesta > 9){
    mostrarMensaje('Numero invalido. Debe ser un numero entre 0 y 9','red', 'Numero invalido');
    return
  }
  numeroRuleta = spinRuleta();

  document.getElementById('ruleta').innerHTML = numeroRuleta;
  if (numeroRuleta == numeroApuesta){
    aumentarSaldo();
    mostrarMensaje('¡Acertaste!','green', 'Ganaste');
  } else {
    disminuyeSaldo();
    mostrarMensaje('Perdiste','red', 'Perdiste');
  }
  actualizarSaldo();
  
  console.log({
    numeroApuesta: numeroApuesta,
    numeroRuleta: numeroRuleta,
  })
}

function aumentarSaldo(){
  saldo += 20;
}

function disminuyeSaldo(){
  saldo -= 20;
}

function actualizarSaldo(){
  document.getElementById('saldo').innerHTML = "$" + saldo;
}