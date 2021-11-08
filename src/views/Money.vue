<template>
  <Layout class-prefix="money">
    {{ record }}
    <NumberPad :value.sync="record.amount" />
    <Types :value.sync="record.type" />
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
import { Component } from "vue-property-decorator";
//ts的类型声明，用于记录四个组件中的值
type Record = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
};
@Component({
  components: { NumberPad, Types, Notes, Tags },
})
export default class Money extends Vue {
  record: Record = { tags: [], notes: "", type: "-", amount: 0 };
  tags = ["衣", "食", "住", "行"];
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }
}
</script>

<style lang="scss">
.money-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
