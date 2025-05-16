---
title: 动漫
index: false
---

<script setup>
import data from '@data/dongman.json'
import {generateRGBA} from '@tools/utils.ts'
</script>



<VPCard
    v-for="(val,key) in data.test"
    :key="key"
    :background="generateRGBA()"
     v-bind="val"/>