import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  // 改成你的網站網址，部署到 Vercel 後再更新
  site: "https://your-site-name.vercel.app",
  
  integrations: [
    mdx(),
    sitemap(),
    tailwind()
  ],
  
  // Markdown 配置 - 支援繁體中文和 LaTeX
  markdown: {
    // 數學公式支援
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    
    // 程式碼高亮設定
    shikiConfig: {
      theme: 'github-dark',
      langs: ['javascript', 'python', 'bash', 'html', 'css', 'json']
    }
  },
  
  // 繁體中文設定
  i18n: {
    defaultLocale: 'zh-tw',
    locales: ['zh-tw']
  },
  
  // 開發服務器設定
  server: {
    host: true,  // 允許外部訪問
    port: 4321
  },
  
  // 建置優化
  build: {
    inlineStylesheets: 'auto'
  }
});