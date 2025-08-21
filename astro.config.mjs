import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import remarkNumberedFootnoteLabels from 'remark-numbered-footnote-labels';

export default defineConfig({
  site: "https://your-site.vercel.app",
  
  integrations: [
    mdx({
      remarkPlugins: [remarkMath, remarkGfm, remarkNumberedFootnoteLabels],
      rehypePlugins: [
        [rehypeKatex, {
          // 關鍵配置！
          displayMode: true,      // 支援區塊模式
          leqno: false,          // 公式編號位置
          fleqn: false,          // 不要左對齊
          throwOnError: false,   // 不因錯誤中斷
          errorColor: '#cc0000', // 錯誤顏色
          strict: false,         // 放寬語法檢查
          trust: true,           // 信任輸入
          // 支援所有數學環境
          delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false},
            {left: '\\(', right: '\\)', display: false},
            //{left: '\\[', right: '\\]', display: true}
          ]
        }]
      ],
    }),
    sitemap(),
    tailwind()
  ],
  
  // 全域 Markdown 配置
  markdown: {
    extendDefaultPlugins: true, 
    remarkPlugins: [remarkMath, remarkGfm, remarkNumberedFootnoteLabels],
    rehypePlugins: [
      [rehypeKatex, {
        displayMode: true,
        throwOnError: false,
        errorColor: '#cc0000',
        strict: false,
        trust: true,
        // 重要：確保支援 aligned 環境
        macros: {
          "\\aligned": "\\begin{aligned}#1\\end{aligned}",
          "\\R": "\\mathbb{R}",
          "\\N": "\\mathbb{N}",
          "\\Z": "\\mathbb{Z}",
          "\\Q": "\\mathbb{Q}",
          "\\C": "\\mathbb{C}"
        }
      }]
    ],
    shikiConfig: {
      theme: 'github-dark',
      langs: ['javascript', 'python', 'bash', 'latex']
    }
  }
});