<template>
  <div class="predireflex-form">
    <div class="predireflex-form--title"> Predi reflex is a game to test your rapidity :) </div>
    <div class="predireflex-form--name">
      <BaseInput v-model.trim="form.name"
                 :validator="$v.form.name"
                 label="Player name"
                 placeholder="Enter your name"
      />
    </div>
    <div class="predireflex-form--delay">
      <BaseInput v-model.number="form.delay"
                 :validator="$v.form.delay"
                 :is-munified="true"
                 type="number"
                 label="Delay before preview"
      />
      <div class="predireflex-form--delay--sec"> sec{{ form.delay > 1 ? 's' : null }} </div>
    </div>

    <div class="predireflex-form--background">
      <div class="background-title"> Background color of your block  </div>
      <ColorPicker @color-changed="updateColor" />
    </div>
    <div @click="onStartGame" class="predireflex-form--go"> Here we go ! </div>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators"
import BaseInput from "~/components/formFields/BaseInput";
import ColorPicker from "~/components/formFields/ColorPicker";

export default {
  name: "GameForm",
  components: { BaseInput, ColorPicker },
  data() {
    return {
      form: {
        name: null,
        delay: null,
        color: null
      }
    }
  },
  methods: {
    onStartGame() {
      /** Check the form fields are filled (player name and delay) **/
      this.$v.form.$touch();
      if (!this.$v.$invalid) {
        /** emit event that game is ready to start after random delay with user data **/
        this.$emit('game-started', this.form)
      }
    },
    updateColor(value) {
      this.form.color = value
    }
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(2)
      },
      delay: {
        required
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .predireflex-form {

    &--title {
      text-align: center;
      font-size: 32px;
      font-weight: 500;
      margin-bottom: 20px;
    }

    &--name {
      margin-bottom: 20px;
    }

    &--delay {
      margin-bottom: 20px;
      position: relative;

      &--sec {
        font-size: 26px;
        font-weight: 500;
        position: absolute;
        left: 60px;
        top: 46px;
      }
    }

    &--background {
      display: flex;
      margin-bottom: 40px;

      .background-title {
        font-size: 26px;
        font-weight: 500;
        line-height: 26px;
        margin-right: 20px;
      }
    }

    &--go {
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
