function even_or_odd(number) {
    if (number % 2 == 0) {
      return "Even"
    } else {
      return "Odd"
    }
  }
  
  // validaton/sanitization
    // make sure argument's data type is number integer
    
  // steps
    // conditional to check if argument is even or odd
    // use modulus to determine the result
    // show the result
  
  // edge cases
    // --
  
  // final output 
    // "Even" 
    // "Odd"

  //Best solution
  function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
  }