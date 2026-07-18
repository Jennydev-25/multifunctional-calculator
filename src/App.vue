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
    <CurrencyConverter />
    <Weather />
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

main {
  display: flex;
  flex-direction: column;
  gap: var(--sp-md);
  padding: var(--sp-sm);
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
    padding: var(--sp-sm) var(--sp-xl);

    h1 {
      font-size: 2.75rem;
    }
  }

  .header__logo {
    width: 56px;
  }

  .app-tagline {
    margin-bottom: var(--sp-sm);
  }

  main {
    display: grid;
    grid-template-columns: 7fr 5fr;
    grid-template-areas:
      'calculator weather'
      'currency currency';
    gap: var(--sp-sm);
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px var(--sp-lg);
  }

  .calculator {
    grid-area: calculator;
  }

  .weather {
    grid-area: weather;
  }

  .currency-converter {
    grid-area: currency;
  }

  footer {
    display: flex;
    justify-content: space-between;
    text-align: left;
    padding: var(--sp-md) var(--sp-xl);
  }
}
</style>