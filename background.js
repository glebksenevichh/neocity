let stars = [];
let currentWidth;
let currentHeight;

function setup() {

  createCanvas(windowWidth, windowHeight);
  background(0);
  currentWidth = windowWidth;
  currentHeight = windowHeight;

  let numStars = windowWidth;
  // Create an array of stars with random positions and initial brightness
  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      size: random(1, 4), // Random star size
      brightness: random(50, 255), // Random initial brightness
      pulseSpeed: random(1, 5), // Random pulsating speed
    });
  }
}

function draw() {
  background(0); // Redraw the black background each frame

  // Draw the stars with pulsating effect
  for (let star of stars) {
    star.brightness += star.pulseSpeed * (random(0.5, 1.5));
    
    // Reverse pulse direction when brightness hits bounds
    if (star.brightness > 255 || star.brightness < 150) {
      star.pulseSpeed *= -1;
    }

    fill(star.brightness);
    noStroke();
    ellipse(star.x, star.y, star.size, star.size); // Draw each star
  }
}

function windowResized()
{
    if (windowWidth > currentWidth || windowHeight > currentHeight) {
        stars = [];
        clear();
        console.log("cleared");
        setup();
        draw();
    }
}