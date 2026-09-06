/** @type {import('./_venera_.js')} */
// Auto-converted Legado -> Venera v2.
// Original source: 拷贝漫画
// This version follows the current Venera ComicSource shape.
// Complex Legado JS/template expressions are preserved in legadoRules and are not silently executed.

class ConvertedSource_source_61_acb91b extends ComicSource {
  name = "拷贝漫画";
  key = "source_61_acb91b";
  version = "0.2.0";
  minAppVersion = "1.0.0";
  url = "";
  baseUrl = "https://www.mangacopy.com";
  headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
    "Referer": "https://www.mangacopy.com"
  };

  legadoRules = {
  "ruleSearchUrl": "{{\n\"https://www.mangacopy.com/api/kb/web/searchs/comics?q=\"+searchKey.replace(/@.*/,\"\")+\"&q_type=\"+searchKey.replace(/.*@|.*$/,\"\")+\"&offset=\"+24*(searchPage-1)+\"&limit=24&platform=2@Header:\"+\"{\\\"referer\\\":\\\"https://www.mangacopy.com/search?q=\"+encodeURI(searchKey)+\"&q_type=\\\",\\\"cookie\\\":\\\"webp=0\\\"}\"\n}}",
  "ruleSearchList": "class.topThree||class.col-auto||$.results.list[*]",
  "ruleSearchName": "tag.p@text||$.name",
  "ruleSearchAuthor": "tag.span@tag.a@text||$.author[*].name",
  "ruleSearchNoteUrl": "tag.a@href||$.path_word@js:\"https://www.mangacopy.com/comic/\"+result.replace(/\\/comic\\/(.*)\\/*/,\"$1\")",
  "ruleSearchCoverUrl": "tag.img@data-src||$.cover",
  "ruleSearchKind": "$.theme[0:3].name&&$.status",
  "ruleSearchLastChapter": "$.datetime_created@js:result.substring(0,10)",
  "ruleBookName": "tag.h6@text",
  "ruleBookAuthor": "class.comicParticulars-right-txt.1@tag.a@text",
  "ruleBookKind": "@css:.comicParticulars-left-theme-all>a:lt(3),.comicParticulars-title-right>ul>li:eq(5)>span:eq(1)@text@js:result.join().replace(/#/g,\"\")",
  "ruleBookLastChapter": "class.comicParticulars-right-txt.3@text",
  "ruleIntroduce": "class.intro@text",
  "ruleCoverUrl": "class.comicParticulars-left-img@tag.img@data-src",
  "ruleChapterList": ":_H006_6Rg+28uy8RBCWnLLz5cfJ0ORoyRv3PntRSMJFiq1Yjxbjj02JXNWskNl+mxwJNbiSdgNeRQX9uvD\noF0hMWVlIlBoNJT8LBceZNTN/0TcTlpGjMv4R5eUjp1p14hm1aXuUW1DtEAmUdABoyKYk6bCfU0E\nT5+S6ysO+UczRNxtbATTflNOD/9dw93hncN1gAbiQnxAvv79bv9f0Y51uLryjZyF9Hh8ZUlmG4j6\n7quwbFpXqStrr+yf1f8VVGwfExoOUGDS9IK8GmbbsKY/GwT4tF/k/syzIYNwqUQARnMDA/N6Vtpf\nltfmqmn6XWtBAlULux6i6SeVjYel9pKCRRz2Nxdyl6DzUODHEk7tvt3ZT8TvCtyCtfy57fUOE5Lc\nTpCT9WTCOnTML1HRplbN449Z9X2x2N/Cjk1PnISqQRrcQ686tIyt6r5stSBg6xoFyt/nh1380qoH\nu8Hery4iiKDQc9nRidmS26J9Zuu0MhNalyIkpuB1JBtge8autrE1GihmqoVfrhFuwp+HesfvYAeU\nXLcgnxX/2qbVZC7yaX/X0cMma7hMfZERadWv8hOxt9CXd4vjYHu2ZOFbXHiX7FLoG9+12NFZQJDI\nGtymsFSN6/h87YmSHH+02bCrZTewhr9AgHIQn5ievY3sjuZEkWWTDjAG+YD6FiPo4Lq7R+EuQPYi\n3ey3Kiyk04M9hipNbrNuJADuc4q7RC+ZVkg/1DxKl5/3fTj/50So2KWJBJwPfwuUkI6ZmajdqRNC\nADceeiCPuyAgGcHPfZukxvsgB2Njih9D/HrgqYZM8RbXf3sGeqy9OO9aXxgLCJLyX7B/f8TOQlYs\n2MCtyqV6tYugUojdlz9qCCdyzumeKqonVANzjDSt3NSTRN14Kgrjpz0MSIHItB/7LN9m/OQ60pzp\n13O+eA/cCywOFK4ltNR137ogeuuLAmRd60Ec2+C52EsutG5S/YdZn8B3hQG2gi3Je/PSIJ/qUxxY\nWcSJHQiYqUs3N8q3IWoNTZRny5WGFosigwqRji62ROBLfmt4v373VdvrWelnzMRVvPQWp3NNS6di\nbEnROC7pvwgHDm7xXbiS75n+PYaD32P09lT0Hb3fJ4zVA7MjNM+fGcBKpigEVVRSUXH2WuD4pWrW\ncaDzTTe4snJ2AXqJe6gV5c5bEHtsr4Rbg9wjyMh9RNh8H8HZnY6WBzZIVhWtbIEQCsjNaWULitOo\nnBOXdX/TGW2al+Q89krLro6ZAruK/10+tuakZuqtQ/6mamzGucldwQEk7NyBRM/tFjYvLnZ4QJPK\ncyc2/ItBlnLPu2CD8Z1lUfGHtBFM/B39KC9+R5k08fiT2/Yipc7UafeofNfjcdWaxvVqglvTbEeK\nrgH/zq8I467bbGZsdtYAaz2n8QJD5YXKXaHWa6mlwgtwT/kci4HEiK/MAI2eUg==\n",
  "ruleChapterName": "$.name",
  "ruleChapterUrl": "",
  "ruleContentUrl": "$.id@js:baseUrl+\"/chapter/\"+result",
  "ruleBookContent": ":_H006_cPDE/W893EkVdTbz73xxMW9pHckSyEc59ZGV05bfM+ZoauyTQtdFUiDji7pEqmpye8YK7PLE+ycI\n2kOhbmmkueNeq5CjogZMTS6KyHIYjWqaqOYT64Kmp45sEf3XM+NbFCiwnSBr1nD8EqyCzwg3PMRZ\n6slxq6ebU3VDZGKuwEBrXvsc9gyZgKWgzwYc9D1HI+i7zIbnb5Ax8KabwV65BgTKZNSrZEVQnbDs\n9BxFeJFzdhCxzSRpNh7Hi56vKkUdvrElfeCTD/6xTPBDn+uYA+G4A4B7ZDJnYVx42YeagD2IpHj/\nZPu9YOP+w+sECpsxbpjV9wq6pwm0icK6jEn7SuR5bzTJXWEW9i7suZUcytw5jcvSUMKS87jm05Mx\nrBoRYtjdr+mbVOm765hQegG+YshBqV/nm37iZ7HeictGjYssJoZgIRfEvBTpAlgA92WpR7AdclcR\nPPa20C+FrsSeCtSJ4hYl4sgIrfFiP44FQEXAu4ykBNDVh15ZQNmzfO5joL5TsJ/WSLVIuQXjCOpf\nETvIeU/Nn7DJuo1uS/TYc4UyKin0I3zB9VNqPmvLOVMP0y0OSAnUdRB11ejypfePlv8Hr8KAkLt+\nsmkQWyRi4gaFuw5se2446nE2eY4QJ68v8Nw2d+uoL7SHsEt6vgj/jUSTMu0tRPogIPTVHRihLzf9\nagl6GZ8nPfhSICcqWn3f\n"
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
