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

[//]: # (## 手机软件)

[//]: # (<VPCard)

[//]: # (v-for="&#40;val,key&#41; in data.mobile")

[//]: # (:key="key")

[//]: # (:background="generateRGBA&#40;&#41;")

[//]: # (v-bind="val"/>)

<MyTabs v-bind="data.yingshi" />

<MyTabs v-bind="data.yingshi" />

<MyTabs v-bind="data.yingshi" />