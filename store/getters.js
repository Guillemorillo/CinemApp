export default {
  isAuthenticated: state => state.user,
  getDisplayName: state => state.user ? state.user.displayName : null,
  getUserPhoto: state => state.user ? state.user.photoURL : null,
  getEmail: state => state.user ? state.user.email : null,
  getUserData: state => state.userData || {},
  getMoovies: state => state.moovies,
  getFavorite: state => state.favorite,
  getFavoritePosts: state => state.favoritePosts,
  getSeen: state => state.seen,
  getPend: state => state.pend,
  getSeenMoovies: state => state.seenMoovies,
  getPendMoovies: state => state.pendMoovies
}
