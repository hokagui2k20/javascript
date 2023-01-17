let val = [9,7,5,3,1]
val.sort()
//console.log(val)


/* console.log(val[0])
console.log(val[1])
console.log(val[2])
console.log(val[3])
console.log(val[4])
console.log(val[5]) 

for (let pos=0; pos < val.length; pos++) {
    console.log(`A posicao ${pos} tem o valor ${val[pos]}`)
} */

for (let pos in val) {
    console.log(`a posicao ${pos} tem o valor de ${val[pos]}`)
}