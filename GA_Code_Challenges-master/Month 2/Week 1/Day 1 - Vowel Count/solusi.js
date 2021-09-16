function getCount(str) {
    var vowelsCount = 0;
    // enter your majic here
    let vowelArr = ["a", "i", "u", "e", "o"]
    for(let vowel of str) {
        if(vowelArr.includes(vowel)) {
            vowelsCount++
        }
    }
    return vowelsCount;
}