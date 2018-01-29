import firebaseApp from '~/firebaseapp'
import { firebaseAction } from 'vuexfire'

export default {
  createAuthUser ({commit, dispatch}, {email, password, newUser}) {
    firebaseApp.auth().createUserWithEmailAndPassword(email, password).then(({uid}) => {
      commit('setAuthError', '')
      let db = firebaseApp.database()
      db.ref('/users/' + uid).set(newUser)
    }).catch(error => {
      commit('setAuthError', error.message)
    })
  },
  authenticate ({state, commit}, {email, password}) {
    firebaseApp.auth().signInWithEmailAndPassword(email, password).then(() => {
      commit('setAuthError', '')
    }).catch(err => {
      commit('setAuthError', err.message)
    })
  },
    /**
   * Resets authentication error
   * @param commit
   */
  resetAuthError ({commit}) {
    commit('setAuthError', '')
  },
  /**
  * Logouts the user from the application
  * @param {object} store
  */
  logout ({state}, router) {
    firebaseApp.auth().signOut()
    this.$router.push('/')
  },
  /**
   * Binds firebase auth listener to the auth changes to the callback that will set the store's user object
   * @param {object} store
   */
  bindAuth ({commit, dispatch, state}) {
    let db = firebaseApp.database()
    let usersRef = db.ref(`/users`)
    firebaseApp.auth().onAuthStateChanged(user => {
      commit('setUser', user)
      commit('setUsersRef', usersRef)
      if (user) {
        let displayName = user.displayName || user.email.split('@')[0]
        let id = user.uid
        if (!user.displayName) {
          dispatch('updateUserName', displayName)
        }
        commit('setDisplayName', displayName)
        commit('setEmail', user.email)
        dispatch('bindFirebaseReferences', user)
        dispatch('bindUserData', {usersRef, id})
        usersRef.child(user.uid).child('exist').set(true)
      }
      if (!user) {
        dispatch('unbindFirebaseReferences')
        dispatch('unbindUserData')
      }
    })
  },
  updateUserName ({state, commit}, displayName) {
    state.user.updateProfile({
      displayName: displayName
    })
    commit('setDisplayName', displayName)
  },
  updateProfileInfo ({state, commit}, newProfile) {
    state.userData.update(newProfile)
  },
  bindFirebaseSetProfile: firebaseAction(({state, commit, dispatch}, uid) => {
    let db = firebaseApp.database()
    let userProfile = db.ref('/users/' + uid)
    dispatch('bindFirebaseReference', {reference: userProfile, toBind: 'userData'}).then(() => { commit('setNewProfile', userProfile) })
  }),
   /**
  * Binds firebase configuration database reference to the store's corresponding object
  * @param {object} store
  */
  bindFirebaseReferences: firebaseAction(({state, commit, dispatch}, user) => {
    let db = firebaseApp.database()
    let mooviesRef = db.ref('/moovies')

    dispatch('bindFirebaseReference', {reference: mooviesRef, toBind: 'moovies'}).then(() => {
      commit('setMooviesRef', mooviesRef)
    })
  }),
    /**
  * Generic binder of the firebase reference to the given key of the store's state
  * Checks if the value already exists in the database, otherwise will set it with the default store's state before binding
  * @param {object} store
  */
  bindFirebaseReference: firebaseAction(({bindFirebaseRef, state}, {reference, toBind}) => {
    return reference.once('value').then(snapshot => {
      if (!snapshot.val()) {
        reference.set(state[toBind])
      }
      bindFirebaseRef(toBind, reference)
    })
  }),
  bindUserData: firebaseAction(({state, dispatch}, {usersRef, id}) => {
    dispatch('bindFirebaseReference', {reference: usersRef.child(id), toBind: 'userData'})
  }),
  /**
  * Undbinds firebase references
  */
  unbindUserData: firebaseAction(({state, dispatch, commit}) => {
    commit('setDisplayName', '')
    dispatch('unbindFirebaseReferences', {toUnbind: 'userData'})
  }),
  unbindFirebaseReferences: firebaseAction(({unbindFirebaseRef, commit}) => {
    commit('setMooviesRef', null)
    try {
      unbindFirebaseRef('moovies')
    } catch (error) {
      return
    }
  })
}
