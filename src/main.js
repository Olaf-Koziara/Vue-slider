import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App,{
  props:{
    endpoint:"http://code.eduweb.pl/kurs-vue/images/?wait=1"
  }
})
}).$mount('#app')
