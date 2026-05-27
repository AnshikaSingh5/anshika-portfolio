/* ══ Animated particle canvas ══ */
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let W, H, particles = [], animFrame;

function resize(){
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

class Particle {
  constructor(){ this.reset(true) }
  reset(init){
    this.x = Math.random() * W;
    this.y = init ? Math.random() * H : (Math.random() > .5 ? -5 : H + 5);
    this.r = Math.random() * 1.8 + .3;
    this.vx = (Math.random() - .5) * .5;
    this.vy = (Math.random() - .5) * .5;
    this.alpha = Math.random() * .5 + .1;
    this.color = ['124,107,255','0,212,170','167,139,250'][Math.floor(Math.random()*3)];
  }
  update(){
    this.x += this.vx; this.vy += 0;
    this.y += this.vy;
    if(this.x < -10 || this.x > W+10 || this.y < -10 || this.y > H+10) this.reset(false);
  }
  draw(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
    ctx.fillStyle = `rgba(${this.color},${this.alpha})`;
    ctx.fill();
  }
}

for(let i = 0; i < 140; i++) particles.push(new Particle());

let mouse = {x: W/2, y: H/2};
document.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

function connectParticles(){
  const maxDist = 130;
  for(let a = 0; a < particles.length; a++){
    for(let b = a+1; b < particles.length; b++){
      const dx = particles[a].x - particles[b].x;
      const dy = particles[a].y - particles[b].y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if(dist < maxDist){
        const alpha = .18 * (1 - dist / maxDist);
        ctx.beginPath();
        ctx.moveTo(particles[a].x, particles[a].y);
        ctx.lineTo(particles[b].x, particles[b].y);
        ctx.strokeStyle = `rgba(124,107,255,${alpha})`;
        ctx.lineWidth = .5;
        ctx.stroke();
      }
    }
  }
}

function animBg(){
  ctx.clearRect(0, 0, W, H);
  particles.forEach(p => { p.update(); p.draw(); });
  connectParticles();
  animFrame = requestAnimationFrame(animBg);
}
animBg();

/* ══ 3D tilt on skill cards ══ */
document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    card.style.transform = `perspective(700px) rotateX(${-y*14}deg) rotateY(${x*14}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

/* ══ Highlight card subtle tilt ══ */
document.querySelectorAll('.highlight-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    card.style.transform = `perspective(700px) rotateX(${-y*6}deg) rotateY(${x*6}deg) translateY(-6px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

/* ══ Scroll reveal with stagger ══ */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: .12 });

document.querySelectorAll('.reveal').forEach((el, i) => {
  const parent = el.closest('.skills-grid, .highlights-grid');
  if(parent){
    const siblings = [...parent.querySelectorAll('.reveal')];
    const idx = siblings.indexOf(el);
    el.style.transitionDelay = `${idx * 0.09}s`;
  }
  observer.observe(el);
});

/* ══ Smooth nav active state ══ */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a.nav-item');
const scrollSpy = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){
      navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + e.target.id
          ? 'var(--accent2)' : '';
      });
    }
  });
}, { rootMargin: '-40% 0px -40% 0px' });
sections.forEach(s => scrollSpy.observe(s));