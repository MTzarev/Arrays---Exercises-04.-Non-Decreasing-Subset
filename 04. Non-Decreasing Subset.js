function nonDecreasingSubset(arr) {
    
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] < arr[i - 1] || arr[i] < arr[0]) {
            continue;
        } else {
            newArr.push(arr[i]);
        }

    }
    console.log(newArr.join(` `));
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([1, 2, 3, 4]);
nonDecreasingSubset([20, 3, 2, 15, 6, 1]);