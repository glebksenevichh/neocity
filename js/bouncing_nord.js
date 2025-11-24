const gif = document.getElementById('nord');

// Position and velocity
let x = Math.random() * (window.innerWidth - 100);
let y = Math.random() * (window.innerHeight - 100);
let dx = 2; // horizontal speed
let dy = 2; // vertical speed
let isPaused = false;
let animationId;

// Get GIF dimensions
const gifWidth = 100;
const gifHeight = 100;

const gifSrc = './images/nordspin.gif';
const staticSrc='./images/nord_content_aware.png';

function animate() {
    if (!isPaused) {
        x += dx;
        y += dy;
        
        // Bounce off edges
        if (x + gifWidth >= window.innerWidth || x <= 0) {
            dx = -dx;
        }
        
        if (y + gifHeight >= window.innerHeight || y <= 0) {
            dy = -dy;
        }
        
        gif.style.left = x + 'px';
        gif.style.top = y + 'px';
    }
    
    animationId = requestAnimationFrame(animate);
}

// Click event to toggle pause
gif.addEventListener('click', function() {
    isPaused = !isPaused;
    if (isPaused)
    {
        gif.src = staticSrc;
    }
    else
    {
        gif.src = gifSrc;
    }
});

animate();