import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Nav from "@/components/Nav.vue";
import Layout from "@/components/Layout.vue";
import Icon from "@/components/Icon.vue";
import tagListModel from "@/models/tagListModel";

Vue.config.productionTip = false;

Vue.component("Nav", Nav);
Vue.component("Layout", Layout);
Vue.component("Icon", Icon);

window.tagList = tagListModel.fetch();

window.findTag = (id:string) => {
  return window.tagList.filter((t) => t.id === id)[0];
};

window.createTag = (name: string) => {
  const message = tagListModel.create(name);
  if (message === "重复") {
    window.alert("表签名重复");
  } else if (message === "成功") {
    window.alert("添加成功");
  }
};

window.removeTag = (id: string) => {
  return tagListModel.remove(id);
};
// object:Exclude<Tag,'id'>  包含Tag中除了id的所有内容
window.updateTag = (id: string, name: string) => {
  return tagListModel.update(id, name);
};
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
