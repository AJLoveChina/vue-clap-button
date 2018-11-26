import Vue from 'vue'
import button from './index.js'
import Test from './components/Test'

Vue.use(button);

new Vue({
  el: '#app',
  components: {Test},
  template: '<Test/>'
});
