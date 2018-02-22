import firebaseApp from '~/firebaseapp'
import { firebaseAction } from 'vuexfire'
import uuidv1 from 'uuid/v1'

const _uploadImage = (folder, user) => (file) => {
  let ref = firebaseApp.storage().ref().child(folder + '/')
  return ref.child(uuidv1()).child(file.name).put(file).then(snapshot => {
    return snapshot.downloadURL
  })
}
export default {
  uploadImage ({state}, {files, folder}) {
    return Promise.all(files.map(_uploadImage(folder)))
  },
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
  logout ({dispatch}, router) {
    firebaseApp.auth().signOut()
    this.$router.push('/')
    dispatch('unbindFirebaseReferences')
    dispatch('unbindUserData')
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
        if (!user.displayName) { dispatch('updateUserName', {displayName, id}) }
        dispatch('bindFirebaseReferences', user)
        dispatch('bindUserData', {usersRef, id})
        usersRef.child(user.uid).child('exist').set(true)
        let addFavorites = db.ref(`/users/` + user['uid'] + `/favorites`)
        let seensRef = db.ref(`/users/` + user['uid'] + `/seens`)
        let pendRef = db.ref(`/users/` + user['uid'] + `/pendient`)
        addFavorites.on('value', function (snapshot) {
          commit('setFavorite', snapshot.val())
        })
        seensRef.on('value', function (snapshot) {
          commit('setSeens', snapshot.val())
        })
        pendRef.on('value', function (snapshot) {
          commit('setPends', snapshot.val())
        })
      }
      if (!user) {
        dispatch('unbindFirebaseReferences')
        dispatch('unbindUserData')
      }
    })
  },
  updateUserName ({state}, displayName) {
    state.user.updateProfile({
      displayName: displayName
    })
  },
  updatePhotoURL ({state}, photoURL) {
    state.user.updateProfile({
      photoURL: photoURL
    })
  },
  updateProfileInfo ({state}, newProfile) {
    let db = firebaseApp.database()
    let userRef = db.ref('users/' + state.userData['.key'])
    userRef.update(newProfile)
  },
  /** Moovies */
  uploadMoovie ({state}, newMoovie) {
    newMoovie.user_id = state.userData['.key']
    state.mooviesRef.push(newMoovie)
  },
  addToList ({commit, state}, info) {
    let db = firebaseApp.database()
    let addFavorites = db.ref(`/users/` + info.userUid + `/` + info.list)
    addFavorites.child(info.key).set(info.title)
  },
  unSetFromList ({commit, state}, info) {
    let db = firebaseApp.database()
    let addFavorites = db.ref(`/users/` + info.userUid + `/` + info.list)
    addFavorites.child(info.key).remove()
  },
  favoritePostsA ({commit, state}) {
    let db = firebaseApp.database()
    let favoriteP = state.favorite
    db.ref('/moovies').once('value').then(snapshot => {
      if (snapshot.val()) {
        const favoritesPosts = {}
        Object.keys(snapshot.val()).forEach(function (key) {
          var idP = key
          var posts = snapshot.val()[key]
          Object.keys(favoriteP).forEach(function (key) {
            var favo = key
            if (idP === favo) {
              favoritesPosts[key] = posts
            }
          })
        })
        commit('setFavoritePosts', favoritesPosts)
      }
    })
  },
  seenPosts ({commit, state}) {
    let db = firebaseApp.database()
    let seenPo = state.seen
    db.ref('/moovies').once('value').then(snapshot => {
      if (snapshot.val()) {
        const seenM = {}
        Object.keys(snapshot.val()).forEach(function (key) {
          var idP = key
          var posts = snapshot.val()[key]
          Object.keys(seenPo).forEach(function (key) {
            if (idP === key) {
              seenM[key] = posts
            }
          })
        })
        commit('setSeenMoovies', seenM)
      }
    })
  },
  pendPosts ({commit, state}) {
    let db = firebaseApp.database()
    let pendPo = state.pend
    db.ref('/moovies').once('value').then(snapshot => {
      if (snapshot.val()) {
        const pendM = {}
        Object.keys(snapshot.val()).forEach(function (key) {
          var idP = key
          var posts = snapshot.val()[key]
          Object.keys(pendPo).forEach(function (key) {
            if (idP === key) {
              pendM[key] = posts
            }
          })
        })
        commit('setPendMoovies', pendM)
      }
    })
  },
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
