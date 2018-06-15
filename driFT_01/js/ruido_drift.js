
var x = 100;
var y = 100;

var xspeed = 2.5;
var yspeed = 0.5;

var canvas;

function setup() {
	canvas = createCanvas(windowWidth,windowHeight);
	//background(100);
}

function draw() {
	
	drift1();
	drift2();
	drift3();

}

// drift1 is having a noise in X and a limit in the height of the canvas in Y

function drift1() {	
	// now we define important variables
	// that will change in the time ~
	var ruidox1 = 0.0002; // this are the noise values
	var ruidoy1 = 0.00001;

	var posicionx1 = noise(millis() * ruidox1) * width;
	var posiciony1 = noise(millis() * ruidoy1) * height;

	var tamango = random(20); 
	// tamango (mango and tamarindo) 
	// is the name of an amazing mexican candy
	// the word is close to 'tamaño' that means size - haha

	x = x + xspeed;
	y = y + yspeed;

	if((x > windowWidth) || (x < 0)) {
		xspeed = xspeed * -1;
	}

	if((y > windowHeight) || (y < 0)) {
		yspeed = yspeed * -1;
	}


	noStroke();
	fill(0, random(270), 200, random (40));
	//fill(lerpColor(#FFFFFF, #000000, random(1)), 100);
	for(var x = 100; x < windowWidth; x += 4000) {
	ellipse(posicionx1, y, tamango, tamango);
	}
}

// drift2 - is a bizarre - noise in x and y - but y is multiplied by the mouseY position + 180px

function drift2() {	
	// now we define important variables
	// that will change in the time ~
	var ruidox2 = 0.00009; // this are the noise values
	var ruidoy2 = 0.00008;

	var posicionx2 = noise(millis() * ruidox2) * width;
	var posiciony2 = noise(millis() * ruidoy2) * mouseY + 180;

	var tamango = random(20); 
	// tamango (mango and tamarindo) 
	// is the name of an amazing mexican candy
	// the word is close to 'tamaño' that means size - haha

	x = x + xspeed;
	y = y + yspeed;

	if((x > windowWidth) || (x < 0)) {
		xspeed = xspeed * -1;
	}

	if((y > windowHeight) || (y < 0)) {
		yspeed = yspeed * -1;
	}


	noStroke();
	fill(255, 255, 255, random (180));
	//fill(lerpColor(#FFFFFF, #000000, random(1)), 100);
	for(var x = 100; x < windowWidth; x += 4000) {
	ellipse(posicionx2, posiciony2, tamango, tamango);
	}
}

function drift3() {	
	// now we define important variables
	// that will change in the time ~
	var ruidox3 = 0.00005; // this are the noise values
	var ruidoy3 = 0.00008;

	var posicionx3 = noise(millis() * ruidox3) * mouseX + 180;
	var posiciony3 = noise(millis() * ruidoy3) * height;

	var tamango3 = random(10); 
	// tamango (mango and tamarindo) 
	// is the name of an amazing mexican candy
	// the word is close to 'tamaño' that means size - haha

	x = x + xspeed;
	y = y + yspeed;

	if((x > windowWidth) || (x < 0)) {
		xspeed = xspeed * -1;
	}

	if((y > windowHeight) || (y < 0)) {
		yspeed = yspeed * -1;
	}


	noStroke();
	fill(0, 255, 100, random (50));
	//fill(lerpColor(#FFFFFF, #000000, random(1)), 100);
	for(var x = 100; x < windowWidth; x += 4000) {
	ellipse(posicionx3, posiciony3, tamango3, tamango3);
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
