export default function ({ store, redirect }) {
  console.log('[Middleware] Check Name')
  if (!store.getters.getPlayerName) {
    return redirect('/')
  }
}
