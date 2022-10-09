let j1 = prompt("Nom joueur 1:");
let j2 = prompt("Nom joueur 2:");
let winj1 = 0;
let winj2 = 0;
let egalite = 0;
let tour = 1;
let taille_grille = 0;

function choix()
{
select = document.getElementById("Choix");
select2 = document.getElementById("Choix2");
bouton = document.querySelector("button");
grille = select.selectedIndex;
mode = select2.selectedIndex;

taille_grille = select.options[grille].value;
valeur_select_mode = select2.options[mode].value;

select.remove();
select2.remove();
bouton.remove();

let table = document.getElementById("tab_morpion");
for(let i=0; i<taille_grille; i++)
{
let row = table.insertRow();
    for(let i=0; i<taille_grille; i++)
    {
        let cell = row.insertCell();
        cell.addEventListener("click",clicker.bind(null, cell));
    }
}
table.style.display = "block";
let who = document.getElementById("who");
who.innerHTML = "Au tour de " + j1 + " (O)";
let win1 = document.getElementById("win1");
win1.innerHTML = "Score j1: " + winj1 + " (O)";
let win2 = document.getElementById("win2");
win2.innerHTML = "Score j2: " + winj2 + " (X)";
}

function clicker(element){
    if(!element.innerHTML)
    {
        if(tour==1)
        {
            who.innerHTML = "Au tour de " + j2 + " (X)";
            element.appendChild(document.createTextNode('O'));
            tour=2;
            
        }else
        {
            
            who.innerHTML = "Au tour de " + j1 + " (O)";
            element.appendChild(document.createTextNode('X'));
            tour=1;
            
        }
        
    }
    morpionLigne();
    morpionCol();
    morpionDiag();
    morpionDiagInv();
}

function morpionLigne()
{
    let butrestart = document.querySelectorAll("button");
    let table = document.getElementById("tab_morpion");
    let totalRows = taille_grille;
    let totalCol = taille_grille;
    if(valeur_select_mode == 1)
    {
        for (let x = 0; x <= totalRows-1; x++)
        {
            let val_cell = "";
             for (let y = 0; y <= totalCol-1; y++)
            {
             val_cell += table.rows[x].cells[y].innerHTML;
            }
        
            if (val_cell == "OOO"){
                alert("Joueur 1 gagne");
                winj1++;
                let win1 = document.getElementById("win1");
                win1.innerHTML = "Score j1: " + winj1 + " (O)";
                butrestart[0].style.display = "block";
            } else if (val_cell == "XXX") {
                alert("Joueur 2 gagne");
                winj2++;
                let win2 = document.getElementById("win2");
                win2.innerHTML = "Score j2: " + winj2 + " (X)";
                butrestart[0].style.display = "block";
            } 
        }
    }
}

function morpionCol()
{
    let butrestart = document.querySelectorAll("button");
    let table = document.getElementById("tab_morpion");
    let totalRows = taille_grille;
    let totalCol = taille_grille;
    if(valeur_select_mode == 1)
    {
    for (let x = 0; x <= totalCol-1; x++)
    {
        let val_cell = "";
         for (let y = 0; y <= totalRows-1; y++)
        {
         val_cell += table.rows[y].cells[x].innerHTML;
        }
    
        if (val_cell == "OOO"){
            alert("Joueur 1 gagne");
            let win1 = document.getElementById("win1");
            winj1++;
            win1.innerHTML = "Score j1: " + winj1 + " (O)";
            butrestart[0].style.display = "block";
        } else if (val_cell == "XXX") {
            alert("Joueur 2 gagne");
            let win2 = document.getElementById("win2");
            winj2++;
            win2.innerHTML = "Score j2: " + winj2 + " (X)";
            butrestart[0].style.display = "block";
        } 
    }
}
}

function morpionDiag()
{
    let butrestart = document.querySelectorAll("button");
    let table = document.getElementById("tab_morpion");
    let totalRows = taille_grille;
    let totalCol = taille_grille;
    
    let val_cell = "";
    if(valeur_select_mode == 1)
    {
    for (let i = 0; i < table.rows.length; i++) {
      let row = table.rows[i];
      val_cell += row.cells[i].innerHTML;
    }
    
        if (val_cell == "OOO"){
            alert("Joueur 1 gagne");
            let win1 = document.getElementById("win1");
            winj1++;
            win1.innerHTML = "Score j1: " + winj1 + " (O)";
            butrestart[0].style.display = "block";
        } else if (val_cell == "XXX") {
            alert("Joueur 2 gagne");
            let win2 = document.getElementById("win2");
            winj2++;
            win2.innerHTML = "Score j2: " + winj2 + " (X)";
            butrestart[0].style.display = "block";
        } 
    }
    }

    function morpionDiag()
{
    let butrestart = document.querySelectorAll("button");
    let table = document.getElementById("tab_morpion");
    
    let val_cell = "";
    if(valeur_select_mode == 1)
    {
    for (let i = 0; i < table.rows.length; i++) {
      let row = table.rows[i];
      val_cell += row.cells[i].innerHTML;
    }
    
        if (val_cell == "OOO"){
            alert("Joueur 1 gagne");
            let win1 = document.getElementById("win1");
            winj1++;
            win1.innerHTML = "Score j1: " + winj1 + " (O)";
            butrestart[0].style.display = "block";
        } else if (val_cell == "XXX") {
            alert("Joueur 2 gagne");
            let win2 = document.getElementById("win2");
            winj2++;
            win2.innerHTML = "Score j2: " + winj2 + " (X)";
            butrestart[0].style.display = "block";
        } 
    }
    }

    function morpionDiagInv()
    {
        let butrestart = document.querySelectorAll("button");
        let table = document.getElementById("tab_morpion");
        
        let val_cell = "";
        if(valeur_select_mode == 1)
        {
            let row1 = table.rows[0];
            val_cell += row1.cells[2].innerHTML;
            let row2 = table.rows[1];
            val_cell += row2.cells[1].innerHTML;
            let row3 = table.rows[2];
            val_cell += row3.cells[0].innerHTML;
            if (val_cell == "OOO"){
                alert("Joueur 1 gagne");
                let win1 = document.getElementById("win1");
                winj1++;
                win1.innerHTML = "Score j1: " + winj1 + " (O)";
                butrestart[0].style.display = "block";
            } else if (val_cell == "XXX") {
                alert("Joueur 2 gagne");
                let win2 = document.getElementById("win2");
                winj2++;
                win2.innerHTML = "Score j2: " + winj2 + " (X)";
                butrestart[0].style.display = "block";
            } 
        }
        }
    
