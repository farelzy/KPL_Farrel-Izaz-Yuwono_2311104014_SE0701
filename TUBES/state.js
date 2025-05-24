const { warungs } = require('./config');
const { addToCart, viewCart, updateCart, removeFromCart } = require('./cart');
const { checkout } = require('./order');
const { input } = require('./utils');

function runApp() {
  console.log("=== Selamat datang di Canteen Ordering System ===");

  const username = input("Masuk sebagai (Username/Guest): ");
  console.log(`Halo, ${username}!\n`);

  console.log("Pilih Warung:");
  warungs.forEach(w => console.log(`${w.id}. ${w.name}`));

  const warungId = parseInt(input("Masukkan nomor warung: "));
  const selectedWarung = warungs.find(w => w.id === warungId);

  if (!selectedWarung) {
    console.log("Warung tidak ditemukan.");
    return;
  }

  console.log(`\nMenu di ${selectedWarung.name}:`);
  selectedWarung.menu.forEach(m => {
    console.log(`${m.id}. ${m.name} - Rp${m.price}`);
  });

  while (true) {
    console.log("\n=== Menu ===");
    console.log("1. Tambah ke Keranjang");
    console.log("2. Lihat Keranjang");
    console.log("3. Update Jumlah di Keranjang");
    console.log("4. Hapus Item dari Keranjang");
    console.log("5. Checkout");
    console.log("6. Keluar");

    const choice = input("Pilih opsi: ");

    switch (choice) {
      case "1":
        const menuId = parseInt(input("Masukkan ID menu: "));
        const quantity = parseInt(input("Masukkan jumlah: "));
        const menuItem = selectedWarung.menu.find(m => m.id === menuId);
        if (menuItem) {
          addToCart(menuItem, quantity);
          console.log("Item ditambahkan ke keranjang.");
        } else {
          console.log("Menu tidak ditemukan.");
        }
        break;
      case "2":
        viewCart();
        break;
      case "3":
        const updateId = parseInt(input("Masukkan ID menu untuk update: "));
        const newQty = parseInt(input("Masukkan jumlah baru: "));
        updateCart(updateId, newQty);
        console.log("Jumlah item diperbarui.");
        break;
      case "4":
        const deleteId = parseInt(input("Masukkan ID menu untuk hapus: "));
        removeFromCart(deleteId);
        console.log("Item dihapus dari keranjang.");
        break;
      case "5":
        checkout();
        return;
      case "6":
        console.log("Terima kasih telah menggunakan aplikasi kami.");
        return;
      default:
        console.log("Pilihan tidak valid.");
    }
  }
}

module.exports = { runApp };
