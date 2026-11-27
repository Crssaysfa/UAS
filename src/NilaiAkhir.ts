// ====================================================
// PROGRAM PENILAIAN AKHIR MAHASISWA
// UAS Pemrograman Dasar - Teknologi Informasi, UB
// Cara menjalankan: npx ts-node src/index.ts
// ====================================================
import * as readlineSync from "readline-sync"; // untuk membaca ketikan dari keyboard

// ---------- BLOK 1: KONSTANTA (nilai yang tetap) ----------
const BOBOT_TUGAS: number = 30;      // bobot nilai tugas 30%
const BOBOT_UTS: number = 30;        // bobot nilai UTS 30%
const BOBOT_UAS: number = 40;        // bobot nilai UAS 40%
const TOTAL_PERTEMUAN: number = 18;  // jumlah pertemuan dalam 1 semester
const MIN_HADIR: number = 75;        // kehadiran minimal 75% agar bisa lulus
const NILAI_LULUS: number = 60;      // nilai akhir minimal agar lulus
const MIN_NILAI_UAS: number = 50;    // nilai UAS minimal agar lulus

// ---------- BLOK 2: STRUKTUR DATA ----------
// Bentuk data untuk satu mahasiswa
interface Mahasiswa {
    id: number;          // nomor id (tidak boleh sama)
    nim: string;         // NIM mahasiswa
    nama: string;        // nama mahasiswa
    matkul: string;      // mata kuliah
    nilaiTugas: number;  // nilai tugas
    nilaiUTS: number;    // nilai UTS
    nilaiUAS: number;    // nilai UAS
    hadir: number;       // jumlah pertemuan yang dihadiri
}

// ---------- BLOK 3: DATA AWAL ----------
// Array untuk menyimpan semua data mahasiswa (disimpan di memori)
const daftarMahasiswa: Mahasiswa[] = [
    { id: 1, nim: "263140707111001", nama: "Andi Pratama", matkul: "Pemrograman Dasar", nilaiTugas: 85, nilaiUTS: 80, nilaiUAS: 90, hadir: 17 },
    { id: 2, nim: "263140707111002", nama: "Budi Santoso", matkul: "Pemrograman Dasar", nilaiTugas: 70, nilaiUTS: 65, nilaiUAS: 60, hadir: 15 },
    { id: 3, nim: "263140707111003", nama: "Citra Lestari", matkul: "Bahasa Inggris", nilaiTugas: 90, nilaiUTS: 88, nilaiUAS: 92, hadir: 18 },
    { id: 4, nim: "263140707111004", nama: "Dewi Anggraini", matkul: "Pancasila", nilaiTugas: 60, nilaiUTS: 55, nilaiUAS: 45, hadir: 12 },
    { id: 5, nim: "263140707111005", nama: "Eko Wijaya", matkul: "Bahasa Inggris", nilaiTugas: 78, nilaiUTS: 80, nilaiUAS: 75, hadir: 13 }
];

// Penghitung id untuk data baru (pakai let karena nilainya berubah)
let idBerikutnya: number = 6;

// ============================================================
// >>> BAGIAN ANGGOTA 2 (bagian 1): menu dan input angka
// >>> Ganti baris [DIISI ANGGOTA 2 - BAGIAN 1] di bawah dengan kode dari file yang sesuai
// ============================================================
// ---------- BLOK 4: FUNGSI MENU DAN INPUT ANGKA ----------
// Fungsi tanpa parameter dan tanpa return (void): menampilkan menu utama
function tampilkanMenu(): void {
    console.log("");
    console.log("===== PENILAIAN AKHIR MAHASISWA =====");
    console.log("1. Tambah data");
    console.log("2. Tampilkan semua data");
    console.log("3. Lihat detail berdasarkan ID");
    console.log("4. Ubah data");
    console.log("5. Hapus data");
    console.log("6. Cari data");
    console.log("0. Keluar");
    console.log("=====================================");
}

// Fungsi untuk meminta angka dari pengguna, diulang terus sampai inputnya benar
// bulat = true artinya angka harus bulat (tanpa koma)
function tanyaAngka(pertanyaan: string, min: number, max: number, bulat: boolean): number {
    while (true) {
        const jawaban: string = readlineSync.question(pertanyaan).trim(); // ambil jawaban
        const angka: number = Number(jawaban);                           // ubah jadi angka

        if (jawaban === "" || isNaN(angka)) {        // kosong atau bukan angka
            console.log("Harus diisi angka ya.");
        } else if (angka < min || angka > max) {     // di luar batas
            console.log("Angka harus antara " + min + " sampai " + max + ".");
        } else if (bulat && angka % 1 !== 0) {       // harus bulat tapi ada komanya
            console.log("Angka harus bulat (tanpa koma).");
        } else {
            return angka;                            // input sudah benar
        }
    }
}

// ============================================================
// >>> AKHIR BAGIAN ANGGOTA 2 (bagian 1)
// ============================================================

// ============================================================
// >>> BAGIAN ANGGOTA 3: fungsi perhitungan
// >>> Ganti baris [DIISI ANGGOTA 3] di bawah dengan kode dari file yang sesuai
// ============================================================
// ---------- BLOK 5: FUNGSI PERHITUNGAN ----------
// Fungsi untuk menghitung nilai akhir (mengembalikan hasil hitung)
function hitungNilaiAkhir(tugas: number, uts: number, uas: number): number {
    let nilaiAkhir: number = 0;                // mulai dari 0
    nilaiAkhir += tugas * BOBOT_TUGAS / 100;   // tambah nilai dari tugas
    nilaiAkhir += uts * BOBOT_UTS / 100;       // tambah nilai dari UTS
    nilaiAkhir += uas * BOBOT_UAS / 100;       // tambah nilai dari UAS
    nilaiAkhir -= nilaiAkhir % 1;              // buang angka di belakang koma
    return nilaiAkhir;
}

// Fungsi untuk menghitung persen kehadiran
function hitungPersenHadir(hadir: number): number {
    let persen: number = hadir * 100 / TOTAL_PERTEMUAN;  // hadir dibagi total pertemuan
    persen -= persen % 1;                                // buang angka di belakang koma
    return persen;
}

// Fungsi untuk menentukan huruf mutu (memakai switch)
function tentukanHuruf(nilaiAkhir: number): string {
    let huruf: string = "E";
    const puluhan: number = (nilaiAkhir - nilaiAkhir % 10) / 10;   // contoh: 85 jadi 8

    switch (puluhan) {
        case 10:            // nilai 100
        case 9:             // nilai 90-99
        case 8:             // nilai 80-89 (tiga case ini hasilnya sama)
            huruf = "A";
            break;
        case 7:             // nilai 70-79
            huruf = "B";
            break;
        case 6:             // nilai 60-69
            huruf = "C";
            break;
        case 5:             // nilai 50-59
            huruf = "D";
            break;
        default:            // nilai di bawah 50
            huruf = "E";
            break;
    }
    return huruf;
}

// Fungsi untuk menentukan status lulus atau tidak (if bersarang 3 tingkat)
function tentukanStatus(persenHadir: number, nilaiAkhir: number, nilaiUAS: number): string {
    if (persenHadir >= MIN_HADIR) {               // tingkat 1: kehadiran cukup
        if (nilaiAkhir >= NILAI_LULUS) {          // tingkat 2: nilai akhir cukup
            if (nilaiUAS >= MIN_NILAI_UAS) {      // tingkat 3: nilai UAS cukup
                return "Lulus";
            } else {
                return "Tidak lulus (nilai UAS kurang)";
            }
        } else {
            return "Tidak lulus (nilai akhir kurang)";
        }
    } else {
        return "Tidak lulus (kehadiran kurang)";
    }
}

// Fungsi untuk menentukan predikat berdasarkan nilai akhir (if dengan lebih dari 1 kondisi)
function tentukanPredikat(nilaiAkhir: number): string {
    if (nilaiAkhir >= 85 && nilaiAkhir <= 100) {      // nilai 85 sampai 100
        return "Sangat baik";
    } else if (nilaiAkhir >= 70 && nilaiAkhir < 85) { // nilai 70 sampai 84
        return "Baik";
    } else if (nilaiAkhir >= 60 && nilaiAkhir < 70) { // nilai 60 sampai 69
        return "Cukup";
    } else {                                          // nilai di bawah 60
        return "Kurang";
    }
}

// Fungsi bantu: nilai akhir dari satu data mahasiswa
function nilaiAkhirMhs(mhs: Mahasiswa): number {
    return hitungNilaiAkhir(mhs.nilaiTugas, mhs.nilaiUTS, mhs.nilaiUAS);
}

// Fungsi bantu: status (lulus atau tidak) dari satu data mahasiswa
function statusMhs(mhs: Mahasiswa): string {
    const persenHadir: number = hitungPersenHadir(mhs.hadir);
    return tentukanStatus(persenHadir, nilaiAkhirMhs(mhs), mhs.nilaiUAS);
}

// Fungsi bantu: huruf mutu satu mahasiswa (kalau tidak lulus, hurufnya E)
function hurufMhs(mhs: Mahasiswa): string {
    const lulus: boolean = statusMhs(mhs) === "Lulus";   // true kalau lulus
    if (!lulus) {                                        // kalau tidak lulus
        return "E";
    }
    return tentukanHuruf(nilaiAkhirMhs(mhs));
}

// Fungsi untuk menghitung rata-rata nilai akhir semua mahasiswa
function hitungRataRata(daftar: Mahasiswa[]): number {
    if (daftar.length === 0) {     // kalau datanya kosong
        return 0;
    }
    let total: number = 0;
    for (const mhs of daftar) {    // ambil mahasiswa satu per satu
        total += nilaiAkhirMhs(mhs);
    }
    let rata: number = total;
    rata /= daftar.length;         // bagi dengan jumlah data
    rata *= 100;                   // dikali 100 supaya 2 angka di belakang koma ikut dibulatkan
    rata = Math.round(rata);       // dibulatkan
    rata /= 100;                   // dikembalikan lagi
    return rata;
}

// ============================================================
// >>> AKHIR BAGIAN ANGGOTA 3
// ============================================================

// ---------- BLOK 6: FUNGSI TAMPILAN DATA ----------
// Fungsi dengan parameter (void): mencetak garis pemisah sepanjang "panjang" karakter
function tampilkanGaris(panjang: number): void {
    let garis: string = "";
    for (let i = 0; i < panjang; i++) {   // ulangi sebanyak panjang
        garis += "-";                     // tambah satu tanda minus tiap putaran
    }
    console.log(garis);
}

// Fungsi dengan parameter (void): menampilkan detail satu mahasiswa
function tampilkanSatu(mhs: Mahasiswa): void {
    const nilaiAkhir: number = nilaiAkhirMhs(mhs);

    tampilkanGaris(40);
    console.log("ID          : " + mhs.id);
    console.log("NIM         : " + mhs.nim);
    console.log("Nama        : " + mhs.nama);
    console.log("Mata kuliah : " + mhs.matkul);
    console.log("Nilai       : " + mhs.nilaiTugas + " / " + mhs.nilaiUTS + " / " + mhs.nilaiUAS + " (tugas/UTS/UAS)");
    console.log("Kehadiran   : " + mhs.hadir + " dari " + TOTAL_PERTEMUAN + " pertemuan (" + hitungPersenHadir(mhs.hadir) + "%)");
    console.log("Nilai akhir : " + nilaiAkhir + " (" + hurufMhs(mhs) + ")");
    console.log("Predikat    : " + tentukanPredikat(nilaiAkhir));
    console.log("Status      : " + statusMhs(mhs));
    tampilkanGaris(40);
}

// ============================================================
// >>> BAGIAN ANGGOTA 2 (bagian 2): program utama dan menu berulang
// >>> Ganti baris [DIISI ANGGOTA 2 - BAGIAN 2] di bawah dengan kode dari file yang sesuai
// ============================================================
// ---------- PROGRAM UTAMA (MENU BERULANG) ----------
// Percobaan Progress 2: menampilkan contoh data supaya fungsi di atas terlihat bekerja
console.log("Contoh data pertama:");
const mahasiswaPertama = daftarMahasiswa[0];
if (mahasiswaPertama) {
    tampilkanSatu(mahasiswaPertama);
}
console.log("Rata-rata nilai akhir semua data: " + hitungRataRata(daftarMahasiswa));

let pilihan: string = "";    // tempat menyimpan pilihan menu

// do...while: menu tampil dulu, diulang terus selama pilihan bukan 0
do {
    tampilkanMenu();
    pilihan = readlineSync.question("Pilih menu (0-6): ").trim();

    switch (pilihan) {
        case "1":
            console.log("Fitur tambah data belum dibuat (Progress 3).");
            break;
        case "2":
            console.log("Fitur tampil semua data belum dibuat (Progress 4).");
            break;
        case "3":
            console.log("Fitur detail data belum dibuat (Progress 4).");
            break;
        case "4":
            console.log("Fitur ubah data belum dibuat (Progress 5).");
            break;
        case "5":
            console.log("Fitur hapus data belum dibuat (Progress 5).");
            break;
        case "6":
            console.log("Fitur cari data belum dibuat (Progress 6).");
            break;
        case "0":
            console.log("Terima kasih, program selesai.");
            break;
        default:
            console.log("Pilihan tidak valid, masukkan angka 0 sampai 6.");
            break;
    }
} while (pilihan !== "0");

// ============================================================
// >>> AKHIR BAGIAN ANGGOTA 2 (bagian 2)
// ============================================================