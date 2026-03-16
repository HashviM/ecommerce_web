// === DATA ===
const catalogItems = [

  // --- KURTIS (5 real photos) ---
  { id: 2, name: 'Mandarin Contrast Panel Kurti', type: 'Straight Cut Kurti', image: 'assests/designs/kurtis/black and white_cotton_collared_kurti.jpg.jpeg', price: '450/- approx', badge: null, neckDesign: 'Mandarin Collar with Vertical Contrast Placket', backDesign: 'Plain Straight Back with Shoulder Dart Finish', sleeveType: 'Elbow Sleeve', fabricOptions: 'Handloom Cotton, Linen Cotton, Khadi Cotton, Cotton Silk Blend', category: 'kurtis' },
  { id: 16, name: 'Minimal Notch Neck Straight Kurti', type: 'Straight Cut Kurti', image: 'assests/designs/kurtis/blue_printed_round_neck_kurti.jpg.jpeg', price: '450/- approx', badge: null, neckDesign: 'Clean Notch Neck (Slit Round Neck)', backDesign: 'Plain Straight Back with Standard Dart Shaping', sleeveType: '3/4 Sleeve', fabricOptions: 'Cotton Cambric, Soft Handloom Cotton, Rayon Cotton Blend, Linen Cotton', category: 'kurtis' },
  { id: 17, name: 'Scalloped Sweetheart Neck Kurti', type: 'Semi-Fit Straight Kurti', image: 'assests/designs/kurtis/blue_scallop_neck_kurti.jpg.jpeg', price: '450/- approx', badge: null, neckDesign: 'Soft Scalloped Sweetheart Neck', backDesign: 'Plain Round Back Neck with Concealed Zip', sleeveType: 'Elbow Sleeve', fabricOptions: 'Printed Cotton, Cotton Silk Blend, Rayon Slub, Soft Linen Blend', category: 'kurtis' },
  { id: 18, name: 'Angled Notch Neck Straight Kurti', type: 'Panel-Fit Straight Kurti', image: 'assests/designs/kurtis/soft_scalloped_kurti.jpg.jpeg', price: '450/- approx', badge: null, neckDesign: 'Asymmetrical Angled Notch Neck', backDesign: 'Plain Round Back Neck with Darts Fit', sleeveType: 'Full Sleeve', fabricOptions: 'Cotton Silk, Soft Cotton Satin, Rayon Blend, Linen Blend', category: 'kurtis' },
  { id: 19, name: 'Soft Notch Keyhole Kurti', type: 'Straight Everyday Kurti', image: 'assests/designs/kurtis/minimal_keyhole_kurti.jpg.jpeg', price: '450/- approx', badge: null, neckDesign: 'Soft Round Notch Neck with Center Keyhole', backDesign: 'Plain Round Back Neck', sleeveType: 'Full Sleeve', fabricOptions: 'Pure Cotton, Rayon, Soft Linen, Cotton Blend', category: 'kurtis' },
  // --- MAXI (3 real photos) ---
  { id: 3, name: 'Cream Floral Maxi', type: '', image: 'assests/designs/maxi/cream_floral_maxi.jpg.png', price: '999/- approx', badge: null, neckDesign: 'Soft Split Round Based V Neck', backDesign: 'High Round Back with Concealed Zip', sleeveType: 'Elbow Sleeve', fabricOptions: 'Cotton Cambric, Cotton Silk, Soft Organza', category: 'maxi' },
  { id: 14, name: 'Blue Printed Flared Maxi', type: '', image: 'assests/designs/maxi/blue_printed_flared_maxi.jpg.png', price: '999/- approx', badge: null, neckDesign: 'Deep Structured V Neck', backDesign: 'Standard Round Back with Concealed Zip', sleeveType: 'Full Sleeve', fabricOptions: 'Rayon, Linen Cotton, Soft Cotton', category: 'maxi' },
  { id: 15, name: 'Red Printed Gathered Maxi', type: '', image: 'assests/designs/maxi/red_printed_gathered_maxi.jpg.png', price: '999/- approx', badge: null, neckDesign: 'Soft V Neck with Gathered Panel', backDesign: 'Elasticated Gather Back with Concealed Zip Option', sleeveType: '3/4 Sleeve', fabricOptions: 'Soft Rayon, Cotton, Light Weight Chiffon', category: 'maxi' },

  // --- SALWAR (9 real photos) ---
  { id: 5, name: 'Layered Panel Collar Salwar Suit', type: '', image: 'assests/designs/salwar/salwar-beige-classic.jpg.png', price: '699/- approx', badge: null, neckDesign: 'Asymmetric Layered Collar Neck', backDesign: 'High Round Back with Concealed Zip', sleeveType: '3/4 Sleeve', pantType: 'Straight Pant', fabricOptions: 'Cotton, Chanderi, Linen, Muslin', category: 'salwar' },
  { id: 6, name: 'Scalloped Boat Neck Salwar Suit', type: '', image: 'assests/designs/salwar/salwar-black-designer.jpg.png', price: '699/- approx', badge: 'New', neckDesign: 'Soft scalloped boat neck', backDesign: 'Classic Round Back with Hook or Zip Closure', sleeveType: 'Full Sleeve', pantType: 'Churidar', fabricOptions: 'Crepe, Georgette, Niddle Cord, Silk', category: 'salwar' },
  { id: 7, name: 'V-Panel Printed Kurta Suit', type: '', image: 'assests/designs/salwar/salwar-blue-printed.jpg.png', price: '699/- approx', badge: null, neckDesign: 'Structured V-Notch Panel Neck', backDesign: 'Straight Panel Back with Concealed Zip', sleeveType: 'Elbow Sleeve', pantType: 'Palazzo', fabricOptions: 'Cotton, Cambric, Rayon, Silk', category: 'salwar' },
  { id: 8, name: 'Straight Embroidered Kurta Suit', type: '', image: 'assests/designs/salwar/salwar-chocolate-brown.jpg.png', price: '699/- approx', badge: null, neckDesign: 'Narrow Embroidered Slit Neck (Kurta Neckline)', backDesign: 'Straight Back with Concealed Zip', sleeveType: 'Elbow Sleeve', pantType: 'Straight Pant', fabricOptions: 'Georgette, Crepe, Pure Silk, Cotton Blend', category: 'salwar' },
  { id: 9, name: 'Scalloped Sweetheart Neck Salwar Suit', type: '', image: 'assests/designs/salwar/salwar-elegant-blue.jpg.png', price: '699/- approx', badge: 'Bestseller', neckDesign: 'Soft Scalloped Sweetheart Neck', backDesign: 'Round Back with Concealed Zip', sleeveType: '3/4 Sleeve', pantType: 'Churidar', fabricOptions: 'Art Silk, Georgette, Crepe, Cotton', category: 'salwar' },
  { id: 10, name: 'Vertical Pintuck Kurta Salwar Suit', type: '', image: 'assests/designs/salwar/salwar-lavender-set.jpg.png', price: '699/- approx', badge: 'New', neckDesign: 'Mandarin Slit Neck with Pintuck Panel', backDesign: 'Panel Back with Concealed Zip', sleeveType: '3/4 Sleeve', pantType: 'Palazzo', fabricOptions: 'Georgette, Chiffon, Crepe, Soft Silk', category: 'salwar' },
  { id: 11, name: 'Keyhole Neck Embroidered Salwar Suit', type: '', image: 'assests/designs/salwar/salwar-mint-embroidered.jpg.png', price: '699/- approx', badge: null, neckDesign: 'Round Neck with Vertical Keyhole Cutouts', backDesign: 'Standard Round Back with Zip Closure', sleeveType: 'Elbow Sleeve', pantType: 'Straight Pant', fabricOptions: 'Cotton, Georgette, Net, Chanderi Silk', category: 'salwar' },
  { id: 12, name: 'Notched Collar Panel Kurta Suit', type: '', image: 'assests/designs/salwar/salwar-pink-festive.jpg.png', price: '699/- approx', badge: 'Premium', neckDesign: 'Soft Notched Collar Neck', backDesign: 'Structured Panel Back with Concealed Zip', sleeveType: '3/4 Sleeve', pantType: 'Churidar', fabricOptions: 'Silk, Georgette, Net, Brocade', category: 'salwar' },
  { id: 13, name: 'Classic Embroidered V-Neck Salwar Suit', type: '', image: 'assests/designs/salwar/salwar-royal-purple.jpg.png', price: '699/- approx', badge: 'Premium', neckDesign: 'Deep Embroidered V Neck', backDesign: 'Round Back with Dori Tie Option', sleeveType: '3/4 Sleeve with Embroidery', pantType: 'Churidar', fabricOptions: 'Pure Silk, Velvet, Brocade, Georgette', category: 'salwar' },
];

// --- PEPLUM TOPS (5 real photos) ---
const readymadeItems = [
  { id: 101, name: 'Blue Floral Peplum Top', image: 'assests/designs/peplum tops/blue_floral_peplum_top.jpg.jpeg', price: 499, oldPrice: 699, rating: '★★★★★', tag: 'Sale', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: 102, name: 'Blue Printed Peplum Top', image: 'assests/designs/peplum tops/blue_printed_peplum_top.jpg.jpeg', price: 499, oldPrice: 699, rating: '★★★★☆', tag: null, sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: 103, name: 'Floral Gathered Top', image: 'assests/designs/peplum tops/floral_gathered_top.jpg.jpeg', price: 499, oldPrice: 699, rating: '★★★★★', tag: 'Sale', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: 104, name: 'Red Printed Top', image: 'assests/designs/peplum tops/red_printed_top.jpg.jpeg', price: 499, oldPrice: 699, rating: '★★★★★', tag: null, sizes: ['XS', 'S', 'M', 'L', 'XL'] },
  { id: 105, name: 'White Draped Neck Flutter Top', image: 'assests/designs/peplum tops/white_draped_neck_flutter_top.jpg.jpeg', price: 499, oldPrice: 699, rating: '★★★★☆', tag: 'New', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
];

let cart = [];

// === NAVBAR SCROLL ===
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

// === SCROLL REVEAL ===
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// === CATALOG ===
function renderCatalog(filter = 'all') {
  const grid = document.getElementById('catalogGrid');
  const filtered = filter === 'all' ? catalogItems : catalogItems.filter(i => i.category === filter);
  grid.innerHTML = filtered.map(item => `
    <div class="catalog-card" onclick="openModal(${item.id})">
      <div class="catalog-img">
        ${item.image
      ? `<img src="${item.image}" alt="${item.name}" class="catalog-photo">`
      : `<div class="catalog-img-inner ${item.fabric}">
               <div class="fabric-overlay-pattern"></div>
               <span style="font-size:4rem;position:relative;z-index:1">${item.emoji}</span>
             </div>`
    }
        ${item.badge ? `<div class="tag-badge">${item.badge}</div>` : ''}
        <div class="catalog-overlay"></div>
        <button class="catalog-overlay-btn">View Details</button>
      </div>
      <div class="catalog-info">
        <div class="catalog-name">${item.name}</div>
        <div class="catalog-meta">
          <span class="catalog-type">${item.type}</span>
          <span class="catalog-price">${item.price}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function filterCatalog(cat, btn) {
  document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderCatalog(cat);
}

renderCatalog();

// === READY MADE ===
function renderReadymade() {
  const grid = document.getElementById('readymadeGrid');
  grid.innerHTML = readymadeItems.map(item => `
    <div class="rm-card">
      <div class="rm-img-wrap">
        <img src="${item.image}" alt="${item.name}" class="rm-photo">
        ${item.tag ? `<div class="rm-tag">${item.tag}</div>` : ''}
      </div>
      <div class="rm-body">
        <div class="rm-stars">${item.rating}</div>
        <div class="rm-name">${item.name}</div>
        <select class="size-select">
          ${item.sizes.map(s => `<option>${s}</option>`).join('')}
        </select>
        <div class="rm-price-row">
          <span>
            <span class="rm-price">₹${item.price.toLocaleString()}</span>
            ${item.oldPrice ? `<span class="rm-old-price">₹${item.oldPrice.toLocaleString()}</span>` : ''}
          </span>
          <button class="add-to-cart" onclick="addToCart(${item.id})">Add to Cart</button>
        </div>
      </div>
    </div>
  `).join('');
}
renderReadymade();

// === CART ===
function addToCart(id) {
  const item = readymadeItems.find(i => i.id === id);
  if (!item) return;
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty = (existing.qty || 1) + 1;
  else cart.push({ ...item, qty: 1 });
  updateCartUI();
  showToast(`${item.name} added to cart`);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartUI();
  renderCartDrawer();
}

function updateCartUI() {
  const count = cart.reduce((s, i) => s + (i.qty || 1), 0);
  document.getElementById('cartCount').textContent = count;
  renderCartDrawer();
}

function renderCartDrawer() {
  const el = document.getElementById('cartItems');
  if (cart.length === 0) {
    el.innerHTML = '<div class="empty-cart">Your cart is beautifully empty</div>';
    document.getElementById('cartTotal').textContent = '₹0';
    return;
  }
  el.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">
        ${item.image
          ? `<img src="${item.image}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover;object-position:top;">`
          : item.emoji || '🛍'}
      </div>
      <div>
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-detail">Qty: ${item.qty || 1}</div>
        <button class="cart-remove" onclick="removeFromCart(${item.id})">Remove</button>
      </div>
      <div class="cart-item-price">₹${(item.price * (item.qty || 1)).toLocaleString()}</div>
    </div>
  `).join('');
  const total = cart.reduce((s, i) => s + i.price * (i.qty || 1), 0);
  document.getElementById('cartTotal').textContent = '₹' + total.toLocaleString();
}

function openCart() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
}
function closeCart() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
}
function checkout() {
  if (cart.length === 0) { showToast('Your cart is empty'); return; }
  showToast('Redirecting to checkout...');
  setTimeout(() => {
    cart = [];
    updateCartUI();
    closeCart();
    showToast('Order placed! We will contact you soon.');
  }, 1500);
}

// === MODAL ===
function openModal(id) {
  const item = catalogItems.find(i => i.id === id);
  if (!item) return;

  const imagePanel = item.image
    ? `<img src="${item.image}" alt="${item.name}" class="modal-photo">`
    : `<div class="modal-fabric-preview ${item.fabric}">
         <div class="fabric-overlay-pattern"></div>
         <span style="font-size:5rem">${item.emoji}</span>
       </div>`;

  const badges = item.badge ? `<span class="modal-badge">${item.badge}</span>` : '';

  document.getElementById('modalContent').innerHTML = `
    <div class="modal-layout">
      <div class="modal-image-col">
        ${imagePanel}
      </div>
      <div class="modal-info-col">
        <div class="modal-subtitle">${item.type} ${badges}</div>
        <div class="modal-title">${item.name}</div>
        <div class="modal-price">${item.price}</div>
        <div class="modal-divider"></div>
        <div class="modal-detail"><span>Neck Design</span><span>${item.neckDesign || '—'}</span></div>
        <div class="modal-detail"><span>Back Design</span><span>${item.backDesign || '—'}</span></div>
        <div class="modal-detail"><span>Sleeve</span><span>${item.sleeveType || '—'}</span></div>
        ${item.category !== 'maxi' && item.category !== 'kurtis' ? `<div class="modal-detail"><span>Pant Style</span><span>${item.pantType || '—'}</span></div>` : ''}
        <div class="modal-detail"><span>Fabric Options</span><span>${item.fabricOptions || 'Silk, Cotton, Georgette, Linen'}</span></div>
        <div class="modal-detail"><span>Delivery Time</span><span>7–21 days</span></div>
        <p class="modal-desc">All designs are custom stitched to your exact measurements. Fabric, colour, and finishing details are fully customisable. Pricing varies based on fabric and embroidery selection.</p>
        <div class="modal-actions">
          <button class="btn-primary" style="border:none;" onclick="orderThis('${item.name}')">Order This Design</button>
          <button class="btn-outline" onclick="closeModal()">Continue Browsing</button>
        </div>
      </div>
    </div>
  `;
  document.getElementById('productModal').classList.add('open');
}
function closeModal() {
  document.getElementById('productModal').classList.remove('open');
}
function orderThis(name) {
  closeModal();
  document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
  showToast(`Ordering ${name} — fill in your details below`);
}
document.getElementById('productModal').addEventListener('click', e => {
  if (e.target === document.getElementById('productModal')) closeModal();
});

// === MEASUREMENTS ===
function setUnit(unit, btn) {
  document.querySelectorAll('.unit-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const placeholders = unit === 'cm'
    ? ['96 cm', '80 cm', '98 cm', '42 cm', '60 cm', '78 cm']
    : ['38 in', '32 in', '40 in', '17 in', '24 in', '30 in'];
  document.querySelectorAll('#measurements input[type=number]').forEach((el, i) => {
    el.placeholder = `e.g. ${placeholders[i]}`;
  });
}

function saveMeasurements() {
  const vals = ['m-chest', 'm-waist', 'm-hips', 'm-shoulder', 'm-sleeve', 'm-inseam']
    .map(id => document.getElementById(id).value);
  if (vals.some(v => !v)) { showToast('Please fill all measurement fields'); return; }
  showToast('Measurements saved! We will use these for your order.');
}

// === FABRIC PICKER ===
function selectFabric(el, name) {
  document.querySelectorAll('.fabric-swatch').forEach(s => s.classList.remove('selected'));
  el.classList.add('selected');
  document.getElementById('selectedFabric').value = name;
  document.getElementById('fabricLabel').textContent = name;
}

// === ORDER FORM ===
function submitOrder(e) {
  e.preventDefault();
  showToast('Order request received! We will contact you within 24 hours.');
  e.target.reset();
  document.querySelectorAll('.fabric-swatch').forEach(s => s.classList.remove('selected'));
  document.getElementById('fabricLabel').textContent = '';
}

// === NEWSLETTER ===
function subscribeNewsletter() {
  const email = document.getElementById('nlEmail').value;
  if (!email || !email.includes('@')) { showToast('Please enter a valid email'); return; }
  showToast('Subscribed! Welcome to the Cute Fashion family.');
  document.getElementById('nlEmail').value = '';
}

// === TOAST ===
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// === MOBILE MENU ===
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  if (links.style.display === 'flex') {
    links.style.display = 'none';
  } else {
    links.style.display = 'flex';
    links.style.flexDirection = 'column';
    links.style.position = 'fixed';
    links.style.top = '70px';
    links.style.left = '0';
    links.style.right = '0';
    links.style.background = 'rgba(245,240,232,0.98)';
    links.style.padding = '2rem';
    links.style.gap = '1.5rem';
    links.style.borderBottom = '1px solid rgba(201,168,76,0.2)';
    links.style.zIndex = '999';
  }
}

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    const links = document.querySelector('.nav-links');
    if (window.innerWidth < 900) links.style.display = 'none';
  });
});
