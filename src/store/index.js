import Vue from 'vue'
import Vuex from 'vuex'
import juegos from '@/juegos.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    juegos,
    cantidadDeJuegos: 0,
  },
  getters: {
    totalDeJuegos(state){
      let cantidadDeJuegos = 0;
      for (let juego of state.juegos){
        cantidadDeJuegos += parseInt(juego.stock);
      }
      return cantidadDeJuegos;
    }
  },
  mutations: {
    masJuegos(state, codigo){
      for (let i=0; i < state.juegos.length; i++){
        if(codigo === state.juegos[i].codigo){
          let cantidad = parseInt(state.juegos[i].stock);
          cantidad += 1
          state.juegos[i].stock = cantidad.toString();
        }else{
          console.log(codigo + " distinto a " + state.juegos[i].codigo)
        }
      }
    },
    menosJuegos(state, codigo){
      for(let i=0; i < state.juegos.length; i++){
        if(codigo === state.juegos[i].codigo){
          let cantidad = parseInt(state.juegos[i].stock);
          cantidad += -1
          state.juegos[i].stock = cantidad.toString();
        }
      }
    },
    cambioColor(state, colorCodigo){
      let cambioColor = colorCodigo.color;
      let codigoColor = colorCodigo.codigo;
      for(let i=0; i < state.juegos.length; i++){
        if(codigoColor === state.juegos[i].codigo){
          state.juegos[i].color = cambioColor;
        }
      }

    }
  },
  actions: {
    masJuegos({commit}, codigo){
      commit("masJuegos", codigo)
    },
    menosJuegos({commit}, codigo){
      commit("menosJuegos", codigo)
    },
    actionColor({commit}, colorCodigo){
      commit("cambioColor", colorCodigo)
    }
  },
  modules: {
  }
})
