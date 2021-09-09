function fixTheMeerkat(arr) {
    let end = arr.shift();
    let begin = arr.pop();

    arr.push(end);
    arr.unshift(begin);

    return arr;
}


// best solution using reverse
// function fixTheMeerkat(arr) {
//     return arr.reverse();
//   }