function abrindoMenu() {
    menu.style.cssText = 
        'display: flex;'
        'justify-content: center;'
        'align-items: center;';
    texto.style = 'display: none;';
    cabecalho.style = 'align-items: initial;';
    body.style = 'display: block;';
    // conteudo.style = 'display: flex;';
}

function buscar(){
    procurarPessoas.style = 'display: flex;';
    addPessoas.style = 'display: none';
    conteudo.style = 'display: none;';
}

function adicionar(){
    addPessoas.style = 'display: flex;';
    procurarPessoas.style = 'display: none;';
    conteudo.style = 'display: none;';
}

function procurarPessoa(){

}

function addPessoa(){
    var novaPessoa = document.getElementById('add').value;
    lista.push('<li>' + novaPessoa + '</li>');
}

function mostrarTodos(){
    procurarPessoas.style = 'display: none;';
    addPessoas.style = 'display: none;';
    conteudo.style = 'display: flex;';

    

    if(lista.length == 0){
        document.getElementById('nomes').innerHTML = '<li>Não possui nenhum nome na lista.</li>';
    } else {
        document.getElementById('list').innerHTML = lista;
        var listaUl = document.getElementById('list');
        listaUl.innerHTML = lista.join('')
    }
}

var lista = [];