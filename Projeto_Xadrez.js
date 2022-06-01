//-----Cronometro--------------------------------------------------
var  seg = 59;
var min = 9;

function segundos(){
	seg--;
	if(min > 0 && seg == 0 ){
		min--;
		seg=59;
		document.querySelector('#minutos').innerHTML = min;
	
	}
	else if (min == 0 && seg == 0){
			var element = document.querySelector('span');
			element.remove();// elimna o p´roprio span;
			document.querySelector('.timerout').innerHTML = "A partida acabou !";

	}
	
	
	document.querySelector('#segundos').innerHTML = seg;


}
setInterval(function(){segundos()}, 1000);

//-----------------------------------------------------------------


function mostrarTabuleiro(elemento){
	
	document.querySelector('nav').style.display = 'none';
	document.querySelector('.fora').style.display = 'flex';
	document.querySelector('#voltar').style.display = 'flex';
	//altera o display none para flex quando clica
}
function voltarAoMenu(element){
	document.querySelector('nav').style.display = 'block';
	document.querySelector('.fora').style.display = 'none';
	document.querySelector('#voltar').style.display = 'none';
}
			
function ajuda(){
			ajuda = window.confirm('Você sera guiado pra outro site');
			if (ajuda == false){
				function stopDefAction(evt){
			
		ajuda.preventDefault();
}
			
			};
}
function corTabuleiro(){
//	 var color = document.querySelector('input[type=color]');
  
  //color.addEventListener('input', function(){
  //  color.value = this.value;
	//let Valor = cor.value;
	//if(event.keyCode === 13){
	//	console.log(valor);
	//}
	
}


var cor = document.querySelector('#CordoTabuleiro');
var valor = cor.value;
console.log(valor);
