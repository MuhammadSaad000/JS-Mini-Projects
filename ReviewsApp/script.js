function createReview(n,a,i)
{   
    let r = new Object();
    r.name = n;
    r.age = a;
    r.img = i;
    return r;
}

var names = [];


names.push(this.createReview("Saad",20 , "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"));
names.push(this.createReview("Hassan",13 , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2b9qutatTGJWMI3iMASXm1y_Rnsek4OV1DvFG6zyIp0E7TkZtLpJ8HbZzab_srZrCv_k&usqp=CAU"));
names.push(this.createReview("Ahmad",22 , "https://www.terrainhopperusa.com/wp-content/uploads/2019/01/avatar-man.png"));
names.push(this.createReview("Muzamil" ,12  , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzzD-Zn-LLm6i5JywQ8KoJFHcSylCwZoXwO2rATahEvE5qP4a_KkbqnZXL_yNILXa1L5o&usqp=CAU"));

console.log(names);


var myName = document.getElementById("name");
var myAge = document.getElementById("age");
var img = document.getElementById("avatar");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

//set first object as starting item
var index = 0;

//load first object 
window.addEventListener("load" , function(){
   showPerson(index);
})


function showPerson(n) {
    const item = names[index];
    myName.innerHTML = item.name;
    myAge.innerHTML = item.age;
    img.src = item.img;
}


//show prev btn
prevBtn.addEventListener("click" , function()
{
    index--;
    if(index < 0)
    {
        index= names.length - 1;
        showPerson(index);  
    }
    else{
        showPerson(index);
    }    
    
})

//show next button
nextBtn.addEventListener("click" , function()
{
    index++;
    if(index > names.length -1)
    {
        index = 0;
        showPerson(index);  
    }
    else{
        showPerson(index);
    }
})