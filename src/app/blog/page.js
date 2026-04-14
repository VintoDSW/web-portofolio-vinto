"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Blog() {
  const [lang, setLang] = useState('id'); // Set default to 'id' if you prefer
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
      heroTitle: "Stories, Ideas, and Knowledge That Shape Better Thinking",
      heroDesc: "Discover practical insights, inspiring stories, and useful guides designed to help you learn, grow, and stay ahead in everyday life.",
      bubbles: ['AI Tool', 'Technology', 'Foods', 'Balinese Culture', 'AI Intelligence', 'Lifestyle'],
      categoriesTitle: 'Categories',
      categories: [
        { name: 'AI Tool', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80' },
        { name: 'Technology', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80' },
        { name: 'Foods', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80' },
        { name: 'Balinese Culture', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80' },
        { name: 'AI Intelligence', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80' },
        { name: 'Lifestyle', img: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&q=80' }
      ],
      blogHeader: 'Blog',
      blogDesc: 'Here, we share practical guides, technology updates, and stories that inspire your daily life.',
      sortBy: 'Sort by:',
      sortOptions: ['Newest', 'Oldest', 'Popular'],
      samplePost: {
        category: 'Balinese Culture',
        date: '14 Apr 2026',
        readTime: '7 mins read',
        title: 'Lapangan Renon: Harmony of Public Space and Balinese Cultural Heritage',
        excerpt: 'Explore the iconic Bajra Sandhi Monument and the surrounding Renon Square, a perfect blend of modern public space and profound Balinese historical heritage.',
        authorName: 'Vinto Dhammanda Suryanto Wijaya',
        authorImg: '/images/foto-vinto.png',
        postImg: '/images/lapangan-renon-image.jpg'
      }
    },
    id: {
      nav: ['Beranda', 'Tentang Saya', 'Keahlian', 'Pengalaman', 'Portofolio', 'Blog'],
      btnTouch: 'Hubungi Saya',
      heroTitle: "Cerita, Ide, dan Pengetahuan yang Membentuk Pemikiran Lebih Baik",
      heroDesc: "Temukan wawasan praktis, cerita inspiratif, dan panduan bermanfaat yang dirancang untuk membantu Anda belajar, berkembang, dan selalu selangkah lebih maju.",
      bubbles: ['Alat AI', 'Teknologi', 'Kuliner', 'Budaya Bali', 'Kecerdasan AI', 'Gaya Hidup'],
      categoriesTitle: 'Kategori',
      categories: [
        { name: 'Alat AI', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80' },
        { name: 'Teknologi', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80' },
        { name: 'Kuliner', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80' },
        { name: 'Budaya Bali', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80' },
        { name: 'Kecerdasan AI', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80' },
        { name: 'Gaya Hidup', img: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&q=80' }
      ],
      blogHeader: 'Blog',
      blogDesc: 'Di sini, kami membagikan panduan praktis, pembaruan teknologi, dan cerita yang menginspirasi kehidupan sehari-hari Anda.',
      sortBy: 'Urutkan:',
      sortOptions: ['Terbaru', 'Terlama', 'Terpopuler'],
      samplePost: {
        category: 'Budaya Bali',
        date: '14 Apr 2026',
        readTime: '7 mnt baca',
        title: 'Lapangan Renon: Harmoni Ruang Publik dan Warisan Budaya Bali',
        excerpt: 'Jelajahi keindahan Monumen Bajra Sandhi dan area sekitarnya di Lapangan Renon, sebuah perpaduan sempurna antara ruang publik modern dan warisan sejarah Bali yang mendalam.',
        authorName: 'Vinto Dhammanda Suryanto Wijaya',
        authorImg: '/images/foto-vinto.png',
        postImg: '/images/lapangan-renon-image.jpg'
      }
    }
  };

  const t = content[lang];

  return (
    <main className="bg-[#0b120c] min-h-screen font-sans text-gray-200 relative overflow-hidden pb-24">
      
      {/* CSS KHUSUS HIDE SCROLLBAR & ANIMASI MARQUEE */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        /* Berhenti saat user mengarahkan kursor/mouse (opsional tapi disarankan) */
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* EFEK MOUSE GLOW */}
      <div 
        className="pointer-events-none fixed inset-0 z-20 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(34, 197, 94, 0.12), transparent 80%)`
        }}
      />

      {/* BACKGROUND ELEMENTS */}
      {/* --- Background Ukiran Batu Bali --- */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/vinto-bali-stone.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.12,
          zIndex: 0
        }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-30 h-[150vh]"></div>
      
      {/* Glowing Blobs */}
      <div className="absolute top-[10%] left-[-15%] w-[800px] h-[800px] bg-blue-700/20 rounded-full mix-blend-screen filter blur-[150px] opacity-70 -z-20"></div>
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-900/30 rounded-full mix-blend-screen filter blur-[120px] opacity-50 -z-20"></div>

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

      {/* HERO SECTION */}
      <div className="relative min-h-[75vh] flex items-center justify-center z-30 px-4 w-full max-w-7xl mx-auto pb-10">
        {/* Kolom Kiri */}
        <div className="hidden lg:flex flex-col items-center justify-center gap-12 absolute left-[8%] xl:left-[12%] top-1/2 -translate-y-1/2 z-10 w-48">
          <div className="w-24 h-24 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center text-xs font-medium text-gray-300 hover:border-green-400 hover:text-green-400 transition-colors cursor-pointer text-center px-2 translate-x-12" style={{ animation: 'bounce 4s infinite' }}>
            {t.bubbles[0]}
          </div>
          <div className="w-32 h-32 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center text-sm font-medium text-gray-300 hover:border-green-400 hover:text-green-400 transition-colors cursor-pointer text-center px-3 -translate-x-8" style={{ animation: 'bounce 5s infinite' }}>
            {t.bubbles[1]}
          </div>
          <div className="w-20 h-20 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center text-xs font-medium text-gray-300 hover:border-green-400 hover:text-green-400 transition-colors cursor-pointer text-center px-2 translate-x-8" style={{ animation: 'bounce 6s infinite' }}>
            {t.bubbles[2]}
          </div>
        </div>

        {/* Teks Hero Tengah */}
        <div className="text-center max-w-2xl mx-auto px-6 z-20 relative">
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
            {t.heroTitle}
          </h1>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            {t.heroDesc}
          </p>
        </div>

        {/* Kolom Kanan */}
        <div className="hidden lg:flex flex-col items-center justify-center gap-12 absolute right-[8%] xl:right-[12%] top-1/2 -translate-y-1/2 z-10 w-48">
          <div className="w-20 h-20 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center text-xs font-medium text-gray-300 hover:border-green-400 hover:text-green-400 transition-colors cursor-pointer text-center px-2 -translate-x-12" style={{ animation: 'bounce 5s infinite 1s' }}>
            {t.bubbles[3]}
          </div>
          <div className="w-32 h-32 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center text-sm font-medium text-gray-300 hover:border-green-400 hover:text-green-400 transition-colors cursor-pointer text-center px-4 translate-x-8" style={{ animation: 'bounce 4s infinite 0.5s' }}>
            {t.bubbles[4]}
          </div>
          <div className="w-24 h-24 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center text-xs font-medium text-gray-300 hover:border-green-400 hover:text-green-400 transition-colors cursor-pointer text-center px-2 -translate-x-8" style={{ animation: 'bounce 6s infinite 1.5s' }}>
            {t.bubbles[5]}
          </div>
        </div>
      </div>

      {/* CATEGORIES SECTION */}
      <div className="relative z-30 max-w-[1400px] mx-auto px-6 md:px-12 w-full pb-16">
        
        {/* Title Categories */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-6 bg-[#36684a] rounded-full"></div>
          <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">
            {t.categoriesTitle}
          </h2>
        </div>

        {/* Auto-Scrolling Container */}
        <div className="flex overflow-hidden pb-6 w-full relative">
          <div className="flex w-max animate-marquee">
            
            {/* --- Kumpulan Kategori Set 1 --- */}
            <div className="flex gap-4 md:gap-6 pr-4 md:pr-6 w-max">
              {t.categories.map((cat, index) => (
                <div 
                  key={`set1-${index}`} 
                  className="relative flex-shrink-0 w-[240px] md:w-[280px] h-36 md:h-44 rounded-2xl overflow-hidden group cursor-pointer border border-white/5 hover:border-green-500/40 transition-all duration-300 shadow-lg"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${cat.img}')` }}
                  />
                  <div className="absolute inset-0 bg-[#0b120c]/40 group-hover:bg-[#0b120c]/20 transition-colors duration-500 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b120c] via-[#0b120c]/60 to-transparent z-10 opacity-90" />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <span className="text-white font-semibold text-lg md:text-xl tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {cat.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* --- Kumpulan Kategori Set 2 (Duplikasi untuk efek nyambung/seamless) --- */}
            <div className="flex gap-4 md:gap-6 pr-4 md:pr-6 w-max">
              {t.categories.map((cat, index) => (
                <div 
                  key={`set2-${index}`} 
                  className="relative flex-shrink-0 w-[240px] md:w-[280px] h-36 md:h-44 rounded-2xl overflow-hidden group cursor-pointer border border-white/5 hover:border-green-500/40 transition-all duration-300 shadow-lg"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${cat.img}')` }}
                  />
                  <div className="absolute inset-0 bg-[#0b120c]/40 group-hover:bg-[#0b120c]/20 transition-colors duration-500 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b120c] via-[#0b120c]/60 to-transparent z-10 opacity-90" />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <span className="text-white font-semibold text-lg md:text-xl tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {cat.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* BLOG POSTS SECTION */}
      <div className="relative z-30 max-w-[1400px] mx-auto px-6 md:px-12 w-full pb-10">
        
        {/* Header & Filter Sort By */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {t.blogHeader}
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              {t.blogDesc}
            </p>
          </div>
          
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-gray-400 text-sm font-medium">{t.sortBy}</span>
            <div className="relative">
              <select className="appearance-none bg-white/5 border border-white/10 text-white text-sm rounded-lg px-4 py-2.5 pr-10 focus:outline-none focus:border-green-500 hover:bg-white/10 transition-colors cursor-pointer">
                {t.sortOptions.map((opt, i) => (
                  <option key={i} className="bg-[#0b120c] text-white">
                    {opt}
                  </option>
                ))}
              </select>
              {/* Chevron Icon for Select */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card Blog */}
          <Link 
            href="/blog/lapangan-renon" 
            className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-green-500/40 hover:bg-white/10 transition-all duration-300 shadow-lg cursor-pointer flex flex-col"
          >
            
            {/* Image Section */}
            <div className="relative h-56 overflow-hidden">
              <img 
                src={t.samplePost.postImg} 
                alt={t.samplePost.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Category Badge overlay */}
              <div className="absolute top-4 left-4 bg-[#0b120c]/70 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium text-white border border-white/10">
                {t.samplePost.category}
              </div>
            </div>
            
            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
              {/* Meta details (Date & Read time) */}
              <div className="flex items-center gap-2 text-xs font-medium text-gray-400 mb-4">
                <span>{t.samplePost.date}</span>
                <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                <span>{t.samplePost.readTime}</span>
              </div>
              
              {/* Post Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors line-clamp-2">
                {t.samplePost.title}
              </h3>
              
              {/* Excerpt */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2 flex-grow">
                {t.samplePost.excerpt}
              </p>
              
              {/* Author Info */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/10">
                <img 
                  src={t.samplePost.authorImg} 
                  alt={t.samplePost.authorName} 
                  className="w-9 h-9 rounded-full border border-white/20 object-cover" 
                />
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  {t.samplePost.authorName}
                </span>
              </div>
            </div>

          </Link>

        </div>

      </div>

    </main>
  );
}