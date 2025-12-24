<template>
  <div class="flex min-h-screen bg-[#F5FDFC]">
    <!-- Header Tablet dan Mobile -->
    <div class="lg:hidden fixed top-0 left-0 right-0 z-50 py-[28px] pl-[40px] bg-white border-b border-blue-200 shadow flex items-center justify-between">
      <button @click="sidebarOpen = true">
        <img src="@/assets/menu.png" alt="menu-settings">
      </button>
    </div>

    <!-- Sidebar Desktop -->
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
              <RouterLink to="/about" class="px-2 py-1 block text-[#080E1E] font-bold">
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
        <div class="p-4 border-b border-blue-200 flex justify-between items-center">
          <button class="text-sm text-blue-800 font-medium hover:text-blue-600 flex items-center gap-1" @click="sidebarOpen = false">
            <img src="@/assets/menu.png" alt="">
          </button>
        </div>
        <nav class="p-4 space-y-1 text-base">
          <RouterLink to="/" class="font-semibold text-[#182856] mb-6 mt-6 flex items-center gap-2">
          👈 Kembali ke beranda
          </RouterLink>  
          <ul class="space-y-3 text-[#5A5F6D]">
            <li>
              <RouterLink to="/about" class="px-2 py-1 block text-[#080E1E] font-bold">
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
      <div class="mb-6">
        <div class="flex items-center gap-4 mb-4 py-4">
          <img src="@/assets/logo-darunnajah.png" alt="Logo" class="w-17 h-17" />
          <h1 class="text-2xl font-bold text-[#09323F] leading-tight">
            SMP DARUN NAJAH 2<br />KARANGPLOSO
          </h1>
        </div>
        <p class="text-lg text-justify">
          Pondok Pesantren PPAI Darun Najah 2 Malang (PPAI Darun Najah 2) adalah lembaga pendidikan yang didirikan oleh KH. Achmad Muchtar Ghozali. Pesantren ini berada di bawah naungan Yayasan Pondok Pesantren Darun Najah Karangploso Malang. Tujuan pendiriannya adalah untuk menjaga moral umat dan mencetak kader-kader dakwah Islam di masyarakat.<br /><br />
          PPAI Darun Najah 2 telah berdiri sejak tahun 1969 dan terus melakukan elaborasi dengan menyesuaikan kondisi zaman, namun tetap berpegang teguh pada prinsip Ahlussunnah wal al Jamaah. Pesantren ini membekali para santrinya dengan keunggulan Kajian Kitab Kuning, Tahfidz Qur’an, Penguasaan Bahasa Arab, dan Inggris. Selain itu, pesantren juga mengembangkan program keilmuan dan keterampilan sesuai dengan ritme dan potensi santri.
        </p>
      </div>

      <!-- Visi -->
      <section class="mb-10">
        <h2 class="text-2xl font-bold mb-3">Visi</h2>
        <p class="mb-2 text-lg">
          Terwujudnya Sekolah Unggul dan Pusat Rujukan dalam membentuk Pemimpin Alim yang Intelek, Berwawasan Global dan Berkepribadian.
        </p>
        <p class="mb-6 text-lg">
          Visi tersebut memiliki 5 (lima) makna besar yang ingin dicapai dalam periode lima tahun ke depan, yaitu: Unggul, Pusat Rujukan, Alim Intelek, Berwawasan Global, dan Berkepribadian.
        </p>

        <div class="grid gap-y-6">
          <!-- Unggul -->
          <div class="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 items-start">
            <strong class="text-[#182856]">Unggul</strong>
            <p class="text-lg">Membangun Sistem Informasi Manajemen Sekolah Berbasis Teknologi Informasi dengan mengacu Mutu Standar Nasional Pendidikan yang mendorong semangat keunggulan</p>
          </div>

          <!-- Pusat Rujukan -->
          <div class="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 items-start">
            <strong class="text-[#182856]">Pusat Rujukan</strong>
            <p class="text-lg">Membangun pusat pendidikan yang bertumpu pada kekhasan Bahasa Arab yang Unggul</p>
          </div>

          <!-- Alim Intelek -->
          <div class="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 items-start">
            <strong class="text-[#182856]">Alim Intelek</strong>
            <div>
              <p class="text-lg mb-3">Mewujudkan lulusan yang menggabungkan keilmuan agama yang mendalam dengan pemikiran kritis, analitis dan rasional dalam berbagai aspek kehidupan. Komponen utama dalam Alim Intelek:</p>
              <p class="font-bold text-lg">Keilmuan agama yang mendalam:</p>
              <ul class="list-disc pl-5 text-lg mt-2 space-y-2">
                <li>Menguasai ilmu-ilmu dasar Islam seperti tafsir, hadis, fiqih, dan ushuluddin</li>
                <li>Menghayati dan mengamalkan ajaran agama dalam kehidupan sehari-hari, serta memiliki hubungan yang mendalam dengan Allah</li>
              </ul>
              <p class="font-bold text-lg">Kritis dan rasional (Intelek):</p>
              <ul class="list-disc pl-5 text-lg mt-2 space-y-2">
                <li>Kemampuan Analitis: Mampu menganalisis masalah dengan pendekatan logis dan kritis.</li>
                <li>Pengetahuan Umum: Menguasai ilmu pengetahuan kontemporer, teknologi, dan pemahaman global.</li>
              </ul>
              <p class="font-bold text-lg">Integrasi Keilmuan dan Moralitas:</p>
              <ul class="list-disc pl-5 text-lg mt-2 space-y-2">
                <li>Etika dan Moralitas: Mengaplikasikan prinsip-prinsip moral dan etika Islam dalam berpikir dan bertindak.</li>
                <li>Pemahaman Kontekstual: Memahami konteks zaman dan menerapkan ajaran agama dengan cara yang relevan dan bijaksana.</li>
              </ul>
              <p class="font-bold text-lg">Kontribusi pada masyarakat</p>
              <ul class="list-disc pl-5 text-lg mt-2 space-y-2">
                <li>Pengabdian Sosial: Terlibat dalam kegiatan yang bermanfaat bagi masyarakat dan berkontribusi pada pembangunan sosial.</li>
              </ul>
              <p class="font-bold text-lg">Integrasi Keilmuan dan Moralitas:</p>
              <ul class="list-disc pl-5 text-lg mt-2 space-y-2">
                <li>Rasa Ingin Tahu: Terus belajar dan mencari pengetahuan baru, baik dalam ilmu agama maupun ilmu umum.</li>
                <li>Adaptasi dan Inovasi: Mampu beradaptasi dengan perubahan zaman dan berinovasi dalam menghadapi tantangan baru.</li>
              </ul>
            </div>
          </div>

          <!-- Berwawasan Global -->
          <div class="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 items-start">
            <strong class="text-[#182856]">Berwawasan Global</strong>
            <p class="text-lg">Mewujudkan Civitas Akademika yang sadar, terampil, dan bertanggung jawab. Visi ini menekankan pentingnya mengembangkan pemahaman internasional, keterampilan lintas budaya, dan kemampuan untuk berkolaborasi secara global.</p>
          </div>

          <!-- Berkebangsaaan -->
          <div class="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 items-start">
            <strong class="text-[#182856]">Berkebangsaan</strong>
            <p class="text-lg">Memelihara dan melestarikan identitas nasional yang kuat dan cinta tanah air. Ini mencakup pemahaman tentang sejarah, budaya, dan nilai-nilai nasional serta komitmen untuk berkontribusi pada pembangunan bangsa. Visi ini penting dalam membentuk generasi yang memiliki rasa kebanggaan, tanggung jawab, dan keinginan untuk menjaga serta memajukan negara mereka.</p>
          </div>
        </div>
      </section>


      <!-- Misi -->
      <section>
        <h2 class="text-2xl font-bold mb-3">Misi</h2>
        <ol class="list-decimal pl-5">
          <li class="text-lg">Membangun Sistem Informasi Manajemen Sekolah Berbasis Teknologi Informasi dengan mengacu Mutu Standar Nasional Pendidikan yang mendorong semangat keunggulan</li>
          <li class="text-lg">Menyelenggarakan pendidikan yang menghasilkan lulusan berkualitas akademik dan non-akademik berjiwa pemimpin dengan keluasan wawasan agama dan keluhuran Akhlak</li>
          <li class="text-lg">Menciptakan budaya moderat dalam berucap, berpikir dan bertindak atas budaya, agama, pandangan serta dinamika global dalam setiap aspek kehidupan.</li>
          <li class="text-lg">Mewujudkan dan menumbuhkan semangat kebangsaan, kesadaran sejarah, rasa memiliki dan berperan aktif dalam pembangunan bangsa.</li>
        </ol>
        <p class="text-lg text-justify pt-3">
          Setiap Visi dan Misi diterjemahkan ke dalam tujuan dan sasaran yang selanjutnya menjadi target dan panduan implementasi SMP Darun Najah 2 Karangploso untuk setiap periodenya.
        </p>
        <p class="text-lg text-justify pt-3">
          Perumusan tujuan dan sasaran merupakan salah satu tahap untuk mencapai perencanaan kebijakan dalam mengatasi permasalahan yang dihadapi SMP Darun Najah 2 Karangploso.
        </p>
        <!-- Misi 1 -->
        <div class="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 items-start pt-3">
          <strong class="text-[#182856]">Misi Pertama</strong>
          <p class="text-lg">Membangun Sistem Informasi Manajemen Sekolah Berbasis Teknologi Informasi dengan mengacu Mutu Standar Nasional Pendidikan yang mendorong semangat keunggulan</p>
        </div>
        <!-- Tujuan Misi Pertama -->
        <div class="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 items-start pt-3">
          <strong class="text-[#182856]">Tujuan Misi Pertama</strong>
          <p class="text-lg">Terlaksana tata kelola sekolah yang berbasis IT dan Sistem Penjaminan Mutu yang unggul</p>
        </div>
        <!-- Indikator Tujuan -->
        <div class="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 items-start pt-3">
          <strong class="text-[#182856]">Indikator Tujuan</strong>
          <ol class="list-decimal pl-5">
            <li class="text-lg">Indeks Peningkatan tata kelola Sekolah</li>
            <li class="text-lg">Indeks Profesionalitas Pendidik dan Tenaga Kependidikan</li>
            <li class="text-lg">Indeks budaya mutu pendidikan</li>
          </ol>
        </div>
        <!-- Sasaran Kegiatan -->
        <div class="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 items-start pt-3">
          <strong class="text-[#182856]">Sasaran Kegiatan</strong>
          <ol class="list-decimal pl-5">
            <li class="text-lg">Meningkatnya tata kelola organisasi yang adaptif dan dinamis, berbasis sistem teknologi dan informasi yang terintegrasi</li>
            <li class="text-lg">Meningkatnya sarana prasarana yang terstandar Nasional</li>
            <li class="text-lg">Meningkatnya kualitas pendidik yang kompeten dan profesional</li>
            <li class="text-lg">Meningkatnya kualitas penilaian bagi GTK dan peserta didik untuk peningkatan kompetensi</li>
            <li class="text-lg">Meningkatnya kualitas Standar Penjaminan Mutu Pendidikan</li>
            <li class="text-lg">Meningkatnya budaya bersih, melayani dan responsive</li>
          </ol>
        </div>
        <!-- Misi Kedua -->
        <div class="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 items-start pt-3">
          <strong class="text-[#182856]">Misi Kedua</strong>
          <p class="text-lg">Menyelenggarakan pendidikan yang menghasilkan lulusan berkualitas akademik dan non-akademik berjiwa pemimpin dengan keluasan wawasan agama dan keluhuran Akhlak</p>
        </div>
        <!-- Tujuan Misi Kedua -->
        <div class="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 items-start pt-3">
          <strong class="text-[#182856]">Tujuan Misi Kedua</strong>
          <p class="text-lg">Terwujudnya SMP Darun Najah 2 Karangploso yang berkualitas, berjiwa pemimpin dengan keluasan wawasan agama dan keluhuran Akhlak</p>
        </div>
        <!-- Indikator Tujuan -->
        <div class="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 items-start pt-3">
          <strong class="text-[#182856]">Indikator Tujuan</strong>
          <ol class="list-decimal pl-5">
            <li class="text-lg">Indeks kualitas pendidik sesuai bidangnya</li>
            <li class="text-lg">Indeks kualitas peserta didik</li>
            <li class="text-lg">Indeks kualitas peserta didik</li>
          </ol>
        </div>
        <!-- Sasaran Kegiatan -->
        <div class="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 items-start pt-3">
          <strong class="text-[#182856]">Sasaran Kegiatan</strong>
          <ol class="list-decimal pl-5">
            <li class="text-lg">Terselenggaranya pembelajaran yang berkualitas, inovatif, dan berbasis IT</li>
            <li class="text-lg">Terwujudnya peserta didik yang unggul dan berprestasi</li>
            <li class="text-lg">Terciptanya jiwa kepemimpinan yang agamis intelek</li>
            <li class="text-lg">Terwujudnya lulusan yang unggul dan berprestasi</li>
          </ol>
        </div>
      </section>
      
      <!-- Footer -->
      <div class="mt-12 border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between md:items-center text-sm px-1">
        <RouterLink to="/core" class="flex flex-col text-right group">
          <span class="text-gray-700 flex items-center gap-1 text-base">
          Berikutnya <span class="text-xl"><img src="@/assets/arrow-right.png" alt="" class="pt-1"/></span>
        </span>
        </RouterLink>
        <RouterLink to="/core" class="text-right group">
          <span class="text-2xl font-bold text-black">Core Value</span>
        </RouterLink>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const activeSubmenu = ref(null)
const sidebarOpen = ref(false)

function toggleSubmenu(menu) {
  activeSubmenu.value = activeSubmenu.value === menu ? null : menu
}
</script>
