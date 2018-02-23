import { getArray } from '~/utils/utils'
export default {
  isAuthenticated: state => state.user,
  getDisplayName: state => state.user ? state.user.displayName : null,
  getUserPhoto: state => state.user ? state.user.photoURL : null,
  getEmail: state => state.user ? state.user.email : null,
  getUserData: state => state.userData || {},
  getMoovies: state => getArray(state.moovies).reverse(),
  getFavorite: state => state.favorite,
  getFavoritePosts: state => getArray(state.favoritePosts).reverse(),
  getSeen: state => state.seen,
  getPend: state => state.pend,
  getSeenMoovies: state => getArray(state.seenMoovies).reverse(),
  getPendMoovies: state => getArray(state.pendMoovies).reverse()
}
