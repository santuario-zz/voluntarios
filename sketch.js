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
var backgroundOverImage;
var detailInfoImage;
var items = [];
var itemsCount = 16;


// Header
var headerSubtitle;

// Scale;
var scaleTitle;
var scaleMaxValue;

// State
var currentColor;
var STATE;

// Font
var geoMidFont
var geoSmallFont;

//JSON
var itemsJSON;


/*
 *****************************************
 *****************************************
 * LYFE CYCLE METHODS
 *****************************************
 *****************************************
 */

function preload() {
  
  itemsJSON = loadJSON("assets/data/data.json");

  backgroundImage = loadImage("assets/images/CDMX_Template.png");
  backgroundOverImage = loadImage("assets/images/CDMX_Template_Over.png");
  detailInfoImage = loadImage("assets/images/CDMX_Template_Icons.png");

  for (var i = 0; i < itemsCount; i++) {
    var nameImage = "assets/images/CDMX_Template_" + i + ".png";
    window['img' + i] = loadImage(nameImage);
  }

  for (var i = 0; i < 4; i++) {
    var nameIconImage = "assets/images/CDMX_Template_Icon_" + i + ".png";
    window['imgIcon' + i] = loadImage(nameIconImage);

  }

  geoMidFont = loadFont('assets/fonts/Geogtq-Md.otf');
  geoSmallFont = loadFont('assets/fonts/Geogtq-Ul.otf');

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
  drawHeader();
  drawScale();
  drawBackgroundOver();

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
  initializeBackgroundOver();
  initializeItems();
  initializeHeader();
  initializeScale();
  setState("MOVILITY");
}


/*
 *****************************************
 *****************************************
 * STATE METHODS
 *****************************************
 *****************************************
 */

function setState(_state) {

  if (_state == "MOVILITY") {
    STATE = "MOVILITY";
    currentColor = color(167, 225, 234)
    scaleTitle = "#Voluntarios";
    scaleMaxValue = "150";
  } else if (_state == "AGE") {
    STATE = "AGE";
    currentColor = color(167, 225, 234)
    scaleTitle = "Edad";
    scaleMaxValue = "50";
  }

  updateItemsState(_state);
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
  image(backgroundImage, correctionX, correctionY);
}

/**/ ///////////////////////////
///////////////////////////////
//////// BACKGROUND METHODS
///////////////////////////////
//////////////////////////// */ 

function initializeBackgroundOver() {

}

function drawBackgroundOver() {
  var correctionX = (windowWidth / 2) - (backgroundOverImage.width / 2);
  var correctionY = (windowHeight / 2) - (backgroundOverImage.height / 2);
  image(backgroundOverImage, correctionX, correctionY);
}


/*
 *****************************************
 *****************************************
 * HEADER METHODS
 *****************************************
 *****************************************
 */


function initializeHeader() {

  headerSubtitle = "¿De dónde venían los voluntarios y qué transporte utilizaban principalmente?"
}

function drawHeader() {
  textAlign(LEFT, TOP);
  noStroke();
  //Title
  textFont(geoMidFont);
  textSize(30);
  text("Verificado 19S", 30, 20);

  //Subtitle
  textFont(geoSmallFont);
  textSize(20);
  text(headerSubtitle, 30, 60, (windowWidth / 2) - 50, windowHeight);
}


/**/ ///////////////////////////
///////////////////////////////
//////// SCALE METHODS
///////////////////////////////
//////////////////////////// */ 

function initializeScale() {


}


function drawScale() {

  var initialPosX = 30;
  var initialPosY = 30;

  for (var i = 0; i < 150; i++) {
    fill(colorAlpha(currentColor, map(i, 0, 150, 1, 0)));
    rect(initialPosX, windowHeight - 150 - initialPosY + i, 15, 1);
  }




  //Title
  fill(0, 255);
  textSize(10);
  text(scaleTitle, initialPosX, windowHeight - initialPosY + 3);
  textAlign(LEFT, BOTTOM);
  text("0", initialPosX + 15 + 3, windowHeight - initialPosY);
  textAlign(LEFT, TOP);
  text(scaleMaxValue, initialPosX + 15 + 3, windowHeight - initialPosY - 150);


}

function colorAlpha(aColor, alpha) {
  var c = color(aColor);
  return color('rgba(' + [red(c), green(c), blue(c), alpha].join(',') + ')');
}


/*
 *****************************************
 *****************************************
 * ITEMS METHODS
 *****************************************
 *****************************************
 */


function initializeItems() {

  for (var i = 0; i < itemsCount; i++) {
    items.push(new Item(itemsJSON.data[i].id, itemsJSON.data[i].x,
      itemsJSON.data[i].y,
      itemsJSON.data[i].voluntaryNumber,
      itemsJSON.data[i].nameItem,
      window['img' + i],
      detailInfoImage,
      window['imgIcon' + itemsJSON.data[i].mobilityIndex],
      color(167, 225, 234), itemsJSON.data[i].mobilityArray,itemsJSON.data[i].agesIndex,itemsJSON.data[i].agesArray ));

  }

}


function drawItems() {
  for (var i = 0; i < itemsCount; i++) {
    items[i].update();
    items[i].display();
  }
}


function updateItemsState(_state) {

  for (var i = 0; i < itemsCount; i++) {
    items[i].updateState(_state);
  }
}


/*
 *****************************************
 *****************************************
 * UI METHODS
 *****************************************
 *****************************************
 */


function mouseClicked() {
  //print(((windowWidth / 2) - mouseX) + " :: " + mouseX + " , " + ((windowHeight / 2) - mouseY) + " :: " + mouseY);
}