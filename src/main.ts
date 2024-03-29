import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Nav from "@/components/Nav.vue";
import Layout from "@/components/Layout.vue";
import Icon from "@/components/Icon.vue";
import Title from "@/components/Title.vue";
Vue.config.productionTip = false;

Vue.component("Nav", Nav);
Vue.component("Layout", Layout);
Vue.component("Icon", Icon);
Vue.component("Title",Title);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

window.onload = function () {  
  setTimeout(function () {
    window.scrollTo(0, document.body.clientHeight);
  }, 0);
};


// if(window.document.documentElement.clientWidth>500){
//   alert('请使用手机扫码使用')
//   const img =document.createElement('img')
//   img.src = './QRcode.png'
//   img.style.position = 'fixed'
//   img.style.left='50%'
//   img.style.top='50%'
//   img.style.transform='translate(-50%,-50%)'
//   img.style.boxShadow='0 0 10px rgba(0,0,0,0.5)'
//   document.body.appendChild(img)
// }

