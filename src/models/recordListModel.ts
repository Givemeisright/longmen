import deepClone from "@/lib/clone";

const localStorageKeyName = "recordList";
const recordListModel = {
  data: [] as RecordItem[],
  create(record: RecordItem) {
    //深拷贝一个对象来存储数据，然后再push
    const updateRecordList: RecordItem = deepClone(record);
    updateRecordList.createdTime = new Date();
    this.data.push(updateRecordList);
    recordListModel.save();
  },
  fetch() {
    this.data = JSON.parse(
      window.localStorage.getItem(localStorageKeyName) || "[]"
    ) as RecordItem[];
    return this.data;
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  },
};
recordListModel.fetch();
export default recordListModel;
