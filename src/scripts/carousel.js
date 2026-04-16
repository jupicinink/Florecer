/**
 * Lightweight carousel with dots, keyboard support and drag/swipe.
 */
(function(){
  function initCarousel(root){
    const track = root.querySelector('.carousel-track');
    const items = Array.from(track.children);
    const wrap = root.parentElement;
    const prev = wrap.querySelector('.carousel-btn.prev');
    const next = wrap.querySelector('.carousel-btn.next');
    const dotsContainer = wrap.querySelector('.carousel-dots');
    let index = 0;
    let itemWidth = items[0].getBoundingClientRect().width + parseFloat(getComputedStyle(track).gap || 8);
    let autoplay = root.dataset.autoplay === 'true';
    let interval = Number(root.dataset.interval) || 4000;
    let timer = null;

    const visibleCount = () => {
      const w = root.getBoundingClientRect().width;
      return Math.max(1, Math.floor(w / itemWidth) || 1);
    };

    function update() {
      itemWidth = items[0].getBoundingClientRect().width + parseFloat(getComputedStyle(track).gap || 8);
      index = Math.max(0, Math.min(index, items.length - visibleCount()));
      track.style.transform = `translateX(${ -index * itemWidth }px)`;
      updateDots();
      // update aria on slides
      items.forEach((it, i) => it.setAttribute('aria-hidden', (i < index || i >= index + visibleCount()) ? 'true' : 'false'));
    }

    function go(i){
      index = i;
      update();
    }

    // create dots
    function makeDots(){
      if(!dotsContainer) return;
      dotsContainer.innerHTML = '';
      const pages = Math.max(1, items.length - visibleCount() + 1);
      for(let i=0;i<pages;i++){
        const btn = document.createElement('button');
        btn.className = 'carousel-dot';
        btn.type = 'button';
        btn.setAttribute('aria-selected', i===index ? 'true' : 'false');
        btn.setAttribute('role','tab');
        btn.setAttribute('aria-controls','');
        btn.addEventListener('click', ()=> { go(i); restart(); });
        dotsContainer.appendChild(btn);
      }
    }

    function updateDots(){
      if(!dotsContainer) return;
      const dots = Array.from(dotsContainer.children);
      dots.forEach((d,i)=> d.setAttribute('aria-selected', i===index ? 'true' : 'false'));
    }

    // Prev/Next
    if(prev) prev.addEventListener('click', ()=> { go(Math.max(0,index-1)); restart(); });
    if(next) next.addEventListener('click', ()=> { go(Math.min(items.length - visibleCount(), index+1)); restart(); });

    // Autoplay
    function start() {
      if(!autoplay) return;
      stop();
      timer = setInterval(()=> {
        if(index >= items.length - visibleCount()) index = 0;
        else index++;
        update();
      }, interval);
    }
    function stop(){ if(timer) clearInterval(timer); timer = null; }
    function restart(){ stop(); start(); }

    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', start);

    // Drag / touch support
    let pos = {startX:0, lastX:0, dragging:false};
    track.addEventListener('pointerdown', (e)=>{
      pos.startX = e.clientX;
      pos.lastX = e.clientX;
      pos.dragging = true;
      track.style.transition = 'none';
      track.setPointerCapture(e.pointerId);
      stop();
    });
    track.addEventListener('pointermove', (e)=>{
      if(!pos.dragging) return;
      const current = -index * itemWidth;
      track.style.transform = `translateX(${current + (e.clientX - pos.startX)}px)`;
    });
    track.addEventListener('pointerup', (e)=>{
      if(!pos.dragging) return;
      pos.dragging = false;
      track.style.transition = '';
      const drag = e.clientX - pos.startX;
      if(Math.abs(drag) > (itemWidth * 0.25)) {
        if(drag < 0) go(index + 1); else go(index - 1);
      } else update();
      start();
    });
    track.addEventListener('pointercancel', ()=> { if(pos.dragging){ pos.dragging=false; update(); start(); } });

    // keyboard support: left/right arrows when carousel focused
    root.addEventListener('keydown', (e) => {
      if(e.key === 'ArrowRight'){ e.preventDefault(); go(Math.min(items.length - visibleCount(), index+1)); restart(); }
      if(e.key === 'ArrowLeft'){ e.preventDefault(); go(Math.max(0, index-1)); restart(); }
    });

    // recalc on resize
    window.addEventListener('resize', () => {
      setTimeout(()=> { makeDots(); update(); }, 120);
    });

    // init
    setTimeout(()=> {
      makeDots();
      update();
      start();
    }, 60);
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.carousel').forEach(initCarousel);
  });
})();