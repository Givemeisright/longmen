//ts的类型声明，用于记录四个组件中的值
type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  createdTime?: Date;
};
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
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Window {
  // 以下可以删除
  // store: {
  //   recordList: RecordItem[];
  //   createRecord: (record: RecordItem) => void;
  //   tagList: Tag[];
  //   createTag: (name: string) => void;
  //   removeTag: (id: string) => boolean;
  //   findTag: (id: string) => Tag | undefined;
  //   // 相当于updateTag:TagListModel['update'];
  //   updateTag: (id: string, name: string) => "成功" | "没有找到" | "重复";
  // };
}
