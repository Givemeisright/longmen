<template>
  <Layout class-prefix="money">
    <NumberPad :value.sync="record.amount" @submit="saveRecord" />
    <Tabs :data-source="typeList" :value.sync="record.type" />
    <div class="notes">
      <FormItem
        type="date"
        fieldName="日期"
        placeholder="请输入备注"
        :value.sync="record.createdTime"
      />
      <FormItem
        fieldName="备注"
        placeholder="请输入备注"
        :value.sync="record.notes"
      />
    </div>
    <Tags @update:value="record.tags = $event" />
    <Title title="记账"/>
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
import recordTypeList from "@/constants/recordTypeList";
import dayjs from "dayjs";
import Title from "@/components/Title.vue";

@Component({
  components: { NumberPad, Tabs, FormItem, Tags, Title},
})
export default class Money extends Vue {
  type = "-";
  typeList = recordTypeList;
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
    createdTime: dayjs().toISOString(),
  };

  get recordList() {
    return this.$store.state.recordList;
  }
  created() {
    this.$store.commit("fetchRecords");
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  saveRecord() {
    if (!this.record.tags || this.record.tags.length == 0) {
      return window.alert("至少选择一个标签");
    }
    if (!this.record.amount || this.record.amount == 0) {
      return window.alert("输入数值需要大于0");
    }
    this.$store.commit("createRecord", this.record);
    if (this.$store.state.isCreateRecordSuccess == null) {
      window.alert("已入账");
      this.record.notes = "";
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .money-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes {
  padding: 12px 0;
}
</style>
