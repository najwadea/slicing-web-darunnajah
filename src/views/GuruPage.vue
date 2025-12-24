<template>
  <div class="flex min-h-screen bg-[#F5FDFC]">
    <!-- Header untuk mobile -->
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
              <RouterLink to="/guru" class="px-2 py-1 block text-[#080E1E] font-bold">
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
              <RouterLink to="/core" class="px-2 py-1 block hover:text-[#080E1E] hover:font-bold transition">
                Core Value
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/guru" class="px-2 py-1 block text-[#080E1E] font-bold">
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
      <h1 class="text-3xl font-bold text-[#09323F] mb-8">Dewan Guru</h1>

      <!-- Galeri Guru -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Card Guru 1 -->
        <RouterLink to="/detail" class="block">
          <div class="relative group overflow-hidden rounded-xl h-[334.26px] shadow">
            <img src="@/assets/guru.jpg" alt="Guru 1" class="w-full h-full object-cover" />
            <div
              class="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end">
              <div class="w-full text-start text-white p-4 translate-y-full group-hover:translate-y-0 transition duration-500">
                <p class="text-base font-semibold">Ahmad Zainal Abidin, Lc., MA.</p>
                <p class="text-sm text-gray-300">Guru Bahasa Arab</p>
              </div>
            </div>
          </div>
        </RouterLink>

        <!-- Card Guru 2 -->
        <div class="relative group overflow-hidden rounded-xl h-[334.26px] shadow">
          <img src="@/assets/guru.jpg" alt="Guru 2" class="w-full h-full object-cover" />
          <div
            class="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end">
            <div class="w-full text-start text-white p-4 translate-y-full group-hover:translate-y-0 transition duration-500">
              <p class="text-base font-semibold">Ahmad Zainal Abidin,Lc.,MA.</p>
              <p class="text-sm text-gray-300">Guru Bahasa Arab</p>
            </div>
          </div>
        </div>

        <!-- Card Guru 3 -->
        <div class="relative group overflow-hidden rounded-xl h-[334.26px] shadow">
          <img src="@/assets/guru.jpg" alt="Guru 3" class="w-full h-full object-cover" />
          <div
            class="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end">
            <div class="w-full text-start text-white p-4 translate-y-full group-hover:translate-y-0 transition duration-500">
              <p class="text-base font-semibold">Ahmad Zainal Abidin,Lc.,MA.</p>
              <p class="text-sm text-gray-300">Guru Bahasa Arab</p>
            </div>
          </div>
        </div>

        <div class="w-full h-[334.26px] bg-gray-100 rounded-xl flex items-center justify-center">
          <img src="@/assets/icons/gallery.png" alt="Placeholder" class="w-10 h-10 opacity-50" />
        </div>
      </div>

      <!-- Footer -->
      <div class="mt-12 border-t border-gray-200 pt-6 px-1 text-sm flex flex-col md:flex-row justify-between gap-6">
        <!-- Sebelumnya -->
        <RouterLink to="/core" class="flex flex-col text-left group w-full md:w-auto pb-6 border-b border-gray-200 md:border-0">
          <div class="flex items-center text-gray-600 text-sm">
            <span class="text-lg mr-1">
              <img src="@/assets/arrow-left.png" alt="arrow-left" class="w-4 h-4" />
            </span>
            Sebelumnya
          </div>
          <span class="text-xl font-bold text-black group-hover:underline">Core Value</span>
        </RouterLink>

        <!-- Berikutnya -->
        <RouterLink to="/struktur" class="flex flex-col text-left md:text-right group w-full md:w-auto">
          <div class="flex items-center justify-start md:justify-end text-gray-600 text-sm">
            Berikutnya
            <span class="text-lg ml-1">
              <img src="@/assets/arrow-right.png" alt="arrow-right" class="w-4 h-4" />
            </span>
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
