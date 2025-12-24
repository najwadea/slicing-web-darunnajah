<template>
  <div class="bg-white">
<!-- Navbar -->
        <header v-if="!showSidebar" class="absolute top-0 left-0 right-0 z-50">
            <nav class="flex flex-wrap justify-between items-center bg-transparent lg:px-20 md:px-10 sm:px-4 md:pt-0">
            
            <!-- Logo -->
            <RouterLink to="/" class="block">
                <div class="bg-white shadow rounded-b-[16px] px-4 md:px-[24px] pb-4 md:pb-[24px] pt-4 md:pt-[36px] hidden sm:flex items-center space-x-3 hover:bg-gray-100 transition">
                    <img src="@/assets/logo-darunnajah.png" alt="Logo Sekolah" class="w-9 h- md:w-12 md:h-12 object-contain" />
                    <div class="text-sm md:text-base font-bold text-gray-800 leading-snug tracking-wide">
                    SMP DARUN NAJAH 2<br />KARANGPLOSO
                    </div>
                </div>
            </RouterLink>

            <!-- Navbar Mobile -->
            <div class="w-full bg-white shadow rounded-none md:hidden flex justify-between items-center px-5 pb-4 pt-4">
                <!-- Logo -->
                <RouterLink to="/" class="block">
                    <div class="flex items-center space-x-3">
                        <img src="@/assets/logo-darunnajah.png" alt="Logo Sekolah" class="w-10 h-10 object-contain" />
                        <div class="text-xs font-bold text-gray-800 leading-snug tracking-wide">
                            SMP DARUN NAJAH 2<br />KARANGPLOSO
                        </div>
                    </div>
                </RouterLink>
                
                <!-- Setting Mobile -->
                <button
                @click="toggleSidebar"
                class="flex items-center justify-center bg-[#182856] text-white h-[44px] w-[44px] rounded-[8px] hover:bg-blue-800 transition"
                >
                <!-- <i class="bi bi-sliders text-lg"></i> -->
                <img src="@/assets/icons/setting-4.png" alt="">
                </button>
            </div>

            <!-- Sosial & Buttons -->
            <div class="hidden sm:flex flex-wrap md:flex-nowrap items-center space-x-2 md:space-x-5 mt-4 md:mt-0">
                
                <!-- Sosial Media -->
                <div class="flex items-center space-x-2 md:space-x-4">
                <a href="https://www.instagram.com/smpdarunnajah2karangploso?igsh=MWR2NnFiODg2MzhiMA==" class="w-10 h-10 md:w-[44px] md:h-[44px] bg-white/50 border border-white rounded-full hover:bg-white transition flex items-center justify-center">
                    <i class="bi bi-instagram text-lg md:text-xl"></i>
                </a>
                <a href="https://www.youtube.com/@smpdarunnajah2karangploso" class="w-10 h-10 md:w-[44px] md:h-[44px] bg-white/50 border border-white rounded-full hover:bg-white transition flex items-center justify-center">
                    <i class="bi bi-youtube text-lg md:text-xl"></i>
                </a>
                </div>

                <!-- Tombol Desktop -->
                <a href="#" target="_blank" class="hidden md:flex items-center justify-center bg-white/50 border border-white w-[182px] h-[52px] rounded-[8px] px-[28px] text-[15px] font-bold hover:bg-gray-100 transition">
                <!-- <i class="bi bi-whatsapp text-black text-2xl mr-2"></i> Kontak kami -->
                <img src="@/assets/icons/whatsapp.png" alt="whatsapp" class="mr-2"> Kontak kami
                </a>
                <a href="https://www.instagram.com/smpdarunnajah2karangploso?igsh=MWR2NnFiODg2MzhiMA==" class="hidden md:flex items-center justify-center bg-[#3C7B46] text-white w-[138px] h-[52px] rounded-[8px] text-[15px] font-bold hover:bg-green-700 transition">
                PSB Online
                </a>

                <!-- Tombol Setting -->
                <button @click="toggleSidebar" class="flex items-center justify-center bg-[#182856] text-white h-[52px] px-4 rounded-[8px] transition">
                <!-- <i class="bi bi-sliders text-lg"></i> -->
                <img src="@/assets/icons/setting-4.png" alt="">
                </button>
            </div>
            </nav>
        </header>

       <!-- Sidebar -->
        <transition name="dropdown">
            <div
            v-if="showSidebar"
            class="absolute top-0 left-0 right-0 bg-[#0A1128] px-5 pt-0 pb-20 z-50 md:px-10 md:pt-0 lg:px-20"
            >
            <!-- Logo -->
            <nav class="flex flex-wrap justify-between items-center bg-transparent">
                <!-- Logo (Desktop & Tablet) -->
                <div class="bg-white shadow rounded-b-[16px] px-4 md:px-[24px] pb-4 md:pb-[24px] pt-4 md:pt-[36px] hidden sm:flex items-center space-x-3">
                <RouterLink to="/">
                    <img
                    src="@/assets/logo-darunnajah.png"
                    alt="Logo Sekolah"
                    class="w-12 h-12 object-contain"
                    />
                </RouterLink>
                <div class="text-sm md:text-base font-bold text-gray-800 leading-snug tracking-wide">
                    SMP DARUN NAJAH 2<br />KARANGPLOSO
                </div>
                </div>

                <!-- Logo (Mobile) -->
                <div class="bg-white shadow rounded-b-[16px] px-5 pb-4 pt-4 flex md:hidden items-center">
                <RouterLink to="/">
                    <img
                    src="@/assets/logo-darunnajah.png"
                    alt="Logo Sekolah"
                    class="w-8 h-8 object-contain"
                    />
                </RouterLink>
                <div class="hidden sm:block text-sm md:text-base font-bold text-gray-800 leading-snug tracking-wide">
                    SMP DARUN NAJAH 2<br />KARANGPLOSO
                </div>
                </div>

                <!-- Sosial & Buttons -->
                <div class="flex flex-wrap md:flex-nowrap items-center gap-x-2 md:gap-x-5 mt-4 md:mt-0">
                <!-- Sosial Media -->
                <div class="hidden md:flex items-center space-x-2 md:space-x-4">
                    <a href="https://www.instagram.com/smpdarunnajah2karangploso?igsh=MWR2NnFiODg2MzhiMA==" class="w-10 h-10 md:w-[44px] md:h-[44px] bg-white/50 border border-white rounded-full hover:bg-white transition flex items-center justify-center">
                    <i class="bi bi-instagram text-lg md:text-xl"></i>
                    </a>
                    <a href="https://www.youtube.com/@smpdarunnajah2karangploso" class="w-10 h-10 md:w-[44px] md:h-[44px] bg-white/50 border border-white rounded-full hover:bg-white transition flex items-center justify-center">
                    <i class="bi bi-youtube text-lg md:text-xl"></i>
                    </a>
                </div>

                <!-- Tombol Desktop -->
                <a href="#" target="_blank" class="hidden md:flex items-center justify-center bg-white/50 border border-white w-[182px] h-[52px] rounded-[8px] px-[28px] text-[15px] font-bold hover:bg-gray-100 transition">
                    <img src="@/assets/icons/whatsapp.png" alt="whatsapp" class="mr-2" />
                    Kontak kami
                </a>
                <a href="#" class="hidden md:flex items-center justify-center bg-[#3C7B46] text-white w-[138px] h-[52px] rounded-[8px] text-[15px] font-bold hover:bg-green-700 transition">
                    PSB Online
                </a>

                <!-- Tombol Setting Sidebar -->
                <button @click="toggleSidebar" class="hidden sm:flex items-center justify-center bg-[#182856] text-white h-[52px] px-4 rounded-[8px] transition">
                    <img src="@/assets/icons/setting-4.png" alt="" />
                </button>
                <button @click="toggleSidebar" class="flex sm:hidden items-center justify-center bg-[#182856] text-white h-[52px] px-4 rounded-[8px] transition">
                    <img src="@/assets/icons/close-circle.png" alt="" />
                </button>
                </div>
            </nav>

            <!-- Menu Utama -->
            <div class="pt-[56px] flex flex-col md:flex-row">
                <ul
                class="w-full md:w-1/3 text-white text-2xl font-medium space-y-[16px] pb-10 md:pr-4"
                >
                <li>
                    <button
                    @click="toggleSubmenu('profil')"
                    class="w-full text-left hover:text-gray-300 transition"
                    >
                    <span
                        :class="{ 'text-[#24C087]': activeMenu === 'profil' }"
                        >Profil Sekolah</span
                    >
                    </button>

                    <!-- Submenu Profil Mobile -->
                    <ul
                    v-if="activeMenu === 'profil'"
                    class="mt-[16px] space-y-[16px] text-base text-white/90 md:hidden pl-4"
                    >
                    <li>
                        <RouterLink to="/about" class="flex gap-6 items-center">
                        Tentang Kami
                        <i class="bi bi-chevron-right text-[#F9BF39] transition"></i>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/core" class="flex gap-6 items-center">
                        Core Value
                        <i class="bi bi-chevron-right text-[#F9BF39] transition"></i>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/guru" class="flex gap-6 items-center">
                        Dewan Guru
                        <i class="bi bi-chevron-right text-[#F9BF39] transition"></i>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/struktur" class="flex gap-6 items-center">
                        Organisasi
                        <i class="bi bi-chevron-right text-[#F9BF39] transition"></i>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/logo" class="flex mb-10 gap-6 items-center">
                        Logo
                        <i class="bi bi-chevron-right text-[#F9BF39] transition"></i>
                        </RouterLink>
                    </li>
                    </ul>
                </li>

                <li>
                    <RouterLink to="/berita" class="hover:text-gray-300 transition">
                    Berita
                    </RouterLink>
                </li>

                <li>
                    <button
                    @click="toggleSubmenu('program')"
                    class="w-full text-left hover:text-gray-300 transition"
                    >
                    <span
                        :class="{ 'text-[#24C087]': activeMenu === 'program' }"
                        >Program</span
                    >
                    </button>

                    <!-- Submenu Programl Mobile -->
                    <ul
                    v-if="activeMenu === 'program'"
                    class="mt-[16px] space-y-[16px] text-base text-white/90 md:hidden pl-4"
                    >
                    <li>
                        <RouterLink to="/tahfidz" class="flex gap-6 items-center">
                        Tahfizd Qur’an
                        <i class="bi bi-chevron-right text-[#F9BF39] transition"></i>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/bilingual" class="flex gap-6 items-center">
                        Bilingual
                        <i class="bi bi-chevron-right text-[#F9BF39] transition"></i>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/p5" class="flex gap-6 items-center">
                        P5
                        <i class="bi bi-chevron-right text-[#F9BF39] transition"></i>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/ekstra" class="flex gap-6 items-center">
                        Ekstrakurikuler
                        <i class="bi bi-chevron-right text-[#F9BF39] transition"></i>
                        </RouterLink>
                    </li>
                    </ul>
                </li>
                <li>
                    <RouterLink to="/fasilitas" class="hover:text-gray-300 transition">
                    Fasilitas
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/galeri" class="hover:text-gray-300 transition">
                    Galeri
                    </RouterLink>
                </li>
                </ul>

                <!-- Submenu Desktop -->
                <div class="hidden md:block w-2/3 pl-6">
                <ul
                    v-if="activeMenu === 'profil'"
                    class="space-y-4 text-white/90 text-base"
                >
                    <li>
                    <RouterLink to="/about" class="flex gap-6 items-center">
                        Tentang Kami
                        <i class="bi bi-chevron-right hover:text-[#F9BF39] transition"></i>
                    </RouterLink>
                    </li>
                    <li>
                    <RouterLink to="/core" class="flex gap-6 items-center">
                        Core Value
                        <i class="bi bi-chevron-right hover:text-[#F9BF39] transition"></i>
                    </RouterLink>
                    </li>
                    <li>
                    <RouterLink to="/guru" class="flex gap-6 items-center">
                        Dewan Guru
                        <i class="bi bi-chevron-right hover:text-[#F9BF39] transition"></i>
                    </RouterLink>
                    </li>
                    <li>
                    <RouterLink to="/struktur" class="flex gap-6 items-center">
                        Organisasi
                        <i class="bi bi-chevron-right hover:text-[#F9BF39] transition"></i>
                    </RouterLink>
                    </li>
                    <li>
                    <RouterLink to="/logo" class="flex gap-6 items-center">
                        Logo
                        <i class="bi bi-chevron-right hover:text-[#F9BF39] transition"></i>
                    </RouterLink>
                    </li>
                </ul>

                <ul
                    v-if="activeMenu === 'program'"
                    class="space-y-4 text-white/90 text-base"
                >
                    <li>
                    <RouterLink to="/tahfidz" class="flex gap-6 items-center">
                        Tahfizd Qur’an
                        <i class="bi bi-chevron-right hover:text-[#F9BF39] transition"></i>
                    </RouterLink>
                    </li>
                    <li>
                    <RouterLink to="/bilingual" class="flex gap-6 items-center">
                        Bilingual
                        <i class="bi bi-chevron-right hover:text-[#F9BF39] transition"></i>
                    </RouterLink>
                    </li>
                    <li>
                    <RouterLink to="/p5" class="flex gap-6 items-center">
                        P5
                        <i class="bi bi-chevron-right hover:text-[#F9BF39] transition"></i>
                    </RouterLink>
                    </li>
                    <li>
                    <RouterLink to="/ekstra" class="flex gap-6 items-center">
                        Ekstrakurikuler
                        <i class="bi bi-chevron-right hover:text-[#F9BF39] transition"></i>
                    </RouterLink>
                    </li>
                </ul>
                </div>
            </div>

            <!-- Button Sidebar mobile -->
            <div class="block md:hidden space-y-[16px] pb-7">
                <a
                href="#"
                class="block w-full text-center bg-[#3C7B46] text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                >
                PSB Online
                </a>

                <a
                href="#"
                target="_blank"
                class="flex items-center justify-center gap-2 w-full bg-white/50 border border-white py-3 rounded-lg hover:bg-green-700 transition"
                >
                <img
                    src="@/assets/icons/whatsapp.png"
                    alt="whatsapp"
                    class="w-5 h-5"
                />
                <span class="text-base font-bold">Kontak Kami</span>
                </a>
            </div>


            <!-- Sosial Media Sidebar Mobile -->
            <div class="flex sm:hidden items-center space-x-2 md:space-x-4 pb-10">
                <a
                href="#"
                class="w-10 h-10 md:w-[44px] md:h-[44px] bg-white/50 border border-white rounded-full hover:bg-white transition flex items-center justify-center"
                >
                <i class="bi bi-instagram text-lg md:text-xl"></i>
                </a>
                <a
                href="#"
                class="w-10 h-10 md:w-[44px] md:h-[44px] bg-white/50 border border-white rounded-full hover:bg-white transition flex items-center justify-center"
                >
                <i class="bi bi-youtube text-lg md:text-xl"></i>
                </a>
            </div>
            </div>
        </transition>

    <!-- Warta Berita -->
    <section class="px-4 md:px-10 lg:px-20 md:pt-40 pt-30 md:pb-20 pb-10">
      <!-- Judul + Filter -->
      <div class="overflow-x-auto flex flex-col md:flex-row md:items-center md:justify-between mb-10 scrollbar-hide">
        <h1 class="text-[40px] font-bold text-[#0A1128] mb-4 md:mb-0">
          Warta Berita
        </h1>

        <div class="flex items-center gap-1 px-1 py-1 border border-[#E6E6E8] rounded-[10px] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <RouterLink to="/berita">
            <button class="bg-[#3C7B46] text-white font-bold text-sm px-3 py-2 rounded-[8px]">
              Semua
            </button>
          </RouterLink>
          <RouterLink to="/kabar">
            <button class="text-[#5A5F6D] font-bold text-sm px-3 py-2">
              Kabar Sekolah
            </button>
          </RouterLink>
          <button class="text-[#5A5F6D] font-bold text-sm px-3 py-2 hover:text-[#3C7B46]">
            Prestasi
          </button>
          <button class="text-[#5A5F6D] font-bold text-sm px-3 py-2 hover:text-[#3C7B46]">
            Artikel
          </button>
        </div>
      </div>

      <!-- Gambar + Konten -->
      <div class="relative w-full rounded-tr-2xl rounded-tl-2xl rounded-br-2xl overflow-hidden shadow aspect-video">
          <img src="@/assets/kabar-utama.jpg" alt="Berita MPLS" class="w-full h-full object-cover"/>

          <!-- Card di gambar -->
          <div class="hidden sm:block absolute bottom-0 left-0 m-0 p-0 bg-white shadow-xl rounded-tr-xl w-[90%] sm:w-[480px]">
            <div class="px-5 py-5 md:px-10 md:py-10">
              <button class="bg-[#EBFAF4] rounded-[4px] ">
                <p class="text-[10px] text-[#254B2B] font-bold px-2 py-1">Kabar Sekolah</p>
              </button>
                <h2 class="text-[40px] sm:text-[32px] font-bold text-[#272727] leading-snug mb-6">
                Kegiatan Penutupan Masa Pengenalan Lingkungan ...
                </h2>
                <p class="text-sm text-[#272727] font-medium">Admin • 16 Agu, 2024</p>
            </div>
          </div>
      </div>

    <!-- Mobile: Konten di luar gambar -->
      <div class="block sm:hidden py-6">
          <button class="bg-[#EBFAF4] rounded-[4px]">
            <p class="text-[10px] text-[#254B2B] font-bold px-2 py-1">Kabar Sekolah</p>
          </button>
            <h2 class="text-[32px] font-bold text-[#272727] leading-snug mb-6">
            Kegiatan Penutupan Masa Pengenalan Lingkungan ...
            </h2>
            <p class="text-sm text-[#272727] font-medium">Admin • 16 Agu, 2024</p>
      </div>
    </section>

    <!-- Berita 2 -->
    <section class="px-4 md:px-10 lg:px-20">
        <div class="hidden sm:block">     
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-[64px]">
            <!-- Card 1 -->
            <div class="flex flex-col sm:flex-row bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition h-[200px]">
              <!-- Thumbnail -->
              <div class="w-full sm:w-[300px] h-1/2 sm:h-full">
                <img
                  src="@/assets/kabar-1.png"
                  alt="Kunjungan Mahasiswa"
                  class="w-full h-full object-cover"
                />
              </div>

              <!-- Konten -->
              <div class="w-full p-6 flex flex-1 flex-col justify-center">
                <p class="text-[10px] font-bold text-[#254B2B] bg-[#EBFAF4] px-2 py-1 rounded w-fit mb-4">
                  Kabar Sekolah
                </p>
                <h3 class="text-xl font-bold text-[#272727] mb-4 line-clamp-3">
                  Kunjungan Lapangan Mahasiswa Prodi Studi Lembaga Pendidikan Islam ...
                </h3>
                <p class="text-sm text-[#272727] font-medium">Admin • 18 Jul, 2024</p>
              </div>
            </div>

            <!-- Card 2 -->
            <div class="flex flex-col sm:flex-row bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition h-[200px]">
              <!-- Thumbnail -->
              <div class="w-full sm:w-[300px] h-1/2 sm:h-full">
                <img
                  src="@/assets/kabar-2.png"
                  alt="Kunjungan Mahasiswa"
                  class="w-full h-full object-cover"
                />
              </div>

              <!-- Konten -->
              <div class="w-full sm:w-1/2 p-6 flex  flex-col justify-center">
                <p class="text-[10px] font-bold text-[#254B2B] bg-[#EBFAF4] px-2 py-1 rounded w-fit mb-4">
                  Kabar Sekolah
                </p>
                <h3 class="text-xl font-bold text-[#272727] mb-4 line-clamp-3">
                  Pembelajaran Wudlu bagi Santri Pondok Pesantren PPAI Darun Najah 2 Malang...
                </h3>
                <p class="text-sm text-[#272727] font-medium">Admin • 16 Jul, 2024</p>
              </div>
            </div>
          </div>
        </div> 
        
        <div class="block sm:hidden">     
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-[64px]">
            <!-- Card 1 -->
            <div class="flex flex-col sm:flex-row bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition">
              <!-- Thumbnail -->
              <div class="w-full sm:w-[300px] h-1/2 sm:h-full">
                <img
                  src="@/assets/kabar-1.png"
                  alt="Kunjungan Mahasiswa"
                  class="w-full h-full object-cover"
                />
              </div>

              <!-- Konten -->
              <div class="w-full p-6 flex flex-1 flex-col justify-center">
                <p class="text-[10px] font-bold text-[#254B2B] bg-[#EBFAF4] px-2 py-1 rounded w-fit mb-4">
                  Kabar Sekolah
                </p>
                <h3 class="text-xl font-bold text-[#272727] mb-4 line-clamp-3">
                  Kunjungan Lapangan Mahasiswa Prodi Studi Lembaga Pendidikan Islam ...
                </h3>
                <p class="text-sm text-[#272727] font-medium">Admin • 18 Jul, 2024</p>
              </div>
            </div>

            <!-- Card 2 -->
            <div class="flex flex-col sm:flex-row bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition">
              <!-- Thumbnail -->
              <div class="w-full sm:w-[300px] h-1/2 sm:h-full">
                <img
                  src="@/assets/kabar-2.png"
                  alt="Kunjungan Mahasiswa"
                  class="w-full h-[204.18px] object-cover"
                />
              </div>

              <!-- Konten -->
              <div class="w-full sm:w-1/2 p-6 flex  flex-col justify-center">
                <p class="text-[10px] font-bold text-[#254B2B] bg-[#EBFAF4] px-2 py-1 rounded w-fit mb-4">
                  Kabar Sekolah
                </p>
                <h3 class="text-xl font-bold text-[#272727] mb-4 line-clamp-3">
                  Pembelajaran Wudlu bagi Santri Pondok Pesantren PPAI Darun Najah 2 Malang...
                </h3>
                <p class="text-sm text-[#272727] font-medium">Admin • 16 Jul, 2024</p>
              </div>
            </div>
          </div>
        </div> 
        <div class="border-b border-gray-300 my-10"></div>
    </section>

    <!-- Berita Lainnya -->
    <section class="px-4 md:px-10 lg:px-20 md:pb-20 pb-10">
     <h2 class="text-xl font-bold mb-6">Berita lainnya</h2>

     <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Card 1 -->
        <div class="rounded-xl overflow-hidden">
          <img src="@/assets/kabar-3.png" alt="Berita 1" class="w-full h-48 object-cover" />
          <div class="p-4 space-y-2">
              <span class="inline-block text-[10px] font-bold mt-4 px-2 py-1 bg-[#EBFAF4] text-[#254B2B] rounded">Kabar Sekolah</span>
              <h3 class="mt-4 text-[20px] text-[#272727] font-bold leading-snug">Peletakan batu pertama gedung SMP oleh Bupati Malang, Drs. H. M. Sanusi, M.M., ...</h3>
              <p class="mt-4 text-sm text-[#272727]">Admin • 14 Jul, 2024</p>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="rounded-xl overflow-hidden">
          <img src="@/assets/kabar-4.png" alt="Berita 1" class="w-full h-48 object-cover" />
          <div class="p-4 space-y-2">
              <span class="inline-block text-[10px] font-bold mt-4 px-2 py-1 bg-[#EBFAF4] text-[#254B2B] rounded">Kabar Sekolah</span>
              <h3 class="mt-4 text-[20px] text-[#272727] font-bold leading-snug">Placement Test Penerimaan Santri Baru PPAI Darun Najah 2 Malang Tahun ...</h3>
              <p class="mt-4 text-sm text-[#272727]">Admin • 31 Mei, 2024</p>
          </div>
        </div>

        <!-- Card 3 -->
         <div class="rounded-xl overflow-hidden">
          <img src="@/assets/kabar-4.png" alt="Berita 1" class="w-full h-48 object-cover" />
          <div class="p-4 space-y-2">
              <span class="inline-block text-[10px] font-bold mt-4 px-2 py-1 bg-[#EBFAF4] text-[#254B2B] rounded">Kabar Sekolah</span>
              <h3 class="mt-4 text-[20px] text-[#272727] font-bold leading-snug">Placement Test Penerimaan Santri Baru PPAI Darun Najah 2 Malang Tahun ...</h3>
              <p class="mt-4 text-sm text-[#272727]">Admin • 31 Mei, 2024</p>
          </div>
        </div>
     </div>
    </section>

    <!-- Footer -->
    <footer class="bg-[#0A1128] px-4 lg:px-20 md:px-10 py-6 text-white">
      <div class="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:items-center">
        <!-- Logo -->
        <div class="w-full sm:w-auto flex justify-start">
          <img src="@/assets/dn2.png" alt="Logo DN2" class="h-[40px]" />
        </div>

        <p class="text-lg text-gray-400 text-center sm:text-left">
          Copyright ©2024 | SMP Darun Najah 2
        </p>

        <a
          href="#"
          target="_blank"
          class="w-full sm:w-auto flex justify-center items-center gap-2 bg-white text-black text-base font-semibold px-6 py-[18px] rounded-md shadow hover:bg-gray-200 transition"
        >
        <img src="@/assets/icons/whatsapp.png" alt="whatsapp" class="mr-[10px]">
        Kontak Kami
        </a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showSidebar = ref(false);
const activeMenu = ref(null);

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value;
};

const toggleSubmenu = (menu) => {
  activeMenu.value = activeMenu.value === menu ? null : menu;
};
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none; 
  scrollbar-width: none;    
}
</style>
