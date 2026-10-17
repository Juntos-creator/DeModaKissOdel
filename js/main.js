// De Moda KissOdel — Main Logic adaptada para múltiples vistas de materiales e ilustraciones
const grid = document.getElementById('collection-grid');
const tabsContainer = document.getElementById('tech-tabs');
const techImage = document.getElementById('tech-image');
const techSpec = document.getElementById('tech-spec');

let activeTechId = 1;

// Render Collections (Muestra frente y permite ver detalles)
function renderCollections() {
  if (!grid) return;
  grid.innerHTML = COLLECTION_DATA.map(look => `
    <div class="card reveal" onclick="openModal(${look.id})">
      <div class="card-img" style="position:relative;">
        <img src="${look.image}" alt="${look.title}" loading="lazy" style="width:100%; height:100%; object-fit:cover;">
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
  if (!tabsContainer) return;
  tabsContainer.innerHTML = COLLECTION_DATA.map(look => `
    <button class="tab ${look.id===activeTechId?'active':''}" onclick="setTechTab(${look.id})">Look ${look.number}</button>
  `).join('');
  updateTechContent();
}

function setTechTab(id){
  activeTechId = id;
  renderTabs();
  const techElem = document.getElementById('techpacks');
  if(techElem) techElem.scrollIntoView({behavior:'smooth'});
}

// Actualiza el contenido técnico integrando Ilustraciones y Materiales visuales
function updateTechContent(){
  const look = COLLECTION_DATA.find(l=>l.id===activeTechId);
  if(!look) return;
  
  if(techImage) techImage.src = look.image;
  
  if(techSpec) {
    techSpec.innerHTML = `
      <div class="spec-row"><span>FABRIC</span><span>${look.spec.fabric}</span></div>
      <div class="spec-row"><span>LINING</span><span>${look.spec.lining}</span></div>
      <div class="spec-row"><span>TRIMS</span><span>${look.spec.trims}</span></div>
      <div class="spec-row"><span>STITCH</span><span>${look.spec.stitch}</span></div>
      <div class="spec-row"><span>FINISHING</span><span>${look.spec.finishing}</span></div>
      <div class="spec-row"><span>MEASUREMENTS</span><span>${look.spec.measurements}</span></div>
      
      <p style="margin-top:20px;font-size:13px;line-height:1.7;opacity:0.8">${look.description}</p>
      
      <!-- Sección de Ilustraciones (Acuarela y Lápiz) -->
      <div style="margin-top:24px;">
        <p class="sans" style="font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:var(--gold);margin-bottom:8px;">Ilustraciones y Bocetos</p>
        <div style="display:flex;gap:12px;flex-wrap:wrap;">
          ${look.illustrations.map(ill => `<img src="${ill}" alt="Ilustración Look" style="width:100px;height:130px;object-fit:cover;border:1px solid var(--line);border-radius:4px;">`).join('')}
        </div>
      </div>

      <!-- Sección de Materiales visuales -->
      <div style="margin-top:24px;">
        <p class="sans" style="font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:var(--gold);margin-bottom:8px;">Materiales y Texturas</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:12px;">
          ${look.materialsList.map(mat => `
            <div style="border:1px solid var(--line);padding:6px;background:#fff;text-align:center;">
              <img src="${mat.image}" alt="${mat.name}" style="width:100%;height:80px;object-fit:cover;margin-bottom:4px;">
              <span style="font-size:9px;display:block;line-height:1.2;color:var(--black);">${mat.name}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
}

// Modal interactivo mejorado para ver Frente y Espalda
function openModal(id){
  const look = COLLECTION_DATA.find(l=>l.id===id);
  const modal = document.getElementById('modal');
  if(!modal) return;
  
  modal.style.display='flex';
  
  // Renderizamos ambas vistas (Frente y Espalda) en el modal
  const modalContent = document.getElementById('modal-content-area');
  if(modalContent) {
    modalContent.innerHTML = `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
        <div>
          <p style="font-size:11px;text-transform:uppercase;margin-bottom:6px;letter-spacing:0.1em;text-align:center;">Vista Frontal</p>
          <img src="${look.image}" style="width:100%;height:350px;object-fit:cover;border:1px solid var(--line);">
        </div>
        <div>
          <p style="font-size:11px;text-transform:uppercase;margin-bottom:6px;letter-spacing:0.1em;text-align:center;">Vista de Espalda</p>
          <img src="${look.secondaryImage}" style="width:100%;height:350px;object-fit:cover;border:1px solid var(--line);">
        </div>
      </div>
      <h3 class="serif" style="font-size:22px;margin-top:16px;">${look.title}</h3>
      <p class="sans" style="margin-top:8px;font-size:13px;line-height:1.6;opacity:0.7">${look.description}</p>
    `;
  }
}

function closeModal(){ 
  const modal = document.getElementById('modal');
  if(modal) modal.style.display='none'; 
}

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
  if(nav) nav.style.display = nav.style.display==='flex' ? 'none' : 'flex';
}