// ====================================================
// PROGRAM PENILAIAN AKHIR MAHASISWA
// ====================================================
import * as readlineSync from "readline-sync"; // untuk membaca ketikan dari keyboard

// ----------  BLOK 1: KONSTANTA (nilai yang tetap)   ----------
const BOBOT_TUGAS: number = 30;      // bobot nilai tugas 30%
const BOBOT_UTS: number = 30;        // bobot nilai UTS 30%
const BOBOT_UAS: number = 40;        // bobot nilai UAS 40%
const TOTAL_PERTEMUAN: number = 18;  // jumlah pertemuan dalam 1 semester
const MIN_HADIR: number = 75;        // kehadiran minimal 75% agar bisa lulus
const NILAI_LULUS: number = 60;      // nilai akhir minimal agar lulus
const MIN_NILAI_UAS: number = 50;    // nilai UAS minimal agar lulus

// ---------- BLOK 2: STRUKTUR DATA ----------
// Bentuk data untuk setiap mahasiswa
interface Mahasiswa {
    id: number;          // nomor id (tidak boleh sama) ini nnti akan muncul notif ketika ada yang sama
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

// FILE ANGGOTA 2 (sudah diperbaiki)
// Bagian 1 ditempel menggantikan baris placeholder [DIISI ANGGOTA 2 - BAGIAN 1]
// Bagian 2 ditempel menggantikan baris placeholder [DIISI ANGGOTA 2 - BAGIAN 2]

// ########## BAGIAN 1 (mulai) ##########
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
// ########## BAGIAN 1 (selesai) ##########

// ########## BAGIAN 2 (mulai) ##########
// ---------- PROGRAM UTAMA (MENU BERULANG) ----------
// Percobaan Progress 2: menampilkan contoh data supaya fungsi di atas terlihat bekerja
console.log("Contoh data pertama:");
const mhsPertama: Mahasiswa | undefined = daftarMahasiswa[0];   // bisa undefined kalau array kosong
if (mhsPertama !== undefined) {                                  // cek dulu supaya tidak error
    tampilkanSatu(mhsPertama);
} else {
    console.log("Belum ada data mahasiswa.");
}
// hitungRataRata() dibuat oleh Anggota 3 (bagian fungsi perhitungan)
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
// ########## BAGIAN 2 (selesai) ##########

// Menghitung nilai akhir berdasarkan bobot tugas, UTS, dan UAS
function nilaiAkhirMhs(mhs: Mahasiswa): number {
    const hasil: number =
        (mhs.nilaiTugas * BOBOT_TUGAS +
            mhs.nilaiUTS * BOBOT_UTS +
            mhs.nilaiUAS * BOBOT_UAS) / 100;
    return Math.round(hasil * 100) / 100;   // bulatkan 2 angka di belakang koma
}

// Menghitung persen kehadiran dari jumlah pertemuan yang dihadiri
function hitungPersenHadir(hadir: number): number {
    const persen: number = (hadir / TOTAL_PERTEMUAN) * 100;
    return Math.round(persen * 10) / 10;    // bulatkan 1 angka di belakang koma
}

// Mengubah nilai akhir menjadi huruf mutu
function hurufMhs(mhs: Mahasiswa): string {
    const nilai: number = nilaiAkhirMhs(mhs);
    if (nilai >= 85) return "A";
    if (nilai >= 70) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

// Menentukan predikat dari nilai akhir
function tentukanPredikat(nilai: number): string {
    if (nilai >= 85) return "Sangat Baik";
    if (nilai >= 70) return "Baik";
    if (nilai >= 60) return "Cukup";
    return "Kurang";
}

// Menentukan status kelulusan: nilai akhir, kehadiran, dan nilai UAS harus memenuhi syarat
function statusMhs(mhs: Mahasiswa): string {
    const cukupNilai: boolean = nilaiAkhirMhs(mhs) >= NILAI_LULUS;
    const cukupHadir: boolean = hitungPersenHadir(mhs.hadir) >= MIN_HADIR;
    const cukupUAS: boolean = mhs.nilaiUAS >= MIN_NILAI_UAS;
    return (cukupNilai && cukupHadir && cukupUAS) ? "LULUS" : "TIDAK LULUS";
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
// [DIISI ANGGOTA 2 - BAGIAN 2]

// --- SEMENTARA (hapus kalau kode Anggota 2 sudah masuk): tampilkan semua data untuk tes ---
for (const mhs of daftarMahasiswa) {
    tampilkanSatu(mhs);
}
// ============================================================