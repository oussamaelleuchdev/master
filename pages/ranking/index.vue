<template>
    <div class="ranking">
      <div class="ranking--title"> Who did the best result ? </div>
      <div class="ranking--btns">
        <div @click="onSortByBestTimeHandler" class="ranking--btns--element">
          <RadioInput :checked="sortByBest"
                      label="Best time"
                      name="ranking"
          />
        </div>
        <div @click="onSortByWorstTimeHandler" class="ranking--btns--element">
          <RadioInput :checked="sortByWorst"
                      label="Worst time"
                      name="ranking"
          />
        </div>
      </div>
      <div class="ranking--players">
        <div v-for="player in players" :key="player.id" class="player">
          - {{ player.name }} : {{ getPlayerTimeScore(player.score) }}
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
import gameService from "~/services/gameService";
import RadioInput from "~/components/formFields/RadioInput";
export default {
  name: "index",
  components: { RadioInput },
  data() {
    return {
      sortByWorst: false,
      sortByBest: true,
      scoreTime: null,
      players: []
    }
  },
  computed: {
    ...mapGetters({
      getSortedPlayers: 'getSortedPlayers'
    })
  },
  created() {
    this.players = this.getSortedPlayers('asc')
  },
  methods: {
    getPlayerTimeScore(score) {
      return gameService.getTimeDifference(score)
    },
    onSortByBestTimeHandler() {
      this.sortByBest = true;
      this.sortByWorst = false;
      this.players = this.getSortedPlayers('asc')
    },
    onSortByWorstTimeHandler() {
      this.sortByBest = false;
      this.sortByWorst = true;
      this.players = this.getSortedPlayers('desc')
    }
  }
}
</script>

<style lang="scss" scoped>
.ranking {
  margin-top: 20px;
  font-weight: 500;

  &--title {
    font-size: 32px;
    margin-bottom: 10px;
  }

  &--btns {
    display: flex;
    align-items: center;

    &--element {
      &:last-child {
        margin-left: 20px;
      }
    }
  }

  &--players {
    margin-top: 20px;

    .player {
      font-size: 26px;
      line-height: 30px;
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

@media (min-width: 1200px) {
  .ranking {
    min-width: 430px;
  }
}
</style>
