export class Morpion {
  #x;
  #y;
  #taille;
  #morpion;
  #symbole;

  constructor(x, y, taille, morpion, symbole)
  {
    this.#x = x;
    this.#y = y;
    this.#taille = taille;
    this.#morpion = morpion;
    this.#symbole = symbole;
  }
  Taille() {
    const MAX_GRILLE = 8;
    const MIN_GRILLE = 3;
    if (Number.isNaN(this.#taille) || this.#taille < MIN_GRILLE || this.#taille > MAX_GRILLE) {
      return true;
    } else {
      return false;
    }
  }

  get CreateMorpion() {
    let morpion = new Array(this.#taille);
    for (let i = 0; i < this.#taille; i++) {
      morpion[i] = new Array(this.#taille);
      for (let j = 0; j < this.#taille; j++) {
        morpion[i][j] = ' ';
      }
    }
    return morpion;
  }

  aGagne(){
    let nbSymboles;

    // gagné en ligne ?
    const ligne = this.#y;
    nbSymboles = 0;
    for (let col = 0; col < this.#taille; col++) {
      if (morpion[ligne][col] === this.#symbole) {
        nbSymboles++;
      }
    }
    if (nbSymboles === this.#taille) {
      return true;
    }
  
    // gagné en colonne ?
    const col = this.#x;
    nbSymboles = 0;
    for (let ligne = 0; ligne < this.#taille; ligne++) {
      if (morpion[ligne][col] === this.#symbole) {
        nbSymboles++;
      }
    }
    if (nbSymboles === this.#taille) {
      return true;
    }
  
    // gagné diagonale
    if (this.#x === this.#y) {
      nbSymboles = 0;
      for (let lc = 0; lc < this.#taille; lc++) {
        if (morpion[lc][lc] === this.#symbole) {
          nbSymboles++;
        }
      }
      if (nbSymboles === this.#taille) {
        return true;
      }
    }
  
    // gagné diag inverse
    if (this.#x === this.#taille - (this.#y + 1)) {
      nbSymboles = 0;
      for (let ligne = 0; ligne < this.#taille; ligne++) {
        if (morpion[ligne][this.#taille - (ligne + 1)] === this.#symbole) {
          nbSymboles++;
        }
      }
      if (nbSymboles === this.#taille) {
        return true;
      }
    }

    return false;
  }
}