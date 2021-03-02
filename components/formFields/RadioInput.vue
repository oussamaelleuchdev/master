<template>
  <div class="radio-input">
    <input :name="name" :checked="checked"
           type="radio"
           class="radio-input--value"
    >
    <label :for="label" class="radio-input--label"> {{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "RadioInput",
  props: {
    name: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    checked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.radio-input {
  display: flex;
  align-items: center;

  &--label {
    font-size: 26px;
    height: 26px;
    line-height: 26px;
    font-weight: 500;
    margin-top: 10px;
    margin-left: 10px;
    cursor: pointer;
  }

  &--value {
    height: 26px;
    width: 26px;
  }

}
</style>
