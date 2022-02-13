const colors = ['red', 'black' , 'white' , 'blue' , ' yellow', 'yellowgreen']

var btn = document.getElementById("bgColor");

btn.addEventListener('click', fun);

function fun()
{
    const random = parseInt(Math.floor(Math.random() * colors.length));
    
    var head = document.getElementById("main-heading");

    var tag = document.getElementsByTagName('body');


    for(var i =0;i<tag.length;i++)
    {
        tag[i].style.backgroundColor = colors[random];
        document.getElementById("myColor").innerText = colors[random];

        if(colors[random] == 'black' )
        {
            head.style.color = "white";
        }
        else{
            head.style.color = 'black';
        }
    
    }      
}
