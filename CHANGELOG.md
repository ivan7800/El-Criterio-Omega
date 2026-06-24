# Changelog

## v1.3.3 — Final Boot Fix
- Corregido bug crítico: la pantalla de carga podía quedarse fija porque `#boot.boot { display:grid !important; }` ganaba a `.hidden`.
- Añadida regla `#boot.boot.hidden` y `#app.app.hidden` para garantizar que la app entra al escritorio.
- Añadido botón de emergencia “Entrar ahora” en la pantalla de arranque.
- Actualizada caché PWA a v1.3.3.
- Verificación de carga con Chromium headless.

## v1.3.2
- Corrección visual de layout cinematográfico.
