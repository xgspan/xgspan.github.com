<template>


  <div class="app-card-wrapper"
       @mouseleave="resetAnimation"
       @mouseover="startAnimation">
    <div class="tag-wrap">
      <template v-if="handleIconSrc.length" >

      <img v-for="src in handleIconSrc" :src="src" alt="" class="icon-tag"/>
      </template>
      <template v-else>
        <img  src="/assets/tubiao/跳转.svg" alt="" class="icon-tag"/>

      </template>
    </div>
    <img v-if="props.icon" :class="is_animate&&animate_class" :src="props.icon" alt="" class="icon">
    <div class="content-wrapper">
      <div class="title">{{ props.title }}</div>
      <div class="desc" v-if="props.desc">{{ props.desc }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed, ref} from "vue";

export interface AppCardType {
  title: string;
  desc?: string;
  icon?: string;
  tag?: string;
}

const animate_class = 'animate__animated animate__swing'


const props = defineProps<AppCardType>()

const tags = props.tag?.trim().split(',').map(i => i.trim()) || []

const tag_icons_src_map = {
  a: '/assets/tubiao/安卓.svg',
  i: '/assets/tubiao/苹果.svg',
  p: '/assets/tubiao/pc.svg'
}

const handleIconSrc = computed(() => {
  return tags.map(tag => tag_icons_src_map[tag])
})

const is_animate = ref(false)

function startAnimation() {
  is_animate.value = true
}

function resetAnimation() {
  is_animate.value = false
}
</script>

<style scoped>
.app-card-wrapper {
  background: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  padding: 15px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.1); /* 默认投影 */
  transition: box-shadow 0.3s ease; /* 平滑过渡效果 */

  &:hover {
    box-shadow: 0 4px 2px rgba(0, 0, 0, 0.2); /* 鼠标悬停时的投影 */

  }

  .icon {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }

  .content-wrapper {
    flex: 1;
    min-width: 0;

    .title {
      font-weight: bold;
    }

    .desc {
      font-family: 'pvzgeFontEN';
      color: #666;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      font-size: 12px;
    }
  }

  .tag-wrap {
    position: absolute;
    right: 10px;
    top: 5px;
    /* 或者使用灰度 */

    /* 或者改变色调 */
    filter: grayscale(1);

    .icon-tag {
      width: 15px;
      height: 15px;
      margin-left: 2px;

    }
  }

  &:hover {
    .tag-wrap {
      filter: none;
      opacity: 1;

    }
  }
}
</style>