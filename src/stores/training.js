import { defineStore } from 'pinia'

const urlAPI = 'https://michonmaximilien.dev:3000/users_EP'
const routesName = ['seasons', 'weeks', 'sessions', 'exercises', 'legends']

export const useTrainingStore = defineStore('trainingStore', {
  state: () => ({
    //training[seasons,weeks,sessions,exercises]
    training: [null, null, null, null, null],
  }),
  getters: {
    getAllSeasons: async (state) => {
      const index = 0
      if (state.training[index] === null) {
        await state.fetchAllThings(routesName[index], index)
        // console.log(state.training[index])
        return state.training[index]
      }
      return state.training[index]
    },
    getAllWeeks: async (state) => {
      const index = 1
      if (state.training[index] === null) {
        await state.fetchAllThings(routesName[index], index)
        // console.log(state.training[index])
        return state.training[index]
      }
      return state.training[index]
    },
    getAllSessions: async (state) => {
      const index = 2
      if (state.training[index] === null) {
        await state.fetchAllThings(routesName[index], index)
        // console.log(state.training[index])
        return state.training[index]
      }
      return state.training[index]
    },
    getAllExercises: async (state) => {
      const index = 3
      if (state.training[index] === null) {
        await state.fetchAllThings(routesName[index], index)
        // console.log(state.training[index])
        return state.training[index]
      }
      return state.training[index]
    },
    getAllLegends: async (state) => {
      const index = 4
      if (state.training[index] === null) {
        await state.fetchAllThings(routesName[index], index)
        // console.log(state.training[index])
        return state.training[index]
      }
      return state.training[index]
    },
  },
  actions: {
    //Fonction "universelle" pour récupérer les infos
    async fetchAllThings(route, index) {
      // console.log(`${urlAPI}/${route}`)
      const resp = await fetch(`${urlAPI}/${route}`)

      if (!(await showErrorFetch(resp))) {
        this.training[index] = await resp.json()
        // console.log('this.training[' + index + '] : ', this.training[index])
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
