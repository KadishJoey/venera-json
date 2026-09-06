/** @type {import('./_venera_.js')} */
// Auto-converted Legado -> Venera v2.
// Original source: 漫漫漫画-M
// This version follows the current Venera ComicSource shape.
// Complex Legado JS/template expressions are preserved in legadoRules and are not silently executed.

class ConvertedSource_m_37_824ad0 extends ComicSource {
  name = "漫漫漫画-M";
  key = "m_37_824ad0";
  version = "0.2.0";
  minAppVersion = "1.0.0";
  url = "";
  baseUrl = "https://m.manmanapp.com";
  headers = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 8.0.0; MIX 2 Build/OPR1.170623.027) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 YaBrowser/18.9.1.2199.00 Mobile Safari/537.36",
    "Referer": "https://m.manmanapp.com"
  };

  legadoRules = {
  "ruleSearchUrl": "https://m.manmanapp.com/search/word-searchKey_searchPage.html",
  "ruleSearchList": "<js>\nvar key = decodeURI(baseUrl.replace(/^.*-(.*?)\\_.*html/,\"$1\"));\nvar page = baseUrl.replace(/^.*\\_(.*?)\\.html/,\"$1\");\nvar list = new Array();\nif (page<=1) {\n  var title = String(java.getString(\"class.classification_list@tag.a@tag.h3@text\",false)).trim().split(/\\n/);\n  var author = String(java.getString(\"class.classification_list@tag.a@class.author@text\",false)).trim().split(/\\n/);\n  var cover  = String(java.getString(\"class.classification_list@tag.a@tag.img@src\",false)).trim().split(/\\n/);\n  var href = String(java.getString(\"class.classification_list@tag.a@href\",false)).trim().split(/\\n/);\n  for (var i=0; i<title.length; i++) {\n    list.push({title:title[i], author:author[i], cover:cover[i], href:href[i]});\n  }\n}\nelse {\n  var json;\n  if (baseUrl.indexOf(\"search\")>0)\n    json = JSON.parse(java.postForm(\"https://m.manmanapp.com/search/search-ajax.html\",\"keyword=\"+key+\"&page=\"+page));\n  else\n    json = JSON.parse(java.postForm(\"https://m.manmanapp.com/category/list-ajax.html\",\"id=\"+key+\"&page=\"+page));\n  json.data.forEach(function(data){\n    list.push({title:data.title,  author:data.author.nickname, cover:data.cover_image_url, href:\"/comic-\"+data.id+\".html\"});\n  });\n}\nlist\n</js>",
  "ruleSearchName": "title",
  "ruleSearchAuthor": "author",
  "ruleSearchNoteUrl": "href",
  "ruleSearchCoverUrl": "cover",
  "ruleSearchKind": "",
  "ruleSearchLastChapter": "",
  "ruleBookName": "class.title@text#独家",
  "ruleBookAuthor": "class.author@tag.a.0@text",
  "ruleBookKind": "class.type@text#类型：",
  "ruleBookLastChapter": "@js:String(java.getString(\"class.cartoon_catalog@tag.li.0@tag.h6@html\",false)).replace(/<(.*?)>.*/,\"$1\")",
  "ruleIntroduce": "class.introduce@tag.p@text#作品简介：",
  "ruleCoverUrl": "class.cover@tag.img@src",
  "ruleChapterList": ":_H006_by7rH6ogxBGuj5tpXtWaxaeHDT2P9u1TMpZsRXLfUMq4RQyJaYgUtuT6wjdhX/2oJWqDdkh1HMWI\nDvvlvvGTAGNigs6QusAbk2i22iTTuyiPA4u6Xip2/pjvI2m8T3lvy2wIk4FyrXbcPqYl6H8WigXo\nx2SYpRTw24xDnTRh/fadWUH3z5/2nAN+TO6zYgFT5b1XH3qCOeQIXjqXkfCsBSLhtHlkGxQMT98i\nElWzXP3iW8qa6Rze1IKYyu1gpxn/QfSV7XcGOVoL3zz1SC3IFwnPe7u0SEkx8BDz3B15/wjJWvgX\nsK21+EahzNJPCyBt88Vj+3pzG0Bu/6h8lcq2JTnw2HNfA5Pf0eG+XcjOcM5dePcK5nt3g4E2PbFy\nvkVQKVtUw+wsOP52Go1XR/x5fdyJKSpciYvTShBUUTvJ/6B8KoLMObsPwkFRCFa7ZdsAuZ3aAytx\nCyvDbynI2tjlNsayrsycEwT32vad7fVYWA0MWQNEzTmZ4hyuBwMsRSb2eN2PvfOjqQXUgoyVLdX9\nVpqz3a2Y+6/eA3HiOL1WaLcQfWM98FsiYTTL5ni4itS2jh2h5JQyh+Wk1sp7SV4VIKRyWZvF7q2D\n0nXuq5xUayXn1FJHbiL3nEagPq9uwkWJoiNKM8YAozyatQzyVJ+GN8DZyV7BLb9hbm8a/YfiJVr5\nhkfMIG643JVIfKkiBhmuiRsoOPd9l46rIFgHDZgM8u+Wv5WD08y9BM1+gtfu3wJtUflIEmmKu+Ef\nunCVvRaQdW9saDvBirPktdb4xakkCE+N7Vfa5JhuljkhsgC7f0uNPfd/mW4AsQqwX6VSeFF8mdPB\n1C5hGCDznevfI8qqVXTs+pohTV0w4OAKDOHB8sVbsPN+DRuSVM5az+uiQbdRM5v4LkIL2diiEMid\nRGfV+E/VzEovHZzTgIZ5VsQGWqc=\n",
  "ruleChapterName": "text",
  "ruleChapterUrl": "",
  "ruleContentUrl": "href",
  "ruleBookContent": ":_H006_YJc3HWk9vBeonovump86eaEZ6C2ZcEL7mOWcOgDIoJZFkh5Ecbn6y+muD73hsCxE\n"
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
