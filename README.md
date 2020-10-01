# Vue HelloWorld 專案

如何從零建立最簡單可運行的 HelloWorld 專案

---

## Features

-   範例 Vue 網頁, 使用單一 Component : HelloWorld

## Setup

### 環境建立

-   vue-devtools 瀏覽器開發工具
-   使用 cdn(若要用 npm 跳過此步驟) <script src="https://cdn.jsdelivr.net/npm/vue@2.6.11"></script>
-   Node.js
-   Yarn (optional)

開啟 CommandLine:

```bash
yarn global add @vue/cli
yarn global add @vue/cli-service-global
```

### 專案建立

開啟 CommandLine:

```bash
vue create test-app
```

選擇 defult

### 專案運行

開啟 CommandLine:

```bash
cd test-app
yarn serve
```

預設 localhost:8080, 若被占用則會變成 8081,8082...

### 佈署

建立 vue.config.js, 決定入口路徑

```javascript
module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/StorePage/" : "/",
};
```
