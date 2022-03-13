//variáveis
let Xbolinha = 300;
let ybolinha = 200;
let diametro = 15;
let raio = diametro/2;


 //variaveis da velocidade da bolinha
let velocidadeXbolinha = 6;
let velocidadeYbolinha = 6;
//variáveis da raquete
let xraquete = 5;
let yraquete = 150;
let raquetecomprimento = 10;
let raquetealtura = 90;


   
 


function setup() {
  createCanvas(600, 400);
}
//trazer tudo pra cá
function draw() {
  background(0);
  mostrabolinha();
  movimentabolinha();
  colisaobolinha();
  mostraraquete();
  movimentaminharaquete(); 
  colisaoRaquete();
  
}

function mostrabolinha () {
  circle (Xbolinha, ybolinha, diametro);
}
function movimentabolinha () {
  Xbolinha += velocidadeXbolinha;
  ybolinha += velocidadeYbolinha; 

}

function colisaobolinha () {
  if (Xbolinha + raio >  width ||
    Xbolinha - raio < 0){
 velocidadeXbolinha *= -1;
}

if(ybolinha + raio>height ||
   ybolinha - raio< 0){
  velocidadeYbolinha *= -1;
}
  
  }
function mostraraquete() {
    
    rect (xraquete, yraquete, raquetecomprimento, raquetealtura);

}

function movimentaminharaquete (){
  
  if (keyIsDown (UP_ARROW)) {
  
    yraquete -= 10;
  }
  
  if (keyIsDown (DOWN_ARROW)){
  
    yraquete += 10;
}
  

}
function colisaoRaquete() {
    
    if (Xbolinha - raio < xraquete + raquetecomprimento) 
    { 
      velocidadeXbolinha *= -1;
    }
    
  }