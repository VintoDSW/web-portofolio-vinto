"use client";

import Image from 'next/image';

import Link from 'next/link';

import { useState, useEffect } from 'react';



export default function Home() {

  // 1. State untuk menyimpan bahasa yang dipilih (default: 'en')

  const [lang, setLang] = useState('en');



  // 2. State untuk melacak posisi mouse (X dan Y)

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

 

  // 3. State untuk menu HP

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



  // 4. Efek untuk selalu mengupdate posisi mouse saat kursor bergerak

  useEffect(() => {

    const handleMouseMove = (e) => {

      setMousePos({ x: e.clientX, y: e.clientY });

    };



    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);

  }, []);



  // Objek berisi kamus bahasa

  const content = {

    en: {

      nav: ['Home', 'About Me', 'Skill', 'Experience', 'Portfolio', 'Blog'],

      btnTouch: 'Get in touch',

      heroIm: "I'M",

      btnDiscuss: "Let's Discuss",

      desc: "Hello, I'm Vinto, a UI/UX Designer passionate about creating meaningful and intuitive digital experiences.",

      follow: "Follow Me",

      followDesc: "I design intuitive interfaces and develop user-centric platforms.",

      designer: "DESIGNER",

      aboutTitle: "About Me",

      aboutDesc: "I am a student majoring in Information Systems at ITB STIKOM Bali. I am currently focusing on learning UI/UX design and Full-Stack Web Development, specifically using Next.js. I love the challenge of combining programming logic with visual aesthetics to create digital solutions that are not only efficient but also comfortable for users."

    },

    id: {

      nav: ['Beranda', 'Tentang Saya', 'Keahlian', 'Pengalaman', 'Portofolio', 'Blog'],

      btnTouch: 'Hubungi Saya',

      heroIm: "SAYA",

      btnDiscuss: "Mari Berdiskusi",

      desc: "Halo, saya Vinto, seorang Desainer UI/UX yang bersemangat dalam menciptakan pengalaman digital yang bermakna dan intuitif.",

      follow: "Ikuti Saya",

      followDesc: "Saya mendesain antarmuka intuitif dan mengembangkan platform yang berpusat pada pengguna.",

      designer: "DESAINER",

      aboutTitle: "Tentang Saya",

      aboutDesc: "Saya adalah mahasiswa jurusan Sistem Informasi di ITB STIKOM Bali. Saat ini saya sedang fokus mendalami desain UI/UX dan Full-Stack Web Development, khususnya menggunakan Next.js. Saya menyukai tantangan untuk menggabungkan logika pemrograman dengan estetika visual untuk menciptakan solusi digital yang tidak hanya efisien, tetapi juga nyaman digunakan."

    }

  };



  const t = content[lang]; // Mengambil teks sesuai bahasa yang aktif



  return (

    <main className="bg-[#0b120c] font-sans text-gray-200 relative overflow-hidden">

     

      {/* EFEK MOUSE GLOW (Cahaya hijau mengikuti kursor) */}

      <div

        className="pointer-events-none fixed inset-0 z-20 transition-opacity duration-300"

        style={{

          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(34, 197, 94, 0.12), transparent 80%)`

        }}

      />



      {/* BACKGROUND ELEMENTS (Diterapkan ke seluruh halaman) */}

      {/* 1. Grid Pattern (Kotak-kotak samar) */}

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-30 h-[200vh]"></div>

     

      {/* 2. Glowing Blobs (Hero) */}

      <div className="absolute top-[10%] left-[-15%] w-[800px] h-[800px] bg-blue-700/20 rounded-full mix-blend-screen filter blur-[150px] opacity-70 -z-20"></div>

      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-900/30 rounded-full mix-blend-screen filter blur-[120px] opacity-50 -z-20"></div>

      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-green-900/20 rounded-full mix-blend-screen filter blur-[150px] opacity-50 -z-20"></div>



      {/* NAVBAR SECTION (Sudah disamakan dengan Blog) */}

      <div className="pt-6 px-4 md:px-8 max-w-[1400px] mx-auto relative z-50">

        <nav className="flex items-center justify-between px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl relative">

         

          {/* Logo */}

          <div className="flex items-center gap-2 font-bold text-xl text-white italic relative z-10 w-auto lg:w-1/4">

            <Link href="/"><span>Vinto<span className="text-green-500">.</span></span></Link>

          </div>



          {/* Menu Links Desktop */}

          <div className="hidden lg:flex gap-8 text-sm font-medium text-gray-300 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-max">

            <Link href="/" className="text-white hover:text-green-400 transition-colors">{t.nav[0]}</Link>

            <Link href="/#about" className="hover:text-green-400 transition-colors">{t.nav[1]}</Link>

            <Link href="#" className="hover:text-green-400 transition-colors">{t.nav[2]}</Link>

            <Link href="#" className="hover:text-green-400 transition-colors">{t.nav[3]}</Link>

            <Link href="#" className="hover:text-green-400 transition-colors">{t.nav[4]}</Link>

            <Link href="/blog" className="hover:text-green-400 transition-colors">{t.nav[5]}</Link>

          </div>



          {/* Action Button & Language Switcher */}

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



            {/* Language Switcher Desktop */}

            <div className="hidden lg:flex bg-white/5 rounded-full p-1 border border-white/10 backdrop-blur-sm">

              <button

                onClick={() => setLang('en')}

                className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all ${lang === 'en' ? 'bg-green-600 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}

              >

                EN

              </button>

              <button

                onClick={() => setLang('id')}

                className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all ${lang === 'id' ? 'bg-green-600 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}

              >

                ID

              </button>

            </div>



            <button className="hidden lg:block px-6 py-2.5 bg-green-600 hover:bg-green-500 text-white text-sm font-medium rounded-full shadow-[0_0_15px_rgba(22,163,74,0.5)] transition-all whitespace-nowrap">

              {t.btnTouch}

            </button>

          </div>



          {/* MOBILE DROPDOWN MENU */}

          {isMobileMenuOpen && (

            <div className="absolute top-[110%] left-0 right-0 p-6 bg-[#0b120c]/95 backdrop-blur-2xl border border-white/10 rounded-2xl flex flex-col gap-6 lg:hidden z-50 shadow-2xl">

              <div className="flex flex-col gap-4 text-sm font-medium text-gray-300">

                <Link href="/" className="text-white hover:text-green-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t.nav[0]}</Link>

                <Link href="/#about" className="hover:text-green-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t.nav[1]}</Link>

                <Link href="#" className="hover:text-green-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t.nav[2]}</Link>

                <Link href="#" className="hover:text-green-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t.nav[3]}</Link>

                <Link href="#" className="hover:text-green-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t.nav[4]}</Link>

                <Link href="/blog" className="hover:text-green-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t.nav[5]}</Link>

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

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-8 mt-16 md:mt-24 z-30 pb-24 border-b border-white/5">



        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-stretch min-h-[600px]">

         

          {/* LEFT COLUMN */}

          <div className="flex flex-col justify-between pt-10">

            <div className="space-y-4">

              <h2 className="text-5xl lg:text-7xl font-light italic text-gray-300 uppercase">{t.heroIm}</h2>

              <h1 className="text-6xl lg:text-8xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 uppercase leading-[1]">

                Vinto

              </h1>

              <div className="pt-4">

                <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all cursor-pointer">

                  {t.btnDiscuss} <span>&rarr;</span>

                </button>

              </div>

            </div>



            <div className="mt-16 md:mt-auto pb-10 max-w-sm pointer-events-none">

              <p className="text-gray-400 text-lg leading-relaxed">

                {t.desc}

              </p>

            </div>

          </div>



          {/* CENTER COLUMN (Photo Area) */}

          <div className="relative flex justify-center items-end h-[500px] md:h-auto pointer-events-none">

            {/* Wadah Melengkung untuk Foto */}

            <div className="w-full max-w-md h-[90%] bg-gradient-to-t from-green-900/40 to-transparent rounded-t-[150px] border border-b-0 border-white/10 overflow-hidden relative backdrop-blur-sm flex items-end justify-center">

             

              <Image

                src="/images/foto-vinto.png"

                alt="Vinto Portrait"

                width={500}

                height={700}

                className="w-full h-full object-cover object-bottom"

                priority

              />

            </div>

          </div>



          {/* RIGHT COLUMN */}

          <div className="flex flex-col justify-between pt-10 text-left md:text-right relative z-50">

           

            <div className="flex flex-col md:items-end space-y-4">

              <h3 className="text-xl font-medium text-white">{t.follow}</h3>

              {/* Social Icons */}

              <div className="flex gap-3">

                {['D', 'Bē', 'X', 'In'].map((icon, i) => (

                  <a key={i} href="#" className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-gray-300 hover:text-green-400 hover:border-green-500/50 transition-all cursor-pointer">

                    {icon}

                  </a>

                ))}

              </div>

              <p className="max-w-xs text-gray-400 mt-6 md:ml-auto pointer-events-none">

                {t.followDesc}

              </p>

            </div>



            <div className="mt-16 md:mt-auto pb-10 pointer-events-none">

              <h2 className="text-4xl lg:text-6xl font-black text-white leading-[1.1]">

                UI/UX <br />

                <span className="text-gray-500 uppercase">{t.designer}</span>

              </h2>

            </div>



          </div>



        </div>

      </div>



      {/* ABOUT SECTION */}

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-8 py-24 z-30">

       

        {/* Kontainer Glassmorphism Utama */}

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden">

         

          {/* Aksen warna hijau transparan di dalam kotak glass */}

          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-[80px] -z-10"></div>

         

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

           

            {/* Kiri: Foto About Me */}

            <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg group">

               <Image

                 src="/images/vinto-about.png"

                 alt="Vinto Working"

                 fill

                 className="object-cover group-hover:scale-105 transition-transform duration-700"

               />

            </div>



            {/* Kanan: Teks About Me */}

            <div className="flex flex-col justify-center">

              <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6 font-serif tracking-wide py-2 leading-normal">

                {t.aboutTitle}

              </h2>

             

              <p className="text-gray-300 text-lg leading-relaxed font-light">

                {t.aboutDesc}

              </p>



            </div>

          </div>



        </div>

      </div>



    </main>

  );

}