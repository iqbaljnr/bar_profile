<template>
  <main class="home-view">
    <NavBar />
    <SectionHero />
    <SectionAbout />
    <SectionGallery />
    <Footer />
  </main>
</template>

<script setup>
import NavBar from '../components/layout/NavBar.vue';
import Footer from '../components/layout/Footer.vue';
import SectionHero from '../components/home/SectionHero.vue';
import SectionAbout from '../components/home/SectionAbout.vue';
import SectionGallery from '../components/home/SectionGallery.vue';
</script>

<style scoped>
.home-view {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
