<template>

    <SmartLink class="app-card-wrapper" :href="props.link || ''"
         @click="handleClick"
         @mouseleave="resetAnimation" @mouseover="startAnimation">

      <div class="tag-wrap">
        <template v-if="handleIconSrc.length">
          <img v-for="src in handleIconSrc" :src="src" alt="" class="logo-tag"/>
        </template>
        <template v-else>
          <img alt="" class="logo-tag" src="/assets/tubiao/跳转.svg"/>

        </template>
      </div>
      <img v-if="props.logo" :class="is_animate&&animate_class" :src="props.logo" alt="" class="logo">
      <div class="content-wrapper">
        <div class="title">{{ props.title }}</div>
        <div v-if="props.desc" class="desc">{{ props.desc }}</div>
      </div>
    </SmartLink>
</template>

<script lang="ts" setup>
import {computed, ref} from "vue";
import SmartLink from "./SmartLink.vue";


export interface AppCardType {
  title: string;
  link?: string;
  desc?: string;
  logo?: string;
  tag?: string;
}

const animate_class = 'animate__animated animate__jello'


const props = defineProps<AppCardType>()

const tags = props.tag?.trim().split(',').map(i => i.trim()) || []

const tag_logos_src_map = {
  a: '/assets/tubiao/安卓.svg',
  i: '/assets/tubiao/苹果.svg',
  p: '/assets/tubiao/pc.svg'
}

const handleIconSrc = computed(() => {
  return tags.map(tag => tag_logos_src_map[tag])
})

const is_animate = ref(false)

function startAnimation() {
  is_animate.value = true
}

function resetAnimation() {
  is_animate.value = false
}

function handleClick() {

}
</script>

<style lang="scss" scoped>
.app-card-wrapper {
  background: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  padding: 20px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.1); /* 默认投影 */
  transition: box-shadow 0.3s ease; /* 平滑过渡效果 */

  &:hover {
    box-shadow: 0 4px 2px rgba(0, 0, 0, 0.2); /* 鼠标悬停时的投影 */

  }

  .logo {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border-radius: 15px;

  }

  .content-wrapper {
    flex: 1;
    min-width: 0;

    .text-ellipsis {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      font-size: 12px;
    }

    .title {
      font-weight: bold;
      @extend .text-ellipsis;

    }

    .desc {
      font-family: 'pvzgeFontEN';
      color: #666;
      @extend .text-ellipsis;
    }
  }

  .tag-wrap {
    position: absolute;
    right: 10px;
    top: 5px;
    /* 或者使用灰度 */

    /* 或者改变色调 */
    filter: grayscale(1);

    .logo-tag {
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