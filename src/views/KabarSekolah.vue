<template>
  <div class="relative">
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

    <!-- Main Content -->
    <section class="px-4 md:px-10 lg:px-20 md:pt-40 pt-30 md:pb-20 pb-10">
       <!-- Judul + Filter -->
      <div class="overflow-x-auto flex flex-col md:flex-row md:items-center md:justify-between mb-10 scrollbar-hide">
        <h1 class="text-[40px] font-bold text-[#0A1128] mb-4 md:mb-0">
          Kabar Sekolah
        </h1>

        <div class="flex items-center gap-1 px-1 py-1 border border-[#E6E6E8] rounded-[10px] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <RouterLink to="/berita">
            <button class="text-[#5A5F6D] font-bold text-sm px-3 py-2 hover:text-[#3C7B46]">
              Semua
            </button>
          </RouterLink>
          <RouterLink to="/kabar">
            <button class="bg-[#3C7B46] text-white font-bold text-sm px-3 py-2 rounded-[8px]">
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

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-[2.5fr_1fr] gap-10 mb-[28px]">
        <!-- Konten Berita -->
        <div class="space-y-10">
          <!-- Card Berita 1 -->
          <div class="flex flex-col md:flex-row items-start">
            <img src="@/assets/mpls.jpg" alt="MPLS" class="w-full h-[180px] md:w-[240px] md:h-[200px] lg:w-[300px] lg:h-[200px] object-cover rounded-xl"/>
            <div class="flex flex-col justify-start md:px-10 md:py-6 mt-4 md:mt-0">
              <p class="text-sm text-[#272727] font-medium mb-4">Admin • 16 Agu, 2024</p>
              <h3 class="text-xl text-[#272727] font-bold leading-snug mb-4 line-clamp-2">
                Kegiatan Penutupan Masa Pengenalan Lingkungan Sekolah (MPLS) dengan ada ...
              </h3>
              <router-link
                to="/detail2"
                class="text-xs text-[#182856] font-medium inline-flex items-center gap-2 border border-[#898FA0] px-4 py-[11.5px] rounded-lg w-max transition"
              >
                Lanjut Membaca
                <span class="text-lg ml-1">
                  <img src="@/assets/arrow-right.png" alt="arrow-right" class="w-6 h-6" />
                </span>
              </router-link>
            </div>
          </div>

          <!-- Card Berita 2 -->
          <div class="flex flex-col md:flex-row items-start">
            <img src="@/assets/kabar-1.png" alt="MPLS" class="w-full h-[180px] md:w-[240px] md:h-[200px] lg:w-[300px] lg:h-[200px] object-cover rounded-xl"/>
            <div class="flex flex-col justify-start md:px-10 md:py-6 mt-4 md:mt-0">
              <p class="text-sm text-[#272727] font-medium mb-4">Admin • 18 Jul, 2024</p>
              <h3 class="text-xl text-[#272727] font-bold leading-snug mb-4 line-clamp-2">
                Kunjungan Lapangan Mahasiswa Prodi Studi Lembaga Pendidikan Islam STAI Ma’had ...
              </h3>
              <a href="#" class="text-xs text-[#182856] font-medium inline-flex items-center gap-2 border border-[#898FA0] px-4 py-[11.5px] rounded-lg w-max transition">
                Lanjut Membaca
               <span class="text-lg ml-1">
                 <img src="@/assets/arrow-right.png" alt="arrow-right" class="w-6 h-6" />
               </span>
              </a>
            </div>
          </div>

          <!-- Card Berita 3 -->
          <div class="flex flex-col md:flex-row items-start">
            <img src="@/assets/kabar-3.png" alt="MPLS" class="w-full h-[180px] md:w-[240px] md:h-[200px] lg:w-[300px] lg:h-[200px] object-cover rounded-xl"/>
            <div class="flex flex-col justify-start md:px-10 md:py-6 mt-4 md:mt-0">
              <p class="text-sm text-[#272727] font-medium mb-4">Admin • 18 Jul, 2024</p>
              <h3 class="text-xl text-[#272727] font-bold leading-snug mb-4 line-clamp-2">
                Kunjungan Lapangan Mahasiswa Prodi Studi Lembaga Pendidikan Islam STAI Ma’had ...
              </h3>
              <a href="#" class="text-xs text-[#182856] font-medium inline-flex items-center gap-2 border border-[#898FA0] px-4 py-[11.5px] rounded-lg w-max transition">
                Lanjut Membaca
               <span class="text-lg ml-1">
                 <img src="@/assets/arrow-right.png" alt="arrow-right" class="w-6 h-6" />
               </span>
              </a>
            </div>
          </div>

          <!-- Card Berita 4 -->
          <div class="flex flex-col md:flex-row items-start">
            <img src="@/assets/kabar-3.png" alt="MPLS" class="w-full h-[180px] md:w-[240px] md:h-[200px] lg:w-[300px] lg:h-[200px] object-cover rounded-xl"/>
            <div class="flex flex-col justify-start md:px-10 md:py-6 mt-4 md:mt-0">
              <p class="text-sm text-[#272727] font-medium mb-4">Admin • 18 Jul, 2024</p>
              <h3 class="text-xl text-[#272727] font-bold leading-snug mb-4 line-clamp-2">
                Kunjungan Lapangan Mahasiswa Prodi Studi Lembaga Pendidikan Islam STAI Ma’had ...
              </h3>
              <a href="#" class="text-xs text-[#182856] font-medium inline-flex items-center gap-2 border border-[#898FA0] px-4 py-[11.5px] rounded-lg w-max transition">
                Lanjut Membaca
               <span class="text-lg ml-1">
                 <img src="@/assets/arrow-right.png" alt="arrow-right" class="w-6 h-6" />
               </span>
              </a>
            </div>
          </div>
        </div>

       <aside class="hidden md:flex flex-col space-y-6 items-start">
          <!-- Arsip -->
          <div class="w-full max-w-xs">
            <h4 class="text-2xl font-bold text-[#272727] mb-6">Arsip</h4>
            <ul class="text-sm text-blue-900 border-l border-gray-400">
              <li class="px-6 py-4 border-b border-gray-300">
                <a href="#" class="text-base text-[#182856]">2022</a>
              </li>
              <li class="px-6 py-4 border-b border-gray-300">
                <a href="#" class="text-base text-[#182856]">2023</a>
              </li>
            </ul>
          </div>
       </aside>
      </div>

      <!-- Arsip Mobile -->
      <div class="w-full max-w-xs md:hidden">
            <h4 class="text-2xl font-bold text-[#272727] mb-6">Arsip</h4>
            <ul class="text-sm text-blue-900 border-l border-gray-400">
              <li class="px-6 py-4 border-b border-gray-300">
                <a href="#" class="text-base text-[#182856]">2022</a>
              </li>
              <li class="px-6 py-4 border-b border-gray-300">
                <a href="#" class="text-base text-[#182856]">2023</a>
              </li>
            </ul>
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
