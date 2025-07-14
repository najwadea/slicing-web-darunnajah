<template>
  <!-- Navbar -->
  <header class="absolute top-0 left-0 right-0 z-60">
    <nav class="flex justify-between items-center bg-transparent px-[80px] pt-0">
      <!-- Logo -->
      <div class="bg-white shadow rounded-b-[16px] px-[24px] pb-[24px] pt-[36px] flex items-center space-x-3">
        <img src="@/assets/logo-darunnajah.png" alt="Logo Sekolah" class="w-12 h-12 object-contain" />
        <div class="text-sm md:text-base font-bold text-gray-800 leading-snug tracking-wide">
          SMP DARUN NAJAH 2<br />KARANGPLOSO
        </div>
      </div>

      <!-- Buttons -->
      <div class="flex items-center space-x-5">
        <!-- Sosial Media -->
        <div class="flex items-center space-x-4">
          <a href="#" class="w-[44px] h-[44px] bg-white/50 border border-white rounded-full hover:bg-white transition flex items-center justify-center">
            <i class="bi bi-instagram text-xl"></i>
          </a>
          <a href="#" class="w-[44px] h-[44px] bg-white/50 border border-white rounded-full hover:bg-white transition flex items-center justify-center">
            <i class="bi bi-youtube text-xl"></i>
          </a>
        </div>

        <!-- Button -->
        <div class="flex items-center space-x-5">
          <a href="#" class="flex items-center justify-center bg-white/50 border border-white w-[182px] h-[52px] rounded-[8px] text-[15px] font-bold hover:bg-gray-100 transition">
            <i class="bi bi-whatsapp text-black text-2xl mr-2"></i> Kontak kami
          </a>
          <a href="#" class="flex items-center justify-center bg-[#3C7B46] text-white w-[138px] h-[52px] rounded-[8px] text-[15px] font-bold hover:bg-green-700 transition">
            PSB Online
          </a>
          <button @click="toggleSidebar" class="flex items-center justify-center bg-[#182856] text-white h-[52px] px-4 rounded-[8px] hover:bg-blue-800 transition">
            <i class="bi bi-sliders text-lg"></i>
          </button>
        </div>
      </div>
    </nav>
  </header>

  <!-- Sidebar -->
  <transition name="dropdown" class="z-50">
    <div
      v-if="showSidebar"
      class="absolute top-0 left-0 right-0 bg-[#0A1128] px-[80px] pt-[140px] pb-[80px] z-40 text-white"
    >
      <!-- Menu -->
      <ul class="space-y-6 text-[16px] font-medium">
        <li><a href="#" class="hover:text-gray-300 transition">Profil Sekolah</a></li>
        <li><a href="#" class="hover:text-gray-300 transition">Berita</a></li>
        <li><a href="#" class="hover:text-gray-300 transition">Profil Sekolah</a></li>
        <li><a href="#" class="hover:text-gray-300 transition">Fasilitas</a></li>
        <li><a href="#" class="hover:text-gray-300 transition">Galeri</a></li>
      </ul>
    </div>
  </transition>

  <!-- Hero Section -->
  <section class="relative min-h-screen overflow-hidden">
    <!-- Gambar Background -->
    <img
      src="@/assets/homepage.jpg"
      alt="Hero Background"
      class="absolute inset-0 w-full h-full object-cover z-0"
    />

    <!-- Scroll Indicator -->
    <div class="absolute top-[150px] right-[80px] z-40 flex flex-col items-center">
      <div class="text-white text-lg font-bold">01</div>
      <div class="w-[5px] h-[70px] bg-white rounded-full"></div>
      <div class="w-[5px] h-[70px] bg-white/50"></div>
      <div class="w-[5px] h-[70px] bg-white/50 rounded-b-full"></div>
      <div class="text-white/60 text-lg font-bold">03</div>
    </div>

    <!-- Wrapper Card -->
    <div class="relative z-10 min-h-screen flex flex-col justify-end pb-8 px-[80px]">
      <div class="mx-auto grid grid-cols-2 gap-6 max-w-7xl">
        <!-- Card Brosur & Aktifitas -->
        <div
          class=" mt-[57px] bg-white/40 backdrop-blur-md rounded-xl shadow-lg p-[24px] flex justify-between items-start"
        >
          <div class="w-1/2 pr-4">
            <h2 class="text-xl font-bold text-gray-800 mb-[8px]">Brosur PSB</h2>
            <p class="text-xs text-gray-600 mb-[16px] leading-tight">
              Informasi Penerimaan Santri baru PPAI Darun Najah 2 Karangploso
            </p>
            <button
              class="flex items-center bg-white text-[#182856] text-sm font-medium px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition"
            >
              <i class="bi bi-download mr-2"></i> Unduh Brosur
            </button>
          </div>

          <div class="w-[1px] h-full bg-gray-300 opacity-60"></div>

          <div class="w-1/2 pl-4">
            <h2 class="text-xl font-bold text-gray-800 mb-[8px]">Aktifitas/Kegiatan</h2>
            <p class="text-xs text-gray-600 mb-[16px] leading-tight">
              Informasi Jadwal rutin harian santri PPAI Darun Najah 2 Karangploso
            </p>
            <button
              class="flex items-center bg-white text-[#182856] text-sm font-medium px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition"
            >
              <i class="bi bi-eye mr-2"></i> Lihat Aktifitas
            </button>
          </div>
        </div>

        <!-- Card Hijau -->
        <div class=" bg-white rounded-xl shadow-lg overflow-hidden flex">
          <div class="bg-[#3C7B46] py-[24px] text-white w-1/2 p-4 flex flex-col justify-between">
            <div>
              <h3 class="text-xs text-[#8AE3C2] uppercase tracking-wide mb-1">Kabar Darun Najah</h3>
              <p class="text-xl font-semibold leading-tight">
                Kegiatan Penutupan Masa Pengenalan Lingkungan Sekolah (MPLS) dengan ...
              </p>
            </div>
            <a href="#" class="text-xs hover:text-white/80 transition">Lihat selengkapnya</a>
          </div>
          <div class="w-1/2 h-full">
            <img src="@/assets/mpls.jpg" alt="MPLS" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>

    <!-- Back to Top Button -->
    <button
      @click="scrollToTop"
      class="fixed mx-[80px] bottom-6 right-6 z-50 flex items-center gap-2 px-6 py-2 bg-white shadow-md rounded-md hover:bg-gray-100 transition"
      title="Back to Top"
    >
      <span class="text-sm font-medium text-gray-700">Back to Top</span>
      <i class="bi bi-arrow-up text-[#182856] text-lg"></i>
    </button>
  </section>

  <!-- About Section -->
  <section class="bg-white py-[100px] px-[80px] max-w-7xl mx-auto">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-start">
      <div>
        <h2 class="text-[40px] md:text-[32px] font-bold text-[#182856] leading-snug mb-4">
          PPAI Darun Najah 2<br />Karangploso
        </h2>
      </div>

      <div>
        <p class="text-base text-gray-700 leading-relaxed mb-[32px]">
          PPAI Darun Najah 2 Karangploso merupakan lembaga pendidikan yang berada di bawah naungan
          Yayasan Pondok Pesantren Darun Najah Karangploso, yang didirikan dengan tujuan untuk
          menjaga moral umat dan mencetak kader-kader dakwah Islam di masyarakat. Didirikan oleh KH.
          Achmad Muchtar Ghozali. Hingga kini pesantren ini masih diasuh di bawah bimbingan beliau
          langsung.
        </p>

        <h3 class="text-sm font-bold text-gray-800 mb-4">Core Value</h3>

        <ul class="divide-y divide-gray-200">
          <li class="flex items-center space-x-4 py-3">
            <i class="bi bi-person-fill text-[#6AB04C] text-xl"></i>
            <span class="text-lg font-semibold text-[#182856]">Qudwah</span>
          </li>
          <li class="flex items-center space-x-4 py-3">
            <i class="bi bi-lightbulb-fill text-[#6AB04C] text-xl"></i>
            <span class="text-lg font-semibold text-[#182856]">Inovatif, Kreatif & Produktif</span>
          </li>
          <li class="flex items-center space-x-4 py-3">
            <i class="bi bi-graph-up-arrow text-[#6AB04C] text-xl"></i>
            <span class="text-lg font-semibold text-[#182856]">Semangat Prestasi</span>
          </li>
          <li class="flex items-center space-x-4 py-3">
            <i class="bi bi-award-fill text-[#6AB04C] text-xl"></i>
            <span class="text-lg font-semibold text-[#182856]">Bermartabat</span>
          </li>
          <li class="flex items-center space-x-4 py-3">
            <i class="bi bi-globe2 text-[#6AB04C] text-xl"></i>
            <span class="text-lg font-semibold text-[#182856]">Berwawasan Global</span>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Fasilitas Section -->
  <section class="pb-[100px] px-[80px] bg-white max-w-7xl mx-auto">
    <!-- Header -->
    <div class="flex justify-between items-center mb-[56px]">
      <h2 class="text-[26px] font-semibold text-[#182856]">Fasilitas kami</h2>
      <a href="#" class="text-sm text-blue-600 hover:underline font-medium">Lihat Semua</a>
    </div>

    <!-- Card Wrapper -->
    <div class="grid grid-cols-2 justify-between md:grid-cols-3 lg:grid-cols-4 gap-6">
      <!-- Card 1 -->
      <div>
        <div class="rounded-lg overflow-hidden shadow-sm mb-[24px]">
          <img src="@/assets/asrama.jpg" alt="Asrama Santri" class="object-cover aspect-square" />
        </div>
        <p class="mt-2 text-sm text-gray-800">Asrama Santri</p>
      </div>

      <!-- Card 2 -->
      <div>
        <div class="rounded-lg overflow-hidden shadow-sm mb-[24px]">
          <img
            src="@/assets/madrasah.jpg"
            alt="Gedung Madrasah"
            class="object-cover aspect-square"
          />
        </div>
        <p class="mt-2 text-sm text-gray-800">Gedung Madrasah</p>
      </div>

      <!-- Card 3 -->
      <div>
        <div class="rounded-lg overflow-hidden shadow-sm mb-[24px]">
          <img
            src="@/assets/komputer.png"
            alt="Gedung Madrasah"
            class="object-cover aspect-square"
          />
        </div>
        <p class="mt-2 text-sm text-gray-800">Gedung Madrasah</p>
      </div>

      <!-- Card 4 -->
      <div>
        <div class="rounded-lg overflow-hidden shadow-sm mb-[24px]">
          <img
            src="@/assets/sains.png"
            alt="Laboratorium Sains"
            class="object-cover aspect-square"
          />
        </div>
        <p class="mt-2 text-sm text-gray-800">Laboratorium Sains</p>
      </div>
    </div>
  </section>

  <!-- Kabar Section -->
  <section class="bg-[#F2F3F4]">
    <div class="py-[100px] px-[80px] max-w-7xl mx-auto">
      <!-- Header -->
      <div class="flex justify-between items-center mb-10">
        <h2 class="text-[26px] font-semibold text-[#080E1E]">Kabar Darun Najah</h2>
        <a href="#" class="text-sm text-blue-600 hover:underline font-medium">Lihat Semua</a>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <!-- Kabar Utama -->
        <div class="lg:col-span-2">
          <div class="rounded-xl overflow-hidden mb-4">
            <img
              src="@/assets/kabar-utama.jpg"
              alt="MPLS"
              class="w-[888px] h-[448px] object-cover rounded-xl shadow"
            />
          </div>
          <h3 class="text-[26px] font-bold text-[#080E1E] mt-[24px] leading-snug">
            Kegiatan Penutupan Masa Pengenalan Lingkungan Sekolah (MPLS) dengan adanya penandatanganan
            deklarasi anti ...
          </h3>
          <div class="text-sm text-gray-500 mt-[24px]">Admin • 16 Agustus, 2024</div>
        </div>

        <!-- Daftar Berita Kecil -->
        <div class="space-y-[32px]">
          <div class="flex space-x-4">
            <img
              src="@/assets/kabar-1.png"
              alt=""
              class="w-[120px] h-[120px] rounded-lg object-cover"
            />
            <div>
              <p class="text-lg font-semibold text-[#080E1E] leading-snug line-clamp-2">
                Kunjungan lapangan mahasiswa prodi ...
              </p>
              <p class="text-sm text-gray-500 mt-[16px]">Admin • 18 Jul, 2024</p>
            </div>
          </div>

          <div class="flex space-x-4">
            <img
              src="@/assets/kabar-2.png"
              alt=""
              class="w-[120px] h-[120px] rounded-lg object-cover"
            />
            <div>
              <p class="text-lg font-semibold text-[#080E1E] leading-snug line-clamp-2">
                Pembelajaran wudhu bagi santri PPAI ...
              </p>
              <p class="text-sm text-gray-500 mt-[16px]">Admin • 16 Jul, 2024</p>
            </div>
          </div>

          <div class="flex space-x-4">
            <img
              src="@/assets/kabar-3.png"
              alt=""
              class="w-[120px] h-[120px] rounded-lg object-cover"
            />
            <div>
              <p class="text-lg font-semibold text-[#080E1E] leading-snug line-clamp-2">
                Peletakan batu pertama gedung SMP oleh ...
              </p>
              <p class="text-sm text-gray-500 mt-[16px]">Admin • 14 Jul, 2024</p>
            </div>
          </div>

          <div class="flex space-x-4">
            <img
              src="@/assets/kabar-4.png"
              alt=""
              class="w-[120px] h-[120px] rounded-lg object-cover"
            />
            <div>
              <p class="text-lg font-semibold text-[#080E1E] leading-snug line-clamp-2">
                Placement Test Penerimaan Santri ...
              </p>
              <p class="text-sm text-gray-500 mt-[16px]">Admin • 31 Mei, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Program Pembelajaran Section -->
  <section class="bg-[#0A1128]">
    <div class="py-[100px] px-[80px] text-white max-w-7xl mx-auto">
      <h2 class="text-[32px] font-semibold mb-[64px]">Program <br />Pebelajaran Kami</h2>

      <!-- Program Cards -->
      <div class="flex flex-wrap justify-between gap-10 mb-[64px]">
        <div class="w-[335px] h-[100px] bg-[#1C2331] rounded-md flex items-center gap-3 px-5 py-5">
          <img src="@/assets/quran.png" alt="Quran Icon" class="w-[42px] h-[42px]" />
          <span class="font-medium text-white text-2xl">Tahfidz Qur’an</span>
        </div>
        <div class="w-[335px] h-[100px] bg-[#1C2331] rounded-md flex items-center gap-3 px-5 py-5">
          <img src="@/assets/bilingual.png" alt="Bilingual Icon" class="w-[42px] h-[42px]" />
          <span class="font-medium text-white text-2xl">Bilingual</span>
        </div>
        <div class="w-[335px] h-[100px] bg-[#1C2331] rounded-md flex items-center gap-3 px-5 py-5">
          <img src="@/assets/p5.png" alt="P5 Icon" class="w-[42px] h-[42px]" />
          <span class="font-medium text-white text-2xl">P5</span>
        </div>
      </div>

      <!-- Ekstrakurikuler -->
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-2xl font-medium">Ekstrakurikuler</h3>
        <a href="#" class="text-[#6AF1C3] text-sm font-medium hover:underline">Lihat Semua</a>
      </div>

      <!-- Ekstrakurikuler Cards -->
      <div class="flex flex-wrap justify-between gap-x-10 gap-y-10">
        <!-- Card 1 -->
        <div class="relative group w-[335px] h-[245px] rounded-md overflow-hidden">
          <img
            src="@/assets/ekstra-1.jpg"
            alt="Menjahit"
            class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
          />
          <img
            src="@/assets/ekstra-1.jpg"
            alt="Menjahit Hover"
            class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          />
          <div
            class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center"
          >
            <p class="text-white text-base font-semibold mb-4">Menjahit</p>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="relative group w-[335px] h-[245px] rounded-md overflow-hidden">
          <img
            src="@/assets/ekstra-2.jpg"
            alt="Desain Grafis"
            class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
          />
          <img
            src="@/assets/ekstra-1.jpg"
            alt="Desain Grafis Hover"
            class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          />
          <div
            class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center"
          >
            <p class="text-white text-base font-semibold mb-4">Desain Grafis</p>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="relative group w-[335px] h-[245px] rounded-md overflow-hidden">
          <img
            src="@/assets/ekstra-3.png"
            alt="Pramuka"
            class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
          />
          <img
            src="@/assets/ekstra-1.jpg"
            alt="Pramuka Hover"
            class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          />
          <div
            class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center"
          >
            <p class="text-white text-base font-semibold mb-4">Pramuka</p>
          </div>
        </div>
      </div>

      <!-- Navigasi -->
      <div class="flex gap-2 mt-8">
        <button
          class="w-[40px] h-[40px] rounded-lg bg-[#182856] flex items-center justify-center text-white"
        >
          <svg class="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <button
          class="w-[40px] h-[40px] rounded-lg bg-[#3C7B46] flex items-center justify-center text-white"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </section>

  <!-- Section Banner PPDB -->
  <section class="px-[80px] pt-[80px] bg-white max-w-7xl mx-auto">
    <div
      class="flex px-[100px] items-center bg-[#3A814C] rounded-xl overflow-hidden w-full h-[420px]"
    >
      <!-- Text Content -->
      <div class="flex-1 py-[51px] text-white">
        <p class="text-base mb-[10px] font-semibold uppercase">PPDB</p>
        <h2 class="text-[40px] font-bold leading-snug mb-6">
          Ayok Masuk SMP<br />
          Darun Najah 2 <br />
          Karangploso
        </h2>
        <button
          class="bg-[#FFD440] text-black text-sm font-semibold px-4 py-2 rounded shadow hover:bg-yellow-400 transition"
        >
          Daftar Sekarang!
        </button>
      </div>

      <!-- Image -->
      <div class="flex-shrink-0">
        <img src="@/assets/santri.png" alt="Santri" class="h-[420px] object-contain" />
      </div>
    </div>
  </section>

  <!-- Sosmed Section -->
  <section class="py-[100px] px-[80px] bg-white max-w-7xl mx-auto">
    <!-- Header -->
    <div class="flex justify-between items-center mb-[40px]">
      <h2 class="text-[26px] font-semibold text-[#182856]">Sosial Media</h2>
      <a href="#" class="text-sm text-blue-600 hover:underline font-medium">Lihat Semua</a>
    </div>

    <!-- Instagram -->
    <div class="grid grid-cols-2 justify-between md:grid-cols-3 lg:grid-cols-4 gap-6">
      <!-- Card 1 -->
      <div>
        <div class="rounded-lg overflow-hidden shadow-sm mb-[24px]">
          <img src="@/assets/sosmed-1.png" alt="Asrama Santri" class="object-cover aspect-square" />
        </div>
        <div class="flex gap-2">
          <svg
            class="mt-2"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="18"
            height="18"
            viewBox="0 0 48 48"
          >
            <radialGradient
              id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
              cx="19.38"
              cy="42.035"
              r="44.899"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#fd5"></stop>
              <stop offset=".328" stop-color="#ff543f"></stop>
              <stop offset=".348" stop-color="#fc5245"></stop>
              <stop offset=".504" stop-color="#e64771"></stop>
              <stop offset=".643" stop-color="#d53e91"></stop>
              <stop offset=".761" stop-color="#cc39a4"></stop>
              <stop offset=".841" stop-color="#c837ab"></stop>
            </radialGradient>
            <path
              fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
              d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
            ></path>
            <radialGradient
              id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
              cx="11.786"
              cy="5.54"
              r="29.813"
              gradientTransform="matrix(1 0 0 .6663 0 1.849)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#4168c9"></stop>
              <stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop>
            </radialGradient>
            <path
              fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
              d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
            ></path>
            <path
              fill="#fff"
              d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
            ></path>
            <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
            <path
              fill="#fff"
              d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
            ></path>
          </svg>
          <p class="mt-1 text-base text-gray-800">darunnajah2malang</p>
        </div>
      </div>

      <!-- Card 2 -->
      <div>
        <div class="rounded-lg overflow-hidden shadow-sm mb-[24px]">
          <img
            src="@/assets/sosmed-2.png"
            alt="Gedung Madrasah"
            class="object-cover aspect-square"
          />
        </div>
        <div class="flex gap-2">
          <svg
            class="mt-2"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="18"
            height="18"
            viewBox="0 0 48 48"
          >
            <radialGradient
              id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
              cx="19.38"
              cy="42.035"
              r="44.899"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#fd5"></stop>
              <stop offset=".328" stop-color="#ff543f"></stop>
              <stop offset=".348" stop-color="#fc5245"></stop>
              <stop offset=".504" stop-color="#e64771"></stop>
              <stop offset=".643" stop-color="#d53e91"></stop>
              <stop offset=".761" stop-color="#cc39a4"></stop>
              <stop offset=".841" stop-color="#c837ab"></stop>
            </radialGradient>
            <path
              fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
              d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
            ></path>
            <radialGradient
              id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
              cx="11.786"
              cy="5.54"
              r="29.813"
              gradientTransform="matrix(1 0 0 .6663 0 1.849)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#4168c9"></stop>
              <stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop>
            </radialGradient>
            <path
              fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
              d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
            ></path>
            <path
              fill="#fff"
              d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
            ></path>
            <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
            <path
              fill="#fff"
              d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
            ></path>
          </svg>
          <p class="mt-1 text-base text-gray-800">darunnajah2malang</p>
        </div>
      </div>

      <!-- Card 3 -->
      <div>
        <div class="rounded-lg overflow-hidden shadow-sm mb-[24px]">
          <img
            src="@/assets/sosmed-3.png"
            alt="Laboratorium Komputer"
            class="object-cover aspect-square"
          />
        </div>
        <div class="flex gap-2">
          <svg
            class="mt-2"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="18"
            height="18"
            viewBox="0 0 48 48"
          >
            <radialGradient
              id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
              cx="19.38"
              cy="42.035"
              r="44.899"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#fd5"></stop>
              <stop offset=".328" stop-color="#ff543f"></stop>
              <stop offset=".348" stop-color="#fc5245"></stop>
              <stop offset=".504" stop-color="#e64771"></stop>
              <stop offset=".643" stop-color="#d53e91"></stop>
              <stop offset=".761" stop-color="#cc39a4"></stop>
              <stop offset=".841" stop-color="#c837ab"></stop>
            </radialGradient>
            <path
              fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
              d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
            ></path>
            <radialGradient
              id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
              cx="11.786"
              cy="5.54"
              r="29.813"
              gradientTransform="matrix(1 0 0 .6663 0 1.849)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#4168c9"></stop>
              <stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop>
            </radialGradient>
            <path
              fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
              d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
            ></path>
            <path
              fill="#fff"
              d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
            ></path>
            <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
            <path
              fill="#fff"
              d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
            ></path>
          </svg>
          <p class="mt-1 text-base text-gray-800">darunnajah2malang</p>
        </div>
      </div>

      <!-- Card 4 -->
      <div>
        <div class="rounded-lg overflow-hidden shadow-sm mb-[24px]">
          <img
            src="@/assets/sosmed-4.png"
            alt="Laboratorium Sains"
            class="object-cover aspect-square"
          />
        </div>
        <div class="flex gap-2">
          <svg
            class="mt-2"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="18"
            height="18"
            viewBox="0 0 48 48"
          >
            <radialGradient
              id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
              cx="19.38"
              cy="42.035"
              r="44.899"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#fd5"></stop>
              <stop offset=".328" stop-color="#ff543f"></stop>
              <stop offset=".348" stop-color="#fc5245"></stop>
              <stop offset=".504" stop-color="#e64771"></stop>
              <stop offset=".643" stop-color="#d53e91"></stop>
              <stop offset=".761" stop-color="#cc39a4"></stop>
              <stop offset=".841" stop-color="#c837ab"></stop>
            </radialGradient>
            <path
              fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
              d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
            ></path>
            <radialGradient
              id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
              cx="11.786"
              cy="5.54"
              r="29.813"
              gradientTransform="matrix(1 0 0 .6663 0 1.849)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#4168c9"></stop>
              <stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop>
            </radialGradient>
            <path
              fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
              d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
            ></path>
            <path
              fill="#fff"
              d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
            ></path>
            <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
            <path
              fill="#fff"
              d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
            ></path>
          </svg>
          <p class="mt-1 text-base text-gray-800">darunnajah2malang</p>
        </div>
      </div>
    </div>

    <!-- Youtube -->
    <div class="grid mt-10 grid-cols-1 lg:grid-cols-3 gap-16">
      <!-- Card Kiri -->
      <div class="lg:col-span-2">
        <div class="rounded-xl overflow-hidden mb-4">
          <img
            src="@/assets/sosmed-5.png"
            alt="MPLS"
            class="w-[900px] h-[520px] object-cover rounded-xl shadow"
          />
        </div>
        <div class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="18"
            height="18"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FF3D00"
              d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
            ></path>
            <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
          </svg>
          <p class="text-base text-gray-800">PPAI Darun Najah 2 Malang</p>
        </div>
      </div>

      <!-- Crad Kanan -->
      <div class="space-y-[32px]">
        <div class="rounded-xl overflow-hidden mb-4">
          <img
            src="@/assets/sosmed-6.png"
            alt=""
            class="w-full h-[520px] rounded-lg object-cover"
          />
        </div>
        <div class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="18"
            height="18"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FF3D00"
              d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
            ></path>
            <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
          </svg>
          <p class="text-base text-gray-800">PPAI Darun Najah 2 Malang</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Lokasi / Maps Section -->
  <section class="px-[80px] pb-[80px] bg-white max-w-7xl mx-auto">
    <div class="relative w-full h-auto rounded-xl overflow-hidden shadow-md">
      <!-- Gambar Maps -->
      <img
        src="@/assets/maps.png"
        alt="Peta Lokasi"
        class="w-full h-auto object-cover rounded-xl"
      />

      <!-- Info Card -->
      <div class="absolute bottom-6 left-6 bg-white rounded-lg shadow-lg p-5 w-[300px]">
        <h3 class="text-base font-bold text-gray-900 mb-2">
          PPAI Darun Najah 2<br />
          Karangploso
        </h3>
        <p class="text-sm text-gray-700 mb-4 leading-snug">
          Unnamed Road, Bumi Perkasa, Ngenep, Kec. Karang Ploso, Kabupaten Malang, Jawa Timur 65152
        </p>
        <a
          href="#"
          target="_blank"
          rel="noopener"
          class="inline-block bg-yellow-400 hover:bg-yellow-500 transition text-sm text-black font-bold px-8 py-2 rounded-md shadow"
        >
          <i class="bi bi-geo-alt-fill"></i> Kunjungi Darun Najah 2
        </a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-[#0A1128] px-[80px] py-6 text-white">
    <div class="flex justify-between items-center">
      <!-- Logo -->
      <img src="@/assets/dn2.png" alt="Logo DN2" class="h-[40px]" />

      <!-- Copyright -->
      <p class="text-sm text-gray-400">Copyright ©2024 | SMP Darun Najah 2 Karangploso</p>

      <!-- Kontak Button -->
      <a
        href="#"
        target="_blank"
        class="flex items-center gap-2 bg-white text-black text-sm font-semibold px-4 py-2 rounded-md shadow hover:bg-gray-200 transition"
      >
        <!-- WhatsApp SVG -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.627 
          5.373-11.987 12-11.991 3.192-.002 6.2 1.24 8.477 
          3.514 2.275 2.275 3.521 5.283 3.52 
          8.475-.003 6.627-5.373 11.987-12 
          11.991-1.99.001-3.951-.5-5.688-1.448L.057 
          24zm6.597-3.807c1.676.995 3.276 1.591 
          5.392 1.592 5.448-.003 9.886-4.433 
          9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452.003-9.887 
          4.432-9.889 9.881-.001 2.225.651 
          3.891 1.746 5.634l-.999 3.648 3.742-.978zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.966-.941 
          1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 
          4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 
          1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414z"
          />
        </svg>
        Kontak Kami
      </a>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const showSidebar = ref(false)

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value
}

// Fungsi Button Back to Top
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
.dropdown-enter-to,
.dropdown-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>

