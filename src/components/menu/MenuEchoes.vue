<template>
  <div class="menu-category echoes-category">
    <div class="category-header text-center" style="margin-bottom: 3rem;">
      <span class="text-gold tracking-wide text-sm uppercase">Curated Collection</span>
      <h2>Vinyl Records For Sale</h2>
    </div>
    
    <div class="menu-grid single-item">
      <a 
        v-for="item in items" 
        :key="item.id" 
        href="https://online.fliphtml5.com/ujjwo/ccaf/#p=1"
        target="_blank"
        rel="noopener noreferrer"
        class="menu-item album-item"
      >
        <div class="album-image">
          <img :src="item.image" :alt="item.title" />
        </div>
        <div class="album-info">
          <h3>{{ item.title }}</h3>
          <p class="description">{{ item.description }}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
.menu-category {
  margin-bottom: 6rem;
}

.echoes-category {
  background-color: rgba(10, 10, 10, 0.4);
  padding: 3rem;
  border: 1px solid var(--border-subtle);
  border-radius: 1.5rem;
}

.tracking-wide {
  letter-spacing: 0.1em;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  width: 100%;
}

.single-item {
  grid-template-columns: 1fr;
}

.menu-item {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  border-radius: 1rem;
  padding: 1.5rem 2rem;
  transition: all var(--transition-normal);
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.album-item {
  flex-direction: row;
  padding: 0;
  align-items: stretch;
}

.album-image {
  flex: 0 0 40%;
}

.album-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.album-info {
  padding: 3rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.menu-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background-color: var(--accent-gold);
  transform: scaleY(0);
  transition: transform var(--transition-normal);
  transform-origin: bottom;
}

.menu-item:hover {
  transform: translateY(-5px);
  background-color: var(--bg-tertiary);
  border-color: var(--border-subtle);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.menu-item:hover::before {
  transform: scaleY(1);
}

.album-info h3 {
  font-family: var(--font-heading);
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.description {
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .menu-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .album-item {
    flex-direction: column;
  }
  .album-image {
    height: 300px;
  }
  .album-info {
    padding: 2rem;
  }
  .echoes-category {
    padding: 1.5rem;
  }
}
</style>
