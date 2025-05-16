import { defineUserConfig } from "vuepress";

import theme from "./theme.js";
import path from "path";

export default defineUserConfig({
  base: "/",
  lang: " ",// 不知道怎么设置，必须空格
  title: "小怪兽宝藏",
  description: "宝藏分享",
  theme,

  alias: {
    "@data": path.resolve(__dirname, "../data_json/"),
    "@tools": path.resolve(__dirname, "../_tools/"),
  },

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
