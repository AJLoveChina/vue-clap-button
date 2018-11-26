import vueClapButton from './components/vue-clap-button'

const obj = {
  install(Vue, opts = {}) {
    Vue.component(vueClapButton.name, vueClapButton);
  }
};

if (window.Vue) {
  window.Vue.use(obj)
}
export default obj;
