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
interface Window {
  tagList: Tag[];
}
