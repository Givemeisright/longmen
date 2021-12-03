<template>
  <Layout class-prefix="money">
    <NumberPad :value.sync="record.amount" @submit="saveRecord" />
    <Types :type.sync="record.type" />
    <div class="notes">
      <FormItem
        fieldName="备注"
        placeholder="请输入备注"
        @update:value="onUpdateNotes"
      />
    </div>{{record}}
    <Tags :dataSource.sync="tags" :value.sync="record.tags" />
  </Layout>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Vue from "vue";
import NumberPad from "@/components/money/NumberPad.vue";
import Types from "@/components/money/Types.vue";
import FormItem from "@/components/money/FormItem.vue";
import Tags from "@/components/money/Tags.vue";
import { Component, Watch } from "vue-property-decorator";
import recordListModel from "@/models/recordListModel";
import tagListModel from "@/models/tagListModel";
import Notes from '../components/money/FormItem.vue';

const tagList = tagListModel.fetch();
const recordList = recordListModel.fetch();
@Component({
  components: { NumberPad, Types, FormItem, Tags },
})
export default class Money extends Vue {
  record: RecordItem = { tags: [], notes: "", type: "-", amount: 0 };
  tags = tagList;
  recordList: RecordItem[] = recordList;

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
    //深拷贝一个对象来存储数据，然后再push
    const updateRecordList: RecordItem = recordListModel.deepClone(this.record);
    updateRecordList.createdTime = new Date();
    this.recordList.push(updateRecordList);
  }

  @Watch("recordList")
  onRecordListChange() {
    recordListModel.save(this.recordList);
  }
}
</script>

<style lang="scss">
.money-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes{
  padding: 6px 0;
}
</style>
