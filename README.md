# Venera 75 源转换 v2

这是对原 75 个 Legado/阅读漫画书源的第二版 Venera 转换。

v2 相比第一版：
- 按当前 Venera `ComicSource` API 组织 `search` / `comic.loadInfo` / `comic.loadEp`；
- 修正常见 `class.xxx@li@a@href` 选择器的解析；
- 支持常见 `data-src` / `data-original` / `data-lazy-src` 图片属性；
- 支持基础 JSONPath；
- 保留原始 Legado rules，复杂 `@js:`、`<js>`、模板变量等不伪装成已转换。

官方 Venera 文档明确要求源使用 JavaScript `ComicSource`，index 中使用 `fileName` 指向源文件。请先在 Venera 中用本包测试，再把通过测试的源合并到长期仓库。
