// Auto-converted from Legado/阅读 comic source.
// Source: 漫画柜
// NOTE: This is a best-effort compatibility conversion. Complex Legado JS rules may require manual fixes.

class ConvertedSource_source_74_9820b5 extends ComicSource {
  name = "漫画柜";
  key = "source_74_9820b5";
  version = "0.1.0";
  minAppVersion = "1.0.0";
  url = "";
  baseUrl = "https://www.manhuagui.com";
  defaultHeaders = {"User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:34.0) Gecko/20100101 Firefox/34.0", "Referer": "https://www.manhuagui.com"};
  legadoRules = {"ruleSearchUrl":"https://www.manhuagui.com/s/searchKey{,_psearchPage}.html","ruleSearchList":"class.book-result@tag.li|class.book-list@tag.li","ruleSearchName":"class.ell@tag.a@text|tag.dt@tag.a@text","ruleSearchAuthor":"","ruleSearchNoteUrl":"tag.a.0@href","ruleSearchCoverUrl":"tag.img@src","ruleSearchKind":"","ruleSearchLastChapter":"class.tt@text#更新至","ruleBookName":"class.title@tag.h1@text","ruleBookAuthor":"class.detail-list@tag.li.1@tag.span.1@tag.a@text","ruleBookKind":"class.detail-list@tag.li.1@tag.span.0@tag.a@text&class.detail-list@class.status@tag.span.1@text","ruleBookLastChapter":"class.hcover@class.text@text#更新至：","ruleIntroduce":"id.intro-cut@text","ruleCoverUrl":"class.hcover@tag.img@src","ruleChapterList":":_H006_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\n","ruleChapterName":"text","ruleChapterUrl":"","ruleContentUrl":"href","ruleBookContent":":_H006_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\n"};

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
