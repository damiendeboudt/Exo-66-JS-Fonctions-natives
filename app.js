//console.log(random());

let var1 = document.getElementById("entier");
let var2 = document.getElementById("flottant");
let var3 = document.getElementById("non-numerique");
let var4 = document.getElementById("random");
let var5 = document.getElementById("trunc");
let var6 = document.getElementById("replace");
let operande = 10;

//1
var1.innerHTML = operande * parseInt(var1.innerText);

//2
var2.innerHTML = operande * parseFloat(var2.innerText) + parseInt(var1.innerHTML);

//3
if (isNaN(var3)) {
    var3.innerHTML = 0;
}
//4
for (let i = 0; i < 1; i++) {
    var4.innerText = Math.random();
    console.log(var4);
    var4.innerText = var4.innerText;
}
//5
var5.innerText = Math.trunc(var5.innerText);

//6
var8 = var6.innerText.replace("Hello world !", "Deboudt Damien");
var6.innerHTML= var8


