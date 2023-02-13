
// var notaMedia;

// function pedirNumeros(n1,n2,n3) {
//     var n1= parseInt(prompt("mete la Primera nota: "))
//     var n2= parseInt(prompt("mete la Segunda nota: "))
//     var n3= parseInt(prompt("mete la Tercera nota: "))
// }


// function notaMedia(n1,n2,n3) {

//   notaMedia =  (n1+n2+n3)/3
    
// }


// function resultados() {

//     if(notaMedia<5){
//                 console.log("SUSPENSO usted a sacado un "+notaMedia);
//             }else if(notaMedia=5||notaMedia<7){
//                 console.log("APROBADO usted a sacado un "+notaMedia);
//             }else if(notaMedia>=7||notaMedia<=10){
//                 console.log("SOBRESALIENTE usted a sacado un "+notaMedia);
//             }
//         }


// pedirNumeros()
// notaMedia()
// resultados()






//! Resolucion una funciòn


function notaMedia(n1,n2,n3) {

    var n1= parseInt(prompt("mete la Primera nota: "))
    var n2= parseInt(prompt("mete la Segunda nota: "))
    var n3= parseInt(prompt("mete la Tercera nota: "))

    var notaMedia =  (n1+n2+n3)/3

    if(notaMedia<5){
        console.log("SUSPENSO usted a sacado un "+notaMedia);
    }else if(notaMedia=5||notaMedia<7){
        console.log("APROBADO usted a sacado un "+notaMedia);
    }else if(notaMedia>=7||notaMedia<=10){
        console.log("SOBRESALIENTE usted a sacado un "+notaMedia);
    }
}


notaMedia()
