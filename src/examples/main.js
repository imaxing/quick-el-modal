import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import Test from './Test'
import QuickElModal from '../packages'
Vue.use(ElementUI)
Vue.component(Test.name, Test)
Vue.config.productionTip = false
Vue.prototype.QuickElModalShow = QuickElModal
new Vue({
  render: h => h(App)
}).$mount('#app')
