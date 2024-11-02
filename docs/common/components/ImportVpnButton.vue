<template>
  <Button type="primary" @click="showModal">Open Modal</Button>
  <a href="http://www.xuheyao.win" title="Emily's Blog">Welcome</a>
  <Modal v-model:open="open" title="Basic Modal" @ok="handleOk">
    <Input v-model:value="value" placeholder="Basic usage" />

  </Modal>
</template>


<script setup lang="ts">
import { Button, Modal ,Input } from 'ant-design-vue';

import { ref,watch } from 'vue';
const open = ref<boolean>(false);
const value  = ref<string>('');

const showModal = () => {
  open.value = true;
};

const handleOk = (e: MouseEvent) => {

  open.value = false;
};

</script>f
