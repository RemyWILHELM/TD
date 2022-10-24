
let Depart = document.getElementById('ChoixDepartements');
let Commu = document.getElementById('ChoixCommunes');
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
                    element.textContent = option.code +' - '+ option.nom;
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

async function Test() {
    await fetch('https://geo.api.gouv.fr/departements/'+Depart.value+'/communes', {
        method: "GET",
        }).then(function (response) {
            response.json().then(function (json){
                let pop = document.getElementById("Population");
                for(let i =0; i< json.length; i++){
                    let option = json[i-1];
                    let SelectVerif = document.getElementById("ChoixCommunes").options[i].selected;
                    if(SelectVerif === true){
                        pop.textContent = option.population; 
                    }                  
                    localStorage.setItem('Commune', option.nom);
                }                
            });
        }).catch(function (error) {
            console.log("Problème fetch :" + error.message);
        });
}
Commu.onchange = () =>{
    Test();
}

fetch('https://api.openweathermap.org/data/3.0/onecall?lat=48.8534&lon=2.3488&lang=fr&appid=61045d1987baa451240e99af2c7d789b', {
    method: "GET",
    }).then(function (response) {
        response.json().then(function (json){
            localStorage.setItem("temp",json.current.temp - 273 + "°C");
            localStorage.setItem("feels_like",json.current.feels_like - 273 + "°C");
            localStorage.setItem("min",json.daily[0].temp.min - 273 + "°C");
            localStorage.setItem("max",json.daily[0].temp.max - 273 + "°C");
            localStorage.setItem("weather",json.current.weather[0].description);
            localStorage.setItem("humidity",json.current.humidity+"%");              
        });
    }).catch(function (error) {
        console.log("Problème fetch :" + error.message);
    });
