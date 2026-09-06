/** @type {import('./_venera_.js')} */
// Auto-converted Legado -> Venera v2.
// Original source: 漫画柜
// This version follows the current Venera ComicSource shape.
// Complex Legado JS/template expressions are preserved in legadoRules and are not silently executed.

class ConvertedSource_source_74_9820b5 extends ComicSource {
  name = "漫画柜";
  key = "source_74_9820b5";
  version = "0.2.0";
  minAppVersion = "1.0.0";
  url = "";
  baseUrl = "https://www.manhuagui.com";
  headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:34.0) Gecko/20100101 Firefox/34.0",
    "Referer": "https://www.manhuagui.com"
  };

  legadoRules = {
  "ruleSearchUrl": "https://www.manhuagui.com/s/searchKey{,_psearchPage}.html",
  "ruleSearchList": "class.book-result@tag.li|class.book-list@tag.li",
  "ruleSearchName": "class.ell@tag.a@text|tag.dt@tag.a@text",
  "ruleSearchAuthor": "",
  "ruleSearchNoteUrl": "tag.a.0@href",
  "ruleSearchCoverUrl": "tag.img@src",
  "ruleSearchKind": "",
  "ruleSearchLastChapter": "class.tt@text#更新至",
  "ruleBookName": "class.title@tag.h1@text",
  "ruleBookAuthor": "class.detail-list@tag.li.1@tag.span.1@tag.a@text",
  "ruleBookKind": "class.detail-list@tag.li.1@tag.span.0@tag.a@text&class.detail-list@class.status@tag.span.1@text",
  "ruleBookLastChapter": "class.hcover@class.text@text#更新至：",
  "ruleIntroduce": "id.intro-cut@text",
  "ruleCoverUrl": "class.hcover@tag.img@src",
  "ruleChapterList": ":_H006_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\n",
  "ruleChapterName": "text",
  "ruleChapterUrl": "",
  "ruleContentUrl": "href",
  "ruleBookContent": ":_H006_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\n"
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
