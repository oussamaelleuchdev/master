<template>
    <div class="post-details">
      <div class="post-details--block">
         <PostDetails />
      </div>
      <div class="post-details--comments">
        <div class="post-details--comments--title"> Comments :</div>
        <div v-for="comment in comments" class="comment">
          <PostComment :comment="comment" :key="comment.id" />
        </div>
      </div>
    </div>
</template>

<script>
import postService from "~/services/postService";
import PostDetails from "~/components/posts/PostDetails";
import PostComment from "~/components/posts/PostComment";

export default {
    components: { PostDetails, PostComment },
    data() {
      return {
        comments: []
      }
    },
    async asyncData({ $axios, store, params }) {
      const postId = parseInt(params.id)
      await postService.getPostById({ $axios, store }, postId)
      const { data } = await postService.getPostComments({ $axios, store }, postId)
      return { comments: data }
    }
}
</script>

<style lang="scss" scoped>
  .post-details {

    &--comments {
      text-transform: capitalize;

      &--title {
        font-size: 32px;
        font-weight: 400;
        margin: 20px 0;
      }
      .comment {
        margin-bottom: 20px;
      }
    }
  }
</style>
