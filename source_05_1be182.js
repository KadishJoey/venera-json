// Auto-converted from Legado/阅读 comic source.
// Source: ◯ 拷贝漫画
// NOTE: This is a best-effort compatibility conversion. Complex Legado JS rules may require manual fixes.

class ConvertedSource_source_05_1be182 extends ComicSource {
  name = "◯ 拷贝漫画";
  key = "source_05_1be182";
  version = "0.1.0";
  minAppVersion = "1.0.0";
  url = "";
  baseUrl = "https://api.mangacopy.com";
  defaultHeaders = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36", "Referer": "https://api.mangacopy.com"};
  legadoRules = {"ruleSearchUrl":"https://api.mangacopy.com/api/v3/search/comic?platform=1&q=searchKey&limit=20&offset=searchPage-10&q_type=&_update=true@Header:{platform:1,\"version\":\"{{y = new Date();a = y.getFullYear() + \".\" + (y.getMonth() + 1) + \".\" + y.getDate();}}\"}","ruleSearchList":"results.list[*]","ruleSearchName":"comic.name||\nname","ruleSearchAuthor":"comic.author[*].name||\nauthor[*].name","ruleSearchNoteUrl":"comic.path_word||path_word\n@js:\njava.put(\"id\", result);\na = \"https://api.mangacopy.com/api/v3/comic2/\";\nu = a + result + \"?platform=1&_update=true\";\nu@Header:{platform:1,\"version\":\"{{y = new Date();a = y.getFullYear() + \".\" + (y.getMonth() + 1) + \".\" + y.getDate();}}\",\"Accept\":\"application/json\",\"Accept-Language\":\"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7\"}","ruleSearchCoverUrl":"comic.cover||\ncover","ruleSearchKind":"comic.theme[*].name","ruleSearchLastChapter":"","ruleBookName":"","ruleBookAuthor":"","ruleBookKind":"$.results.comic.status.display&&$.results.comic.region.display&&$.results.comic.theme[*].name","ruleBookLastChapter":"$.results.comic.last_chapter.name","ruleIntroduce":"$.results.comic.brief","ruleCoverUrl":"","ruleChapterList":"@js:\nList = [];\nid = java.get(\"id\");\npla = '?platform=1&_update=true';\napi1 = 'https://api.mangacopy.com';\napi2 = 'https://mapi.copy20.com';\n\nfunction Lists(list, api, n)\n{\n\t   //java.log(list.length);\n    for(i = 0; i < list.length; i++)\n    {\n    \t    a = api + '/api/v3/comic/';\n    \t    p = list[i].uuid + pla;\n    \t    u = a + id +'/chapter2/' + p;\n    \t    List.push({\"name\":n + list[i].name,\"id\":u});\n    \t}\n}\n\n//默认目录\nListurl = JSON.parse(result).results.list;\np1 = JSON.parse(java.get(\"u1\"));\np2 = JSON.parse(java.get(\"u2\"));\np3 = JSON.parse(java.get(\"u3\"));\np4 = JSON.parse(java.get(\"u4\"));\nlist1 = p1.results.list;\nlist2 = p2.results.list;\nlist3 = p3.results.list;\nlist4 = p4.results.list;\nLists(Listurl, api1, '');\nLists(list1, api1, '');\nLists(list2, api1, '');\nLists(list3, api1, '');\nLists(list4, api1, '');\n\n//单行本目录\ndanx = JSON.parse(java.get(\"danx\"));\ndanxlist = danx.results.list;\nLists(danxlist, api2, \"单行 \");\n\n//其他汉化版目录\nhanh = JSON.parse(java.get(\"hanh\"));\nhanhlist = hanh.results.list;\nLists(hanhlist, api1, \"汉化 \");\n\nList;","ruleChapterName":"name","ruleChapterUrl":"$.results.comic.path_word\n@js:\nvar time = new Date();\nvar Nian = time.getFullYear();\nvar Yue = (time.getMonth() + 1);\nvar Ri = time.getDate();\nvar Time = Nian + \".\" + Yue + \".\" + Ri;\nvar L = \"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7\";\n    \nvar p = \n{\n         \"platform\": \"1\",\n         \"version\": String(Time),\n         \"Accept\": \"application/json\",\n         \"Accept-Language\": String(L)\n};\n\n\na = 'https://api.2025copy.com/api/v3/comic/';\nid = result;    java.put('id', id);\nc = '/group/default/chapters?limit=100';\no = '&offset=';  of = 100;  up = '&_update=true';\n\n\n//1 ~ 100话；\nu = a + id + c + o + (0 * of) + up;\n//java.log(u)\n\n\n//100 ~ 200话；\nu1 = a + id + c + o + (1 * of) + up;\n//java.log(u1)\n\n\n//200 ~ 300话;\nu2 = a + id + c + o + (2 * of) + up;\n//java.log(u2)\n\n\n//300 ~ 400话；\nu3 = a + id + c + o + (3 * of) + up;\n\n\n//400 ~ 500话；\nu4 = a + id + c + o + (4 * of) + up;\n\n\n//请求所有链接；\nlist1 = java.get(u1, p).body();\nlist2 = java.get(u2, p).body();\nlist3 = java.get(u3, p).body();\nlist4 = java.get(u4, p).body();\njava.put(\"u1\",list1);\njava.put(\"u2\",list2);\njava.put(\"u3\",list3);\njava.put(\"u4\",list4);\n\n\n//单行\nd = a + id +\"/group/tankobon/chapters?limit=100&offset=0\" + up;\n\ndanx = java.get(d, p).body();\njava.put(\"danx\",danx);\n\n\n//其他汉化\nhanh = a + id + \"/group/other_honyakuchimu/chapters?limit=100&offset=0\" + up;\n\nhanh = java.get(hanh, p).body();\njava.put(\"hanh\",hanh);\n\n\nu@Header:{platform:1,\"version\":\"{{y = new Date();a = y.getFullYear() + \".\" + (y.getMonth() + 1) + \".\" + y.getDate();}}\",\"Accept\":\"application/json\",\"Accept-Language\":\"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7\"};","ruleContentUrl":"id","ruleBookContent":"@js:\nimg = [];    Img = [];\na = JSON.parse(result);\nimage = a.results.chapter.contents;\ntem = a.results.chapter.words;\nfor(i = 0; i < tem.length; i++)\n{\n  img.push({Tem : tem[i], Image : image[i].url});\n}\nimg.sort((a, b) => a.Tem - b.Tem);\nImg = img.map(i => i.Image);\nImg"};

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
