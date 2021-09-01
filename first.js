        //Cara mencetak angka mundur
    //     function countdown(angka) {
    //     console.log(angka);
    //     if (angka > 0) {
    //       countdown(angka - 1);
    //     } else {
    //       return;
    //     }
    //   }
    //   countdown(10);
      

        //cara looping dengan mengkalikan hasil
    //   function factorialLoop(angka) {
    //     let result = 1;
    //     for (let i = 1; i <= angka; i++) {
    //       result *= i;
    //       console.log("i sekarang = " + i, "result sekarang = " + result)
    //     }
    //     return result;
    //   }
    //   console.log(factorialLoop(5));
      

    //   function factorialRecursive(angka) {
    //     if (angka == 1) {
    //       return 1;
    //     } else {
    //       return angka * factorialRecursive(angka - 1);
    //     }
    //   }
    //   console.log(factorialRecursive(5));
    
    // function myFunction(arr) {
    //     arr.sort(function(a,b){
    //         return b-a
    //     });
    //     return arr
    // }
    // console.log(myFunction([3,1,2,5,4]));
    
    
    // function myFunction(arr) {
    //     let total = 0;
    
    //     arr.array.forEach(function(e,i){
    //         total += e;
    //     });
    
    //     return total/arr.length;
    // }
    // console.log(myFunction(soal));
    
    // soal = [10,100,40];
    // function myFunction(arr){
    //     let total = 0
    //     for (let i = 0; i < arr.length;i++){
    //         total += arr[i];
    //     }
    //     result = total/soal.length;
    //     return result;
    // }
    // console.log(myFunction(soal));
    
    // function hitungMundur(n){
    //     if(n < 1){
    //       return [];
    //     }else {
    //       let arr = hitungMundur(n-1);
    //       arr.unshift(n);
    //       return arr;
    //     }
    //   }
    //   console.log(hitungMundur(5));
    
    // function jarakAngka(awal, akhir) {
    //     if(awal-akhir === 0){
    //       return [awal];
    //     }else{
    //       let angka = jarakAngka(awal,akhir -1);
    //       angka.push(akhir);
    //       return angka;
    //     }
    //   };
    
    //   console.log(jarakAngka(0,8));
    
    // let huruf = ["a","b","c"];
    // let angka = [1,2,3];
    // let comb = huruf.concat(angka);
    // console.log(comb);
    
    
    // let huruf = ['a', 'b', 'c', 'd', 'e', 'f'];
    // let angka = [1, 2, 3];
    // let hasil = [];
    // let i, l = Math.min(huruf.length, angka.length);
    
    // for(let i = 0; i < l; i++){
    //     hasil.push(huruf[i], angka[i]);
    // }
    // hasil.push(...huruf.slice(l), ...angka.slice(l));
    
    // console.log(hasil); //cara internet
    
    // const combineList = ([x, ...xrest], y = []) => {
    //     return x === undefined ? y : [x, ...combineList(y, xrest)]
    //   }; // cara ci angel
    
    
    //   function combineList(arr1,arr2){
    //     let newArr = [];
    //     const totalArr = arr1.length + arr2.length;
      
    //     for(let i = 0 ; i < totalArr;i++){
    //       newArr.push(arr1[i],arr2[i]);
    //     }
          
    //     return newArr.filter((val) => val);
    //   }
      
      
    //   console.log(combineList(['a', 'b', 'c', 'd', 'e', 'f'], [1, 2, 3]))
    //   console.log(combineList(['g','h','j'], [4,7,9]));
    //   console.log(combineList(['t','u','v','w'], [1,2,3,4,5,6,7])); // cara josua
    
    
    
    
    // let huruf = [1,4,6];
    // let angka = [2,3,5];
    // let comb = huruf.concat(angka);
    // comb.sort(function(a,b){
    //     return a-b
    // })
    // console.log(comb);
    
    
    //let name = ["The quick brown fox"]
    
    function noSpace(x){
        return x.split(" ").join('')  //split(" ") untuk kurangin nilai string spasi dari array //join untuk update array
      }