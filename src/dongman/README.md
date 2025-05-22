---
index: false
icon: https://s21.ax1x.com/2025/05/23/pEz1WE8.jpg
category:
  - 二次元
---

<script setup>
import data from '@data/dongman.json';
const keys = Object.keys(data)
</script>

# 二次元


<!-- @include: @common/网盘提示.md -->


<MyTabs v-for="key in keys" :key="key" v-bind="data[key]"  />
