const namaLengkap = (a, b) => 
new Promise((resolve, reject) => {
    setTimeout(() => {
        if(isNaN(a) && isNaN(b)) {
            result = a + " " + b;
            resolve(result);
        } else {
            err = "Hanya menerima alphabet bukan angka";
            reject(err);
        }
    }, 2000);
});

//test then catch (sukses)
namaLengkap("Fariz", "Afif")
    .then((res) => console.log("Nama Lengkap adalah = ", res))
    .catch((err) => console.log("Error = ", err));

//test then catch (fail)
namaLengkap("Fariz", "5")
    .then((res) => console.log("Nama Lengkap adalah = ", res))
    .catch((err) => console.log("Error = ", err));

//test async await (sukses
const test = async () => {
    try {
        const dataDiri = await namaLengkap("Fariz", "Ais");
        console.log(dataDiri)
    } catch (error) {
        console.log(error);
    }
};
test()

//test async await (fail)
const testFail = async () => {
    try {
        const dataDiri = await namaLengkap("10", "Ais");
        console.log(dataDiri)
    } catch (error) {
        console.log(error);
    }
};
testFail()