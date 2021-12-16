<template>
  <Layout class-prefix="money">
    <NumberPad :value.sync="record.amount" @submit="saveRecord" />
    <Tabs :data-source="typeList" :value.sync="record.type" />
    <div class="notes">
      <FormItem
        fieldName="备注"
        placeholder="请输入备注"
        @update:value="onUpdateNotes"
      />
    </div>
    <Tags />
  </Layout>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Vue from "vue";
import NumberPad from "@/components/money/NumberPad.vue";
import FormItem from "@/components/money/FormItem.vue";
import Tags from "@/components/money/Tags.vue";
import { Component } from "vue-property-decorator";
import Tabs from "@/components/Tabs.vue";

@Component({
  components: { NumberPad, Tabs, FormItem, Tags },
})
export default class Money extends Vue {
  type = "-";
  typeList = [
    { text: "支出", value: "-" },
    { text: "收入", value: "+" },
  ];
  record: RecordItem = { tags: [], notes: "", type: "-", amount: 0 };
  get recordList() {
    return this.$store.state.recordList;
  }
  created() {
    this.$store.commit("fetchRecords");
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
    this.$store.commit("createRecord", this.record);
  }
}
</script>

<style lang="scss">
.money-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes {
  padding: 6px 0;
}
</style>
