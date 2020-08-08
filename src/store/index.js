import Vue from 'vue'
import Vuex from 'vuex'
import Frame from '../pages/frames/store'
import Task from '../pages/tasks/store'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    Frame,
    Task
  }
})
