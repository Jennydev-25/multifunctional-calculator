<script setup>
import Calculator from '@/components/Calculator.vue'
import Weather from '@/components/Weather.vue'
</script>

<template>
  <header>
    <div class="header__brand">
      <img src="@/assets/images/logo.png" alt="Kitly" class="header__logo" />
      <h1>Kitly</h1>
    </div>

    <p class="app-tagline">Un pequeño kit de herramientas para el día a día.</p>

    <div class="header__actions"></div>
  </header>

  <main>
    <Calculator />
    <Weather />
  </main>

  <footer>
    <p class="footer__copyright">© 2026 Kitly · Todos los derechos reservados</p>
    <p class="footer__credit">Desarrollado por Jennydev-25</p>
  </footer>
</template>

<style lang="scss" scoped>
header {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: var(--sp-sm);
  padding: var(--sp-sm);
}

.header__brand {
  display: flex;
  align-items: center;
  gap: var(--sp-xs);

  h1 {
    font-family: var(--font-logo);
    font-size: 1.5rem;
    line-height: 1;
  }
}

.header__logo {
  width: 40px;
  height: auto;
}

.app-tagline {
  font-family: var(--font-tagline);
  font-size: 13px;
  color: var(--color-text-muted);
  text-align: center;
}

.header__actions {
  justify-self: end;
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
  }

  .header__brand h1 {
    font-size: 2rem;
  }

  .header__logo {
    width: 56px;
  }

  .app-tagline {
    font-size: 15px;
  }

  main {
    display: grid;
    grid-template-columns: 665px 471px;
    grid-template-areas: 'calculator weather';
    justify-content: center;
    align-items: start;
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
    padding: var(--sp-md) 24px var(--sp-lg);
  }

  .calculator {
    grid-area: calculator;
  }

  .weather {
    grid-area: weather;
  }

  footer {
    display: flex;
    justify-content: space-between;
    text-align: left;
    padding: var(--sp-md) var(--sp-xl);
  }
}
</style>