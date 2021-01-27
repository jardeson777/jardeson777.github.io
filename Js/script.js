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
        document.getElementById('list1').innerHTML = '<li>Não possui nenhum nome na lista.</li>';
    }
}

function buscar(){
    procurarPessoas.style = 'display: flex;';
    addPessoas.style = 'display: none';
}

function adicionar(){
    addPessoas.style = 'display: flex;';
    procurarPessoas.style = 'display: none;';
}

function procurarPessoa(){
    var nomePesquisa = document.getElementById('nome').value;
    if(lista.indexOf(nomePesquisa)>-1){
        list1.style = 'display: none';
        
    }
}

function addPessoa(){
    var novaPessoa = document.getElementById('add').value;
    document.getElementById('add').value = '';

    if(novaPessoa != '' & novaPessoa != ' '){
        lista.push('<li>' + contador + 'º ~~> ' + novaPessoa + '</li>');
    contador++;
    }
    
    conteudo.style = 'display: flex;';

    if(lista.length > 0){
        document.getElementById('list1').innerHTML = lista;
        var listaUl = document.getElementById('list1');
        listaUl.innerHTML = lista.join('')
    }
}

var lista = [];
var contador = 1;