function createArticle(){
    let h2 = document.createElement("h2");
    let contenu = document.createTextNode("Article 0 - Dépasser");
    h2.appendChild(contenu);
    parentDiv =document.getElementsByTagName("h2").parentNode;
    document.body.insertBefore(h2,document.body.firstChild);
    let p = document.createElement("p");
    p.innerHTML = "<span style='color:#000000;'>Il est formelement interdit de dépasser l'oganisateur du marathon</span>";
    parentDiv =document.getElementsByTagName("p").parentNode;
    document.body.insertBefore(p,document.body.children[1]);
}
createArticle();

function Majuscule() {
    document.querySelectorAll("h2").forEach(function(H2){
        H2.style.textTransform = "uppercase";
    })
    console.log(document.body.children[3].tagName);
}
Majuscule();

function Decale() {
    document.querySelectorAll("h2").forEach(function(H2){
        for(let i=1; i<document.getElementsByTagName("h2").length; i++){
            H2.textContent = 'Article ' +i;
        }
    })
}
//Decale();

function color() {
    let i=2
    while(i<document.body.childElementCount){
        document.body.children[i].style.background = "darkseagreen";
        i++;
        document.body.children[i].style.background = "darkseagreen"
        i++;
        document.body.children[i].style.background = "cyan"
        i++;
        document.body.children[i].style.background = "cyan"
        i++;
    }
}
color();
