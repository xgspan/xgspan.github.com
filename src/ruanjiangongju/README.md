---
index: false
icon: /assets/tubiao/工具.svg
category:
  - 工具
---

<script setup>
import data from '@data/ruanjiangongju.json';
import {generateRGBA} from '@tools/utils.ts'
</script>

# 软件工具

## 手机软件

<VPCard
v-for="(val,key) in data.mobile"
:key="key"
:background="generateRGBA()"
v-bind="val"/>
