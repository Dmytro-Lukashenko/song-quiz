import { SET_PLAYER_NAME } from './-listMutations'

export const state = () => ({
  playerName: '',
})

export const mutations = {
  [SET_PLAYER_NAME](state, nameValue) {
    state.playerName = nameValue.toUpperCase()
  },
}

export const actions = {
  setPlayerName({ commit }, nameValue) {
    commit('SET_PLAYER_NAME', nameValue)
  },
}

export const getters = {
  getPlayerName(state) {
    return state.playerName
  },
}
