import creatId from "@/lib/idCreator";

const localStorageKeyName = "tagList";
const tagStore = {
  tagList: [] as Tag[],
  // 存储tag
  fetchTags() {
    this.tagList = JSON.parse(
      window.localStorage.getItem(localStorageKeyName) || "[]"
    );
    return this.tagList;
  },
  findTag(id: string) {
    return this.tagList.filter((t) => t.id === id)[0];
  },

  createTag(name: string) {
    const names = this.tagList.map((item) => item.name);
    if (names.indexOf(name) >= 0) {
      window.alert("表签名重复");
      return "重复";
    }
    const id = creatId().toString();
    this.tagList.push({ id, name: name });
    this.saveTags();
    window.alert("添加成功");
    return "成功";
  },
  saveTags() {
    window.localStorage.setItem(
      localStorageKeyName,
      JSON.stringify(this.tagList)
    );
  },
  removeTag(id: string) {
    let index = -1;
    for (let i = 0; i < this.tagList.length; i++) {
      if (this.tagList[i].id === id) {
        index = i;
        break;
      }
    }
    this.tagList.splice(index, 1);
    this.saveTags();
    return true;
  },
  // object:Exclude<Tag,'id'>  包含Tag中除了id的所有内容
  updateTag(id: string, name: string) {
    const idList = this.tagList.map((item) => item.id);
    if (idList.indexOf(id) >= 0) {
      const names = this.tagList.map((item) => item.name);
      if (names.indexOf(name) >= 0) {
        return "重复";
      } else {
        const tag = this.tagList.filter((item) => item.id === id)[0];
        tag.name = name;
        tag.id = name;
        this.saveTags();
        return "成功";
      }
    } else {
      return "没有找到";
    }
  },
};
tagStore.fetchTags();
export default tagStore;
