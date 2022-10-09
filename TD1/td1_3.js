//3
console.log("Exercice 3");
do{
var phrase =prompt("Entrer une phrase tout en majuscule");
}while(phrase != phrase.toUpperCase());
console.log("Phrase valide");


/*function makeid(length) { 
    let res = []; 
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; 
    let charactersLength = characters.length;     
    do{
        for ( let i = 0; i < length; i++ ) {
        res.push(characters.charAt(Math.floor(Math.random() * charactersLength))); 
        }
    }while(res != res.toUpperCase());
    return res.join(''); 
        
    } 
    
console.log(makeid(5));

function MotVoyelle(){
    let tabV = ["a","e","i","o","u","y"];
    let res = [];
    for ( let i = 0; i < 10; i++ ) {
        res.push(tabV.charAt(Math.floor(Math.random() * 10))); 
    }
}
console.log(MotVoyelle()    );*/
console.log(" ");