<template>
  <div @click="$router.push(`/details/${post.id}`)" class="post">
    <div class="post--index"> #{{ post.id }} </div>
    <div class="post--title">
      {{ post.title }}
    </div>
    <div class="post--description"> {{ post.body }} </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: Object
  }
}
</script>

<style lang="scss" scoped>
  .post {
    border: 1px solid black;
    padding: 20px 40px;
    position: relative;
    cursor: pointer;

    &:hover {
      box-shadow: 0 5px 7px 0 gray;
    }

    &--index {
      position: absolute;
      color: darkred;
      right: 10px;
      top: 6px;
      font-size: 24px;
      font-weight: 600;
      height: fit-content;
      width: fit-content;
      text-align: center;
    }

    &--title {
      font-size: 18px;
      font-weight: 600;
      color: green;
      text-transform: capitalize;
      margin-bottom: 20px;
    }

    &--description {
      font-weight: 500;
      font-size: 16px;
      color: black;
      text-transform: capitalize;
      line-height: 26px;
    }
  }
</style>
