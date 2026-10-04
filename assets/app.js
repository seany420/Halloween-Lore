/* Halloween franchise companion: hash router + views over the HL data files. */
(function(){
var F = HL.films, C = HL.characters, T = HL.timeline, P = HL.places, L = HL.lore, TL = HL.timelines;
var byId = function(list){ var m = {}; list.forEach(function(x){ m[x.id] = x; }); return m; };
var film = byId(F), chr = byId(C), place = byId(P);
var LETTERS = ["A","B","C","D","E"];
var app = document.getElementById("app");
var state = { tl:"" };   // shared continuity filter

/* ---------- helpers ---------- */
function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
function badges(tls){ return '<span class="tls">' + (tls||[]).map(function(l){ return '<span class="tlb '+l+'" title="Timeline '+l+' · '+TL[l].name+'">'+l+'</span>'; }).join("") + '</span>'; }
function paras(a){ return (a||[]).map(function(p){ return "<p>"+esc(p)+"</p>"; }).join(""); }
function sec(t){ return '<h2 class="sec">'+esc(t)+'</h2>'; }
function filmLink(id){ var f = film[id]; return f ? '<a href="#/films/'+id+'">'+esc(f.title)+(/\(\d{4}\)/.test(f.title)?"":" ("+f.year+")")+'</a>' : esc(id); }
function filmLabel(f){ return f.title + (/\(\d{4}\)/.test(f.title) ? "" : " ("+f.year+")"); }
function chrLink(id){ var c = chr[id]; return c ? '<a href="#/characters/'+id+'">'+esc(c.name)+'</a>' : esc(id); }
function facts(rows){
  return '<aside class="facts"><dl>' + rows.filter(function(r){ return r[1]; }).map(function(r){
    return '<div><dt>'+esc(r[0])+'</dt><dd>'+(r[2] ? r[1] : esc(r[1]))+'</dd></div>'; }).join("") + '</dl></aside>';
}
function chips(active, extra){
  return '<div class="chips" role="group" aria-label="Filter by continuity">' +
    '<button class="chip" data-tlf="" aria-pressed="'+(!active)+'">ALL</button>' +
    LETTERS.map(function(l){ return '<button class="chip" data-tl="'+l+'" data-tlf="'+l+'" aria-pressed="'+(active===l)+'">'+l+' · '+TL[l].name.toUpperCase()+'</button>'; }).join("") +
    (extra||"") + '</div>';
}
function bindChips(rerender){
  app.querySelectorAll("[data-tlf]").forEach(function(b){
    b.addEventListener("click", function(){ state.tl = b.getAttribute("data-tlf"); rerender(); });
  });
}
/* kill ledger */
var K = HL.kills;
var METHODS = { blade:"Blade", blunt:"Blunt", hands:"Bare hands", strangled:"Strangled", impaled:"Impaled", gun:"Gunshot", fire:"Fire", accident:"Accident", other:"Other" };
function cnt(k){ return k.animal ? 0 : (k.n == null ? 1 : k.n); }
function byWho(k){ return k.by || "Michael"; }
function isMichael(k){ return /^Michael/.test(byWho(k)); }
function ledgerOf(id){ return K.filter(function(k){ return k.f === id; }); }
function deaths(f){ return ledgerOf(f.id).reduce(function(s,k){ return s + cnt(k); }, 0); }
function approx(f){ return ledgerOf(f.id).some(function(k){ return (k.n||1) > 1 || k.n === 0; }); }
function deathLabel(f){ return (approx(f) ? "≈" : "") + deaths(f); }
function ledgerTable(rows, showFilm){
  return '<div class="tw"><table class="ledger"><thead><tr>'+(showFilm ? '<th>Film</th>' : '')+'<th>Victim</th><th>How</th><th>Killer</th><th>Method</th></tr></thead><tbody>' +
    rows.map(function(k){
      var v = (k.c && chr[k.c] ? '<a href="#/characters/'+k.c+'">'+esc(k.v)+'</a>' : esc(k.v)) +
        (k.n > 1 ? ' <span class="tag">×'+k.n+'</span>' : k.n === 0 ? ' <span class="tag">uncounted</span>' : '') +
        (k.animal ? ' <span class="tag">animal</span>' : '') + (k.off ? ' <span class="tag">offscreen</span>' : '');
      return '<tr>'+(showFilm ? '<td class="k">'+filmLink(k.f)+'</td>' : '')+'<td class="k" style="white-space:normal">'+v+'</td><td>'+esc(k.how) +
        (k.note ? '<div class="note">'+esc(k.note)+'</div>' : '')+'</td><td'+(isMichael(k) ? ' class="dimc"' : '')+'>'+esc(byWho(k))+'</td><td><span class="mth">'+esc(METHODS[k.m]||k.m)+'</span></td></tr>';
    }).join("") + '</tbody></table></div>';
}

/* appearances derived from film cast lists */
var appearances = {};
F.forEach(function(f){ (f.cast||[]).forEach(function(c){ (appearances[c[0]] = appearances[c[0]] || []).push({ film:f, actor:c[1] }); }); });
var placeFilms = {};
F.forEach(function(f){ (f.places||[]).forEach(function(p){ (placeFilms[p] = placeFilms[p] || []).push(f); }); });

/* ---------- views ---------- */
function home(){
  var chars = C.length, kills = K.reduce(function(s,k){ return s + cnt(k); }, 0);
  var y0 = 1975, y1 = 2025, pos = function(y){ return ((y - y0) / (y1 - y0) * 100).toFixed(2) + "%"; };
  var lanes = LETTERS.map(function(l){
    var fs = TL[l].films.map(function(id){ return film[id]; });
    var a = fs[0].year, b = fs[fs.length-1].year;
    return '<div class="lane"><div class="lane-l"><b style="background:var(--'+l+')">'+l+'</b>'+esc(TL[l].name)+'</div><div class="track">' +
      '<div class="seg" style="left:'+pos(a)+';width:calc('+pos(b)+' - '+pos(a)+');background:var(--'+l+')"></div>' +
      fs.map(function(f){ return '<a class="dot" href="#/films/'+f.id+'" title="'+esc(filmLabel(f))+'" style="left:'+pos(f.year)+';background:var(--'+l+')"><span>'+String(f.year).slice(2)+'</span></a>'; }).join("") +
      '</div></div>';
  }).join("");
  var axis = '<div class="axis"><div></div><div class="track">' + [1978,1988,1998,2008,2018].map(function(y){ return '<i style="left:'+pos(y)+'">'+y+'</i>'; }).join("") + '</div></div>';

  return '<header class="mast"><h1>Halloween</h1><p>A franchise companion. Every film, every timeline, every body, and the seams between them.</p>' +
    '<div class="stats"><div class="stat"><b>13</b><span>Films</span></div><div class="stat"><b>5</b><span>Continuities</span></div>' +
    '<div class="stat"><b>'+chars+'</b><span>Characters</span></div><div class="stat"><b>≈'+kills+'</b><span>Deaths</span></div>' +
    '<div class="stat"><b>48</b><span>Years</span></div></div></header>' +
    sec("The continuity map") +
    '<p>Thirteen films. No single continuity holds more than five of them. Every entry after 1981 is a fork, and most forks pretend the others don\'t exist. The one fixed point is 1978.</p>' +
    '<div class="map"><div class="map-in">'+lanes+axis+'</div></div>' +
    sec("The five timelines") +
    '<div class="grid">' + LETTERS.map(function(l){
      return '<a class="card" href="#/timeline/'+l+'">'+badges([l])+'<div class="num">TIMELINE '+l+'</div><h3>'+esc(TL[l].name)+'</h3>' +
        '<div class="meta">'+TL[l].films.map(function(id){ return film[id].year; }).join(" → ")+'</div><p>'+esc(TL[l].blurb)+'</p></a>';
    }).join("") + '</div>' +
    sec("What every timeline agrees on") +
    '<ul class="clean"><li>Halloween night, 1963: 6-year-old Michael Myers kills his teenage sister Judith in the family home. (Zombie moves the date and keeps the act.)</li>' +
    '<li>Fifteen years of institutionalization under Dr. Sam Loomis.</li><li>He escapes, comes back to Haddonfield, and attaches himself to Laurie Strode.</li>' +
    '<li>He can\'t be reasoned with, and shooting him isn\'t enough.</li></ul><p>Everything else is negotiable.</p>' +
    sec("Where to go") +
    '<div class="grid">' + [
      ["films","Films","Plot, cast, kills, settings, production, and alternate cuts for all 13."],
      ["characters","Characters","Every named player, with actors, appearances, and fate in each timeline."],
      ["timeline","Timeline","The in-universe chronology from 1946 to 2022, filterable by continuity."],
      ["places","Places","Haddonfield, the Myers house, Smith's Grove, and everywhere else, with real filming locations."],
      ["lore","Lore","Samhain, Thorn, the mask, the white horse, Silver Shamrock, and the rules of the Shape."],
      ["media","Beyond the films","Novels, comics, games, documentaries, scores, cuts, and rights."],
      ["compare","Compare","The same story beats side by side across all five continuities."],
      ["kills","Kill ledger","Every death in all 13 films: who, how, by whom, and in which cut."],
      ["writers","Writer's room","Contradictions, open seams, body counts, and craft notes for writing into the franchise."]
    ].map(function(x){ return '<a class="card" href="#/'+x[0]+'"><h3>'+x[1]+'</h3><p>'+x[2]+'</p></a>'; }).join("") + '</div>' +
    sec("Watch orders") +
    '<div class="tw"><table><thead><tr><th>Continuity</th><th>Order</th></tr></thead><tbody>' +
    LETTERS.map(function(l){ return '<tr><td class="k">'+badges([l])+' '+esc(TL[l].name)+'</td><td>'+TL[l].films.map(filmLink).join(" → ")+'</td></tr>'; }).join("") +
    '<tr><td class="k">Release order</td><td>'+F.map(function(f){ return '<a href="#/films/'+f.id+'">'+f.year+'</a>'; }).join(" · ")+'</td></tr>' +
    '</tbody></table></div>';
}

function filmsIndex(){
  return '<div class="pagehead"><p class="eyebrow">13 films · 1978–2022</p><h1>Films</h1><p>Release order. Filter by continuity to see how each timeline is built.</p></div>' +
    chips(state.tl) +
    '<div class="grid">' + F.map(function(f){
      var off = state.tl && f.tl.indexOf(state.tl) < 0;
      return '<a class="card'+(off?" dim":"")+'" href="#/films/'+f.id+'">'+badges(f.tl)+'<div class="num">'+String(f.n).padStart(2,"0")+'</div>' +
        '<h3>'+esc(f.title)+'</h3><div class="meta">'+f.year+' · '+esc(f.director)+'</div><p>'+esc(f.logline)+'</p></a>';
    }).join("") + '</div>';
}

function filmPage(id){
  var f = film[id]; if(!f) return notFound();
  var i = F.indexOf(f), prev = F[i-1], next = F[i+1];
  var cast = (f.cast||[]).map(function(c){ var ch = chr[c[0]];
    return '<tr><td class="k">'+(ch ? chrLink(c[0]) : esc(c[0]))+'</td><td>'+esc(c[1])+'</td></tr>'; }).join("");
  var led = ledgerOf(id);
  var places = (f.places||[]).map(function(p){ return place[p] ? '<a class="pill" href="#/places/'+p+'">'+esc(place[p].name)+'</a>' : ""; }).join("");
  var events = T.filter(function(e){ return e.film === id; });
  return '<a class="crumb" href="#/films">← All films</a>' +
    '<div class="dhead"><p class="eyebrow">Film '+String(f.n).padStart(2,"0")+' · '+f.year+'</p><h1>'+esc(f.title)+'</h1>' +
    '<p class="sub">'+badges(f.tl)+' &nbsp;'+f.tl.map(function(l){ return '<a href="#/timeline/'+l+'">'+esc(TL[l].name)+'</a>'; }).join(" · ")+'</p></div>' +
    '<p class="logline">'+esc(f.logline)+'</p>' +
    '<div class="cols"><div>' +
      sec("Plot") + paras(f.plot) +
      (f.matters ? '<div class="callout"><p class="eyebrow">Why it matters</p><p>'+esc(f.matters)+'</p></div>' : "") +
      (led.length ? sec("Deaths · "+deathLabel(f)) + ledgerTable(led, false) + '<p class="fine"><a href="#/kills">Full ledger across all 13 films →</a></p>' : "") +
      sec("Cast") + '<div class="tw"><table><thead><tr><th>Character</th><th>Played by</th></tr></thead><tbody>'+cast+'</tbody></table></div>' +
      (f.introduces ? sec("Introduces") + f.introduces.map(function(x){ return '<span class="pill">'+esc(x)+'</span>'; }).join("") : "") +
      (places ? sec("Settings") + '<div>'+places+'</div>' : "") +
      (events.length ? sec("On the timeline") + '<ul class="clean">'+events.map(function(e){ return '<li><strong>'+esc(e.d)+'</strong> '+badges(e.tl.split(""))+' '+esc(e.t)+'</li>'; }).join("")+'</ul>' : "") +
      sec("Production") + '<ul class="clean">'+(f.production||[]).map(function(p){ return '<li>'+esc(p)+'</li>'; }).join("")+'</ul>' +
      (f.cuts ? sec("Alternate cuts") + '<p>'+esc(f.cuts)+'</p>' : "") +
    '</div>' + facts([
      ["Released", f.released], ["Runtime", f.runtime], ["Director", f.director], ["Writers", f.writers],
      ["Producers", f.producers], ["Music", f.music], ["The Shape", f.shape], ["Story setting", f.setting],
      ["Filmed", f.shot], ["Budget", f.budget], ["Gross", f.gross], ["Deaths", deathLabel(f)]
    ]) + '</div>' +
    '<nav class="pager">'+(prev ? '<a href="#/films/'+prev.id+'">← '+esc(filmLabel(prev))+'</a>' : "<span></span>") +
      (next ? '<a href="#/films/'+next.id+'" style="text-align:right">'+esc(filmLabel(next))+' →</a>' : "<span></span>")+'</nav>';
}

function charsIndex(){
  var q = (state.cq||"").toLowerCase();
  var tiers = [["core","The pillars"],["major","Major"],["minor","Supporting"]];
  var list = C.filter(function(c){
    if(state.tl && c.tls.indexOf(state.tl) < 0) return false;
    if(q && (c.name+" "+(c.aka||"")+" "+c.role).toLowerCase().indexOf(q) < 0) return false;
    return true;
  });
  var body = tiers.map(function(t){
    var g = list.filter(function(c){ return c.tier === t[0]; });
    if(!g.length) return "";
    return sec(t[1]+" · "+g.length) + '<div class="grid">' + g.map(function(c){
      var ap = appearances[c.id] || [];
      return '<a class="card" href="#/characters/'+c.id+'">'+badges(c.tls)+'<h3>'+esc(c.name)+'</h3>' +
        '<div class="meta">'+esc(c.role)+(ap.length ? ' · '+ap.length+' film'+(ap.length>1?"s":"") : "")+'</div>' +
        (c.aka ? '<p>'+esc(c.aka)+'</p>' : "") + '</a>';
    }).join("") + '</div>';
  }).join("");
  return '<div class="pagehead"><p class="eyebrow">'+C.length+' entries</p><h1>Characters</h1><p>Actors and appearances come straight from each film\'s cast list. Fates are split by timeline.</p></div>' +
    '<input class="localq" id="cq" type="search" placeholder="Filter by name or role…" value="'+esc(state.cq||"")+'">' +
    chips(state.tl) + (body || '<p class="empty">Nobody matches that.</p>');
}

function charPage(id){
  var c = chr[id]; if(!c) return notFound();
  var ap = appearances[id] || [];
  var fates = Object.keys(c.fate||{}).map(function(k){
    return '<div class="fate">'+(k === "all" ? '<span class="tlb" style="background:var(--faint)">•</span>' : badges([k]))+'<div>'+esc(c.fate[k])+'</div></div>'; }).join("");
  var actors = {}; ap.forEach(function(a){ (actors[a.actor] = actors[a.actor] || []).push(a.film.year); });
  return '<a class="crumb" href="#/characters">← All characters</a>' +
    '<div class="dhead"><p class="eyebrow">'+esc(c.role)+'</p><h1>'+esc(c.name)+'</h1>' +
    '<p class="sub">'+badges(c.tls)+(c.aka ? ' &nbsp;'+esc(c.aka) : "")+'</p></div>' +
    '<div class="cols"><div>' + sec("Profile") + paras(c.bio) +
      (fates ? sec("Fate by timeline") + '<div class="fates">'+fates+'</div>' : "") +
      (K.some(function(k){ return k.c === id; }) ? sec("Deaths") + ledgerTable(K.filter(function(k){ return k.c === id; }), true) : "") +
      (ap.length ? sec("Appearances") + '<div class="tw"><table><thead><tr><th>Film</th><th>Played by</th><th>Timeline</th></tr></thead><tbody>' +
        ap.map(function(a){ return '<tr><td class="k">'+filmLink(a.film.id)+'</td><td>'+esc(a.actor)+'</td><td>'+badges(a.film.tl)+'</td></tr>'; }).join("") + '</tbody></table></div>' : "") +
    '</div>' + facts([
      ["Born", c.born], ["Also known as", c.aka], ["Role", c.role],
      ["Films", ap.length ? String(ap.length) : ""],
      ["Played by", Object.keys(actors).map(function(a){ return esc(a)+' <span style="color:var(--faint)">('+actors[a].join(", ")+')</span>'; }).join("<br>"), true]
    ]) + '</div>';
}

function timelinePage(l){
  if(l && LETTERS.indexOf(l) >= 0) state.tl = l;
  var evs = T.filter(function(e){ return !state.tl || e.tl.indexOf(state.tl) >= 0; }).slice().sort(function(a,b){ return a.y - b.y; });
  var groups = [], cur = null;
  evs.forEach(function(e){ var y = Math.floor(e.y); if(!cur || cur.y !== y){ cur = { y:y, ev:[] }; groups.push(cur); } cur.ev.push(e); });
  var intro = state.tl ? '<div class="callout"><p class="eyebrow">Timeline '+state.tl+' · '+esc(TL[state.tl].name)+'</p><p>'+esc(TL[state.tl].blurb)+'</p><p>'+TL[state.tl].films.map(filmLink).join(" → ")+'</p></div>' : "";
  return '<div class="pagehead"><p class="eyebrow">In-universe chronology</p><h1>Timeline</h1><p>Every dated event in story order. Pick a continuity to see only its version of history.</p></div>' +
    chips(state.tl) + intro +
    '<div class="chron">' + groups.map(function(g){
      return '<div class="yr"><div class="yr-l">'+g.y+'</div><div>' + g.ev.map(function(e){
        var ls = e.tl.split("");
        return '<div class="ev" data-c="'+(ls.length === 1 ? ls[0] : "")+'"><div class="when">'+esc(e.d)+' '+badges(ls)+(e.film ? ' · '+filmLink(e.film) : "")+'</div><p>'+esc(e.t)+'</p></div>';
      }).join("") + '</div></div>';
    }).join("") + '</div>';
}

function placesIndex(){
  return '<div class="pagehead"><p class="eyebrow">'+P.length+' locations</p><h1>Places</h1><p>In-story geography, with the real places it was shot where they\'re known.</p></div>' +
    '<div class="grid">' + P.map(function(p){
      var fs = placeFilms[p.id] || [];
      return '<a class="card" href="#/places/'+p.id+'"><div class="num">'+esc(p.kind.toUpperCase())+'</div><h3>'+esc(p.name)+'</h3>' +
        '<div class="meta">'+(p.addr ? esc(p.addr)+' · ' : "")+fs.length+' film'+(fs.length===1?"":"s")+'</div><p>'+esc(p.desc[0])+'</p></a>';
    }).join("") + '</div>';
}

function placePage(id){
  var p = place[id]; if(!p) return notFound();
  var fs = placeFilms[id] || [];
  return '<a class="crumb" href="#/places">← All places</a>' +
    '<div class="dhead"><p class="eyebrow">'+esc(p.kind)+'</p><h1>'+esc(p.name)+'</h1>'+(p.addr ? '<p class="sub">'+esc(p.addr)+'</p>' : "")+'</div>' +
    '<div class="cols"><div>' + paras(p.desc) +
      (fs.length ? sec("Appears in") + fs.map(function(f){ return '<a class="pill" href="#/films/'+f.id+'">'+esc(filmLabel(f))+'</a>'; }).join("") : "") +
    '</div>' + facts([["Type", p.kind], ["Address", p.addr], ["Real location", p.real]]) + '</div>';
}

function lorePage(){
  return '<div class="pagehead"><p class="eyebrow">Mythology and mechanics</p><h1>Lore</h1><p>What the films say Michael is, and what he consistently does.</p></div>' +
    L.map(function(x){ return '<section id="lore-'+x.id+'">'+sec(x.title)+(x.tl ? '<p>'+badges([x.tl])+' <span style="color:var(--faint);font-size:.8rem">Timeline '+x.tl+' only</span></p>' : "")+paras(x.body)+'</section>'; }).join("");
}

function mediaPage(){
  return '<div class="pagehead"><p class="eyebrow">Novels, comics, games, and more</p><h1>Beyond the films</h1><p>Mostly non-canon. Often where the strangest ideas live.</p></div>' +
    HL.media.map(function(g){
      return sec(g.group) + '<div class="tw"><table><thead><tr><th>Title</th><th>By</th><th>Notes</th></tr></thead><tbody>' +
        g.items.map(function(i){ return '<tr><td class="k" style="white-space:normal">'+esc(i[0])+'</td><td>'+esc(i[1])+'</td><td>'+esc(i[2])+'</td></tr>'; }).join("") + '</tbody></table></div>';
    }).join("");
}

function ledgerPage(){
  var q = (state.kq||"").toLowerCase();
  var rows = K.filter(function(k){
    var f = film[k.f];
    if(state.tl && f.tl.indexOf(state.tl) < 0) return false;
    if(state.kby === "michael" && !isMichael(k)) return false;
    if(state.kby === "other" && isMichael(k)) return false;
    if(state.km && k.m !== state.km) return false;
    if(q && (k.v+" "+k.how+" "+byWho(k)+" "+(k.note||"")).toLowerCase().indexOf(q) < 0) return false;
    return true;
  });
  var total = rows.reduce(function(s,k){ return s + cnt(k); }, 0);
  var mich = rows.filter(isMichael).reduce(function(s,k){ return s + cnt(k); }, 0);
  var off = rows.filter(function(k){ return k.off; }).reduce(function(s,k){ return s + cnt(k); }, 0);
  var byM = {}; rows.forEach(function(k){ byM[k.m] = (byM[k.m]||0) + cnt(k); });
  var mmax = Math.max.apply(null, [1].concat(Object.keys(byM).map(function(m){ return byM[m]; })));
  var setBtn = function(key, val, label){ return '<button class="chip" data-set="'+key+':'+val+'" aria-pressed="'+((state[key]||"") === val)+'">'+label+'</button>'; };
  var groups = F.map(function(f){ var r = rows.filter(function(k){ return k.f === f.id; }); return r.length ? { f:f, r:r } : null; }).filter(Boolean);
  return '<div class="pagehead"><p class="eyebrow">Every death, all 13 films</p><h1>Kill ledger</h1>' +
    '<p>Who dies, how, by whose hand, and where the cuts disagree. Grouped rows (×) are approximate, animals are listed but not counted, and dreams are marked.</p></div>' +
    '<div class="stats left"><div class="stat"><b>'+total+'</b><span>Deaths shown</span></div><div class="stat"><b>'+mich+'</b><span>By Michael</span></div>' +
    '<div class="stat"><b>'+(total - mich)+'</b><span>By anyone else</span></div><div class="stat"><b>'+off+'</b><span>Offscreen</span></div></div>' +
    '<input class="localq" id="kq" type="search" placeholder="Filter by victim, weapon, killer…" value="'+esc(state.kq||"")+'">' +
    chips(state.tl) +
    '<div class="chips">'+setBtn("kby","","ANY KILLER")+setBtn("kby","michael","MICHAEL")+setBtn("kby","other","SOMEONE ELSE")+'</div>' +
    '<div class="chips">'+setBtn("km","","ALL METHODS")+Object.keys(METHODS).map(function(m){ return setBtn("km", m, METHODS[m].toUpperCase()); }).join("")+'</div>' +
    (rows.length ? sec("By method") + '<div class="bars">' + Object.keys(METHODS).filter(function(m){ return byM[m]; }).sort(function(x,y){ return byM[y]-byM[x]; }).map(function(m){
      return '<div class="bar"><span class="t">'+METHODS[m]+'</span><div class="fill" style="width:'+(byM[m]/mmax*100)+'%;background:var(--ox)"></div><span class="v">'+byM[m]+'</span></div>'; }).join("") + '</div>' : "") +
    (groups.length ? groups.map(function(g){
      var n = g.r.reduce(function(s,k){ return s + cnt(k); }, 0);
      return '<h2 class="sec"><a href="#/films/'+g.f.id+'">'+esc(filmLabel(g.f))+'</a>&nbsp;'+badges(g.f.tl)+'<span class="cnt">'+n+'</span></h2>' + ledgerTable(g.r, false);
    }).join("") : '<p class="empty">No deaths match those filters.</p>');
}

function comparePage(arg){
  if(arg && /^[A-E]{1,5}$/.test(arg)) state.cmp = arg;
  var sel = LETTERS.filter(function(l){ return (state.cmp || "ABCD").indexOf(l) >= 0; });
  if(!sel.length) sel = ["A"];
  var cols = 'style="grid-template-columns:minmax(150px,200px) repeat('+sel.length+',minmax(0,1fr))"';
  var head = '<div class="crow chead" '+cols+'><div></div>' + sel.map(function(l){
    return '<div class="ch" style="border-top-color:var(--'+l+')"><a href="#/timeline/'+l+'">'+badges([l])+' '+esc(TL[l].name)+'</a></div>'; }).join("") + '</div>';
  /* cells with identical text in neighboring columns merge into one spanning cell */
  function row(label, vals){
    var cells = [], i = 0;
    while(i < sel.length){
      var j = i + 1;
      while(j < sel.length && vals[j] != null && vals[j] === vals[i]) j++;
      var ls = sel.slice(i, j), v = vals[i];
      cells.push('<div class="cc'+(v == null ? ' none' : '')+(ls.length > 1 ? ' merged' : '')+'" style="grid-column:span '+ls.length+'">' +
        '<span class="cl">'+badges(ls)+'</span>' + (v == null ? 'Not in this continuity.' : v) + '</div>');
      i = j;
    }
    return '<div class="crow" '+cols+'><div class="cq">'+esc(label)+'</div>'+cells.join("")+'</div>';
  }
  var txt = function(s){ return s == null ? null : esc(s); };
  var body = HL.compare.map(function(g){
    return sec(g.group) + '<div class="cgrid">' + head + g.rows.map(function(r){ return row(r.q, sel.map(function(l){ return txt(r[l]); })); }).join("") + '</div>';
  }).join("");

  /* derived rows: films, deaths, performers */
  var tf = function(l){ return TL[l].films.map(function(id){ return film[id]; }); };
  var actorsFor = function(l, cid){
    var seen = []; tf(l).forEach(function(f){ (f.cast||[]).forEach(function(c){ if(c[0] === cid && seen.indexOf(c[1]) < 0) seen.push(c[1]); }); });
    return seen.length ? esc(seen.join(" · ")) : null;
  };
  var nums = sec("By the numbers") + '<div class="cgrid">' + head +
    row("Films", sel.map(function(l){ return TL[l].films.map(filmLink).join(" → "); })) +
    row("Deaths on screen", sel.map(function(l){
      var fs = tf(l), n = fs.reduce(function(s,f){ return s + deaths(f); }, 0), ap = fs.some(approx);
      return '<span class="big">'+(ap ? "≈" : "")+n+'</span> across '+fs.length+' film'+(fs.length > 1 ? "s" : ""); })) +
    row("Michael played by", sel.map(function(l){ return l === "E" ? null : actorsFor(l, "michael-myers"); })) +
    row("Laurie played by", sel.map(function(l){ return actorsFor(l, "laurie-strode"); })) +
    row("Loomis played by", sel.map(function(l){ return actorsFor(l, "sam-loomis"); })) +
    '</div>';

  /* character fates shared by 2+ selected timelines */
  var shared = C.filter(function(c){ return sel.filter(function(l){ return c.fate && c.fate[l]; }).length >= 2; });
  var fates = shared.length ? sec("Same character, different fates") + '<div class="cgrid">' + head + shared.map(function(c){
    return row(c.name, sel.map(function(l){ return c.fate[l] ? esc(c.fate[l]) : null; })).replace('<div class="cq">'+esc(c.name)+'</div>', '<div class="cq">'+chrLink(c.id)+'</div>');
  }).join("") + '</div>' : "";

  return '<div class="pagehead"><p class="eyebrow">Side by side</p><h1>Compare continuities</h1>' +
    '<p>The same story beats as each timeline tells them. Where neighboring timelines agree, their cells merge. Pick which continuities to line up.</p></div>' +
    '<div class="chips" role="group" aria-label="Continuities to compare">' + LETTERS.map(function(l){
      return '<button class="chip" data-tl="'+l+'" data-cmp="'+l+'" aria-pressed="'+(sel.indexOf(l) >= 0)+'">'+l+' · '+TL[l].name.toUpperCase()+'</button>'; }).join("") +
    '<button class="chip" data-cmp="ABCDE">ALL FIVE</button></div>' +
    body + nums + fates;
}

function writersPage(){
  var max = Math.max.apply(null, F.map(deaths));
  var bars = F.filter(function(f){ return deaths(f) > 0; }).map(function(f){
    var c = f.tl.length > 1 ? "var(--amber)" : "var(--"+f.tl[0]+")";
    return '<div class="bar"><a class="t" href="#/films/'+f.id+'">'+esc(filmLabel(f))+'</a><div class="fill" style="width:'+(deaths(f)/max*100)+'%;background:'+c+'"></div><span class="v">'+deathLabel(f)+'</span></div>';
  }).join("");
  return '<div class="pagehead"><p class="eyebrow">For writing into the franchise</p><h1>Writer\'s room</h1><p>Where the films disagree, where nobody has looked, and what it costs to choose.</p></div>' +
    sec("Known contradictions · pick a lane and hold it") +
    '<div class="tw"><table><thead><tr><th>Question</th><th>Answers</th></tr></thead><tbody>' +
    HL.contradictions.map(function(r){ return '<tr><td class="k" style="white-space:normal">'+esc(r[0])+'</td><td>'+esc(r[1])+'</td></tr>'; }).join("") + '</tbody></table></div>' +
    sec("Open seams · where a new story fits without a fight") +
    '<ul class="clean">' + HL.seams.map(function(s){ return '<li><strong>'+esc(s[0])+'.</strong> '+esc(s[1])+'</li>'; }).join("") + '</ul>' +
    HL.craft.map(function(c){ return sec(c.h) + (c.p ? paras(c.p) : "") + (c.list ? '<ul class="clean">'+c.list.map(function(x){ return '<li>'+esc(x)+'</li>'; }).join("")+'</ul>' : ""); }).join("") +
    sec("Deaths by film") + '<div class="bars">'+bars+'</div>' +
    sec("Ages and dates") +
    '<ul class="clean"><li>Michael: 6 in 1963 · 21 in 1978 · 31 (comatose) in 1988 · 61 in 2018 · 65 in 2022</li><li>Judith: 17 at death</li>' +
    '<li>Laurie: 17 in 1978 · 37 in 1998 · 57 in 2018 · 61 in 2022</li><li>Jamie Lloyd: about 7 in 1988 · 8 in 1989 · 15 in 1995</li>' +
    '<li>Steven Lloyd: born Oct 1995 · about 31 in 2026</li><li>Allyson Nelson: a high schooler in 2018</li></ul>' +
    sec("The names that recur") +
    '<p>'+["Myers","Strode","Loomis","Brackett","Doyle","Wallace","Lloyd","Carruthers","Meeker","Chambers","Wynn","Elam","Nelson","Tate","Cunningham"].join(" · ")+'</p>';
}

/* ---------- search ---------- */
var index = [];
F.forEach(function(f){ index.push({ kind:"Film", href:"#/films/"+f.id, title:filmLabel(f),
  text:[f.logline, f.director, f.writers, f.setting, f.shape, (f.plot||[]).join(" "), (f.production||[]).join(" "), f.cuts, f.matters,
        (f.cast||[]).map(function(c){ return (chr[c[0]] ? chr[c[0]].name : "")+" "+c[1]; }).join(" ")].join(" ") }); });
C.forEach(function(c){ index.push({ kind:"Character", href:"#/characters/"+c.id, title:c.name,
  text:[c.aka, c.role, c.born, (c.bio||[]).join(" "), Object.keys(c.fate||{}).map(function(k){ return c.fate[k]; }).join(" "),
        (appearances[c.id]||[]).map(function(a){ return a.actor; }).join(" ")].join(" ") }); });
P.forEach(function(p){ index.push({ kind:"Place", href:"#/places/"+p.id, title:p.name, text:[p.addr, p.kind, p.desc.join(" "), p.real].join(" ") }); });
L.forEach(function(x){ index.push({ kind:"Lore", href:"#/lore", title:x.title, text:x.body.join(" ") }); });
T.forEach(function(e){ index.push({ kind:"Timeline", href:"#/timeline", title:e.d, text:e.t }); });
HL.media.forEach(function(g){ g.items.forEach(function(i){ index.push({ kind:g.group, href:"#/media", title:i[0], text:i[1]+" "+i[2] }); }); });
K.forEach(function(k){ index.push({ kind:"Death", href:"#/films/"+k.f, title:k.v+" · "+filmLabel(film[k.f]), text:[k.how, byWho(k), METHODS[k.m], k.note].join(" ") }); });
HL.compare.forEach(function(g){ g.rows.forEach(function(r){ index.push({ kind:"Compare", href:"#/compare/ABCDE", title:g.group+" · "+r.q, text:LETTERS.map(function(l){ return r[l] ? l+": "+r[l] : ""; }).join(" ") }); }); });
HL.seams.forEach(function(s){ index.push({ kind:"Open seam", href:"#/writers", title:s[0], text:s[1] }); });

function snippet(text, q){
  var lo = text.toLowerCase(), i = lo.indexOf(q);
  if(i < 0) return esc(text.slice(0,160));
  var a = Math.max(0, i - 70), s = text.slice(a, i + q.length + 90);
  var j = s.toLowerCase().indexOf(q);
  return (a ? "…" : "") + esc(s.slice(0,j)) + "<mark>" + esc(s.slice(j, j+q.length)) + "</mark>" + esc(s.slice(j+q.length)) + "…";
}
function searchPage(q){
  q = (q||"").trim().toLowerCase();
  if(!q) return '<div class="pagehead"><h1>Search</h1><p>Try a name, a year, an actor, a weapon, a place.</p></div>';
  var hits = index.filter(function(h){ return (h.title+" "+h.text).toLowerCase().indexOf(q) >= 0; });
  hits.sort(function(a,b){ return (b.title.toLowerCase().indexOf(q) >= 0) - (a.title.toLowerCase().indexOf(q) >= 0); });
  return '<div class="pagehead"><p class="eyebrow">'+hits.length+' result'+(hits.length===1?"":"s")+'</p><h1>“'+esc(q)+'”</h1></div>' +
    (hits.length ? hits.map(function(h){
      return '<div class="hit"><span class="kind">'+esc(h.kind)+'</span><a href="'+h.href+'">'+esc(h.title)+'</a><p>'+snippet(h.text, q)+'</p></div>';
    }).join("") : '<p class="empty">Nothing in the companion matches that. Try a name, a year, or a timeline letter.</p>');
}

function notFound(){ return '<div class="pagehead"><h1>Not here</h1><p>That page doesn\'t exist. <a href="#/">Go home.</a></p></div>'; }

/* ---------- router ---------- */
var routes = {
  "": home, films:function(id){ return id ? filmPage(id) : filmsIndex(); },
  characters:function(id){ return id ? charPage(id) : charsIndex(); },
  timeline:timelinePage, places:function(id){ return id ? placePage(id) : placesIndex(); },
  lore:lorePage, media:mediaPage, kills:ledgerPage, compare:comparePage, writers:writersPage, search:function(q){ return searchPage(decodeURIComponent(q||"")); }
};
var titles = { "":"", films:"Films", characters:"Characters", timeline:"Timeline", places:"Places", lore:"Lore", media:"Beyond the Films", kills:"Kill Ledger", compare:"Compare", writers:"Writer's Room", search:"Search" };
var qEl = document.getElementById("q");

function render(keepScroll){
  var parts = location.hash.replace(/^#\/?/, "").split("/");
  var key = parts[0] || "", arg = parts.slice(1).join("/");
  var view = routes[key] || notFound;
  app.innerHTML = view(arg);
  document.querySelectorAll(".tabs a").forEach(function(a){ a.classList.toggle("on", a.getAttribute("data-k") === key); });
  var name = key === "films" && film[arg] ? filmLabel(film[arg]) : key === "characters" && chr[arg] ? chr[arg].name : key === "places" && place[arg] ? place[arg].name : titles[key];
  document.title = name ? name + " · Halloween Companion" : "Halloween Companion";
  if(key !== "search" && document.activeElement !== qEl) qEl.value = "";
  bindChips(function(){ render(true); });
  app.querySelectorAll("[data-set]").forEach(function(b){
    b.addEventListener("click", function(){ var kv = b.getAttribute("data-set").split(":"); state[kv[0]] = kv[1]; render(true); });
  });
  app.querySelectorAll("[data-cmp]").forEach(function(b){
    b.addEventListener("click", function(){
      var v = b.getAttribute("data-cmp"), cur = state.cmp || "ABCD";
      if(v.length > 1) state.cmp = v;
      else { var next = cur.indexOf(v) >= 0 ? cur.replace(v, "") : cur + v; if(next) state.cmp = next; }
      if(location.hash !== "#/compare") history.replaceState(null, "", "#/compare");
      render(true);
    });
  });
  var kq = document.getElementById("kq");
  if(kq) kq.addEventListener("input", function(){ state.kq = kq.value; var pos = kq.selectionStart; render(true); var n = document.getElementById("kq"); n.focus(); n.setSelectionRange(pos,pos); });
  var cq = document.getElementById("cq");
  if(cq) cq.addEventListener("input", function(){ state.cq = cq.value; var pos = cq.selectionStart; render(true); var n = document.getElementById("cq"); n.focus(); n.setSelectionRange(pos,pos); });
  if(key === "timeline" && arg){ /* chip clicks shouldn't be overridden by the URL letter */ history.replaceState(null, "", "#/timeline"); }
  if(!keepScroll) window.scrollTo(0,0);
}
window.addEventListener("hashchange", function(){ render(false); });
var t;
qEl.addEventListener("input", function(){
  clearTimeout(t);
  t = setTimeout(function(){
    var v = qEl.value.trim();
    if(v) location.replace("#/search/" + encodeURIComponent(v)); else location.hash = "#/";
  }, 140);
});
document.addEventListener("keydown", function(e){
  if(e.key === "/" && document.activeElement.tagName !== "INPUT"){ e.preventDefault(); qEl.focus(); }
});
render(false);
})();
