# 🔐 DES Simulator — Neubrutalist Premium UI

> **Simulator Interaktif Data Encryption Standard (DES)**  
> Visualisasi langkah demi langkah algoritma enkripsi DES dengan tampilan neobrutalist modern.

---

## 📚 Tentang Proyek / About

**DES Simulator** adalah aplikasi web interaktif yang memvisualisasikan setiap langkah algoritma **Data Encryption Standard (DES)** secara detail, mulai dari pemrosesan input, penjadwalan kunci, permutasi awal, 16 putaran Feistel, hingga keluaran ciphertext akhir.

| Parameter | Nilai |
|-----------|-------|
| Ukuran Blok | 64-bit |
| Ukuran Kunci | 56-bit efektif (64-bit dengan paritas) |
| Jumlah Putaran | 16 Feistel Rounds |
| S-Box | 8 tabel substitusi |

---

## 🚀 Fitur Utama / Key Features

- ✅ **Simulasi DES Lengkap** — Enkripsi & Dekripsi
- ✅ **Visualisasi 6 Tahap DES Pipeline**:
  1. Inisialisasi Input (Plaintext + Key)
  2. Penjadwalan Kunci / Key Schedule (PC-1, PC-2)
  3. Permutasi Awal (IP)
  4. 16 Putaran Jaringan Feistel
  5. Pertukaran & Inverse Permutation (IP⁻¹)
  6. Ciphertext Akhir
- ✅ **Autoplay** — Navigasi antar putaran Feistel secara otomatis
- ✅ **Bilingual UI** — Indonesia & English
- ✅ **Ekspor** — JSON & TXT trace log
- ✅ **Fully Responsive** — Mobile, Tablet, Desktop
- ✅ **Neobrutalist Premium Design**

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: TailwindCSS + Vanilla CSS (neobrutalist tokens)
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **State Management**: Zustand
- **Fonts**: Syne, Space Grotesk, Space Mono, Inter (Google Fonts)
- **Deployment**: Vercel

---

## 📦 Instalasi Lokal / Local Setup

```bash
# Clone repository
git clone https://github.com/imamrzkys/TUGAS-11-KRIPTOGRAFI.git
cd TUGAS-11-KRIPTOGRAFI

# Install dependencies
npm install

# Run development server
npm run dev
```

Buka [http://localhost:5173](http://localhost:5173) di browser.

---

## 🏗️ Build untuk Production

```bash
npm run build
```

Output akan ada di folder `dist/`.

---

## 🌐 Deploy ke Vercel

Repository ini sudah siap deploy ke [Vercel](https://vercel.com):

1. Import repository di Vercel Dashboard
2. Framework: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Klik **Deploy**

---

## 📖 Referensi Algoritma DES

- FIPS PUB 46-3: Data Encryption Standard
- NIST SP 800-67: Recommendation for the Triple Data Encryption Algorithm

---

## 👨‍💻 Pembuat / Developer

| Field | Info |
|-------|------|
| **Nama** | Imam Rizki Saputra |
| **Tahun** | DES — 2026 |
| **Program Studi** | Teknik Informatika |
| **Universitas** | Universitas Bale Bandung |
| **Mata Kuliah** | Kriptografi |
| **GitHub** | [@imamrzkys](https://github.com/imamrzkys) |

---

> *"Cryptography is the art of writing or solving codes."*
