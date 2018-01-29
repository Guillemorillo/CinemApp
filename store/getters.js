export default {
  isAuthenticated: state => state.user,
  getDisplayName: state => state.displayName,
  getUserPhoto: state => state.user ? state.user.photoURL : null,
  getEmail: state => state.email,
  getUserData: state => state.userData,
  getProfile: state => state.userData || {}
}
