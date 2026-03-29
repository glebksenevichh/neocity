function toggle_switch(img) {
  const isOn = img.src.includes('on_switch.png');

  // toggle the switch image
  img.src = isOn ? './images/off_switch.png' : './images/on_switch.png';

  // toggle the body background image
  document.body.style.backgroundImage = isOn
    ? 'url(./images/crazy_page_bg.png)'
    : 'url(./images/page_bg.png)';
}