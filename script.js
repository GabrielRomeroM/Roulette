document.getElementById('tirar').onclick = tirarRuleta;
var saldo = 100;
var numeroApuesta = 1;
var numeroRuleta = -1;

function spinRuleta(){
  return Math.floor(Math.random() *10)
}

function tirarRuleta(){
   numeroApuesta = parseFloat(document.getElementById('numero').value);

  if(isNaN(numeroApuesta) || numeroApuesta <0 || numeroApuesta >9 ){
    alert('Numero invalido, por favor ingrese un numero entre 0 y 9');
    return;
  }
  
  numeroRuleta = spinRuleta();
  document.getElementById('ruleta').innerHTML = numeroRuleta;

  if (numeroRuleta === numeroApuesta){
    alert('¡GANASTE!');
    aumentarsaldo();
  }else{
    alert('Segui participando');
    disminuirSaldo();
  }
}

function aumentarsaldo(){
  saldo += 100;
}

function disminuyesaldo(){
  saldo -= 100;
}