<template>
  <div class="posts-list">
    <div v-for="post in getPosts" :key="post.id" class="posts-list--item">
      <Post :post="post" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { GET_POSTS } from "~/store/getters-types";
import Post from "@/components/posts/Post";
import postService from "~/services/postService";
export default {
  components: { Post },
  computed: {
    ...mapGetters({
      getPosts: GET_POSTS
    })
  },
  async asyncData({ $axios, store }) {
      await postService.getPosts({ $axios, store })
  }
}
</script>

<style lang="scss">
.posts-list {
  margin-top: 20px;

  &--item {
    margin-bottom: 20px;
  }
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
