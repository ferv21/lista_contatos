const lista = document.getElementById('form-lista');
const pessoa=[];
const numero=[];

let linhas='';

lista.addEventListener('submit', function(e){

    e.preventDefault();

    const inputNomePessoa = document.getElementById('nome-pessoa');
    const inputNumeroPessoa = document.getElementById('num-pessoa');

    if(pessoa.includes(inputNomePessoa.value)){
        alert(`O contato de : ${inputNomePessoa.value} já foi inserido!`)

    }else{

    pessoa.push(inputNomePessoa.value);
    numero.push(inputNumeroPessoa.value);

    let linha = `<tr>`;
    linha += `<td>${inputNomePessoa.value}</td>`
    linha += `<td>${inputNumeroPessoa.value}</td>`
    linha += `</tr>`;

    linhas+=linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomePessoa.value='';
    inputNumeroPessoa.value=''
}

});


