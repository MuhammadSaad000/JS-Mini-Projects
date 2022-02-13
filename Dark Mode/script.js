var x = document.getElementsByTagName("article");
var h1 = document.getElementById("main-heading");

var btn = document.getElementById("dark");

btn.addEventListener("click", function()
{
    if(btn.innerHTML=='Light Theme')
    {
        btn.innerHTML = "Dark Theme";
        for(var i=0;i<x.length;i++)
        {
            x[i].style.color ="black";
            x[i].style.backgroundColor ="white";
        }
        h1.style.color="white";
    }
    else {
        btn.innerHTML = 'Light Theme';
        for(var i=0;i<x.length;i++)
        {
            x[i].style.color ="white";
            x[i].style.backgroundColor ="black"; 
        }
        h1.style.color= "green"
    }
});
