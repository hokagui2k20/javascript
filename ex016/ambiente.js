function contar () {
    let ini = document.getElementById('np')
    let fim = document.getElementById('ns')
    let passo = document.getElementById('con')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        res.innerHTML = 'Preta Atençao seu trouxa!'
        //window.alert('[ERRO] Digita essa merda direiro seu burro!!!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(con.value)
        if (p <= 0) {
            window.alert('Contagem Indisponivel, Começando do numero 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{27A1} `} 
        } else { 
            //Contagem regressiva
            for (let c = i; c >=f; c -= p) {
                res.innerHTML += ` ${c} \u{27A1}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    } 
}
