import {
  SET_PLAYER_NAME,
  SET_DATA,
  SET_CORRECT_ID,
  CHANGE_CORRECT_STATE,
  CHANGE_WRONG_STATE,
} from './-listMutations'

export const state = () => ({
  playerName: '',
  score: 0,
  loadedData: [],
  genre: 0,
  correctId: '',
})

export const mutations = {
  [SET_PLAYER_NAME](state, nameValue) {
    state.playerName = nameValue
  },
  [SET_DATA](state, fetchedData) {
    const data = JSON.parse(JSON.stringify(fetchedData[state.genre].data))
    for (const key in data) {
      state.loadedData.push({ ...data[key], correct: '0', default: '0' })
    }
    console.log('loadedData', state.loadedData)
  },
  [SET_CORRECT_ID](state, correctId) {
    state.correctId = correctId
  },
  [CHANGE_CORRECT_STATE](state) {
    state.loadedData.find((data) => data.id === state.correctId).correct = '1'
    state.loadedData.find((data) => data.id === state.correctId).default = '1'
    console.log(
      'change correct',
      state.loadedData.find((data) => data.id === state.correctId)
    )
  },
  [CHANGE_WRONG_STATE](state, id) {
    console.log(state.loadedData[0].correct, id)
    state.loadedData.find((data) => data.id === id).correct = '2'
    console.log(
      'change wrong',
      state.loadedData.find((data) => data.id === id)
    )
  },
}

export const actions = {
  setPlayerName({ commit }, nameValue) {
    commit('SET_PLAYER_NAME', nameValue)
  },
  setData({ commit }, fetchedData) {
    commit('SET_DATA', fetchedData)
  },
  setCorrectId({ commit }, correctId) {
    console.log('correctId', correctId)
    commit('SET_CORRECT_ID', correctId)
  },
  changeCorrectState({ commit }) {
    commit('CHANGE_CORRECT_STATE')
  },
  changeWrongState({ commit }, id) {
    commit('CHANGE_WRONG_STATE', id)
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
    return [state.loadedData[index].audio, state.loadedData[index].id]
  },
}
