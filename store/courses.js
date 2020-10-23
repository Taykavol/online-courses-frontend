export const state = () => ({
  best: [],
  newest:[],
})

export const mutations = {
  setBestCourses(state, value) {
      state.best = value
  }
}