<template>
    <div class="predireflex-result">
        <div class="predireflex-result--title">
          Congratulation {{ player.name }} !
        </div>
        <div class="predireflex-result--value">
          You clicked after <span class="blue-highlight"> {{ player.score }} ms </span>
        </div>
        <div @click="restartClickHandler" class="predireflex-result--restart"> Restart </div>
    </div>
</template>

<script>
export default {
  name: "GameResult",
  props: {
    player: {
      type: Object,
      default() {
        return { name: null, score: null }
      }
    },
    dateDifference: {
      type: Date,
      default() {
        return new Date();
      }
    }
  },
  methods: {
    restartClickHandler() {
        /** Game is finished, emit event to restart **/
        this.$emit('restart')
    }
  }
}
</script>

<style lang="scss" scoped>
  .predireflex-result {
    margin-top: 20px;
    min-width: 600px;

    &--title {
      text-align: center;
      margin-bottom: 20px;
    }

    &--title, &--value {
      font-size: 32px;
      font-weight: 600;
    }

    &--value {
      margin-bottom: 40px;

      .blue-highlight {
        color: dodgerblue;
      }
    }

    &--restart {
      background: dodgerblue;
      color: white;
      font-size: 30px;
      width: 170px;
      line-height: 30px;
      padding: 15px 40px;
      text-align: center;
      border: 1px solid black;
      cursor: pointer;
    }
  }
</style>
