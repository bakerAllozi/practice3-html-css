'use strict';
const hd = document.querySelector('.hd') 
const click1 = document.querySelector('.click1')

click1.addEventListener('click' , function(){
    hd.classList.toggle('hidden')
})