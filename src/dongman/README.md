---
index: false
icon: /assets/banner/动漫.jpg
category:
  - 动漫
---

<script setup>
import data from '@data/dongman.json';
const keys = Object.keys(data)
</script>

# 动漫

<MyTabs v-for="key in keys" :key="key" v-bind="data[key]"  />
