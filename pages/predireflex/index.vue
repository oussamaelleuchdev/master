<template>
    <div class="predireflex">
      <GameForm v-if="gameStatus === 'pending'"
                @game-started="onGameStart"
      />
      <GameBlock v-else-if="gameStatus === 'started'"
                 :player="player"
                 :color="color"
                 @game-finished="onGameFinishHandler"
      />
      <GameResult v-else-if="gameStatus === 'finished'"
                  :player="player"
                  @restart="onRestartGameHandler"
      />
    </div>
</template>

<script>
import GameForm from "~/components/game/GameForm";
import {Player} from "~/models/Player";
import { v4 as uuidv4 } from 'uuid';
import { ADD_PLAYER } from "~/store/mutations-types";
export default {
  name: "index",
  components: { GameForm },
  data() {
    return {
      gameStatus: 'pending',
      delay: null,
      randomDelay: null,
      player: null,
      color: null,
      retry: 1,
      scores: []
    }
  },
  methods: {
    onGameStart(data) {
      this.color = data.color
      this.retry = data.retry
      this.delay = data.delay
      this.randomDelay = this.getRandomDelay()
      this.player = new Player({ id: uuidv4(), name: data.name, score: 0 })
      this.startGameAfterDelay()
    },
    onGameFinishHandler(score) {
      this.retry--;
      if (this.retry > 0) {
          this.randomDelay = this.getRandomDelay()
          this.startGameAfterDelay();
          this.scores.push(score)
      } else {
        this.scores.push(score)
        this.player.setScore(Math.min(...this.scores))
        this.$store.commit(ADD_PLAYER, this.player)
        this.gameStatus = 'finished'
      }
    },
    startGameAfterDelay() {
      this.gameStatus = null
      setTimeout(() => {
        this.gameStatus = 'started'
      }, this.randomDelay * 1000)
    },
    getRandomDelay() {
      return Math.floor(Math.random() * this.delay)
    },
    onRestartGameHandler() {
      this.gameStatus = 'pending'
    }
  }
}
</script>

<style lang="scss" scoped>
  .predireflex {
    margin-top: 20px;
  }
</style>
