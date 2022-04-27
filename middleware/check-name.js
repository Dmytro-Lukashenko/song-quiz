export default function ({ store, redirect }) {
  if (!store.getters.getPlayerName) {
    return redirect('/')
  }
}
