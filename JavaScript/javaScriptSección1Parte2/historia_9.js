//Historia de Usuario 9: Temporizador de Cuenta Regresiva
let segundosTotales = 3670;
let horas = Math.floor(segundosTotales/3600);
let restoSegundos = segundosTotales / 3600;
let minutos = Math.floor(restoSegundos/60);
let segundos = restoSegundos % 60;

let mensaje = (`${horas} Horas, ${minutos} Minutos, ${segundos} Segundos`)
console.log(mensaje)