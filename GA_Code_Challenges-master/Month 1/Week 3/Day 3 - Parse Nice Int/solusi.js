function getAge(inputString){
    switch(inputString){
      case "1 years old":
        return 1;
      case "2 years old":
        return 2;
      case "3 years old":
        return 3;
      case "4 years old":
        return 4;
      case "5 years old":
        return 5;
      case "6 years old":
        return 6;
      case "7 years old":
        return 7;
      case "8 years old":
        return 8;
      case "9 years old":
        return 9;
      default:
        return 1;
    }
  }

  function getAge(inputString){
    return parseInt(inputString); //parseint convert string jadi integer
  }

  function getAge(inputString){
    // return correct age (int). Happy coding :) 
      let numbers = ["0","1","2","3","4","5","6","7","8","9"]
      
      for (let i = 0; i < inputString.length;i++) {
        if (numbers.includes(inputString[i])) {
          return Number(inputString[i])
        }
      }
      
      return "No Number in Sentence"
    }
    