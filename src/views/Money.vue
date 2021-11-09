<template>
  <Layout class-prefix="money">
    <NumberPad :value.sync="record.amount" @submit="saveRecord" />
    <Types :type.sync="record.type" />
    <Notes @update:value="onUpdateNotes" />
    <Tags :dataSource.sync="tags" :value.sync="record.tags" />
  </Layout>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Vue from "vue";
import NumberPad from "@/components/money/NumberPad.vue";
import Types from "@/components/money/Types.vue";
import Notes from "@/components/money/Notes.vue";
import Tags from "@/components/money/Tags.vue";
import { Component, Watch } from "vue-property-decorator";
//ts的类型声明，用于记录四个组件中的值
type Record = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  createdTime?: Date;
};
@Component({
  components: { NumberPad, Types, Notes, Tags },
})
export default class Money extends Vue {
  record: Record = { tags: [], notes: "", type: "-", amount: 0 };
  tags = ["衣", "食", "住", "行"];
  recordList: Record[] = JSON.parse(
    window.localStorage.getItem("recordList") || "[]"
  );
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
    //深拷贝一个对象来存储数据，然后再push
    const updateRecordList: Record = JSON.parse(JSON.stringify(this.record));
    updateRecordList.createdTime = new Date();
    this.recordList.push(updateRecordList);
  }
  @Watch("recordList")
  onRecordListChange() {
    window.localStorage.setItem("recordList", JSON.stringify(this.recordList));
  }
}
</script>

<style lang="scss">
.money-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
