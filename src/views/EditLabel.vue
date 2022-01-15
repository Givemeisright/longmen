<template>
  <Layout>
    <Title title="编辑" />
    <div class="form-wrapper">
      <FormItem
        :value="currentTag.name"
        @update:value="updateTag"
        fieldName="标签:"
        placeholder="请输入标签名"
      />
    </div>
    <div class="button-wrapper">
      <Button @click="remove">删除标签</Button>
      <Button @click="save">保存标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import FormItem from "@/components/money/FormItem.vue";
import Button from "@/components/money/Button.vue";

@Component({
  components: {
    FormItem,
    Button,
  },
})
export default class EditLabel extends Vue {
  get currentTag() {
    return this.$store.state.currentTag;
  }
  created() {
    this.$store.commit("fetchTags");
    this.$store.commit("setCurrentTag", this.$route.params.id);
    if (!this.currentTag) {
      this.$router.replace("/404");
    }
  }
  updateTag(name: string) {
    if (this.currentTag) {
      this.$store.commit("updateTag", { id: this.currentTag.id, name: name });
    }
  }
  remove() {
    if (this.currentTag) {
      this.$store.commit("removeTag", this.currentTag.id);
    }
  }
  save() {
    if (this.currentTag.name == "") {
      this.remove();
    }
    this.$router.go(-1);
  }
  goBack() {
    if (this.currentTag.name == "") {
      this.remove();
    }
    this.$router.go(-1);
  }
}
</script>

<style lang="scss" scoped>


.form-wrapper {
  background: white;
  margin-top: 20px;
}
.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 28px;
  Button{
    margin: 10px;
  }
}
</style>
