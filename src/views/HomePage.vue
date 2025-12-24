<template>
 <!-- Navbar -->
  <header v-if="!showSidebar" class="absolute top-0 left-0 right-0 z-50">
    <nav
      class="flex flex-wrap justify-between items-center bg-transparent lg:px-20 md:px-10 sm:px-4 md:pt-0"
    >
      <!-- Logo -->
      <RouterLink to="/" class="block">
        <div
          class="bg-white shadow rounded-b-[16px] px-4 md:px-[24px] pb-4 md:pb-[24px] pt-4 md:pt-[36px] hidden sm:flex items-center space-x-3 hover:bg-gray-100 transition"
        >
          <img
            src="@/assets/logo-darunnajah.png"
            alt="Logo Sekolah"
            class="w-9 h-9 md:w-12 md:h-12 object-contain"
          />
          <div class="text-sm md:text-base font-bold text-gray-800 leading-snug tracking-wide">
            SMP DARUN NAJAH 2<br />KARANGPLOSO
          </div>
        </div>
      </RouterLink>

      <!-- Navbar Mobile -->
      <div
        class="w-full bg-white shadow rounded-none md:hidden flex justify-between items-center px-5 pb-4 pt-4"
      >
        <!-- Logo -->
        <RouterLink to="/" class="block">
          <div class="flex items-center space-x-3">
            <img
              src="@/assets/logo-darunnajah.png"
              alt="Logo Sekolah"
              class="w-10 h-10 object-contain"
            />
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
          <img src="@/assets/icons/setting-4.png" alt="settings" />
        </button>
      </div>

      <!-- Sosial & Buttons -->
      <div
        class="hidden sm:flex flex-wrap md:flex-nowrap items-center space-x-2 md:space-x-5 mt-4 md:mt-0"
      >
        <!-- Sosial Media -->
        <div class="flex items-center space-x-2 md:space-x-4">
          <a
            href="https://www.instagram.com/smpdarunnajah2karangploso?igsh=MWR2NnFiODg2MzhiMA=="
            class="w-10 h-10 md:w-[44px] md:h-[44px] bg-white/50 border border-white rounded-full hover:bg-white transition flex items-center justify-center"
          >
            <i class="bi bi-instagram text-lg md:text-xl"></i>
          </a>
          <a
            href="https://www.youtube.com/@smpdarunnajah2karangploso"
            class="w-10 h-10 md:w-[44px] md:h-[44px] bg-white/50 border border-white rounded-full hover:bg-white transition flex items-center justify-center"
          >
            <i class="bi bi-youtube text-lg md:text-xl"></i>
          </a>
        </div>

        <!-- Tombol Desktop -->
        <a
          href="#"
          target="_blank"
          class="hidden md:flex items-center justify-center bg-white/50 border border-white w-[182px] h-[52px] rounded-[8px] px-[28px] text-[15px] font-bold hover:bg-gray-100 transition"
        >
          <img src="@/assets/icons/whatsapp.png" alt="whatsapp" class="mr-2" /> Kontak kami
        </a>
        <a
          href="https://www.instagram.com/smpdarunnajah2karangploso?igsh=MWR2NnFiODg2MzhiMA=="
          class="hidden md:flex items-center justify-center bg-[#3C7B46] text-white w-[138px] h-[52px] rounded-[8px] text-[15px] font-bold hover:bg-green-700 transition"
        >
          PSB Online
        </a>

        <!-- Tombol Setting -->
        <button
          @click="toggleSidebar"
          class="flex items-center justify-center bg-[#182856] text-white h-[52px] px-4 rounded-[8px] hover:bg-blue-800 transition"
        >
          <img src="@/assets/icons/setting-4.png" alt="settings" />
        </button>
      </div>
    </nav>
  </header>

  <!-- Sidebar -->
  <transition name="sidebar">
    <div
      v-if="showSidebar"
      class="fixed top-0 left-0 right-0 bottom-0 bg-[#0A1128] px-5 pt-0 pb-20 z-[100] md:px-10 md:pt-0 lg:px-20 overflow-y-auto"
    >
      <!-- Logo -->
      <nav class="flex flex-wrap justify-between items-center bg-transparent">
        <!-- Logo (Desktop & Tablet) -->
        <div
          class="bg-white shadow rounded-b-[16px] px-4 md:px-[24px] pb-4 md:pb-[24px] pt-4 md:pt-[36px] hidden sm:flex items-center space-x-3"
        >
          <RouterLink to="/" @click="showSidebar = false">
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
          <RouterLink to="/" @click="showSidebar = false">
            <img
              src="@/assets/logo-darunnajah.png"
              alt="Logo Sekolah"
              class="w-8 h-8 object-contain"
            />
          </RouterLink>
          <div
            class="hidden sm:block text-sm md:text-base font-bold text-gray-800 leading-snug tracking-wide"
          >
            SMP DARUN NAJAH 2<br />KARANGPLOSO
          </div>
        </div>

        <!-- Sosial & Buttons -->
        <div class="flex flex-wrap md:flex-nowrap items-center gap-x-2 md:gap-x-5 mt-4 md:mt-0">
          <!-- Sosial Media -->
          <div class="hidden md:flex items-center space-x-2 md:space-x-4">
            <a
              href="https://www.instagram.com/smpdarunnajah2karangploso?igsh=MWR2NnFiODg2MzhiMA=="
              class="w-10 h-10 md:w-[44px] md:h-[44px] bg-white/50 border border-white rounded-full hover:bg-white transition flex items-center justify-center"
            >
              <i class="bi bi-instagram text-lg md:text-xl"></i>
            </a>
            <a
              href="https://www.youtube.com/@smpdarunnajah2karangploso"
              class="w-10 h-10 md:w-[44px] md:h-[44px] bg-white/50 border border-white rounded-full hover:bg-white transition flex items-center justify-center"
            >
              <i class="bi bi-youtube text-lg md:text-xl"></i>
            </a>
          </div>

          <!-- Tombol Desktop -->
          <a
            href="#"
            target="_blank"
            class="hidden md:flex items-center justify-center bg-white/50 border border-white w-[182px] h-[52px] rounded-[8px] px-[28px] text-[15px] font-bold hover:bg-gray-100 transition"
          >
            <img src="@/assets/icons/whatsapp.png" alt="whatsapp" class="mr-2" />
            Kontak kami
          </a>
          <a
            href="#"
            class="hidden md:flex items-center justify-center bg-[#3C7B46] text-white w-[138px] h-[52px] rounded-[8px] text-[15px] font-bold hover:bg-green-700 transition"
          >
            PSB Online
          </a>

          <!-- Tombol Setting Sidebar -->
          <button
            @click="toggleSidebar"
            class="hidden sm:flex items-center justify-center bg-[#182856] text-white h-[52px] px-4 rounded-[8px] hover:bg-blue-800 transition"
          >
            <img src="@/assets/icons/setting-4.png" alt="settings" />
          </button>
          <button
            @click="toggleSidebar"
            class="flex sm:hidden items-center justify-center bg-[#182856] text-white h-[52px] px-4 rounded-[8px] hover:bg-blue-800 transition"
          >
            <img src="@/assets/icons/close-circle.png" alt="close" />
          </button>
        </div>
      </nav>

      <!-- Menu Utama -->
      <div class="pt-[56px] flex flex-col md:flex-row">
        <ul class="w-full md:w-1/3 text-white text-2xl font-medium space-y-[16px] pb-10 md:pr-4">
          <li>
            <button
              @click="toggleSubmenu('profil')"
              class="w-full text-left hover:text-gray-300 transition"
            >
              <span :class="{ 'text-[#24C087]': activeMenu === 'profil' }">Profil Sekolah</span>
            </button>

            <!-- Submenu Profil Mobile -->
            <ul
              v-if="activeMenu === 'profil'"
              class="mt-[16px] space-y-[16px] text-base text-white/90 md:hidden pl-4"
            >
              <li>
                <RouterLink to="/about" @click="showSidebar = false" class="flex gap-6 items-center">
                  Tentang Kami
                  <i class="bi bi-chevron-right text-[#F9BF39] transition"></i>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/core" @click="showSidebar = false" class="flex gap-6 items-center">
                  Core Value
                  <i class="bi bi-chevron-right text-[#F9BF39] transition"></i>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/guru" @click="showSidebar = false" class="flex gap-6 items-center">
                  Dewan Guru
                  <i class="bi bi-chevron-right text-[#F9BF39] transition"></i>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/struktur" @click="showSidebar = false" class="flex gap-6 items-center">
                  Organisasi
                  <i class="bi bi-chevron-right text-[#F9BF39] transition"></i>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/logo" @click="showSidebar = false" class="flex mb-10 gap-6 items-center">
                  Logo
                  <i class="bi bi-chevron-right text-[#F9BF39] transition"></i>
                </RouterLink>
              </li>
            </ul>
          </li>

          <li>
            <RouterLink to="/berita" @click="showSidebar = false" class="hover:text-gray-300 transition"> Berita </RouterLink>
          </li>

          <li>
            <button
              @click="toggleSubmenu('program')"
              class="w-full text-left hover:text-gray-300 transition"
            >
              <span :class="{ 'text-[#24C087]': activeMenu === 'program' }">Program</span>
            </button>

            <!-- Submenu Program Mobile -->
            <ul
              v-if="activeMenu === 'program'"
              class="mt-[16px] space-y-[16px] text-base text-white/90 md:hidden pl-4"
            >
              <li>
                <RouterLink to="/tahfidz" @click="showSidebar = false" class="flex gap-6 items-center">
                  Tahfizd Qur'an
                  <i class="bi bi-chevron-right text-[#F9BF39] transition"></i>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/bilingual" @click="showSidebar = false" class="flex gap-6 items-center">
                  Bilingual
                  <i class="bi bi-chevron-right text-[#F9BF39] transition"></i>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/p5" @click="showSidebar = false" class="flex gap-6 items-center">
                  P5
                  <i class="bi bi-chevron-right text-[#F9BF39] transition"></i>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/ekstra" @click="showSidebar = false" class="flex gap-6 items-center">
                  Ekstrakurikuler
                  <i class="bi bi-chevron-right text-[#F9BF39] transition"></i>
                </RouterLink>
              </li>
            </ul>
          </li>
          <li>
            <RouterLink to="/fasilitas" @click="showSidebar = false" class="hover:text-gray-300 transition">
              Fasilitas
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/galeri" @click="showSidebar = false" class="hover:text-gray-300 transition"> Galeri </RouterLink>
          </li>
        </ul>

        <!-- Submenu Desktop -->
        <div class="hidden md:block w-2/3 pl-6">
          <ul v-if="activeMenu === 'profil'" class="space-y-4 text-white/90 text-base">
            <li>
              <RouterLink to="/about" @click="showSidebar = false" class="flex gap-6 items-center hover:text-[#F9BF39]">
                Tentang Kami
                <i class="bi bi-chevron-right transition"></i>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/core" @click="showSidebar = false" class="flex gap-6 items-center hover:text-[#F9BF39]">
                Core Value
                <i class="bi bi-chevron-right transition"></i>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/guru" @click="showSidebar = false" class="flex gap-6 items-center hover:text-[#F9BF39]">
                Dewan Guru
                <i class="bi bi-chevron-right transition"></i>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/struktur" @click="showSidebar = false" class="flex gap-6 items-center hover:text-[#F9BF39]">
                Organisasi
                <i class="bi bi-chevron-right transition"></i>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/logo" @click="showSidebar = false" class="flex gap-6 items-center hover:text-[#F9BF39]">
                Logo
                <i class="bi bi-chevron-right transition"></i>
              </RouterLink>
            </li>
          </ul>

          <ul v-if="activeMenu === 'program'" class="space-y-4 text-white/90 text-base">
            <li>
              <RouterLink to="/tahfidz" @click="showSidebar = false" class="flex gap-6 items-center hover:text-[#F9BF39]">
                Tahfizd Qur'an
                <i class="bi bi-chevron-right transition"></i>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/bilingual" @click="showSidebar = false" class="flex gap-6 items-center hover:text-[#F9BF39]">
                Bilingual
                <i class="bi bi-chevron-right transition"></i>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/p5" @click="showSidebar = false" class="flex gap-6 items-center hover:text-[#F9BF39]">
                P5
                <i class="bi bi-chevron-right transition"></i>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/ekstra" @click="showSidebar = false" class="flex gap-6 items-center hover:text-[#F9BF39]">
                Ekstrakurikuler
                <i class="bi bi-chevron-right transition"></i>
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
          class="flex items-center justify-center gap-2 w-full bg-white/50 border border-white py-3 rounded-lg hover:bg-gray-100 transition"
        >
          <img src="@/assets/icons/whatsapp.png" alt="whatsapp" class="w-5 h-5" />
          <span class="text-base font-bold">Kontak Kami</span>
        </a>
      </div>

      <!-- Sosial Media Sidebar Mobile -->
      <div class="flex sm:hidden items-center space-x-2 md:space-x-4 pb-10">
        <a
          href="https://www.instagram.com/smpdarunnajah2karangploso?igsh=MWR2NnFiODg2MzhiMA=="
          class="w-10 h-10 md:w-[44px] md:h-[44px] bg-white/50 border border-white rounded-full hover:bg-white transition flex items-center justify-center"
        >
          <i class="bi bi-instagram text-lg md:text-xl"></i>
        </a>
        <a
          href="https://www.youtube.com/@smpdarunnajah2karangploso"
          class="w-10 h-10 md:w-[44px] md:h-[44px] bg-white/50 border border-white rounded-full hover:bg-white transition flex items-center justify-center"
        >
          <i class="bi bi-youtube text-lg md:text-xl"></i>
        </a>
      </div>
    </div>
  </transition>

  <!-- Hero Section -->
  <section class="relative min-h-screen overflow-hidden lg:px-20 md:px-10 sm:px-4">
    <!-- Carousel Background -->
    <div class="absolute inset-0">
      <div
        v-for="(img, i) in heroImages"
        :key="i"
        :class="[
          'absolute inset-0 transition-opacity duration-1000',
          currentIndex === i ? 'opacity-100 z-10' : 'opacity-0 z-0',
        ]"
      >
        <img :src="img" alt="Hero" class="w-full h-full object-cover" />
      </div>
    </div>

    <!-- Scroll Indicator Desktop -->
    <div class="hidden md:flex absolute top-[150px] right-[80px] z-40 flex-col items-center">
      <div class="text-white text-lg font-bold">{{ formatNumber(currentIndex + 1) }}</div>
      <div
        v-for="i in totalImages"
        :key="i"
        :class="[
          'w-[5px] h-[70px] rounded-full transition-all duration-300',
          currentIndex === i - 1 ? 'bg-white' : 'bg-white/50',
        ]"
      ></div>
      <div class="text-white/60 text-lg font-bold">{{ formatNumber(totalImages) }}</div>
    </div>

    <!-- Scroll Indicator Mobile -->
    <div class="md:hidden absolute top-[200px] right-[16px] z-40 flex flex-col items-center">
      <div class="text-white text-lg font-bold">{{ formatNumber(currentIndex + 1) }}</div>
      <div
        v-for="i in totalImages"
        :key="i"
        :class="[
          'w-[5px] h-[70px] rounded-full transition-all duration-300',
          currentIndex === i - 1 ? 'bg-white' : 'bg-white/50',
        ]"
      ></div>
      <div class="text-white/60 text-lg font-bold">{{ formatNumber(totalImages) }}</div>
    </div>

    <!-- Wrapper Card -->
    <div class="hidden relative z-10 min-h-screen lg:flex md:flex flex-col justify-end pb-8">
      <div class="mx-auto gap-6 max-w-7xl h-50 grid grid-cols-2 grid-rows-2">
        <!-- Card Brosur & Aktifitas -->
        <div class="row-span-2 mt-auto">
          <div
            class="bg-white/40 backdrop-blur-md rounded-xl shadow-lg p-[24px] flex flex-1 justify-between items-start"
          >
            <div class="w-1/2 pr-4">
              <h2 class="text-xl font-bold text-gray-800 mb-[8px]">Brosur PSB</h2>
              <p class="text-xs text-gray-600 mb-[16px] leading-tight">
                Informasi Penerimaan Santri baru PPAI Darun Najah 2 Karangploso
              </p>
              <button
                class="flex items-center bg-white text-[#182856] text-sm font-medium px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition"
              >
                <img src="@/assets/icons/document-download.png" alt="download" class="mr-2" /> Unduh
                Brosur
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
                <img src="@/assets/icons/note.png" alt="download" class="mr-2" /> Lihat Aktifitas
              </button>
            </div>
          </div>
        </div>

        <!-- Card Hijau -->
        <div class="flex bg-white rounded-xl shadow-lg overflow-hidden row-span-2">
          <div class="flex-1 bg-[#3C7B46] text-white p-4 flex flex-col justify-between">
            <div>
              <h3 class="text-xs text-[#8AE3C2] uppercase tracking-wide mb-1">Kabar Darun Najah</h3>
              <p class="lg:text-xl md:text-base font-semibold leading-tight">
                Kegiatan Penutupan Masa Pengenalan Lingkungan Sekolah (MPLS) dengan ...
              </p>
            </div>
            <a href="#" class="text-xs hover:text-white/80 transition">Lihat selengkapnya</a>
          </div>
          <div class="flex-1 h-full">
            <img src="@/assets/mpls.jpg" alt="MPLS" class="object-cover h-full" />
          </div>
        </div>
      </div>
    </div>

    <!-- Back to Top Button -->
    <button
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-6 py-2 bg-white shadow-md rounded-md hover:bg-gray-100 transition"
      title="Back to Top"
    >
      <span class="text-sm font-medium text-gray-700">Back to Top</span>
      <i class="bi bi-arrow-up text-[#182856] text-lg"></i>
    </button>
  </section>

  <!-- Section Khusus Mobile -->
  <section class="block md:hidden px-6 py-6 bg-gray-100 space-y-6">
    <!-- Card Hijau (MPLS) -->
    <div class="bg-white rounded-xl shadow overflow-hidden">
      <img src="@/assets/mpls.jpg" alt="MPLS" class="w-full h-auto object-cover" />
      <div class="bg-[#3C7B46] text-white p-4">
        <h3 class="text-xs text-[#8AE3C2] uppercase tracking-wide mb-2">Kabar Darun Najah</h3>
        <p class="text-xl font-semibold leading-snug">
          Kegiatan Penutupan Masa Pengenalan Lingkungan Sekolah (MPLS) dengan ...
        </p>
        <a href="#" class="text-xs pb-3 inline-block hover:text-white/80 transition"
          >Lihat selengkapnya</a
        >
      </div>
    </div>

    <!-- Brosur PSB -->
    <div>
      <h2 class="text-base font-bold text-gray-800 mb-1">Brosur PSB</h2>
      <p class="text-sm text-gray-600 mb-3">
        Informasi Penerimaan Santri baru PPAI Darun Najah 2 Malang
      </p>
      <button
        class="flex items-center gap-2 bg-[#182856] text-white text-sm font-medium px-4 py-2 rounded-lg shadow hover:bg-[#1e2e73] transition"
      >
        <img src="@/assets/icons/document-download-mobile.png" alt="download" /> Unduh Brosur
      </button>
    </div>

    <!-- Aktifitas/Kegiatan -->
    <div>
      <h2 class="text-base font-bold text-gray-800 mb-1">Aktifitas/Kegiatan</h2>
      <p class="text-sm text-gray-600 mb-3">
        Informasi Jadwal rutin harian santri PPAI Darun Najah 2 Malang
      </p>
      <button
        class="flex items-center gap-2 bg-[#182856] text-white text-sm font-medium px-4 py-2 rounded-lg shadow hover:bg-[#1e2e73] transition"
      >
        <img src="@/assets/icons/note-mobile.png" alt="download" /> Lihat Aktifitas
      </button>
    </div>
  </section>

  <!-- About Section -->
  <section class="bg-white py-[100px] px-4 sm:px-5 md:px-10 lg:px-20 max-w-7xl mx-auto">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <!-- Judul -->
      <div>
        <h2 class="text-[32px] font-bold text-[#182856] leading-snug mb-4 lg:text-left">
          PPAI Darun Najah 2<br />Karangploso
        </h2>
      </div>

      <!-- Deskripsi + Core Value -->
      <div>
        <p class="text-base text-gray-700 leading-relaxed mb-[32px] md:text-justify">
          PPAI Darun Najah 2 Karangploso merupakan lembaga pendidikan yang berada di bawah naungan
          Yayasan Pondok Pesantren Darun Najah Karangploso, yang didirikan dengan tujuan untuk
          menjaga moral umat dan mencetak kader-kader dakwah Islam di masyarakat. Didirikan oleh KH.
          Achmad Muchtar Ghozali. Hingga kini pesantren ini masih diasuh di bawah bimbingan beliau
          langsung.
        </p>

        <h3 class="text-sm font-bold text-gray-800 mb-4">Core Value</h3>

        <ul class="divide-y divide-gray-200">
          <li class="flex items-center space-x-4 py-3">
            <img src="@/assets/icons/profile.png" alt="" class="w-8 h-8" />
            <span class="text-lg font-semibold text-[#182856]">Qudwah</span>
          </li>
          <li class="flex items-center space-x-4 py-3">
            <img src="@/assets/icons/lamp-charge.png" alt="" class="w-8 h-8" />
            <span class="text-lg font-semibold text-[#182856]">Inovatif, Kreatif & Produktif</span>
          </li>
          <li class="flex items-center space-x-4 py-3">
            <img src="@/assets/icons/ranking.png" alt="" class="w-8 h-8" />
            <span class="text-lg font-semibold text-[#182856]">Semangat Prestasi</span>
          </li>
          <li class="flex items-center space-x-4 py-3">
            <img src="@/assets/icons/medal-star.png" alt="" class="w-8 h-8" />
            <span class="text-lg font-semibold text-[#182856]">Bermartabat</span>
          </li>
          <li class="flex items-center space-x-4 py-3">
            <img src="@/assets/icons/teacher.png" alt="" class="w-8 h-8" />
            <span class="text-lg font-semibold text-[#182856]">Berwawasan Global</span>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Fasilitas Section -->
  <section
    class="pb-[100px] px-[24px] sm:px-[40px] md:px-[60px] lg:px-[80px] bg-white max-w-7xl mx-auto"
  >
    <!-- Header -->
    <div class="flex justify-between items-center mb-[56px]">
      <h2 class="text-[32px] font-semibold text-[#182856]">Fasilitas kami</h2>
      <a href="#" class="hidden sm:inline text-xs text-blue-600 hover:underline font-medium"
        >Lihat Semua</a
      >
    </div>

    <!-- Scrollable Card Wrapper tanpa scrollbar -->
    <div class="overflow-x-auto whitespace-nowrap -mx-1 px-1 scrollbar-hide">
      <div class="flex gap-6 w-max">
        <!-- Card 1 -->
        <div class="min-w-[240px] max-w-[240px] flex-shrink-0">
          <div class="rounded-lg overflow-hidden shadow-sm mb-[24px]">
            <img
              src="@/assets/fasilitas/asrama.jpg"
              alt="Asrama Santri"
              class="object-cover aspect-square w-full"
            />
          </div>
          <p class="mt-2 text-xs text-gray-800">Asrama Santri</p>
        </div>

        <!-- Card 2 -->
        <div class="min-w-[240px] max-w-[240px] flex-shrink-0">
          <div class="rounded-lg overflow-hidden shadow-sm mb-[24px]">
            <img
              src="@/assets/fasilitas/madrasah.jpg"
              alt="Gedung Madrasah"
              class="object-cover aspect-square w-full"
            />
          </div>
          <p class="mt-2 text-xs text-gray-800">Gedung Madrasah</p>
        </div>

        <!-- Card 3 -->
        <div class="min-w-[240px] max-w-[240px] flex-shrink-0">
          <div class="rounded-lg overflow-hidden shadow-sm mb-[24px]">
            <img
              src="@/assets/fasilitas/komputer.png"
              alt="Laboratorium Komputer"
              class="object-cover aspect-square w-full"
            />
          </div>
          <p class="mt-2 text-xs text-gray-800">Laboratorium Komputer</p>
        </div>

        <!-- Card 4 -->
        <div class="min-w-[240px] max-w-[240px] flex-shrink-0">
          <div class="rounded-lg overflow-hidden shadow-sm mb-[24px]">
            <img
              src="@/assets/fasilitas/sains.png"
              alt="Laboratorium Sains"
              class="object-cover aspect-square w-full"
            />
          </div>
          <p class="mt-2 text-xs text-gray-800">Laboratorium Sains</p>
        </div>

        <!-- Card 1 -->
        <div class="min-w-[240px] max-w-[240px] flex-shrink-0">
          <div class="rounded-lg overflow-hidden shadow-sm mb-[24px]">
            <img
              src="@/assets/fasilitas/asrama.jpg"
              alt="Asrama Santri"
              class="object-cover aspect-square w-full"
            />
          </div>
          <p class="mt-2 text-xs text-gray-800">Asrama Santri</p>
        </div>

        <!-- Card 2 -->
        <div class="min-w-[240px] max-w-[240px] flex-shrink-0">
          <div class="rounded-lg overflow-hidden shadow-sm mb-[24px]">
            <img
              src="@/assets/fasilitas/madrasah.jpg"
              alt="Gedung Madrasah"
              class="object-cover aspect-square w-full"
            />
          </div>
          <p class="mt-2 text-xs text-gray-800">Gedung Madrasah</p>
        </div>

        <!-- Card 3 -->
        <div class="min-w-[240px] max-w-[240px] flex-shrink-0">
          <div class="rounded-lg overflow-hidden shadow-sm mb-[24px]">
            <img
              src="@/assets/fasilitas/komputer.png"
              alt="Laboratorium Komputer"
              class="object-cover aspect-square w-full"
            />
          </div>
          <p class="mt-2 text-xs text-gray-800">Laboratorium Komputer</p>
        </div>

        <!-- Card 4 -->
        <div class="min-w-[240px] max-w-[240px] flex-shrink-0">
          <div class="rounded-lg overflow-hidden shadow-sm mb-[24px]">
            <img
              src="@/assets/fasilitas/sains.png"
              alt="Laboratorium Sains"
              class="object-cover aspect-square w-full"
            />
          </div>
          <p class="mt-2 text-xs text-gray-800">Laboratorium Sains</p>
        </div>
      </div>
    </div>
    <div class="text-center pt-6">
      <a href="#" class="inline sm:hidden text-sm text-blue-600 hover:underline font-medium">
        Lihat Semua
      </a>
    </div>
  </section>

  <!-- Kabar Section -->
  <section class="bg-[#F2F3F4]">
    <div class="py-[100px] px-5 lg:px-20 md:px-10 max-w-7xl mx-auto">
      <!-- Header -->
      <div class="flex justify-between items-center mb-10">
        <h2 class="text-[32px] font-semibold text-[#080E1E]">Kabar Darun Najah</h2>
        <a href="#" class="hidden sm:inline text-xs text-blue-600 hover:underline font-medium"
          >Lihat Semua</a
        >
      </div>

      <!-- Grid utama -->
      <div class="flex flex-col lg:flex-row gap-10 [@media(width:1024px)]:gap-4">
        <!-- Kabar Utama -->
        <div class="lg:w-2/3">
          <div class="rounded-xl overflow-hidden mb-4">
            <img
              src="@/assets/kabar-utama.jpg"
              alt="MPLS"
              class="w-full aspect-video object-cover rounded-xl shadow"
            />
          </div>
          <h3 class="text-[25px] font-bold text-[#080E1E] mt-[24px] leading-snug">
            Kegiatan Penutupan Masa Pengenalan Lingkungan Sekolah (MPLS) dengan adanya
            penandatanganan deklarasi anti ...
          </h3>
          <div class="text-xs text-gray-500 mt-[24px]">Admin • 16 Agustus, 2024</div>
        </div>

        <!-- Card kecil -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 [@media(width:1024px)]:gap-3 lg:w-1/3"
        >
          <!-- Card 1 -->
          <div class="flex space-x-4">
            <img
              src="@/assets/kabar-1.png"
              alt=""
              class="w-[120px] h-[120px] [@media(width:1024px)]:w-[110px] [@media(width:1024px)]:h-[110px] rounded-lg object-cover"
            />
            <div>
              <p class="text-lg font-semibold text-[#080E1E] leading-snug line-clamp-2">
                Kunjungan lapangan mahasiswa prodi ...
              </p>
              <p class="text-xs text-gray-500 mt-[16px]">Admin • 18 Jul, 2024</p>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="flex space-x-4">
            <img
              src="@/assets/kabar-2.png"
              alt=""
              class="w-[120px] h-[120px] [@media(width:1024px)]:w-[110px] [@media(width:1024px)]:h-[110px] rounded-lg object-cover"
            />
            <div>
              <p class="text-lg font-semibold text-[#080E1E] leading-snug line-clamp-2">
                Pembelajaran wudhu bagi santri PPAI ...
              </p>
              <p class="text-xs text-gray-500 mt-[16px]">Admin • 16 Jul, 2024</p>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="flex space-x-4">
            <img
              src="@/assets/kabar-3.png"
              alt=""
              class="w-[120px] h-[120px] [@media(width:1024px)]:w-[110px] [@media(width:1024px)]:h-[110px] rounded-lg object-cover"
            />
            <div>
              <p class="text-lg font-semibold text-[#080E1E] leading-snug line-clamp-2">
                Peletakan batu pertama gedung SMP oleh ...
              </p>
              <p class="text-xs text-gray-500 mt-[16px]">Admin • 14 Jul, 2024</p>
            </div>
          </div>

          <!-- Card 4 -->
          <div class="flex space-x-4">
            <img
              src="@/assets/kabar-4.png"
              alt=""
              class="w-[120px] h-[120px] [@media(width:1024px)]:w-[110px] [@media(width:1024px)]:h-[110px] rounded-lg object-cover"
            />
            <div>
              <p class="text-lg font-semibold text-[#080E1E] leading-snug line-clamp-2">
                Placement Test Penerimaan Santri ...
              </p>
              <p class="text-xs text-gray-500 mt-[16px]">Admin • 31 Mei, 2024</p>
            </div>
          </div>
          <div class="text-center pt-6">
            <a href="#" class="inline sm:hidden text-sm text-blue-600 hover:underline font-medium">
              Lihat Semua
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Program Pembelajaran Section -->
  <section class="bg-[#0A1128]">
    <div class="py-[100px] px-5 lg:px-20 md:px-10 text-white max-w-7xl mx-auto">
      <h2 class="text-[32px] font-semibold mb-[64px]">Program <br />Pebelajaran Kami</h2>

      <!-- Program Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-[64px]">
        <div class="w-full h-[100px] bg-[#1C2331] rounded-md flex items-center gap-3 px-6 py-6">
          <img src="@/assets/quran.png" alt="Quran Icon" class="w-17 h-17" />
          <span class="font-medium text-white text-[28px]">Tahfidz Qur’an</span>
        </div>
        <div class="w-full h-[100px] bg-[#1C2331] rounded-md flex items-center gap-3 px-5 py-5">
          <img src="@/assets/bilingual.png" alt="Bilingual Icon" class="w-17 h-17" />
          <span class="font-medium text-white text-[28px]">Bilingual</span>
        </div>
        <div class="w-full h-[100px] bg-[#1C2331] rounded-md flex items-center gap-3 px-5 py-5">
          <img src="@/assets/p5.png" alt="P5 Icon" class="w-17 h-17" />
          <span class="font-medium text-white text-[28px]">P5</span>
        </div>
      </div>

      <!-- Ekstrakurikuler -->
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-2xl font-medium">Ekstrakurikuler</h3>
        <a href="#" class="hidden sm:inline text-[#6AF1C3] text-xs font-medium hover:underline"
          >Lihat Semua</a
        >
      </div>

      <!-- Scrollable Ekstrakurikuler Cards -->
      <div
        ref="scrollContainer"
        class="overflow-x-auto whitespace-nowrap -mx-1 px-1 scrollbar-hide"
      >
        <div class="flex gap-6 w-max">
          <!-- Card 1 -->
          <div class="relative group w-[335px] h-[245px] rounded-md overflow-hidden flex-shrink-0">
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
          <div class="relative group w-[335px] h-[245px] rounded-md overflow-hidden flex-shrink-0">
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
          <div class="relative group w-[335px] h-[245px] rounded-md overflow-hidden flex-shrink-0">
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

          <!-- Card 1 -->
          <div class="relative group w-[335px] h-[245px] rounded-md overflow-hidden flex-shrink-0">
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
          <div class="relative group w-[335px] h-[245px] rounded-md overflow-hidden flex-shrink-0">
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
          <div class="relative group w-[335px] h-[245px] rounded-md overflow-hidden flex-shrink-0">
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
      </div>

      <!-- Navigasi -->
      <div class="hidden md:flex gap-2 mt-8">
        <button
          @click="scrollLeft"
          class="w-[40px] h-[40px] rounded-lg bg-[#182856] flex items-center justify-center text-white"
        >
          <svg class="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <button
          @click="scrollRight"
          class="w-[40px] h-[40px] rounded-lg bg-[#3C7B46] flex items-center justify-center text-white"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div class="text-center pt-6">
        <a href="#" class="inline sm:hidden text-sm text-blue-600 hover:underline font-medium">
          Lihat Semua
        </a>
      </div>
    </div>
  </section>

  <!-- Section Banner PPDB -->
  <section class="px-5 lg:px-20 md:px-10 sm:px-4 pt-20 bg-white max-w-7xl mx-auto">
    <div
      class="flex flex-col md:flex-row items-center md:items-stretch bg-[#3A814C] rounded-xl overflow-hidden w-full h-auto md:h-[420px]"
    >
      <!-- Text Content -->
      <div
        class="flex-1 px-6 md:px-[100px] py-10 md:py-[51px] text-white flex flex-col justify-center"
      >
        <p class="text-sm md:text-base mb-2 font-semibold uppercase">PPDB</p>
        <h2 class="text-2xl md:text-[32px] lg:text-[40px] font-bold leading-snug mb-6">
          Ayok Masuk SMP<br />
          Darun Najah 2 <br />
          Karangploso
        </h2>
        <button
          class="bg-[#FFD440] text-black text-sm font-semibold px-4 py-2 rounded shadow hover:bg-yellow-400 transition w-fit"
        >
          Daftar Sekarang!
        </button>
      </div>

      <!-- Image -->
      <div class="w-full lg:w-auto flex items-end justify-center">
        <img src="@/assets/santri.png" alt="Santri" class="object-contain h-full" />
      </div>
    </div>
  </section>

  <!-- Sosmed Section -->
  <section class="py-[100px] px-4 lg:px-20 md:px-10 bg-white max-w-7xl mx-auto">
    <!-- Header -->
    <div class="flex justify-between items-center mb-[40px]">
      <h2 class="text-[32px] font-semibold text-[#182856]">Sosial Media</h2>
      <a href="#" class="hidden sm:inline text-xs text-blue-600 hover:underline font-medium"
        >Lihat Semua</a
      >
    </div>

    <!-- Instagram -->
    <div class="overflow-x-auto whitespace-nowrap -mx-1 px-1 scrollbar-hide">
      <div class="flex gap-8 w-max">
        <!-- Card 1 -->
        <div class="min-w-[255px] max-w-[255px] flex-shrink-0">
          <div class="rounded-lg overflow-hidden shadow-sm mb-[24px]">
            <img
              src="@/assets/sosmed-1.png"
              alt="Asrama Santri"
              class="object-cover aspect-square"
            />
          </div>
          <div class="flex gap-[5.6px]">
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
            <p class="mt-1 text-base font-medium">darunnajah2malang</p>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="min-w-[255px] max-w-[255px] flex-shrink-0">
          <div class="rounded-lg overflow-hidden shadow-sm mb-[24px]">
            <img
              src="@/assets/sosmed-2.png"
              alt="Gedung Madrasah"
              class="object-cover aspect-square"
            />
          </div>
          <div class="flex gap-[5.6px]">
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
            <p class="mt-1 text-base font-medium">darunnajah2malang</p>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="min-w-[255px] max-w-[255px] flex-shrink-0">
          <div class="rounded-lg overflow-hidden shadow-sm mb-[24px]">
            <img
              src="@/assets/sosmed-3.png"
              alt="Laboratorium Komputer"
              class="object-cover aspect-square"
            />
          </div>
          <div class="flex gap-[5.6px]">
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
            <p class="mt-1 text-base font-medium">darunnajah2malang</p>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="min-w-[255px] max-w-[255px] flex-shrink-0">
          <div class="rounded-lg overflow-hidden shadow-sm mb-[24px]">
            <img
              src="@/assets/sosmed-4.png"
              alt="Laboratorium Sains"
              class="object-cover aspect-square"
            />
          </div>
          <div class="flex gap-[5.6px]">
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
            <p class="mt-1 text-base font-medium">darunnajah2malang</p>
          </div>
        </div>

        <!-- Card 1 -->
        <div class="min-w-[255px] max-w-[255px] flex-shrink-0">
          <div class="rounded-lg overflow-hidden shadow-sm mb-[24px]">
            <img
              src="@/assets/sosmed-1.png"
              alt="Asrama Santri"
              class="object-cover aspect-square"
            />
          </div>
          <div class="flex gap-[5.6px]">
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
            <p class="mt-1 text-base font-medium">darunnajah2malang</p>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="min-w-[255px] max-w-[255px] flex-shrink-0">
          <div class="rounded-lg overflow-hidden shadow-sm mb-[24px]">
            <img
              src="@/assets/sosmed-2.png"
              alt="Gedung Madrasah"
              class="object-cover aspect-square"
            />
          </div>
          <div class="flex gap-[5.6px]">
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
            <p class="mt-1 text-base font-medium">darunnajah2malang</p>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="min-w-[255px] max-w-[255px] flex-shrink-0">
          <div class="rounded-lg overflow-hidden shadow-sm mb-[24px]">
            <img
              src="@/assets/sosmed-3.png"
              alt="Laboratorium Komputer"
              class="object-cover aspect-square"
            />
          </div>
          <div class="flex gap-[5.6px]">
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
            <p class="mt-1 text-base font-medium">darunnajah2malang</p>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="min-w-[255px] max-w-[255px] flex-shrink-0">
          <div class="rounded-lg overflow-hidden shadow-sm mb-[24px]">
            <img
              src="@/assets/sosmed-4.png"
              alt="Laboratorium Sains"
              class="object-cover aspect-square"
            />
          </div>
          <div class="flex gap-[5.6px]">
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
            <p class="mt-1 text-base font-medium">darunnajah2malang</p>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center pt-6">
      <a href="#" class="inline sm:hidden text-sm text-blue-600 hover:underline font-medium">
        Lihat Semua
      </a>
    </div>

    <!-- Youtube Section -->
    <div class="flex flex-col md:flex-row gap-8 mt-10">
      <!-- Card Kiri -->
      <div class="w-full md:w-[70%]">
        <div class="rounded-xl overflow-hidden mb-4 lg:h-[500px] md:h-[400]">
          <img
            src="@/assets/sosmed-5.png"
            alt="MPLS"
            class="w-full h-full object-bottom object-cover rounded-xl shadow"
          />
        </div>
        <div class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="26.9px"
            height="26.9px"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FF3D00"
              d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
            ></path>
            <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
          </svg>
          <p class="text-base text-gray-800 font-medium">PPAI Darun Najah 2 Malang</p>
        </div>
      </div>

      <!-- Card Kanan -->
      <div class="w-full md:w-[30%]">
        <div class="rounded-xl overflow-hidden mb-4 lg:h-[500px] md:h-[370px]">
          <img
            src="@/assets/sosmed-6.png"
            alt=""
            class="w-full h-full object-bottom object-cover rounded-lg"
          />
        </div>
        <div class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="26.9px"
            height="26.9px"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FF3D00"
              d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
            ></path>
            <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
          </svg>
          <p class="text-base text-gray-800 font-medium">PPAI Darun Najah 2 Malang</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Lokasi / Maps Section -->
  <section class="px-4 lg:px-20 md:px-10 pb-[80px] bg-white max-w-7xl mx-auto">
    <div
      class="relative w-full h-[550px] md:h-[600px] lg:h-[500px] rounded-xl overflow-hidden shadow-md"
    >
      <!-- Gambar Maps -->
      <img
        src="@/assets/maps.png"
        alt="Peta Lokasi"
        class="absolute inset-0 w-full h-full object-cover"
      />

      <!-- Info Card -->
      <div
        class="absolute bottom-10 left-1/2 transform -translate-x-1/2 sm:left-6 sm:translate-x-0 bg-white rounded-lg shadow-lg p-6 w-[95%] sm:w-[400px] max-w-sm space-y-4"
      >
        <h3 class="text-2xl font-bold text-gray-900 leading-tight">
          PPAI Darun Najah 2<br />
          Karangploso
        </h3>
        <p class="text-base text-[#5A5F6D] font-medium leading-snug">
          Unnamed Road, Bumi Perkasa, Ngenep, Kec. Karang Ploso, Kabupaten Malang, Jawa Timur 65152
        </p>
        <a
          href="#"
          target="_blank"
          rel="noopener"
          class="inline-block bg-yellow-400 hover:bg-yellow-500 transition text-sm text-black font-bold px-6 py-2 rounded-md shadow"
        >
          <i class="bi bi-geo-alt-fill"></i> Kunjungi Darun Najah 2
        </a>
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

      <!-- Copyright -->
      <p class="text-lg text-gray-400 text-center sm:text-left">
        Copyright ©2024 | SMP Darun Najah 2
      </p>

      <!-- Kontak Button -->
      <a
        href="#"
        target="_blank"
        class="w-full sm:w-auto flex justify-center items-center gap-2 bg-white text-black text-base font-semibold px-6 py-[18px] rounded-md shadow hover:bg-gray-200 transition"
      >
        <img src="@/assets/icons/whatsapp.png" alt="whatsapp" class="mr-[10px]" />
        Kontak Kami
      </a>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Sidebar Toggle

const showSidebar = ref(false)
const activeMenu = ref(null)

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value
  // Reset active menu saat sidebar ditutup
  if (!showSidebar.value) {
    activeMenu.value = null
  }
}

const toggleSubmenu = (menu) => {
  activeMenu.value = activeMenu.value === menu ? null : menu
}

// Scroll Pembelajaran Section
const scrollContainer = ref(null)

const scrollLeft = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: -350, behavior: 'smooth' })
  }
}

const scrollRight = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: 350, behavior: 'smooth' })
  }
}

// Back to Top Button
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Hero Section Carousel
const currentIndex = ref(0)
const heroImages = ref([])
const totalImages = ref(0)
const STORAGE_KEY = 'uploadedImages'

onMounted(() => {
  const savedImages = JSON.parse(localStorage.getItem(STORAGE_KEY))
  if (savedImages && Array.isArray(savedImages) && savedImages.length > 0) {
    heroImages.value = savedImages
    totalImages.value = savedImages.length
  } else {
    // Default gambar jika belum upload
    heroImages.value = [
      require('@/assets/homepage.jpg'),
      require('@/assets/default-hero2.jpg'),
      require('@/assets/default-hero3.jpg'),
    ]
    totalImages.value = heroImages.value.length
  }
  startCarousel()
})

let interval = null

function startCarousel() {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % heroImages.value.length
  }, 5000) // Ganti gambar setiap 5 detik
}

onUnmounted(() => {
  if (interval) clearInterval(interval)
})

// Format Nomor Indikator
function formatNumber(num) {
  return num < 10 ? `0${num}` : `${num}`
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
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.rotate-90 {
  transform: rotate(90deg);
}
</style>
