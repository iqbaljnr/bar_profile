<template>
  <section class="hero flex items-center justify-center">
    <div class="hero-bg">
      <div class="overlay"></div>
    </div>
    <div class="hero-content container text-center flex flex-col items-center gap-4 fade-in">
      <h1 class="hero-title">High Fidelity<br/><span class="text-gold">Sound & Spirits</span></h1>
      <p class="hero-subtitle">An intimate speakeasy experience at Dago Pakar.</p>
      <div class="hero-actions" style="margin-top: 2rem;">
        <router-link to="/menu" class="btn btn-primary">Explore Menu</router-link>
      </div>
    </div>
    <div class="scroll-indicator">
      <span>Discover</span>
      <div class="line"></div>
    </div>
  </section>
</template>

<script setup>
const scrollTo = (id) => {
  const el = document.querySelector(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../../assets/images/bg_hero.jpg');
  background-size: cover;
  background-position: center;
  z-index: 1;
  animation: bgZoom 20s infinite alternate;
}

@keyframes bgZoom {
  0% { transform: scale(1); }
  100% { transform: scale(1.1); }
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.95));
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 5rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.hero-subtitle {
  font-size: clamp(1rem, 3vw, 1.25rem);
  color: var(--text-secondary);
  font-weight: 300;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-col: column;
  align-items: center;
  gap: 1rem;
  opacity: 0.6;
  animation: pulse 2s infinite;
}

.scroll-indicator span {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

.scroll-indicator .line {
  width: 1px;
  height: 40px;
  background-color: var(--accent-gold);
}

@keyframes pulse {
  0% { opacity: 0.3; transform: translate(-50%, 0); }
  50% { opacity: 1; transform: translate(-50%, 10px); }
  100% { opacity: 0.3; transform: translate(-50%, 0); }
}
</style>
