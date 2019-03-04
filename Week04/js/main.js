/*
    Basilius Bias Astho Christyono
    000.000.13536 ~ PTI
    http://www.Bifeldy.tk/pti/week04/
*/


function checkTime(i) {

    /** Tambahin 0 Kalo Kurang Dari Angka 10 */
    if (i < 10) {
        i = "0" + i
    } 
    return i;
}

function startTime() {

    /** o'Clockz */
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    /** Cek Digit Angka */
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    /** Tampilkan Jam */
    document.getElementById('jam').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);

}

function BasiliusBiasAsthoChristyono() {

    /** Greetings */
    function greetMe (name) {
        alert ("Hello " + name + ' >_<"' + '\nようこそ！（笑）。');
    }

    /** Semua Berawal Dari Perkenalan */
    var name = prompt('Masukkan Nama Anda');
    greetMe (name);
    document.getElementById('editor').innerHTML = "Hello, \"" + name + '" ^_^ ?!';
    console.log("Current Editor: " + name);

    /** Hitung Tabel Jumlah Manusia */
    TotalData = document.getElementById('tableItem').getElementsByTagName("tbody")[0].getElementsByTagName("tr").length;
    document.getElementById('manusia').innerHTML = "Jumlah Manusia: " + TotalData;
    console.log('Jumlah Manusia: ' + TotalData);

}

function statusCheck(Pilihan) {

    /** Custom Status */
    if (Pilihan == 'lainnya') {
        document.getElementById('other').innerHTML = `
        <div class="inputWithIcon inputIconBg">
            <input type="text" name="otherStatus" placeholder="Status Anda" />
            <i class="fa fa-font fa-lg fa-fw" aria-hidden="true"></i>
        </div>
        `;
    }
    else {
        document.getElementById('other').innerHTML = '';
    }

}

function TambahData() {
    
    /** Mencegah form me-refresh halaman HTML */
    event.preventDefault();

    /** Ambil form */
    var Data = document.getElementById('frmSubmit');

    /** Ambil data */
    let Manusia = {
        nama: Data.elements['itemName'].value,
        alamat: Data.elements['itemAddress'].value,
        telepon: Data.elements['itemPhone'].value,
        status: Data.elements['itemStatus'].value,
    }

    /** Cek Data Nama */
    if (Manusia['nama'] == '') {
        document.getElementById('errorName').innerHTML = "*Harap Mengisi Nama!";
    }
    else if (Manusia['nama'].length < 3) {
        document.getElementById('errorName').innerHTML = "*Nama Minimal 3 Huruf!";
    }
    else {
        document.getElementById('errorName').innerHTML = "";
    }

    /** Cek Data Alamat */
    if (Manusia['alamat'] == '') {
        document.getElementById('errorAddress').innerHTML = "*Alamat Tidak Boleh Kosong!";
    }
    else if (Manusia['alamat'].length < 8) {
        document.getElementById('errorAddress').innerHTML = "*Harap Mengisi Alamat Dengan Benar!";
    }
    else {
        document.getElementById('errorAddress').innerHTML = "";
    }

    /** Cek Data Telepon */
    if (Manusia['telepon'] == '') {
        document.getElementById('errorPhone').innerHTML = "*Nomor Telepon Wajib Diisi!";
    }
    else if (Manusia['telepon'].length < 9) {
        document.getElementById('errorPhone').innerHTML = "*Periksa Lagi Nomor Telepon Anda!";
    }
    else {
        document.getElementById('errorPhone').innerHTML = "";
    }

    /** Cek Data Status */
    if (Manusia['status'] == '-') {
        document.getElementById('errorStatus').innerHTML = "*Harap Memilih Status!";
    }
    else if (Manusia['status'] == 'lainnya' && Data.elements['otherStatus'].value == '') {
        document.getElementById('errorStatus').innerHTML = "*Harap Mengisi Status!";
        return;
    }
    else {
        document.getElementById('errorStatus').innerHTML = "";
    }
    
    /** Cek Data Other */
    if (Manusia['status'] == 'lainnya' && Data.elements['otherStatus'].value != '') {
        Manusia['status'] = Data.elements['otherStatus'].value;
    }

    /** Tambahin Ke Tabel */
    if (Manusia['nama'] != '' && Manusia['nama'].length >= 3 &&
        Manusia['alamat'] != '' && Manusia['alamat'].length >= 8 &&
        Manusia['telepon'] != '' && Manusia['telepon'].length >= 9 &&
        Manusia['status'] != '-') {

        // tampung <tbody>
        const tbody = document.getElementById('tableItem').querySelector('tbody');

        /** Tabel */
        // membuat row baru
        const newRow = document.createElement('tr');
        // membuat column baru
        const nameCol = document.createElement('td');
        // membuat tulisan di dalam kolom berdasarkan data
        nameCol.appendChild(document.createTextNode(Manusia['nama']));
        // membuat category & di isi
        const addressCol = document.createElement('td');
        addressCol.appendChild(document.createTextNode(Manusia['alamat']));
        // membuat price & di isi
        const phoneCol = document.createElement('td');
        phoneCol.appendChild(document.createTextNode(Manusia['telepon']));
        // membuat deskripsi & di isi
        const statusCol = document.createElement('td');
        statusCol.appendChild(document.createTextNode(Manusia['status']));

        /** Menambahkan Kolom Pada Baris */
        newRow.appendChild(nameCol);
        newRow.appendChild(addressCol);
        newRow.appendChild(phoneCol);
        newRow.appendChild(statusCol);

        /** Menambahkan Row Baru Pada Tabel */
        tbody.appendChild(newRow);
        
        /** Tambah Data */
        alert('Data Baru Berhasil Ditambahkan!');
        console.log('Nama: ' + Manusia['nama']);
        console.log('Alamat: ' + Manusia['alamat']);
        console.log('Telepon: ' + Manusia['telepon']);
        console.log('Status: ' + Manusia['status']);
        console.log('Data Baru Berhasil Ditambahkan!');

        /** Kosongin Value Form */
        Data.elements['itemName'].value = '';
        Data.elements['itemAddress'].value = '';
        Data.elements['itemPhone'].value = '';
        Data.elements['itemStatus'].value = '-';
        document.getElementById('other').innerHTML = '';
        
        /** Hitung Tabel Jumlah Manusia */
        TotalData = document.getElementById('tableItem').getElementsByTagName("tbody")[0].getElementsByTagName("tr").length;
        document.getElementById('manusia').innerHTML = "Jumlah Manusia: " + TotalData;
        console.log('Jumlah Manusia: ' + TotalData);
    }

}

/** Awal Mula Kehidupan */
console.log('.: Website Dibuat Oleh :: Basilius Bias Astho Christyono :.');
var TotalData = 0;