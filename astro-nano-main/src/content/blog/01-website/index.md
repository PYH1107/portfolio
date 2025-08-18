
---
title: "在 2025 用 Claude Code 建立個人網站"
description: "Everything in this website is built by Claude Code (nearly)."
date: "Aug 18 2025"
tags: ["Claude Code", "website"]
---

# 契機

說來有些慚愧，起心動念想寫個人部落格不外乎三個理由：
1. 求職的時候，「個人作品」、「個人網站」的欄位總是空白，稍顯尷尬
2. 想找個地方放零散的作品
3. 希望更好的包裝自己

除此之外，因為最近看了些很喜歡的作品，也遇見了很多有趣的人、事、物，但總是懶著紀錄，於是希望能夠以此處為施力點，迫使自己將生命經驗製成染料來創作。

簡而言之就是「展示」與「包裝」，和社群媒體的經營幾乎一模一樣，只是我不擅長拍攝照片，所以試圖以長篇的文字掩蓋這個短板。

# 建立

這個網站是以 Astro 為框架，Astro Nano 為主題，並透過 Vercel 部署的。

## Why

### 框架

我在找尋合適的框架時，先思考了自己對這個網站的期待：
1. 想放的東西：
	1. 讀書筆記 $\to$ 那我會需要 markdown & LaTeX
	2. optional: POC 的展示
2. 價格：
	1. 很窮，希望都可以免費

在這之前，我有在觀望的框架是 [Ghost ](https://ghost.org/)、[Jekyll](https://github.com/maximevaillancourt/digital-garden-jekyll-template) 以及 [Astro](https://docs.astro.build/en/getting-started/)。

| 框架   | 優                                                                                       | 劣                            |
| ------ | --------------------------------------------------------------------------------------- | ---------------------------- |
| Ghost  | 1. JS + MySQL，有資料庫<br>2. 豐富媒體和動態卡片，視覺呈現專業<br>3. 官方託管，不用自己部署                             | 對 LaTeX 不友善                  |
| Jekyll | 我是 [Steph Ango](https://stephango.com/about#colophon) 的粉絲。喜歡他的個人網站風格，同時也是 Obsidian 重度用戶 | 1. 對 LaTeX 不友善<br>2. 使用 Ruby |
| Astro  | 1. JS/TS<br>2. MDX。LaTeX 友善，且彈性大                                                        | 過新。技術迭代、第三方整合、社群都尚不成熟        |

雖然 Ghost 看起來優點繁多，但我重視內容大於設計，所以最終還是選擇了 Astro

### 主題

 「輕量、極簡、免費、內容導向」是我對主題與框架的四大訴求。

翻了一遍 [Astro 的主題](https://astro.build/themes/)，一個一個看 live demo 後，覺得 Astro Nano 最符合我的審美與網站定位，沒有多做思考就拍板定案了。

### 部署

[Astro Nano 官方](https://github.com/markhorn-dev/astro-nano)推薦的部署方式有二：Vercel 和 Netlfiy。
由於我不需要複雜的後端功能，所以 Vercel 在「一鍵部署」和「每月 100GB 的免費流量」完美勝出。加上 Astro Nano 的[ Live Demo](https://astro-nano-demo.vercel.app/) 也是使用 Vercel，所以我在這點上面也沒有多做猶豫。
整個部署幾乎不費腦子。我先在本地 `npm run build` 過了一次，在 Vercel 上花不到五分鐘就弄好了（兩分鐘在註冊與聯動 GitHub）。


網址應該可以很簡單的看出這個網站是靠 Vercel 部署的。除非哪天真的想建立個人品牌或者顯示出專業度，否則我應該不會有閒錢去買網域。


## How

我其實很想在主頁寫上大大的 "Everything in this website is built by Claude Code"。
我全程下來幾乎只有做 code review、檢查架構和設計內容與排版。
從找框架到真正架起來，整個過程花不到四小時。其中一小時在挑框架，半小時在修改與下載 LaTeX 的設定，半小時在設計 favicon，其他都在想內容。

### LaTeX

(Claude Code 可以做到的就不贅述，這邊只講概念)

`pnpm add remark-math rehype-katex`

- remark-math
	1. **功能**：解析 Markdown 中的數學公式語法
	2. **作用**：識別並處理 `$...$`（行內公式）和 `$$...$$`（塊級公式）
- rehype-katex
	1. **功能**：將解析後的數學公式渲染成可視化的數學符號
	2. 輸出 HTML + CSS

最後，修改 `astro.config.mjs` ，把這兩個 module import 進去，然後在 `PageLayout.astro` 調整 html 就可以了。

### Favicon

不想用官方的 favicon，所以我其實有點苦惱該用什麼代替。最後選擇了[ favicon.io](https://favicon.io/)，以我英文名字的首字母作為標記。

### 部署

Vercel 無腦部署，有手就會，非常推薦。

---
以上就是我架設個人網站的全過程。在「設計」跟「定位」上花我最多時間思考。整個構建的過程，完整呈現的當代 AI 的強大之處，簡單的前端網頁儼然成了唾手可得之物，更應襯出「內容」與「文字」的重要之處。
