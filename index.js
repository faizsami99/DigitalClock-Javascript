
function digitalClock(){
    let time = document.getElementById("time");
    let dat = document.getElementById("date");
    let date = new Date();
    dat.innerText = date.toLocaleDateString();
    time.innerText = date.toLocaleTimeString()
}

setInterval(digitalClock, 1000);