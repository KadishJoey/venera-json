/** @type {import('./_venera_.js')} */
// Auto-converted Legado -> Venera v2.
// Original source: 包子漫画cw
// This version follows the current Venera ComicSource shape.
// Complex Legado JS/template expressions are preserved in legadoRules and are not silently executed.

class ConvertedSource_cw_57_cc4798 extends ComicSource {
  name = "包子漫画cw";
  key = "cw_57_cc4798";
  version = "0.2.0";
  minAppVersion = "1.0.0";
  url = "";
  baseUrl = "https://cn.webmota.com";
  headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:34.0) Gecko/20100101 Firefox/34.0",
    "Referer": "https://cn.webmota.com"
  };

  legadoRules = {
  "ruleSearchUrl": "https://cn.webmota.com/search?q=searchKey",
  "ruleSearchList": ".comics-card",
  "ruleSearchName": ".comics-card__title@text",
  "ruleSearchAuthor": ".tags@text",
  "ruleSearchNoteUrl": "tag.a.0@href",
  "ruleSearchCoverUrl": "amp-img@src",
  "ruleSearchKind": "",
  "ruleSearchLastChapter": "",
  "ruleBookName": "h1.comics-detail__title@text",
  "ruleBookAuthor": "h2.comics-detail__author@text",
  "ruleBookKind": ".supporting-text div:first-child@text&.tag-list span@text#状态：",
  "ruleBookLastChapter": ".supporting-text span>a@text",
  "ruleIntroduce": "p.comics-detail__desc@text",
  "ruleCoverUrl": ".pure-u-1-1 amp-img@src",
  "ruleChapterList": ":_H006_fgscQGawGFDgf7723+YnfX2q1WdHV0B+eBUdEpA3yPpVz/U1EiJbpO+bMS+ky4TukLsveYUMtAGo\nfh867vOUvNFCeS/71/PiBlIP1A/DHS5HSkSpxUwPssWH6LviVMHuNB4f9RB30ufHY6AXDOYWH/d/\n92W7k4JuE5B8HGkdpO1kb+gvzKNfNIOv0AB6QYmYVBvLgWL+m2tJyicrwlM3YJHYG/k856pq10o5\nb5fYlbuC/JZabgRy7AoUVHVnX/ivXEA8Qc05RSNIm+minqXuN1p3vY54k5v/87IejMlC856MCA9q\nzQrA/+rRJ9nxkfig/Z86KV3yQOOenx4eTqy3omzPNWuXv3ZpCUV/NH+3fwaRDbizAvEhp/efg9WK\n8ILGXGh1l2EOnlOexI/vBee4ncgT6DR9dMWcQ/5Qm5I3PWFC+nsXdZBj+X9oqOAIY5j89CwVlUya\nQmubf8AvmXOW1txzogMaiOiVGWP/ntPb3FzfnV9jwdsh7/HyGbnBJ8E/DFFgZgn/mC4YYvQ2grwy\nHA==",
  "ruleChapterName": "text",
  "ruleChapterUrl": "",
  "ruleContentUrl": "href",
  "ruleBookContent": ":_H006_ygd4AB/q0NgtvyyK4+l6tuEXDmUNmx5m7pVC/DhjzUsHnPnmowAkvhX/xqLMWaCCFlJ5IRq4BNAq\nYpHzb1UNuJ3j/44uiP8fjbFgAQ5OYCBJhi+Nz8hgrb31bXuYH6ohwL/GhwN7BeJi9laiGWrpya3V\ntYl8ePz6uBbO5dvT3mCo1wHIWmyTYRwbSrwOFC0Znf6iXprLs3/tIXmC7NNKTA/Idp9gjIYlgbdB\nCx1jCSb9s5MaqI80COXT0Q2/s3s1K13BGBeckWwsW5x39w6U3i4gp8h7uGucndcOn8GHQX+bvCFR\neVOGhWXp4qJf642ByXXcC68yMd4s3uoWdDnKPSpXcWi0nGyxfEEu5/ybO61//bZh4UzI+9va7sH/\nGbICnswI7kiYkn11wn4rks00sv7vuNo4KFP1TsF5hUEnJXGBv/P8O04pL4iyhrf2RvtuPzFiOvB1\nwWTHUbwQ0SNo30QhW2AjMtN3IpvMi4numGgfzLfdOsuzg9xmmqJmzk5x04ZrvQsfaQZMBeOPCCGI\n/uESmGk4r7KCVX2qkjrb63I0h92qbYF6JlMCY8oH1vmVjmFOjWnYf97n6fN02C7pZNneOyIMqcJ+\ngU1+bzEq5TIAOCF69OEC6WJZGG1DODhY9+trt/rlxvnxzaSr7FrAwtVP47WIJIqxXeqBEFpjXrIJ\n8TDZC2KH2HaWAxd1JVBiPruIAfgrEXBkEr+algD1zZSJD7Lcs4K0oeX8GQiAXbMiYVq8GNQxAUfC\nlbQ+qWq9ytklkHModaBJSn3LSqnijde/bvoi+lY9bzkk+j6SFRXixY8P17eLiyvW8reOD8lyGgpr\nyIUGTyTgP3bY1yICNM+xtJHGah3Fj/zZwYGut9E="
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
