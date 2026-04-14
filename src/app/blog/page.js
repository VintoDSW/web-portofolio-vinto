"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Blog() {
  const [lang, setLang] = useState('id');
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
      // MENGUBAH samplePost MENJADI ARRAY DENGAN 2 ITEM
      posts: [
        {
          id: 'lapangan-renon',
          category: 'Balinese Culture',
          date: '14 Apr 2026',
          readTime: '7 mins read',
          title: 'Lapangan Renon: Harmony of Public Space and Balinese Cultural Heritage',
          excerpt: 'Explore the iconic Bajra Sandhi Monument and the surrounding Renon Square, a perfect blend of modern public space and profound Balinese historical heritage.',
          authorName: 'Vinto Dhammanda Suryanto Wijaya',
          authorImg: '/images/foto-vinto.png',
          postImg: '/images/lapangan-renon-image.jpg'
        },
        {
          id: 'tri-hita-karana',
          category: 'Balinese Culture',
          date: '20 Apr 2026',
          readTime: '8 mins read',
          title: 'Tri Hita Karana: The Philosophy of Harmony in Balinese Culture',
          excerpt: 'Tri Hita Karana is a core philosophy that heavily influences the daily lives, culture, and architecture of the Balinese people.',
          authorName: 'Vinto Dhammanda Suryanto Wijaya',
          authorImg: '/images/foto-vinto.png',
          postImg: '/images/trihitakarana-judul.png'
        }
      ],
      bgCredit: 'Background image source from Pinterest account V I C T O R I A A I T K E N'
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
      // MENGUBAH samplePost MENJADI ARRAY DENGAN 2 ITEM
      posts: [
        {
          id: 'lapangan-renon',
          category: 'Budaya Bali',
          date: '14 Apr 2026',
          readTime: '7 mnt baca',
          title: 'Lapangan Renon: Harmoni Ruang Publik dan Warisan Budaya Bali',
          excerpt: 'Jelajahi keindahan Monumen Bajra Sandhi dan area sekitarnya di Lapangan Renon, sebuah perpaduan sempurna antara ruang publik modern dan warisan sejarah Bali yang mendalam.',
          authorName: 'Vinto Dhammanda Suryanto Wijaya',
          authorImg: '/images/foto-vinto.png',
          postImg: '/images/lapangan-renon-image.jpg'
        },
        {
          id: 'tri-hita-karana',
          category: 'Budaya Bali',
          date: '20 Apr 2026',
          readTime: '8 mnt baca',
          title: 'Tri Hita Karana: Filosofi Harmoni dalam Budaya Bali',
          excerpt: 'Tri Hita Karana adalah filosofi inti yang sangat mempengaruhi kehidupan sehari-hari, budaya, dan arsitektur masyarakat Bali.',
          authorName: 'Vinto Dhammanda Suryanto Wijaya',
          authorImg: '/images/foto-vinto.png',
          postImg: '/images/trihitakarana-judul.png'
        }
      ],
      bgCredit: 'Sumber gambar latar belakang dari aplikasi Pinterest akun V I C T O R I A A I T K E N'
    }
  };

  const t = content[lang];

  return (
    <>
      <main className="bg-[#0b120c] min-h-screen font-sans text-gray-200 relative overflow-hidden pb-24">
        
        {/* CSS KHUSUS HIDE SCROLLBAR, ANIMASI MARQUEE & FLOAT BUBBLE */}
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
          .animate-marquee:hover {
            animation-play-state: paused;
          }

          /* Animasi mengambang organik (mulai dan berakhir di titik nol/origin) */
          @keyframes float1 {
            0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
            33%      { transform: translate(15px, -15px) rotate(4deg); }
            66%      { transform: translate(-10px, 10px) rotate(-2deg); }
          }
          @keyframes float2 {
            0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
            33%      { transform: translate(-15px, 15px) rotate(-3deg); }
            66%      { transform: translate(10px, -10px) rotate(2deg); }
          }
          @keyframes float3 {
            0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
            33%      { transform: translate(10px, 15px) rotate(3deg); }
            66%      { transform: translate(-15px, -10px) rotate(-4deg); }
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

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-30 h-[150vh]"></div>
        
        <div className="absolute top-[10%] left-[-15%] w-[800px] h-[800px] bg-blue-700/20 rounded-full mix-blend-screen filter blur-[150px] opacity-70 -z-20"></div>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-900/30 rounded-full mix-blend-screen filter blur-[120px] opacity-50 -z-20"></div>

        {/* NAVBAR SECTION */}
        <div className="pt-6 px-4 md:px-8 max-w-[1400px] mx-auto relative z-50">
          <nav className="flex items-center justify-between px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl relative">
            
            <div className="flex items-center gap-2 font-bold text-xl text-white italic relative z-10 w-auto lg:w-1/4">
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

            <div className="flex items-center justify-end gap-4 relative z-10 w-auto lg:w-1/4">
              
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

        {/* HERO SECTION */}
        <div className="relative min-h-[80vh] flex flex-col lg:flex-row items-center justify-center z-30 px-4 w-full max-w-7xl mx-auto py-16 lg:py-10">
          
          {/* TOP BUBBLES (Mobile) / LEFT BUBBLES (Desktop) */}
          <div className="flex flex-row lg:flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-12 w-full lg:w-48 lg:absolute lg:left-[2%] xl:left-[8%] lg:top-1/2 lg:-translate-y-1/2 mb-10 lg:mb-0 z-10 opacity-95 lg:opacity-100">
            <div className="translate-y-3 lg:translate-y-0 lg:translate-x-12">
              <div
                className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center text-[10px] lg:text-xs font-semibold text-white shadow-lg hover:border-green-400 hover:text-green-400 transition-colors cursor-pointer text-center px-2"
                style={{ animation: 'float1 6s ease-in-out infinite' }}
              >
                {t.bubbles[0]}
              </div>
            </div>
            <div className="-translate-y-4 lg:translate-y-0 lg:-translate-x-8">
              <div
                className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center text-[11px] lg:text-sm font-semibold text-white shadow-lg hover:border-green-400 hover:text-green-400 transition-colors cursor-pointer text-center px-3"
                style={{ animation: 'float2 8s ease-in-out infinite 1s' }}
              >
                {t.bubbles[1]}
              </div>
            </div>
            <div className="translate-y-2 lg:translate-y-0 lg:translate-x-8">
              <div
                className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center text-[9px] lg:text-xs font-semibold text-white shadow-lg hover:border-green-400 hover:text-green-400 transition-colors cursor-pointer text-center px-2"
                style={{ animation: 'float3 7s ease-in-out infinite 2s' }}
              >
                {t.bubbles[2]}
              </div>
            </div>
          </div>

          {/* Teks Hero Tengah */}
          <div className="text-center max-w-2xl mx-auto px-2 z-20 relative flex-1 flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 tracking-tight drop-shadow-md">
              {t.heroTitle}
            </h1>
            <p className="text-gray-300 font-medium text-base md:text-lg leading-relaxed max-w-xl mx-auto drop-shadow-md">
              {t.heroDesc}
            </p>
          </div>

          {/* BOTTOM BUBBLES (Mobile) / RIGHT BUBBLES (Desktop) */}
          <div className="flex flex-row lg:flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-12 w-full lg:w-48 lg:absolute lg:right-[2%] xl:right-[8%] lg:top-1/2 lg:-translate-y-1/2 mt-10 lg:mt-0 z-10 opacity-95 lg:opacity-100">
            <div className="-translate-y-3 lg:translate-y-0 lg:-translate-x-12">
              <div
                className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center text-[9px] lg:text-xs font-semibold text-white shadow-lg hover:border-green-400 hover:text-green-400 transition-colors cursor-pointer text-center px-2"
                style={{ animation: 'float2 9s ease-in-out infinite 0.5s' }}
              >
                {t.bubbles[3]}
              </div>
            </div>
            <div className="translate-y-4 lg:translate-y-0 lg:translate-x-8">
              <div
                className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center text-[11px] lg:text-sm font-semibold text-white shadow-lg hover:border-green-400 hover:text-green-400 transition-colors cursor-pointer text-center px-4"
                style={{ animation: 'float3 7s ease-in-out infinite 1.5s' }}
              >
                {t.bubbles[4]}
              </div>
            </div>
            <div className="-translate-y-2 lg:translate-y-0 lg:-translate-x-8">
              <div
                className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center text-[10px] lg:text-xs font-semibold text-white shadow-lg hover:border-green-400 hover:text-green-400 transition-colors cursor-pointer text-center px-2"
                style={{ animation: 'float1 10s ease-in-out infinite 3s' }}
              >
                {t.bubbles[5]}
              </div>
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

              {/* --- Kumpulan Kategori Set 2 --- */}
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
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Grid - SEKARANG MAPPING DARI ARRAY POSTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {t.posts.map((post, index) => (
              <Link 
                key={index}
                href={`/blog/${post.id}`} 
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-green-500/40 hover:bg-white/10 transition-all duration-300 shadow-lg cursor-pointer flex flex-col"
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.postImg} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#0b120c]/70 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium text-white border border-white/10">
                    {post.category}
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-400 mb-4">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/10">
                    <img 
                      src={post.authorImg} 
                      alt={post.authorName} 
                      className="w-9 h-9 rounded-full border border-white/20 object-cover" 
                    />
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                      {post.authorName}
                    </span>
                  </div>
                </div>
              </Link>
            ))}

          </div>

        </div>

        {/* Credit Background Latar - Absolute menempel di paling bawah kiri konten main */}
        <div className="absolute bottom-0 left-0 p-4 z-50 text-[10px] md:text-xs text-gray-400/80 pointer-events-none">
          {t.bgCredit}
        </div>

      </main>
    </>
  );
}