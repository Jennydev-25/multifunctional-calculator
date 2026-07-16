# 🧮 Kitly — Calculadora, Divisas y Tiempo

> _"Un pequeño kit de herramientas para el día a día."_

---

## 📖 Descripción

**Kitly** es una calculadora multifuncional construida con **Vue 3** que combina, en una única vista, tres módulos independientes: una **calculadora aritmética**, un **conversor de divisas** y un módulo de **El Tiempo**.

La calculadora resuelve las operaciones básicas de suma, resta, multiplicación y división, con teclado numérico completo (`0`–`9`), operadores, `=`, `.` y `CE`, y control de errores.

El conversor de divisas está integrado en la misma vista y convierte entre Euro (€), Dólar ($) y Yen (¥), con selector de divisa origen/destino e intercambio rápido, consumiendo la API de [CurrencyFreaks](https://currencyfreaks.com/).

El módulo de El Tiempo consume la API de [el-tiempo.net](https://www.el-tiempo.net/api), con selector de zona (Nacional o Asturias), y muestra temperatura, humedad (`humedad`) y viento (`viento`), además de una imagen dinámica según el `stateSky`.

Todo el diseño es **mobile-first**, con los tres módulos conviviendo en una sola vista y sin Vue Router.

---

## ✍️ Autora

**[Jenny Sánchez Requejo](https://github.com/Jennydev-25)**
