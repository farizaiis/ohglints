
# Note for myself

#### 1. OOP and about its four pillars.
OOP (Object Oriented Pogramming) atau diartikan sebagai Pemrograman Berorientasi Object. Keuntungan dari OOP itu sendiri adalah :
- Scatable
- Maintainable
- Readable
- DRY
OOP memiliki 4 pillar yang biasa di gunakan dalam bahasa Pemrograman.
- Inheritance : Inherit the properties/methods from parent
- Polymorphism : Overiding the methods/properties from parent
- Abstraction : Hide the details/unnecessary to users
- Encapsulation : Hide/limit the acces of certain properties/methods




### 2. API and Rest API
API dibuat untuk mempermudah proses pertukaran data antar beberapa aplikasi yang datanya pun terintegrasi, jadi kita tidak perlu membuat nya dari 0 lagi.
Sedangkan untuk REST API adalah salah satu teknologi API yang sering kita gunakan ketika akan mengembangkan sebuah Web API




### 3. Null
Null berarti ‘tidak memiliki nilai’. Kita bisa memberikan nilai null kepada variabel, elemen dari array, property dari objek, atau yang lainnya.
Null berbeda dengan string kosong, karena string kosong masih bertipe ‘string’. Sedangkan null bukan merupakan tipe data apapun. Jika kita menggunakan operator typeof kepada null, hasilnya adalah : object. Hal Ini berarti bahwa null adalah object khusus yang mengindikasikan ’tidak ada nilai’ di dalam JavaScript.




### 4. Proses ketika kita memasuki URL dari awal request hingga respones, serta detail dari masing-masing langkah
Proses step by step :
- Client atau User melakukan HTTP Request ke Web Server
- Web Server akan melakukan Request and Pull Konten Dinamis (disajikan melalui CGI) ataupun Konten Statis
- Web Server mengirimkan Response konten yang telah di request kepada pengguna

Kesimpulan :
- Web Server yang berhadapan langsung dengan pengguna, menerima HTTP Request dan mengembalikan HTTP Response
- Untuk konten statis seperti CSS, Javascript, gambar, maupun HTML web server dapat langsung menyajikannya sebagai HTTP Response kepada pengguna.
- Konten dinamis seperti program PHP maupun Perl disajikan melalui CGI.
- CGI Script kemudian menghasilkan konten statis  yang akan disajikan sebagai HTTP Response kepada pengguna.

Info++ :
- Web Server = program yang berfungsi menerima request HTTP atau web browser yang nantinya akan diberikan feedback atau response berupa konten statis dari web itu sendiri (HTML, CSS, Java, Gambar). contoh Apache
- Web statis = informasi nya tidak bisa langsung diubah seenaknya oleh pengguna. tidak memerlukan database/
- Web dinamis = memungkinkan penggna melakukan perubahan secara berkala untuk konten nya. user website dinamis pakai Oracle & MySQL untuk database.
- Perbedaan web statis dan dinamis = database, konten, desain, ukuran, interaksi, penggunaan. ui ux
- Contoh dinamis = web sosial media
- Contoh statis = Klikbca
