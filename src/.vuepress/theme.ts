import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

import { getDirname, path } from "vuepress/utils";
import {Button} from "ant-design-vue";
const __dirname = getDirname(import.meta.url);

export default hopeTheme({
  hostname: "https://xgs.icu/",
  darkmode: "disable",
  author: {
    name: "小怪兽",
    url: "https://xgs.icu/",
  },
  logo: "/logo.png",

  docsDir: "src",


  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  displayFooter: true,
  print: false,
  pageInfo: ["Author", "Original", "Category", "Tag"],
  footer: "<a href='https://beian.miit.gov.cn' target='_blank' style='font-size: 12px'>蜀ICP备2025147360号-1</a> ",
  copyright: false,

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": {
        hint: "Password: 1234",
        password: "1234",
      },
    },
  },

  lastUpdated:false, // 最后更新时间
  contributors: false, // 贡献者
  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
  markdown: {
    align: true, //对齐方式
    attrs: true, // 带属性
    // codeTabs: true,
    component: true, //组件
    // demo: true, // 代码样式
    // figure: true, //
    // gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: {
      resolvePath: (file) => {
        if (file.startsWith("@common"))
          return file.replace("@common", path.resolve(__dirname, "../common"));
        return file;
      },
    },
    mark: true, // 标记 黄色 ==文字== 哈哈
    // plantuml: true, // uml
    // spoiler: true,  // 黑色一覆盖  隐藏文字
    stylize: [
      {
        matcher: "Recommended", // 标签
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,

    // 取消注释它们如果你需要 TeX 支持
    // math: {
    //   // 启用前安装 katex
    //   type: "katex",
    //   // 或者安装 mathjax-full
    //   type: "mathjax",
    // },

    // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },

    // 在启用之前安装 chart.js
    // chartjs: true,

    // insert component easily

    // 在启用之前安装 echarts
    // echarts: true,

    // 在启用之前安装 flowchart.ts
    // flowchart: true,

    // 在启用之前安装 mermaid
    // mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // 在启用之前安装 @vue/repl
    // vuePlayground: true,

    // 在启用之前安装 sandpack-vue3
    // sandpack: true,
  },

  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["SocialLink"],
  },
  // 在这里配置主题提供的插件
  plugins: {
    photoSwipe:false,
    copyCode:{
      showInMobile:true
    },
    // notice: [
    //   {
    //     path: "/",
    //     title: "网站公告",
    //     content: "Notice Content",
    //     actions: [
    //       {
    //         text: "Primary Action",
    //         link: "https://theme-hope.vuejs.press/",
    //         type: "primary",
    //       },
    //       { text: "Default Action" },
    //     ],
    //   }
    // ],

    docsearch: {
      appId: 'JKVB7G1M51',
      apiKey: 'eacc31d135c17c7ae293da75fa501bb2',
      indexName: 'xgs',
      locales: {
        '/': {
          placeholder: '搜索关键词',
          translations: {
            button: {
              buttonText: '挖宝藏',
            },
          },
        },
      },
    },


    components: {
      components: [
        "VPCard", "VPBanner"
      ],
      // componentOptions: {
      //   share: {
      //     // services: ['qq'],
      //   },
      // },
    },

    // 注意: 仅用于测试! 你必须自行生成并在生产环境中使用自己的评论服务
    // comment: {
    //   provider: "Giscus",
    //   repo: "vuepress-theme-hope/giscus-discussions",
    //   repoId: "R_kgDOG_Pt2A",
    //   category: "Announcements",
    //   categoryId: "DIC_kwDOG_Pt2M4COD69",
    // },
    //
    // components: {
    //   components: ["Badge", "VPCard"],
    // },
    //
    icon: {
      assets: "fontawesome",
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
},
    // { custom: true }
);
