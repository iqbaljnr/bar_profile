<template>
  <section id="about" class="section about-section">
    <div class="container grid grid-cols-2 gap-8 items-center">
      <div class="about-image">
        <img :src="profileImg" alt="Vinylbdg Profile" />
      </div>
      <div class="about-content flex flex-col gap-4">
        <span class="text-gold tracking-wide text-sm uppercase">The Concept</span>
        <h2>More Than A Speakeasy</h2>
        <p class="text-secondary text-lg">
          Vinyl is an intimate haven where carefully curated analog sounds meet masterfully crafted cocktails. Hidden away on the 16th floor of Hotel Indigo Bandung Dago Pakar, we bring the classic listening room experience to modern nights.
        </p>
        <p class="text-secondary">
          As the evening transitions, our space evolves from mellow, laid-back sunset sessions into vibrant late-night energy driven by our guest DJ turntablists. Unwind, listen deeply, and taste the difference.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import profileImg from '../../assets/images/profile.jpg';
</script>


<style scoped>
.about-section {
  background-color: var(--bg-primary);
  padding: 8rem 0;
}

.about-image img {
  width: 100%;
  border-radius: 4px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
  filter: grayscale(20%) sepia(20%) hue-rotate(-20deg);
  transition: filter var(--transition-slow);
}

.about-image img:hover {
  filter: grayscale(0) sepia(0) hue-rotate(0);
}

.tracking-wide {
  letter-spacing: 0.1em;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.text-lg {
  font-size: 1.1rem;
  line-height: 1.8;
}

@media (max-width: 768px) {
  .about-content {
    order: -1;
  }
}
</style>
