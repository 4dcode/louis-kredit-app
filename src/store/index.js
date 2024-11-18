import { createStore } from 'vuex'
import { LANG } from '../locale/language'

export default createStore({
  state: {
    user: {
      
    },
    lang: LANG,
    current_language: localStorage.getItem('current_language') === null ? 'id' : localStorage.getItem('current_language'),
  },
  getters: {
  },
  mutations: {
    SetCurrentLanguage(state, payload) {
      state.current_language = payload;
      localStorage.setItem('current_language', payload);
    },
  },
  actions: {
  },
  modules: {
  }
})
