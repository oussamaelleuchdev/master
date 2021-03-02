export const state = () => ({
    posts: [],
    selectedPost: null,
    players: []
})

export const mutations = {
  initPosts(state, posts) {
      state.posts = posts
  },
  setSelectedPost(state, post) {
      state.selectedPost = post
  },
  addPlayer(state, player) {
    state.players.push(player)
  }
}

export const getters = {
  getPosts(state) {
    return state.posts
  },
  getPostById: (state) => (id) => {
      return state.posts.filter(post => post.id === id)
  },
  getSelectedPost(state) {
    return state.selectedPost
  },
  getPlayers(state) {
    return state.players
  },
  getSortedPlayers: (state) => (type) => {
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
