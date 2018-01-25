export default {
  isAuthenticated: state => state.user,
  getDisplayName: state => state.displayName,
  getUserPhoto: state => state.user ? state.user.photoURL : null,
  getUsers: state => state.users
}
