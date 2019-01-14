import '@babel/polyfill'
import firebase from 'firebase'
import Vue from 'vue'
import VueFire from 'vuefire'
import VueResource from 'vue-resource'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import App from './App.vue'

Vue.use(VueMaterial)
Vue.use(VueFire)
Vue.use(VueResource)
Vue.use(firebase)

window.$ = require('jquery')
window.JQuery = require('jquery')

Vue.config.productionTip = false

new Vue({
	created: function() {
		$('.preloader').hide();
	},
	render: h => h(App)
}).$mount('#app')