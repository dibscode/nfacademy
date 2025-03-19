// Array produk toko  
let produkToko = [  
    {id: 1, nama: "Laptop", harga: 7000000, stok: 5},  
    {id: 2, nama: "Mouse", harga: 200000, stok: 10},  
    {id: 3, nama: "Keyboard", harga: 350000, stok: 7}  
];  

// Fungsi untuk menambah produk baru  
function tambahProduk(nama, harga, stok) {  
    // Membuat id baru berdasarkan panjang array + 1  
    const id = produkToko.length + 1;  
    
    // Membuat objek produk baru  
    const produkBaru = {  
        id: id,  
        nama: nama,  
        harga: harga,  
        stok: stok  
    };  
    
    // Menambahkan produk ke array  
    produkToko.push(produkBaru);  
    
    console.log(`Produk ${nama} berhasil ditambahkan`);  
}  

// Fungsi untuk menghapus produk berdasarkan id  
function hapusProduk(id) {  
    // Mencari index produk dengan id yang dicari  
    const index = produkToko.findIndex(produk => produk.id === id);  
    
    // Jika produk ditemukan, hapus  
    if (index !== -1) {  
        const produkDihapus = produkToko[index];  
        produkToko.splice(index, 1);  
        console.log(`Produk ${produkDihapus.nama} berhasil dihapus`);  
    } else {  
        console.log(`Produk dengan id ${id} tidak ditemukan`);  
    }  
}  

// Fungsi untuk menampilkan daftar produk  
function tampilkanProduk() {  
    console.log("Daftar Produk Toko:");  
    produkToko.forEach(produk => {  
        console.log(`ID: ${produk.id}, Nama: ${produk.nama}, Harga: Rp ${produk.harga}, Stok: ${produk.stok}`);  
    });  
}  

// Contoh penggunaan  
tambahProduk("Monitor", 1500000, 3);  
tampilkanProduk();  
hapusProduk(2);  
tampilkanProduk();  