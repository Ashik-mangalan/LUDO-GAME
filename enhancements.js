/* ASHIX PREMIUM REDESIGN v3 — accessibility, connection feedback and input polish */
(()=>{
 const $=id=>document.getElementById(id);
 const dice=$('dice');
 const app=$('app');
 if(app)app.classList.add('premium-ui');
 if(dice){
  dice.setAttribute('title','Roll dice · R / Space');
  dice.setAttribute('aria-label','Roll dice');
  dice.setAttribute('aria-keyshortcuts','R Space');
  dice.addEventListener('click',()=>{
   if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
   dice.classList.remove('dice-premium-roll');void dice.offsetWidth;dice.classList.add('dice-premium-roll');
   window.setTimeout(()=>dice.classList.remove('dice-premium-roll'),620);
  });
 }
 const status=document.createElement('div');
 status.id='ludoNetStatus';status.className='ludo-net-status';status.setAttribute('role','status');status.setAttribute('aria-live','polite');status.hidden=true;
 status.innerHTML='<span class="ludo-net-dot"></span><span class="ludo-net-label"></span>';
 document.body.appendChild(status);
 const labels={connecting:'Connecting…',connected:'Online · Connected',reconnecting:'Reconnecting…',polling:'Online · Backup mode',offline:'No internet connection'};
 let lastState='idle';
 window.addEventListener('ludo:network',e=>{
  const d=e.detail||{},state=d.state||'idle';lastState=state;
  status.hidden=state==='idle';status.dataset.state=state;
  const label=status.querySelector('.ludo-net-label');
  if(label)label.textContent=labels[state]||'Connection status';
  status.title=d.detail||labels[state]||'';
 });
 window.addEventListener('online',()=>{if(lastState!=='idle'){status.hidden=false;status.dataset.state='reconnecting';status.querySelector('.ludo-net-label').textContent=labels.reconnecting}});
 window.addEventListener('offline',()=>{if(lastState!=='idle'){status.hidden=false;status.dataset.state='offline';status.querySelector('.ludo-net-label').textContent=labels.offline}});
 document.addEventListener('keydown',e=>{
  if(e.defaultPrevented||e.repeat||e.altKey||e.ctrlKey||e.metaKey)return;
  const el=e.target,tag=el&&el.tagName;
  if(tag==='INPUT'||tag==='TEXTAREA'||tag==='SELECT'||el?.isContentEditable)return;
  const k=e.key.toLowerCase();if(k!=='r'&&k!==' ')return;
  const hidden=x=>!x||x.classList.contains('hide');
  const menu=$('menu'),setup=$('setup'),online=$('online');
  if(!hidden(menu)||!hidden(setup)||!hidden(online)||!dice||dice.disabled||dice.getAttribute('aria-disabled')==='true')return;
  e.preventDefault();dice.click();
 });
 // Keep the game usable on phones with changing browser chrome / keyboard insets.
 const setViewport=()=>document.documentElement.style.setProperty('--ludo-vh',(window.innerHeight||0)+'px');
 setViewport();window.addEventListener('resize',setViewport,{passive:true});
 if(window.visualViewport)window.visualViewport.addEventListener('resize',setViewport,{passive:true});
})();
