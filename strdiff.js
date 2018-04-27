'use strict';

function cmp(s,c) {
let a = (s, c) => {
    if ( c.length == 0 ) return [-1, -1];
    let r = s.search(c);
    if ( r == -1 ) {
      if ( c.substr(0, c.length - 1).length == 0 ) q.push({t:c, f:false});
      return a(s, c.substr(0, c.length - 1)); 
    } 
    q.push({t:c, f:true, s:r, l:c.length});
    return [r, c.length];
}

let b = (s, c) => {
  if (s.length == 0 ) { q.push({t:c,f:false}); return; }
  if (c.length == 0 ) return;
  let r = a(s, c);
  return r[1] == -1 ? b(s,c.substr(1)) : r[1] < c.length ? b(s,c.substr(r[1])):'';
}

let q = [], tq = [], t = '', v = '';
b(s, c);

for ( let i = 0; i < q.length; i++ ) {
  if (q[i].f == false ) { t += q[i].t; continue; } 
  if (t.length) { v += t; tq.push({t:t, f:false}); t = ''; }
  v += q[i].t;
  tq.push(q[i]); 
}
if (v.length && v.length !== c.length ) { tq.push({t:c.substr(v.length), f:false}); }
if (v.length == 0  && t.length) tq.push({t:t,f:false});
return tq;
}

exports.strdiff = cmp;

