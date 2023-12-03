const prompt = require("prompt-sync")();

let nota1 = parseFloat(prompt("Digite a nota 1: "));
let nota2 = parseFloat(prompt("Digite a nota 2: "));
let nota3 = parseFloat(prompt("Digite a nota 3: "));
let media = (nota1 + nota2 + nota3) / 3;

function resultado() {
  if (media <= 5) {
    console.log("Voce esta reprovado");
  } else if (media > 5) {
    console.log("Aprovado!");
  } else {
    console.log("voce é o maximo");
  }
}

console.log(`A media final é de ${media.toFixed(1)}`);
resultado();
