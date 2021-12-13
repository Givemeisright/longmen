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
import Types from "@/components/money/Types.vue";
import FormItem from "@/components/money/FormItem.vue";
import Tags from "@/components/money/Tags.vue";
import { Component } from "vue-property-decorator";

@Component({
  components: { NumberPad, Types, FormItem, Tags },
  computed: {
    recordList() {
      return this.$store.state.recordList;
    },
  },
})
export default class Money extends Vue {
  record: RecordItem = { tags: [], notes: "", type: "-", amount: 0 };

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
