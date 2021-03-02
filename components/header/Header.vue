<template>
  <div class="header">
    <div v-for="item in items"
         :key="item.name"
         :class="{ 'isActive': item.isSelected }"
         @click="navigateToRoute(item)"
         class="header--item">
       {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
   return {
     items: [ { name: 'Home', isSelected: true, route: '/' },
       { name: 'PrediReflex', isSelected: false, route: '/predireflex' },
       { name: 'Ranking', isSelected: false, route: '/ranking' }
       ]
   }
  },
  created() {
    /** getting the right element selected when we go directly to the page **/
    this.items.forEach(element => {
      element.isSelected = (this.$route.fullPath === element.route) || (element.name === 'Home' && this.$route.fullPath.startsWith('/details'))
    })
  },
  methods: {
    navigateToRoute(item) {
      /** navigate to a specific route **/
        if (!item.isSelected || (item.name === 'Home' && this.$route.fullPath !== item.route)) {
           this.$router.push(item.route)
           this.items.forEach(element => element.isSelected = item === element)
        }
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;

    &--item {
      font-weight: 500;
      padding: 20px;
      cursor: pointer;
      font-size: 30px;
      line-height: 30px;
      text-align: center;

      &:last-child {
        margin-right: 0;
      }

      &.isActive {
        color: red;
        font-weight: 600;
      }
    }
  }

  @media (max-width: 767px) {
    .header {
      &--item {
        width: fit-content;
        margin-right: 0;
        justify-content: space-around;
      }
    }
  }

  @media (min-width: 768px) {
    .header {
      &--item {
        margin-right: 50px;
        width: 115px;
      }
    }
  }

</style>
