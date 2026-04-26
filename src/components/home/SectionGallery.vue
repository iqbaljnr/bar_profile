<template>
  <section id="gallery" class="section gallery-section">
    <div class="container text-center" style="margin-bottom: 4rem;">
      <span class="text-gold tracking-wide text-sm uppercase">The Vibe</span>
      <h2>Visual Experience</h2>
    </div>

    <div v-if="isLoading" class="text-center text-secondary">
      <p>Loading gallery...</p>
    </div>

    <div v-else class="gallery-grid">
      <div v-for="image in galleryList" :key="image.id" class="gallery-item">
        <img :src="image.url" :alt="image.alt" loading="lazy" />
        <div class="gallery-overlay">
          <p class="caption">{{ image.caption }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useGallery } from '../../composables/useGallery';

const { galleryList, isLoading } = useGallery();
</script>

<style scoped>
.gallery-section {
  background-color: var(--bg-primary);
  padding: 8rem 0;
}

.tracking-wide {
  letter-spacing: 0.1em;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 300px;
  gap: 1rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  height: 100%;
  border-radius: 1rem;
}

.gallery-item:nth-child(1) {
  grid-column: span 2;
  grid-row: span 2;
}

.gallery-item:nth-child(2) {
  grid-column: span 2;
  grid-row: span 1;
}

.gallery-item:nth-child(3) {
  grid-column: span 1;
  grid-row: span 1;
}

.gallery-item:nth-child(4) {
  grid-column: span 1;
  grid-row: span 1;
}

.gallery-item:nth-child(5) {
  grid-column: span 1;
  grid-row: span 1;
}

.gallery-item:nth-child(6) {
  grid-column: span 1;
  grid-row: span 1;
}

.gallery-item:nth-child(7) {
  grid-column: span 2;
  grid-row: span 2;
}

.gallery-item:nth-child(8) {
  grid-column: span 2;
  grid-row: span 1;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
  filter: grayscale(30%) contrast(1.1);
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 10, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.caption {
  color: var(--text-primary);
  font-family: var(--font-heading);
  font-size: 1.5rem;
  text-align: center;
  padding: 1rem;
  transform: translateY(20px);
  transition: transform var(--transition-normal);
}

.gallery-item:hover img {
  transform: scale(1.05);
  filter: grayscale(0) contrast(1);
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-item:hover .caption {
  transform: translateY(0);
}

@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 250px;
  }
  .gallery-item:nth-child(1),
  .gallery-item:nth-child(2),
  .gallery-item:nth-child(7),
  .gallery-item:nth-child(8) {
    grid-column: span 2;
    grid-row: span 1;
  }
  .gallery-item:nth-child(3),
  .gallery-item:nth-child(4),
  .gallery-item:nth-child(5),
  .gallery-item:nth-child(6) {
    grid-column: span 1;
    grid-row: span 1;
  }
}

@media (max-width: 600px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 300px;
  }
  .gallery-item:nth-child(1),
  .gallery-item:nth-child(2),
  .gallery-item:nth-child(3),
  .gallery-item:nth-child(4),
  .gallery-item:nth-child(5),
  .gallery-item:nth-child(6),
  .gallery-item:nth-child(7),
  .gallery-item:nth-child(8) {
    grid-column: span 1;
    grid-row: span 1;
  }
}
</style>
