
const escala = 20;
const velocidad = 10;

let filas = 0;
let columnas = 0;
let canvas = null;
juego.setSize(columnas,filas);
console.log(juego);
let play = false;


function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight * 0.8);
  canvas.parent("canvas");
  frameRate(velocidad);

  windowResized();
}

function draw() {
  background(100);
  stroke(126);
  for (let i = 0; i < columnas; i++) {
    line(i*escala,0,i*escala,windowHeight);    
  }
  for (let i = 0; i < filas; i++) {
    line(0,i*escala,windowWidth,i*escala);    
  }
  juego.update(play);
  juego.show(escala);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight * 0.8);
  filas = floor(height/escala);
  columnas = floor(width/escala);
  juego.setSize(columnas,filas);
}

function mouseClicked() {
  x = floor(mouseX / escala);
  y = floor(mouseY / escala);

  juego.changeCell(x,y);
}

function playGame() {
  play = !play;

  const boton = document.getElementById("play");

  if (play) {

    boton.innerHTML = "pause";
    
  } else {
    
    boton.innerHTML = "play";

  }
}

function guardar(numero) {
  console.log(numero,JSON.stringify(juego.malla));
}

function leer(numero) {
  const url = `http://127.0.0.1:5500/assets/${numero}.txt`; // para prosesing cambiar a 127.0.0.1:8164 vs code: 127.0.0.1:5500

  axios.get(url)
    .then(response => {
      juego.malla = JSON.parse(response.data);
      windowResized();
    })
    .catch(error => {
      console.error(`Error al leer el archivo ${numero}.txt:`, error);
    });
}

function restart() {
  location.reload();
}