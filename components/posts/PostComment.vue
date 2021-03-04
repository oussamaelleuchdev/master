<template>
    <div class="post-comment">
      <div class="post-comment--index"> {{ comment.id }} </div>
      <div class="post-comment--email"> Published by : {{ comment.email }} </div>
      <div class="post-comment--name"> {{ comment.name }} </div>
      <div class="post-comment--body"> {{ comment.body }} </div>
    </div>
</template>

<script>
export default {
  name: "PostComments",
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
    .post-comment {
      border: 1px solid black;
      padding: 20px;
      position: relative;

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

      &--name {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 10px;
      }

      &--email {
        font-size: 18px;
        font-weight: 600;
        color: green;
        margin-bottom: 10px;
      }

      &--body {
        font-weight: 500;
        font-size: 16px;
        color: black;
        line-height: 26px;
      }
    }
</style>
