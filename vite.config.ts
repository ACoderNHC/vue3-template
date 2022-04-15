import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

import pxtovw from "postcss-px-to-viewport";
import autoprefixer from "autoprefixer";

const pxtovwInstance = pxtovw({
  unitToConvert: "px",
  viewportWidth: 750, //按设计稿宽度750像素来切图
  unitPrecision: 5,
  propList: ["*"],
  viewportUnit: "vw",
  fontViewportUnit: "vw",
  selectorBlackList: [],
  minPixelValue: 1,
  mediaQuery: false,
  replace: true,
  exclude: undefined,
  include: undefined,
  landscape: false,
  landscapeUnit: "vw",
  landscapeWidth: 568,
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./",
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@assets": resolve(__dirname, "src/assets"),
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer, pxtovwInstance],
    },
  },
});
