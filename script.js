"use strict"

let hourEl = document.getElementById("hour");
let minEl = document.getElementById("min");
let secEl = document.getElementById("sec");
let ampmEl = document.getElementById("ampm");

function clock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = (h>12)? "pm" : "am";

    if(h>12){
        h = h - 12;
    }

    h = (h<10)? "0"+ h: h;
    m = (m<10)? "0"+ m: m;
    s = (s<10)? "0"+ s: s;

    hourEl.innerHTML = h;
    minEl.innerHTML = m;
    secEl.innerHTML = s;
    ampmEl.innerHTML = ampm;
}

setInterval(clock, 1000);