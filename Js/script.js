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
    lista.push(novaPessoa);
}

function mostrarTodos(){
    procurarPessoas.style = 'display: none;';
    addPessoas.style = 'display: none;';
    if(lista.length == 0){
        conteudo.style = 'display:flex;';
        document.getElementById('nomes').innerHTML = 'Não possui nenhum nome na lista.';
    } else {
        conteudo.style = 'display: flex;';
        var i;
        for(i=0; i<lista.length; i++){
            var liNova = document.createElement('li');
            var conteudoNovo = document.createTextNode('lista[i]');
            //divNova.appendChild(conteudoNovo); 
        }
    }
}

var lista = [];
// document.getElementById('nomes').innerHTML = lista[0];