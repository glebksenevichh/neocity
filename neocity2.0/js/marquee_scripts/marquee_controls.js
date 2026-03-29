function change_marquee_image() 
{
    let controls = document.getElementById("marquee_controls")
    let marquee = document.getElementsByClassName("scrolling-text-inner")[0];

    if (controls.src.includes("pause.GIF"))
    {
        controls.src = "./images/play.GIF";
        marquee.classList.add("paused");
    } 
    else 
    {
        controls.src = "./images/pause.GIF";
        marquee.classList.remove("paused");
    }
}