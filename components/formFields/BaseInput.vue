<template>
    <div class="base-input">
      <div v-if="label" class="base-input--label"> {{ label }} </div>
      <input :type="type" :placeholder="placeholder"
             :class="{ 'munified': isMunified, 'base-input--value--error': validator.$error }"
             :value="value"
             @input="$emit('input', $event.target.value)"
             class="base-input--value"
      />
      <div v-if="validate('required')" class="error"> This field is required.</div>
      <div v-else-if="validate('minLength')" class="error"> This field is not valid.</div>
    </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    label: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    isMunified: {
      type: Boolean,
      default: false
    },
    validator: {
      type: Object,
      required: true
    }
  },
  methods: {
    validate(check) {
      return this.validator.$params.hasOwnProperty(check) && this.validator.$error
    }
  }
}
</script>

<style lang="scss" scoped>
  .base-input {

    &--label {
      font-size: 26px;
      font-weight: 500;
    }

    &--value {
      height: 42px;
      border-radius: 4px;
      text-indent: 16px;
      width: 100%;

      &--error {
        border: 1px solid red;
      }

      &.munified {
        width: 42px;
      }

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

    }

    .error {
      font-weight: 600;
      color: red;
    }

  }
</style>
