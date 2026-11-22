import {readFileSync} from 'node:fs';import assert from 'node:assert/strict';
const d=JSON.parse(readFileSync(new URL('../course-outline.json',import.meta.url)));
assert.equal(d.lessons.length,28);assert.equal(d.weeks.length,4);
for(let i=0;i<28;i++){const l=d.lessons[i];assert.equal(l.day,i+1);assert.equal(l.week,Math.floor(i/7)+1);for(const k of ['title','objective','tools'])assert.ok(l[k]&&l[k].length>4,'Missing '+k+' at day '+l.day);}
const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
assert.ok(html.includes('disabled title="Checkout is not yet configured"'));assert.ok(html.includes('subscriber-only'));
const adv=JSON.parse(readFileSync(new URL('../advanced-pathways.json',import.meta.url)));
assert.equal(adv.tracks.length,5);
const unique=new Set();
for(const t of adv.tracks){
 assert.ok(!unique.has(t.slug));unique.add(t.slug);
 assert.equal(t.weeks.length,4);
 assert.ok(t.name.length>6 && t.outcome.length>20);
 for(let i=0;i<4;i++){const w=t.weeks[i];assert.equal(w.week,i+1);assert.ok(w.milestone.length>10 && w.practice.length>15);}
}
assert.ok(html.includes('id="advanced"') && html.includes('id="continue"'));
assert.ok(html.includes('programme previews') || html.includes('programme previews'.replace('p','p')));
console.log('PASS: 5 advanced pathways, 4 modules each, preview-only gating.');
console.log('PASS: 28 sequential days, four weeks, lesson preview fields and fail-closed checkout.');