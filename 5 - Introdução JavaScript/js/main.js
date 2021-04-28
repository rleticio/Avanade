/*
Parte 1

var nome = "Rafael";
var n1 = 31;
var n2 = 10;
var frase = "Japão é o melhor time do mundo";
// comentario simples
alert(nome + " tem " + n1 + n2 + " anos");
//alert (n1 + n2);
console.log(n1 + n2);
console.log(frase.replace("Japão","Brasil"));
console.log(frase.toUpperCase());
*/

/*
Parte 2
var lista = ["Maça","Pera","Laranja"]
console.log(lista[0]);
lista.push("uva");
console.log(lista);
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString()[0]);
console.log(lista.join(" - "));

var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta);
console.log(fruta.nome);

var frutas = [{nome:"maçã", cor:"vermelha"},{nome:"uva", cor:"roxa"}]
console.log(frutas[1].nome);
*/

/*
Parte 3

var idade = 18;
var idade2 = prompt("qual sua idade");

if (idade >= 18){
	alert("maior de idade");
}else{
	alert("menor de idade");
}

var count = 0;
while (count <= 5){
	console.log(count);
	alert(count);
	count++;
}

var count2;
for(count2=0; count2 <= 5; count2++){
	alert(count2);
}

var d = new Date();
alert (d);
alert (d.getMonth() + 1);
// começa do 0, por isso +1 para trazer o mês correto
alert (d.getMinutes());
alert (d.getDay());
alert (d.getHours());
*/

/*
Parte 4

function soma(n1, n2){
	return n1 + n2;
}

alert(soma(5,10));

function setreplace(frase, nome, novo_nome){
	return frase.replace(nome, novo_nome);
}

alert(setreplace("Vai Japão","Japão","Brasil"))


function validaidade(idade){
	var validar;
	if (idade >= 18){
		validar = true;
	}else{
		validar = false;
	}
	return validar;
}

var idade = prompt("Qual a sua idade?");

console.log(validaidade(idade));

*/

/*
Parte 5
*/

function funbotao(){
	//alert("Obrigado por clicar");
	document.getElementById("obrigadoclicar").innerHTML = "<b>Obrigado por Clicar</b>";
	//console.log(document.getElementById("obrigadoclicar"));

}

function redirecionar(){
	window.open("https://www.google.com/");
	window.location.href = "https://www.google.com/";
}

function trocar(elemento){
	//alert("trocar texto");
	//document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
	elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
	//document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
	elemento.innerHTML = "Passe o mouse aqui";
}

function funload(){
	alert("pagina carregada");
}

function funcaochange(elemento){
	console.log(elemento.value)
}
