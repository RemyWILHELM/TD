import {getSum41, getNumberOfEven42, getMaxEven45Alt3} from "./array_utils.js";


let i=1;
function Create(){
    i++;
    const innForm = "<br><br>Élément "+i+": <input id='nbr' type='number'>";
    let form= document.getElementById('listeElem');
   form.innerHTML += innForm;
}
document.getElementById("Create")
        .addEventListener("click", Create);


function Affiche(){
    let Input = document.getElementsByTagName("input");
    let nbrInput = Input.length-1;
    let array = new Array()
    for(let y=0; y<nbrInput;y++)
    {
        array.push(parseInt(Input[y].value));
    }
    document.getElementById("Somme").innerHTML=getSum41(array);
    document.getElementById("nbrPair").innerHTML=getNumberOfEven42(array);
    if(getMaxEven45Alt3(...array) != -Infinity){
        document.getElementById("PGPair").innerHTML=getMaxEven45Alt3(...array);
    }else{ document.getElementById("PGPair").innerHTML="pas de pairs dans la table";}
    document.getElementById("posiTab").innerHTML=array.indexOf(getMaxEven45Alt3(...array));
}
document.getElementById("Affiche")
        .addEventListener("click", Affiche);