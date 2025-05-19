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

<MyTabs v-bind="data.sousuo" />
