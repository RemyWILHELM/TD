
const btnReset = document.getElementById('btn_reset');
btnReset.addEventListener('click', recommence);

import {Morpion} from "./morpionComplet.js";  

function recommence() {
  zoneMessage = document.getElementById('messages');
  let taille = Number.parseInt(document.getElementById('taille').value);
  let Morp = new Morpion(taille, morpion, symbole);
  let modeJeu = document.getElementById('simple').checked ? 'simple' : 'complet';
  const aTrouver = this.symbole.repeat(3);
  morpion = Morp.CreateMorpion;
  if(Morp.Taille() === true){
    zoneMessage.innerHTML = "Taille invalide !!!";
  }
  else{
    let table = document.getElementById('table_morpion');
    for (let l = table.rows.length - 1; l >= 0; l--) {
      table.deleteRow(l);
    }
    for (let i = 0; i < Morp.taille; i++) {
        const ligne = table.insertRow(i);
      for (let j = 0; j < Morp.taille; j++) {
        const id = '' + ((i + 1) * 10 + (j + 1));
        const cell = ligne.insertCell(j);
        cell.innerHTML = "<input type='button' class='case' id='" + id + "' onclick='clicBouton(this, " + i + ',' + j + ")'/>";
        document.getElementById(id).value = '';
      }
    }
    zoneMessage.innerHTML = 'Joueur 1, à toi !';
    document.getElementById('btn_reset').disabled = true;
  }
}


function clicBouton (uneCase, y, x) {
  if (morpion[y][x] === ' ') {
    morpion[y][x] = symbole;
    uneCase.value = symbole;
    uneCase.classList.add('joueur' + joueur);
    nbCoups++;

    const victoire = aGagne(symbole, y, x);
    if (victoire) {
      zoneMessage.innerHTML = 'Le joueur ' + joueur + ' a gagné !';
      desactiveEcouteurs();
      symbole === 'x' ? scores[0]++ : scores[1]++;
      document.getElementById('score').innerHTML = 'X : ' + scores[0] + ' - O  : ' + scores[1];
    } else if (nbCoups === taille * taille) {
      zoneMessage.innerHTML = 'Match nul !';
      desactiveEcouteurs();
    } else {
      if (symbole === 'x') {
        symbole = 'o';
        joueur = 2;
      } else {
        symbole = 'x';
        joueur = 1;
      }
      zoneMessage.innerHTML = 'Joueur ' + joueur + ', à toi de jouer !';
    }
  } else {
    zoneMessage.innerHTML = 'Case déjà occupée !!! ';
  }
}

function desactiveEcouteurs () {
  for (let i = 0; i < taille; i++) {
    for (let j = 0; j < taille; j++) {
      document.getElementById('' + ((i + 1) * 10 + (j + 1))).removeAttribute('onclick');
    }
  }
  document.getElementById('btn_reset').disabled = false;
}

function aGagne (symbole, y, x) {
  let MorpSimp = new MorpionSimple(x, y, symbole)
  if (modeJeu === 'simple') {
    return MorpSimp.aGagne3ParmiN(symbole, y, x);
  }
}

class MorpionSimple extends Morpion{
  constructor(x, y, morpion, taille, symbole, aTrouver){
    super(x, y, morpion, symbole, taille);
    this.#aTrouver = aTrouver
  }
  aGagne3ParmiN () {  
    // gagné en ligne ? : concaténation de la ligne, et recherche de la sous-chaîne gagnante
    let ligne = '';
    morpion[this.y].forEach(element => (ligne += element));
    if (ligne.indexOf(this.#aTrouver) >= 0) {
      return true;
    }
  
    // gagné en colonne ? : concaténation de la colonne et recherche de la sous-chaîne gagnante
    let col = '';
    morpion.forEach(element => (col += element[this.x]));
    if (col.indexOf(this.#aTrouver) >= 0) {
      return true;
    }
  
    // gagné diagonale
    if (this.x === this.y) {
      let diagonale = '';
      for (let lc = 0; lc < this.taille; lc++) {
        diagonale += morpion[lc][lc];
      }
      if (diagonale.indexOf(this.#aTrouver) >= 0) {
        return true;
      }
    }
  
    // gagné diag inverse
    if (this.x === this.taille - (this.y + 1)) {
      let inverse = '';
      for (let lc = 0; lc < this.taille; lc++) {
        inverse += morpion[lc][this.taille - (lc + 1)];
      }
      if (inverse.indexOf(this.#aTrouver) >= 0) {
        return true;
      }
    }
  
    return false;
  }
}


document.getElementById('score').innerHTML = 'X : ' + scores[0] + ' - O  : ' + scores[1];
