// Laundry FAQ Data - Bahasa Indonesia

const faqData = [
    // General Category
    {
        id: 1,
        category: 'general',
        question: 'Apa perbedaan antara laundry kiloan dan satuan?',
        answer: 'Laundry kiloan adalah layanan pencucian pakaian yang dihitung berdasarkan berat pakaian (per kilogram), biasanya lebih ekonomis untuk jumlah banyak. Sementara laundry satuan menghitung per item pakaian, cocok untuk pakaian khusus atau jumlah sedikit.',
        tags: ['layanan', 'harga', 'kiloan']
    },
    {
        id: 2,
        category: 'general',
        question: 'Berapa lama waktu proses laundry?',
        answer: 'Waktu proses laundry biasanya 1-3 hari kerja tergantung volume pesanan dan layanan yang dipilih. Layanan express dapat selesai dalam 24 jam, sedangkan layanan regular membutuhkan 2-3 hari.',
        tags: ['waktu', 'proses', 'express']
    },
    {
        id: 3,
        category: 'general',
        question: 'Bagaimana jika ada kerusakan pada pakaian saya?',
        answer: 'Jika terjadi kerusakan pada pakaian Anda, hubungi pihak laundry segera. Sebagian besar laundry profesional memiliki asuransi atau kebijakan penggantian untuk kerusakan yang terjadi selama proses pencucian.',
        tags: ['kerusakan', 'klaim', 'asuransi']
    },
    {
        id: 4,
        category: 'general',
        question: 'Apakah ada layanan pickup dan delivery?',
        answer: 'Ya, banyak laundry modern menawarkan layanan pickup dan delivery gratis atau dengan biaya tertentu. Anda dapat menghubungi laundry untuk menanyakan area jangkauan dan biaya layanan tersebut.',
        tags: ['pengiriman', 'pickup', 'layanan']
    },
    {
        id: 5,
        category: 'general',
        question: 'Metode pembayaran apa saja yang tersedia?',
        answer: 'Metode pembayaran yang tersedia biasanya mencakup tunai, transfer bank, e-wallet (GCash, PayMaya), dan kartu kredit. Beberapa laundry juga menerima pembayaran online melalui aplikasi mereka.',
        tags: ['pembayaran', 'metode', 'online']
    },
    
    // Stains Category
    {
        id: 6,
        category: 'stains',
        question: 'Bagaimana cara menghilangkan noda tinta?',
        answer: 'Untuk noda tinta, segera rendam pakaian dengan air dingin dan alkohol (seperti hand sanitizer). Gosok perlahan dengan sikat lembut. Jika masih ada, gunakan hydrogen peroxide atau baking soda. Jangan gunakan air panas karena dapat membuat noda semakin melekat.',
        tags: ['tinta', 'noda', 'alkohol']
    },
    {
        id: 7,
        category: 'stains',
        question: 'Bagaimana menghilangkan noda darah?',
        answer: 'Noda darah sebaiknya dibilas dengan air dingin segera setelah terjadi. Gunakan sabun lembut dan gosok perlahan. Untuk noda yang sudah lama, rendam dengan air garam atau hydrogen peroxide. Hindari air panas karena protein darah akan terkoagulasi dan sulit dihilangkan.',
        tags: ['darah', 'noda', 'air dingin']
    },
    {
        id: 8,
        category: 'stains',
        question: 'Bagaimana cara menghilangkan noda minyak?',
        answer: 'Untuk noda minyak, taburkan baking soda atau tepung untuk menyerap minyak terlebih dahulu. Kemudian gunakan deterjen khusus untuk noda minyak atau sabun cuci piring yang kuat. Rendam selama 30 menit sebelum mencuci dengan air hangat.',
        tags: ['minyak', 'noda', 'baking soda']
    },
    {
        id: 9,
        category: 'stains',
        question: 'Bagaimana menghilangkan noda cokelat atau kopi?',
        answer: 'Untuk noda cokelat atau kopi, segera bilas dengan air dingin. Gunakan campuran air dan cuka putih (1:1) atau hydrogen peroxide. Rendam selama 15-30 menit, kemudian cuci dengan deterjen biasa. Hindari air panas pada tahap awal.',
        tags: ['cokelat', 'kopi', 'cuka']
    },
    {
        id: 10,
        category: 'stains',
        question: 'Bagaimana cara menghilangkan noda rumput?',
        answer: 'Noda rumput dapat dihilangkan dengan alkohol atau hydrogen peroxide. Oleskan langsung ke noda dan biarkan selama 5-10 menit. Gosok perlahan dengan sikat lembut. Untuk noda yang membandel, gunakan enzyme-based stain remover.',
        tags: ['rumput', 'noda', 'enzyme']
    },
    
    // Symbols Category
    {
        id: 11,
        category: 'symbols',
        question: 'Apa arti simbol tong dengan garis di bawahnya?',
        answer: 'Simbol tong dengan satu garis di bawahnya berarti pakaian dapat dicuci dengan air dingin dan putaran mesin yang lebih lembut. Dua garis berarti sangat lembut. Jangan gunakan air panas untuk simbol ini.',
        tags: ['simbol', 'tong', 'cuci']
    },
    {
        id: 12,
        category: 'symbols',
        question: 'Apa arti simbol X pada tong?',
        answer: 'Simbol X pada tong berarti pakaian tidak boleh dicuci dengan mesin cuci. Pakaian harus dicuci tangan dengan hati-hati menggunakan air dingin dan sabun lembut.',
        tags: ['simbol', 'tangan', 'larangan']
    },
    {
        id: 13,
        category: 'symbols',
        question: 'Apa arti simbol segitiga?',
        answer: 'Simbol segitiga menunjukkan instruksi pemutihan (bleaching). Segitiga kosong berarti boleh diputihkan dengan pemutih apapun. Segitiga dengan garis diagonal berarti hanya boleh diputihkan tanpa klorin. Segitiga dengan X berarti tidak boleh diputihkan.',
        tags: ['simbol', 'segitiga', 'pemutih']
    },
    {
        id: 14,
        category: 'symbols',
        question: 'Apa arti simbol lingkaran?',
        answer: 'Simbol lingkaran menunjukkan instruksi dry cleaning (pembersihan kering). Lingkaran kosong berarti boleh dry cleaning dengan semua pelarut. Lingkaran dengan huruf di dalamnya menunjukkan pelarut spesifik yang boleh digunakan.',
        tags: ['simbol', 'lingkaran', 'dry cleaning']
    },
    {
        id: 15,
        category: 'symbols',
        question: 'Apa arti simbol bujur sangkar?',
        answer: 'Simbol bujur sangkar menunjukkan instruksi pengeringan. Bujur sangkar kosong berarti dapat dikeringkan dengan cara apapun. Dengan garis horizontal berarti harus dikeringkan secara datar. Dengan garis diagonal berarti jangan gunakan mesin pengering.',
        tags: ['simbol', 'bujur sangkar', 'keringkan']
    },
    
    // Care Category
    {
        id: 16,
        category: 'care',
        question: 'Bagaimana cara merawat pakaian berwarna agar tidak pudar?',
        answer: 'Untuk menjaga warna pakaian, cuci dengan air dingin, pisahkan pakaian berwarna gelap dari yang terang, gunakan deterjen khusus untuk pakaian berwarna, dan hindari sinar matahari langsung saat menjemur. Balik pakaian sebelum mencuci untuk melindungi warna.',
        tags: ['warna', 'pudar', 'perawatan']
    },
    {
        id: 17,
        category: 'care',
        question: 'Bagaimana cara merawat pakaian dari kain sutra?',
        answer: 'Pakaian sutra harus dicuci tangan dengan air dingin menggunakan sabun lembut. Jangan diperas, cukup diperas perlahan. Keringkan dengan cara diletakkan datar atau digantung di tempat teduh. Gunakan setrika dengan suhu rendah jika diperlukan.',
        tags: ['sutra', 'halus', 'perawatan']
    },
    {
        id: 18,
        category: 'care',
        question: 'Bagaimana cara merawat pakaian dari denim?',
        answer: 'Denim dapat dicuci dengan mesin cuci menggunakan air dingin. Balik pakaian sebelum mencuci untuk menjaga warna. Hindari pemutih dan gunakan deterjen yang lembut. Keringkan secara alami, hindari mesin pengering karena dapat merusak kain.',
        tags: ['denim', 'jeans', 'perawatan']
    },
    {
        id: 19,
        category: 'care',
        question: 'Bagaimana cara merawat pakaian dari wol?',
        answer: 'Pakaian wol harus dicuci tangan atau dengan program wool pada mesin cuci menggunakan air dingin. Gunakan sabun khusus wol. Jangan diperas, cukup diperas perlahan. Keringkan dengan cara diletakkan datar di atas handuk. Hindari setrika panas langsung.',
        tags: ['wol', 'sweater', 'perawatan']
    },
    {
        id: 20,
        category: 'care',
        question: 'Bagaimana cara menghilangkan bau tidak sedap pada pakaian?',
        answer: 'Untuk menghilangkan bau, rendam pakaian dengan air dan baking soda selama 30 menit sebelum mencuci. Anda juga bisa menggunakan cuka putih atau essential oil dalam air bilasan terakhir. Pastikan pakaian benar-benar kering sebelum disimpan.',
        tags: ['bau', 'aroma', 'perawatan']
    },
    
    // Eco-friendly Category
    {
        id: 21,
        category: 'eco',
        question: 'Bagaimana cara mencuci pakaian dengan ramah lingkungan?',
        answer: 'Gunakan deterjen eco-friendly yang biodegradable, cuci dengan air dingin untuk menghemat energi, isi mesin cuci dengan penuh sebelum mencuci, dan jemur pakaian secara alami. Hindari penggunaan pemutih kimia yang berbahaya bagi lingkungan.',
        tags: ['ramah lingkungan', 'eco', 'sustainable']
    },
    {
        id: 22,
        category: 'eco',
        question: 'Apa itu deterjen eco-friendly dan mengapa penting?',
        answer: 'Deterjen eco-friendly adalah produk pembersih yang terbuat dari bahan-bahan alami dan dapat terurai dengan mudah di lingkungan. Penting karena mengurangi polusi air, melindungi ekosistem aquatic, dan lebih aman untuk kesehatan keluarga Anda.',
        tags: ['eco-friendly', 'deterjen', 'lingkungan']
    },
    {
        id: 23,
        category: 'eco',
        question: 'Bagaimana cara menghemat air saat mencuci pakaian?',
        answer: 'Hemat air dengan mengisi mesin cuci penuh sebelum mencuci, gunakan program eco atau quick wash jika memungkinkan, dan gunakan mesin cuci modern yang lebih efisien. Anda juga bisa menggunakan air bekas untuk menyiram tanaman.',
        tags: ['air', 'hemat', 'eco']
    },
    {
        id: 24,
        category: 'eco',
        question: 'Bagaimana cara mendaur ulang pakaian lama?',
        answer: 'Pakaian lama yang masih bagus dapat disumbangkan ke panti asuhan atau organisasi sosial. Pakaian yang rusak dapat dipotong menjadi lap pembersih atau digunakan untuk kerajinan. Beberapa toko juga menerima pakaian lama untuk didaur ulang menjadi produk baru.',
        tags: ['daur ulang', 'pakaian lama', 'sustainable']
    },
    {
        id: 25,
        category: 'eco',
        question: 'Apa manfaat menjemur pakaian di bawah sinar matahari?',
        answer: 'Menjemur di bawah sinar matahari tidak hanya menghemat energi listrik, tetapi juga membunuh bakteri secara alami, menghilangkan bau tidak sedap, dan membuat pakaian lebih segar. UV dari matahari juga memiliki efek pemutihan alami untuk pakaian putih.',
        tags: ['matahari', 'jemur', 'natural']
    },
    {
        id: 26,
        category: 'eco',
        question: 'Bagaimana cara membuat deterjen cuci pakaian sendiri?',
        answer: 'Anda dapat membuat deterjen dari baking soda, cuka putih, dan essential oil. Campurkan 1 cangkir baking soda dengan 20-30 tetes essential oil (seperti lavender), aduk rata, dan simpan dalam wadah tertutup. Gunakan 1-2 sendok makan per pencucian.',
        tags: ['DIY', 'deterjen', 'natural']
    }
];

const categories = [
    { id: 'general', name: '📋 Umum', description: 'Pertanyaan umum tentang layanan laundry' },
    { id: 'stains', name: '🧹 Menghilangkan Noda', description: 'Cara efektif menghilangkan berbagai jenis noda' },
    { id: 'symbols', name: '🏷️ Simbol Laundry', description: 'Memahami simbol pada label pakaian' },
    { id: 'care', name: '👕 Perawatan Pakaian', description: 'Tips merawat berbagai jenis kain' },
    { id: 'eco', name: '🌱 Ramah Lingkungan', description: 'Praktik laundry yang berkelanjutan' }
];

// Admin data storage (using localStorage)
class AdminData {
    constructor() {
        this.storageKey = 'laundryFaqData';
        this.initializeData();
    }

    initializeData() {
        if (!localStorage.getItem(this.storageKey)) {
            localStorage.setItem(this.storageKey, JSON.stringify(faqData));
        }
    }

    getAllFaqs() {
        return JSON.parse(localStorage.getItem(this.storageKey)) || faqData;
    }

    getFaqById(id) {
        const faqs = this.getAllFaqs();
        return faqs.find(faq => faq.id === id);
    }

    addFaq(faq) {
        const faqs = this.getAllFaqs();
        const newId = Math.max(...faqs.map(f => f.id), 0) + 1;
        const newFaq = { ...faq, id: newId };
        faqs.push(newFaq);
        localStorage.setItem(this.storageKey, JSON.stringify(faqs));
        return newFaq;
    }

    updateFaq(id, updatedFaq) {
        const faqs = this.getAllFaqs();
        const index = faqs.findIndex(faq => faq.id === id);
        if (index !== -1) {
            faqs[index] = { ...faqs[index], ...updatedFaq };
            localStorage.setItem(this.storageKey, JSON.stringify(faqs));
            return faqs[index];
        }
        return null;
    }

    deleteFaq(id) {
        const faqs = this.getAllFaqs();
        const filtered = faqs.filter(faq => faq.id !== id);
        localStorage.setItem(this.storageKey, JSON.stringify(filtered));
        return true;
    }
}

const adminData = new AdminData();
