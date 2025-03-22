// Data Produk
let produkList = [
    { id: 1, nama: "Laptop", harga: 12000000 },
    { id: 2, nama: "Smartphone", harga: 5000000 },
    { id: 3, nama: "Tablet", harga: 7000000 },
    { id: 4, nama: "Smartwatch", harga: 2000000 },
    { id: 5, nama: "Earphone", harga: 500000 }
];

// Menambahkan Produk dengan Spread Operator
function tambahProduk(id, nama, harga) {
    produkList = [...produkList, { id, nama, harga }];
}

// Menghapus Produk dengan Rest Parameter
function hapusProduk(...id) {
    produkList = produkList.filter(produk => !id.includes(produk.id));
}

// Menampilkan Produk dengan Destructuring
function tampilkanProduk() {
    console.clear();
    produkList.forEach(({ id, nama, harga }) => {
        console.log(`ID: ${id}, Nama: ${nama}, Harga: Rp${harga}`);
    });
}

// Event Listener untuk contoh interaksi
const eventHandler = {
    tambah: (id, nama, harga) => tambahProduk(id, nama, harga),
    hapus: (...id) => hapusProduk(...id),
    tampil: () => tampilkanProduk()
};

// Menampilkan daftar produk awal
eventHandler.tampil();

// Contoh penambahan produk
eventHandler.tambah(6, "Monitor", 3000000);
eventHandler.tampil();

// Contoh penghapusan produk
eventHandler.hapus(2, 4);
eventHandler.tampil();
