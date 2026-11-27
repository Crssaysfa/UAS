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

// ============================================================
// >>> BAGIAN ANGGOTA 2 (bagian 1): menu dan input angka
// >>> Ganti baris [DIISI ANGGOTA 2 - BAGIAN 1] di bawah dengan kode dari file yang sesuai
// ============================================================
// [DIISI ANGGOTA 2 - BAGIAN 1]
// ============================================================
// >>> AKHIR BAGIAN ANGGOTA 2 (bagian 1)
// ============================================================

// ============================================================
// >>> BAGIAN ANGGOTA 3: fungsi perhitungan
// >>> Ganti baris [DIISI ANGGOTA 3] di bawah dengan kode dari file yang sesuai
// ============================================================
// [DIISI ANGGOTA 3]
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
// ============================================================
// >>> AKHIR BAGIAN ANGGOTA 2 (bagian 2)
// ============================================================