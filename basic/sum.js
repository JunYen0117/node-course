function sum(n){
    let sum = 0;
    for(a=0; a<=n; a++){
        sum = sum + a;
    }
    return sum;
};

console.log(sum(1));
console.log(sum(2));
console.log(sum(10));
console.log(sum(100));