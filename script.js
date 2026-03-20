// CURSOR
const cur=document.getElementById('cursor'),ring=document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px';});
(function animRing(){rx+=(mx-rx)*0.12;ry+=(my-ry)*0.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(animRing);})();

// PRELOADER
const pre=document.getElementById('preloader'),bar=document.getElementById('pre-bar'),pct=document.getElementById('pre-pct');
let p=0;
const iv=setInterval(()=>{
  p=Math.min(p+Math.random()*18,100);
  bar.style.width=p+'%';pct.textContent=Math.floor(p)+'%';
  if(p>=100){clearInterval(iv);setTimeout(()=>{pre.classList.add('hidden');['h1','h2','h3','h4'].forEach((id,i)=>setTimeout(()=>document.getElementById(id).classList.add('visible'),i*120));},300);}
},60);

// NAV
window.addEventListener('scroll',()=>document.getElementById('nav').classList.toggle('scrolled',scrollY>60));

// SCROLL REVEAL
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}});},{threshold:0.07,rootMargin:'0px 0px -32px 0px'});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
setTimeout(()=>document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible')),3000);

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const t=document.querySelector(a.getAttribute('href'));
    if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'});}
  });
});

// FORM
function handleForm(e){
  e.preventDefault();
  document.getElementById('contact-form').style.display='none';
  document.getElementById('fsuccess').style.display='block';
}
