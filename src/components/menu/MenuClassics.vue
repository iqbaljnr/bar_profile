<template>
  <div class="menu-category">
    <div class="category-header text-center" style="margin-bottom: 3rem;">
      <span class="text-gold tracking-wide text-sm uppercase">Timeless Pours</span>
      <h2>Classic & Forgotten</h2>
    </div>
    
    <div class="menu-grid">
      <div v-for="item in items" :key="item.id" class="menu-item">
        <div class="menu-header flex justify-between items-center">
          <h3>{{ item.name }}</h3>
          <span class="price">{{ item.price }}</span>
        </div>
        <p class="ingredients">{{ item.ingredients }}</p>
        <p class="description">{{ item.description }}</p>
      </div>
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

.tracking-wide {
  letter-spacing: 0.1em;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  width: 100%;
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

.menu-header {
  margin-bottom: 1rem;
}

.menu-header h3 {
  font-family: var(--font-heading);
  font-size: 1.4rem;
  margin-bottom: 0.2rem;
  color: var(--text-primary);
}

.price {
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 1.2rem;
  letter-spacing: 0.05em;
  color: var(--accent-gold);
}

.ingredients {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 600;
  opacity: 0.8;
}

.description {
  color: var(--text-secondary);
  line-height: 1.6;
  flex-grow: 1;
}

@media (max-width: 768px) {
  .menu-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .menu-item {
    padding: 1.25rem 1.5rem;
  }
}
</style>
