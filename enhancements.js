/* Ludo quality-of-life controls */
(()=>{const dice=document.getElementById('dice'),menu=document.getElementById('menu'),setup=document.getElementById('setup'),online=document.getElementById('online');if(!dice)return;
dice.setAttribute('title','Roll dice (R or Space when game is active)');
dice.setAttribute('aria-keyshortcuts','R Space');
document.addEventListener('keydown',e=>{if(e.defaultPrevented||e.repeat||e.altKey||e.ctrlKey||e.metaKey)return;
const tag=e.target&&e.target.tagName;if(tag==='INPUT'||tag==='TEXTAREA'||tag==='SELECT'||e.target?.isContentEditable)return;
const key=e.key.toLowerCase();if(key!=='r'&&key!==' ')return;
const isHidden=x=>!x||x.classList.contains('hide');
if(!isHidden(menu)||!isHidden(setup)||!isHidden(online))return;
if(dice.disabled||dice.getAttribute('aria-disabled')==='true')return;
e.preventDefault();dice.click();
});
})();
