<template>
  <div class="flex min-h-screen bg-[#F5FDFC]">
    <!-- Header Tablet dan Mobile -->
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
              <RouterLink to="/core" class="px-2 py-1 block hover:text-[#080E1E] hover:font-bold transition">
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
              <RouterLink to="/logo" class="px-2 py-1 block text-[#080E1E] font-bold">
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
              <RouterLink to="/core" class="px-2 py-1 block hover:text-[#080E1E] hover:font-bold transition">
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
              <RouterLink to="/logo" class="px-2 py-1 block text-[#080E1E] font-bold">
                Logo
              </RouterLink>
            </li>
          </ul>
        </nav>
      </aside>
    </div>

    <!-- Main Content -->
    <main class="flex-1 w-full px-10 lg:px-[160px] md:px-20 py-10 pt-[120px] lg:ml-[280px] bg-white">
      <h1 class="text-4xl font-bold text-[#09323F] mb-10">Logo</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Logo Full -->
        <div>
          <h2 class="text-xl font-bold mb-4">Logo Full</h2>
          <div class="flex items-center gap-4">
            <img src="@/assets/logo-darunnajah.png" alt="Logo Full" class="h-[71.63px] w-[75.63px] object-contain" />
            <div class="text-[17.36px] text-left leading-snug">
              <div class="text-black">PONDOK PESANTREN</div>
              <div class="font-bold text-[#1A1C23]">PPAI DARUN NAJAH 2 <br /> MALANG</div>
            </div>
          </div>
          <button class="mt-6 flex items-center gap-2 bg-[#E6E6E8] pr-[16px] pl-[8px] py-[10px] rounded-md text-sm font-medium">
            <img src="@/assets/icons/document-download.png" alt="document-download">
            Unduh file gambar
          </button>
        </div>

        <!-- Logogram -->
        <div>
          <h2 class="text-xl font-bold mb-4">Logogram</h2>
           <img src="@/assets/logo-darunnajah.png" alt="Logogram" class="h-[71.63px] w-[75.63px] object-contain" />
          <button class="mt-6 flex items-center gap-2 bg-[#E6E6E8] pr-[16px] pl-[8px] py-[10px] rounded-md text-sm font-medium">
            <img src="@/assets/icons/document-download.png" alt="document-download">
            Unduh file gambar
          </button>
        </div>
      </div>

      <!-- Footer -->
      <div class="mt-20 border-t border-gray-200 pt-6 px-1 text-sm flex flex-col md:flex-row justify-between gap-6">
        <RouterLink to="/struktur" class="flex flex-col text-left group w-full md:w-auto pb-6 border-b border-gray-200 md:border-0">
          <div class="flex items-center text-gray-600 text-sm">
            <span class="mr-1">←</span>Sebelumnya
          </div>
          <span class="text-xl font-bold text-black group-hover:underline">Struktur Organisasi</span>
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
