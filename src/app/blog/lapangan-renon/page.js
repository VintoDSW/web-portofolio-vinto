"use client";
import { useState, useEffect } from 'react';

export default function BlogDetail() {
  const [lang, setLang] = useState('id'); // Default ID sesuai request konten
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const content = {
    en: {
      nav: ['Home', 'About Me', 'Skill', 'Experience', 'Portfolio', 'Blog'],
      btnTouch: 'Get in touch',
      backBtn: '← Back to Blog',
      post: {
        category: 'Balinese Culture',
        date: '14 Apr 2026',
        readTime: '7 mins read',
        title: 'Lapangan Renon: Harmony of Public Space and Balinese Cultural Heritage',
        authorName: 'Vinto Dhammanda Suryanto Wijaya',
        authorImg: '/images/foto-vinto.png',
        postImg: '/images/lapangan-renon-image.jpg',
        sections: [
          {
            title: "1. Overview",
            desc: "Puputan Renon Square is one of the most iconic public spaces in Denpasar City, Bali. Located in the strategic Renon area, which is also known as the center of government and city activities. With a very large area, this place is a main destination for locals and tourists who want to enjoy the outdoors in the middle of the city. This square is also often called Niti Mandala Renon and functions as the city's lungs, providing a balance between the urban environment and green space."
          },
          {
            title: "2. Location and Accessibility",
            desc: "Geographically, Puputan Renon Square is in South Denpasar and is surrounded by various government offices, main roads, and other public facilities. Access to this location is very easy, whether using private vehicles or public transportation. The streets around the square are quite wide and parking areas are available at several points, making it easy for visitors to come at any time. Its location in the city center makes this place always crowded with people from all walks of life."
          },
          {
            title: "3. History and Background",
            desc: "This square was built as a symbol of respect for the Balinese people's struggle against colonialism. The word \"Puputan\" itself means fighting to the end without surrendering. This historical value is reinforced by the presence of the Bajra Sandhi Monument standing majestically in the middle of the area. This monument is dedicated to commemorating the struggle of the Balinese people, especially in the 1946 Puputan Margarana event. Besides being a historical symbol, this monument also functions as a museum displaying various dioramas of Bali's historical journey."
          },
          {
            title: "4. Function and Role in City Life",
            desc: "Puputan Renon Square not only functions as an open green space, but also as a center for the social activities of the Denpasar community. This place has become a meeting point for various communities, ranging from sports and arts communities to social organizations. In addition, this square is often used for official activities such as government ceremonies, national holiday commemorations, and various other public events. This multifunctional role makes Renon Square an important element in city life."
          },
          {
            title: "5. Sports Facilities",
            desc: "One of the main attractions of Puputan Renon Square is its fairly complete sports facilities. There is a jogging track encircling the field with a length of approximately 1.5 kilometers, which is often used by the public for running or leisurely walking. In addition, there are basketball and volleyball courts, as well as an open area that can be used for various types of sports such as football or community training. These facilities support a healthy lifestyle and make this square an open sports center."
          },
          {
            title: "6. Public and Supporting Facilities",
            desc: "In addition to sports facilities, this square is also equipped with various public facilities that support visitor comfort. There is a large green park with shady trees, a children's play area, seating for relaxing, and public toilets. Some areas are also utilized as gathering places for families or simple picnics. The existence of these facilities makes this square suitable for all groups, from children to adults."
          },
          {
            title: "7. Daily Visitor Activities",
            desc: "Activities at Puputan Renon Square take place throughout the day with a different pattern at each time. In the morning, this square is dominated by people exercising such as jogging, gymnastics, or cycling. The day tends to be quieter because of the hot weather, but there are still visitors who utilize the shaded areas to rest. Meanwhile, in the afternoon and evening, the atmosphere becomes more lively with the presence of families, children, and groups of friends who come to relax or just take a walk."
          },
          {
            title: "8. Activities and Events",
            desc: "This square is also often the location for various activities and events. Ranging from cultural festivals, exhibitions, small concerts, to community activities are often held here. In addition, several government events and official activities also utilize this area because of its large capacity. This makes Puputan Renon Square a dynamic and always lively center of public activity."
          },
          {
            title: "9. Environmental Atmosphere",
            desc: "The environment around the square is dominated by wide green spaces and trees that give a cool and comfortable impression. Despite being in the middle of the city, the atmosphere inside the square feels quite calm, especially in the morning. In the afternoon, the atmosphere turns more lively with high social interaction. The combination of open space, community activities, and the background of the monument makes this place have a strong visual appeal."
          },
          {
            title: "10. Main Strengths and Attractions",
            desc: "The main strengths of Puputan Renon Square lie in its large area, easy accessibility, and complete facilities that can be enjoyed for free. In addition, the historical value attached to this area provides an experience that is not only recreational but also educational. The existence of the Bajra Sandhi Monument as the main landmark also adds to its own appeal for visitors."
          },
          {
            title: "11. Weaknesses and Challenges",
            desc: "Despite having many advantages, this square also has some shortcomings. Cleanliness in some areas is sometimes poorly maintained, especially when the number of visitors increases. In addition, the presence of unauthorized vendors in several spots can disrupt the comfort and aesthetics of the environment. More optimal management is still needed to maintain the quality of this area."
          },
          {
            title: "12. Conclusion",
            desc: "Overall, Puputan Renon Square is a public space that plays an important role in the lives of the Denpasar community. This place not only functions as a sports and recreation area, but also as a center of social interaction and a historical symbol of the Balinese people's struggle. With all its strengths and weaknesses, Renon Square remains one of the main destinations reflecting the dynamics of Denpasar city life."
          }
        ]
      }
    },
    id: {
      nav: ['Beranda', 'Tentang Saya', 'Keahlian', 'Pengalaman', 'Portofolio', 'Blog'],
      btnTouch: 'Hubungi Saya',
      backBtn: '← Kembali ke Blog',
      post: {
        category: 'Budaya Bali',
        date: '14 Apr 2026',
        readTime: '7 mnt baca',
        title: 'Lapangan Renon: Harmoni Ruang Publik dan Warisan Budaya Bali',
        authorName: 'Vinto Dhammanda Suryanto Wijaya',
        authorImg: '/images/foto-vinto.png',
        postImg: '/images/lapangan-renon-image.jpg',
        sections: [
          { title: "1. Gambaran Umum", desc: "Lapangan Puputan Renon merupakan salah satu ruang publik paling ikonik di Kota Denpasar, Bali. Lapangan ini terletak di kawasan strategis Renon yang juga dikenal sebagai pusat pemerintahan dan aktivitas kota. Dengan luas area yang sangat besar, tempat ini menjadi destinasi utama bagi masyarakat lokal maupun wisatawan yang ingin menikmati suasana terbuka di tengah kota. Lapangan ini juga sering disebut sebagai Niti Mandala Renon dan berfungsi sebagai paru-paru kota yang memberikan keseimbangan antara lingkungan urban dan ruang hijau." },
          { title: "2. Letak dan Aksesibilitas", desc: "Secara geografis, Lapangan Puputan Renon berada di Denpasar Selatan dan dikelilingi oleh berbagai kantor pemerintahan, jalan utama, serta fasilitas umum lainnya. Akses menuju lokasi ini tergolong sangat mudah, baik menggunakan kendaraan pribadi maupun transportasi umum. Jalanan di sekitar lapangan cukup luas dan tersedia area parkir di beberapa titik, sehingga memudahkan pengunjung untuk datang kapan saja. Lokasinya yang berada di pusat kota menjadikan tempat ini selalu ramai dikunjungi dari berbagai kalangan." },
          { title: "3. Sejarah dan Latar Belakang", desc: "Lapangan ini dibangun sebagai simbol penghormatan terhadap perjuangan rakyat Bali dalam melawan penjajahan. Kata “Puputan” sendiri memiliki makna perjuangan hingga akhir tanpa menyerah. Nilai historis ini diperkuat dengan keberadaan Monumen Bajra Sandhi yang berdiri megah di tengah kawasan. Monumen ini didedikasikan untuk mengenang perjuangan rakyat Bali, khususnya dalam peristiwa Puputan Margarana tahun 1946. Selain menjadi simbol sejarah, monumen ini juga berfungsi sebagai museum yang menampilkan berbagai diorama perjalanan sejarah Bali dari masa ke masa." },
          { title: "4. Fungsi dan Peran dalam Kehidupan Kota", desc: "Lapangan Puputan Renon tidak hanya berfungsi sebagai ruang terbuka hijau, tetapi juga sebagai pusat aktivitas sosial masyarakat Denpasar. Tempat ini menjadi titik pertemuan berbagai komunitas, mulai dari komunitas olahraga, seni, hingga organisasi sosial. Selain itu, lapangan ini sering digunakan untuk kegiatan resmi seperti upacara pemerintahan, peringatan hari besar nasional, serta berbagai acara publik lainnya. Peran multifungsi ini menjadikan Lapangan Renon sebagai salah satu elemen penting dalam kehidupan kota." },
          { title: "5. Fasilitas Olahraga", desc: "Salah satu daya tarik utama Lapangan Puputan Renon adalah fasilitas olahraga yang cukup lengkap. Tersedia jalur jogging yang mengelilingi lapangan dengan panjang kurang lebih 1,5 kilometer, yang sering digunakan oleh masyarakat untuk berlari atau berjalan santai. Selain itu, terdapat lapangan basket, voli, serta area terbuka yang dapat digunakan untuk berbagai jenis olahraga seperti sepak bola atau latihan komunitas. Fasilitas ini mendukung gaya hidup sehat masyarakat dan menjadikan lapangan ini sebagai pusat olahraga terbuka." },
          { title: "6. Fasilitas Umum dan Penunjang", desc: "Selain fasilitas olahraga, lapangan ini juga dilengkapi dengan berbagai fasilitas umum yang menunjang kenyamanan pengunjung. Tersedia taman hijau yang luas dengan pepohonan rindang, area bermain anak, tempat duduk untuk bersantai, serta toilet umum. Beberapa area juga dimanfaatkan sebagai tempat berkumpul keluarga atau piknik sederhana. Keberadaan fasilitas ini membuat lapangan ini cocok dikunjungi oleh semua kalangan, mulai dari anak-anak hingga orang dewasa." },
          { title: "7. Aktivitas Harian Pengunjung", desc: "Aktivitas di Lapangan Puputan Renon berlangsung sepanjang hari dengan pola yang berbeda di setiap waktu. Pada pagi hari, lapangan ini didominasi oleh masyarakat yang berolahraga seperti jogging, senam, atau bersepeda. Siang hari cenderung lebih sepi karena cuaca yang panas, namun tetap ada pengunjung yang memanfaatkan area teduh untuk beristirahat. Sementara itu, pada sore hingga malam hari, suasana menjadi lebih ramai dengan kehadiran keluarga, anak-anak, dan kelompok pertemanan yang datang untuk bersantai atau sekadar berjalan-jalan." },
          { title: "8. Kegiatan dan Event", desc: "Lapangan ini juga sering menjadi lokasi penyelenggaraan berbagai kegiatan dan acara. Mulai dari festival budaya, pameran, konser kecil, hingga kegiatan komunitas sering diadakan di sini. Selain itu, beberapa acara pemerintahan dan kegiatan resmi juga memanfaatkan area ini karena kapasitasnya yang besar. Hal ini menjadikan Lapangan Puputan Renon sebagai pusat kegiatan publik yang dinamis dan selalu hidup." },
          { title: "9. Suasana Lingkungan", desc: "Lingkungan di sekitar lapangan didominasi oleh ruang hijau yang luas dan pepohonan yang memberikan kesan sejuk dan nyaman. Meskipun berada di tengah kota, suasana di dalam lapangan terasa cukup tenang, terutama pada pagi hari. Pada sore hari, suasana berubah menjadi lebih hidup dengan interaksi sosial yang tinggi. Kombinasi antara ruang terbuka, aktivitas masyarakat, dan latar belakang monumen menjadikan tempat ini memiliki daya tarik visual yang kuat." },
          { title: "10. Kelebihan dan Daya Tarik Utama", desc: "Kelebihan utama Lapangan Puputan Renon terletak pada luas area, aksesibilitas yang mudah, serta fasilitas yang lengkap dan dapat dinikmati secara gratis. Selain itu, nilai historis yang melekat pada kawasan ini memberikan pengalaman yang tidak hanya rekreatif tetapi juga edukatif. Keberadaan Monumen Bajra Sandhi sebagai landmark utama juga menambah daya tarik tersendiri bagi pengunjung." },
          { title: "11. Kekurangan dan Tantangan", desc: "Meskipun memiliki banyak keunggulan, lapangan ini juga memiliki beberapa kekurangan. Kebersihan di beberapa area terkadang kurang terjaga, terutama saat jumlah pengunjung meningkat. Selain itu, keberadaan pedagang liar di beberapa titik dapat mengganggu kenyamanan dan estetika lingkungan. Pengelolaan yang lebih optimal masih diperlukan untuk menjaga kualitas kawasan ini." },
          { title: "12. Kesimpulan", desc: "Secara keseluruhan, Lapangan Puputan Renon merupakan ruang publik yang memiliki peran penting dalam kehidupan masyarakat Denpasar. Tempat ini tidak hanya berfungsi sebagai area olahraga dan rekreasi, tetapi juga sebagai pusat interaksi sosial dan simbol sejarah perjuangan rakyat Bali. Dengan segala kelebihan dan kekurangannya, Lapangan Renon tetap menjadi salah satu destinasi utama yang mencerminkan dinamika kehidupan kota Denpasar." }
        ]
      }
    }
  };

  const t = content[lang];
  const post = t.post;

  return (
    <main className="bg-[#0b120c] min-h-screen font-sans text-gray-200 relative overflow-hidden pb-24">
      
      {/* EFEK MOUSE GLOW */}
      <div 
        className="pointer-events-none fixed inset-0 z-20 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(34, 197, 94, 0.12), transparent 80%)`
        }}
      />

      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-30 h-full"></div>
      <div className="absolute top-[10%] left-[-15%] w-[800px] h-[800px] bg-blue-700/20 rounded-full mix-blend-screen filter blur-[150px] opacity-50 -z-20 pointer-events-none"></div>
      <div className="absolute top-[40%] right-[-5%] w-[500px] h-[500px] bg-emerald-900/30 rounded-full mix-blend-screen filter blur-[120px] opacity-40 -z-20 pointer-events-none"></div>

      {/* NAVBAR SECTION */}
      <div className="pt-6 px-4 md:px-8 max-w-[1400px] mx-auto relative z-50">
        <nav className="flex items-center justify-between px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl relative">
          
          <div className="flex items-center gap-2 font-bold text-xl text-white italic relative z-10 w-1/4">
            <a href="/"><span>Vinto<span className="text-green-500">.</span></span></a>
          </div>

          <div className="hidden lg:flex gap-8 text-sm font-medium text-gray-300 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-max">
            <a href="/" className="hover:text-green-400 transition-colors">{t.nav[0]}</a>
            <a href="/#about" className="hover:text-green-400 transition-colors">{t.nav[1]}</a>
            <a href="#" className="hover:text-green-400 transition-colors">{t.nav[2]}</a>
            <a href="#" className="hover:text-green-400 transition-colors">{t.nav[3]}</a>
            <a href="#" className="hover:text-green-400 transition-colors">{t.nav[4]}</a>
            <a href="/blog" className="text-green-400 font-bold transition-colors">{t.nav[5]}</a>
          </div>

          <div className="flex items-center justify-end gap-4 relative z-10 w-1/4">
            <div className="hidden md:flex bg-white/5 rounded-full p-1 border border-white/10 backdrop-blur-sm">
              <button onClick={() => setLang('en')} className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all ${lang === 'en' ? 'bg-green-600 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}>EN</button>
              <button onClick={() => setLang('id')} className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all ${lang === 'id' ? 'bg-green-600 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}>ID</button>
            </div>
            <button className="hidden md:block px-6 py-2.5 bg-green-600 hover:bg-green-500 text-white text-sm font-medium rounded-full shadow-[0_0_15px_rgba(22,163,74,0.5)] transition-all whitespace-nowrap">
              {t.btnTouch}
            </button>
          </div>
        </nav>
      </div>

      {/* ARTICLE CONTENT */}
      <article className="relative z-30 max-w-4xl mx-auto px-6 md:px-12 pt-16 pb-10">
        
        {/* Back Button */}
        <a href="/blog" className="inline-flex items-center text-green-500 hover:text-green-400 text-sm font-medium transition-colors mb-8">
          {t.backBtn}
        </a>

        {/* Hero Image Article */}
        <div className="relative w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden mb-10 shadow-2xl border border-white/10">
          <img 
            src={post.postImg} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          {/* Badge Category overlay */}
          <div className="absolute top-6 left-6 bg-[#0b120c]/80 backdrop-blur-md px-4 py-2 rounded-full text-xs font-semibold text-white border border-white/10 tracking-wide shadow-lg">
            {post.category}
          </div>
        </div>

        {/* Article Header (Title & Meta) */}
        <div className="mb-12 border-b border-white/10 pb-10">
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6">
            {/* Author */}
            <div className="flex items-center gap-3">
              <img 
                src={post.authorImg} 
                alt={post.authorName} 
                className="w-12 h-12 rounded-full border-2 border-white/20 object-cover" 
              />
              <span className="text-base font-semibold text-white">
                {post.authorName}
              </span>
            </div>
            {/* Date & Time */}
            <div className="flex items-center gap-2 text-sm font-medium text-gray-400">
              <span>{post.date}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="space-y-10 text-gray-300 text-base md:text-lg leading-relaxed">
          {post.sections.map((section, index) => (
            <div key={index} className="group">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-500 group-hover:scale-150 transition-transform"></span>
                {section.title}
              </h2>
              <p className="pl-5 border-l border-white/5 group-hover:border-green-500/30 transition-colors">
                {section.desc}
              </p>
            </div>
          ))}
        </div>

      </article>

    </main>
  );
}