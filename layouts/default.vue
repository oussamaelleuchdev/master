<template>
  <div class="container contain">
    <Header />
    <Nuxt />
  </div>
</template>
<script>
import Header from "~/components/header/Header";
export default {
  components: { Header }
}
</script>
<style>
.contain {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Gabriola';
}

html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
