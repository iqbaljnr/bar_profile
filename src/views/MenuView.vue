<template>
  <main class="menu-view">
    <NavBar />
    
    <section class="section menu-page-header text-center fade-in">
      <div class="container">
        <h1 class="page-title">Curated Libations</h1>
        <p class="text-secondary max-w-2xl mx-auto" style="max-width: 600px; margin: 0 auto;">
          Experience our carefully constructed menu designed to complement the warmth of analog sounds.
        </p>
      </div>
    </section>

    <div v-if="isLoading" class="text-center text-secondary section">
      <p>Loading menu...</p>
    </div>

    <section v-else class="section menu-content">
      <div class="container">
        <MenuClassics :items="classicsList" />
        <MenuSnacks :items="snacksList" />
        <MenuEchoes :items="echoesList" />
      </div>
    </section>

    <Footer />
  </main>
</template>

<script setup>
import { onMounted } from 'vue';
import { useMenu } from '../composables/useMenu';

import NavBar from '../components/layout/NavBar.vue';
import Footer from '../components/layout/Footer.vue';
import MenuClassics from '../components/menu/MenuClassics.vue';
import MenuSnacks from '../components/menu/MenuSnacks.vue';
import MenuEchoes from '../components/menu/MenuEchoes.vue';

const { classicsList, snacksList, echoesList, isLoading } = useMenu();

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style scoped>
.menu-view {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.menu-page-header {
  padding-top: 10rem;
  padding-bottom: 3rem;
  background-color: var(--bg-secondary);
}

.page-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.menu-content {
  flex: 1;
  background-color: var(--bg-primary);
}
</style>
