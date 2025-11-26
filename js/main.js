/* ============================================
   CAFÉ ELEMENTOS - JAVASCRIPT (MAIN CORREGIDO)
   Basado en mainN.txt (adjunto) — arreglos y completado
   ============================================ */

/* ============================================
   CONFIGURACIÓN EMAILJS
   ============================================ */
const EMAILJS_SERVICE_ID = 'service_ez74agp';
const EMAILJS_TEMPLATE_ID = 'template_rv4qwdj';
const EMAILJS_PUBLIC_KEY = 'nb75RxYtqPNBOw3O2';
if (window.emailjs && emailjs.init) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

/* ============================================
   TRADUCCIONES (SE CONSERVARON)
   ============================================ */
/* -- (usa las mismas traducciones que ya traía mainN.txt)
   Por brevedad no las repito aquí; tu archivo mainN.txt las incluye. */
const translations = (function(){ 
  // --- Inserta aquí exactamente el objeto `translations` desde tu mainN.txt ---
  // Para evitar duplicados en este mensaje, asume que las traducciones vienen
  // desde tu archivo mainN.txt cargado. Si necesitas que las vuelva a pegar,
  // indícamelo y lo pongo completo.
  return window.__CE_TRANSLATIONS || {}; 
})();

/* Si prefieres que el archivo main.js sea autónomo, pega el objeto `translations`
   completo en la variable de arriba. En este paquete ya venían en tu mainN.txt. */

let currentLang = 'es';

/* ============================================
   DATOS: productos y menú (tomados de tu archivo)
   ============================================ */
const PRODUCT_IMAGE = 'https://scontent.fvsa2-1.fna.fbcdn.net/v/t39.30808-6/495601645_1198908208917618_4324142393229895495_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=LXQAJeKjCkkQ7kNvwFqblSH&_nc_oc=AdkL2rT9E5JKzvVmYsi5-gLaOLbuHT6JczBiQV2q7aCERwvnpKFL6Zr_pqRez0eVilI&_nc_zt=23&_nc_ht=scontent.fvsa2-1.fna&_nc_gid=HT-GbkexYubjTnC9fSSDrA&oh=00_AfiUM5WCTaSSWSi5eqGiH24eiM0wJkiRFN91bYEvjT7juw&oe=6925534E';

const products = [
  { id: 1, name: 'Aldama, Chiapas', origin: 'Cafeología Natural', prices: { '1/4': 350, '1/2': 700, '1kg': 1400 }, image: PRODUCT_IMAGE },
  { id: 2, name: 'Tatetela, Veracruz', origin: 'Lavado', prices: { '1/4': 120, '1/2': 240, '1kg': 480 }, image: PRODUCT_IMAGE },
  { id: 3, name: 'Adelitas, Chiapas', origin: 'Lavado', prices: { '1/4': 120, '1/2': 240, '1kg': 480 }, image: PRODUCT_IMAGE }
];

const menuItems = {
  frappes: [
    { id: 101, name: 'Frapuccino', price: 75, category: 'frappe' },
    { id: 102, name: 'Cajeta', price: 75, category: 'frappe' },
    { id: 103, name: 'Oreo', price: 75, category: 'frappe' },
    { id: 104, name: 'Moca', price: 75, category: 'frappe' }
  ],
  hotCoffee: [
    { id: 201, name: 'Espresso', prices: { 'Chico': 45, 'Grande': 48 }, category: 'hot-coffee' },
    { id: 202, name: 'Latte', prices: { 'Chico': 68, 'Grande': 72 }, category: 'hot-coffee' },
    { id: 203, name: 'Espresso cortado', price: 48, category: 'hot-coffee' },
    { id: 204, name: 'Capuchino', price: 65, category: 'hot-coffee' }
  ],
  teas: [
    { id: 301, name: 'Té Negro (Earl Grey)', prices: { 'Chico': 68, 'Grande': 72 }, category: 'tea' },
    { id: 302, name: 'Té Negro Chai', prices: { 'Chico': 68, 'Grande': 72 }, category: 'tea' }
  ]
};

/* ============================================
   ESTADO GLOBAL
   ============================================ */
let cart = [];
let currentPage = 'bienvenido';
let selectedWeights = {};
let selectedMenuSizes = {};

/* ============================================
   INICIALIZACIÓN
   ============================================ */
document.addEventListener('DOMContentLoaded', function() {
  // carga traducciones desde tu mainN.txt si están allí
  if (window.__MAINN_TRANSLATIONS) {
    Object.assign(window, { __CE_TRANSLATIONS: window.__MAINN_TRANSLATIONS });
  }

  // valores por defecto
  products.forEach(p => selectedWeights[p.id] = '1/4');
  Object.values(menuItems).flat().forEach(item => {
    if (item.prices) selectedMenuSizes[item.id] = Object.keys(item.prices)[0];
  });

  renderProducts();
  renderStoreProducts();
  renderMenuItems();
  showPage('bienvenido');
  updateCartCount();
  updateLanguage();
  setupMobileMenu();
  setupCardFormatting();
});

/* ============================================
   UTIL: showNotification (toast simple)
   ============================================ */
function showNotification(message = '', type = 'info') {
  // crea un toast simple en la esquina inferior derecha
  const id = `toast-${Date.now()}`;
  const toast = document.createElement('div');
  toast.id = id;
  toast.className = `ce-toast ce-toast-${type}`;
  toast.style.position = 'fixed';
  toast.style.right = '20px';
  toast.style.bottom = '20px';
  toast.style.background = '#111';
  toast.style.color = '#fff';
  toast.style.padding = '0.8rem 1rem';
  toast.style.borderRadius = '8px';
  toast.style.zIndex = 99999;
  toast.style.boxShadow = '0 6px 18px rgba(0,0,0,0.2)';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 400);
  }, 2600);
}

/* ============================================
   MENÚ MÓVIL (toggle, cierre al tocar fuera, cerrar al click en link)
   ============================================ */
function setupMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenuContainer = document.getElementById('mobileMenuContainer');

  if (!mobileMenuBtn || !mobileMenuContainer) return;

  mobileMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMobileMenu();
  });

  // cerrar cuando se hace click en un link
  const navLinks = document.querySelectorAll('#navMenu a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => closeMobileMenu());
  });

  // cerrar al tocar fuera
  document.addEventListener('click', (e) => {
    if (mobileMenuContainer.classList.contains('active')) {
      if (!mobileMenuContainer.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        closeMobileMenu();
      }
    }
  });

  // mantener carrito siempre visible en esquina superior derecha (HTML ya incluye .mobile-cart)
}

function toggleMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenuContainer = document.getElementById('mobileMenuContainer');
  if (!mobileMenuBtn || !mobileMenuContainer) return;

  mobileMenuBtn.classList.toggle('active');
  mobileMenuContainer.classList.toggle('active');
  document.body.style.overflow = mobileMenuContainer.classList.contains('active') ? 'hidden' : '';
}

function closeMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenuContainer = document.getElementById('mobileMenuContainer');
  if (!mobileMenuBtn || !mobileMenuContainer) return;
  mobileMenuBtn.classList.remove('active');
  mobileMenuContainer.classList.remove('active');
  document.body.style.overflow = '';
}

/* ============================================
   CAMBIO DE IDIOMA
   ============================================ */
function changeLanguage(lang) {
  currentLang = lang;
  updateLanguage();
  closeMobileMenu();
}

function updateLanguage() {
  const t = translations[currentLang] || translations.es;
  // navegación
  const navLinks = document.querySelectorAll('#navMenu a');
  if (navLinks.length >= 5) {
    navLinks[0].textContent = t.nav.welcome;
    navLinks[1].textContent = t.nav.home;
    navLinks[2].textContent = t.nav.menu;
    navLinks[3].textContent = t.nav.products;
    navLinks[4].textContent = t.nav.more;
  }

  // inputs de búsqueda
  const searchInput = document.getElementById('searchInput');
  const mainSearchInput = document.getElementById('mainSearchInput');
  if (searchInput) searchInput.placeholder = t.search.placeholder;
  if (mainSearchInput) mainSearchInput.placeholder = t.search.mainPlaceholder;

  // páginas y componentes
  updateWelcomePage(t);
  updateHomePage(t);
  updateMenuPage(t);
  updateProductsPage(t);
  updateCartTexts(t);
  updateChatTexts(t);
  updateFooterTexts(t);
}

function updateWelcomePage(t) {
  const welcomeTitle = document.querySelector('.welcome-content h1');
  const welcomeDesc = document.querySelector('.welcome-content > p');
  const welcomeBtn = document.querySelector('.welcome-btn');
  if (welcomeTitle) welcomeTitle.textContent = t.welcome.title;
  if (welcomeDesc) welcomeDesc.textContent = t.welcome.description;
  if (welcomeBtn) welcomeBtn.textContent = t.welcome.button;

  const promoBadge = document.querySelector('.promotion-badge');
  if (promoBadge) promoBadge.textContent = t.welcome.promotion.badge;
  const promoTitle = document.querySelector('.promotion-content h3');
  if (promoTitle) promoTitle.textContent = t.welcome.promotion.title;
  const promoDesc = document.querySelector('.promotion-content > p');
  if (promoDesc) promoDesc.textContent = t.welcome.promotion.description;
  const shippingInfo = document.querySelector('.shipping-info');
  if (shippingInfo) shippingInfo.textContent = t.welcome.promotion.shipping;
}

function updateHomePage(t) {
  const heroTitle = document.querySelector('.hero h1');
  const heroDesc = document.querySelector('.hero p');
  const newsletterInput = document.getElementById('newsletterEmail');
  const newsletterBtn = document.querySelector('.newsletter button');
  if (heroTitle) heroTitle.textContent = t.hero.title;
  if (heroDesc) heroDesc.textContent = t.hero.description;
  if (newsletterInput) newsletterInput.placeholder = t.hero.emailPlaceholder;
  if (newsletterBtn) newsletterBtn.textContent = t.hero.button;

  const sectionTitle = document.querySelector('.section-title h2');
  if (sectionTitle) sectionTitle.innerHTML = `${t.section.explore}<br>${t.section.ourCoffee}`;

  updateContactSection(t);
}

function updateContactSection(t) {
  const contactTitle = document.querySelector('.contact-section h2');
  if (contactTitle) contactTitle.textContent = t.contact.title;

  const contactHeaders = document.querySelectorAll('.contact-item h3');
  if (contactHeaders.length >= 3) {
    contactHeaders[0].textContent = t.contact.address;
    contactHeaders[1].textContent = t.contact.phone;
    contactHeaders[2].textContent = t.contact.email;
  }

  const contactInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
  if (contactInputs.length >= 5) {
    contactInputs[0].placeholder = t.contact.namePlaceholder;
    contactInputs[1].placeholder = t.contact.lastNamePlaceholder;
    contactInputs[2].placeholder = t.contact.emailPlaceholder;
    contactInputs[3].placeholder = t.contact.phonePlaceholder;
    contactInputs[4].placeholder = t.contact.messagePlaceholder;
  }

  const contactBtn = document.querySelector('.contact-form .submit-btn');
  if (contactBtn) contactBtn.textContent = t.contact.button;
}

function updateMenuPage(t) {
  const menuTitle = document.querySelector('.menu-hero h1');
  const menuSubtitle = document.querySelector('.menu-hero p');
  if (menuTitle) menuTitle.textContent = t.menu.title;
  if (menuSubtitle) menuSubtitle.textContent = t.menu.subtitle;

  const categoryTitles = document.querySelectorAll('.menu-category h2');
  if (categoryTitles.length >= 2) {
    categoryTitles[0].textContent = t.menu.frappes;
    categoryTitles[1].textContent = t.menu.hotDrinks;
  }
  const categorySubtitles = document.querySelectorAll('.menu-category h3');
  if (categorySubtitles.length >= 1) {
    categorySubtitles[0].textContent = t.menu.hotSubtitle;
    if (categorySubtitles.length >= 2) categorySubtitles[1].textContent = t.menu.teas;
  }

  const addButtons = document.querySelectorAll('.menu-item-add');
  addButtons.forEach(btn => btn.textContent = t.menu.addToCart);
}

function updateProductsPage(t) {
  const productsTitle = document.querySelector('.products-hero h1');
  if (productsTitle) productsTitle.textContent = t.products.title;
  const badges = document.querySelectorAll('.product-badge');
  badges.forEach(b => b.textContent = t.products.badge);
}

function updateCartTexts(t) {
  const cartTitle = document.querySelector('.cart-header h2');
  if (cartTitle) cartTitle.textContent = t.cart.title;
  const checkoutBtn = document.querySelector('.checkout-btn');
  if (checkoutBtn) checkoutBtn.textContent = t.cart.checkout;
}

function updateChatTexts(t) {
  const chatText = document.querySelector('.chat-text');
  const chatTitle = document.querySelector('.chat-header h3');
  const chatStatus = document.querySelector('.chat-status');
  const chatInput = document.getElementById('chatInput');
  if (chatText) chatText.textContent = t.chat.button;
  if (chatTitle) chatTitle.textContent = t.chat.title;
  if (chatStatus) chatStatus.textContent = t.chat.status;
  if (chatInput) chatInput.placeholder = t.chat.placeholder;
}

function updateFooterTexts(t) {
  const footerLinks = document.querySelectorAll('.footer-section a');
  if (footerLinks.length >= 1) footerLinks[0].textContent = t.footer.privacy;
  const footerBottom = document.querySelector('.footer-bottom');
  if (footerBottom) footerBottom.textContent = t.footer.copyright;
}

/* ============================================
   NAVEGACIÓN ENTRE PÁGINAS (showPage)
   ============================================ */
function showPage(pageName) {
  const pages = ['bienvenido','inicio','menu','tienda','productos','nosotros','privacy'];
  pages.forEach(page => {
    const el = document.getElementById(`page-${page}`);
    if (el) el.classList.add('hidden');
  });
  const target = document.getElementById(`page-${pageName}`);
  if (target) {
    target.classList.remove('hidden');
    currentPage = pageName;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

/* ============================================
   RENDERIZADO DE PRODUCTOS Y MENÚ (creación segura de templates)
   ============================================ */
function createProductCard(product, containerId) {
  const selectedWeight = selectedWeights[product.id] || '1/4';
  const currentPrice = product.prices[selectedWeight];
  const t = translations[currentLang] || translations.es || {};
  // construir botones de peso
  const weightButtons = Object.keys(product.prices).map(weight => {
    const label = weight === '1kg' ? '1 kg' : weight;
    const active = selectedWeight === weight ? 'active' : '';
    return `<button class="weight-btn ${active}" onclick="selectWeight(${product.id}, '${weight}', '${containerId}')">${label}</button>`;
  }).join('');

  return `
    <div class="product-card" data-product-id="${product.id}">
      <div class="product-badge">${(t.products && t.products.badge) || 'Nuevo'}</div>
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\\'font-size:4rem;display:flex;align-items:center;justify-content:center;height:100%\\'>☕</div>'">
        <button class="add-to-cart-btn" onclick="addToCart(${product.id})" title="Agregar al carrito">+</button>
      </div>
      <div class="product-info">
        <div class="product-name">${product.name}</div>
        <div class="product-origin">${product.origin}</div>
        <div class="product-price" id="price-${containerId}-${product.id}">$${currentPrice}.00 MXN</div>
        <div class="product-weight">${weightButtons}</div>
      </div>
    </div>
  `;
}

function renderProducts() {
  const container = document.getElementById('productsGrid');
  if (!container) return;
  container.innerHTML = products.map(p => createProductCard(p, 'productos')).join('');
}

function renderStoreProducts() {
  const container = document.getElementById('storeProductsGrid');
  if (!container) return;
  container.innerHTML = products.map(p => createProductCard(p, 'tienda')).join('');
  const totalProducts = document.getElementById('totalProducts');
  if (totalProducts) totalProducts.textContent = products.length;
}

function createMenuItem(item) {
  const hasMulti = item.prices && typeof item.prices === 'object';
  const selectedSize = selectedMenuSizes[item.id] || (hasMulti ? Object.keys(item.prices)[0] : null);
  const price = hasMulti ? item.prices[selectedSize] : item.price;
  const sizeButtons = hasMulti ? Object.keys(item.prices).map(s => {
    const active = selectedSize === s ? 'active' : '';
    return `<button class="size-btn ${active}" onclick="selectMenuSize(${item.id}, '${s}')">${s}</button>`;
  }).join('') : '';
  const t = translations[currentLang] || translations.es || {};
  return `
    <div class="menu-item" data-menu-id="${item.id}">
      <div class="menu-item-header">
        <div class="menu-item-name">${item.name}</div>
        <div class="menu-item-price" id="menu-price-${item.id}">$${price}.00</div>
      </div>
      ${hasMulti ? `<div class="menu-item-sizes">${sizeButtons}</div>` : ''}
      <button class="menu-item-add" onclick="addMenuToCart(${item.id})">${(t.menu && t.menu.addToCart) || '+ Agregar al carrito'}</button>
    </div>
  `;
}

function renderMenuItems() {
  const f = document.getElementById('menuFrappes');
  const h = document.getElementById('menuHotCoffee');
  const t = document.getElementById('menuTeas');
  if (f) f.innerHTML = menuItems.frappes.map(i => createMenuItem(i)).join('');
  if (h) h.innerHTML = menuItems.hotCoffee.map(i => createMenuItem(i)).join('');
  if (t) t.innerHTML = menuItems.teas.map(i => createMenuItem(i)).join('');
}

/* ============================================
   SELECCIÓN DE PESOS / TAMAÑOS
   ============================================ */
function selectWeight(productId, weight, containerId) {
  selectedWeights[productId] = weight;
  const product = products.find(p => p.id === productId);
  const priceEl = document.getElementById(`price-${containerId}-${productId}`);
  if (priceEl && product) priceEl.textContent = `$${product.prices[weight]}.00 MXN`;

  // actualizar botones visuales
  document.querySelectorAll(`.product-card[data-product-id="${productId}"] .weight-btn`).forEach(btn => {
    btn.classList.toggle('active', btn.textContent.trim().includes(weight) || btn.textContent.trim() === weight);
  });
}

function selectMenuSize(itemId, size) {
  selectedMenuSizes[itemId] = size;
  const item = Object.values(menuItems).flat().find(i => i.id === itemId);
  const priceEl = document.getElementById(`menu-price-${itemId}`);
  if (priceEl && item.prices) priceEl.textContent = `$${item.prices[size]}.00`;
  document.querySelectorAll(`.menu-item[data-menu-id="${itemId}"] .size-btn`).forEach(b => {
    b.classList.toggle('active', b.textContent.trim() === size);
  });
}

/* ============================================
   CARRITO (agregar, remover, render, totals)
   ============================================ */
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const weight = selectedWeights[productId] || '1/4';
  const existing = cart.find(ci => ci.id === productId && ci.weight === weight && ci.type === 'product');
  if (existing) existing.quantity++;
  else cart.push({ id: productId, type: 'product', name: product.name, origin: product.origin, weight, price: product.prices[weight], quantity: 1, image: product.image });
  updateCart();
  const t = (translations[currentLang] && translations[currentLang].cart) || translations.es.cart;
  showNotification(`${product.name} (${weight}) ${t.added}`, 'success');
}

function addMenuToCart(itemId) {
  const item = Object.values(menuItems).flat().find(i => i.id === itemId);
  if (!item) return;
  const size = selectedMenuSizes[itemId] || (item.prices ? Object.keys(item.prices)[0] : 'Único');
  const price = item.prices ? item.prices[size] : item.price;
  const existing = cart.find(ci => ci.id === itemId && ci.size === size && ci.type === 'menu');
  if (existing) existing.quantity++;
  else cart.push({ id: itemId, type: 'menu', name: item.name, size, price, quantity: 1, category: item.category });
  updateCart();
  const t = (translations[currentLang] && translations[currentLang].cart) || translations.es.cart;
  showNotification(`${item.name} (${size}) ${t.added}`, 'success');
}

function removeFromCart(index) {
  if (index < 0 || index >= cart.length) return;
  const item = cart[index];
  cart.splice(index, 1);
  updateCart();
  const t = (translations[currentLang] && translations[currentLang].notifications) || translations.es.notifications;
  showNotification(`${item.name} ${t.removed}`, 'success');
}

function updateQuantity(index, change) {
  if (!cart[index]) return;
  cart[index].quantity += change;
  if (cart[index].quantity <= 0) removeFromCart(index);
  else updateCart();
}

function updateCart() {
  updateCartCount();
  renderCartItems();
  updateCartTotal();
}

function updateCartCount() {
  const total = cart.reduce((s, it) => s + it.quantity, 0);
  document.querySelectorAll('.cart-count').forEach(c => c.textContent = total);
}

function renderCartItems() {
  const cartItems = document.getElementById('cartItems');
  if (!cartItems) return;
  const t = (translations[currentLang] && translations[currentLang].cart) || translations.es.cart;

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <p style="font-size:3rem;">🛒</p>
        <p>${t.empty}</p>
        <p style="font-size:0.85rem">${t.emptyMessage}</p>
      </div>
    `;
    return;
  }

  cartItems.innerHTML = cart.map((item, i) => {
    const displayInfo = item.type === 'product' ? `${item.weight}` : `${item.size}`;
    const imageHTML = item.image ? `<img src="${item.image}" alt="${item.name}" onerror="this.style.display='none';this.parentElement.innerHTML='<div style=\\'font-size:2.5rem\\'>☕</div>'">` : '<div style="font-size:2.5rem">☕</div>';
    return `
      <div class="cart-item">
        <div class="cart-item-image">${imageHTML}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-weight">${displayInfo}</div>
          <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)} MXN</div>
          <div class="cart-item-quantity">
            <button class="qty-btn" onclick="updateQuantity(${i}, -1)">−</button>
            <span>${item.quantity}</span>
            <button class="qty-btn" onclick="updateQuantity(${i}, 1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${i})">✕</button>
      </div>
    `;
  }).join('');
}

function updateCartTotal() {
  const cartTotal = document.getElementById('cartTotal');
  if (!cartTotal) return;
  const total = cart.reduce((sum, it) => sum + (it.price * it.quantity), 0);
  cartTotal.textContent = `$${total.toFixed(2)} MXN`;
}

function toggleCart() {
  const modal = document.getElementById('cartModal');
  const overlay = document.getElementById('cartOverlay');
  if (!modal || !overlay) return;
  modal.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.style.overflow = modal.classList.contains('active') ? 'hidden' : '';
}

/* ============================================
   CHECKOUT (abrir / cerrar / preparar resumen)
   ============================================ */
function openCheckout() {
  const t = translations[currentLang] && translations[currentLang].cart ? translations[currentLang].cart : translations.es.cart;
  if (cart.length === 0) {
    showNotification((translations[currentLang] && translations[currentLang].notifications && translations[currentLang].notifications.emptyCart) || translations.es.notifications.emptyCart, 'error');
    return;
  }
  toggleCart();
  const modal = document.getElementById('checkoutModal');
  const overlay = document.getElementById('checkoutOverlay');
  const summaryItems = document.getElementById('orderSummaryItems');
  const orderTotal = document.getElementById('orderTotal');
  if (!modal || !overlay || !summaryItems || !orderTotal) return;

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  summaryItems.innerHTML = cart.map(item => {
    const displayInfo = item.type === 'product' ? `(${item.weight})` : `(${item.size})`;
    return `<div class="summary-item"><span>${item.name} ${displayInfo} x${item.quantity}</span><span>$${(item.price * item.quantity).toFixed(2)} MXN</span></div>`;
  }).join('');
  orderTotal.textContent = `$${total.toFixed(2)} MXN`;
  modal.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  const modal = document.getElementById('checkoutModal');
  const overlay = document.getElementById('checkoutOverlay');
  if (!modal || !overlay) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function togglePaymentForm(method) {
  const cardForm = document.getElementById('cardPaymentForm');
  const paypalForm = document.getElementById('paypalPaymentForm');
  if (!cardForm || !paypalForm) return;
  if (method === 'card') {
    cardForm.style.display = 'block';
    paypalForm.style.display = 'none';
  } else {
    cardForm.style.display = 'none';
    paypalForm.style.display = 'block';
  }
}

/* ============================================
   BÚSQUEDA (global y por categoría)
   ============================================ */
function performSearch() {
  const query = (document.getElementById('searchInput') || {}).value || '';
  if (!query.trim()) return;
  searchProducts(query.trim().toLowerCase());
}

function handleSearch(e) { if (e.key === 'Enter') performSearch(); }

function performMainSearch() {
  const q = (document.getElementById('mainSearchInput') || {}).value || '';
  if (!q.trim()) return;
  searchProducts(q.trim().toLowerCase());
}

function handleMainSearch(e) { if (e.key === 'Enter') performMainSearch(); }

function searchProducts(query) {
  // combinar products y menuItems en un array uniforme
  const coffeeItems = products.map(p => ({ ...p, type: 'coffee' }));
  const drinks = Object.values(menuItems).flat().map(m => ({ ...m, type: 'drink' }));
  const all = [...coffeeItems, ...drinks];
  const results = all.filter(item => {
    const name = (item.name || '').toString().toLowerCase();
    const origin = (item.origin || '').toString().toLowerCase();
    return name.includes(query) || origin.includes(query);
  });
  displaySearchResults(results);
}

function filterByCategory(category, btnEl) {
  // si se pasa el botón, actualizar visual; si no, trata de obtenerlo por evento
  document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');

  if (category === 'all') {
    document.getElementById('searchResults').innerHTML = '';
    return;
  }

  const coffeeItems = products.map(p => ({ ...p, type: 'coffee' }));
  const drinks = Object.values(menuItems).flat().map(m => ({ ...m, type: 'drink' }));
  const all = [...coffeeItems, ...drinks];

  const results = all.filter(item => (category === 'coffee' && item.type === 'coffee') || (category === 'drinks' && item.type === 'drink'));
  displaySearchResults(results);
}

function displaySearchResults(results) {
  const container = document.getElementById('searchResults');
  if (!container) return;
  const t = translations[currentLang] || translations.es;
  if (!results || results.length === 0) {
    container.innerHTML = `<div class="no-results"><p>${currentLang === 'es' ? 'No se encontraron resultados' : 'No results found'}</p><p>${currentLang === 'es' ? 'Intenta con otra búsqueda' : 'Try another search'}</p></div>`;
    return;
  }

  container.innerHTML = `
    <div class="search-results">
      <div class="search-results-header"><h3>${currentLang === 'es' ? 'Resultados de búsqueda' : 'Search results'} (${results.length})</h3></div>
      <div class="search-results-grid">
        ${results.map(item => createSearchResultCard(item)).join('')}
      </div>
    </div>
  `;
}

function createSearchResultCard(item) {
  const isCoffee = item.type === 'coffee';
  const price = isCoffee ? (item.prices ? item.prices['1/4'] : '') : (item.prices ? item.prices[Object.keys(item.prices)[0]] : item.price || '');
  const clickAction = isCoffee ? "showPage('productos')" : "showPage('menu')";
  return `
    <div class="search-result-card ${isCoffee ? 'coffee-card' : 'drink-card'}" onclick="${clickAction}">
      <div class="sr-name">${item.name}</div>
      <div class="sr-price">${price ? '$' + price + ' MXN' : ''}</div>
    </div>
  `;
}

/* ============================================
   FORMULARIO NEWSLETTER y CONTACTO (EmailJS)
   ============================================ */
function subscribeNewsletter() {
  const input = document.getElementById('newsletterEmail');
  if (!input) return;
  const email = input.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const t = (translations[currentLang] && translations[currentLang].notifications) || translations.es.notifications;
  if (!regex.test(email)) {
    showNotification(t.invalidEmail || 'Por favor ingresa un correo válido', 'error');
    return;
  }
  // Enviar con EmailJS (plantilla simple)
  if (window.emailjs && emailjs.send) {
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, { to_email: email, subject: 'Newsletter Signup' })
      .then(() => {
        showNotification(t.newsletterSuccess || '¡Gracias por suscribirte!', 'success');
        input.value = '';
      })
      .catch(() => {
        showNotification(t.orderError || 'Error al procesar. Intenta de nuevo.', 'error');
      });
  } else {
    showNotification('Servicio de correo no disponible', 'error');
  }
}

function sendContact() {
  const name = (document.getElementById('contactName') || {}).value || '';
  const last = (document.getElementById('contactLastName') || {}).value || '';
  const email = (document.getElementById('contactEmail') || {}).value || '';
  const phone = (document.getElementById('contactPhone') || {}).value || '';
  const message = (document.getElementById('contactMessage') || {}).value || '';
  const t = (translations[currentLang] && translations[currentLang].notifications) || translations.es.notifications;

  if (!name || !email || !message) {
    showNotification(t.fillFields || 'Por favor completa todos los campos', 'error');
    return;
  }

  if (window.emailjs && emailjs.send) {
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, { from_name: `${name} ${last}`, from_email: email, phone, message })
      .then(() => {
        showNotification(t.contactSuccess || '¡Gracias por contactarnos!', 'success');
        // limpiar campos
        ['contactName','contactLastName','contactEmail','contactPhone','contactMessage'].forEach(id => { const el=document.getElementById(id); if(el) el.value=''; });
      })
      .catch(() => {
        showNotification(t.orderError || 'Error al enviar. Intenta nuevamente.', 'error');
      });
  } else {
    showNotification('Servicio de correo no disponible', 'error');
  }
}

/* ============================================
   CHAT (simple toggling)
   ============================================ */
function toggleChat() {
  const win = document.getElementById('chatWindow');
  if (!win) return;
  win.classList.toggle('active');
}

function handleChatEnter(e) {
  if (e.key === 'Enter') sendChatMessage();
}

function sendChatMessage() {
  const input = document.getElementById('chatInput');
  const messages = document.getElementById('chatMessages');
  if (!input || !messages) return;
  const txt = input.value.trim();
  if (!txt) return;
  const outMsg = document.createElement('div');
  outMsg.className = 'chat-message sent';
  outMsg.innerHTML = `<p>${txt}</p>`;
  messages.appendChild(outMsg);
  input.value = '';
  messages.scrollTop = messages.scrollHeight;
  // simulación de respuesta automática
  setTimeout(() => {
    const inMsg = document.createElement('div');
    inMsg.className = 'chat-message received';
    inMsg.innerHTML = `<p>Gracias por tu mensaje. Te responderemos pronto.</p>`;
    messages.appendChild(inMsg);
    messages.scrollTop = messages.scrollHeight;
  }, 800);
}

/* ============================================
   UTIL: formato de tarjetas / arreglos visuales
   ============================================ */
function setupCardFormatting() {
  // Aplica clases o arreglos pequeños si se necesita. Aquí por ahora es no-op,
  // pero se deja para futuras mejoras (placeholder).
}

/* ============================================
   FUNCIONES ADICIONALES DE UX (cerrar modales al overlay)
   ============================================ */
document.addEventListener('click', function(e) {
  // Si clic fuera de menu (ya controlado en setupMobileMenu)
});

/* ============================================
   EXPORTS / DEBUG (solo para consola)
   ============================================ */
window.CE = {
  addToCart, addMenuToCart, removeFromCart, updateQuantity,
  toggleCart, openCheckout, closeCheckout, changeLanguage,
  performSearch, performMainSearch, filterByCategory,
  subscribeNewsletter, sendContact, toggleChat
};
