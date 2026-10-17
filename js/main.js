
// De Moda KissOdel — Main Logic
const grid = document.getElementById('collection-grid');
const tabsContainer = document.getElementById('tech-tabs');
const techImage = document.getElementById('tech-image');
const techSpec = document.getElementById('tech-spec');

let activeTechId = 1;

// Render Collections
function renderCollections() {
  grid.innerHTML = COLLECTION_DATA.map(look => `
    <div class="card reveal" onclick="openModal(${look.id})">
      <div class="card-img">
        <img src="${look.image}" alt="${look.title}" loading="lazy">
        <div class="card-overlay"></div>
      </div>
      <div class="card-info">
        <div class="card-number">${look.number} — ${look.category}</div>
        <div class="card-title serif">${look.title}</div>
        <div class="card-sub">${look.subtitle}</div>
      </div>
    </div>
  `).join('');
}

// Render Tech Tabs
function renderTabs() {
  tabsContainer.innerHTML = COLLECTION_DATA.map(look => `
    <button class="tab ${look.id===activeTechId?'active':''}" onclick="setTechTab(${look.id})">Look ${look.number}</button>
  `).join('');
  updateTechContent();
}

function setTechTab(id){
  activeTechId = id;
  renderTabs();
  document.getElementById('techpacks').scrollIntoView({behavior:'smooth'});
}

function updateTechContent(){
  const look = COLLECTION_DATA.find(l=>l.id===activeTechId);
  if(!look) return;
  techImage.src = look.image;
  techSpec.innerHTML = `
    <div class="spec-row"><span>FABRIC</span><span>${look.spec.fabric}</span></div>
    <div class="spec-row"><span>LINING</span><span>${look.spec.lining}</span></div>
    <div class="spec-row"><span>TRIMS</span><span>${look.spec.trims}</span></div>
    <div class="spec-row"><span>STITCH</span><span>${look.spec.stitch}</span></div>
    <div class="spec-row"><span>FINISHING</span><span>${look.spec.finishing}</span></div>
    <div class="spec-row"><span>MEASUREMENTS</span><span>${look.spec.measurements}</span></div>
    <p style="margin-top:24px;font-size:13px;line-height:1.7;opacity:0.7">${look.description}</p>
    <div style="margin-top:16px;display:flex;gap:8px;flex-wrap:wrap">
      ${look.materials.map(m=>`<span style="border:1px solid var(--line);padding:4px 10px;font-size:10px;letter-spacing:0.1em;text-transform:uppercase">${m}</span>`).join('')}
    </div>
  `;
}

function openModal(id){
  const look = COLLECTION_DATA.find(l=>l.id===id);
  document.getElementById('modal').style.display='flex';
  document.getElementById('modal-img').src = look.image;
  document.getElementById('modal-title').innerText = look.title;
  document.getElementById('modal-desc').innerText = look.description;
}
function closeModal(){ document.getElementById('modal').style.display='none'; }

// Reveal on scroll
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in-view') });
},{threshold:0.12});

document.addEventListener('DOMContentLoaded',()=>{
  renderCollections();
  renderTabs();
  setTimeout(()=>{ document.querySelectorAll('.reveal').forEach(el=>observer.observe(el)); },100);
});

// Mobile menu
function toggleMenu(){
  const nav = document.getElementById('nav-links');
  nav.style.display = nav.style.display==='flex' ? 'none' : 'flex';
}
