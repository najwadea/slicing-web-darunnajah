<template>
  <div class="relative">
    <!-- Kembali -->
    <div class="px-5 md:px-10 lg:px-20 pt-[100px]">
      <router-link to="/kabar" class="text-base font-medium">
        👈   Kembali
      </router-link>
    </div>

    <!-- Main Content -->
    <section class="px-4 md:px-10 lg:px-20 py-10 md:py-20">
      <div class="grid grid-cols-1 md:grid-cols-[2.5fr_1fr] gap-10">
        <!-- Konten Berita -->
        <div>
          <h1 class="text-2xl md:text-4xl font-bold text-[#272727] mb-4 leading-snug">
            Kegiatan Penutupan Masa Pengenalan Lingkungan Sekolah (MPLS) dengan adanya penandatanganan deklarasi anti kekerasan dan bullying
          </h1>
          <p class="text-sm text-[#272727] font-medium mb-10">Admin • 16 Agu, 2024</p>
          
          <img src="@/assets/mpls.jpg" alt="MPLS" class="rounded-xl mb-6 w-full max-h-[500px] object-cover" />
          
          <div class="py-10 space-y-6 text-lg text-justify text-[#272727] leading-relaxed">
            <p>
              Pondok Pesantren PPAI Darun Najah 2 Malang (PPAI Darun Najah 2) adalah lembaga pendidikan yang didirikan oleh KH. Achmad Muchtar Ghozali. Pesantren ini berada di bawah naungan Yayasan Pondok Pesantren Darun Najah Karangploso MalLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ang. Tujuan pendiriannya adalah untuk menjaga moral umat dan mencetak kader-kader dakwah Islam di masyarakat.
            </p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
            <p>
             The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            </p>
          </div>
        </div>

        <!-- Sidebar Arsip -->
        <aside class="hidden md:flex flex-col space-y-6">
          <div>
            <h4 class="text-2xl font-bold text-[#272727] mb-6">Arsip</h4>
            <ul class="text-sm text-blue-900 border-l border-gray-400">
              <li class="px-6 py-4 border-b border-gray-300">
                <a href="#" class="text-base text-[#182856] hover:underline">2022</a>
              </li>
              <li class="px-6 py-4 border-b border-gray-300">
                <a href="#" class="text-base text-[#182856] hover:underline">2023</a>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <!-- Arsip Mobile -->
      <div class="w-full max-w-xs md:hidden mt-10">
        <h4 class="text-2xl font-bold text-[#272727] mb-6">Arsip</h4>
        <ul class="text-sm text-blue-900 border-l border-gray-400">
          <li class="px-6 py-4 border-b border-gray-300">
            <a href="#" class="text-base text-[#182856] hover:underline">2022</a>
          </li>
          <li class="px-6 py-4 border-b border-gray-300">
            <a href="#" class="text-base text-[#182856] hover:underline">2023</a>
          </li>
        </ul>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-[#0A1128] px-4 lg:px-20 md:px-10 py-6 text-white">
      <div class="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:items-center">
        <img src="@/assets/dn2.png" alt="Logo DN2" class="h-[40px]" />
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
</script>

<style scoped>
</style>
