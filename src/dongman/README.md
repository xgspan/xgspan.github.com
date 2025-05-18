---
index: false
icon: /assets/tubiao/动漫.svg
category:
  - 动漫
---

<script setup>
import data from '@data/dongman.json';
import {generateRGBA} from '@tools/utils.ts'
</script>

# 动漫

## 正版官方 (附~ 激活码)

<VPCard
    v-for="(val,key) in data.sousuo"
    :key="key"
    :background="generateRGBA()"
     v-bind="val"/>