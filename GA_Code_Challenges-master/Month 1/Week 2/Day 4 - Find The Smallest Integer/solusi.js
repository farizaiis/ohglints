class SmallestIntegerFinder {
    findSmallestInt(args) {
    let min  ;
   
      for (let i=0;i<args.length;i++){
          if(args[i]<=args[0]){
              args[0]  = args[i];    
              min = args[i];
          }
        }
      return min;
    }
  }

//   // best solution
//   class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return Math.min(...args)
//     }
//   }