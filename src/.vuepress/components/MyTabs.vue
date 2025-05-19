<template>
  <ConfigProvider
      :theme="{
      token: {
        colorPrimary: '#00b96b',
      },
    }"
  >
    <div class="tabs-wrap">
      <!-- Tabs 组件 -->
      <Tabs v-model:activeKey="activeKey" :tabBarGutter="15" centered>
        <template #leftExtra>
          <!-- 这里放你的自定义内容 -->
          <div class="leftExtra-wrap">
            <img v-if="props.icon" :src="props.icon" alt="" class="icon-img">
            <span v-if="props.title" class="title-wrap">{{ props.title }}</span>
            <img :class="isClose&&'zhedie-xuanzhuan'" alt="" class="zhedie-img " src="/assets/tools-icon/zhedie.svg"
                 @click="btnClick">
          </div>
        </template>

        <TabPane v-for="item in props.tabsData" :key="item.tab" :tab="item.tab">
          <div :class="isClose&&'tab-pane-close'" class="h100 background-gradient-zhenzhu">
            <div class="app-card-wrap">
              <AppCard v-for="appdata in item.data" :key="appdata.title" class="app-card-item" v-bind="appdata"/>
            </div>

          </div>
        </TabPane>
        <div class="tab-pane-wrap">
        </div>

      </Tabs>
    </div>

  </ConfigProvider>

</template>
<script lang="ts" setup>
import {ref} from 'vue';
import {TabPane, Tabs,ConfigProvider ,Checkbox,Radio} from 'ant-design-vue'

import AppCard, {AppCardType} from "./AppCard.vue";

interface TabsData {
  tab: string
  data: AppCardType[]
}


interface Props {
  icon?: string
  title?: string,
  tabsData: Array<TabsData>,
}

const props = defineProps<Props>()

// const props = withDefaults(defineProps<Props>(), {
//   count: 0,
//   isActive: false
// })


const activeKey = ref();
const isClose = ref(false);

function btnClick() {
  isClose.value = !isClose.value;
}


const tabListNoTitle = [
  {
    key: 'article',
    tab: 'article',
  },
  {
    key: 'app',
    tab: 'app',
  },
  {
    key: 'project',
    tab: 'project',
  },
];
const key = ref('tab1');
const noTitleKey = ref('app');

const onTabChange = (value: string, type: string) => {
  console.log(value, type);
  if (type === 'key') {
    key.value = value;
  } else if (type === 'noTitleKey') {
    noTitleKey.value = value;
  }
};


</script>

<style scoped>
.h100 {
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s;
}

.tab-pane-close {
  height: 0;
}

.leftExtra-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon-img {
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }

  .title-wrap {
    margin-right: 5px;
  }

  .zhedie-img {
    padding: 5px;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    transform: rotate(90deg);
    transition: all 0.5s;
  }

  .zhedie-xuanzhuan {
    transform: rotate(0)
  }
}

.tabs-wrap {
  :deep( .ant-tabs-nav-wrap) {
    justify-content: flex-end !important;
    z-index: 2;

    .ant-tabs-ink-bar {
      height: 20px;
      background-color: transparent;
      background-image: url('/assets/tubiao/笔刷.svg') !important;
      background-size: contain;
      background-repeat: repeat-x; /* 背景图片在水平方向上重复 */
    }
  }
}

/* 基础样式 */
.app-card-wrap {
  --gap: 10px; /* 定义间距 */


  padding: var(--gap);
  box-sizing: border-box;

  display: grid;
  grid-template-columns: repeat(4, minmax(150px, 1fr));
  gap: var(--gap);
  width: 100%;
}


/* 移动端布局（≤767px）*/
@media (max-width: 767px) {
  .app-card-wrap {
    grid-template-columns: repeat(2, 1fr); /* 严格两列 */
    justify-items: start; /* 禁止内容拉伸 */
  }

  /* 单个项目特殊处理 */
  .app-card-wrap:has(> .app-card-item:only-child) {
    grid-template-columns: 1fr;
    max-width: 50%;
    margin-right: auto; /* 左对齐 */
  }

}
</style>
