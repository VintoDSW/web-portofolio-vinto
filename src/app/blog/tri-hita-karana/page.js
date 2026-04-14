"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function TriHitaKaranaPost() {
  const [lang, setLang] = useState('id'); // Default ID sesuai request konten
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        date: '20 Apr 2026',
        readTime: '8 mins read',
        title: 'Tri Hita Karana: The Philosophy of Harmony in Balinese Culture',
        authorName: 'Vinto Dhammanda Suryanto Wijaya',
        authorRole: 'Content Writer',
        authorImg: '/images/foto-vinto.png',
        postImg: '/images/trihitakarana-judul.png',
        sections: [
          {
            title: "1. Introduction",
            desc: "Tri Hita Karana is one of the most fundamental philosophical concepts in the lives of Balinese people, which is still maintained and applied in daily life today. Etymologically, \"Tri\" means three, \"Hita\" means happiness or prosperity, and \"Karana\" means cause. Thus, Tri Hita Karana can be interpreted as the three causes of creating happiness and prosperity in life. This philosophy is not just a theory, but a guide to life that shapes the character, culture, and social system of the Balinese people, known for being harmonious, religious, and in tune with nature."
          },
          {
            title: "2. Basic Concept of Tri Hita Karana",
            desc: "Tri Hita Karana emphasizes the importance of balance in three main relationships: the relationship between humans and God (Parahyangan), the relationship among humans (Pawongan), and the relationship between humans and the natural environment (Palemahan). These three aspects are interconnected and inseparable, as an imbalance in one aspect will affect the whole of life. This philosophy is the foundation for various activities of the Balinese people, ranging from religious and social activities to environmental management."
          },
          {
            title: "3. Parahyangan: Human Harmony with God",
            desc: "Parahyangan reflects the spiritual relationship between humans and God, known in Balinese belief as Ida Sang Hyang Widhi Wasa. This relationship is manifested through various forms of prayer, traditional ceremonies, and religious rituals routinely performed in temples and homes. The presence of the temple as a sacred place is an important symbol in maintaining this relationship. In addition, the Balinese also believe that maintaining the purity of thoughts, words, and deeds is part of devotion to God. By maintaining a harmonious relationship with God, it is believed that life will be blessed with peace and inner balance."
          },
          {
            title: "4. Pawongan: Harmony Among Humans",
            desc: "Pawongan emphasizes the importance of harmonious social relationships among individuals in society. Values such as mutual cooperation (gotong royong), mutual respect, tolerance, and togetherness are the core of this concept. In daily life, the Balinese highly uphold a sense of togetherness, as seen in banjar (customary community) activities which become the center of social interaction. Every community member has a role and responsibility to maintain this harmony. Social conflicts are resolved through deliberation so as not to damage the balance of human relationships. With Pawongan, a peaceful social environment full of solidarity is created."
          },
          {
            title: "5. Palemahan: Human Harmony with Nature",
            desc: "Palemahan describes the relationship between humans and the surrounding natural environment. The Balinese have a high awareness of the importance of preserving nature as a source of life. This is reflected in various traditional practices, such as the Subak irrigation system which not only functions for watering rice fields but also as a symbol of togetherness and ecosystem balance. In addition, the Balinese also maintain environmental cleanliness, perform certain ceremonies as a form of respect for nature, and avoid environmentally damaging actions. Nature is not seen as an object of exploitation, but as a part of life whose harmony must be maintained."
          },
          {
            title: "6. Implementation of Tri Hita Karana in Modern Life",
            desc: "Amidst the currents of globalization and modernization, the concept of Tri Hita Karana remains relevant and even becomes a solution in facing various problems of modern life. In the tourism sector, for example, many hotels and tourist destinations in Bali apply this principle by maintaining a balance between development, local culture, and the environment. In daily life, the younger generation of Bali has also begun to adapt the values of Tri Hita Karana in a more modern context, such as maintaining social relationships through digital communities, continuing to carry out religious traditions, and raising awareness of environmental issues such as waste and climate change."
          },
          {
            title: "7. Conclusion",
            desc: "Tri Hita Karana is not just a traditional philosophy, but a value system capable of creating a balanced, harmonious, and sustainable life. By maintaining good relationships with God, fellow humans, and nature, the Balinese people are able to maintain their cultural identity amidst changing times. These values are not only relevant for the Balinese but can also be an inspiration for the world in creating a more peaceful and harmonious life. Therefore, understanding and applying Tri Hita Karana is an important step in maintaining the balance of life today and in the future."
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
        date: '20 Apr 2026',
        readTime: '8 mnt baca',
        title: 'Tri Hita Karana: Filosofi Harmoni dalam Budaya Bali',
        authorName: 'Vinto Dhammanda Suryanto Wijaya',
        authorRole: 'Penulis Konten',
        authorImg: '/images/foto-vinto.png',
        postImg: '/images/trihitakarana-judul.png',
        sections: [
          { 
            title: "1. Pendahuluan", 
            desc: "Tri Hita Karana merupakan salah satu konsep filosofi paling mendasar dalam kehidupan masyarakat Bali yang hingga saat ini masih dijaga dan diterapkan secara nyata dalam kehidupan sehari-hari. Secara etimologis, “Tri” berarti tiga, “Hita” berarti kebahagiaan atau kesejahteraan, dan “Karana” berarti penyebab. Dengan demikian, Tri Hita Karana dapat diartikan sebagai tiga penyebab terciptanya kebahagiaan dan kesejahteraan hidup. Filosofi ini bukan sekadar teori, melainkan menjadi pedoman hidup yang membentuk karakter, budaya, serta sistem sosial masyarakat Bali yang dikenal harmonis, religius, dan selaras dengan alam." 
          },
          { 
            title: "2. Konsep Dasar Tri Hita Karana", 
            desc: "Tri Hita Karana menekankan pentingnya keseimbangan dalam tiga hubungan utama, yaitu hubungan manusia dengan Tuhan (Parahyangan), hubungan manusia dengan sesama manusia (Pawongan), dan hubungan manusia dengan alam lingkungan (Palemahan). Ketiga aspek ini saling berkaitan dan tidak dapat dipisahkan, karena ketidakseimbangan pada salah satu aspek akan berdampak pada keseluruhan kehidupan. Filosofi ini menjadi fondasi dalam berbagai aktivitas masyarakat Bali, mulai dari kegiatan keagamaan, sosial, hingga pengelolaan lingkungan." 
          },
          { 
            title: "3. Parahyangan: Harmoni Manusia dengan Tuhan", 
            desc: "Parahyangan mencerminkan hubungan spiritual antara manusia dengan Tuhan yang dalam kepercayaan masyarakat Bali dikenal sebagai Ida Sang Hyang Widhi Wasa. Hubungan ini diwujudkan melalui berbagai bentuk persembahyangan, upacara adat, serta ritual keagamaan yang rutin dilakukan di pura maupun di rumah masing-masing. Kehadiran pura sebagai tempat suci menjadi simbol penting dalam menjaga hubungan ini. Selain itu, masyarakat Bali juga percaya bahwa menjaga kesucian pikiran, perkataan, dan perbuatan merupakan bagian dari wujud bhakti kepada Tuhan. Dengan menjaga hubungan yang harmonis dengan Tuhan, diyakini kehidupan akan diberkahi dengan kedamaian dan keseimbangan batin." 
          },
          { 
            title: "4. Pawongan: Harmoni Antar Sesama Manusia", 
            desc: "Pawongan menekankan pentingnya hubungan sosial yang harmonis antar individu dalam masyarakat. Nilai-nilai seperti gotong royong, saling menghormati, toleransi, dan kebersamaan menjadi inti dari konsep ini. Dalam kehidupan sehari-hari, masyarakat Bali sangat menjunjung tinggi rasa kebersamaan, seperti terlihat dalam kegiatan banjar (komunitas adat) yang menjadi pusat interaksi sosial. Setiap anggota masyarakat memiliki peran dan tanggung jawab untuk menjaga keharmonisan tersebut. Konflik sosial diupayakan diselesaikan secara musyawarah agar tidak merusak keseimbangan hubungan antar manusia. Dengan adanya Pawongan, tercipta lingkungan sosial yang damai dan penuh solidaritas." 
          },
          { 
            title: "5. Palemahan: Harmoni Manusia dengan Alam", 
            desc: "Palemahan menggambarkan hubungan manusia dengan alam lingkungan di sekitarnya. Masyarakat Bali memiliki kesadaran tinggi akan pentingnya menjaga kelestarian alam sebagai sumber kehidupan. Hal ini tercermin dalam berbagai praktik tradisional, seperti sistem irigasi Subak yang tidak hanya berfungsi sebagai pengairan sawah, tetapi juga sebagai simbol kebersamaan dan keseimbangan ekosistem. Selain itu, masyarakat Bali juga menjaga kebersihan lingkungan, melakukan upacara-upacara tertentu sebagai bentuk penghormatan terhadap alam, serta menghindari tindakan yang merusak lingkungan. Alam tidak dipandang sebagai objek eksploitasi, melainkan sebagai bagian dari kehidupan yang harus dijaga keharmonisannya." 
          },
          { 
            title: "6. Implementasi Tri Hita Karana dalam Kehidupan Modern", 
            desc: "Di tengah arus globalisasi dan modernisasi, konsep Tri Hita Karana tetap relevan dan bahkan menjadi solusi dalam menghadapi berbagai permasalahan kehidupan modern. Dalam sektor pariwisata, misalnya, banyak hotel dan destinasi wisata di Bali yang menerapkan prinsip ini dengan menjaga keseimbangan antara pembangunan, budaya lokal, dan lingkungan. Dalam kehidupan sehari-hari, generasi muda Bali juga mulai mengadaptasi nilai-nilai Tri Hita Karana dalam konteks yang lebih modern, seperti menjaga hubungan sosial melalui komunitas digital, tetap menjalankan tradisi keagamaan, serta meningkatkan kesadaran akan isu lingkungan seperti sampah dan perubahan iklim." 
          },
          { 
            title: "7. Kesimpulan", 
            desc: "Tri Hita Karana bukan hanya filosofi tradisional, tetapi merupakan sistem nilai yang mampu menciptakan kehidupan yang seimbang, harmonis, dan berkelanjutan. Dengan menjaga hubungan yang baik dengan Tuhan, sesama manusia, dan alam, masyarakat Bali mampu mempertahankan identitas budaya mereka di tengah perubahan zaman. Nilai-nilai ini tidak hanya relevan bagi masyarakat Bali, tetapi juga dapat menjadi inspirasi bagi dunia dalam menciptakan kehidupan yang lebih damai dan selaras. Oleh karena itu, memahami dan menerapkan Tri Hita Karana menjadi langkah penting dalam menjaga keseimbangan hidup di masa kini dan masa depan." 
          }
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
            <Link href="/"><span>Vinto<span className="text-green-500">.</span></span></Link>
          </div>

          <div className="hidden lg:flex gap-8 text-sm font-medium text-gray-300 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-max">
            <Link href="/" className="hover:text-green-400 transition-colors">{t.nav[0]}</Link>
            <Link href="/#about" className="hover:text-green-400 transition-colors">{t.nav[1]}</Link>
            <Link href="#" className="hover:text-green-400 transition-colors">{t.nav[2]}</Link>
            <Link href="#" className="hover:text-green-400 transition-colors">{t.nav[3]}</Link>
            <Link href="#" className="hover:text-green-400 transition-colors">{t.nav[4]}</Link>
            <Link href="/blog" className="text-green-400 font-bold transition-colors">{t.nav[5]}</Link>
          </div>

          <div className="flex items-center justify-end gap-4 relative z-10 w-1/4">
            
            {/* Hamburger Button (Mobile Only) */}
            <button 
              className="lg:hidden text-gray-300 hover:text-white p-1 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop Language & Button */}
            <div className="hidden lg:flex bg-white/5 rounded-full p-1 border border-white/10 backdrop-blur-sm">
              <button onClick={() => setLang('en')} className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all ${lang === 'en' ? 'bg-green-600 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}>EN</button>
              <button onClick={() => setLang('id')} className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all ${lang === 'id' ? 'bg-green-600 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}>ID</button>
            </div>
            <button className="hidden lg:block px-6 py-2.5 bg-green-600 hover:bg-green-500 text-white text-sm font-medium rounded-full shadow-[0_0_15px_rgba(22,163,74,0.5)] transition-all whitespace-nowrap">
              {t.btnTouch}
            </button>
          </div>

          {/* MOBILE DROPDOWN MENU */}
          {isMobileMenuOpen && (
            <div className="absolute top-[110%] left-0 right-0 p-6 bg-[#0b120c]/95 backdrop-blur-2xl border border-white/10 rounded-2xl flex flex-col gap-6 lg:hidden z-50 shadow-2xl">
              <div className="flex flex-col gap-4 text-sm font-medium text-gray-300">
                <Link href="/" className="hover:text-green-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t.nav[0]}</Link>
                <Link href="/#about" className="hover:text-green-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t.nav[1]}</Link>
                <Link href="#" className="hover:text-green-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t.nav[2]}</Link>
                <Link href="#" className="hover:text-green-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t.nav[3]}</Link>
                <Link href="#" className="hover:text-green-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t.nav[4]}</Link>
                <Link href="/blog" className="text-green-400 font-bold transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t.nav[5]}</Link>
              </div>
              
              <hr className="border-white/10" />

              <div className="flex flex-col gap-4">
                <div className="flex bg-white/5 rounded-full p-1 border border-white/10 backdrop-blur-sm w-full">
                  <button onClick={() => setLang('en')} className={`flex-1 py-2 text-xs font-bold rounded-full transition-all ${lang === 'en' ? 'bg-green-600 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}>EN</button>
                  <button onClick={() => setLang('id')} className={`flex-1 py-2 text-xs font-bold rounded-full transition-all ${lang === 'id' ? 'bg-green-600 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}>ID</button>
                </div>
                <button className="w-full px-6 py-3 bg-green-600 hover:bg-green-500 text-white text-sm font-medium rounded-full shadow-[0_0_15px_rgba(22,163,74,0.5)] transition-all">
                  {t.btnTouch}
                </button>
              </div>
            </div>
          )}

        </nav>
      </div>

      {/* ARTICLE CONTENT */}
      <article className="relative z-30 max-w-4xl mx-auto px-6 md:px-12 pt-16 pb-10">
        
        {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center text-green-500 hover:text-green-400 text-sm font-medium transition-colors mb-8">
          {t.backBtn}
        </Link>

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
              <div className="flex flex-col">
                <span className="text-base font-semibold text-white">
                  {post.authorName}
                </span>
                <span className="text-xs text-gray-400">
                  {post.authorRole}
                </span>
              </div>
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