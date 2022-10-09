//4
console.log("Exercice 4");
const tabN = [262, 24, 73, 4];
let somme = 0;

for (let i = 0; i < tabN.length; i++) {
    somme += tabN[i];
}
console.log(somme);

console.log("");
let y = 0;
for (let i = 0; i < tabN.length; i++) {
    if(tabN[i] % 2 === 0)
    {
        y++;
    }
}
console.log(y);

console.log("");
const tab1 = [20, 12, 136];
const tab2 = [985, 3, 554];
const tabfus = tab1.concat(tab2);

function sortNumbers (arr) {
    let newArr = arr;
    let temp = arr;
     for(let i=0; i<arr.length;i++){
         for(let j=0; j<arr.length;j++){
           if (arr[i] > newArr[j]){
               temp = arr[i]
               arr[i] = newArr[j];
               newArr[j] = temp;
             }
           }
           return console.log(newArr);
         }
       }

    sortNumbers(tab1);
    sortNumbers(tab2);
    sortNumbers(tabfus);