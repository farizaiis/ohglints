
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




### 5. Sync and Async

Di Javascript, ada 2 macam operasi yaitu operasi yang synchronous dan asynchronous. Definisi synchronous adalah sebuah operasi akan dijalankan setelah operasi sebelumnya selesai dijalankan alias berurutan. Sedangkan asynchronous sebaliknya, asynchronous tidak perlu menunggu operasi sebelumnya selesai untuk mengeksekusi operasi setelahnya. Sebagian besar eksekusi di Javascript itu synchronous, namun beberapa operasi seperti akses ke database, akses ke file, atau melakukan AJAX call adalah operasi yang asynchronous.
- Promise
- Async
- Async Await
- Callback




### 6. Express, Framework, and the Features

Express atau biasa disebut dengan Express JS adalah sebuah framework dari Node JS untuk mempermudah para pengguna bahasa javascript dalam pengembangan aplikasi Backend terutama dalam mebuat REST API.

Sedangkan framework itu sendiri adalah sebuah kerangka kerja untuk mengembangkan aplikasi berbasis web maupun desktop. Maka dari itu Express JS atau framework itu sendiri sangat membantu developer dalam menuliskan kode agar lebih terstruktur dan trsusun rapi.

Manfaat framework adalah :
- Lebih cepat dan efisien
Dengan framework, kita tidak perlu menulis ulang kode dari awal setiap ada project baru.
- Lebih hemat
Karna sebagian besar framework open source atau gratis
- Lebih aman
Karna digunakan oleh banyak developer, maka jika ada error atau bug dari framework itu sendiri banyak developer yang memberikan saran agar team bisa memberikan feedback pula secara cepat untuk memperbaiki bug tersebut.

Framework express js ini menawarkan beberapa fitur seperti routing, rendering view dan mendukung middleware. Maka seperti yang saya info diawal tadi perihal manfaat dari express bahwa kita banyak menghemat waktu dalam pengembangan aplikasi Node.js.

- Fungsi middleware yaitu fungsi asynchronous yang bisa mengubah request dan respon di server
- Fungsi routing merupakan suatu tahap dalam aplikasi untuk mengatur jalannya aplikasi berbasis web
- Fungsi rendering view dalam dunia programming adalah proses untuk memberikan output dari data menjadi sebuah gambar.



### 7. What terms we should use SQL or NoSQL

Perbedaan :
- Bahasa 
- Skalabilitas
- Komunitas
- Aplikasi

Kapan kita mesti memakai Sql atau NoSql?
- Kita dapat memagai NoSql ketika kita tau bahwa database kita nantinya akan ada perubahan di field nya, karna non sql bersifat fleksibel. Ketika kita mengetahui bahawa struktur data dari program yang kita buat akan berubah sewaktu-waktu maka kita perlu menggunakan nonSql
- Dan yang paling penting adalah ketika kita membuat data yang bentuknya database relasional  maka kita perlu menggunakan SQL dan non SQL untuk Non relasional

Singkatnya, database relasional digunakan untuk menyimpan data yang terstruktur ke dalam tabel. Beberapa tabel juga dapat berisi kolom yang sama. Pikirkan database relasional seperti spreadsheet.
Daripada menggunakan tata letak terstruktur berbasis tabel untuk datanya, database non-relasional menyimpan data dalam koleksi tergantung pada jenis datanya. Sedangkan tabel dalam database relasional perlu disimpan dalam tata letak kolom / baris, database non-relasional menyimpan data dengan cara yang berbeda, dalam format non-standar.
