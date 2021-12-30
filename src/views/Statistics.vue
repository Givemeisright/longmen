<template>
  <Layout>
    <Title title="统计"/>
    <Tabs
      class-prefix="type"
      :data-source="recordTypeList"
      :value.sync="type"
    />

    <ol v-if="groupedList.length > 0">
      <li v-for="group in groupedList" :key="group.title">
        <h3 class="title">
          {{ beautify(group.title) }} <span>￥{{ group.total }}</span>
        </h3>
        <ol>
          <li class="record" v-for="item in group.items" :key="item.id">
            <span>{{ tagString(item.tags) }}</span>
            <span class="notes">{{ item.notes }}</span>
            <span>￥{{ item.amount }} </span>
          </li>
        </ol>
      </li>
    </ol>
    <div v-else class="nullAccount">
      <h3>暂无账目入账</h3>
    </div>
    <div class="viewChart">
      <router-link to="/statistics/chart" >
        <Button>查看图表</Button>
      </router-link>
    </div>
  </Layout>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Tabs from "@/components/Tabs.vue";
import recordTypeList from "@/constants/recordTypeList";
import dayjs from "dayjs";
import deepClone from "@/lib/clone";
import Button from "@/components/money/Button.vue";

// import clone from '@/lib/clone';
@Component({
  components: { Tabs, Button },
})
export default class Statistics extends Vue {
  tagString(tags: Tag[]) {
    return tags.length === 0 ? "无" : tags.map((tag) => tag.name).join(" ，");
  }
  beautify(string: string) {
    const day = dayjs(string);
    const now = dayjs();

    if (day.isSame(now, "day")) {
      return "今天";
    } else if (day.isSame(now.subtract(1, "day"), "day")) {
      return "昨天";
    } else if (day.isSame(now.subtract(2, "day"), "day")) {
      return "前天";
    } else if (day.isSame(now, "year")) {
      return day.format("M月D日");
    } else {
      return day.format("YYYY年M月D日");
    }
  }

  get recordList() {
    // eslint-disable-next-line no-undef
    return (this.$store.state as RootState).recordList;
  }

  get groupedList() {
    const { recordList } = this;
    if (recordList.length === 0) {
      return [];
    }
    const newList = deepClone(recordList)
      .filter((r) => r.type === this.type)
      .sort(
        (a, b) =>
          dayjs(b.createdTime).valueOf() - dayjs(a.createdTime).valueOf()
      );
    if (newList.length === 0) {
      return [] as Result;
    }
    const result: Result = [
      {
        title: dayjs(newList[0].createdTime).format("YYYY-MM-DD"),
        items: [newList[0]],
      },
    ];
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.createdTime), "day")) {
        last.items.push(current);
      } else {
        result.push({
          title: dayjs(current.createdTime).format("YYYY-MM-DD"),
          items: [current],
        });
      }
    }
    result.map((group) => {
      group.total = group.items.reduce((sum, item) => {
        return sum + item.amount;
      }, 0);
    });
    return result;
  }

  beforeCreate() {
    this.$store.commit("fetchRecords");
  }

  type = "-";
  recordTypeList = recordTypeList;
}
</script>

<style scoped lang="scss">
.nullAccount {
  padding: 28px;
  text-align: center;
}
.viewChart {
  margin: 0 auto;
  text-align: center;
}
::v-deep {
  .type-tabs-item {
    background: #c4c4c4;
    &.selected {
      background: white;
      &::after {
        display: none;
      }
    }
  }
  .interval-tabs-item {
    height: 48px;
  }
}
%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.title {
  @extend %item;
}
.record {
  background: white;
  @extend %item;
}
.notes {
  margin-right: auto;
  margin-left: 16px;
  color: #999;
}
</style>
