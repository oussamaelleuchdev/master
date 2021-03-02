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
export default {
  name: "index",
  components: { GameForm },
  data() {
    return {
      gameStatus: 'pending',
      delay: null,
      player: null,
      color: null
    }
  },
  methods: {
    onGameStart(data) {
      this.color = data.color
      this.delay = Math.floor(Math.random() * data.delay)
      this.player = new Player({ id: uuidv4(), name: data.name, score: 0 })
      this.gameStatus = null

      setTimeout(() => {
          this.gameStatus = 'started'
      }, this.delay * 1000)
    },

    onGameFinishHandler(score) {
      this.gameStatus = 'finished'
      this.player.setScore(score)
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
