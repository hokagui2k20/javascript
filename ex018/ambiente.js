let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#listf')
let res = document.querySelector('div#res-')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false 
    }
}

function inLista(n, l) {
   if (l.indexOf(Number(n)) != -1) {
        return true
   } else {
        return false 
   }

}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)) { // ! quer dizer nao em js
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
    } else {
        window.alert('Numero inexistente ou ja digitado')
    }
    num.value = '' //para deixar vazio
    num.focus() // para voltar o foco do mouse para a "barra de pesquisa"
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione um numero antes de finalizar')
    } else {
        let tot = valores.length

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados. </p>`
    }
    
}
    