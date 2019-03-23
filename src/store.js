import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      projects : false ,
      task_list : false ,
      task : false ,
      sub_task : false,
      comments : 'Initial comments'
  },
  getters : {
      getComments(state){
         return state.comments ;
      }
  },
  mutations: {
      changeComments(state,param){
          state.comments = param ;
      }
  },
  actions: {
      changeCommentsAction(context,param){
          context.commit('changeComments' , param);
      }
  }
})
