var color = document.getElementById("fav-color");

var inCol = document.getElementById("color-value");

color.addEventListener("input", function()
{
    inCol.value = color.value;
})

var fname = document.getElementById("fname").value;
var lname = document.getElementById("lname").value;
var dob = document.getElementById("dob").value;

function valForm()
{
    let g = document.forms["pop-form"]["gender"].value;
    let x = document.forms["pop-form"]["fname"].value;
    let y = document.forms["pop-form"]["lname"].value;
    let z = document.forms["pop-form"]["dob"].value;
    if(x=="" || y== "" || z=="")
    {
        document.write("Form must be filled properly ");
    }
}

document.getElementById("submit-btn").addEventListener("click", valForm);

document.getElementById("open-form").addEventListener("click", function()
{
    document.getElementById("popup-form").style.display ="block";
})