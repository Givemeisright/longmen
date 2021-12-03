const localStorageKeyName = "tagList";
type Tag = {
  id: string;
  name: string;
};
type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => "成功" | "重复";
  update: (id: string, name: string) => "成功" | "没有找到" | "重复";
  remove: (id: string) => boolean;
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
  create(name) {
    const names = this.data.map((item) => item.name);
    if (names.indexOf(name) >= 0) {
      return "重复";
    }
    this.data.push({ id: name, name: name });
    this.save();
    return "成功";
  },
  update(id, name) {
    const idList = this.data.map((item) => item.id);
    if (idList.indexOf(id) >= 0) {
      const names = this.data.map((item) => item.name);
      if (names.indexOf(name) >= 0) {
        return "重复";
      } else {
        const tag = this.data.filter((item) => item.id === id)[0];
        tag.name = name;
        tag.id = name;
        this.save();
        return "成功";
      }
    } else {
      return "没有找到";
    }
  },
  remove(id) {
    let index = -1;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id === id) {
        index = i;
        break;
      }
    }
    this.data.splice(index, 1);
    this.save();
    return true;
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  },
};

export default tagListModel;
