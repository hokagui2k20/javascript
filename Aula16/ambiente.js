let num = [5,8,9,4,3]
num.push(1)
num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} posiçoes`)
console.log(`O primeiro valor é ${num[4]}`)
let pos = num.indexOf(7)
if (pos == -1) {
    console.log(`O valor nao foi emcontrado`)
} else {
    console.log(`o valor 9 esta na posicao ${pos}`)    
}
