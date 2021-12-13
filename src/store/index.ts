import deepClone from "@/lib/clone";
import Vue from "vue";
import Vuex from "vuex";
// use会把store绑到Vue.prototype.$store = store 上,后面为用户传的store
Vue.use(Vuex);

const store = new Vuex.Store({
  // 存储数据，类似data
  state: {
    recordList: [] as RecordItem[],
  },
  // 操作数据，类似methods
  mutations: {
    fetchRecords(state) {
      state.recordList = JSON.parse(
        window.localStorage.getItem("recordList") || "[]"
      ) as RecordItem[];
    },
    createRecord(state, record) {
      //深拷贝一个对象来存储数据，然后再push
      const updateRecordList: RecordItem = deepClone(record);
      updateRecordList.createdTime = new Date();
      // 或者使用最新的 this.recordList?.push(updateRecordList);
      state.recordList.push(updateRecordList);
      store.commit("saveRecords");
      // recordStore.saveRecords();
    },
    saveRecords(state) {
      window.localStorage.setItem(
        "recordList",
        JSON.stringify(state.recordList)
      );
    },
  },
  actions: {},
  modules: {},
});

export default store;
