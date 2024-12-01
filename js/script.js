const navbar = document.getElementById("navbar");

// Inisialisasi variabel untuk posisi scroll terakhir
let lastScrollY = window.scrollY;

// Tambahkan event listener untuk mendeteksi saat pengguna melakukan scroll
window.addEventListener("scroll", () => {
    // Jika pengguna telah scroll ke bawah (scrollY lebih dari 0)
    if (window.scrollY > 0) {
        // Tambahkan kelas "sticky" ke elemen navbar untuk membuatnya tetap di posisi atas halaman
        navbar.classList.add("sticky");
    } else {
        // Hapus kelas "sticky" dari elemen navbar jika berada di posisi awal halaman
        navbar.classList.remove("sticky");  
    }
    
    // Perbarui posisi scroll terakhir dengan posisi scroll saat ini
    lastScrollY = window.scrollY;
});

// Fungsi untuk mengontrol sidebar
function toggleSidebar() {
    // Pilih elemen sidebar
    const sidebar = document.getElementById('sidebar');
    
    // Cek posisi sidebar saat ini dengan properti left
    if (sidebar.style.left === '0px') {
        // Jika sidebar sudah terbuka (left = 0px), sembunyikan dengan mengatur left ke -250px
        sidebar.style.left = '-250px';
    } else {
        // Jika sidebar tertutup, buka dengan mengatur left ke 0px
        sidebar.style.left = '0px';
    }
}
