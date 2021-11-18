const localStorageKeyName = "tagList";
type TagListModel = {
  data: string[];
  fetch: () => string[];
  create: (name: string) => "成功" | "重复";
  save: () => void;
};
const tagListModel: TagListModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(
      window.localStorage.getItem(localStorageKeyName) || "[]"
    );
    return this.data;
  },
  create(name: string) {
    if (this.data.indexOf(name) >= 0) {
      return "重复";
    }
    this.data.push(name);
    this.save();
    return "成功";
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  },
};

export default tagListModel;
