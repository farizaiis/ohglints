function disemvowel(str) {
    let vowelArr = ["a", "i", "u", "e", "o"]
    let result = ""
    for(let i = 0; i < str.length; i++) {
        if(vowelArr.includes(str[i].toLowerCase())) continue;
        result += str[i]
    }
    return result;
}

function disemvowel(str) {
    let vowelArr = ["a", "i", "u", "e", "o", "A", "I", "U", "E", "O"]
    let result = ""
    for(let i = 0; i < str.length; i++) {
        if(vowelArr.includes(str[i])) continue;
        result += str[i]
    }
    return result;
}