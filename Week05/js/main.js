/*
    Basilius Bias Astho Christyono
    000.000.13536 ~ PTI
    http://www.Bifeldy.tk/pti/week05/
*/

/** Table Click */

function selectedRow(table, selected){
    // Remove Color
    for(var i = 1; i <= table.getElementsByTagName("tbody")[0].getElementsByTagName("tr").length; i++) {
        table.rows[i].classList.remove("selected");
    }
    // Add Color
    table.rows[selected].classList.add("selected");
}

/** ALBUM DETAILS */

function generateAlbumData(data) {
    
    // Index
    let idx = 0;

    // Ambil Element Tabel
    let single = document.getElementById('single');
    single.innerHTML = '';

    for (idx = 0; idx < data.length; idx++) {

        // Bikin IMG Tag
        let picture = document.createElement("img");
            picture.setAttribute("src", data[idx].url);
            picture.setAttribute("title", data[idx].title);
            picture.setAttribute("class", "singleImg");
            picture.style.marginLeft = "1px";
            picture.style.marginRight = "1px";

        // Masukkan
        console.log('------------------------------------------------------------');
        console.log("Title: " + data[idx].title);
        console.log("URL: " + data[idx].url);
        single.appendChild(picture);

        /** Hitung Gambar Single */
        TotalData = document.getElementById('single').getElementsByTagName("img").length;
        document.getElementById('totalSingle').innerHTML = "Total Single: " + TotalData + " イメージ！";
        console.log('Total Single: ' + TotalData);

    }

}

function loadAlbumData(albumId) {
    
    // Membuat sebuah objek untuk melakukan request ke HTTP server secara async
    let request = new XMLHttpRequest();
    let url = 'https://jsonplaceholder.typicode.com/photos?albumId=' + albumId;
    request.open('GET', url, true);

    // Handler saat request berhasil di-load
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            let data = JSON.parse(request.responseText);
            generateAlbumData(data);
        }
        else {
            alert('Page Not Found!');
        }
    }

    // handler jika koneksi ke server terganggu
    request.onerror = function () {
        alert('Request Failed! Check your internet connection!');
    }

    // menjalankan request
    request.send();

}

/** ALBUM TABLE */

function generateAlbumTable(userName, data) {
    
    // Index
    let idx = 0;

    // Ambil Element Tabel
    let tbody = document.getElementById('tableAlbum').querySelector('tbody');
    tbody.innerHTML = '';

    for (idx = 0; idx < data.length; idx++) {

        // Bikin Baris
        let singleRow = document.createElement('tr');

        // Bikin Kolom Title
        let colAlbum = document.createElement('td');
            colAlbum.appendChild(document.createTextNode(data[idx].title));

        // Data Albums
        let btnAlbums = document.createElement('button');
            btnAlbums.appendChild(document.createTextNode('Details'));
            btnAlbums.setAttribute("user-id", data[idx].userId);
            btnAlbums.setAttribute("album-id", data[idx].id);

        // Bikin Kolom Detail
        let colDetail = document.createElement('td');
            colDetail.appendChild(btnAlbums);

        // Bind loadAlbum
        btnAlbums.addEventListener('click', function() { 
            // Buka Modal-Box
            modal.style.display = "block";
            // Pemanis Buatan
            document.getElementById('albumTitle').innerHTML = "アルバム：" + colAlbum.innerText;
            alert ("Harap Tunggu Gambar Ke Load.\nKemudian Scroll Hingga Paling Bawah!\n\nGambar Asli 600px*600px.\nTapi Di Re-Scale Jadi 24.5%;\nWkwkwkwkwk~");
            // Panggil Fungsi
            loadAlbumData(btnAlbums.getAttribute('album-id'));
            // Warna Row Di Klik
            let rows = document.getElementById('tableAlbum').getElementsByTagName('tbody')[0].getElementsByTagName('tr');
            for (i = 0; i < rows.length; i++) {
                rows[i].onclick = function() {
                    console.log('------------------------------------------------------------');
                    console.log("Tabel Album Selected: " + this.rowIndex);
                    selectedRow(document.getElementById('tableAlbum'), this.rowIndex);
                }
            }
        }, false);

        // Menambah Kolom Ke Row        
        console.log('------------------------------------------------------------');
        singleRow.appendChild(colAlbum);
        singleRow.appendChild(colDetail);
        console.log('Title: ' + data[idx].title);

        // Tambah Ke Tabel
        tbody.appendChild(singleRow);

        /** Hitung Tabel Album */
        TotalData = document.getElementById('tableAlbum').getElementsByTagName("tbody")[0].getElementsByTagName("tr").length;
        document.getElementById('produk').innerHTML = userName + " - アルバム：" + TotalData;
        console.log('Total Album: ' + TotalData);

    }

}

function loadAlbumTabel(userName, userId) {
    
    // Membuat sebuah objek untuk melakukan request ke HTTP server secara async
    let request = new XMLHttpRequest();
    let url = 'https://jsonplaceholder.typicode.com/albums?userId=' + userId;
    request.open('GET', url, true);

    // Handler saat request berhasil di-load
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            let data = JSON.parse(request.responseText);
            generateAlbumTable(userName, data);
        }
        else {
            alert('Page Not Found!');
        }
    }

    // handler jika koneksi ke server terganggu
    request.onerror = function () {
        alert('Request Failed! Check your internet connection!');
    }

    // menjalankan request
    request.send();

}

/** USER TABLE */

function generateUserTable(data) {
    
    // Index
    let idx = 0;

    // Ambil Element Tabel
    let tbody = document.getElementById('tableUser').querySelector('tbody');
    tbody.innerHTML = '';

    for (idx = 0; idx < data.length; idx++) {
        
        // Bikin Baris
        let singleRow = document.createElement('tr');

        // Bikin Kolom Nama
        let colName = document.createElement('td');
            colName.appendChild(document.createTextNode(data[idx].name));

        // Bikin Kolom Email
        let colEmail = document.createElement('td');
            colEmail.appendChild(document.createTextNode(data[idx].email));
            colEmail.setAttribute("class", "collapseAble");

        // Bikin Kolom Address
        let colAddress = document.createElement('td');
        let address = data[idx].address;
            colAddress.appendChild(document.createTextNode(address.street + ' ' + address.suite + ' ' + address.city));
            colAddress.setAttribute("class", "collapseAble");

        // Bikin Kolom Website
        let colWebsite = document.createElement('td');
            colWebsite.appendChild(document.createTextNode(data[idx].website));

        // Bikin Kolom Company
        let colCompany = document.createElement('td');
            colCompany.appendChild(document.createTextNode(data[idx].company.name));

        // Button Albums Untuk Action
        let btnAlbums = document.createElement('button');
            btnAlbums.appendChild(document.createTextNode('Albums'));
            btnAlbums.setAttribute("user-id", data[idx].id);
        
        // Bikin Kolom Action
        let colAction = document.createElement('td');
            colAction.appendChild(btnAlbums);

        // Event Saat Tombol Di Klik
        btnAlbums.addEventListener('click', function() {
            // Panggil Fungsi
            loadAlbumTabel(colName.innerText, btnAlbums.getAttribute('user-id'));

            // Warna Row Di Klik
            let rows = document.getElementById('tableUser').getElementsByTagName('tbody')[0].getElementsByTagName('tr');
            for (i = 0; i < rows.length; i++) {
                rows[i].onclick = function() {
                    console.log('------------------------------------------------------------');
                    console.log("Tabel User Selected: " + this.rowIndex);
                    selectedRow(document.getElementById('tableUser'), this.rowIndex);
                }
            }
        }, false);

        // Menambah Kolom Ke Row        
        console.log('------------------------------------------------------------');
        singleRow.appendChild(colName);
        console.log('Nama: ' + data[idx].name);
        singleRow.appendChild(colEmail);
        console.log('Email: ' + data[idx].email);
        singleRow.appendChild(colAddress);
        console.log('Address: ' + address.street + ' ' + address.suite + ' ' + address.city);
        singleRow.appendChild(colWebsite);
        console.log('Website: ' + data[idx].website);
        singleRow.appendChild(colCompany);
        console.log('Company: ' + data[idx].company.name);
        singleRow.appendChild(colAction);

        // Tambah Ke Tabel
        tbody.appendChild(singleRow);

        /** Hitung Tabel User */
        TotalData = document.getElementById('tableUser').getElementsByTagName("tbody")[0].getElementsByTagName("tr").length;
        document.getElementById('manusia').innerHTML = "All Artist: " + TotalData + "人";
        console.log('Total Users: ' + TotalData);

    }
    
}

function loadUserData() {
    
    // Membuat sebuah objek untuk melakukan request ke HTTP server secara async
    let request = new XMLHttpRequest();
    let url = 'https://jsonplaceholder.typicode.com/users';
    request.open('GET', url, true);

    // Handler saat request berhasil di-load
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            let data = JSON.parse(request.responseText);
            generateUserTable(data);
        }
        else {
            alert('Page Not Found!');
        }
    }

    // handler jika koneksi ke server terganggu
    request.onerror = function () {
        alert('Request Failed! Check your internet connection!');
    }

    // menjalankan request
    request.send();

}

/** Saat Dokumen Kelar Load */

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
    document.getElementById('editor').innerHTML = "Hello, 世界！& " + name + '!';
    console.log("Current Editor: " + name);

    // Load User Data
    loadUserData();

    // Get the modal
    modal = document.getElementById('myModal');

    // Get the <span> element that closes the modal
    span = document.getElementsByClassName("close")[0];

}

/** Awal Mula Kehidupan */
console.log('.: Website Dibuat Oleh :: Basilius Bias Astho Christyono :.');
var TotalData = 0;

// Global Variable
var modal, span;

// When the user clicks on <span> (x), close the modal
function tutup() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}