import { SET_PLAYER_NAME, SET_DATA } from './-listMutations'

export const state = () => ({
  playerName: '',
  score: 0,
  loadedData: [],
  genre: 0,
})

export const mutations = {
  [SET_PLAYER_NAME](state, nameValue) {
    state.playerName = nameValue
  },
  [SET_DATA](state, fetchedData) {
    state.loadedData = JSON.parse(JSON.stringify(fetchedData[state.genre].data))
  },
}

export const actions = {
  setPlayerName({ commit }, nameValue) {
    commit('SET_PLAYER_NAME', nameValue)
  },
  setData({ commit }, fetchedData) {
    commit('SET_DATA', fetchedData)
  },
}

export const getters = {
  getPlayerName(state) {
    return state.playerName
  },
  getScore(state) {
    return state.score
  },
  getData(state) {
    return state.loadedData
  },
  getRandomQuizMusic(state) {
    const index = Math.floor(Math.random() * 4)
    console.log(index)
    // const url =
    //   'https://levi9-song-quiz.herokuapp.com/api/data/' +
    //   state.loadedData[index].audio
    // console.log(url)
    return [state.loadedData[index].audio, state.loadedData[index].id]
  },
}
