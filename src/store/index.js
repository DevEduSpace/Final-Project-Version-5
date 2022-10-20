import { getdegree, getFaculty, getInput, getSU } from "../components/Login_variables"
import { createStore } from 'vuex'
import router from '../router'
import { auth, db } from '../firebase'
import { stelliesTest } from '../firebase/read'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { doc, setDoc } from "firebase/firestore";

export default createStore({
  state: {
    user: null,
    userType: ""
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
    CLEAR_USER(state) {
      state.user = null
    },
    SET_USER_TYPE(state, type) {
      state.userType = type
    },
  },
  actions: {
    async login({ commit }, details) {
      const { email, password } = details
      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (error) {
        switch (error.code) {
          case 'auth/user-not-found':
            alert("User not found")
            break
          case 'auth/wrong-password':
            alert("Wrong password")
            break
          default:
            alert("Something went wrong")
        }
        return
      }
      commit('SET_USER', auth.currentUser)
      router.push('/profile')
    },

    async register({ commit }, details) {
      const { email, password, } = details //made change johan
      try {
        let cred = await createUserWithEmailAndPassword(auth, email, password)

        if (this.state.userType === "student") {
          let data = {
            email: cred.user.email,
            fullName: getInput(),
            SU: getSU(),
            degree: getdegree(),
            faculty: getFaculty(),
            Utype: "student"
          }
          setDoc(doc(db, "profile", cred.user.uid), data);
        }
        if (this.state.userType === "tutor") {
          let data = {
            email: cred.user.email,
            companyName: getInput(),
            Utype: "tutor",
          }
          setDoc(doc(db, "profile", cred.user.uid), data);
        }

        if (this.state.userType === "sponsor") {
          let data = {
            email: cred.user.email,
            companyName: getInput(),
            Utype: "sponsor"

          }
          setDoc(doc(db, "profile", cred.user.uid), data);
        }

        else {
          let data = {
            email: cred.user.email,
            companyName: getInput(),
          }
          setDoc(doc(db, "profile", cred.user.uid), data);
        }

      } catch (error) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            alert("Email already in use")
            break
          case 'auth/invalid-email':
            alert("Invalid email")
            break
          case 'auth/operation-not-allowed':
            alert("Operation not allowed")
            break
          case 'auth/weak-password':
            alert("Weak password")
            break
          default:
            alert("Something went wrong")
            console.log(error)
        }
        return
      }
      commit('SET_USER', auth.currentUser)
      router.push('/profile')
    },

    async logout({ commit }) {
      await signOut(auth)
      commit('CLEAR_USER')
      router.push('/login')
    },

    // Checks whether user exists
    fetchUser({ commit }) {
      auth.onAuthStateChanged(async user => {
        if (user === null) {
          commit('CLEAR_USER')
        } else {
          commit('SET_USER', user)
          if (router.isReady() && router.currentRoute.value.path === '/login') {
            router.push('/profile')
          }
        }
      })
    },
    updateUserType({ commit }, userType) {
      commit('SET_USER_TYPE', userType);
      return this.state.userType
      console.log(this.state.userType);
    }
  }
})