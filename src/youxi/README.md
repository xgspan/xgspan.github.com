---
index: false
icon: https://s21.ax1x.com/2025/05/23/pEz1h4g.png
category:
  - 游戏
---

# 游戏
<script setup>
import data from '@data/youxi.json';
const keys = Object.keys(data)
</script>


<MyTabs v-for="key in keys" :key="key" v-bind="data[key]"  />
