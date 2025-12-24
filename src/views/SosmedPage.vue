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

        <!-- Konten Utama -->
        <main class="pt-32 px-5 md:px-10 lg:px-20">
          <h1 class="text-3xl font-bold text-gray-800 mb-10">Sosial Media</h1>

          <!-- Instagram -->
          <section class="mb-14">
            <h2 class="text-xl font-semibold text-gray-800 mb-4">Instagram</h2>
            <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
              <img src="@/assets/sosmed-1.png" alt="Instagram 1" class="object-cover aspect-square rounded-lg" />
              <img src="@/assets/sosmed-2.png" alt="Instagram 2" class="object-cover aspect-square rounded-lg" />
              <img src="@/assets/sosmed-3.png" alt="Instagram 3" class="object-cover aspect-square rounded-lg" />
              <img src="@/assets/sosmed-4.png" alt="Instagram 4" class="object-cover aspect-square rounded-lg" />
              <img src="@/assets/sosmed-3.png" alt="Instagram 5" class="object-cover aspect-square rounded-lg" />
              <img src="@/assets/sosmed-4.png" alt="Instagram 6" class="object-cover aspect-square rounded-lg" />
            </div>
          </section>

          <!-- YouTube -->
          <section class="mb-14">
            <h2 class="text-xl font-semibold text-gray-800 mb-4">Youtube</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <img src="@/assets/sosmed-5.png" alt="Youtube 1" class="object-cover aspect-video rounded-[11.21px]" />
              <img src="@/assets/sosmed-5.png" alt="Youtube 2" class="object-cover aspect-video rounded-[11.21px]" />
            </div>

            <!-- Video Portrait -->
            <div>
              <img src="@/assets/sosmed-6.png" alt="Youtube 3" class="w-full max-w-[300px] h-[450px] rounded-lg object-cover" />
            </div>
          </section>

          <!-- Tombol -->
          <div class="flex justify-center mb-[100px]">
            <button class="flex items-center gap-[10px] px-[16px] py-[10px] bg-[#E6E6E8] rounded-lg text-[#182856] text-sm font-medium hover:bg-gray-100 transition">
              <img src="@/assets/icons/refresh-2.png" alt="Refresh Icon" class="w-6 h-6" />
              Muat Lebih Banyak
            </button>
          </div>
        </main>

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
