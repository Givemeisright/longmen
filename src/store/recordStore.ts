import deepClone from "@/lib/clone";

const localStorageKeyName = "recordList";

const recordStore = {
  recordList: [] as RecordItem[],
  // 存储record
  fetchRecords() {
    this.recordList = JSON.parse(
      window.localStorage.getItem(localStorageKeyName) || "[]"
    ) as RecordItem[];
    return this.recordList;
  },
  saveRecords() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList));
  },
  createRecord(record: RecordItem) {
    //深拷贝一个对象来存储数据，然后再push
    const updateRecordList: RecordItem = deepClone(record);
    updateRecordList.createdTime = new Date();
    // 或者使用最新的 this.recordList?.push(updateRecordList);
    this.recordList && this.recordList.push(updateRecordList);
    recordStore.saveRecords();
  },
};
recordStore.fetchRecords();
export default recordStore;
