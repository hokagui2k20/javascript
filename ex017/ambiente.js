function tabuada () {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor Digite um Numero')
    } else {
        let n = Number(num.value)
        let c = 1 
        tab.innerHTML = '' //Para Limpar a tabuada
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`// Para indentificar as  linhas
            tab.appendChild(item)
            c++
        }
    }
}