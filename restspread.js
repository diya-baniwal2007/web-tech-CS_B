function add(...numbers){
    let total =0;
    for(let i=0;i<numbers.length;i++){
        total = total+numbers[i];
    }
    return total;
}
console.log(add(1,2,3,4,5));




