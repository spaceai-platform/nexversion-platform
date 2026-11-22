(() => {
  const tabs=document.querySelector('.week-tabs');
  const grid=document.getElementById('dayGrid');
  const detail=document.getElementById('preview');
  let selectedWeek=1,selectedDay=1,lessons=[],weeks=[];
  function showDay(day,focus=false){
    const lesson=lessons.find(x=>x.day===day);if(!lesson)return;
    selectedDay=day;
    document.getElementById('previewWeek').textContent='WEEK '+lesson.week;
    document.getElementById('previewDay').textContent='DAY '+String(day).padStart(2,'0')+' · '+lesson.duration+' MIN';
    document.getElementById('previewTitle').textContent=lesson.title;
    document.getElementById('previewObjective').textContent=lesson.objective;
    document.getElementById('previewTools').textContent=lesson.tools;
    for(const b of grid.querySelectorAll('button[data-day]'))b.setAttribute('aria-pressed',String(Number(b.dataset.day)===day));
    if(focus && window.matchMedia('(max-width:900px)').matches)detail.scrollIntoView({behavior:'smooth',block:'start'});
  }
  function showWeek(n){
    selectedWeek=n;
    document.getElementById('weekHeading').textContent='Week '+n+' — '+weeks[n-1];
    tabs.querySelectorAll('button').forEach(b=>b.setAttribute('aria-selected',String(Number(b.dataset.week)===n)));
    grid.replaceChildren();
    for(const lesson of lessons.filter(x=>x.week===n)){
      const b=document.createElement('button');b.type='button';b.className='day-card';b.dataset.day=String(lesson.day);b.setAttribute('aria-pressed','false');
      const num=document.createElement('span');num.className='number';num.textContent='DAY '+String(lesson.day).padStart(2,'0');
      const title=document.createElement('span');title.className='label';title.textContent=lesson.title;
      const duration=document.createElement('span');duration.className='duration';duration.textContent='◷ '+lesson.duration+' minutes';
      b.append(num,title,duration);b.addEventListener('click',()=>showDay(lesson.day,true));grid.append(b);
    }
    showDay(n*7-6);
  }
  fetch('./course-outline.json',{cache:'no-store'}).then(r=>{if(!r.ok)throw Error('Curriculum unavailable');return r.json()}).then(data=>{
    weeks=data.weeks;lessons=data.lessons;
    if(lessons.length!==28||lessons.some((x,i)=>x.day!==i+1))throw Error('Incomplete programme');
    weeks.forEach((title,i)=>{const b=document.createElement('button');b.type='button';b.dataset.week=String(i+1);b.setAttribute('role','tab');b.setAttribute('aria-selected','false');b.textContent='Week '+(i+1);b.title=title;b.addEventListener('click',()=>showWeek(i+1));tabs.append(b)});
    showWeek(1);
  }).catch(()=>{grid.textContent='The programme preview is temporarily unavailable. Please try again.';});

  const pathCards=document.getElementById('pathCards'),pathModules=document.getElementById('pathModules');
  function renderPath(track) {
    document.getElementById('pathName').textContent=track.name;
    document.getElementById('pathTagline').textContent=track.tagline;
    document.getElementById('pathAudience').textContent=track.audience;
    document.getElementById('pathOutcome').textContent=track.outcome;
    pathModules.replaceChildren();
    for (const week of track.weeks) {
      const li=document.createElement('li'),num=document.createElement('span'),content=document.createElement('div'),name=document.createElement('strong'),desc=document.createElement('small');
      num.className='path-module-num';num.textContent=String(week.week).padStart(2,'0');
      name.textContent=week.theme;desc.textContent=week.dayRange+' · '+week.practice+' · Deliverable: '+week.milestone;
      content.append(name,desc);li.append(num,content);pathModules.append(li);
    }
    for (const card of pathCards.querySelectorAll('button[data-track]')) card.setAttribute('aria-pressed',String(card.dataset.track===track.slug));
  }
  fetch('./advanced-pathways.json',{cache:'no-store'}).then(r=>{if(!r.ok)throw Error('Advanced pathways unavailable');return r.json()}).then(data=>{
    if(!Array.isArray(data.tracks)||data.tracks.length!==5||data.tracks.some(t=>t.weeks.length!==4))throw Error('Invalid pathway outline');
    for (const track of data.tracks) {
      const card=document.createElement('button');card.type='button';card.className='path-card';card.dataset.track=track.slug;card.setAttribute('aria-pressed','false');
      const ico=document.createElement('span');ico.className='path-card-icon';ico.textContent=track.icon;
      const info=document.createElement('span');info.className='path-card-info';
      const cat=document.createElement('span');cat.className='path-card-tag';cat.textContent=track.category;
      const title=document.createElement('strong');title.className='path-card-title';title.textContent=track.name;
      const tag=document.createElement('span');tag.className='path-card-subtitle';tag.textContent=track.tagline;
      info.append(cat,title,tag);const arrow=document.createElement('span');arrow.className='path-card-arrow';arrow.setAttribute('aria-hidden','true');arrow.textContent='›';
      card.append(ico,info,arrow);card.addEventListener('click',()=>renderPath(track));pathCards.append(card);
    }
    renderPath(data.tracks[0]);
  }).catch(()=>{pathCards.textContent='Advanced pathway previews are temporarily unavailable.'});
})();