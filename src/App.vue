<script setup>
import Calculator from '@/components/Calculator.vue'
import Weather from '@/components/Weather.vue'
import CurrencyConverter from '@/components/CurrencyConverter.vue'
</script>

<template>
  <header>
    <img src="@/assets/images/logo.png" alt="Kitly" class="header__logo" />
    <h1>Kitly</h1>
  </header>

  <p class="app-tagline">Un pequeño kit de herramientas para el día a día.</p>

  <main>
    <Calculator />
    <Weather />
    <CurrencyConverter />
  </main>

  <footer>
    <p class="footer__copyright">© 2026 Kitly · Todos los derechos reservados</p>
    <p class="footer__credit">Desarrollado por Jennydev-25</p>
  </footer>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  gap: var(--sp-xs);
  padding: var(--sp-sm);

  h1 {
    font-family: var(--font-logo);
    font-size: 2rem;
  }
}

.header__logo {
  width: 40px;
  height: auto;
}

.app-tagline {
  font-family: var(--font-tagline);
  text-align: center;
  padding: 0 var(--sp-sm);
}

footer {
  color: var(--color-text-on-primary);
  font-family: var(--font-footer);
  text-align: center;
  padding: var(--sp-md) var(--sp-sm);
  margin-top: var(--sp-xl);
}

@media (min-width: 768px) {
  header {
    padding: var(--sp-md) var(--sp-xl);

    h1 {
      font-size: 2.75rem;
    }
  }

  .header__logo {
    width: 56px;
  }

  footer {
    display: flex;
    justify-content: space-between;
    text-align: left;
    padding: var(--sp-md) var(--sp-xl);
  }
}
</style>