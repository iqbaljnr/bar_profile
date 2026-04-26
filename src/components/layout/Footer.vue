<template>
  <footer id="contact" class="footer section">
    <div class="container grid grid-cols-2 gap-8">
      <div class="footer-info flex flex-col gap-4">
        <h3 class="logo">VINYL<span class="text-gold">.</span></h3>
        <p class="text-secondary opacity-75">
          Speakeasy & Listening Bar
        </p>
        <div class="address">
          <p>Hotel Indigo Bandung Dago Pakar</p>
          <p>Jalan Raya Resor Dago Pakar</p>
          <p>Bandung, 40198, Indonesia</p>
        </div>
        <a href="https://www.instagram.com/vinylbdg" target="_blank" class="social-link">@vinylbdg</a>
      </div>
      <div class="footer-hours flex flex-col gap-4">
        <h4>Opening Hours</h4>
        <div class="hours-list text-secondary">
          <div class="hour-item flex justify-between">
            <span>Wednesday - Sunday</span>
            <span>6:00 PM - 1:00 AM</span>
          </div>
          <div class="hour-item flex justify-between">
            <span>Monday - Tuesday</span>
            <span>Closed</span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom container">
      <p class="text-center text-secondary text-sm">
        &copy; {{ new Date().getFullYear() }} Vinyl Bandung. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--bg-secondary);
  border-top: 1px solid var(--border-subtle);
  padding-bottom: 2rem;
}

.logo {
  font-family: var(--font-heading);
  font-size: 2rem;
  letter-spacing: 0.1em;
}

.address {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.8;
}

.social-link {
  display: inline-block;
  color: var(--accent-gold);
  font-weight: 500;
  margin-top: 1rem;
}

.footer-hours h4 {
  font-size: 1.2rem;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.hour-item {
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border-subtle);
}

.hour-item:last-child {
  border-bottom: none;
}

.footer-bottom {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-subtle);
}

.text-sm {
  font-size: 0.8rem;
}

@media (max-width: 768px) {
  .grid-cols-2 {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
</style>
