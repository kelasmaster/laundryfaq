# Laundry FAQ - Knowledge Base Website

Laundry FAQ adalah website basis pengetahuan perawatan pakaian yang responsif dan interaktif, dibangun dengan **HTML/CSS/JavaScript murni** (Vanilla JS).

## 🎯 Fitur Utama

### Public Website
- **Homepage dengan Hero Section** - Tampilan menarik dengan call-to-action
- **Search Functionality** - Cari FAQ berdasarkan kata kunci
- **Category Filtering** - Filter FAQ berdasarkan 5 kategori berbeda
- **Expandable FAQ Cards** - Klik untuk membuka/tutup jawaban
- **Responsive Design** - Optimal untuk mobile, tablet, dan desktop
- **Smooth Animations** - Transisi dan animasi yang halus

### Authentication System
- **Login Page** - Email/password authentication
- **Role-Based Access Control** - Admin dan user roles
- **Session Management** - Menggunakan localStorage
- **Demo Credentials** - Untuk testing

### Admin Panel
- **Create FAQ** - Tambah pertanyaan dan jawaban baru
- **Read FAQ** - Lihat semua FAQ dengan search dan filter
- **Update FAQ** - Edit FAQ yang sudah ada
- **Delete FAQ** - Hapus FAQ dengan konfirmasi
- **Tag Management** - Tambah dan kelola tags
- **Statistics Dashboard** - Lihat statistik FAQ

## 📁 Struktur File

```
laundry-faq-html/
├── index.html          # Halaman utama
├── login.html          # Halaman login
├── admin.html          # Admin panel
├── styles.css          # Stylesheet utama
├── app.js              # Logika aplikasi publik
├── admin.js            # Logika admin panel
├── data.js             # Data FAQ dan AdminData class
└── README.md           # Dokumentasi
```

## 🚀 Cara Menggunakan

### 1. Clone Repository
```bash
git clone https://github.com/aiapp/laundry-faq-html.git
cd laundry-faq-html
```

### 2. Jalankan Locally
Gunakan server lokal (Python, Node.js, atau Live Server):

**Python 3:**
```bash
python3 -m http.server 8000
```

**Node.js (dengan http-server):**
```bash
npx http-server
```

**VS Code Live Server:**
- Install extension "Live Server"
- Right-click pada `index.html` → "Open with Live Server"

### 3. Akses Website
- **Homepage:** `http://localhost:8000/`
- **Login:** `http://localhost:8000/login.html`
- **Admin Panel:** `http://localhost:8000/admin.html`

## 🔐 Demo Credentials

### Admin User
- **Email:** `admin@laundry.com`
- **Password:** `admin123`
- **Akses:** Admin Panel + CRUD operations

### Regular User
- **Email:** `user@laundry.com`
- **Password:** `user123`
- **Akses:** Halaman publik saja

## 📚 Konten FAQ

Website ini berisi **26 FAQ items** dalam Bahasa Indonesia, terbagi dalam 5 kategori:

1. **Umum** (5 items)
   - Perbedaan laundry kiloan vs satuan
   - Waktu proses laundry
   - Kerusakan pakaian
   - Layanan pickup & delivery
   - Metode pembayaran

2. **Menghilangkan Noda** (5 items)
   - Noda tinta
   - Noda darah
   - Noda minyak
   - Noda cokelat/kopi
   - Noda rumput

3. **Simbol Laundry** (5 items)
   - Simbol tong
   - Simbol X pada tong
   - Simbol segitiga
   - Simbol lingkaran
   - Simbol bujur sangkar

4. **Perawatan Pakaian** (5 items)
   - Menjaga warna pakaian
   - Merawat pakaian sutra
   - Merawat denim
   - Merawat wol
   - Menghilangkan bau

5. **Ramah Lingkungan** (6 items)
   - Mencuci ramah lingkungan
   - Deterjen eco-friendly
   - Menghemat air
   - Mendaur ulang pakaian
   - Menjemur di bawah matahari
   - Membuat deterjen sendiri

## 🎨 Design System

### Color Palette
- **Primary:** #D97706 (Terracotta)
- **Secondary:** #6B8E6F (Sage Green)
- **Background:** #FEF8F3 (Cream)
- **Foreground:** #1F2937 (Dark Gray)
- **Border:** #E5E7EB (Light Gray)

### Typography
- **Display:** Playfair Display (headings)
- **Accent:** Poppins (subheadings)
- **Body:** Inter (body text)

### Responsive Breakpoints
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 💾 Data Storage

Website menggunakan **localStorage** untuk menyimpan data:
- FAQ items
- User sessions
- Admin preferences

Tidak memerlukan database backend atau API server.

## 🔧 Teknologi

- **HTML5** - Semantic markup
- **CSS3** - Modern styling dengan CSS variables
- **JavaScript (Vanilla)** - No framework dependencies
- **localStorage** - Client-side data persistence

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

Website ini dapat di-deploy di berbagai platform:

### GitHub Pages
```bash
# Push ke GitHub
git push origin main

# Enable GitHub Pages di repository settings
# Pilih branch: main, folder: root
```

### Netlify
```bash
# Drag and drop folder ke Netlify
# atau connect GitHub repository
```

### Vercel
```bash
# Import repository dari GitHub
# Automatic deployment pada setiap push
```

### Traditional Hosting
- Upload semua file ke server web
- Tidak perlu build process atau dependencies

## 📝 Lisensi

MIT License - Bebas digunakan untuk keperluan komersial maupun non-komersial.

## 👨‍💻 Author

Dibuat dengan ❤️ untuk membantu Anda merawat pakaian dengan baik.

## 📧 Kontak

Untuk pertanyaan atau saran, silakan buat issue di repository ini.

---

**Selamat menggunakan Laundry FAQ!** 🧺✨
