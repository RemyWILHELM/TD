localStorage.setItem('StartValue', 0);
function tableau(){
fetch("https://data.economie.gouv.fr/api/records/1.0/search/?dataset=controle_techn&q=&start="+localStorage.getItem('StartValue')+"&facet=cct_code_dept&facet=code_postal&facet=cct_code_commune&facet=cct_denomination&facet=cat_vehicule_libelle&facet=cat_energie_libelle&facet=prix_visite&facet=prix_contre_visite_min&facet=prix_contre_visite_max", {
    method: "GET",
    }).then(function (response) {
        response.json().then(function (json){
            for(let i =0; i< 10; i++){
                let tr = document.createElement('tr');
                let td1 = document.createElement('td');
                let td2 = document.createElement('td');
                let td3 = document.createElement('td');
                let td4 = document.createElement('td');
                let td5 = document.createElement('td');
                td1.textContent =json.records[i].fields.cct_denomination;
                td2.textContent =json.records[i].fields.cct_adresse;
                td3.textContent =json.records[i].fields.prix_visite+"€";
                td4.textContent =json.records[i].fields.prix_contre_visite_min+"€";
                td5.textContent =json.records[i].fields.prix_contre_visite_max+"€";
                let table = document.getElementById('tableau');
                table.appendChild(tr);
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);
            }
        });
    }).catch(function (error) {
        console.log("Problème fetch :" + error.message);
    });
}
function suppr(){
    for(let i =0; i< 10; i++){
        let tr = document.querySelector('tr'); 
        tr.remove();
    }

}
tableau();
    function suivant(){
        localStorage.setItem('StartValue', parseInt(localStorage.getItem('StartValue'))+10)
        suppr();
        tableau();
    }
    function précédent(){
        if(localStorage.getItem('StartValue') !=0){
            localStorage.setItem('StartValue', parseInt(localStorage.getItem('StartValue'))-10);
            suppr();
            tableau();
        }
    }
    //refine.cct_code_commune="+localStorage.getItem("Commune")+"&