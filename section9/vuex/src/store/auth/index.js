const state = {
  loginUserName: ''
}

const mutations = {
  setLoginUser(state,user){
    state.loginUserName = user.name
  }
}

const actions = {
  setLoginUser(context,user){
    context.commit('setLoginUser',user)
  }
}

const getters = {}

export default{
  namespaced : true,
  state,
  mutations,
  actions,
  getters
}