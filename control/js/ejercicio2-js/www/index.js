'use strict';
// function getDate() {
//     const now = new Date();
//     const laHora = ${now.getSeconds()}, ${now.getMinutes()}, ${now.getHours()}, ;
//     console.log(laHora);
// }

// setInterval(getDate, 5000);
const present = new Date();

console.log(
    present.toLocaleString('es', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    })
);

let seconds = 0;
let minutes = 0;
let hours = 0;
let days = 0;

const date = () => {
    seconds += 5;

    if (seconds >= 60) {
        minutes++;
        seconds = 0;
    }
    if (minutes >= 60) {
        hours++;
        seconds = 0;
        minutes = 0;
    }
    if (hours >= 24) {
        days++;
        seconds = 0;
        hours = 0;
    }
    console.log(`Han pasado ${days} dias, ${hours} horas, ${minutes} minutos
      y ${seconds} segundos desde la ejecucion del programa`);
};

setInterval(date, 5000);
