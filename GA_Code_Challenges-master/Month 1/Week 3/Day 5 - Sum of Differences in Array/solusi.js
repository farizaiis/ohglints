function sumOfDifferences(arr) {
    let descArr = arr.sort((a, b) => b - a)
    let sum = 0;
    
    if (descArr.length <= 1) {
      return 0;
    }
    
    for(let i=0; i<descArr.length-1; i++) {
     sum += descArr[i] - descArr[i+1];
    }
    return sum;
  }