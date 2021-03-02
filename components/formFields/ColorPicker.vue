<template>
  <verte v-model="color" picker="wheel" model="rgb"></verte>
</template>

<script>
import Verte from 'verte';
import 'verte/dist/verte.css';
export default {
  name: "ColorPicker",
  components: { Verte },
  data() {
    return {
      color: ''
    }
  },
  watch: {
    /** emit the new color when changing **/
    color(value) {
      this.$emit('color-changed', value)
    }
  }
}
</script>

<style scoped>

</style>
