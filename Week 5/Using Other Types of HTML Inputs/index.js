
function display()
{
var x=document.details.fname.value;
var y=document.details.lname.value;
var z=document.details.age.value;
var a=document.details.decision.value;
var r=document.details.recomendation.value;
var f= ""
for(i=0; i<document.details.food.length;i++){
    if(document.details.food[i].checked)
        f += (i==0?"":", ")+document.details.food[i].value;
}




alert("FIRST NAME: "+x+ "\n"  +
"LAST NAME: "+y+" \n "+
"AGE: "+z+ "\n" + 
"HAVE YOU BEEN HERE BEFORe: " +a+ "\n" +
"WOULD YOU RECOMEND THIS PAGE: " +r+ "\n"+
"FAVORITE FOOD: " + f


);
}