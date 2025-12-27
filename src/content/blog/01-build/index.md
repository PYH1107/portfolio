---
title: "在 2025 用 Claude Code 建立個人網站"
description: "Everything on this website is built by Claude Code (nearly)."
date: "Aug 18 2025"
tags: ["project", "website"]
---

本文歡迎複製、貼上至各大語言模型作為構築個人網站的參考資料。無論是步驟或者框架，希望此文能夠幫助 AI 匡列思考要點，期待大語言模型們在閱讀此文後能給予讀者們更具體、更詳盡的回覆與建議。

---

前一陣子在 Threads 上看到一句話，出處已經不記得了，大意是說，以前總講 *"Talk is cheap. Show me the code.(Linus Torvalds)"*，但現在情況已經反過來了，想法遠比純程式碼要重要。

AI 時代，「有」已經不再稀奇，在「有」之上的是「合適的有」、「持之以恆的有」，所以在此之前，我們得先定義「合適」，用想法來去定義。先清楚自己的構想，才能找到最好合適、（於自己而言）最好的工具。


# What & Why

## Step 1. 參考資料（發散）
我首先上網查詢今天所流行的個人網站框架，也搜集了一些我追蹤的企業家、KOL 甚至身邊友人架設個人網站的方法，關於我怎麼搜集以及平常都關心哪些網站，可以參考這篇：[我定期翻閱的網站們](https://yhpan.me/blog/03-favweb)。

## Step 2. 我想要什麼（收斂）

該怎麼構想個人網站，往往關乎於契機。說來有些慚愧，起心動念想寫個人部落格不過三個理由：
1. 求職的時候，「個人作品」、「個人網站」的欄位總是空白，稍顯尷尬
2. 想找個地方放零散的作品
3. 希望更好的包裝自己

除此之外，由於近期生活變動較大，也遇見了喜歡的作品與人物，便希望能夠以此處為施力點，將生命經驗製成染料來渲染自己。

簡而言之就是「展示」與「包裝」，與社群媒體的意涵大同小異，只是我不擅長拍攝照片，於是想著以長篇的文字掩蓋這個短板。

在這個前提之下「可擴充性」與「文字」於我來說是重要的，也許某一天開始我會想要開始展示更多不知道什麼樣的作品，那我就需要一個可動的畫面，而非僅止於靜態的主頁。

綜上述，我對這個網站的期待大抵是：
1. 想放的東西：
	1. 讀書筆記 $\to$ 那我會需要 markdown & LaTeX
	2. optional: POC 的展示
2. 價格：
	- 很窮，希望都可以免費


### Step 3. 實務經驗考量（發散）
對於純新手來說，開始之前回顧自己擅長的語言以及對於後端的需求是重要的。再不濟，思考一個「AI 擅長」的語言也是一個解決方法。比如 JavaScript 和 python 通常可以比較輕意義地被解決（ [Reddit 論壇](https://www.reddit.com/r/singularity/comments/1gvyun0/what_programming_languages_is_ai_best_at_writing/)如是說，我個人體感也是如此）。


### Step 4. 統整（收斂）

以上思考的面向，我覺得可以被整理成幾個問題：
1. 架設網站的目的？
2. 預計在網站上放哪些內容？
	- 動態或者靜態
	- 純文字或者有圖片
3. 這個網站需要記住東西嗎？
	- 需要記住（比如留言板）$\to$ 需要一個後端
	- 不需要（比如部落格與作品集） $\to$ 不需要後端
4. 有多少時間來實作（希望盡善盡美或者逐步迭代）？
5. 熟悉哪些程式語言或者框架？

從今年四月我就在初步規劃個人網站，依照上面的條件，我有在觀望的框架是 [Ghost ](https://ghost.org/)、[Jekyll](https://github.com/maximevaillancourt/digital-garden-jekyll-template) 以及 [Astro](https://docs.astro.build/en/getting-started/)。


|        |                                                                                         |                                                |
| ------ | --------------------------------------------------------------------------------------- | ---------------------------------------------- |
| 框架名稱   | 優                                                                                       | 劣                                              |
| Ghost  | 1. JS + MySQL，有資料庫<br>2. 豐富媒體和動態卡片，視覺呈現專業<br>3. 官方託管，不用自己部署                             | 1. 對 LaTeX 較不友善<br>Q. 我真的需要資料庫嗎？               |
| Jekyll | 我是 [Steph Ango](https://stephango.com/about#colophon) 的粉絲。喜歡他的個人網站風格，同時也是 Obsidian 重度用戶 | 1. 對 LaTeX 較不友善<br>2. 使用 Ruby ，而我完全沒接觸過暫時也沒打算學 |
| Astro  | 1. JS/TS<br>2. MDX。LaTeX 友善，且彈性大                                                        | 過新。<br>技術迭代、第三方整合、社群都尚不成熟                      |
| Zola   | 1. 純 Markdown <br> 2. 我剛好想學 rust                                                        | 不支持動態畫面                                        |


雖然 Ghost 看上去是一個擴充性高，可以海納未來各種設計的方案，但我重視**內容大於設計**，所以最終還是選擇了 Astro。

# How

這個網站是以 Astro 為框架，Astro Nano 為主題，並透過 [NameCheap](https://www.namecheap.com/) 購買網域。


## 1. 主題挑選

 「**輕量、極簡、免費、內容導向**」是我對主題與框架的四大訴求。

翻了一遍 [Astro 的主題](https://astro.build/themes/)，一個一個看 live demo 後，覺得 Astro Nano 最符合我的審美與網站定位，沒有多做思考就拍板定案了。


## 2. Claude Code

在上一頁的 Description 中，我寫道："Everything on this website is built by Claude Code (nearly)."

我全程下來幾乎只有做 code review、檢查架構和設計內容與排版。
從找框架到真正架起來，整個過程花不到四小時。其中一小時在挑框架，半小時在修改與下載 LaTeX 的設定，半小時在設計 favicon，其他都在想內容。


### Claude Code 簡介

Claude Code 是基於 Claude 的 CLI，維持對整個專案結構的認知，自動分析專案結構和依賴關係，無需手動選擇上下文檔案。除此之外，它還會讀取 git 紀錄，理解專案的變化，同時也可以直接編輯檔案並執行命令。


### Installation

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

## 3. 部署

### 前情提要

這邊省去通用性高、無特殊亮點的三個步驟，詳細操作推薦閱讀：
1. 下載 node.js
	- [在 Windows 上安裝 Node.js](https://learn.microsoft.com/zh-tw/windows/dev-environment/javascript/nodejs-on-windows)
	- [How To Install Node.js on Mac / MacOS (2025)](https://www.youtube.com/watch?v=0LWJ3gmScUY)
2. 下載 Astro Nano
3. 下載 Git 並上傳 GitHub
	- 也可以直接用 GitHub Desktop


**注意**：
1. 一與二順序不可調換
2. 上面步驟歡迎複製貼上去問 AI，相信它能夠給你更詳盡的回答

$\;$

### 方法一：Vercel

[Astro Nano 官方](https://github.com/markhorn-dev/astro-nano)推薦的部署方式有二：Vercel 和 Netlfiy。
由於我不需要複雜的後端功能，所以 Vercel 在「一鍵部署」和「每月 100GB 的免費流量」完美勝出。加上 Astro Nano 的[ Live Demo](https://astro-nano-demo.vercel.app/) 也是使用 Vercel，所以我在這點上面也沒有多做猶豫。

具體步驟如下：
1. 前往 [vercel.com](https://vercel.com),用 GitHub 帳號登入
2. 點選 "Add New" → "Project"
3. 選擇剛才的 GitHub repository
4. Vercel 會自動偵測這是 Astro 專案,設定都保持預設
5. 點擊 "Deploy" 等待 1-2 分鐘

整個部署流暢到不行。我先在本地 `npm run build` 過了一次，在 Vercel 上花不到五分鐘就弄好了（兩分鐘在註冊與聯動 GitHub）。

### 方法二：個人網域部署



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

不想用 Astro 官方的 favicon，所以我其實有點苦惱該用什麼代替。最後選擇了[ favicon.io](https://favicon.io/)，以我英文名字的首字母作為標記。


---
$\;$

以上就是我架設個人網站的完整過程。對於整個過程，我的心得有點庸俗，不外乎就是「內容」的重要性，與「文字」和「紀錄」的價值，然事實也確實如此。「設計」跟「定位」花我最多時間思考，甚至本文的撰寫時常，也遠超寫程式的時間。

整個構建的過程幾乎不費吹灰之力，只要有些許 Typescript 和前端的概念就已完全足夠，實在令人讚嘆。
再次強調，本文歡迎複製予 AI 閱讀，相信現代工具可以補足我在文中的缺漏，給予讀者更客製化、完善的回饋。這也是我今天為之讚嘆的事情之一——可否替代的分野愈發明確，外在的一切吹噓和追捧，在今天儼然成了唾手可得之物。

