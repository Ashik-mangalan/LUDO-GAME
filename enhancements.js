/* ASHIX PREMIUM REDESIGN v2 — keyboard helpers + interaction polish */
(()=>{const dice=document.getElementById('dice');if(!dice)return;
dice.setAttribute('title','Roll dice · R / Space');
dice.setAttribute('aria-keyshortcuts','R Space');
dice.addEventListener('click',()=>{dice.classList.remove('dice-premium-roll');void dice.offsetWidth;dice.classList.add('dice-premium-roll');setTimeout(()=>dice.classList.remove('dice-premium-roll'),620)});
document.addEventListener('keydown',e=>{if(e.defaultPrevented||e.repeat||e.altKey||e.ctrlKey||e.metaKey)return;const el=e.target,tag=el&&el.tagName;if(tag==='INPUT'||tag==='TEXTAREA'||tag==='SELECT'||el?.isContentEditable)return;const k=e.key.toLowerCase();if(k!=='r'&&k!==' ')return;const hidden=x=>!x||x.classList.contains('hide');const menu=document.getElementById('menu'),setup=document.getElementById('setup'),online=document.getElementById('online');if(!hidden(menu)||!hidden(setup)||!hidden(online)||dice.disabled||dice.getAttribute('aria-disabled')==='true')return;e.preventDefault();dice.click()});
const app=document.getElementById('app');if(app){app.classList.add('premium-ui');}
})();
