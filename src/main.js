import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from "./routes/routes"

Vue.config.productionTip = false
const router = new VueRouter({
  routes
})
Vue.use(VueRouter);
new Vue({
  el:'#app',
  router,
  render: h => h(App,{
  props:{
    endpoint:"http://code.eduweb.pl/kurs-vue/images/"
  }
})
}).$mount('#app')
