import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '@/views/HomePage.vue'
import AboutPage from '@/views/AboutPage.vue'
import CorePage from '@/views/CorePage.vue'
import CoresPage from '@/views/CoresPage.vue'
import GuruPage from '@/views/GuruPage.vue'
import GuruDetail from '@/views/GuruDetail.vue'
import BeritaPage from '@/views/BeritaPage.vue'
import KabarSekolah from '@/views/KabarSekolah.vue'
import StrukturOrganisasi from '@/views/StrukturOrganisasi.vue'
import LogoPage from '@/views/LogoPage.vue'
import DetailBerita from '@/views/DetailBerita.vue'
import EkstrakurikulerPage from '@/views/EkstrakurikulerPage.vue'
import GaleriPage from '@/views/GaleriPage.vue'
import FasilitasPage from '@/views/FasilitasPage.vue'
import SosmedPage from '@/views/SosmedPage.vue'
import SlideshowPage from '@/views/Dashboard/SlideshowPage.vue'
import TahfidzPagePage from '@/views/Program/TahfidzPage.vue'
import BilingualPagePage from '@/views/Program/BilingualPage.vue'
import P5PagePage from '@/views/Program/P5Page.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardPage,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutPage.vue'),
    },
    {
      path: '/core',
      name: 'core',
      component: () => import('../views/CorePage.vue'),
    },
    {
      path: '/cores',
      name: 'cores',
      component: () => import('../views/CoresPage.vue'),
    },
    {
      path: '/guru',
      name: 'guru',
      component: () => import('../views/GuruPage.vue'),
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../views/GuruDetail.vue'),
    },
    {
      path: '/berita',
      name: 'berita',
      component: () => import('../views/BeritaPage.vue'),
    },
    {
      path: '/kabar',
      name: 'kabar',
      component: () => import('../views/KabarSekolah.vue'),
    },
    {
      path: '/struktur',
      name: 'struktur',
      component: () => import('../views/StrukturOrganisasi.vue'),
    },
    {
      path: '/logo',
      name: 'logo',
      component: () => import('../views/LogoPage.vue'),
    },
    {
      path: '/detail2',
      name: 'detail2',
      component: () => import('../views/DetailBerita.vue'),
    },
    {
      path: '/ekstra',
      name: 'ekstra',
      component: () => import('../views/EkstrakurikulerPage.vue'),
    },
    {
      path: '/galeri',
      name: 'galeri',
      component: () => import('../views/GaleriPage.vue'),
    },
    {
      path: '/fasilitas',
      name: 'fasilitas',
      component: () => import('../views/FasilitasPage.vue'),
    },
    {
      path: '/sosmed',
      name: 'sosmed',
      component: () => import('../views/SosmedPage.vue'),
    },
    {
      path: '/slideshow',
      name: 'slideshow',
      component: () => import('../views/Dashboard/SlideshowPage.vue'),
    },
    {
      path: '/tahfidz',
      name: 'tahfidz',
      component: () => import('../views/Program/TahfidzPage.vue'),
    },
    {
      path: '/bilingual',
      name: 'bilingual',
      component: () => import('../views/Program/BilingualPage.vue'),
    },
     {
      path: '/p5',
      name: 'p5',
      component: () => import('../views/Program/P5Page.vue'),
    },
  ],
})

export default router
