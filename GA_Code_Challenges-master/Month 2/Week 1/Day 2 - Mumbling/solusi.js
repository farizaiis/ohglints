function accum(s) {
	// your code
  let mumbling = []
  const lowerCase = s.toLowerCase()
  
  for (let i = 0; i < lowerCase.length; i++) {
    let result =  lowerCase[i].toUpperCase()
    for (let j = 0; j < i; j++) {
      result += lowerCase[i]
    }
    mumbling.push(result)
  }
  return mumbling.join("-")
}