/* ============================================
   CAFÉ ELEMENTOS - JAVASCRIPT PRINCIPAL
   ============================================ */

// ============================================
// CONFIGURACIÓN EMAILJS
// ============================================
const EMAILJS_SERVICE_ID = 'service_ez74agp';
const EMAILJS_TEMPLATE_ID = 'template_rv4qwdj';
const EMAILJS_PUBLIC_KEY = 'nb75RxYtqPNBOw3O2';

// ============================================
// DATOS DE PRODUCTOS
// ============================================
const PRODUCT_IMAGE =
    'https://scontent.fvsa2-1.fna.fbcdn.net/v/t39.30808-6/495601645_1198908208917618_4324142393229895495_n.jpg?...';

const products = [
    { id: 1, name: 'Aldama, Chiapas', origin: 'Cafeología Natural', prices: { '1/4': 350, '1/2': 700, '1kg': 1400 }, image: PRODUCT_IMAGE, category: 'coffee' },
    { id: 2, name: 'Tatetela, Veracruz', origin: 'Lavado', prices: { '1/4': 120, '1/2': 240, '1kg': 480 }, image: PRODUCT_IMAGE, category: 'coffee' },
    { id: 3, name: 'Adelitas, Chiapas', origin: 'Lavado', prices: { '1/4': 120, '1/2': 240, '1kg': 480 }, image: PRODUCT_IMAGE, category: 'coffee' }
];

// ============================================
// DATOS DEL MENÚ
// ============================================
const menuItems = {
    frappes: [
        { id: 101, name: 'Frapuccino', price: 75, category: 'drinks', type: 'frappe' },
        { id: 102, name: 'Cajeta', price: 75, category: 'drinks', type: 'frappe' },
        { id: 103, name: 'Oreo', price: 75, category: 'drinks', type: 'frappe' },
        { id: 104, name: 'Moca', price: 75, category: 'drinks', type: 'frappe' }
    ],
    hotCoffee: [
        { id: 201, name: 'Espresso', prices: { 'Chico': 45, 'Grande': 48 }, category: 'drinks', type: 'hot-coffee' },
        { id: 202, name: 'Latte', prices: { 'Chico': 68, 'Grande': 72 }, category: 'drinks', type: 'hot-coffee' },
        { id: 203, name: 'Mocca', prices: { 'Chico': 68, 'Grande': 72 }, category: 'drinks', type: 'hot-coffee' },
        { id: 204, name: 'Capuccino', prices: { 'Chico': 68, 'Grande': 72 }, category: 'drinks', type: 'hot-coffee' },
        { id: 205, name: 'Latte Vainilla', prices: { 'Chico': 68, 'Grande': 72 }, category: 'drinks', type: 'hot-coffee' },
        { id: 206, name: 'Latte Avellana', prices: { 'Chico': 68, 'Grande': 72 }, category: 'drinks', type: 'hot-coffee' },
        { id: 207, name: 'Latte Caramelo', price: 72, category: 'drinks', type: 'hot-coffee' },
        { id: 208, name: 'Choco-latte', prices: { 'Chico': 68, 'Grande': 72 }, category: 'drinks', type: 'hot-coffee' },
        { id: 209, name: 'Chocolatada', prices: { 'Chico': 68, 'Grande': 72 }, category: 'drinks', type: 'hot-coffee' }
    ],
    teas: [
        { id: 301, name: 'Té Negro (Earl Grey)', prices: { 'Chico': 68, 'Grande': 72 }, category: 'drinks', type: 'tea' },
        { id: 302, name: 'Té Negro Chai', prices: { 'Chico': 68, 'Grande': 72 }, category: 'drinks', type: 'tea' },
        { id: 303, name: 'Té Verde Flamingo Limonada', prices: { 'Chico': 68, 'Grande': 72 }, category: 'drinks', type: 'tea' },
        { id: 304, name: 'Matcha', prices: { 'Chico': 68, 'Grande': 72 }, category: 'drinks', type: 'tea' },
        { id: 305, name: 'Variedad de Tisanas', prices: { 'Chico': 68, 'Grande': 72 }, category: 'drinks', type: 'tea' }
    ]
};

// ============================================
// ESTADO GLOBAL
// ============================================
let cart = [];
let currentPage = 'bienvenido';
let selectedWeights = {};
let selectedMenuSizes = {};
let currentLanguage = 'es';
let currentSearchTerm = '';
let currentCategory = 'all';

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    init();
    setupCardFormatting();
    setupMobileMenu();
    setupPromotionTimer();
    updateLastUpdateDate();

    const savedLanguage = localStorage.getItem('cafeElementosLanguage');
    const langSelect = document.getElementById('languageSelect');

    if (savedLanguage) {
        currentLanguage = savedLanguage;
        if (langSelect) langSelect.value = currentLanguage;
        changeLanguage(currentLanguage);
    }
});

function init() {
    products.forEach(p => (selectedWeights[p.id] = '1/4'));

    Object.values(menuItems)
        .flat()
        .forEach(item => {
            if (item.prices) selectedMenuSizes[item.id] = Object.keys(item.prices)[0];
        });

    renderProducts();
    renderMenuItems();
    showPage('bienvenido');
    updateCartCount();
}

// ============================================
// NAVEGACIÓN DE PÁGINAS
// ============================================
function showPage(pageName) {
    const pages = ['bienvenido', 'inicio', 'menu', 'productos', 'nosotros', 'privacy'];

    pages.forEach(page => {
        const el = document.getElementById(`page-${page}`);
        if (el) el.classList.add('hidden');
    });

    const target = document.getElementById(`page-${pageName}`);
    if (target) target.classList.remove('hidden');

    currentPage = pageName;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMobileMenu();
}

// ============================================
// MENÚ MÓVIL
// ============================================
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    if (!mobileMenuBtn || !navMenu) return;

    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}

function closeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    if (!mobileMenuBtn || !navMenu) return;

    navMenu.classList.remove('active');
    mobileMenuBtn.classList.remove('active');
}

// ============================================
// SISTEMA DE BÚSQUEDA
// ============================================
function handleSearch(e) {
    if (e.key === 'Enter') performSearch();
}

function handleMainSearch(e) {
    if (e.key === 'Enter') performMainSearch();
}

function performSearch() {
    const input = document.getElementById('searchInput');
    if (!input) return;

    currentSearchTerm = input.value.trim().toLowerCase();
    showPage('inicio');
    setTimeout(filterAndDisplayResults, 150);
}

function performMainSearch() {
    const input = document.getElementById('mainSearchInput');
    if (!input) return;

    currentSearchTerm = input.value.trim().toLowerCase();
    filterAndDisplayResults();
}

function filterByCategory(category) {
    currentCategory = category;

    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.includes('Todos') && category === 'all') btn.classList.add('active');
        if (btn.textContent.includes('Café') && category === 'coffee') btn.classList.add('active');
        if (btn.textContent.includes('Bebidas') && category === 'drinks') btn.classList.add('active');
    });

    filterAndDisplayResults();
}

// ============================================
// *** FUNCIÓN CORREGIDA ***
// ============================================
function filterAndDisplayResults() {
    let results = [];

    // CAFÉ
    if (currentCategory === 'all' || currentCategory === 'coffee') {
        const found = products.filter(
            p =>
                p.name.toLowerCase().includes(currentSearchTerm) ||
                p.origin.toLowerCase().includes(currentSearchTerm)
        );

        results = [...results, ...found.map(p => ({ ...p, itemType: 'coffee' }))];
    }

    // BEBIDAS
    if (currentCategory === 'all' || currentCategory === 'drinks') {
        const allDrinks = Object.values(menuItems).flat();
        const found = allDrinks.filter(d =>
            d.name.toLowerCase().includes(currentSearchTerm)
        );

        results = [...results, ...found.map(d => ({ ...d, itemType: 'drink' }))];
    }

    displaySearchResults(results);
}

// ============================================
// RESULTADOS DE BÚSQUEDA
// ============================================
function displaySearchResults(results) {
    const container = document.getElementById('searchResults');
    if (!container) return;

    if (results.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <p>No se encontraron resultados para "${currentSearchTerm}"</p>
                <p>Intenta con otras palabras clave.</p>
            </div>`;
        return;
    }

    container.innerHTML = `
        <div class="search-results-header">
            <h3>Resultados (${results.length})</h3>
        </div>
        <div class="search-results-grid">
            ${results.map(item => createSearchResultCard(item)).join('')}
        </div>`;
}

function createSearchResultCard(item) {
    if (item.itemType === 'coffee') {
        const weight = selectedWeights[item.id] || '1/4';
        const price = item.prices[weight];

        return `
            <div class="search-result-card coffee-card" onclick="navigateToProduct('coffee', ${item.id})">
                <div class="result-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="result-info">
                    <h4>${item.name}</h4>
                    <p class="result-origin">${item.origin}</p>
                    <p class="result-price">$${price}.00 MXN</p>
                    <button class="result-add-btn" onclick="event.stopPropagation(); addToCart(${item.id})">
                        Agregar al carrito
                    </button>
                </div>
            </div>`;
    }

    // BEBIDAS
    const hasSizes = item.prices;
    const selectedSize = selectedMenuSizes[item.id];
    const price = hasSizes ? item.prices[selectedSize] : item.price;

    return `
        <div class="search-result-card drink-card" onclick="navigateToProduct('drink', ${item.id})">
            <div class="result-image">
                <div style="font-size:3rem;display:flex;align-items:center;justify-content:center;height:100%;background:#f5f5f5;border-radius:8px;">
                    ${item.type === 'frappe' ? '🧊' : item.type === 'tea' ? '🍵' : '☕'}
                </div>
            </div>
            <div class="result-info">
                <h4>${item.name}</h4>
                <p class="result-type">${getDrinkTypeName(item.type)}</p>
                <p class="result-price">$${price}.00 MXN</p>
                <button class="result-add-btn" onclick="event.stopPropagation(); addMenuToCart(${item.id})">
                    Agregar al carrito
                </button>
            </div>
        </div>`;
}

function navigateToProduct(type, id) {
    if (type === 'coffee') {
        showPage('productos');
        setTimeout(() => {
            const el = document.getElementById('productsGrid');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    } else {
        showPage('menu');
        setTimeout(() => {
            const el = document.querySelector('.menu-content');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    }
}

// ============================================
// MULTI-IDIOMA — FUNCIÓN PROTEGIDA
// ============================================
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('cafeElementosLanguage', lang);

    const p = document.querySelector('.principal-text');
    const c = document.querySelector('.chat-text');

    if (lang === 'en') {
        if (p) p.textContent = 'Main';
        if (c) c.textContent = "Let's chat!";
    } else {
        if (p) p.textContent = 'Principal';
        if (c) c.textContent = '¡Vamos a chatear!';
    }
}

// ============================================
// PROMOCIONES
// ============================================
function setupPromotionTimer() {
    const end = new Date();
    end.setDate(end.getDate() + 7);

    function update() {
        const now = new Date();
        const diff = end - now;
        const timer = document.getElementById('promotionTimer');

        if (!timer) return;

        if (diff <= 0) {
            timer.textContent = '¡La promoción ha terminado!';
            return;
        }

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        timer.textContent = `La promoción termina en: ${d}d ${h}h ${m}m ${s}s`;
    }

    setInterval(update, 1000);
    update();
}

// ============================================
// FECHA DE ACTUALIZACIÓN
// ============================================
function updateLastUpdateDate() {
    const el = document.getElementById('lastUpdateDate');
    if (!el) return;

    const today = new Date();
    el.textContent = today.toLocaleDateString('es-MX', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}

// ============================================
// RENDER DE PRODUCTOS
// ============================================
function createProductCard(product) {
    const weight = selectedWeights[product.id] || '1/4';
    const price = product.prices[weight];

    return `
        <div class="product-card">
            <img src="${product.image}">
            <h4>${product.name}</h4>
            <p>${product.origin}</p>
            <p>$${price}.00 MXN</p>
        </div>`;
}

function renderProducts() {
    const container = document.getElementById('productsGrid');
    if (!container) return;

    container.innerHTML = products.map(p => createProductCard(p)).join('');
}

// ============================================
// RENDER DEL MENÚ
// ============================================
function renderMenuItems() {
    const container = document.getElementById('menuItemsContainer');
    if (!container) return;

    const all = Object.values(menuItems).flat();

    container.innerHTML = all
        .map(
            item => `
        <div class="menu-item">
            <h4>${item.name}</h4>
        </div>`
        )
        .join('');
}
