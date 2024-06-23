function selectTrigger() {
    document.getElementById('SelectSound').pause();
    document.getElementById('SelectSound').currentTime = 0;
    select();
}
function select() {
   document.getElementById("SelectSound").play();
}

function pressTrigger() {
    document.getElementById('PressSound').pause();
    document.getElementById('PressSound').currentTime = 0;
    press();
}
function press() {
   document.getElementById("PressSound").play();
}
