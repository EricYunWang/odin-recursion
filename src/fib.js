function fib(n){
    if (n === 1){
        return [0];
    }
    else if (n === 2){
        return [0, 1];
    }
    let x = 0;
    let y = 1;
    let ans = [0,1];
    for (let i = 2; i < n; i++){
        let z = x + y;
        ans.push(z);
        x = y;
        y = z;
    }
    return ans;
}

console.log(fib(8));