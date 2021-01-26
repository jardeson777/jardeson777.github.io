function abrindoMenu() {
    menu.style.cssText = 
        'display: flex;'
        'justify-content: center;'
        'align-items: center;';
    texto.style = 'display: none;';
    cabecalho.style = 'align-items: initial;';
    body.style = 'display: block;';
    conteudo.style = 'display: flex;';

    if(lista.length == 0){
        document.getElementById('list').innerHTML = '<li>Não possui nenhum nome na lista.</li>';
    }
}

function buscar(){
    procurarPessoas.style = 'display: flex;';
    addPessoas.style = 'display: none';
    //conteudo.style = 'display: none;';
}

function adicionar(){
    addPessoas.style = 'display: flex;';
    procurarPessoas.style = 'display: none;';
    //conteudo.style = 'display: none;';
}

function procurarPessoa(){

}

function addPessoa(){
    var novaPessoa = document.getElementById('add').value;
    lista.push('<li>' + contador + 'º ~~> ' + novaPessoa + '</li>');
    contador++;

    //procurarPessoas.style = 'display: none;';
    //addPessoas.style = 'display: none;';
    conteudo.style = 'display: flex;';

    if(lista.length > 0){
        document.getElementById('list').innerHTML = lista;
        var listaUl = document.getElementById('list');
        listaUl.innerHTML = lista.join('')
    }
}

function mostrarTodos(){
    
}

var lista = [];
var contador = 1;