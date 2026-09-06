// Auto-converted from Legado/阅读 comic source.
// Source: 拷贝漫画
// NOTE: This is a best-effort compatibility conversion. Complex Legado JS rules may require manual fixes.

class ConvertedSource_source_61_acb91b extends ComicSource {
  name = "拷贝漫画";
  key = "source_61_acb91b";
  version = "0.1.0";
  minAppVersion = "1.0.0";
  url = "";
  baseUrl = "https://www.mangacopy.com";
  defaultHeaders = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36", "Referer": "https://www.mangacopy.com"};
  legadoRules = {"ruleSearchUrl":"{{\n\"https://www.mangacopy.com/api/kb/web/searchs/comics?q=\"+searchKey.replace(/@.*/,\"\")+\"&q_type=\"+searchKey.replace(/.*@|.*$/,\"\")+\"&offset=\"+24*(searchPage-1)+\"&limit=24&platform=2@Header:\"+\"{\\\"referer\\\":\\\"https://www.mangacopy.com/search?q=\"+encodeURI(searchKey)+\"&q_type=\\\",\\\"cookie\\\":\\\"webp=0\\\"}\"\n}}","ruleSearchList":"class.topThree||class.col-auto||$.results.list[*]","ruleSearchName":"tag.p@text||$.name","ruleSearchAuthor":"tag.span@tag.a@text||$.author[*].name","ruleSearchNoteUrl":"tag.a@href||$.path_word@js:\"https://www.mangacopy.com/comic/\"+result.replace(/\\/comic\\/(.*)\\/*/,\"$1\")","ruleSearchCoverUrl":"tag.img@data-src||$.cover","ruleSearchKind":"$.theme[0:3].name&&$.status","ruleSearchLastChapter":"$.datetime_created@js:result.substring(0,10)","ruleBookName":"tag.h6@text","ruleBookAuthor":"class.comicParticulars-right-txt.1@tag.a@text","ruleBookKind":"@css:.comicParticulars-left-theme-all>a:lt(3),.comicParticulars-title-right>ul>li:eq(5)>span:eq(1)@text@js:result.join().replace(/#/g,\"\")","ruleBookLastChapter":"class.comicParticulars-right-txt.3@text","ruleIntroduce":"class.intro@text","ruleCoverUrl":"class.comicParticulars-left-img@tag.img@data-src","ruleChapterList":":_H006_6Rg+28uy8RBCWnLLz5cfJ0ORoyRv3PntRSMJFiq1Yjxbjj02JXNWskNl+mxwJNbiSdgNeRQX9uvD\noF0hMWVlIlBoNJT8LBceZNTN/0TcTlpGjMv4R5eUjp1p14hm1aXuUW1DtEAmUdABoyKYk6bCfU0E\nT5+S6ysO+UczRNxtbATTflNOD/9dw93hncN1gAbiQnxAvv79bv9f0Y51uLryjZyF9Hh8ZUlmG4j6\n7quwbFpXqStrr+yf1f8VVGwfExoOUGDS9IK8GmbbsKY/GwT4tF/k/syzIYNwqUQARnMDA/N6Vtpf\nltfmqmn6XWtBAlULux6i6SeVjYel9pKCRRz2Nxdyl6DzUODHEk7tvt3ZT8TvCtyCtfy57fUOE5Lc\nTpCT9WTCOnTML1HRplbN449Z9X2x2N/Cjk1PnISqQRrcQ686tIyt6r5stSBg6xoFyt/nh1380qoH\nu8Hery4iiKDQc9nRidmS26J9Zuu0MhNalyIkpuB1JBtge8autrE1GihmqoVfrhFuwp+HesfvYAeU\nXLcgnxX/2qbVZC7yaX/X0cMma7hMfZERadWv8hOxt9CXd4vjYHu2ZOFbXHiX7FLoG9+12NFZQJDI\nGtymsFSN6/h87YmSHH+02bCrZTewhr9AgHIQn5ievY3sjuZEkWWTDjAG+YD6FiPo4Lq7R+EuQPYi\n3ey3Kiyk04M9hipNbrNuJADuc4q7RC+ZVkg/1DxKl5/3fTj/50So2KWJBJwPfwuUkI6ZmajdqRNC\nADceeiCPuyAgGcHPfZukxvsgB2Njih9D/HrgqYZM8RbXf3sGeqy9OO9aXxgLCJLyX7B/f8TOQlYs\n2MCtyqV6tYugUojdlz9qCCdyzumeKqonVANzjDSt3NSTRN14Kgrjpz0MSIHItB/7LN9m/OQ60pzp\n13O+eA/cCywOFK4ltNR137ogeuuLAmRd60Ec2+C52EsutG5S/YdZn8B3hQG2gi3Je/PSIJ/qUxxY\nWcSJHQiYqUs3N8q3IWoNTZRny5WGFosigwqRji62ROBLfmt4v373VdvrWelnzMRVvPQWp3NNS6di\nbEnROC7pvwgHDm7xXbiS75n+PYaD32P09lT0Hb3fJ4zVA7MjNM+fGcBKpigEVVRSUXH2WuD4pWrW\ncaDzTTe4snJ2AXqJe6gV5c5bEHtsr4Rbg9wjyMh9RNh8H8HZnY6WBzZIVhWtbIEQCsjNaWULitOo\nnBOXdX/TGW2al+Q89krLro6ZAruK/10+tuakZuqtQ/6mamzGucldwQEk7NyBRM/tFjYvLnZ4QJPK\ncyc2/ItBlnLPu2CD8Z1lUfGHtBFM/B39KC9+R5k08fiT2/Yipc7UafeofNfjcdWaxvVqglvTbEeK\nrgH/zq8I467bbGZsdtYAaz2n8QJD5YXKXaHWa6mlwgtwT/kci4HEiK/MAI2eUg==\n","ruleChapterName":"$.name","ruleChapterUrl":"","ruleContentUrl":"$.id@js:baseUrl+\"/chapter/\"+result","ruleBookContent":":_H006_cPDE/W893EkVdTbz73xxMW9pHckSyEc59ZGV05bfM+ZoauyTQtdFUiDji7pEqmpye8YK7PLE+ycI\n2kOhbmmkueNeq5CjogZMTS6KyHIYjWqaqOYT64Kmp45sEf3XM+NbFCiwnSBr1nD8EqyCzwg3PMRZ\n6slxq6ebU3VDZGKuwEBrXvsc9gyZgKWgzwYc9D1HI+i7zIbnb5Ax8KabwV65BgTKZNSrZEVQnbDs\n9BxFeJFzdhCxzSRpNh7Hi56vKkUdvrElfeCTD/6xTPBDn+uYA+G4A4B7ZDJnYVx42YeagD2IpHj/\nZPu9YOP+w+sECpsxbpjV9wq6pwm0icK6jEn7SuR5bzTJXWEW9i7suZUcytw5jcvSUMKS87jm05Mx\nrBoRYtjdr+mbVOm765hQegG+YshBqV/nm37iZ7HeictGjYssJoZgIRfEvBTpAlgA92WpR7AdclcR\nPPa20C+FrsSeCtSJ4hYl4sgIrfFiP44FQEXAu4ykBNDVh15ZQNmzfO5joL5TsJ/WSLVIuQXjCOpf\nETvIeU/Nn7DJuo1uS/TYc4UyKin0I3zB9VNqPmvLOVMP0y0OSAnUdRB11ejypfePlv8Hr8KAkLt+\nsmkQWyRi4gaFuw5se2446nE2eY4QJ68v8Nw2d+uoL7SHsEt6vgj/jUSTMu0tRPogIPTVHRihLzf9\nagl6GZ8nPfhSICcqWn3f\n"};

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
