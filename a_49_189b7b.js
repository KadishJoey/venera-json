/** @type {import('./_venera_.js')} */
// Auto-converted Legado -> Venera v2.
// Original source: 一本漫画-A
// This version follows the current Venera ComicSource shape.
// Complex Legado JS/template expressions are preserved in legadoRules and are not silently executed.

class ConvertedSource_a_49_189b7b extends ComicSource {
  name = "一本漫画-A";
  key = "a_49_189b7b";
  version = "0.2.0";
  minAppVersion = "1.0.0";
  url = "";
  baseUrl = "https://www.yibenmanhua.com";
  headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:34.0) Gecko/20100101 Firefox/34.0",
    "Referer": "https://www.yibenmanhua.com"
  };

  legadoRules = {
  "ruleSearchUrl": "https://www.yibenmanhua.com/api/cartoon/searchResult?keyword=searchKey&page=searchPage&pagesize=20",
  "ruleSearchList": "$.data.list",
  "ruleSearchName": "$.title",
  "ruleSearchAuthor": "$.author",
  "ruleSearchNoteUrl": "https://www.yibenmanhua.com/comic/id/{$.vid}",
  "ruleSearchCoverUrl": "$.v_cover",
  "ruleSearchKind": "$.cartoon_tags",
  "ruleSearchLastChapter": "$.newest_chapter_number",
  "ruleBookName": "p.title@text",
  "ruleBookAuthor": "p.writer@text#作者.",
  "ruleBookKind": "class.tag@tag.span@text#\\/",
  "ruleBookLastChapter": "",
  "ruleIntroduce": "p.matter@text",
  "ruleCoverUrl": "img.cover@src",
  "ruleChapterList": ":_H006_4MTeXs07oktCGkawrxQfZAmGkUjCGmAQYBVNSpxlbvSeU6F5EskjBcPlQHXtYFU8dK8Mg9iXVlrD\niw3LvQo7nPnfd8J0J7Pw4/tcwIwvu8BGUy0tzvmjFpGfZODH8gMKEhyh3Jc8tqhCQUADq4I/wucY\nFNTuvHy3PvBcc2Ou56XD5M/SLnFokOeWQnoyrgh7VeNyCmxW9vjF8Y7lmbzWHrZmLR6wjDFEkRGZ\nRobkC6A9/x98QhXTJEY5+GpBtJ/t2M0ZlITuR4R+FnKU+FqJctinj+7AFOwsQ8w0mLgXi5eEhwTa\n8jKque5PlVTMWGhO6XO6LVlQ1x/ljqmaoUcyOxB1RPVMVjrSA621JP3edREF9KAfe3FguPR4C8u4\nKVu63ZUQKh3e1SSsemj5LDVuQolzv/GHVHd94znTah/0oLPRKvwi82MLvPlGuA4xiJ98uEJWFMxJ\n9y1E28zlbZqnaNKpKHD96+O20qGD4L0CxpMcX3aUtzNAKG1I/KPQU/nPJ8vtvS4qhbAIz+RRRXK2\n9b4YCuVYYP2oRJow8VPH/PcbmctE2+jcmTWanO5KTSTaKu4PZScOd3Xl7dllJCg3APVWABfJ9/kk\nUIxJLriTGIzZKrHlehVXb7GZ1YCdIY+inciD3Ajo4P9TvmdcK1Yocw==\n",
  "ruleChapterName": "text",
  "ruleChapterUrl": "",
  "ruleContentUrl": "href",
  "ruleBookContent": ":_H006_Sjv5jhBsEKjgB1qURSEw7NudBzKQ62g9nocPRay/L+1CbXFSe4YeBOnuxFglv5zidu3pFSzRgLcN\nyJXxBvokIDfqvcnMyZiOkyV2F4u/GfYdz+3eufIgR71fo/LqtkQZo2Li0pmzDirciAIet+aYlVgQ\niEtb2L3Ve/N1sRWHiuKNel9AXR3y/U+V85TxATUhaw17bg2i/WL08mpYYBZIBGywRTTlMpG0sFAs\nCQjTGNHpz7NaJZOyrBHYg2mUsd+xTB1YpfmGA4QYwBZz5wdaPPZGR2NxDP9a6xfyshJ675ihJJLg\nHq7FrbWfYRwG2h6dgy3tBXeI/pg1M53Zq6Aqga7tVFkeeYUTfMUBkUdkezpDZ2sG7rIzXaovPxCT\nNzaSHIUsKS2JYBCwjEZhVem7vLjlmZpknvTgItErDA4or8E4GIKIiK1AFRagATsPbHFKuUwM+ajb\nchejS6KYntNzGUhVIy2/IgvuphN5Q8CY4cXzgn7twPhQJEuB4qYjahi42N4VdrXgoWJOqJWyvJd3\nmld0O7c/wfDUrOrdeLNnzQXN7UBl1FvFtRCyOc7ud+3FR7IZ9VGJ2bA6rKVzkwu2hIPSWR1F+VC2\nD7xh5MGNdLxm1Tne/NBtWuFMDbJVE1h8+Es0HdGfVhmVtiW0vLUw8qiByGOP4apIoCsORteWxn0e\nED4OTbQ9SZIBJ8yavCBBL9h2YAYZkuxbGvCZAFEilLzg9FFYzqglKS9RD7NaFqCHa+tV7k5+kAmM\ncx/a24NCaC7t4EgXSIqC8CFrhosg+WRK9fz2U729fKdK61jK1Cf+wqp8xqV/fKREscnPpD6dqbp9\nLdv5op/ZOLcVj3dQ1NEtqNpqc5824ltxxY1liC7tsy2RFkUNNuRyz1BZrbL2yPjvkrh4+20C8yMt\nGLSTBOoONt21Tj66xnJGqWO2k3AWsBG6UJsIjQADvLiqkk94FG7pqRdhEtUDbO0V4WYX2AuytMZm\nx1bk/3kPSLaFDanFKCqVGDZFsSccw7ovEn+k8jPN1Fs7uWSCz/FRXirYbcD6BTau7+emIf1c8XU7\nHgHUjQEjTWN8gurASCCRkrKX/DIiT+1m/AkuEX2LFha31WdYFV1TVC8hLTauDRqvTFTz5DMG8I0W\nxDD03H2TQ7+bOgT4g1uf1BGeZVnSAv0TsLHgxogALZukC+vr0YbNHuxdoSJllQJC32n8OA8Y3wpn\nEZ2d5RneOIiwo0d2yefXvlJZGfxtnbFc0gPZYMOjlYmVSKod79hJAjEqCnBXyPyZmKWYO6j1X1Qf\nWFf/O+50AMQ8uNSl7kSFClQ/x4rWBycozh/6OWqzOWh930VozUen2oqFGn9+6hjnC5COJwVIAFTw\nYHyKRPmH5RtfsPYrHc8K9xGQsATPIqH4siKgf+4zmZIrrYWgLsUxce9RJOKFb/37XVumybEykHyS\nITCpCuRAihL32dSRYjMK54LtP+Nq\n"
};

  _trim(v) {
    if (v === null || v === undefined) return "";
    return String(v).trim();
  }

  _abs(url, base) {
    url = this._trim(url);
    if (!url) return "";
    if (/^https?:\/\//i.test(url)) return url;
    if (url.startsWith("//")) return (/^https:/i.test(base || "") ? "https:" : "http:") + url;
    try {
      return new URL(url, base || this.baseUrl).toString();
    } catch (_) {
      return url;
    }
  }

  _strip(rule) {
    return this._trim(rule)
      .replace(/<js>[\s\S]*$/i, "")
      .replace(/@js:[\s\S]*$/i, "")
      .trim();
  }

  _alts(rule) {
    return this._strip(rule).split("||").map(x => x.trim()).filter(Boolean);
  }

  _selector(s) {
    s = this._trim(s);
    s = s.replace(/^class\.([^\s@|]+)/, (_, x) => "." + x.replace(/\s+/g, "."));
    s = s.replace(/^id\.([^\s@|]+)/, "#$1");
    s = s.replace(/^tag\.([^\s@|]+)/, "$1");
    return s;
  }

  _parseSelectorRule(rule) {
    // Legado common forms:
    // class.foo@li -> .foo li
    // class.foo@li@a@href -> selector .foo li a, attribute href
    // class.foo@text -> .foo + text
    let raw = this._strip(rule);
    let p = raw.split("@").map(x => x.trim()).filter(Boolean);
    const attrs = ["text","href","src","content","title","data-src","data-original",
                   "alt","value","data-lazy-src","data-url"];
    let attr = "text";
    if (p.length > 1 && attrs.includes(p[p.length-1].toLowerCase())) {
      attr = p.pop().toLowerCase();
    }
    let selector = this._selector(p.shift() || "");
    for (const part of p) {
      let x = part;
      if (x.startsWith("tag.")) x = x.slice(4);
      else if (x.startsWith("class.")) x = "." + x.slice(6).replace(/\s+/g, ".");
      else if (x.startsWith("id.")) x = "#" + x.slice(3);
      selector += " " + x;
    }
    return {selector, attr};
  }

  _readNode(node, attr) {
    if (!node) return "";
    if (attr === "text") return this._trim(node.text);
    let a = node.attributes || {};
    return this._trim(a[attr] !== undefined ? a[attr] : "");
  }

  _htmlAll(ctx, rule) {
    const {selector, attr} = this._parseSelectorRule(rule);
    let nodes = [];
    try {
      if (!selector) nodes = [ctx];
      else nodes = ctx.querySelectorAll(selector) || [];
    } catch (_) { return []; }
    return Array.from(nodes).map(n => this._readNode(n, attr)).filter(Boolean);
  }

  _htmlOne(ctx, rule, base) {
    const vals = this._htmlAll(ctx, rule);
    if (!vals.length) return "";
    let v = vals[0];
    if (/^(href|src|data-src|data-original|data-lazy-src|data-url|url)$/i.test(this._parseSelectorRule(rule).attr))
      v = this._abs(v, base);
    return v;
  }

  _jsonPath(root, path) {
    path = this._strip(path).replace(/^\$\.?/, "");
    if (!path) return [root];
    let parts = path.replace(/\[(\d+)\]/g, ".$1").replace(/\[\*\]/g, ".*")
      .split(".").filter(Boolean);
    let cur = [root];
    for (const p of parts) {
      const next = [];
      for (const v of cur) {
        if (v == null) continue;
        if (p === "*") {
          if (Array.isArray(v)) next.push(...v);
          else if (typeof v === "object") next.push(...Object.values(v));
        } else if (Array.isArray(v) && /^\d+$/.test(p)) {
          if (v[Number(p)] !== undefined) next.push(v[Number(p)]);
        } else if (typeof v === "object" && Object.prototype.hasOwnProperty.call(v,p)) {
          next.push(v[p]);
        }
      }
      cur = next;
    }
    return cur;
  }

  _isJsonRule(rule, body) {
    return /^\$/.test(this._strip(rule)) ||
      (typeof body === "string" && /^[\s]*[\[{]/.test(body));
  }

  _list(body, rule) {
    if (!rule) return [];
    if (this._isJsonRule(rule, body)) {
      try {
        const root = typeof body === "string" ? JSON.parse(body) : body;
        for (const a of this._alts(rule)) {
          const v = this._jsonPath(root, a);
          if (v.length) return v;
        }
      } catch (_) {}
    }
    try {
      const doc = body instanceof HtmlDocument ? body : new HtmlDocument(String(body));
      for (const a of this._alts(rule)) {
        const candidates = a.split("|").map(x => x.trim()).filter(Boolean);
        for (const c of candidates) {
          const {selector} = this._parseSelectorRule(c);
          const nodes = selector ? doc.querySelectorAll(selector) : [];
          if (nodes && nodes.length) return Array.from(nodes);
        }
      }
    } catch (_) {}
    return [];
  }

  _value(ctx, rule, base) {
    if (!rule) return "";
    if (ctx && typeof ctx === "object" && ctx.localName === undefined &&
        !(ctx instanceof HtmlDocument) && /^\$/.test(this._strip(rule))) {
      try {
        for (const a of this._alts(rule)) {
          const v = this._jsonPath(ctx, a);
          if (v.length) return this._trim(typeof v[0] === "object" ? JSON.stringify(v[0]) : v[0]);
        }
      } catch (_) {}
    }
    return this._htmlOne(ctx, rule, base);
  }

  _values(ctx, rule, base) {
    if (!rule) return [];
    if (ctx && typeof ctx === "object" && ctx.localName === undefined &&
        !(ctx instanceof HtmlDocument) && /^\$/.test(this._strip(rule))) {
      try {
        for (const a of this._alts(rule)) {
          const v = this._jsonPath(ctx, a).map(x => this._trim(x)).filter(Boolean);
          if (v.length) return v;
        }
      } catch (_) {}
    }
    const vals = this._htmlAll(ctx, rule);
    const attr = this._parseSelectorRule(rule).attr;
    if (/^(href|src|data-src|data-original|data-lazy-src|data-url)$/i.test(attr))
      return vals.map(v => this._abs(v, base));
    return vals;
  }

  _comic(node, base) {
    const id = this._value(node, this.legadoRules.ruleSearchNoteUrl, base);
    const title = this._value(node, this.legadoRules.ruleSearchName, base) || id;
    const cover = this._value(node, this.legadoRules.ruleSearchCoverUrl, base);
    const author = this._value(node, this.legadoRules.ruleSearchAuthor, base);
    const kind = this._value(node, this.legadoRules.ruleSearchKind, base);
    const latest = this._value(node, this.legadoRules.ruleSearchLastChapter, base);
    return {
      id: id || title,
      title: title || "(未命名)",
      subTitle: author || latest || "",
      cover: cover || "",
      tags: kind ? String(kind).split(/[,/、\s]+/).filter(Boolean) : [],
      description: latest || ""
    };
  }

  async _get(url, headers) {
    const res = await Network.get(url, Object.assign({}, this.headers, headers || {}));
    if (!res || res.status < 200 || res.status >= 400) {
      throw new Error("HTTP " + (res ? res.status : "error"));
    }
    return res;
  }

  search = {
    load: async (keyword, options, page) => {
      const u = this._strip(this.legadoRules.ruleSearchUrl)
        .replace(/searchKey/g, encodeURIComponent(keyword || ""))
        .replace(/searchPage/g, String(page || 1));
      if (!u) return {comics: [], maxPage: 1};
      const res = await this._get(u);
      const nodes = this._list(res.body, this.legadoRules.ruleSearchList);
      return {
        comics: nodes.map(n => this._comic(n, u)).filter(x => x.title),
        maxPage: 9999
      };
    },
    optionList: []
  };

  comic = {
    loadInfo: async (id) => {
      const url = this._abs(id, this.baseUrl);
      const res = await this._get(url);
      let root;
      try {
        root = this._isJsonRule(this.legadoRules.ruleBookName, res.body)
          ? JSON.parse(res.body) : new HtmlDocument(res.body);
      } catch (_) { root = new HtmlDocument(res.body); }

      const title = this._value(root, this.legadoRules.ruleBookName, url) || id;
      const author = this._value(root, this.legadoRules.ruleBookAuthor, url);
      const desc = this._value(root, this.legadoRules.ruleIntroduce, url);
      const cover = this._value(root, this.legadoRules.ruleCoverUrl, url);
      const kind = this._value(root, this.legadoRules.ruleBookKind, url);
      const nodes = this._list(res.body, this.legadoRules.ruleChapterList);
      const chapters = new Map();
      nodes.forEach((n, i) => {
        const name = this._value(n, this.legadoRules.ruleChapterName, url) || ("第" + (i+1) + "话");
        let ep = this._value(n, this.legadoRules.ruleChapterUrl, url);
        if (!ep) ep = this._value(n, this.legadoRules.ruleContentUrl, url);
        if (!ep && n && n.attributes) ep = n.attributes.href || "";
        ep = this._abs(ep, url);
        if (ep) chapters.set(ep, name);
      });
      return new ComicDetails({
        title,
        cover,
        description: desc || "",
        tags: kind ? {"分类": String(kind).split(/[,/、\s]+/).filter(Boolean)} : {},
        chapters,
        url
      });
    },

    loadEp: async (comicId, epId) => {
      const url = this._abs(epId || comicId, comicId || this.baseUrl);
      const res = await this._get(url);
      let root;
      try { root = new HtmlDocument(res.body); } catch (_) { root = res.body; }
      let images = this._values(root, this.legadoRules.ruleBookContent, url);
      if (!images.length) images = this._values(root, this.legadoRules.ruleContentUrl, url);
      if (!images.length && root instanceof HtmlDocument) {
        try {
          for (const n of root.querySelectorAll("img") || []) {
            const a = n.attributes || {};
            const v = a["data-original"] || a["data-src"] || a["data-lazy-src"] || a.src || "";
            if (v) images.push(this._abs(v, url));
          }
        } catch (_) {}
      }
      return {images: [...new Set(images.filter(x => /^https?:\/\//i.test(x)))]};
    },

    onImageLoad: () => ({headers: this.headers || {}}),
    onThumbnailLoad: () => ({headers: this.headers || {}})
  };

}
