import { defineStore } from 'pinia'

const urlAPI = 'http://localhost:3000/users_EP'

export const useTrainingStore = defineStore('trainingStore', {
  state: () => ({
    exercises: null,
  }),
  getters: {},
  actions: {
    async fetchAllExercises() {
      const resp = await fetch(`${urlAPI}/exercises`)
      //Si j'ai pas d'erreur, ça continue le login, sinon ça affiche l'erreur
      if (!(await showErrorFetch(resp))) {
        const data = await resp.json()
        this.exercises = await data
        console.log('userStore this.exercises', this.exercises[0])
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
