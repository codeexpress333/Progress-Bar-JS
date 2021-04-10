const container = document.getElementById('container');
const highlight = document.getElementById('highlight');
var containerHeight;

//On Window Scroling
window.onscroll = function () {

    containerHeight = container.offsetHeight - window.innerHeight;
    containerPos = container.getBoundingClientRect();
    diff = containerHeight + containerPos.top;
    progressPercentage = diff / containerHeight * 100;
    cssWidth = Math.floor(100 - progressPercentage);

    highlight.style.width = cssWidth + "%";


};

