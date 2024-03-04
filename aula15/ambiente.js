var valores = [5,4,9,3,7,8,10,12]

/*for (var pos=0 ; pos < valores.length ; pos++){
    console.log (`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

for (var pos in valores){
   console.log (`A posição ${pos} tem o valor ${valores[pos]}`)
}