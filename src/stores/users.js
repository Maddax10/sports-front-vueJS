import { defineStore } from 'pinia'

const urlAPI = 'http://localhost:3000/users_EP'

export const useUsersStore = defineStore('usersStore', {
  state: () => ({
    user: null,
  }),
  getters: {
    getUserConnexionInfo: (state) => {
      return state.user != null
    },
  },
  actions: {
    async login(username, password) {
      const resp = await fetch(`${urlAPI}/login/${username}/${password}`)
      //Si j'ai pas d'erreur, ça continue le login, sinon ça affiche l'erreur
      if (!(await showErrorFetch(resp))) {
        const data = await resp.json()
        this.user = await data
        // console.log('userStore user', this.user)
      }
    },

    disconnect() {
      this.user = null
    },
    async register(userObject) {
      console.log(`${urlAPI}/register/`)
      console.log('register', JSON.stringify(userObject))
      //Envoyer a l'api l'userObject
      const resp = await fetch(`${urlAPI}/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userObject),
      })
      //Si je n'ai pas d'erreur, alors je fais le login direct
      if (!(await showErrorFetch(resp))) {
        console.log('Enregistré en BD !')
        console.log('connexion automatique après register')

        this.login(userObject.username_user, userObject.password_user)
      }
    },
  },
})
/**
 * Renvoit true si erreur, sinon false
 */
const showErrorFetch = async (resp) => {
  if ((await resp.ok) === false) {
    const errorData = await resp.json()
    console.log(errorData.error)
    return true
  }
}
