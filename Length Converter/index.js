var input = document.getElementById("inputUnit");
var output = document.getElementById("outputUnit");

var inValue = document.getElementById("inputBox");
var outVal = document.getElementById("outputBox");

output.addEventListener("change" , checkValues);
input.addEventListener("change" , checkValues);


outVal.addEventListener("input" , checkValues);
inValue.addEventListener("input" , checkValues);

function checkValues()
{
    if(input.value == output.value)
    {
        outVal.value = inValue.value;
    }

    //metre to centimetre
    else if(input.value == "Metres" && output.value =="Centimetres")
    {   
        outVal.value = inValue.value *100;
    }

    else if(output.value == "Metres" && input.value =="Centimetres")
    {
        outVal.value = inValue.value/100;
    }

    //metre to feet
    else if(input.value =="Metres" && output.value =="Feet")
    {
        outVal.value = inValue.value * 3.2808;
    }

    else if(output.value =="Metres" && input.value =="Feet")
    {   
        outVal.value = inValue.value / 3.2808;
    }

    //metres to inches 
    else if (input.value =="Metres" && output.value == "Inches")
    {
        outVal.value = inValue.value * 39.370;
    }

    else if (output.value =="Metres" && input.value == "Inches")
    {
        outVal.value = inValue.value / 39.370;
    }


    //centimetre to feet
    else if(input.value=="Centimetres" && output.value =="Feet")
    {
        outVal.value = inValue.value * 0.032808;
    }

    else if(output.value=="Centimetres" && input.value =="Feet")
    {
        outVal.value = inValue.value / 0.032808;
    }

    //centimetre to inches
    else if(input.value=="Centimetres" && output.value =="Inches")
    {
        outVal.value = inValue.value * 0.39370;
    }

    else if(output.value=="Centimetres" && input.value =="Inches")
    {
        outVal.value = inValue.value / 0.39370;
    }


    //inches to feet
    else if(input.value=="Inches" && output.value =="Feet")
    {
        outVal.value = inValue.value * 0.083333;
    }

    else if(output.value=="Inches" && input.value =="Feet")
    {
        outVal.value = inValue.value / 0.083333;
    }

    //metre to kilometre
    else if(input.value=="Metres" && output.value =="kms")
    {
        outVal.value = inValue.value / 1000;
    }

    else if(output.value=="Metres" && input.value =="kms")
    {
        outVal.value = inValue.value * 1000;
    }

    //centimetre to kilometre
    else if(input.value=="Centimetres" && output.value =="kms")
    {
        outVal.value = inValue.value / 100000;
    }

    else if(output.value=="Centimetres" && input.value =="kms")
    {
        outVal.value = inValue.value * 100000;
    }

    //feet to kilometres

    else if(input.value=="Feet" && output.value =="kms")
    {
        outVal.value = inValue.value / 3280.8;
    }

    else if(output.value=="Feet" && input.value =="kms")
    {
        outVal.value = inValue.value * 3280.8;
    }


    //kilometre to inches
    else if(input.value=="kms" && output.value =="Inches")
    {
        outVal.value = inValue.value * 39370;
    }

    else if(output.value=="kms" && input.value =="Inches")
    {
        outVal.value = inValue.value / 39370;
    }
}
