function change_steamhappy() 
{
    const img = document.getElementById("steamhappy");
    
    img.addEventListener('mouseenter', function() {
        this.src = './images/steam_happy.gif'; 
    });
    
    img.addEventListener('mouseleave', function() {
        this.src = './images/steam_happy.png';
    });
}

change_steamhappy();