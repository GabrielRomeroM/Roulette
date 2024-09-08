document.getElementById('tirar').onclick=tirarRuleta;
var saldo = 100;
var numeroApuesta = 1;
var numeroRuleta = -1;

function spinRuleta(){
  return Math.floor(Math.random() *max)
}

function tirarRuleta(){
   numeroApuesta = document.getElementById('numero').value;
  if(numeroApuesta >=10 || numeroApuesta <0 || numeroApuesta == " "){
    alert('numero invalido');
    return;
  }
  numeroRuleta = spinRuleta();
  document.getElementById('ruleta').innerHTML=saldo;
  if (numeroRuleta == numeroApuesta){
    alert('GANASTE');
    aumentarsaldo();
  }
  else{
    alert('Segui participando');
    disminuyesaldo();
  }
}

function aumentarsaldo(){
  saldo += 100;
}

function disminuyesaldo(){
  saldo -= 100;
}