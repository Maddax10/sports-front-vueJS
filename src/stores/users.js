import { defineStore } from 'pinia'

export const useUsersStore = defineStore('usersStore', {
  state: () => ({
    user: null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.user,
  },
  actions: {
    async fetchUser(username, password) {
      const resp = await fetch(`http://localhost:3000/users_EP/login/${username}/${password}`)
      if (resp.ok) {
        const data = await resp.json()
        return data
      }

      return null
    },
  },
})
