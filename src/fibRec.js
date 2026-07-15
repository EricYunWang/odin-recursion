function fibRec(n){
    if (n === 1){
        return [0];
    }
    if (n === 2){
        return [0, 1];
    }
    let ans = fibRec(n-1);
    ans.push(ans[n-2] + ans[n-3]);
    return ans;
}
console.log(fibRec(8));