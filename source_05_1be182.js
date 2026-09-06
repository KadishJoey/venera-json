/** @type {import('./_venera_.js')} */
// Auto-converted Legado -> Venera v2.
// Original source: ◯ 拷贝漫画
// This version follows the current Venera ComicSource shape.
// Complex Legado JS/template expressions are preserved in legadoRules and are not silently executed.

class ConvertedSource_source_05_1be182 extends ComicSource {
  name = "◯ 拷贝漫画";
  key = "source_05_1be182";
  version = "0.2.0";
  minAppVersion = "1.0.0";
  url = "";
  baseUrl = "https://api.mangacopy.com";
  headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    "Referer": "https://api.mangacopy.com"
  };

  legadoRules = {
  "ruleSearchUrl": "https://api.mangacopy.com/api/v3/search/comic?platform=1&q=searchKey&limit=20&offset=searchPage-10&q_type=&_update=true@Header:{platform:1,\"version\":\"{{y = new Date();a = y.getFullYear() + \".\" + (y.getMonth() + 1) + \".\" + y.getDate();}}\"}",
  "ruleSearchList": "results.list[*]",
  "ruleSearchName": "comic.name||\nname",
  "ruleSearchAuthor": "comic.author[*].name||\nauthor[*].name",
  "ruleSearchNoteUrl": "comic.path_word||path_word\n@js:\njava.put(\"id\", result);\na = \"https://api.mangacopy.com/api/v3/comic2/\";\nu = a + result + \"?platform=1&_update=true\";\nu@Header:{platform:1,\"version\":\"{{y = new Date();a = y.getFullYear() + \".\" + (y.getMonth() + 1) + \".\" + y.getDate();}}\",\"Accept\":\"application/json\",\"Accept-Language\":\"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7\"}",
  "ruleSearchCoverUrl": "comic.cover||\ncover",
  "ruleSearchKind": "comic.theme[*].name",
  "ruleSearchLastChapter": "",
  "ruleBookName": "",
  "ruleBookAuthor": "",
  "ruleBookKind": "$.results.comic.status.display&&$.results.comic.region.display&&$.results.comic.theme[*].name",
  "ruleBookLastChapter": "$.results.comic.last_chapter.name",
  "ruleIntroduce": "$.results.comic.brief",
  "ruleCoverUrl": "",
  "ruleChapterList": "@js:\nList = [];\nid = java.get(\"id\");\npla = '?platform=1&_update=true';\napi1 = 'https://api.mangacopy.com';\napi2 = 'https://mapi.copy20.com';\n\nfunction Lists(list, api, n)\n{\n\t   //java.log(list.length);\n    for(i = 0; i < list.length; i++)\n    {\n    \t    a = api + '/api/v3/comic/';\n    \t    p = list[i].uuid + pla;\n    \t    u = a + id +'/chapter2/' + p;\n    \t    List.push({\"name\":n + list[i].name,\"id\":u});\n    \t}\n}\n\n//默认目录\nListurl = JSON.parse(result).results.list;\np1 = JSON.parse(java.get(\"u1\"));\np2 = JSON.parse(java.get(\"u2\"));\np3 = JSON.parse(java.get(\"u3\"));\np4 = JSON.parse(java.get(\"u4\"));\nlist1 = p1.results.list;\nlist2 = p2.results.list;\nlist3 = p3.results.list;\nlist4 = p4.results.list;\nLists(Listurl, api1, '');\nLists(list1, api1, '');\nLists(list2, api1, '');\nLists(list3, api1, '');\nLists(list4, api1, '');\n\n//单行本目录\ndanx = JSON.parse(java.get(\"danx\"));\ndanxlist = danx.results.list;\nLists(danxlist, api2, \"单行 \");\n\n//其他汉化版目录\nhanh = JSON.parse(java.get(\"hanh\"));\nhanhlist = hanh.results.list;\nLists(hanhlist, api1, \"汉化 \");\n\nList;",
  "ruleChapterName": "name",
  "ruleChapterUrl": "$.results.comic.path_word\n@js:\nvar time = new Date();\nvar Nian = time.getFullYear();\nvar Yue = (time.getMonth() + 1);\nvar Ri = time.getDate();\nvar Time = Nian + \".\" + Yue + \".\" + Ri;\nvar L = \"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7\";\n    \nvar p = \n{\n         \"platform\": \"1\",\n         \"version\": String(Time),\n         \"Accept\": \"application/json\",\n         \"Accept-Language\": String(L)\n};\n\n\na = 'https://api.2025copy.com/api/v3/comic/';\nid = result;    java.put('id', id);\nc = '/group/default/chapters?limit=100';\no = '&offset=';  of = 100;  up = '&_update=true';\n\n\n//1 ~ 100话；\nu = a + id + c + o + (0 * of) + up;\n//java.log(u)\n\n\n//100 ~ 200话；\nu1 = a + id + c + o + (1 * of) + up;\n//java.log(u1)\n\n\n//200 ~ 300话;\nu2 = a + id + c + o + (2 * of) + up;\n//java.log(u2)\n\n\n//300 ~ 400话；\nu3 = a + id + c + o + (3 * of) + up;\n\n\n//400 ~ 500话；\nu4 = a + id + c + o + (4 * of) + up;\n\n\n//请求所有链接；\nlist1 = java.get(u1, p).body();\nlist2 = java.get(u2, p).body();\nlist3 = java.get(u3, p).body();\nlist4 = java.get(u4, p).body();\njava.put(\"u1\",list1);\njava.put(\"u2\",list2);\njava.put(\"u3\",list3);\njava.put(\"u4\",list4);\n\n\n//单行\nd = a + id +\"/group/tankobon/chapters?limit=100&offset=0\" + up;\n\ndanx = java.get(d, p).body();\njava.put(\"danx\",danx);\n\n\n//其他汉化\nhanh = a + id + \"/group/other_honyakuchimu/chapters?limit=100&offset=0\" + up;\n\nhanh = java.get(hanh, p).body();\njava.put(\"hanh\",hanh);\n\n\nu@Header:{platform:1,\"version\":\"{{y = new Date();a = y.getFullYear() + \".\" + (y.getMonth() + 1) + \".\" + y.getDate();}}\",\"Accept\":\"application/json\",\"Accept-Language\":\"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7\"};",
  "ruleContentUrl": "id",
  "ruleBookContent": "@js:\nimg = [];    Img = [];\na = JSON.parse(result);\nimage = a.results.chapter.contents;\ntem = a.results.chapter.words;\nfor(i = 0; i < tem.length; i++)\n{\n  img.push({Tem : tem[i], Image : image[i].url});\n}\nimg.sort((a, b) => a.Tem - b.Tem);\nImg = img.map(i => i.Image);\nImg"
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
