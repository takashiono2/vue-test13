import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state){
      state.count++;
    },
    addCount(state,payload){
      state.count += payload.value
    }
  },
  actions: {
    // incrementAction(context){
    //   context.commit('increment')
    // },
    incrementAction({commit}){
      commit('increment')
    },
    addCount({commit},payload){
      commit('addCount',payload)
    }
  },
  modules: {
  }
})
