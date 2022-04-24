import {
  SET_PLAYER_NAME,
  SET_DATA,
  SET_CORRECT_ID,
  CHANGE_CORRECT_STATE,
  CHANGE_WRONG_STATE,
  CLEAR_DATA,
  GENRE_INCREASE,
  TOTAL_SCORE_CHANGE,
  SCORE_DECREASE,
  LOAD_DATA,
  CLEAR_STATE,
} from './-listMutations'

export const state = () => ({
  playerName: '',
  score: 3,
  totalScore: 0,
  fetchedData: [],
  loadedData: [],
  genre: 0,
  correctId: '',
})

export const mutations = {
  [SET_PLAYER_NAME](state, nameValue) {
    state.playerName = nameValue
  },
  [SET_DATA](state, fetchedData) {
    state.fetchedData = JSON.parse(JSON.stringify(fetchedData))
  },
  [SET_CORRECT_ID](state, correctId) {
    state.correctId = correctId
  },
  [CHANGE_CORRECT_STATE](state) {
    state.loadedData.find((data) => data.id === state.correctId).correct = '1'
    state.loadedData.find((data) => data.id === state.correctId).default = '1'
  },
  [CHANGE_WRONG_STATE](state, id) {
    state.loadedData.find((data) => data.id === id).correct = '2'
  },
  [CLEAR_DATA](state) {
    state.loadedData = []
    state.correctId = ''
    state.score = 3
  },
  [GENRE_INCREASE](state) {
    state.genre += 1
  },
  [SCORE_DECREASE](state) {
    state.score--
  },
  [TOTAL_SCORE_CHANGE](state) {
    state.totalScore += state.score
  },
  [LOAD_DATA](state) {
    const data = JSON.parse(JSON.stringify(state.fetchedData[state.genre].data))
    for (const key in data) {
      state.loadedData.push({ ...data[key], correct: '0', default: '0' })
    }
  },
  [CLEAR_STATE](state) {
    state.score = 3
    state.totalScore = 0
    state.loadedData = []
    state.genre = 0
    state.correctId = ''
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
    commit('SET_CORRECT_ID', correctId)
  },
  changeCorrectState({ commit }) {
    commit('CHANGE_CORRECT_STATE')
  },
  changeWrongState({ commit }, id) {
    commit('CHANGE_WRONG_STATE', id)
  },
  clearData({ commit }) {
    commit('CLEAR_DATA')
  },
  genreIncrease({ commit }) {
    commit('GENRE_INCREASE')
  },
  scoreDecrease({ commit }) {
    commit('SCORE_DECREASE')
  },
  totalScoreChange({ commit }) {
    commit('TOTAL_SCORE_CHANGE')
  },
  loadData({ commit }) {
    commit('LOAD_DATA')
  },
  clearState({ commit }) {
    commit('CLEAR_STATE')
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
    return [state.loadedData[index].audio, state.loadedData[index].id]
  },
}
