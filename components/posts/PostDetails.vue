<template>
  <div class="post-detail">
    <div class="post-detail--header"> You are currently reading the post #{{ getSelectedPost.id }} </div>
    <div class="post-detail--block">
      <div class="item--title"> Title : </div>
      <div class="item--value"> {{ getSelectedPost.title }} </div>
    </div>
    <div class="post-detail--block">
      <div class="item--title"> Description : </div>
      <div class="item--value"> {{ getSelectedPost.body }} </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import {GET_SELECTED_POST} from "~/store/getters-types";

export default {
  name: "PostDetails",
  computed: {
    ...mapGetters({
      getSelectedPost: GET_SELECTED_POST
    })
  }
}
</script>

<style lang="scss" scoped>
.post-detail {
  text-transform: capitalize;

  &--header {
    text-align: center;
    font-size: 32px;
    font-weight: 400;
    margin: 20px 0;
  }

  &--block {
    .item {
      &--title {
        font-size: 28px;
        font-weight: 500;
      }

      &--value {
        font-size: 24px;
        font-weight: 500;
      }
    }

    &:last-child {
      margin-top: 40px;
    }
  }
}
</style>
