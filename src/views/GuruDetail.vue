<template>
  <div class="flex min-h-screen bg-[#F5FDFC]">
    <!-- Sidebar Tablet dan Mobile -->
    <aside class="hidden lg:flex flex-col pl-5 w-70 min-h-screen bg-white border-r border-blue-200 shadow fixed top-0 left-0 z-40">
      <div class="p-4 border-b border-blue-200">
        <button>
          <img src="@/assets/menu.png" alt="">
        </button>
      </div>
      <nav class="p-4 space-y-1 text-base">
        <RouterLink to="/" class="font-semibold text-[#182856] mb-6 mt-6 flex items-center gap-2">
         👈 Kembali ke beranda
        </RouterLink>    
        <ul class="space-y-3 text-[#5A5F6D]">
            <li>
              <RouterLink
                to="/about"
                class="px-2 py-1 block hover:text-[#080E1E] hover:font-bold transition"
              >
                Tentang Kami
              </RouterLink>
            </li>

            <li>
              <RouterLink
                to="/core"
                class="px-2 py-1 block hover:text-[#080E1E] hover:font-bold transition"
              >
                Core Value
              </RouterLink>
            </li>

            <li>
              <RouterLink
                to="/guru"
                class="px-2 py-1 text-[#080E1E] font-bold"
              >
                Dewan Guru/Asatidz
              </RouterLink>
            </li>

            <li>
              <RouterLink
                to="/struktur-organisasi"
                class="px-2 py-1 block hover:text-[#080E1E] hover:font-bold transition"
              >
                Struktur Organisasi
              </RouterLink>
            </li>

            <li>
              <RouterLink
                to="/logo"
                class="px-2 py-1 block hover:text-[#080E1E] hover:font-bold transition"
              >
                Logo
              </RouterLink>
            </li>
        </ul>
      </nav>
    </aside>

   <!-- Main Content -->
    <main class="flex-1 w-full px-6 md:px-12 lg:px-[160px] py-10 pt-[64px] lg:ml-[280px] bg-white">
      <!-- Kembali -->
      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm font-medium mb-6 gap-1 sm:gap-0">
        <RouterLink to="/guru" class="text-[#6B7280] hover:text-[#374151] inline-flex items-center mb-3">
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Kembali
        </RouterLink>
        <div class="text-[#0A1E3F] sm:text-right">
            Dewan Guru /<span class="text-[#3C7B46]"> Detail</span>
        </div>
      </div>

      <!-- Konten Profil -->
      <div class="flex flex-col md:flex-row gap-10 items-start">
        <img src="@/assets/guru-2.jpg" alt="Ahmad Zaenal Abidin" class="w-64 h-auto rounded-xl shadow-md" />
        <div class="flex-1">
          <h1 class="text-3xl font-bold text-[#0A1E3F] mb-6">Ahmad Zaenal Abidin, Lc., MA.</h1>
          <div class="mb-6">
            <h2 class="text-base font-semibold text-[#1D3A70] mb-1">Jabatan</h2>
            <p class="text-[#111827]">Guru Bahasa Arab</p>
          </div>
          <div class="mb-6">
            <h2 class="text-base font-semibold text-[#1D3A70] mb-1">Riwayat Pendidikan</h2>
            <ul class="list-disc pl-5 space-y-1 text-[#111827]">
              <li>SDN 12 Pagi Petang Jakarta</li>
              <li>SMP ponpes Tahfidzul Qur'an Ulul Albab</li>
              <li>SMA ponpes Tahfidzul Qur'an Daarul Fithrah</li>
              <li>S1 Universitas Al-Azhar, Kairo</li>
              <li>S2 UIN Maliki, Malang</li>
            </ul>
          </div>
          <div class="mb-6">
            <h2 class="text-base font-semibold text-[#1D3A70] mb-1">Pengalaman</h2>
            <ul class="list-disc pl-5 space-y-1 text-[#111827]">
              <li>Guru PAI SMAN 3 Malang, 2013–2021</li>
              <li>Guru Tahfidz Qur'an Camp bersama BSI, 2020</li>
              <li>Guru Fiqih & Tahfidz Pesantren Mahasiswa Al-Furqon, 2014–2019</li>
            </ul>
          </div>
          <div>
            <h2 class="text-base font-semibold text-[#1D3A70] mb-1">Prestasi</h2>
            <ul class="list-disc pl-5 space-y-1 text-[#111827]">
              <li>Hafidz 30 Juz (Mutqin)</li>
              <li>Juara 3 Lomba Da'i bersama Telkomsel Tingkat Provinsi Jawa Timur, 2019</li>
              <li>Juara 1 Lomba MTQ Nasional Cabang MFQ di Medan, 2018</li>
            </ul>
          </div>
        </div>
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
