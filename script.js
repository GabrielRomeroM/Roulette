document.getElementById('tirar').onclick = tirarRuleta;
var saldo = 100;
var numeroApuesta = 1;
var numeroRuleta = -1;

function spinRuleta(){
  return Math.floor(Math.random() *10)
}

function tirarRuleta(){
   numeroApuesta = parseFloat(document.getElementById('numero').value);

  if(isNaN(numeroApuesta) || numeroApuesta <0 || numeroApuesta > 9 ){
    mostrarMensaje('Numero invalido, por favor ingrese un numero entre 0 y 9','red');
    return;
  }
  
  numeroRuleta = spinRuleta();
  document.getElementById('ruleta').innerHTML = numeroRuleta;
    if (numeroRuleta === numeroApuesta){
      mostrarMensaje('¡GANASTE! Se han añadido 100 al saldo','green');
      aumentarsaldo();
    }
    else{
      mostrarMensaje('No acertaste. Se han disminuido 100 del saldo','red');
      disminuirSaldo();
    }
    actualizarSaldo();
  }

function aumentarSaldo(){
  saldo += 100;
}

function disminuyeSaldo(){
  saldo -= 100;
}