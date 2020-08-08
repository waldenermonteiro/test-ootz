import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import VueLoading from 'vuejs-loading-plugin'
import vuetify from './plugins/vuetify'
import BaseVuex from './plugins/baseVuex'
Vue.use(Vuelidate)
Vue.use(VueLoading, { text: 'Loading' })
Vue.use(BaseVuex)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
