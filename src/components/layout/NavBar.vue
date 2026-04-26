<template>
  <header class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="container navbar-inner flex justify-between items-center">
      <div class="logo" style="z-index: 102;">
        <a href="#" @click.prevent="handleLogoClick">VINYL<span class="text-gold">.</span></a>
      </div>
      
      <!-- Desktop Nav -->
      <nav class="nav-links flex gap-8">
        <a href="#about" @click.prevent="handleNavClick('#about')">About</a>
        <a href="#gallery" @click.prevent="handleNavClick('#gallery')">Gallery</a>
        <a href="#contact" @click.prevent="handleNavClick('#contact')">Contact</a>
        <router-link to="/menu">Menu</router-link>
      </nav>
      
      <div class="nav-actions">
        <a href="https://www.instagram.com/vinylbdg" target="_blank" class="btn btn-outline">Reservation</a>
      </div>

      <!-- Hamburger Button -->
      <button class="mobile-menu-btn" @click="toggleMobileMenu" :class="{ 'is-active': isMobileMenuOpen }">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>

    <!-- Mobile Nav Overlay -->
    <div class="mobile-nav-overlay" :class="{ 'is-open': isMobileMenuOpen }">
      <nav class="mobile-nav-links flex flex-col items-center gap-8">
        <a href="#about" @click.prevent="handleNavClick('#about')">About</a>
        <a href="#gallery" @click.prevent="handleNavClick('#gallery')">Gallery</a>
        <a href="#contact" @click.prevent="handleNavClick('#contact')">Contact</a>
        <router-link to="/menu" @click="closeMobileMenu">Menu</router-link>
        <a href="https://www.instagram.com/vinylbdg" target="_blank" class="btn btn-outline mt-4" @click="closeMobileMenu">Reservation</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const router = useRouter();
const route = useRoute();

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  document.body.style.overflow = '';
};

const handleLogoClick = async () => {
  closeMobileMenu();
  if (route.path !== '/') {
    await router.push('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

const handleNavClick = async (id) => {
  closeMobileMenu();
  if (route.path !== '/') {
    await router.push('/');
    setTimeout(() => {
      scrollToElement(id);
    }, 100);
  } else {
    scrollToElement(id);
  }
};

const scrollToElement = (id) => {
  const el = document.querySelector(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  z-index: 100;
  transition: background-color var(--transition-normal), backdrop-filter var(--transition-normal);
  display: flex;
  align-items: center;
}

.navbar.scrolled {
  background-color: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-subtle);
}

.navbar-inner {
  height: 100%;
}

.logo {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.1em;
}

.nav-links a {
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--text-primary);
}

.nav-links a:hover {
  color: var(--accent-gold);
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 102;
}

.hamburger-box {
  width: 30px;
  height: 24px;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px;
}

.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
  width: 30px;
  height: 2px;
  background-color: var(--text-primary);
  border-radius: 4px;
  position: absolute;
  transition: transform 0.15s ease, background-color 0.15s ease;
}

.hamburger-inner::before, .hamburger-inner::after {
  content: "";
  display: block;
}

.hamburger-inner::before { top: -8px; }
.hamburger-inner::after { bottom: -8px; }

.mobile-menu-btn.is-active .hamburger-inner {
  background-color: transparent;
}
.mobile-menu-btn.is-active .hamburger-inner::before {
  transform: translate3d(0, 8px, 0) rotate(45deg);
}
.mobile-menu-btn.is-active .hamburger-inner::after {
  transform: translate3d(0, -8px, 0) rotate(-45deg);
}

/* Mobile Nav Overlay */
.mobile-nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--bg-primary);
  z-index: 101;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--transition-normal);
}

.mobile-nav-overlay.is-open {
  opacity: 1;
  pointer-events: auto;
}

.mobile-nav-links a {
  font-family: var(--font-heading);
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: color var(--transition-fast);
}

.mobile-nav-links a:hover {
  color: var(--accent-gold);
}

.mobile-nav-links .btn {
  font-family: var(--font-sans);
  font-size: 1.2rem;
  padding: 1rem 2.5rem;
}

.mt-4 {
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .nav-links, .nav-actions {
    display: none;
  }
  .mobile-menu-btn {
    display: block;
  }
}
</style>
