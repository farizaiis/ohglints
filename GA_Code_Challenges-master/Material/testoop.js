class Ongkir {
    constructor(berat){
        let pajak = 500;
        let biaya = () => {
            return berat * 1000;
        }
        this.totalBiaya = () => {
            return biaya() + pajak;
        }
    }
}

const laptop = new Ongkir(4);
laptop.pajak
// laptop.pajak = 800; 
console.log(laptop.pajak)

// class Ongkir {
//     constructor(berat){
//         this.pajak = 500;
//         this.biaya = () => {
//             return berat * 1000;
//         }
//         this.totalBiaya = () => {
//             return this.biaya() + this.pajak;
//         }
//     }
// }

// const laptop = new Ongkir(4);
// laptop.pajak = 800;
// console.log(laptop.totalBiaya())