const carrucel = document.querySelector(".carrucel-items");

let maxScrollLeft = carrucel.scrollWidth - carrucel.clientWidth;

let intervalo=null;

let step =1;

const start =() =>{
  intervalo = setInterval(function(){
    carrucel.scrollLeft=carrucel.scrollLeft + step;
    if(carrucel.scrollLeft === maxScrollLeft){
      step = step * -1;
    }else if(carrucel.scrollLeft === 0){
    step = step * -1;}
  }, 10);
};

const stop = ()=>{};

start();