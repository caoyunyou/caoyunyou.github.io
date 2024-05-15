import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "曹云友的博客",
  description: "一个vuepress-theme-hope 的博客网站",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
