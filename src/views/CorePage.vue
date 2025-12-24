<template>
  <div class="flex min-h-screen bg-[#F5FDFC]">
    <!-- Header Tablet dan Moble -->
    <div class="lg:hidden fixed top-0 left-0 right-0 z-50 py-[28px] pl-[40px] bg-white border-b border-blue-200 shadow flex items-center justify-between">
      <button @click="sidebarOpen = true">
        <img src="@/assets/menu.png" alt="menu-settings">
      </button>
    </div>

    <!-- Sidebar Dekstop -->
    <aside class="hidden lg:flex flex-col w-[360px] h-full min-h-screen bg-white border-r border-blue-200 shadow fixed top-0 left-0 z-40">
      <div class="py-[28px] pl-[60px] border-b border-blue-200">
        <button>
          <img src="@/assets/menu.png" alt="menu-setting">
        </button>
      </div>
      <nav class="space-y-1 text-base px-20">
        <RouterLink to="/" class="font-semibold text-[#182856] mb-6 mt-6 flex items-center gap-2">
         👈 Kembali ke beranda
        </RouterLink>    
        <ul class="space-y-[10px] text-[#5A5F6D]">
            <li>
              <RouterLink to="/about" class="px-2 py-1 block hover:text-[#080E1E] hover:font-bold transition">
                Tentang Kami
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/core" class="px-2 py-1 block text-[#080E1E] font-bold">
                Core Value
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/guru" class="px-2 py-1 block hover:text-[#080E1E] hover:font-bold transition">
                Dewan Guru Asatid
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/struktur" class="px-2 py-1 block hover:text-[#080E1E] hover:font-bold transition">
                Struktur Organisasi
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/logo" class="px-2 py-1 block hover:text-[#080E1E] hover:font-bold transition">
                Logo
              </RouterLink>
            </li>
          </ul>
      </nav>
    </aside>

    <!-- Sidebar Tablet dan Mobile -->
    <div v-if="sidebarOpen" class="fixed inset-0 z-50 flex lg:hidden">
      <!-- Overlay -->
      <div class="fixed inset-0 bg-black opacity-30" @click="sidebarOpen = false"></div>

      <!-- Sidebar Panel -->
      <aside class="absolute top-0 left-0 w-full bg-white border-b border-blue-200 shadow z-50 transition-transform duration-300">
        <div class="py-[28px] pl-[40px] border-b border-blue-200 flex justify-between items-center">
          <button class="text-sm text-blue-800 font-medium hover:text-blue-600 flex items-center gap-1" @click="sidebarOpen = false">
            <img src="@/assets/menu.png" alt="menu-settings">
          </button>
        </div>
        <nav class="py-[28px] pl-20 space-y-1 text-base">
          <RouterLink to="/" class="font-semibold text-[#182856] mb-6 flex items-center gap-2">
          👈 Kembali ke beranda
          </RouterLink>  
          <ul class="space-y-3 text-[#5A5F6D]">
            <li>
              <RouterLink to="/about" class="px-2 py-1 block hover:text-[#080E1E] hover:font-bold transition">
                Tentang Kami
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/core" class="px-2 py-1 block text-[#080E1E] font-bold">
                Core Value
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/guru" class="px-2 py-1 block hover:text-[#080E1E] hover:font-bold transition">
                Dewan Guru / Asatid
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/struktur" class="px-2 py-1 block hover:text-[#080E1E] hover:font-bold transition">
                Struktur Organisasi
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/logo" class="px-2 py-1 block hover:text-[#080E1E] hover:font-bold transition">
                Logo
              </RouterLink>
            </li>
          </ul>
        </nav>
      </aside>
    </div>

    <!-- Main Content -->
    <main class="flex-1 w-full px-10 lg:px-[160px] md:px-20 py-10 pt-[120px] lg:ml-[280px] bg-white">
      <h1 class="text-4xl font-bold text-[#09323F]">Our Core Value</h1>

      <!-- Core Value Tabs -->
      <div class="overflow-x-auto scrollbar-hide py-6">
        <div class="inline-flex border border-gray-200 rounded-xl text-sm font-bold text-[#5A5F6D] whitespace-nowrap p-1 gap-[8px]">
            <!-- Tab Aktif -->
            <RouterLink to="/core">
                <button class="px-4 py-2 bg-[#3C7B46] text-white rounded-[8px]">Qudwah</button>
            </RouterLink>
            <!-- Tab lainnya -->
            <RouterLink to="/cores">
                <button class="px-4 py-2 hover:bg-gray-100">Inovatif, Kreatif & Produktif</button>
            </RouterLink>
            <button class="px-4 py-2 hover:bg-gray-100">Semangat Prestasi</button>
            <button class="px-4 py-2 hover:bg-gray-100">Bermartabat</button>
            <button class="px-4 py-2 rounded-r-xl hover:bg-gray-100">Berwawasan Global</button>
        </div>
      </div>

      <!-- Konten Qudwah -->
      <section>
        <h2 class="text-2xl font-bold text-[#09323F] mt-5 mb-3">Qudwah</h2>
        <p class="text-lg text-justify mb-4">
          Qudwah adalah istilah dalam bahasa Arab yang berarti contoh, teladan, atau panutan. Dalam konteks Islam, Qudwah sering digunakan untuk merujuk kepada individu atau kelompok yang dijadikan model perilaku karena kebaikan, akhlak mulia, dan integritas mereka.
        </p>

        <p class="text-lg mb-3">Qudwah mempunyai beberapa aspek penting:</p>
        <ul class="list-decimal pl-6 space-y-2 text-lg mb-6">
          <li>Akhlak: Sifat-sifat dan perilaku yang menunjukkan kebaikan dan moralitas tinggi.</li>
          <li>Integritas: Konsistensi dalam ucapan dan tindakan yang mencerminkan nilai-nilai yang dianut.</li>
          <li>Kepemimpinan: Kemampuan untuk mempengaruhi dan memimpin orang lain melalui contoh yang baik.</li>
        </ul>

        <p class="text-lg text-justify">
          Sehingga SMP Darun Najah 2 Karangploso senantiasa membudayakan sifat Qudwah untuk menjadi Teladan dalam Aqidah dan Iman (Keyakinan), Teladan dalam berperilaku (Akhlak), Teladan dalam Ilmu, Teladan dalam Amal dan Ibadah berlandaskan Ahlussunnah Wal Jamaah An-Nahdliyah, serta Keteladanan dalam Berkeluarga.
        </p>
      </section>

      <!-- Footer -->
      <div class="mt-12 border-t border-gray-200 pt-6 px-1 text-sm flex flex-col md:flex-row justify-between gap-6">
        <!-- Sebelumnya -->
        <RouterLink
          to="/about"
          class="flex flex-col text-left group w-full md:w-auto pb-6 border-b border-gray-200 md:border-0"
        >
          <div class="flex items-center text-gray-600 text-sm">
            <span class="text-lg mr-1">
              <img src="@/assets/arrow-left.png" alt="arrow-left" class="w-4 h-4" />
            </span>
            Sebelumnya
          </div>
          <span class="text-xl font-bold text-black group-hover:underline">Tentang Kami</span>
        </RouterLink>

        <!-- Berikutnya -->
        <RouterLink to="/guru" class="flex flex-col text-left md:text-right group w-full md:w-auto">
          <div class="flex items-center justify-start md:justify-end text-gray-600 text-sm">
            Berikutnya
            <span class="text-lg ml-1">
              <img src="@/assets/arrow-right.png" alt="arrow-right" class="w-4 h-4" />
            </span>
          </div>
          <span class="text-xl font-bold text-black group-hover:underline">Dewan Guru</span>
        </RouterLink>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const sidebarOpen = ref(false)
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
