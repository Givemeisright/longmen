import Vue from "vue";
import VueRouter from "vue-router";
import Money from "@/views/Money.vue";
import Labels from "@/views/Labels.vue";
import Statistics from "@/views/Statistics.vue";
import Notfound from "@/views/Notfound.vue";
import EditLabel from '@/views/EditLabel.vue';
import EChartOut from '@/views/EChart-out.vue';
import EChartIn from '@/views/EChart-in.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/money",
  },
  {
    path: "/money",
    component: Money,
  },
  {
    path: "/labels",
    component: Labels,
  },
  {
    path: "/statistics",
    component: Statistics,
  },
  {
    path: "/labels/edit/:id",
    component: EditLabel,
  },
  {
    path: "/statistics/chart-out/",
    component: EChartOut,
  },
  {
    path: "/statistics/chart-in/",
    component: EChartIn,
  },
  {
    path: "*",
    component: Notfound,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
