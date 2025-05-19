<template>
  <div
      class="no-underline"
      @click="handleClick"
      :rel="isExternal ? 'noopener noreferrer' : undefined"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSiteData } from 'vuepress/client'
import { isExternalLink } from '@tools/utils.ts'
import { useRouter } from 'vue-router'

const props = defineProps<{
  href: string
}>()

const site = useSiteData()
const router = useRouter()

const isExternal = computed(() => isExternalLink(props.href, site.value.base))

function handleClick(event: MouseEvent) {
  event.preventDefault() // 防止默认行为
  if (isExternal.value) {
    // 如果是外部链接，使用window.open打开新标签页
    window.open(props.href, '_blank')
  } else {
    // 如果是内部链接，使用Vue Router进行跳转
    router.push(props.href)
  }
}
</script>

<style scoped>
.no-underline {
  cursor: pointer; /* 显示手型光标 */
  &:hover {
    text-decoration: none !important;
  }
}
</style>