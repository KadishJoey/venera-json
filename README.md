# Venera 自动转换源包

此目录由原 Legado/阅读格式漫画源自动转换生成。

## 使用
1. 将整个目录内容上传到 GitHub 仓库根目录。
2. Venera 中添加仓库的 `index.json` 地址，例如：
   `https://cdn.jsdelivr.net/gh/你的用户名/你的仓库@main/index.json`
3. 每个 `.js` 是一个独立 Venera `ComicSource`。

## 兼容范围
自动兼容层主要处理：
- 常见 CSS / Legado 旧式 `class.xxx`、`id.xxx` 选择器
- `@text` / `@href` / `@src` / 常见属性
- 基础 JSONPath（如 `$.data.list[*]`）
- 搜索 URL 中的 `searchKey` / `searchPage`
- 搜索、详情、章节、图片四个主要流程

## 已知限制
原源中的 `@js:`、`<js>`、`{{...}}`、Java 对象调用、复杂加解密、登录、POST 特殊请求、
动态 token、分页脚本等无法保证自动兼容。这些原始规则已保留在每个 JS 文件的 `legadoRules`
中，可继续逐源人工修复。请查看 `conversion_report.json` 找出含复杂规则的源。
