// var idade = prompt("Digite sua idade");

/*
// Validar idade!
if(idade >= 18){
    alert("Maior de idade!");
}else{
    alert("Menor de idade");
}
*/

/*
// Lista/Array e dicionario
var listaFrutas = ["maçã", "banana"];
var dicionarioFrutas = {"maçã" : "vermelha", "limão" : "Verde"};
var listaDicionariotaFrutas = [{"maçã" : "vermelha"}, {"abacate" : "verde"}];

// alert(listaFrutas[1]);
// alert(listaDicionariotaFrutas.[0].maçã);
// alert(dicionarioFrutas.limão);
console.log(listaFrutas[1]);
console.log(listaDicionariotaFrutas.[0].maçã);
console.log(dicionarioFrutas.limão);
*/


/*
// função
function validarIdade(idade) {
    if(idade >= 18){
        return "Maior de idade!"
    }else{
        return "Menor de idade"
    }
}

valorIdade = validarIdade(idade);
alert(valorIdade);
console.log(valorIdade);
*/

var igmUser = "usuario-homem.png";
var igmUser2 = "usuário.png";


function alterarImg(elemento){
    elemento.src = igmUser;
}

function voltarImg(elemento){
    elemento.src = igmUser2;
}

function clicou(){
    // alert("Thans for clicking!");
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
}
function redirecionar(){
    // abre uma nova aba
    // window.open("https://www.google.com/");

    // abre na mesma aba
    window.location.href = "https://onepieceex.net/episodios/online/952/";
}
function trocar(elemento){
    // alert("Trocar");
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML =  "Passe o mouse aqui";
}

function load(){
    alert("Pagina carregada!")
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
