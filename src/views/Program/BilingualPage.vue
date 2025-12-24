<template>
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

    <!-- Hero Section -->
    <section class="relative bg-[#3C7B46] px-4 pt-[120px] pb-10 md:pb-20 flex justify-center items-center">
    <!-- Mobile Version: Gambar background terbatas ukuran -->
    <div class="block md:hidden w-[360px] h-[360px]">
        <img
        src="@/assets/program/bilingual.png"
        alt="Program Tahfidz"
        class="w-full h-full object-contain"
        />
    </div>

    <!-- Desktop Version: Gambar fleksibel penuh -->
    <div class="hidden md:block w-full max-w-5xl">
        <img
        src="@/assets/program/bilingual.png"
        alt="Program Tahfidz"
        class="w-full h-auto object-contain mx-auto"
        />
    </div>
    </section>


    <!-- Section Penjelasan Bilingual -->
    <section class="bg-white py-[100px] px-5 md:px-10 lg:px-20 pt-20 pb-[50px] max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2">
            <h2 class="text-[32px] md:text-4xl font-bold text-[#272727] mb-10">
                Program Bilingual
            </h2>
            <p class="text-base md:text-[29px] text-[#272727] leading-relaxed" >
                Program Bilingual di SMP Darun Najah 2 Karangploso bertujuan untuk membekali para santri dengan kemampuan berbahasa Inggris dan Arab, dua bahasa yang sangat penting dalam dunia global dan keilmuan Islam. Para santri tidak hanya belajar bahasa secara teori, tetapi juga menerapkannya dalam kehidupan sehari-hari di pondok. Setiap kegiatan pembelajaran melibatkan komunikasi aktif, baik di dalam kelas maupun di luar kelas, sehingga kemampuan berbahasa santri berkembang secara alami dan kontekstual.
            </p>
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

    <section class="bg-white px-5 md:px-10 lg:px-20 pt-20 pb-[100px] max-w-7xl mx-auto">
  <!-- Gambar 2 kolom -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
    <img
      src="@/assets/program/bilingual-card-1.jpg"
      alt="Santri Membaca Al-Qur'an"
      class="rounded-[16px] w-full h-[240px] md:h-[300px] object-cover"
    />
    <img
      src="@/assets/program/bilingual-card-2.jpg"
      alt="Kegiatan Mengaji"
      class="rounded-[16px] w-full h-[240px] md:h-[300px] object-cover"
    />
  </div>

  <!-- Teks di bawah gambar -->
  <div class="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed" style="letter-spacing: 0.5%;">
    <p class="text-[20px] text-[#272727]">
      Pembelajaran bilingual ini didukung oleh pengajar yang kompeten dalam kedua bahasa tersebut, serta materi yang dirancang untuk meningkatkan keterampilan komunikasi, membaca, menulis, dan memahami kedua bahasa. Program ini tidak hanya bermanfaat untuk memperkaya kecakapan akademik, tetapi juga mempersiapkan santri menghadapi berbagai tantangan di dunia global.
    </p>

    <p class="text-[20px] text-[#272727]">
     Dengan program bilingual ini, SMP Darun Najah 2 Karangploso berkomitmen untuk mencetak santri yang unggul dalam bidang agama dan akademik, serta memiliki keterampilan bahasa yang kuat. Penguasaan bahasa Inggris dan Arab akan menjadi modal penting bagi santri dalam melanjutkan pendidikan ke jenjang yang lebih tinggi, baik di dalam maupun di luar negeri. Selain itu, kemampuan berkomunikasi dalam dua bahasa ini juga meningkatkan rasa percaya diri santri untuk berinteraksi dalam lingkungan internasional.
    </p>

    
  </div>
    </section>

    <!-- Section Kegiatan Pembelajaran -->
    <section class="bg-[#080E1E]">
     <div class="px-5 md:px-10 lg:px-20 pt-20 pb-[100px] max-w-7xl mx-auto">
        <h2 class="text-white text-[24px] md:text-[32px] font-semibold mb-10">Kegiatan Pembelajaran</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <!-- Item 1 -->
            <div>
            <h3 class="text-[#898FA0] text-[48px] md:text-[72px] font-semibold mb-2">01</h3>
            <hr class="border-[#898FA0] mb-4" />
            <h4 class="text-[#8AE3C2] text-[22px] font-bold my-6">Kelas bahasa Inggris dan Arab</h4>
            <p class="text-white text-[17px] leading-[26px] tracking-[0.5px]">
               Kelas ini dirancang untuk membekali santri dengan dasar-dasar tata bahasa (grammar) dan kosakata (vocabulary) dalam bahasa Inggris dan Arab secara mendalam.
            </p>
            </div>

             <!-- Item 2 -->
            <div>
            <h3 class="text-[#898FA0] text-[48px] md:text-[72px] font-semibold mb-2">02</h3>
            <hr class="border-[#898FA0] mb-4" />
            <h4 class="text-[#8AE3C2] text-[22px] font-bold my-6">Debat dalam bahasa asing</h4>
            <p class="text-white text-[17px] leading-[26px] tracking-[0.5px]">
               Kegiatan debat dalam bahasa Inggris dan Arab merupakan salah satu metode yang efektif untuk melatih kemampuan santri dalam berargumentasi dan berbicara di depan umum.
            </p>
            </div>

             <!-- Item 3 -->
            <div>
            <h3 class="text-[#898FA0] text-[48px] md:text-[72px] font-semibold mb-2">03</h3>
            <hr class="border-[#898FA0] mb-4" />
            <h4 class="text-[#8AE3C2] text-[22px] font-bold my-6">Kegiatan storytelling</h4>
            <p class="text-white text-[17px] leading-[26px] tracking-[0.5px]">
               Kegiatan storytelling bertujuan untuk mengembangkan keterampilan bercerita santri dalam bahasa Inggris dan Arab.
            </p>
            </div>
        </div>
     </div>
    </section>

     <!-- Section Banner PPDB -->
    <section class="px-5 lg:px-20 md:px-10 sm:px-4 pt-20 pb-20 bg-white max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row items-center md:items-stretch bg-[#3A814C] rounded-xl overflow-hidden w-full h-auto md:h-[420px]">
        
        <!-- Text Content -->
        <div class="flex-1 px-6 md:px-[100px] py-10 md:py-[51px] text-white flex flex-col justify-center">
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
        <div class="w-full lg:w-auto  flex items-end justify-center">
            <img
            src="@/assets/santri.png"
            alt="Santri"
            class="object-contain h-full"
            />
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
</template>

<script setup>
import { ref } from 'vue'

const showSidebar = ref(false)
const activeMenu = ref(null)

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value
}

const toggleSubmenu = (menu) => {
  activeMenu.value = activeMenu.value === menu ? null : menu
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
