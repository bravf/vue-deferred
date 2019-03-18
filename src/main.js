import Vue from 'vue'
import App from './App.vue'
import Deferred from './index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// test Deferred

const defer = Deferred()

setTimeout(() => {
  defer.resolve(1)
}, 1000)

defer.promise.then(console.log)