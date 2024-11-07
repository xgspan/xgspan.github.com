<template>
  <Button type="primary" @click="handleClick">Button</Button>
</template>


<script setup lang="ts">
import {Button} from 'ant-design-vue';

import {useData, useRoute} from 'vitepress'

const data = useData()
const route = useRoute()
const handleClick = () => {
  console.log('useData()',data )
  console.log('useRoute()',route )

};

</script>
