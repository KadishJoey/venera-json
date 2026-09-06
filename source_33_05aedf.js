/** @type {import('./_venera_.js')} */
// Auto-converted Legado -> Venera v2.
// Original source: 漫畫櫃
// This version follows the current Venera ComicSource shape.
// Complex Legado JS/template expressions are preserved in legadoRules and are not silently executed.

class ConvertedSource_source_33_05aedf extends ComicSource {
  name = "漫畫櫃";
  key = "source_33_05aedf";
  version = "0.2.0";
  minAppVersion = "1.0.0";
  url = "";
  baseUrl = "https://tw.manhuagui.com";
  headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:34.0) Gecko/20100101 Firefox/34.0",
    "Referer": "https://tw.manhuagui.com"
  };

  legadoRules = {
  "ruleSearchUrl": "https://tw.manhuagui.com/s/searchKey{,_psearchPage}.html",
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
  "ruleBookContent": ":_H006_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\nTJ191wTgGr08PB49k4XF\n"
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
