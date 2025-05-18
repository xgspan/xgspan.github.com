import { defineUserConfig } from "vuepress";

import theme from "./theme.js";
import { getDirname, path } from "vuepress/utils";
const __dirname = getDirname(import.meta.url);


export default defineUserConfig({
  base: "/",
  lang: "zh-CN",// 不知道怎么设置，必须空格
  title: "小怪兽宝藏",
  description: "宝藏分享",
  theme,
  // 添加 head 配置
  head: [
    ["meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    }]
  ],
  alias: {
    "@data": path.resolve(__dirname, "../data_json/"),
    "@tools": path.resolve(__dirname, "../_tools/"),
  },

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
