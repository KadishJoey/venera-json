/** @type {import('./_venera_.js')} */
// Auto-converted Legado -> Venera v2.
// Original source: 包子漫画
// This version follows the current Venera ComicSource shape.
// Complex Legado JS/template expressions are preserved in legadoRules and are not silently executed.

class ConvertedSource_source_02_e3ec7f extends ComicSource {
  name = "包子漫画";
  key = "source_02_e3ec7f";
  version = "0.2.0";
  minAppVersion = "1.0.0";
  url = "";
  baseUrl = "https://baozimh.org";
  headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Referer": "https://baozimh.org"
  };

  legadoRules = {
  "ruleSearchUrl": "https://baozimh.org/s/searchKey?page=searchPage",
  "ruleSearchList": "a[href*='/manga/']",
  "ruleSearchName": "h3.cardtitle@text",
  "ruleSearchAuthor": "",
  "ruleSearchNoteUrl": "href",
  "ruleSearchCoverUrl": "img.card@src",
  "ruleSearchKind": "",
  "ruleSearchLastChapter": "",
  "ruleBookName": "@js:result.match(/<h1[^>]*>\\s*([^<]+?)\\s*</)[1]",
  "ruleBookAuthor": "",
  "ruleBookKind": "",
  "ruleBookLastChapter": "",
  "ruleIntroduce": "meta[name=description]@content",
  "ruleCoverUrl": "meta[property=og:image]@content",
  "ruleChapterList": "@js:var m=result.match(/data-mid=\"(\\d+)/)[1];var res=java.fetch('https://v2.apikk.top/api/manga/get?mid='+m+'&mode=all',{method:'GET'});var t=res.body().string();var d=JSON.parse(t);var chs=d.data.chapters;var out=[];for(var i=0;i<chs.length;i++){var ch=chs[i];out.push({title:ch.attributes.title,url:'https://v2.apikk.top/api/v2/chapter/getinfo?m='+m+'&c='+ch.id});}out;",
  "ruleChapterName": "@js:result.title",
  "ruleChapterUrl": "",
  "ruleContentUrl": "@js:result.url",
  "ruleBookContent": "@js:function b64d(s){var b='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';var o='',v=0,bi=0;s=s.replace(/-/g,'+').replace(/_/g,'/');for(var i=0;i<s.length;i++){var c=s.charAt(i);if(c==='=')break;var x=b.indexOf(c);if(x<0)continue;v=(v<<6)|x;bi+=6;if(bi>=8){bi-=8;o+=String.fromCharCode((v>>bi)&255);}}return o;}(function(){try{var d=JSON.parse(result);var im=d.data.info.images.images;if(typeof im!=='string'||im.length<20){return ['BAOZIMH_ERR:images字段异常 im='+String(im).substring(0,80)];}var STD='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';var CUSTOM='_-9876543210abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';var P='J7r',S='nQ',M1='kD',M2='W4s',G=7;var body=im.substring(P.length,im.length-S.length);var pl=body.length-M1.length-M2.length;var a=Math.floor(pl/3);var b=Math.floor((pl-a)/2);var c=pl-a-b;var p1=body.substring(0,b);var p2=body.substring(b+M1.length,b+M1.length+c);var p3=body.substring(b+M1.length+c+M2.length);var re=p3+p1+p2;var sb='';for(var i=0,blk=0;i<re.length;i+=G,blk++){var ch=re.substring(i,Math.min(i+G,re.length));sb+=(blk%2===1)?ch.split('').reverse().join(''):ch;}var dec='';for(var i=0;i<sb.length;i++){var cch=sb.charAt(i);dec+=STD.charAt(CUSTOM.indexOf(cch));}var json=b64d(dec);var arr=JSON.parse(json);var urls=[];for(var i=0;i<arr.length;i++){urls.push('https://c-nd3-1.6wm.top'+arr[i].url);}return urls;}catch(e){return ['BAOZIMH_ERR:'+e.message+' | result_head='+String(result).substring(0,100)];}})()"
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
