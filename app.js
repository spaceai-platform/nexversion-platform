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
})();