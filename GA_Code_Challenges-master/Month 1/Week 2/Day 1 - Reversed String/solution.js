function solution(str){
    let str1 = "";
      for (let i = str.length - 1; i >= 0; i--) {
          str1 += str[i];
      }
      return str1
  }

// JAWABAN MAS RAYAN
//   function solution(str){
//     if (str === "")
//       return "";
//     else
//       return solution(str.substr(1)) + str.charAt(0);
//   }