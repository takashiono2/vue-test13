import { createStore } from 'vuex' //storeを使うために

export default createStore({//storeを使うための関数
  state: {
    count: 0
  },
  mutations: {
    increment( state ){//increment関数で、stateオブジェクトに1ずつ増える
      state.count++;
    }
  },
  actions: {
  },
  modules: {
  }
})
