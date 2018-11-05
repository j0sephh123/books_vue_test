import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: [
      {_id: 1, name: 'sven', active: true, info: 'sven info'},
      {_id: 2, name: 'lich', active: false, info: 'lich info'},
      {_id: 3, name: 'mirana', active: false, info: 'mirana info'},
      {_id: 4, name: 'bloodseeker', active: false, info: 'bloodseeker info'},
      {_id: 5, name: 'earthshaker', active: false, info: 'earthshaker info'},
      {_id: 6, name: 'treant', active: false, info: 'treant info'},
      {_id: 7, name: 'riki', active: false, info: 'riki info'},
      {_id: 8, name: 'tiny', active: false, info: 'tiny info'},
    ],
    chapters: [
      {_id: 'chapter1', name: 'chapter 1'},
      {_id: 'chapter2', name: 'chapter 2'},
      {_id: 'chapter3', name: 'chapter 3'},
      {_id: 'chapter4', name: 'chapter 4'},
      {_id: 'chapter5', name: 'chapter 5'},
    ],
    activeNav: {
      main: null,
      secondary: null,
    }
  },
  mutations: {
    selectCharacter(state, {id}) {
      state.characters = state.characters.map(c => {
        // toggle old
        if(c.active) {
          c.active = false;
        }

        // toggle new        
        if(c._id === id) {
          c.active = true; 
        }

        return c;
      });
    }
  },
  getters: {
    characters: state => state.characters,
    selectedCharacter: state => state.characters.filter(c => c.active)[0],
    chapters: state => state.chapters,
    activeNav: state => state.activeNav,
  }
})
