---
title: "JavaScript 的歷史包袱：誰是罪魁禍首？"
description: "我第一次碰 JS 的時候研究套件比研究語法還痛苦"
date: "Aug 21 2025"
tags: ["research"]
---

本文由 Claude Sonnet 4 進行大範圍的網站查找與初步答疑，並由人工進行詮釋、加註、查證與撰寫。
如果發現疏漏或者想要提供建議，歡迎透過 [DC](https://discord.com/users/874451446802817044) 與 [email](mailto:maypan1107@gmail.com) 聯繫我。

---

起因：在 [Gatsby框架的缺点](https://www.owenyoung.com/blog/gatsby-cons/)看到這樣一句話：

>*Gatsby 的大多数功能都是通过插件提供，导致项目有大量的第三方依赖（也有很多是官方维护的插件），而 Nodejs 的`package-lock.json`总是在升级的时候搞错一些版本，让我很抓狂（我不确定这个问题有没有得到解决），对于多依赖项目，我经常需要删掉整个 lock 文件，然后重新生成新的 lock 索引。*

於是我感到奇怪，難道不是所有 JavaScript 生態系的框架都會遇到這樣的問題嗎？Gatsby 有什麼特別？

不過話又說回來：**所以到底為什麼 JavaScript 生態系會變成這樣？**

---
# 歷史

## JavaScript 的 "Script"

JavaScript 由 Brendan Eich 於 1995 年在 Netscape Communications 創造。最初叫做 LiveScript，用來作為公司旗艦瀏覽器 Netscape Navigator 的腳本語言，配合實現互動功能，而非一個完整的標準程式語言。

根據 [Internet Archive](https://web.archive.org/) 收錄的一篇報導指出，1995 年 12 月 4 日，Netscape Communications Corporation 與 Sun Microsystems 正式推出 JavaScript，將其稱為「一種開放、跨平台的物件腳本語言，用於在企業網路與互聯網上創建與自訂應用程式」，並且與 Java—— Sun 所開發、業界領先的物件導向跨平台程式語言——互補 。

> *Netscape Communications Corporation (NASDAQ: NSCP) and Sun Microsystems, Inc. (NASDAQ:SUNW), today announced JavaScript, an open, cross-platform object scripting language for the creation and customization of applications on enterprise networks and the Internet. The JavaScript language complements Java, Sun's industry-leading object-oriented, cross-platform programming language. The initial version of JavaScript is available now as part of the beta version of Netscape Navigator 2.0, which is currently available for downloading from Netscape's web site.*[^2]

發布後，越來越多的瀏覽器開始支援 JavaScript。然而在很長一段時間內，JavaScript 並未被嚴肅看待。最早的版本存在顯著的效能與安全問題，但開發者別無選擇：如果想在瀏覽器中執行程式，就必須使用 JavaScript。[^1]

同樣，在新聞稿中，可以看見諸多今日科技巨擘，包含但不限於 Apple、Oracle、Spider⋯⋯，皆表示支持 JavaScript 作為開放標準物件腳本語言，並計畫在未來產品中提供支援。

> *In addition, 28 industry-leading companies, including America Online, Inc., Apple Computer, Inc., Architext Software, Attachmate Corporation, AT&T;, Borland International, Brio Technology, Inc., Computer Associates, Inc., Digital Equipment Corporation, Hewlett-Packard Company, Iconovex Corporation, Illustra Information Technologies, Inc., Informix Software, Inc., Intuit, Inc., Macromedia, Metrowerks, Inc., Novell, Inc., Oracle Corporation, Paper Software, Inc., Precept Software, Inc., RAD Technologies, Inc., The Santa Cruz Operation, Inc., Silicon Graphics, Inc., Spider Technologies, Sybase, Inc., Toshiba Corporation, Verity, Inc., and Vermeer Technologies, Inc., have endorsed JavaScript as an open standard object scripting language and intend to provide it in future products. The draft specification of JavaScript, as well as the final draft specification of Java, is planned for publishing and submission to appropriate standards bodies for industry review and comment this month.* [^2]

根據 Brendan Eich 2018 年在 The New Stack 的自述，當時 34 歲的他甚至僅僅花了十天就完成了 JavaScript 的第一個版本。[^3]


## 問題

作為腳本語言而非標準的程式語言， JavaScript 長期保有許多問題，其中最關鍵的就是**標準庫不完整、缺乏系統級 I/O (System-level I/O)**，前者導致開發者經常需要依賴各種第三方套件來實現基本功能，後者則使 JS 無法直接與作業系統互動，而正是這樣的缺陷催生出了 Node.js 以及 npm。


# Node.js 與 npm 
## Node.js: JavaScript 的突破

2009 年，在 JSConf EU 上，輟學的數學系博士生 Ryan Dahl  推出了一個叫做 Node.js 的專案，旨在創造一種基於 JavaScript 的執行環境 (runtime environment)，使其能夠順利在伺服器端運行。


 npm 創辦人 Isaac Z. Schlueter 在 2013 年的一份簡報 ***Node.js: Patterns and Opinions***[^4] 中寫道：

>***WTF is a Node.js?***
>
>- *JavaScript on the Server* 
>  *(or robots, helicopters, any other not-a-web-browser thing)*
>- *Non-blocking I/O*
>- *Callbacks, Events, and Streams*

2008 年，Google 推出了 V8 Javascript Engine，最初為 Google Chrome 瀏覽器而建立，以其卓越的性能和 JIT 編譯技術重新定義了 JavaScript 的執行效率。今天，除了 FireFox 與蘋果 Safari 以外，絕大多數的瀏覽器都使用 Chromium，投入 V8 的懷抱。



> ***Node is JavaScript***
> 
> - *Node is not a language - JavaScript is the language*
> - *Portability, Events, Run to completion: The JavaScript way*
> - *Not developing a language removes a huge burden. Let TC-39 and V8 fight those battles for us!*
> - *Node.js endeavors to embody the spirit of JavaScript, not to change it.* [^4]



透過將 V8 與 event loop（libuv, Node.js 中 event loop 的實現方法）結合，Ryan 開發了 Node.js，讓 JavaScript 不只跑在瀏覽器，而能用來打造快速的伺服器端應用。[^5]

## npm: problem solver or trouble maker?

Ruby 有 RubyGems，Python 有 pip，JavaScript 呢？解決了 JavaScript 缺發原生 System-level I/O 的問題，仍然有一個巨大的缺陷必須克服——**標準庫的不完整**。

npm 全名叫做 Node Package Manager，由 Node.js 的重要推手之一——Isaac Z. Schlueter——在 2010 年推出，是一種基於 Node,js 的套件管理工具，讓使用者得以：

- 安裝和管理 JavaScript 套件/模組
- 處理專案依賴關係
- 發布自己的套件到 npm 註冊表
- 執行專案腳本

結構上，

- `package.json` 作為專案配置文件，記錄依賴套件和專案資訊
- `node_modules/` 負責存放已安裝套件的資料夾

## 困境

### (1) 依賴關係 (dependencies)

npm 生態系統深受 Unix 哲學影響：「做一件事並把它做好」(Do One Thing and Do It Well) ，強調構建小而專注的模組。核心原則是：「每個模組只做一件事，並且做得很好，使之易於與其他程式組合」（用現代話來說就是：不要重複造輪子）。[^4]

然而， Unix 哲學原本是針對程序 (programs) 而非庫 (libraries) 所設計。Unix programs 通過管道 (pipe) 連接，使之成為一種線性的組合，而 npm packages 則互依賴，導致後者的複雜程度遠遠高於前者。

2020 年的[一個研究](https://i.blackhat.com/USA-20/Wednesday/us-20-Edwards-The-Devils-In-The-Dependency-Data-Driven-Software-Composition-Analysis.pdf)顯示，典型的 JavaScript 程序依賴於 377 個套件，10% 的專案依賴超過 1,400 個第三方庫。[^6]

#### 歷史事件：left-pad

npm 官方部落格文章：[kik, left-pad, and npm](https://blog.npmjs.org/post/141577284765/kik-left-pad-and-npm)，詳細解釋了 left-pad 事件的經過與 npm 的最終決策。

`kik` 套件的創作者 Azer Koçulu 因命名問題與同名公司 Kik Interactive 發生爭執，為了確保 npm 使用者能取得預期的套件，npm 官方認為 "kik" 名稱（非內容本身）的所有權應歸給 Kik Interactive。


出於對裁撤的不滿，Azer 在無預警的情況下取消發佈了 `kik` 及其他 272 個套件，其中包括 `left-pad`。儘管 `left-pad` 本身是一個僅有 11 行程式碼的套件， Azer 的舉動依然導致無數相互依賴的套件無法使用（包括知名的 babel、atom 等），使的全球每分鐘發生數百次的請求失敗。


### (2) 太容易發佈

基於 Unix 哲學，同時為了廣泛搜集大家的想法與程式碼用以豐富 JavaScript（或者說 Node.js）生態，npm 選擇了「零門檻發布」作為他的策略。

任何擁有 npm 帳號的用戶只要 `npm publish`，就可以輕鬆發布自己的 npm 套件，無需任何審查或品質控制。這種開放性雖然促進了生態系統的快速發展，但也帶來了諸如資金、儲存空間、品質參差、命名衝突、版本管理混亂、冗餘套件、安全漏洞等問題。


# 今天

回到我們最一開始的問題，為什麼博客作者要特別強調 [Gatsby.js](https://www.gatsbyjs.com/)的缺點？

事實上，許多框架為了避免過度依賴，經常有意識地限制外部依賴的數量，或者將核心功能內建到框架中。比如 Next.js、Vue.js 等。此外，Ryan Dahl  本人也曾於 JSConf 上公開發表過他對 Node.js 的十大遺憾，並且同時也在開發名叫 Deno 的新產品，試著以一打二，取代如今 「Node.js + npm 」的組合。


JavaScript 生態系的今天，儼然是偶然中的必然，命名本身的 "script" 一詞，就已經將它的身世昭告天下。甚至，ES6 (ES: ECMAScript，是 JavaScript 的正式標準名稱；6 代表第六代) 發佈於 2015 年，但 Node.js 因技術問題直到 2019 年才對新版 ES 提供了實驗性支援。這四年的空白期導致既有的框架如 React、Vue CLI、Expo ⋯⋯至今仍嚴重依賴 Babel 等轉譯工具，更加劇了 JavaScript 生態的問題。[^7]

回扣此文標題，如果要問誰是罪魁禍首，只能說今天的所有一切現狀，都源自於歷史的每一步。




[^1]: [Introduction by LauchSchool](https://launchschool.com/books/javascript/read/introduction)
[^2]: [NETSCAPE AND SUN ANNOUNCE JAVASCRIPT, THE OPEN, CROSS-PLATFORM OBJECT SCRIPTING LANGUAGE FOR ENTERPRISE NETWORKS AND THE INTERNET](https://web.archive.org/web/20070916144913/https://wp.netscape.com/newsref/pr/newsrelease67.html)
[^3]: [Brendan Eich on Creating JavaScript in 10 Days, and What He’d Do Differently Today](https://thenewstack.io/brendan-eich-on-creating-javascript-in-10-days-and-what-hed-do-differently-today/)
[^4]: [Unix Philosophy and Node.js](https://blog.izs.me/2013/04/unix-philosophy-and-nodejs/), by  [Isaac Z. Schlueter](https://izs.me/)
[^5]: [Ryan Dahl: Node.js, Evented I/O for V8 Javascript](https://www.jsconf.eu/2009/speaker/speakers_selected.html)
[^6]: [The Rising Threat of Software Supply Chain Attacks: Managing Dependencies of Open Source Projects](https://openssf.org/blog/2023/08/18/the-rising-threat-of-software-supply-chain-attacks-managing-dependencies-of-open-source-projects/)by Open Source Security Foundation
[^7]: [ES2015 module detection in Node.js](https://es2015-node.js.org/)






---
延伸閱讀：

1. [Node.js: The Documentary | An origin story](https://www.youtube.com/watch?v=LB8KwiiUGy0&t=3s)
2. [10 Things I Regret About Node.js](https://www.youtube.com/watch?v=M3BM9TB-8yA)