// JavaScript Document

function clicou(){
    document.getElementById("agradecimento").innerHTML= "<i>Obrigado por clicar!</i>";
    //alert("Obrigado por clicar!");  
}
function redirecionar(){
    window.open("https://web.digitalinnovation.one/");
    //window.location.href = "https://web.digitalinnovation.one/";
}
function trocar(elemento){
    elemento.innerHTML= "<b>Obrigado por passar o mouse!</b>";
    //document.getElementById("mousemove").innerHTML= "<b>Obrigado por passar o mouse!</b>";
    //alert("trocar texto")
}
function voltar(elemento){
    elemento.innerHTML= "Passe o mouse aqui!";
    //document.getElementById("mousemove").innerHTML= "Passe o mouse aqui!";
}
function load(){
    alert("Página carregada!");
}
function funcaoChange(elemento){
    alert(elemento.value)
}

//==============EXEMPLOS DA AULA========================================================================

/*
function validaIdade(idade){
    var validar;
    if(idade >= 18){
      validar = true  
    }
    else{
        validar = false
    }
    return validar;
}
var idade = prompt("Qual é a sua idade?");
alert(validaIdade(idade));
*/

/*
function soma(n1, n2){
    return n1+n2;
}
alert(soma(5, 10));
*/

/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(setReplace("Vai Japão", " Japão", " Brasil"));
*/

/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
alert(d.getDate());
*/

/*
var count;
for(count=0; count<=5; count++){
   alert(count); 
};
*/

/*
var count = 0;

while (count<=5){
    alert(count);
    count = count+1;//ou count++
};
*/

/*
var idade = prompt("Qual é a sua idade?");
//var idade = 18;
if (idade >= 18){
    alert("Maior de idade!");
}
else{
    alert("Menor de idade!");
}
*/


/*
var frutas = [{nome:"maçã", cor:" vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/

//var nome = "Ciro Batista da Silva";
//var idade = 41;
//var idade2 = 10;
//var frase= "O Japão é o melhor time do mundo.";
//var n1 = 5;
//var n2 = 3;
//var lista = ["macã", " pêra", " banana"];


//alert(nome+" tem "+idade+" anos. ");
//alert(idade+idade2);
//alert(frase.replace("Japão", "Brasil"));
//alert(frase.toUpperCase());
//alert(frase.toLowerCase());
//alert(n1*n2);
//alert(lista);
//alert(lista[1]);
//lista.pop();
//lista.push(" uva");
//alert(lista);
//alert(lista.length);
//alert(lista.reverse());
//alert(lista.toString());
//alert(lista.join(" - "));