<template>
    <div :style="{ background: `repeating-linear-gradient(135deg, ${color} 15%, white 18%)` }"
         @click="onBlockClickHandler"
         ref="predireflex-block"
         class="predireflex-block">
      Quickly, click on me!
    </div>
</template>

<script>
import gameService from "~/services/gameService";
import { Player } from "~/models/Player";
import { ADD_PLAYER } from "~/store/mutations-types";

export default {
  name: "GameBlock",
  props: {
    color: {
      type: String,
      default: 'black'
    },
    player: {
      type: Object
    }
  },
  data() {
    return {
      appearTime: null
    }
  },
  mounted() {
    this.updateBlockWithRandomPosition();
    this.appearTime = new Date();
  },
  methods: {
    onBlockClickHandler() {
        /** calculate the score of the user and emit event that game is finished **/
        const clickTime = new Date();
        const score = gameService.getTimeMilliSecsClicked(clickTime, this.appearTime)
        this.$emit('game-finished', score)
    },
    updateBlockWithRandomPosition() {
      /** create random top and left for block game **/
      const blockHtmlElement = this.$refs['predireflex-block']
      let randomTop = Math.floor(Math.random() * (window.innerHeight - 300));
      let randomLeft =  Math.floor(Math.random() * (((window.innerWidth * 0.9) / 2 - 150)));
      Math.random() > 0.5 ? randomLeft *= -1 : null
      blockHtmlElement.style.top = randomTop + 'px'
      blockHtmlElement.style.left = randomLeft + 'px'
    }
  }
}
</script>

<style scoped>
  .predireflex-block {
    width: 150px;
    height: 150px;
    font-size: 21px;
    font-weight: 700;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
  }
</style>
