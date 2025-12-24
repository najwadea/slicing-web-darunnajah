<template>
  <div class="flex min-h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-[#0B1120] text-white flex flex-col justify-between">
      <div>
        <!-- Logo -->
        <div class="pl-10 pr-[55.87px] py-10 flex items-center gap-[9.2px]">
          <img src="@/assets/logo-darunnajah.png" alt="Logo" class="h-9 w-9 object-cover" />
          <span class="font-bold text-[10px] leading-tight">
            SMP DARUN NAJAH 2<br />KARANGPLOSO
          </span>
        </div>

        <!-- Sidebar Menu -->
        <nav class="pl-6 pr-5 flex-1 space-y-1 text-sm">
          <!-- Beranda -->
          <div class="flex items-center gap-3 px-4 py-[15.5px] rounded text-[#5A5F6D] text-xs cursor-pointer">
            <img src="@/assets/slideshow/beranda.png" alt="icon" class="w-5 h-5 object-contain" />
            <span>Beranda</span>
          </div>

          <!-- Tentang Kami -->
          <div class="flex flex-col gap-1">
            <div class="flex items-center gap-3 px-4 py-[15.5px] rounded hover:bg-gray-700 cursor-pointer">
              <img src="@/assets/slideshow/tentang-kami.png" alt="icon" class="w-5 h-5 object-contain" />
              <span class="flex-1 ">Tentang Kami</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>

          <!-- Slideshow (aktif) -->
          <div class="flex items-center gap-3 px-4 py-[15.5px] rounded bg-[#3C7B46] cursor-pointer">
            <img src="@/assets/slideshow/slideshow.png" alt="icon" class="w-5 h-5 object-contain filter invert brightness-0" />
            <span class="text-white">Slideshow</span>
          </div>

          <!-- Guru/Staf -->
          <div class="flex items-center gap-3 px-4 py-[15.5px] rounded text-[#5A5F6D] text-xs cursor-pointer">
            <img src="@/assets/slideshow/slideshow.png" alt="icon" class="w-5 h-5 object-contain" />
            <span>Guru/Staf</span>
          </div>

          <!-- Fasilitas -->
          <div class="flex items-center gap-3 px-4 py-[15.5px] rounded text-[#5A5F6D] text-xs cursor-pointer">
            <img src="@/assets/slideshow/slideshow.png" alt="icon" class="w-5 h-5 object-contain" />
            <span>Fasilitas</span>
          </div>

          <!-- Informasi -->
          <div class="flex items-center gap-3 px-4 py-[15.5px] rounded text-[#5A5F6D] text-xs cursor-pointer">
            <img src="@/assets/slideshow/informasi.png" alt="icon" class="w-5 h-5 object-contain" />
            <span class="flex-1">Informasi</span>
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>

          <!-- Ekstrakurikuler -->
          <div class="flex items-center gap-3 px-4 py-[15.5px] rounded text-[#5A5F6D] text-xs cursor-pointer">
            <img src="@/assets/slideshow/ekstrakurikuler.png" alt="icon" class="w-5 h-5 object-contain" />
            <span>Ekstrakurikuler</span>
          </div>

          <!-- Setting -->
          <div class="flex items-center gap-3 px-4 py-[15.5px]rounded text-[#5A5F6D] text-xs cursor-pointer">
            <img src="@/assets/slideshow/setting.png" alt="icon" class="w-5 h-5 object-contain" />
            <span>Setting</span>
          </div>
        </nav>

        <!-- Admin -->
        <div class="m-4 p-3 bg-[#111827] rounded-xl flex items-center gap-3 cursor-pointer hover:bg-gray-800 transition">
          <div class="relative w-12 h-12">
            <img src="@/assets/slideshow/profile.png" alt="Admin" class="w-full h-full rounded-full object-cover border-2 border-purple-500" />
          </div>
          <div class="flex-1">
            <p class="text-sm font-semibold">Admin</p>
            <p class="text-xs text-gray-400">Administrator</p>
          </div>
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </aside>

    <!-- Main -->
    <main class="flex-1 px-[32px] bg-[#F7F9FC] min-h-screen">
      <!-- Header -->
      <header class="bg-white py-6 flex items-center justify-between border-b border-gray-200">
        <div class="flex items-center gap-4">
          <img src="@/assets/slideshow/menu.png" alt="Menu" class="w-6 h-6 cursor-pointer"/>
        </div>
        <img src="@/assets/slideshow/notification.png" alt="Notifikasi" class="w-[32px] h-[32px] cursor-pointer" />
      </header>

      <!-- Breadcrumb -->
      <div class="pt-10 pb-6 space-y-2 text-sm">
        <h1 class="text-[32px] font-bold text-[#212122]">Slideshow</h1>
        <div class="flex flex-wrap items-center space-x-2 text-sm font-medium">
          <span class="text-[#898FA0]">Tentang Kami</span>
          <span class="text-[#5A5F6D] font-semibold">/</span>
          <span class="text-[#898FA0]">Slideshow</span>
          <span class="text-[#5A5F6D] font-semibold">/</span>
          <span class="text-[#254B2B] font-semibold">Setting Slideshow</span>
        </div>
      </div>

      <!-- Upload Section -->
      <div class="py-4">
        <div class="bg-white rounded-xl shadow px-6 py-6">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-lg font-semibold text-[#212122]">Setting Slideshow</h2>
            <button
              class="bg-[#1763D3] text-white text-xs font-bold px-6 py-[11.5px] rounded-lg transition"
              @click="triggerSaveConfirmation"
            >
              Simpan Perubahan
            </button>
          </div>

          <!-- Gambar & Upload -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <!-- Gambar Upload -->
            <div
              v-for="(img, index) in uploadedImages"
              :key="img.id"
              class="relative w-full h-64 rounded-lg overflow-hidden group border border-blue-400"
            >
              <img :src="img.url" alt="Uploaded" class="w-full h-full object-cover" />
              <!-- Overlay -->
              <div class="absolute inset-0 flex justify-end items-start gap-2 p-2 transition">
                <!-- Ganti -->
                <label class="bg-gray-600 border border-[#D6D8DB] text-white text-xs font-semibold px-[16px] py-[7.5px] rounded cursor-pointer">
                  Ganti
                  <input type="file" class="hidden" accept="image/png, image/jpeg" @change="replaceImage($event, index)" />
                </label>
                <!-- Hapus -->
                <button
                  class="bg-red-100 text-red-600 border border-red-600 text-xs font-semibold px-[7.5px] py-[7.5px] rounded cursor-pointer"
                  @click="promptRemoveImage(index)"
                >
                  <img src="@/assets/slideshow/trash.png" alt="Delete" class="w-4 h-4" />
                </button>
              </div>
            </div>

            <!-- Upload Box -->
            <div
              class="w-full h-64 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition flex items-center justify-center"
            >
              <label class="flex flex-col items-center justify-center w-full h-full cursor-pointer">
                <input type="file" class="hidden w-full h-full" accept="image/png, image/jpeg" @change="handleFileUpload" />
                <img src="@/assets/icons/gallery.png" alt="Upload Icon" class="w-10 h-10 mb-3" />
                <p class="text-xs font-bold mb-2">
                  Upload image, or <span class="text-[#0047FF]">browse</span>
                </p>
                <p class="text-[10px] text-[#808080]">1920x1080px PNG/JPG only.</p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Modal Hapus -->
    <div v-if="showConfirmModal" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg w-[500px] p-8 space-y-6 text-center shadow-lg">
        <h2 class="text-xl font-bold text-[#212122]">Konfirmasi Hapus Gambar</h2>
        <p class="text-sm text-[#6B7280]">Apakah anda yakin ingin menghapus gambar ini?</p>
        <div class="flex justify-center gap-4">
          <button class="bg-[#D32F2F] text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-[#b71c1c] transition" @click="cancelRemove">
            Batal
          </button>
          <button class="border border-[#D6D8DB] text-[#212122] px-6 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition" @click="confirmRemove">
            Ya, Hapus!
          </button>
        </div>
      </div>
    </div>

    <!-- Modal Simpan -->
    <div v-if="showConfirmSaveModal" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg w-[500px] p-8 space-y-6 text-center shadow-lg">
        <h2 class="text-xl font-bold text-[#212122]">Konfirmasi Perubahan Data</h2>
        <p class="text-sm text-[#6B7280]">Apakah anda yakin ingin menyimpan perubahan data ini?</p>
        <div class="flex justify-center gap-4">
          <button class="border border-[#D6D8DB] text-[#212122] px-6 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition" @click="cancelSave">
            Batal
          </button>
          <button class="bg-[#1763D3] text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-[#0047FF] transition" @click="confirmSave">
            Ya, Simpan!
          </button>
        </div>
      </div>
    </div>

    <!-- Notifikasi -->
    <div v-if="notification.show" class="fixed top-6 right-6 z-50 w-[350px]">
      <div
        :class="[
          'flex items-start gap-3 p-4 rounded-lg shadow transition',
          notification.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-100 text-red-800'
        ]"
      >
        <!-- Icon -->
        <div>
          <img v-if="notification.type === 'success'" src="@/assets/slideshow/tick-circle.png" alt="success" class="w-5 h-5 mt-1" />
          <img v-else src="@/assets/slideshow/info-circle.png" alt="error" class="w-5 h-5 mt-1" />
        </div>

        <!-- Text -->
        <div class="flex-1">
          <p class="font-bold" :class="notification.type === 'success' ? 'text-green-800' : 'text-red-700'">
            {{ notification.title }}
          </p>
          <p class="text-sm">{{ notification.message }}</p>
        </div>

        <!-- Close -->
        <button @click="notification.show = false" class="text-gray-500 hover:text-black">
          <img src="@/assets/slideshow/close.png" alt="close" class="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const API_URL = 'http://localhost:8000/api/slideshows' // ganti sesuai backendmu

// State
const uploadedImages = ref([]) // {id, url}
const showConfirmModal = ref(false)
const showConfirmSaveModal = ref(false) // kalau butuh modal simpan manual
const imageToRemoveIndex = ref(null)

const notification = ref({
  show: false,
  type: 'success',
  title: '',
  message: ''
})

// Ambil data gambar dari API
onMounted(async () => {
  try {
    const res = await axios.get(API_URL)
    uploadedImages.value = res.data.map(item => ({
      id: item.id,
      url: `/storage/${item.image}`
    }))
  } catch (error) {
    showNotification('error', 'Gagal', 'Tidak bisa memuat gambar dari server')
  }
})

// Upload gambar baru
async function handleFileUpload(event) {
  const file = event.target.files[0]
  if (!file) return

  const formData = new FormData()
  formData.append('image', file)

  try {
    const res = await axios.post(API_URL, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    uploadedImages.value.push({
      id: res.data.id,
      url: `/storage/${res.data.image}`
    })
    showNotification('success', 'Yeah..', 'Gambar berhasil diupload!')
} catch (error) {
  console.error('Upload error:', error.response?.data || error.message)
  showNotification('error', 'Gagal', 'Upload gagal, coba lagi!')
}
}

// Ganti gambar
async function replaceImage(event, index) {
  const file = event.target.files[0]
  if (!file) return

  const imageId = uploadedImages.value[index].id
  const formData = new FormData()
  formData.append('image', file)

  try {
    const res = await axios.post(`${API_URL}/${imageId}?_method=PUT`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    uploadedImages.value[index].url = `/storage/${res.data.image}`
    showNotification('success', 'Done', 'Gambar berhasil diganti!')
  } catch (error) {
    showNotification('error', 'Gagal', 'Tidak bisa mengganti gambar!')
  }
}

// Hapus gambar
async function confirmRemove() {
  if (imageToRemoveIndex.value !== null) {
    const imageId = uploadedImages.value[imageToRemoveIndex.value].id
    try {
      await axios.delete(`${API_URL}/${imageId}`)
      uploadedImages.value.splice(imageToRemoveIndex.value, 1)
      showNotification('success', 'Done', 'Gambar berhasil dihapus!')
    } catch (error) {
      showNotification('error', 'Gagal', 'Tidak bisa menghapus gambar!')
    }
  }
  closeModal()
}

// Tampilkan modal hapus
function promptRemoveImage(index) {
  imageToRemoveIndex.value = index
  showConfirmModal.value = true
}

function cancelRemove() {
  closeModal()
}

function closeModal() {
  showConfirmModal.value = false
  imageToRemoveIndex.value = null
}

// Jika tetap ingin pakai modal konfirmasi simpan
function triggerSaveConfirmation() {
  showConfirmSaveModal.value = true
}
function confirmSave() {
  // sekarang data langsung ke server, jadi simpan manual tidak perlu
  showNotification('success', 'Done', 'Perubahan sudah tersimpan otomatis!')
  closeSaveModal()
}
function cancelSave() {
  closeSaveModal()
}
function closeSaveModal() {
  showConfirmSaveModal.value = false
}

// Notifikasi
function showNotification(type, title, message) {
  notification.value = {
    show: true,
    type,
    title,
    message
  }
  setTimeout(() => {
    notification.value.show = false
  }, 4000)
}
</script>









