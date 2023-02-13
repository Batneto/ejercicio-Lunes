

var nota1= parseInt(prompt("mete la Primera nota: "))
var nota2= parseInt(prompt("mete la Segunda nota: "))
var nota3= parseInt(prompt("mete la Tercera nota: "))

while(nota1<=0|| isNaN(nota1)){
     nota1= parseInt(prompt("mete la Primera nota: ",0))
}

while(nota2<=0||isNaN(nota2)){
nota2= parseInt(prompt("mete la Segunda nota: ",0))
}

while(nota3<=0||isNaN(nota3)){
nota3= parseInt(prompt("mete la Tercera nota: ",0))
}


var notaMedia =  (nota1+nota2+nota3)/3
    

if(notaMedia<5){
    console.log("SUSPENSO usted a sacado un "+notaMedia);
}else if(notaMedia=5||notaMedia<7){
    console.log("APROBADO usted a sacado un "+notaMedia);
}else if(notaMedia>=7||notaMedia<=10){
    console.log("SOBRESALIENTE usted a sacado un "+notaMedia);
}

