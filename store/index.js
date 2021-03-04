import * as mutationsType from "./mutations-types"
import * as gettersType from "./getters-types"

export const state = () => ({
    posts: [],
    comments: [],
    selectedPost: null,
    players: []
})

export const mutations = {
  [mutationsType.INIT_POSTS](state, posts) {
      state.posts = posts
  },
  [mutationsType.ADD_COMMENTS](state, comments) {
    state.comments.push({ postId: comments.postId, data: comments.data })
  },
  [mutationsType.SET_SELECTED_POST](state, post) {
      state.selectedPost = post
  },
  [mutationsType.ADD_PLAYER](state, player) {
    state.players.push(player)
  }
}

export const getters = {
  [gettersType.GET_POSTS](state) {
    return state.posts
  },
  [gettersType.GET_POST_BY_ID]: (state) => (id) => {
      return state.posts.filter(post => post.id === id)
  },
  [gettersType.GET_COMMENTS_BY_POST_ID]: (state) => (id) => {
      return state.comments.find(comment => comment.postId === id)
  },
  [gettersType.GET_SELECTED_POST](state) {
    return state.selectedPost
  },
  [gettersType.GET_PLAYERS](state) {
    return state.players
  },
  [gettersType.GET_PLAYERS_SORTED]: (state) => (type) => {
    return [...state.players].sort((a, b) => {
      const scoreA = a.score
      const scoreB = b.score
      if (type === 'asc') {
        return scoreA > scoreB ? 1 : -1
      } else {
        return scoreB > scoreA ? 1 : -1
      }
    })
  }
}
