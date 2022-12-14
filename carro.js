let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for(i=0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for(j=0; j < xCarros.length; j++){
    xCarros[j] -= velocidadeCarros[j];    
  }
}

function voltaPosicaoInicialDoCarro(){
  for(k=0; k < xCarros.length; k++){
    if(passouTodaATela(xCarros[k])){
       xCarros[k] = 600;
    }
  }
}

function passouTodaATela(xCarro){
  return xCarro < -50;
}