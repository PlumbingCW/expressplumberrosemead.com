(function(){
var root=document.documentElement;
var burger=document.querySelector('.hamburger'),drawer=document.getElementById('mob-drawer'),overlay=document.getElementById('overlay'),closeBtn=document.querySelector('.mob-close');
function setMenu(open){
  if(!drawer)return;
  drawer.classList.toggle('open',open);overlay.classList.toggle('open',open);
  drawer.setAttribute('aria-hidden',open?'false':'true');burger.setAttribute('aria-expanded',open?'true':'false');
  root.style.overflow=open?'hidden':'';
  if(open&&closeBtn)closeBtn.focus();else if(burger&&!open)burger.focus({preventScroll:true});
}
if(burger){burger.addEventListener('click',function(){setMenu(true)});}
if(closeBtn){closeBtn.addEventListener('click',function(){setMenu(false)});}
if(overlay){overlay.addEventListener('click',function(){setMenu(false)});}
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&drawer&&drawer.classList.contains('open'))setMenu(false)});
window.addEventListener('resize',function(){if(window.innerWidth>768&&drawer&&drawer.classList.contains('open')){drawer.classList.remove('open');overlay.classList.remove('open');root.style.overflow='';}});
var items=document.querySelectorAll('.faq-item');
items.forEach(function(it){
  var q=it.querySelector('.faq-q'),a=it.querySelector('.faq-a');
  q.addEventListener('click',function(){
    var open=it.classList.toggle('open');
    q.setAttribute('aria-expanded',open?'true':'false');
    a.style.maxHeight=open?a.scrollHeight+'px':'0px';
  });
});
})();
