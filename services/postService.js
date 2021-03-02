import { Post } from "~/models/Post";

export default {

  async getPosts({ $axios, store }) {
    /** get list of posts with API **/
      const posts = await $axios.get(`${process.env.baseServerUrl}posts`).catch(
        err => console.log(err)
      )
      if (posts && posts.data) {
          const postsData = posts.data.slice(0, 5).map(post => new Post(post))
          store.commit('initPosts', postsData)
          return postsData
      }
  },

  async getPostById({ $axios, store }, id) {
      const posts = store.getters.getPosts;
      if (posts.length) {
        /** Get post from store if home page is visited before **/
        const selectedPost = store.getters.getPostById(id)[0]
        store.commit('setSelectedPost', selectedPost)
        return selectedPost
      } else {
        /** Get post from API and **/
        const post = await $axios.get(`${process.env.baseServerUrl}posts/${id}`).catch(
          err => console.log(err)
        )
        if (post && post.data) {
          store.commit('setSelectedPost', post.data)
          return post.data
        }
      }
  }
}
