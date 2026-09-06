// Auto-converted from Legado/阅读 comic source.
// Source: 漫漫漫画-M
// NOTE: This is a best-effort compatibility conversion. Complex Legado JS rules may require manual fixes.

class ConvertedSource_m_37_824ad0 extends ComicSource {
  name = "漫漫漫画-M";
  key = "m_37_824ad0";
  version = "0.1.0";
  minAppVersion = "1.0.0";
  url = "";
  baseUrl = "https://m.manmanapp.com";
  defaultHeaders = {"User-Agent": "Mozilla/5.0 (Linux; Android 8.0.0; MIX 2 Build/OPR1.170623.027) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 YaBrowser/18.9.1.2199.00 Mobile Safari/537.36", "Referer": "https://m.manmanapp.com"};
  legadoRules = {"ruleSearchUrl":"https://m.manmanapp.com/search/word-searchKey_searchPage.html","ruleSearchList":"<js>\nvar key = decodeURI(baseUrl.replace(/^.*-(.*?)\\_.*html/,\"$1\"));\nvar page = baseUrl.replace(/^.*\\_(.*?)\\.html/,\"$1\");\nvar list = new Array();\nif (page<=1) {\n  var title = String(java.getString(\"class.classification_list@tag.a@tag.h3@text\",false)).trim().split(/\\n/);\n  var author = String(java.getString(\"class.classification_list@tag.a@class.author@text\",false)).trim().split(/\\n/);\n  var cover  = String(java.getString(\"class.classification_list@tag.a@tag.img@src\",false)).trim().split(/\\n/);\n  var href = String(java.getString(\"class.classification_list@tag.a@href\",false)).trim().split(/\\n/);\n  for (var i=0; i<title.length; i++) {\n    list.push({title:title[i], author:author[i], cover:cover[i], href:href[i]});\n  }\n}\nelse {\n  var json;\n  if (baseUrl.indexOf(\"search\")>0)\n    json = JSON.parse(java.postForm(\"https://m.manmanapp.com/search/search-ajax.html\",\"keyword=\"+key+\"&page=\"+page));\n  else\n    json = JSON.parse(java.postForm(\"https://m.manmanapp.com/category/list-ajax.html\",\"id=\"+key+\"&page=\"+page));\n  json.data.forEach(function(data){\n    list.push({title:data.title,  author:data.author.nickname, cover:data.cover_image_url, href:\"/comic-\"+data.id+\".html\"});\n  });\n}\nlist\n</js>","ruleSearchName":"title","ruleSearchAuthor":"author","ruleSearchNoteUrl":"href","ruleSearchCoverUrl":"cover","ruleSearchKind":"","ruleSearchLastChapter":"","ruleBookName":"class.title@text#独家","ruleBookAuthor":"class.author@tag.a.0@text","ruleBookKind":"class.type@text#类型：","ruleBookLastChapter":"@js:String(java.getString(\"class.cartoon_catalog@tag.li.0@tag.h6@html\",false)).replace(/<(.*?)>.*/,\"$1\")","ruleIntroduce":"class.introduce@tag.p@text#作品简介：","ruleCoverUrl":"class.cover@tag.img@src","ruleChapterList":":_H006_by7rH6ogxBGuj5tpXtWaxaeHDT2P9u1TMpZsRXLfUMq4RQyJaYgUtuT6wjdhX/2oJWqDdkh1HMWI\nDvvlvvGTAGNigs6QusAbk2i22iTTuyiPA4u6Xip2/pjvI2m8T3lvy2wIk4FyrXbcPqYl6H8WigXo\nx2SYpRTw24xDnTRh/fadWUH3z5/2nAN+TO6zYgFT5b1XH3qCOeQIXjqXkfCsBSLhtHlkGxQMT98i\nElWzXP3iW8qa6Rze1IKYyu1gpxn/QfSV7XcGOVoL3zz1SC3IFwnPe7u0SEkx8BDz3B15/wjJWvgX\nsK21+EahzNJPCyBt88Vj+3pzG0Bu/6h8lcq2JTnw2HNfA5Pf0eG+XcjOcM5dePcK5nt3g4E2PbFy\nvkVQKVtUw+wsOP52Go1XR/x5fdyJKSpciYvTShBUUTvJ/6B8KoLMObsPwkFRCFa7ZdsAuZ3aAytx\nCyvDbynI2tjlNsayrsycEwT32vad7fVYWA0MWQNEzTmZ4hyuBwMsRSb2eN2PvfOjqQXUgoyVLdX9\nVpqz3a2Y+6/eA3HiOL1WaLcQfWM98FsiYTTL5ni4itS2jh2h5JQyh+Wk1sp7SV4VIKRyWZvF7q2D\n0nXuq5xUayXn1FJHbiL3nEagPq9uwkWJoiNKM8YAozyatQzyVJ+GN8DZyV7BLb9hbm8a/YfiJVr5\nhkfMIG643JVIfKkiBhmuiRsoOPd9l46rIFgHDZgM8u+Wv5WD08y9BM1+gtfu3wJtUflIEmmKu+Ef\nunCVvRaQdW9saDvBirPktdb4xakkCE+N7Vfa5JhuljkhsgC7f0uNPfd/mW4AsQqwX6VSeFF8mdPB\n1C5hGCDznevfI8qqVXTs+pohTV0w4OAKDOHB8sVbsPN+DRuSVM5az+uiQbdRM5v4LkIL2diiEMid\nRGfV+E/VzEovHZzTgIZ5VsQGWqc=\n","ruleChapterName":"text","ruleChapterUrl":"","ruleContentUrl":"href","ruleBookContent":":_H006_YJc3HWk9vBeonovump86eaEZ6C2ZcEL7mOWcOgDIoJZFkh5Ecbn6y+muD73hsCxE\n"};

  // ---- Auto-generated Legado compatibility helpers ----
  _trim(v) {
    if (v === null || v === undefined) return "";
    return String(v).trim();
  }

  _abs(url, base) {
    url = this._trim(url);
    if (!url) return "";
    if (/^https?:\/\//i.test(url)) return url;
    if (url.startsWith("//")) {
      let p = /^https:/i.test(base || this.baseUrl) ? "https:" : "http:";
      return p + url;
    }
    try {
      let b = base || this.baseUrl;
      let m = b.match(/^(https?:\/\/[^\/]+)/i);
      let origin = m ? m[1] : b;
      if (url.startsWith("/")) return origin + url;
      let dir = b.replace(/[?#].*$/, "").replace(/\/[^\/]*$/, "/");
      return dir + url;
    } catch (_) {
      return url;
    }
  }

  _stripDirectives(rule) {
    rule = this._trim(rule);
    // Remove Legado JS suffixes. They are preserved in legadoRules for manual fixes.
    rule = rule.replace(/<js>[\s\S]*$/i, "");
    rule = rule.replace(/@js:[\s\S]*$/i, "");
    rule = rule.replace(/\n@js:[\s\S]*$/i, "");
    return rule.trim();
  }

  _requestSpec(url, keyword, page) {
    let u = this._trim(url)
      .replace(/searchKey/g, encodeURIComponent(keyword || ""))
      .replace(/searchPage/g, String(page || 1));
    let headers = {};
    let hm = u.match(/@Header:(\{[\s\S]*\})$/i);
    if (hm) {
      u = u.slice(0, hm.index);
      // Legado header objects are often not strict JSON. Parse common key:value pairs conservatively.
      let body = hm[1].slice(1, -1);
      body.split(",").forEach(p => {
        let x = p.split(":");
        if (x.length >= 2) {
          let k = x.shift().trim().replace(/^['"]|['"]$/g, "");
          let v = x.join(":").trim().replace(/^['"]|['"]$/g, "");
          if (k && v && !v.includes("{{")) headers[k] = v;
        }
      });
    }
    return {url: u.trim(), headers};
  }

  async _get(url, headers) {
    let h = Object.assign({}, this.defaultHeaders, headers || {});
    let res = await Network.get(url, h);
    if (!res || !res.status || res.status >= 400) {
      throw "HTTP " + (res ? res.status : "error") + ": " + url;
    }
    return res;
  }

  _looksJson(s) {
    s = this._trim(s);
    return s.startsWith("{") || s.startsWith("[");
  }

  _jsonPath(root, path) {
    path = this._stripDirectives(path);
    path = path.replace(/^-/, "");
    path = path.replace(/^\$\.?/, "");
    if (!path) return [root];
    let parts = path.replace(/\[(\d+)\]/g, ".$1")
                    .replace(/\[\*\]/g, ".*")
                    .split(".").filter(Boolean);
    let cur = [root];
    for (let p of parts) {
      let next = [];
      for (let v of cur) {
        if (v === null || v === undefined) continue;
        if (p === "*") {
          if (Array.isArray(v)) next.push(...v);
          else if (typeof v === "object") next.push(...Object.values(v));
        } else if (Array.isArray(v) && /^\d+$/.test(p)) {
          if (v[Number(p)] !== undefined) next.push(v[Number(p)]);
        } else if (typeof v === "object" && Object.prototype.hasOwnProperty.call(v, p)) {
          next.push(v[p]);
        }
      }
      cur = next;
    }
    return cur;
  }

  _legacySelectorToCss(sel) {
    sel = this._trim(sel);
    if (!sel) return "";
    // Legado old forms: class.foo, id.foo, tag.xxx
    sel = sel.replace(/^class\.([^\s@|]+)/, (_, x) => "." + x.replace(/\s+/g, "."));
    sel = sel.replace(/^id\.([^\s@|]+)/, "#$1");
    sel = sel.replace(/^tag\.([^\s@|]+)/, "$1");
    // id.js_x@li -> #js_x li
    sel = sel.replace(/^id\.([^@]+)@(.+)$/, "#$1 $2");
    // class.foo@tag.img -> .foo img
    sel = sel.replace(/^class\.([^@]+)@tag\.([^@]+)$/, (_, a, b) => "." + a.replace(/\s+/g, ".") + " " + b);
    return sel;
  }

  _splitRule(rule) {
    rule = this._stripDirectives(rule);
    // Alternatives are common in Legado. Use first successful branch.
    return rule.split("||").map(x => x.trim()).filter(Boolean);
  }

  _htmlExtractOne(ctx, rule, wantAll=false) {
    let alternatives = this._splitRule(rule);
    for (let alt of alternatives) {
      // Ignore replacement/regex suffixes after # when they are not CSS ids.
      let pieces = alt.split("@");
      let selector = pieces.shift().trim();
      let attr = null;

      // If the rule is only an attribute, operate on current node.
      if (selector === "text" || selector === "href" || selector === "src" ||
          selector === "content" || selector === "title" || selector === "data-src" ||
          selector === "data-original") {
        attr = selector; selector = "";
      } else if (pieces.length) {
        attr = pieces.pop().trim();
        // Join intermediate CSS-ish pieces.
        if (pieces.length) selector += " " + pieces.map(x => {
          if (x.startsWith("tag.")) return x.slice(4);
          if (x.startsWith("class.")) return "." + x.slice(6).replace(/\s+/g, ".");
          if (x.startsWith("id.")) return "#" + x.slice(3);
          return x;
        }).join(" ");
      }

      selector = this._legacySelectorToCss(selector);
      try {
        let nodes;
        if (!selector) nodes = [ctx];
        else if (wantAll) nodes = ctx.querySelectorAll(selector);
        else {
          let n = ctx.querySelector(selector);
          nodes = n ? [n] : [];
        }
        if (!nodes || nodes.length === 0) continue;

        let vals = [];
        for (let n of nodes) {
          let v = "";
          if (!attr || attr === "text") v = n.text;
          else {
            let a = n.attributes || {};
            v = a[attr] !== undefined ? a[attr] : "";
          }
          v = this._trim(v);
          if (v) vals.push(v);
        }
        if (vals.length) return wantAll ? vals : vals[0];
      } catch (_) {}
    }
    return wantAll ? [] : "";
  }

  _extractList(body, rule) {
    rule = this._trim(rule);
    if (!rule) return [];
    if (this._looksJson(body) || rule.startsWith("$") || rule.startsWith("-$") || /^[A-Za-z0-9_]+\.[A-Za-z0-9_.*\[\]-]+$/.test(rule)) {
      try {
        let j = typeof body === "string" ? JSON.parse(body) : body;
        for (let alt of this._splitRule(rule)) {
          let vals = this._jsonPath(j, alt);
          if (vals.length) return vals;
        }
      } catch (_) {}
    }
    try {
      let doc = body instanceof HtmlDocument ? body : new HtmlDocument(String(body));
      for (let alt of this._splitRule(rule)) {
        // Legacy "|" means multiple candidate selectors.
        for (let candidate of alt.split("|").map(x => x.trim()).filter(Boolean)) {
          let css = this._legacySelectorToCss(candidate);
          try {
            let list = doc.querySelectorAll(css);
            if (list && list.length) return list;
          } catch (_) {}
        }
      }
    } catch (_) {}
    return [];
  }

  _extractValue(ctx, rule, baseUrl) {
    rule = this._trim(rule);
    if (!rule) return "";
    if (typeof ctx === "object" && ctx !== null && !(ctx instanceof HtmlDocument) &&
        ctx.localName === undefined && (rule.startsWith("$") || /^[A-Za-z0-9_$.]+(\[\*\])?/.test(rule))) {
      for (let alt of this._splitRule(rule)) {
        let vals = this._jsonPath(ctx, alt);
        if (vals.length) {
          let v = vals[0];
          if (typeof v === "object") return JSON.stringify(v);
          return this._trim(v);
        }
      }
    }
    let v = this._htmlExtractOne(ctx, rule, false);
    if ((/href|src|url/i.test(rule)) && v) v = this._abs(v, baseUrl);
    return v;
  }

  _extractValues(ctx, rule, baseUrl) {
    rule = this._trim(rule);
    if (!rule) return [];
    if (typeof ctx === "object" && ctx !== null && ctx.localName === undefined &&
        !(ctx instanceof HtmlDocument)) {
      for (let alt of this._splitRule(rule)) {
        let vals = this._jsonPath(ctx, alt);
        if (vals.length) return vals.map(v => this._trim(v)).filter(Boolean);
      }
    }
    let vals = this._htmlExtractOne(ctx, rule, true);
    if (/href|src|url/i.test(rule)) vals = vals.map(v => this._abs(v, baseUrl));
    return vals;
  }

  _comicFromNode(node, baseUrl) {
    let id = this._extractValue(node, this.legadoRules.ruleSearchNoteUrl, baseUrl);
    let title = this._extractValue(node, this.legadoRules.ruleSearchName, baseUrl);
    let cover = this._extractValue(node, this.legadoRules.ruleSearchCoverUrl, baseUrl);
    let author = this._extractValue(node, this.legadoRules.ruleSearchAuthor, baseUrl);
    let latest = this._extractValue(node, this.legadoRules.ruleSearchLastChapter, baseUrl);
    let kind = this._extractValue(node, this.legadoRules.ruleSearchKind, baseUrl);
    if (!id) id = title;
    return {
      id: id,
      title: title || id || "(未命名)",
      subTitle: author || latest || "",
      cover: cover || "",
      tags: kind ? [kind] : [],
      description: latest || ""
    };
  }

  search = {
    load: async (keyword, options, page) => {
      let spec = this._requestSpec(this.legadoRules.ruleSearchUrl, keyword, page);
      if (!spec.url) return {comics: [], maxPage: 1};
      let res = await this._get(spec.url, spec.headers);
      let list = this._extractList(res.body, this.legadoRules.ruleSearchList);
      let comics = list.map(x => this._comicFromNode(x, spec.url)).filter(x => x.title);
      return {comics, maxPage: comics.length ? null : page};
    },
    optionList: []
  };

  comic = {
    loadInfo: async (id) => {
      let url = this._abs(id, this.baseUrl);
      let res = await this._get(url, {});
      let body = res.body;
      let root;
      try { root = this._looksJson(body) ? JSON.parse(body) : new HtmlDocument(body); }
      catch (_) { root = new HtmlDocument(body); }

      let title = this._extractValue(root, this.legadoRules.ruleBookName, url);
      let author = this._extractValue(root, this.legadoRules.ruleBookAuthor, url);
      let desc = this._extractValue(root, this.legadoRules.ruleIntroduce, url);
      let cover = this._extractValue(root, this.legadoRules.ruleCoverUrl, url);
      let kind = this._extractValue(root, this.legadoRules.ruleBookKind, url);
      let latest = this._extractValue(root, this.legadoRules.ruleBookLastChapter, url);

      if (!title) title = id;
      let chapterNodes = this._extractList(body, this.legadoRules.ruleChapterList);
      let chapters = new Map();
      let n = 0;
      for (let c of chapterNodes) {
        let name = this._extractValue(c, this.legadoRules.ruleChapterName, url) || ("第 " + (n + 1) + " 话");
        let ep = this._extractValue(c, this.legadoRules.ruleContentUrl || this.legadoRules.ruleChapterUrl, url);
        if (!ep) ep = this._extractValue(c, this.legadoRules.ruleChapterUrl, url);
        if (!ep && c && c.attributes) ep = this._abs(c.attributes["href"] || "", url);
        if (!ep) ep = url + "#auto_chapter_" + n;
        chapters.set(ep, name);
        n++;
      }

      let tags = {};
      if (author) tags["作者"] = [author];
      if (kind) tags["分类"] = kind.split(/[,/、\s]+/).filter(Boolean);

      return new ComicDetails({
        title: title,
        cover: cover || "",
        description: desc || "",
        tags: tags,
        chapters: chapters,
        updateTime: latest || "",
        url: url
      });
    },

    loadEp: async (comicId, epId) => {
      let url = this._abs(epId || comicId, comicId || this.baseUrl);
      let res = await this._get(url, {});
      let body = res.body;
      let root;
      try { root = this._looksJson(body) ? JSON.parse(body) : new HtmlDocument(body); }
      catch (_) { root = new HtmlDocument(body); }

      // In many Legado comic sources ruleContentUrl is the image rule; in some it is a
      // chapter URL transformation. We first try extracting a list from the fetched page.
      let images = this._extractValues(root, this.legadoRules.ruleBookContent, url);
      if (!images.length) images = this._extractValues(root, this.legadoRules.ruleContentUrl, url);

      // Fallback for common image tags when a source has an unsupported scripted rule.
      if (!images.length && root instanceof HtmlDocument) {
        let nodes = [];
        try { nodes = root.querySelectorAll("img"); } catch (_) {}
        for (let n of nodes) {
          let a = n.attributes || {};
          let v = a["data-original"] || a["data-src"] || a["src"] || "";
          v = this._abs(v, url);
          if (v && /^https?:\/\//i.test(v)) images.push(v);
        }
      }
      images = [...new Set(images.filter(x => /^https?:\/\//i.test(x)))];
      return {images};
    },

    onImageLoad: (url, comicId, epId) => {
      return {headers: this.defaultHeaders};
    },

    onThumbnailLoad: (url) => {
      return {headers: this.defaultHeaders};
    }
  };

}
