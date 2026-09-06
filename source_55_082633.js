/** @type {import('./_venera_.js')} */
// Auto-converted Legado -> Venera v2.
// Original source: 聚合漫画屋
// This version follows the current Venera ComicSource shape.
// Complex Legado JS/template expressions are preserved in legadoRules and are not silently executed.

class ConvertedSource_source_55_082633 extends ComicSource {
  name = "聚合漫画屋";
  key = "source_55_082633";
  version = "0.2.0";
  minAppVersion = "1.0.0";
  url = "";
  baseUrl = "https://www.52hah.com";
  headers = {
    "User-Agent": "Mozilla/5.0 (Linux; Android) Mobile",
    "Referer": "https://www.52hah.com"
  };

  legadoRules = {
  "ruleSearchUrl": "https://www.52hah.com/search?keyword=searchKey",
  "ruleSearchList": "@css:.manga-list-2 li||.book-list li",
  "ruleSearchName": "tag.a@title",
  "ruleSearchAuthor": "class.book-list-info-bottom-item@text",
  "ruleSearchNoteUrl": "tag.a@href",
  "ruleSearchCoverUrl": "tag.img@data-original",
  "ruleSearchKind": "",
  "ruleSearchLastChapter": "",
  "ruleBookName": "class.detail-main-info-title@text",
  "ruleBookAuthor": "class.detail-main-info-author.1@text#作者.",
  "ruleBookKind": "class.detail-main-info-class@text",
  "ruleBookLastChapter": "",
  "ruleIntroduce": "class.detail-desc@text",
  "ruleCoverUrl": "@css:.detail-main-bg@data-original",
  "ruleChapterList": ":_H006_T+txV4SZKTrCvFBwwaYpcP8/AF1SjWIHPnG0BayGJce+qH02lMEOBeAXiosk2gTAjwxmvsVW8MST\n7npnSEOysuYFubFKQjdbJFxg+RHBsNQ1PD2+3DjpwMYztGSylky2oRlrQizKkUpuGJ40Ui745GvN\nTMycAhzBWGA50Do/6adhywZcxKeOSdtXmhAfDORW11A/v4MxF1cmv62+PAi196t5Qiibjtj4waIz\nIqYJOkO+8GUth/Bl6T8uwrM+ixymaaXVY5FFehmZLOajnVy+BRriErUOQxnNX4oIWqJVkQMRugqy\nF170ydJSpLmbntnd8d6GGGRgjhO/n4FTMmPgj4tkdveIceNLB8MVxz1EmoA9p8PNanfwhZixFvcY\n/cmZOamlgW71H624fJuUXa58wd18JaDTLpiDtF1CCgEjPta/eK/nQ/Rxs68Ky3J+P4IfMMs2BL9W\n7XzeJmfMr4czKDdsXlo8f74BiOIoOVrvwyNUvwZFnP9GYDbs0W2dzKXDwexHSlIopefsvMwPLsW1\nSP+03lqKhHopyUYtBilArMe7WLLEHJRhB/pZyX5rymMLQDzpihwM7ZDy3+XEblpv90uo/NTVAnNi\nJ72cV7/uSWXFw2B+PJs1Og+m51+gj348UKzsCYD6LSwHwnA8BcSNcLYRLkB2RDCzE3VKkf+M/k7k\n+3xH7TF5O53VfklJmu7Mxbsm4HtmeXDW9AhOTpY/QdeSwzAWoAy9rx/sMtH729kDpxXB7TTB5ST+\n6Sr/qmLJqeRiA8vnNICa761VEzrLZWyMDui4pa3fJpokWkpNkYf7jRF41D0IC/APM6jNHfGpFoiS\nJyLQuQt2GHw+qwMJTbkOtVYTvhmUZp7QoAdKka1/Z2FT25wm51VjleeD0ZQhzG5URX8NqZowEYDe\nS0UoZu+X+DeQK1G9afFLFwdowR0/pX8J1bqOfUELfqMk8Do3nhl8DLvord4ZQ8pWrEofN+MG9LYV\n30zY72FxQPoHZZwcrjs2OZkOB9WCwwpU8GaraKeIJhxzv4mcEXdQEv4uQorILmJXfL5n7RlED64g\npxmkYrHPrkiLlU8PeWfbgwV/AsIOLJXYmslH211mGMdVHzYxyvhzjwhwXzy/031xZrDcbKwbm6yP\nQBPMhI4GtYolhIwOgfMp2FN6JZaO9iS7LffSDDjLmQ66RWnyG3FZY+kck+8XMbtVexovSRyXcslT\nSnZnEq9yNkbQa2rMAlUY2A==\n",
  "ruleChapterName": "text",
  "ruleChapterUrl": "",
  "ruleContentUrl": "href",
  "ruleBookContent": ":_H006_kI9I/gxHKYHs8UAQAcTQGPqIeI3YXN7N5NwXZgSl3vkGjGJ+BVcgl6Y8ci7IdQPH6jrRF2pkc8Jo\n68MwlKzgPyhltcdQk5+3cPv/qXBpV5NcaQmly+HE4C1Sm4GxZCf1ipep1i0BMnD24TnFpy7wIhtZ\n38Y9fVNBklcN3Se4sRZHZ1vjZOxDiuaXB8GO0EXejCfQsyupznrgOQ2NIqnuIdsWVRiy9UmMVfWY\nwX56BfHk16IaX6vC0kO1AiWRiO2h0TOaCe0Kv2cRcLoRVgbdDM0xSvUxf/HUSdr1BmM/56/sdCRy\nO6x0I5OcEPsbMK6cMLBTMREyleZH7OXijfs4/yg1e2ZjnDRo+/jSgz+RsiU4yF0PVpJUrjWKUIHe\nGejgCQifz6OlvaGyKlCZNDvQ/9nKYMtfY8t54IkWW6CqdAy4uI/rvDKv+3E5Rz37ajxt0noLWrGs\nlRV5CpsrA1p55rqEdalrXBHLuNSUC24r/AEi188YBp/84dGz93BZTq/mRiwn8I7ganU0+McxTwZt\nbJXK//Ee3cBcJzqEhIXcLrHyY9ZGFuMMIs9eZ3X4qkOk9fP07sw/BGIT3hkClFbQFzFz3HNZ11e4\nu9P6ZKZOGTb8IGf/YHLZg8tVLbQ4A4nU8t7+KDnAHW4HeoEEHYf+fqTJZYDuHnJbEeAJPdfFbGTO\nGRsUdiGnMGIQEo83V8xCgyeNWSg6kp1Q9sy0I0PRnV68R9JzkENMpNIPnXjjmNazxT4B0Q+xpnR6\n93drXl1G8vW76afpwR3zhczAdRSoSdSis9L1ZkIcfhj2lR5ah0rCNbwDNbGWEt9QDpdiz9RwF+rQ\n7EKJKDV7gynZUCex7eRWqBwF5CP6vSRhSQWykp8p6mBoyC9Mwz6XpH+FZJ3ttU7VQoyy1/crN4A1\nGTYawPYWiXiqFHE9z6+19Yiu+T1Ioe8WEM6g7YTjjHmwWC9V7wjNoAUwp5p02qs9AiRTwUCdQND9\niGvZPS6a8SudUcQ=\n"
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
