import deepClone from "@/lib/clone";
import creatId from "@/lib/idCreator";
import Vue from "vue";
import Vuex from "vuex";
// use会把store绑到Vue.prototype.$store = store 上,后面为用户传的store
Vue.use(Vuex);

const store = new Vuex.Store({
  // 存储数据，类似data
  state: {
    recordList: [] as RecordItem[],
    tagList: [] as Tag[],
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
    fetchTags(state) {
      return (state.tagList = JSON.parse(
        window.localStorage.getItem("tagList") || "[]"
      ));
    },
    findTag(state, id: string) {
      return state.tagList.filter((t) => t.id === id)[0];
    },

    createTag(state, name: string) {
      const names = state.tagList.map((item) => item.name);
      if (names.indexOf(name) >= 0) {
        window.alert("表签名重复");
        return "重复";
      }
      const id = creatId().toString();
      state.tagList.push({ id, name: name });
      store.commit("saveTags");
      window.alert("添加成功");
      return "成功";
    },
    saveTags(state) {
      window.localStorage.setItem("tagList", JSON.stringify(state.tagList));
    },
    // removeTag(state, id: string) {
    //   let index = -1;
    //   for (let i = 0; i < this.tagList.length; i++) {
    //     if (state.tagList[i].id === id) {
    //       index = i;
    //       break;
    //     }
    //   }
    //   this.tagList.splice(index, 1);
    //   this.saveTags();
    //   return true;
    // },
    // // object:Exclude<Tag,'id'>  包含Tag中除了id的所有内容
    // updateTag(id: string, name: string) {
    //   const idList = this.tagList.map((item) => item.id);
    //   if (idList.indexOf(id) >= 0) {
    //     const names = this.tagList.map((item) => item.name);
    //     if (names.indexOf(name) >= 0) {
    //       return "重复";
    //     } else {
    //       const tag = this.tagList.filter((item) => item.id === id)[0];
    //       tag.name = name;
    //       tag.id = name;
    //       this.saveTags();
    //       return "成功";
    //     }
    //   } else {
    //     return "没有找到";
    //   }
    // },
  },
  actions: {},
  modules: {},
});

export default store;
