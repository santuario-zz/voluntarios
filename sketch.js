/*
 *
 * Comunidata 19S
 * Datos y Mezcales (Diciembre 2017)
 * Volutarios
 * Adrian Santuario
 *
 */


/*
 *****************************************
 *****************************************
 * VARIABLES
 *****************************************
 *****************************************
 */

var backgroundImage;
var detailInfoImage;
var items = [];
var itemsCount = 1;


/*
 *****************************************
 *****************************************
 * LYFE CYCLE METHODS
 *****************************************
 *****************************************
 */

function preload() {

  backgroundImage = loadImage("assets/images/CDMX_Template.png");
  detailInfoImage = loadImage("assets/images/CDMX_Template_Icons.png");

  for (var i = 0; i < itemsCount; i++) {
    var nameImage = "assets/images/CDMX_Template_" + i + ".png";
    window['img' + i] = loadImage(nameImage);
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function setup() {
  createCanvas(displayWidth, displayHeight);
  initialize();
}

function draw() {

  clear();
  drawBackground();
  drawItems();

}


/*
 *****************************************
 *****************************************
 * INITIALIZE METHODS
 *****************************************
 *****************************************
 */

function initialize() {
  initializeBackground();
  initializeItems();
}


/**/ ///////////////////////////
///////////////////////////////
//////// BACKGROUND METHODS
///////////////////////////////
//////////////////////////// */ 

function initializeBackground() {

}

function drawBackground() {
  var correctionX = (windowWidth / 2) - (backgroundImage.width / 2);
  var correctionY = (windowHeight / 2) - (backgroundImage.height / 2);
  image(backgroundImage,correctionX, correctionY);
}





/*
 *****************************************
 *****************************************
 * ITEMS METHODS
 *****************************************
 *****************************************
 */


function initializeItems() {
  //itemsJSON.data.length
  /*
  canvasW = itemsJSON.data.length * 200 * sizeScale;
  generalCanvasX = 0;
  for (var i = 0; i < itemsJSON.data.length; i++) {
    //var positionX = map(int(itemsJSON.data[i].year), -400, 2020, 0, 2020 * 3);
    items.push(new Item(200 * i, windowHeight / 2, 100, 100, sizeScale, posX, posY,
      itemsJSON.data[i].name,
      itemsJSON.data[i].projectName,
      itemsJSON.data[i].year,
      itemsJSON.data[i].link,
      itemsJSON.data[i].tag,
      i));
  }*/

  for (var i = 0; i < itemsCount; i++) {
    items.push(new Item(i,
      100,
      100,
      110,
      "Álvaro Obregón",
      window['img' + i],
      detailInfoImage,
      color(167, 225, 234), [20, 20, 20, 20, 20]));

  }

}


function drawItems() {
  for (var i = 0; i < itemsCount; i++) {
    items[i].update();
    items[i].display();
  }
}