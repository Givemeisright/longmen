import recordListModel from "@/models/recordListModel";
import tagListModel from "@/models/tagListModel";

const store = {
  // 存储record
  recordList: recordListModel.fetch(),
  createRecord: (record: RecordItem) => {
    return recordListModel.create(record);
  },

  // 存储tag
  tagList: tagListModel.fetch(),

  findTag(id: string) {
    return this.tagList.filter((t) => t.id === id)[0];
  },

  createTag: (name: string) => {
    const message = tagListModel.create(name);
    if (message === "重复") {
      window.alert("表签名重复");
    } else if (message === "成功") {
      window.alert("添加成功");
    }
  },

  removeTag: (id: string) => {
    return tagListModel.remove(id);
  },
  // object:Exclude<Tag,'id'>  包含Tag中除了id的所有内容
  updateTag: (id: string, name: string) => {
    return tagListModel.update(id, name);
  },
};

export default store;
