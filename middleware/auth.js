export default async ({ store, redirect }) => { // não está sendo usado, pois nessa aplicação estou usando o laravel/sanctum auth direto no nuxt.config.js
  if (!store.getters['user/hasToken']) {
    await store.dispatch('user/ActionCheckToken')

    if (!store.getters['user/tokenVerify']) {
      return redirect('/login')
    }
  }
}