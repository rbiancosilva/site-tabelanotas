

const form = document.getElementById("form");
const imgaprovado = '<img src="./imagens-sitepasta/emoji-feliz.png"/>';
const imgreprovado = '<img src="./imagens-sitepasta/emoji-triste.png"/>';
const nota_minima = parseInt(prompt("Digite a média necessária: "));

let arraynomes = [];
let arraynotas = [];

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    
    adicionaRow();
    formataMedia();

})

let linhas = '';
const tabela_body = document.querySelector("tbody");
function adicionaRow(){

    let nomeatual= (document.getElementById("nome").value).toLowerCase();
    let notaatual=(document.getElementById("nota").value);
    
    if(arraynomes.includes(nomeatual)){
        alert("Esta atividade já foi incluída!");
    } else {
        
        let linha = '<tr>';
        linha += `<td>${nomeatual}</td>`;
        linha += `<td>${notaatual}</td>`;
        linha += `<td>${notaatual >= nota_minima ? imgaprovado : imgreprovado}</td>`;
        linha += '</td>';

        linhas +=linha;

        tabela_body.innerHTML = linhas;
        arraynotas.push(notaatual);
        arraynomes.push(nomeatual);
    
    }
    


}
function formataMedia(){
    let somanotas=0;
    for(i=0; i<arraynotas.length; i++){
    somanotas+=parseInt(arraynotas[i]);
    }
    let media=somanotas/arraynotas.length;
    document.getElementById("nota_media").innerHTML= media;
    
    document.getElementById("status").innerHTML = media >=nota_minima ? "Aprovado" : "Reprovado";
    
    if(media>=parseInt(nota_minima)){
        document.getElementById("status").classList.remove("reprovado");
        document.getElementById("status").classList.add("aprovado");
    } else{
        document.getElementById("status").classList.remove("aprovado");
        document.getElementById("status").classList.add("reprovado");
    }
    
    
}

