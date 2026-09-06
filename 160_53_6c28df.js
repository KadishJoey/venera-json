// Auto-converted from Legado/阅读 comic source.
// Source: 漫画160
// NOTE: This is a best-effort compatibility conversion. Complex Legado JS rules may require manual fixes.

class ConvertedSource_160_53_6c28df extends ComicSource {
  name = "漫画160";
  key = "160_53_6c28df";
  version = "0.1.0";
  minAppVersion = "1.0.0";
  url = "";
  baseUrl = "https://m.mh160.cc";
  defaultHeaders = {"User-Agent": "Mozilla/5.0 (Linux; Android) Mobile", "Referer": "https://m.mh160.cc"};
  legadoRules = {"ruleSearchUrl":"https://.mh160.cc/statics/search.aspx?key=searchKey&page=searchPage","ruleSearchList":"id.listbody@tag.li|class.itemBox","ruleSearchName":"tag.a.1@text","ruleSearchAuthor":"","ruleSearchNoteUrl":"tag.a.0@href","ruleSearchCoverUrl":"tag.img@src","ruleSearchKind":"","ruleSearchLastChapter":"class.info@text|class.txtItme.0@text","ruleBookName":"class.txtItme.0@text","ruleBookAuthor":"class.txtItme.2@text#作者：","ruleBookKind":"class.txtItme.3@text#标签：","ruleBookLastChapter":"class.txtItme.1@text#状态：","ruleIntroduce":"class.detailContent@tag.p@text","ruleCoverUrl":"id.Cover@tag.img@src","ruleChapterList":":_H006_dlUcgeuqEQtpXLp4FOSsJkntAtZcLNLiQA0YUfUydzA=\n","ruleChapterName":"tag.a@text","ruleChapterUrl":"","ruleContentUrl":"tag.a@href","ruleBookContent":":_H006_z3WLe9ruUnDDkkzkzCcbAnAe4fYmlXhJ/yH82r0HIAFGfwzUJlO+ouzOhHMhqvHPvRffnxcVRYUv\nPryEdZ7mdrLQkPFmJI6DzFuo/WT+7ZcXt3mhqOJOX+VRGV60WZql5SBeQr1zKsY+BhP4A5CMugAI\nqo0wHZzGODu/t1Ok9nwJZOJJDc7L2rdBRBxHqQZEaaF8Cse1V7oyU8fzwJK+fWkqE69p5Zz25R7z\nk3EMDiFUIogF7LPO0o5Cy49SSjv4SNd5GoEl/tWFT2Nq3oYpylrK1nXHY2SCCVm+smzuHPdRLvWF\nv5j4bf7wjEE7oG8PEVoptIPrtT5TQCWrbZT/ElJpCKHPX5a1lbkLdGNs/zWCjjyykiiIW6IwLXCR\nxPrhOc2HJ4AFbBwHd1S5WBoSxA9IZCDVYljGERwJOnhId+uh2YxFjBSR6RWdZeFue6lFLk8VBypF\nFt2wLddG+k0WhiTOKWRWVHd6pmxqjsGIW9DEbm3tb3IbaGo3juyTqbK2AzRCeW66a8JWyfNx0KfR\n4RK2aHLadEavedevppPDzg1sjAKu6VReSagDDj3plrXx4i+yyrySjAJNavDiDHxfZlz2EYkU4c/8\n6AvbAc0hUmZUVt4ANARBYG+A7cSVttYJn5vVSrgtA0zAGA0i5vvmm1T9wcJ1wnJ4jUtnr1XE8QX4\n4lIfb6saQFEXk64m1qEIPkIQydjAMSIcMFxnNqbkjEiXX4MHTgW01KzopcWnpR7WkcSRv+TyH2No\neqz6ubW11YuTm99tWWUOl54ckp+jzWyxUae5wc1sliCTAsvbFonBfegZ951QpVxL8eh5n8waC/7y\nw6wNpDw4Il8pH1sbqUGy3h1b9DJWvW1q3FcaT1bn/H8h5MsQq/9ARDaUkyHXXgM7hR76/it5OxUd\n5CbRWPOtojOAk1vT7tD8um6m32/oGpxsffr578KECfSfTMfhurU5o49s/FCKQ8Q9eFkYaZUX0HuE\nv7EbM57dUBDMOfFiAmZ+T11dQs4FMvsCjqK2zGZZb7V6KmJ9RI0t9TECU3VKbi9odCTULvGU+98j\nsjlYwipo6ActfrHyhKfFFVtA7StAKhQzCwbo07mM13d56/s7UiupwoR30dj1YIZv4emnWX2IP9fD\nfz9ywOrgvP1WCQaTdZcVKIfAfA/mO5ZVfny8KoxCXXopnRX9+TQFWzr5hqcc8kctsY9yTWSsDn+p\nMxAwC9Nz2gahdMqrSP5bJlQZKH8w7+O6gG7bJDVqj046XacZkVhteDY47QoiGXw4OOmiWcArfTwN\nfzMN3zVdal6380QqdXzxEOuLvE//PgYtYyvNQOH0Z8CW7SaHaZt275J2+Wxrad7Cl1uddx/fcl19\no0k+lzlL7FYmgTOCUUYMOK1thvAX61AlXbUV7GxfyEGhrxwcNY0a/alIhRBBy/ZYJytqPH6BvELM\ngGzHRWOsXRSL4Rbsfe2IdmJgPh7X8xs+Y95sdtROMpithEqHn3jYLYwNofD32W2c+A0UMVnUWIbD\nhuFZ+GQn4bjbNyrtoJomdysgm11u9I1LsfMFvA==\n"};

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
