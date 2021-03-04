import { Post } from "~/models/Post";
import {ADD_COMMENTS, INIT_POSTS} from "~/store/mutations-types";
import { SET_SELECTED_POST } from "~/store/mutations-types";
import { GET_COMMENTS_BY_POST_ID } from "~/store/getters-types";
export default {

  async getPosts({ $axios, store }) {
    /** get list of posts with API **/
      const { data } = await $axios.get(`${process.env.baseServerUrl}posts`).catch(
        err => console.log(err)
      )
      if (data) {
          const postsData = data.slice(0, 5).map(post => new Post(post))
          store.commit(INIT_POSTS, postsData)
          return postsData
      }
  },

  async getPostById({ $axios, store }, id) {
      const posts = store.getters.getPosts;
      if (posts.length) {
        /** Get post from store if home page is visited before **/
        const selectedPost = store.getters.getPostById(id)[0]
        store.commit(SET_SELECTED_POST, selectedPost)
        return selectedPost
      } else {
        /** Get post from API and **/
        const { data } = await $axios.get(`${process.env.baseServerUrl}posts/${id}`).catch(
          err => console.log(err)
        )
        if (data) {
          store.commit(SET_SELECTED_POST, data)
          return data
        }
      }
  },

  async getPostComments({ $axios, store }, id) {
      /** returns comments if the exists in the store **/
      const comments = store.getters[GET_COMMENTS_BY_POST_ID](id)
      if (comments) {
        return comments
      } else {
          /** fetch comments from API **/
          const { data } = await $axios.get(`${process.env.baseServerUrl}posts/${id}/comments`).catch(
            err => console.log(err)
          )
          if (data && data.length) {
            store.commit(ADD_COMMENTS, { postId: id, data })
            return { postId: id, data }
          }
      }
  }
}
