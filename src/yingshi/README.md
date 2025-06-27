---
index: false
icon: /assets/banner/影视.jpg
category:
  - 影视
---

# 影视
<script setup>
import data from '@data/yingshi.json';
const keys = Object.keys(data)
</script>


<MyTabs v-for="key in keys" :key="key" v-bind="data[key]"  />
