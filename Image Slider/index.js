const images = [
    "/Images/img1.jpeg",
    "/Images/img2.jpeg",
    "/Images/img3.jpeg",
    "/Images/img4.jpeg",

];

index = 0;

window.addEventListener("load" , function()
{
    showImage(index);
})

var img = document.getElementById("poster");
function showImage(n)
{       
    img.src = images[index];
}

document.getElementById("prev").addEventListener("click" , function()
{
    index--;
    if(index < 0)
    {
        index = images.length -1 ;
        showImage(index);
    }
    else{
        showImage(index);
    }
})



document.getElementById("next").addEventListener("click" , function()
{
    index++;
    if(index > images.length - 1)
    {
        index = 0;
        showImage(index);
    }
    else{
        showImage(index);
    }
})
