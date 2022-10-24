
let Depart = document.getElementById('ChoixDepartements');
let Commu = document.getElementById('ChoixCommunes')
Commu.style.visibility = 'hidden';

fetch('https://geo.api.gouv.fr/departements', {
    method: "GET",
}).then(function (response) {
    response.json().then(function (json){
        let select = document.getElementById('ChoixDepartements');
        for(let i =0; i< json.length; i++){
            let option = json[i];
            let element = document.createElement('option');
            element.textContent = option.code +' - '+ option.nom;
            element.value = option.code;
            select.appendChild(element);
        }
    });
}).catch(function (error) {
    console.log("Problème fetch :" + error.message);
});



Depart.onchange = () =>{
    let selectElement = document.getElementById("ChoixCommunes");
    let i = selectElement.options.length - 1; 
    for(i; i >= 0; i--) { 
        selectElement.remove(i); 
    }

    fetch('https://geo.api.gouv.fr/departements/'+Depart.value+'/communes', {
        method: "GET",
        }).then(function (response) {
            response.json().then(function (json){
                let BOption = document.createElement('option');
                let select = document.getElementById('ChoixCommunes');
                BOption.textContent ="Choisisez une commune";
                BOption.value = -1;
                select.appendChild(BOption);
                for(let i =0; i< json.length; i++){
                    let option = json[i];
                    let element = document.createElement('option');
                    element.textContent = option.code +' - '+ option.nom + ' - ' + option.population    ;
                    element.value = option.code;
                    select.appendChild(element);  
                }
            });
        }).catch(function (error) {
            console.log("Problème fetch :" + error.message);
        });

    if(Depart.value != -1){
        Commu.style.visibility = 'visible';
    }else{Commu.style.visibility = 'hidden';}
}
Commu.onchange = () =>{
    fetch('https://geo.api.gouv.fr/departements/'+Depart.value+'/communes', {
        method: "GET",
        }).then(function (response) {
            response.json().then(function (json){
                let pop = document.getElementById("Population");
                for(let i =0; i< json.length; i++){
                    let option = json[i];
                    SelectVerif = document.getElementById("ChoixCommunes").options[i].selected;
                    alert(SelectVerif);
                    if(SelectVerif === true){
                        pop.textContent = option.population; 
                    }
                    
                } 
            });
        }).catch(function (error) {
            console.log("Problème fetch :" + error.message);
        });
}

