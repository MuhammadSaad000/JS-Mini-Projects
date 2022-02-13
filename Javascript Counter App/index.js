var plusBtn = document.getElementById("inc");

var minBtn = document.getElementById("dec");

var count = 0;

var disp = document.getElementById("display");

//displaying variable to screen
disp.textContent = count;

plusBtn.addEventListener('click', inc);

//increment count
function inc()
{
    count++;
    updateDisp();
}

minBtn.addEventListener('click', dec);

//decrement count 
function dec()
{
    count--;
    updateDisp();
}

//function to update display 
function updateDisp()
{
    disp.textContent = count;
}

//function to reset the counter 
var resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", reset);

function reset()
{
    count= 0;
    updateDisp();
}