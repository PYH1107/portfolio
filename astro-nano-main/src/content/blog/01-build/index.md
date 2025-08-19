
---
title: "在 2025 用 Claude Code 建立個人網站"
description: "Everything on this website is built by Claude Code (nearly)."
date: "Aug 18 2025"
tags: ["project", "website"]
---

---
# 契機

說來有些慚愧，起心動念想寫個人部落格不過三個理由：
1. 求職的時候，「個人作品」、「個人網站」的欄位總是空白，稍顯尷尬
2. 想找個地方放零散的作品
3. 希望更好的包裝自己

除此之外，由於近期生活變動較大，也遇見了喜歡的作品與人物，便希望能夠以此處為施力點，將生命經驗製成染料來渲染自己。

簡而言之就是「展示」與「包裝」，與社群媒體的意涵大同小異，只是我不擅長拍攝照片，於是想著以長篇的文字掩蓋這個短板。

# 建立

這個網站是以 Astro 為框架，Astro Nano 為主題，並透過 Vercel 部署的。

## 我的挑選哲學

### 框架

我在找尋合適的框架時，先思考了自己對這個網站的期待：
1. 想放的東西：
	1. 讀書筆記 $\to$ 那我會需要 markdown & LaTeX
	2. optional: POC 的展示
2. 價格：
	- 很窮，希望都可以免費

從今年四月我就在初步規劃個人網站，依照上面的條件，我有在觀望的框架是 [Ghost ](https://ghost.org/)、[Jekyll](https://github.com/maximevaillancourt/digital-garden-jekyll-template) 以及 [Astro](https://docs.astro.build/en/getting-started/)。

| 框架名稱   | 優                                                                                       | 劣                            |
| ------ | --------------------------------------------------------------------------------------- | ---------------------------- |
| Ghost  | 1. JS + MySQL，有資料庫<br>2. 豐富媒體和動態卡片，視覺呈現專業<br>3. 官方託管，不用自己部署                             | 對 LaTeX 不友善                  |
| Jekyll | 我是 [Steph Ango](https://stephango.com/about#colophon) 的粉絲。喜歡他的個人網站風格，同時也是 Obsidian 重度用戶 | 1. 對 LaTeX 不友善<br>2. 使用 Ruby |
| Astro  | 1. JS/TS<br>2. MDX。LaTeX 友善，且彈性大                                                        | 過新。技術迭代、第三方整合、社群都尚不成熟        |

雖然 Ghost 看起來優點繁多，但我重視**內容大於設計**，所以最終還是選擇了 Astro

### 主題

 「**輕量、極簡、免費、內容導向**」是我對主題與框架的四大訴求。

翻了一遍 [Astro 的主題](https://astro.build/themes/)，一個一個看 live demo 後，覺得 Astro Nano 最符合我的審美與網站定位，沒有多做思考就拍板定案了。

### 部署

[Astro Nano 官方](https://github.com/markhorn-dev/astro-nano)推薦的部署方式有二：Vercel 和 Netlfiy。
由於我不需要複雜的後端功能，所以 Vercel 在「一鍵部署」和「每月 100GB 的免費流量」完美勝出。加上 Astro Nano 的[ Live Demo](https://astro-nano-demo.vercel.app/) 也是使用 Vercel，所以我在這點上面也沒有多做猶豫。

整個部署幾乎不費腦子。我先在本地 `npm run build` 過了一次，在 Vercel 上花不到五分鐘就弄好了（兩分鐘在註冊與聯動 GitHub）。


~~網址應該可以很簡單的看出這個網站是靠 Vercel 部署的。除非哪天真的想建立個人品牌或者顯示出專業度，否則我應該不會有閒錢去買網域。~~

（更：間隔不到一週我就買域名了，大大的 vercep.app 在那邊放著總是有點羞赧。）


# How: Claude Code

在上一頁的 Description 中，我寫道："Everything on this website is built by Claude Code (nearly)."

我全程下來幾乎只有做 code review、檢查架構和設計內容與排版。
從找框架到真正架起來，整個過程花不到四小時。其中一小時在挑框架，半小時在修改與下載 LaTeX 的設定，半小時在設計 favicon，其他都在想內容。


## Claude Code 簡介

Claude Code 是基於 Claude 的 CLI，維持對整個專案結構的認知，自動分析專案結構和依賴關係，無需手動選擇上下文檔案。除此之外，它還會讀取 git 紀錄，理解專案的變化，同時也可以直接編輯檔案並執行命令。


## Installation

（以下說明以 Claude pro 用戶 + VSCode 使用者作為範例）

首先在終端機中全域下載 Claude Code 並指定某一專案打開：

```bash
npm install -g @anthropic-ai/claude-code
cd your-awesome-project
claude
```

接下來，如果習慣以 VSCode 作為主力 IDE，請在 plugin market 下載 [Claude Code for VSCode](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code)。


最後就可以愉快開工了！

注意：打開 Claude Code for VSCode，輸入 `/login` 用以登入你的 Claude 帳號。在 Claude 所使用的 quota，都會被一併計入你的帳號內，不會另外計費。
- 其他 IDE 使用者請參：[Claude Code 官方文檔](https://docs.anthropic.com/en/docs/claude-code/overview)
- 非 Claude pro 用戶計費方法：[Claude Console](https://console.anthropic.com/claude_code)



# Appendix: 我自訂的功能

### LaTeX

(Claude Code 可以做到的就不贅述，這邊只講個大概)

`pnpm add remark-math rehype-katex`

- remark-math
	1. **功能**：解析 Markdown 中的數學公式語法
	2. **作用**：識別並處理 `$...$`（行內公式）和 `$$...$$`（塊級公式）
- rehype-katex
	1. **功能**：將解析後的數學公式渲染成可視化的數學符號
	2. **輸出**： HTML + CSS

最後，修改 `astro.config.mjs` ，把這兩個 module import 進去，然後在 `PageLayout.astro` 調整 html 就可以了。

### Favicon

不想用官方的 favicon，所以我其實有點苦惱該用什麼代替。最後選擇了[ favicon.io](https://favicon.io/)，以我英文名字的首字母作為標記。


---
以上就是我架設個人網站的全過程。對於整個過程，我的心得有點庸俗，不外乎就是「內容」的重要性，與「文字」和「紀錄」的價值，然事實也確實如此。在「設計」跟「定位」上花我最多時間思考。整個構建的過程幾乎不費吹灰之力，只要有些許 Typescript 和前端的概念就已完全足夠，實在令人讚嘆——可否替代的分野愈發明確，外在的一切吹噓和追捧，在今天儼然成了唾手可得之物。

