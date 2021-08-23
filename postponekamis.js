const tanggal = new Date("August 17, 1945 07:00:00")

console.log(tanggal)

// test bulan dengan integer
// let stringTanggal = "Sekarang adalah hari jumat, jam " + tanggal.getHours() + ", tanggal " + tanggal.getDate() + " bulan " + tanggal.getMonth() + " tahun " + tanggal.getFullYear()

// test bulan dengan string
let stringTanggal = "Sekarang adalah hari Jumat, jam " + tanggal.getHours() + ", tanggal " + tanggal.getDate() + " bulan Agustus tahun " + tanggal.getFullYear()

switch (tanggal.getHours()) {
    case 6:
        console.log("Beda Jam dengan jawaban")
        break
    case 7:
        console.log(stringTanggal)
        break
}