/*
 *
 * Comunidata 19S
 * Datos y Mezcales (Diciembre 2017)
 * Volutarios
 * Adrian Santuario
 *
 */


/**/ //////////////////////////
//////// VARIABLES
////////////////////////////*/

var img;

/**/ ///////////////////////////
///////////////////////////////
//////// CYCLE LIFE
///////////////////////////////
//////////////////////////// */ 

function preload() {
  img = loadImage("assets/images/CDMX_Template_0.png");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function setup() {
  createCanvas(displayWidth, displayHeight);

}

function draw() {
  
  clear();
  
  tint(255, 150);
  
  //imageMode(CENTER)
  var correctionX = (windowWidth/2)-(img.width/2);
  var correctionY = (windowHeight/2)-(img.height/2); 
  image(img, correctionX, correctionY);

  var currentColor = color(134, 214, 226);



  var c = img.get(mouseX+(correctionX*-1), mouseY+(correctionY*-1));
  print(correctionX)


  if (colorAlphaTest(c, 5)) {

    textSize(32);
    text("word", 10, 30);
  } else {

  }











}



function colorAlphaTest(_c1, _tol) {


  if (red(_c1) + green(_c1) + blue(_c1) <= 1) {
    return false;
  } else {
    return true;
  }
}