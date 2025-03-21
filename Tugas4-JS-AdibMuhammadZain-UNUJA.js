
// cara menjalankan : node Tugas4-JS-AdibMuhammadZain-UNUJA.js 
//                    node nama-File.js


class Pelanggan {  
    constructor(nama, nomorTelepon) {  
        this.nama = nama;  // Nama pelanggan  
        this.nomorTelepon = nomorTelepon;  // Nomor telepon pelanggan  
        this.kendaraanDisewa = null;  // Kendaraan yang disewa  
    }  

    // Metode untuk mencatat transaksi penyewaan kendaraan  
    menyewaKendaraan(kendaraan) {  
        this.kendaraanDisewa = kendaraan;  
        console.log(`${this.nama} telah menyewa kendaraan: ${kendaraan}`);  
    }  
}  

class SistemManajemenTransportasi {  
    constructor() {  
        this.daftarPelanggan = [];  // Menyimpan daftar pelanggan  
    }  

    // Menambahkan pelanggan ke dalam sistem  
    tambahPelanggan(pelanggan) {  
        this.daftarPelanggan.push(pelanggan);  
    }  

    // Menampilkan daftar pelanggan yang menyewa kendaraan  
    tampilkanDaftarPelanggan() {  
        console.log("Daftar Pelanggan yang Menyewa Kendaraan:");  
        this.daftarPelanggan.forEach(pelanggan => {  
            if (pelanggan.kendaraanDisewa) {  
                console.log(`Nama: ${pelanggan.nama}, Telepon: ${pelanggan.nomorTelepon}, Kendaraan: ${pelanggan.kendaraanDisewa}`);  
            }  
        });  
    }  
}  

// Membuat objek sistem manajemen transportasi  
const sistem = new SistemManajemenTransportasi();  

// Membuat beberapa pelanggan  
const pelanggan1 = new Pelanggan("Adib", "082244428970");  
const pelanggan2 = new Pelanggan("Aril", "08987654321");  

// Menambahkan pelanggan ke sistem  
sistem.tambahPelanggan(pelanggan1);  
sistem.tambahPelanggan(pelanggan2);  

// Mencatat penyewaan kendaraan  
pelanggan1.menyewaKendaraan("Mobil Sedan");  
pelanggan2.menyewaKendaraan("Sepeda Motor");  

// Menampilkan daftar pelanggan yang menyewa kendaraan  
sistem.tampilkanDaftarPelanggan();  