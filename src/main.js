import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import VueLoading from 'vuejs-loading-plugin'
import baseVuex from './boot/baseVuex'
import vuetify from './plugins/vuetify'
Vue.use(Vuelidate)
Vue.use(VueLoading, { text: 'Carregando' })
Vue.use(baseVuex)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
