/* ─────────────────────────────────────────
   WENDZ — Precision Retail Media
   script.js
───────────────────────────────────────── */

/* ─── CURSOR ────────────────────────────── */
const cur  = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', function(e) {
  mx = e.clientX;
  my = e.clientY;
  cur.style.left = mx + 'px';
  cur.style.top  = my + 'px';
});

(function animRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animRing);
})();

/* ─── PRELOADER ─────────────────────────── */
var pre = document.getElementById('preloader');
var bar = document.getElementById('pre-bar');
var pct = document.getElementById('pre-pct');
var p   = 0;

var iv = setInterval(function() {
  p = Math.min(p + Math.random() * 18, 100);
  bar.style.width  = p + '%';
  pct.textContent  = Math.floor(p) + '%';

  if (p >= 100) {
    clearInterval(iv);
    setTimeout(function() {
      pre.classList.add('hidden');

      /* stagger-reveal the 4 hero headlines */
      ['h1', 'h2', 'h3', 'h4'].forEach(function(id, i) {
        setTimeout(function() {
          var el = document.getElementById(id);
          if (el) el.classList.add('visible');
        }, i * 120);
      });

    }, 300);
  }
}, 60);

/* ─── NAV SCROLL ────────────────────────── */
window.addEventListener('scroll', function() {
  var nav = document.getElementById('nav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
});

/* ─── SCROLL REVEAL ─────────────────────── */
var revEls = document.querySelectorAll('.reveal');

var obs = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.07, rootMargin: '0px 0px -32px 0px' });

revEls.forEach(function(el) { obs.observe(el); });

/* safety fallback — reveal everything after 3 s */
setTimeout(function() {
  revEls.forEach(function(el) { el.classList.add('visible'); });
}, 3000);

/* ─── SMOOTH SCROLL ─────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(function(a) {
  a.addEventListener('click', function(e) {
    var target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ─── FORM ──────────────────────────────── */
function handleForm(e) {
  e.preventDefault();
  var form    = document.getElementById('contact-form');
  var success = document.getElementById('fsuccess');
  if (form)    form.style.display    = 'none';
  if (success) success.style.display = 'block';
}
