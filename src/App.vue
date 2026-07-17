<script setup>
import Calculator from '@/components/Calculator.vue'
import Weather from '@/components/Weather.vue'
import CurrencyConverter from '@/components/CurrencyConverter.vue'
</script>

<template>
  <header>
    <img src="@/assets/images/logo.png" alt="Kitly" class="header__logo" />
    <h1>Kitly</h1>
    <p class="app-tagline">Un pequeño kit de herramientas para el día a día.</p>
  </header>

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
  h1 {
    font-family: var(--font-logo);
  }
}
</style>