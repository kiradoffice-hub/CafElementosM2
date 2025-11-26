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
const PRODUCT_IMAGE = 'https://scontent.fvsa2-1.fna.fbcdn.net/v/t39.30808-6/495601645_1198908208917618_4324142393229895495_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=LXQAJeKjCkkQ7kNvwFqblSH&_nc_oc=AdkL2rT9E5JKzvVmYsi5-gLaOLbuHT6JczBiQV2q7aCERwvnpKFL6Zr_pqRez0eVilI&_nc_zt=23&_nc_ht=scontent.fvsa2-1.fna&_nc_gid=HT-GbkexYubjTnC9fSSDrA&oh=00_AfiUM5WCTaSSWSi5eqGiH24eiM0wJkiRFN91bYEvjT7juw&oe=6925534E';

const products = [
    {
        id: 1,
        name: 'Aldama, Chiapas',
        origin: 'Cafeología Natural',
        prices: { '250g': 350, '500g': 700, '1kg': 1400 },
        image: PRODUCT_IMAGE,
        category: 'coffee'
    },
    {
        id: 2,
        name: 'Tatetela, Veracruz',
        origin: 'Lavado',
        prices: { '250g': 120, '500g': 240, '1kg': 480 },
        image: PRODUCT_IMAGE,
        category: 'coffee'
    },
    {
        id: 3,
        name: 'Adelitas, Chiapas',
        origin: 'Lavado',
        prices: { '250g': 120, '500g': 240, '1kg': 480 },
        image: PRODUCT_IMAGE,
        category: 'coffee'
    }
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
        { id: 203, name: 'Espresso cortado', price: 48, category: 'drinks', type: 'hot-coffee' },
        { id: 204, name: 'Capuchino', price: 65, category: 'drinks', type: 'hot-coffee' },
        { id: 205, name: 'Americano', price: 48, category: 'drinks', type: 'hot-coffee' },
        { id: 206, name: 'Moca', prices: { 'Chico': 68, 'Grande': 72 }, category: 'drinks', type: 'hot-coffee' },
        { id: 207, name: 'Latte caramelo', price: 72, category: 'drinks', type: 'hot-coffee' },
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
// TRADUCCIONES
// ============================================
const translations = {
    es: {
        welcome: 'Bienvenido',
        home: 'Inicio',
        menu: 'Menú',
        products: 'Productos',
        more: 'Más',
        principal: 'Principal',
        search: 'Buscar productos...',
        welcomeTitle: 'Bienvenido a Café Elementos',
        welcomeText: 'El lugar donde el café cobra vida. Nos dedicamos a ofrecer café de alta calidad con un toque especial que deleita tus sentidos.',
        exploreBtn: 'Explorar Nuestro Café',
        promotion: 'PROMOCIÓN',
        promotionText: '¡2 Frappes por $120!',
        promotionDesc: 'Disfruta de nuestra promoción especial por tiempo limitado',
        promotionEnds: 'La promoción termina en:',
        freeShipping: 'Envío gratis en compras mayores a $300 en zonas cercanas',
        searchPlaceholder: 'Buscar café, bebidas, productos...',
        searchBtn: 'Buscar',
        allCategory: 'Todos',
        coffeeCategory: 'Café a Granel',
        drinksCategory: 'Bebidas',
        addToCart: 'Agregar al carrito',
        newBadge: 'Nuevo',
        ourProducts: 'Nuestros Productos',
        ourMenu: 'Nuestro Menú',
        menuDesc: 'Descubre nuestras deliciosas bebidas',
        coldDrinks: 'FRAPPES (Bebidas Frías)',
        hotDrinks: 'BEBIDAS CALIENTES',
        coffeeBased: 'A base de café y chocolate',
        hotTeas: 'Tés Calientes',
        cart: 'Carrito',
        emptyCart: 'Tu carrito está vacío',
        addDelicious: '¡Agrega algunos productos deliciosos!',
        total: 'Total:',
        checkout: 'Proceder al Pago',
        contact: 'Contáctanos',
        address: 'Dirección',
        phone: 'Teléfono',
        email: 'Correo',
        name: 'Nombre',
        lastName: 'Apellido',
        message: 'Mensaje',
        send: 'Enviar',
        aboutUs: 'Acerca de Nosotros',
        chatBtn: '¡Vamos a chatear!',
        chatPlaceholder: 'Escribe tu mensaje...',
        addedToCart: 'agregado al carrito',
        removedFromCart: 'eliminado del carrito'
    },
    en: {
        welcome: 'Welcome',
        home: 'Home',
        menu: 'Menu',
        products: 'Products',
        more: 'More',
        principal: 'Main',
        search: 'Search products...',
        welcomeTitle: 'Welcome to Café Elementos',
        welcomeText: 'The place where coffee comes to life. We are dedicated to offering high-quality coffee with a special touch that delights your senses.',
        exploreBtn: 'Explore Our Coffee',
        promotion: 'PROMOTION',
        promotionText: '2 Frappes for $120!',
        promotionDesc: 'Enjoy our special promotion for a limited time',
        promotionEnds: 'Promotion ends in:',
        freeShipping: 'Free shipping on purchases over $300 in nearby areas',
        searchPlaceholder: 'Search coffee, drinks, products...',
        searchBtn: 'Search',
        allCategory: 'All',
        coffeeCategory: 'Bulk Coffee',
        drinksCategory: 'Drinks',
        addToCart: 'Add to cart',
        newBadge: 'New',
        ourProducts: 'Our Products',
        ourMenu: 'Our Menu',
        menuDesc: 'Discover our delicious drinks',
        coldDrinks: 'FRAPPES (Cold Drinks)',
        hotDrinks: 'HOT DRINKS',
        coffeeBased: 'Coffee and chocolate based',
        hotTeas: 'Hot Teas',
        cart: 'Cart',
        emptyCart: 'Your cart is empty',
        addDelicious: 'Add some delicious products!',
        total: 'Total:',
        checkout: 'Proceed to Checkout',
        contact: 'Contact Us',
        address: 'Address',
        phone: 'Phone',
        email: 'Email',
        name: 'Name',
        lastName: 'Last Name',
        message: 'Message',
        send: 'Send',
        aboutUs: 'About Us',
        chatBtn: "Let's chat!",
        chatPlaceholder: 'Type your message...',
        addedToCart: 'added to cart',
        removedFromCart: 'removed from cart'
    }
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
document.addEventListener('DOMContentLoaded', function() {
    init();
    setupCardFormatting();
    setupMobileMenu();
    setupPromotionTimer();
    updateLastUpdateDate();
    
    const savedLanguage = localStorage.getItem('cafeElementosLanguage');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        const langSelect = document.getElementById('languageSelect');
        if (langSelect) langSelect.value = currentLanguage;
        applyTranslations();
    }
});

function init() {
    products.forEach(p => {
        selectedWeights[p.id] = '250g';
    });
    
    Object.values(menuItems).flat().forEach(item => {
        if (item.prices) {
            selectedMenuSizes[item.id] = Object.keys(item.prices)[0];
        }
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
        const pageEl = document.getElementById(`page-${page}`);
        if (pageEl) {
            pageEl.classList.add('hidden');
        }
    });
    
    const targetPage = document.getElementById(`page-${pageName}`);
    if (targetPage) {
        targetPage.classList.remove('hidden');
        currentPage = pageName;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    closeMobileMenu();
}

// ============================================
// MENÚ MÓVIL
// ============================================
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenuContainer = document.getElementById('mobileMenuContainer');
    
    if (mobileMenuBtn && mobileMenuContainer) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileMenuContainer.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
            
            if (mobileMenuContainer.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        const navLinks = mobileMenuContainer.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuContainer.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        document.addEventListener('click', function(e) {
            if (!mobileMenuContainer.contains(e.target) && 
                !mobileMenuBtn.contains(e.target) && 
                mobileMenuContainer.classList.contains('active')) {
                mobileMenuContainer.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

function closeMobileMenu() {
    const mobileMenuContainer = document.getElementById('mobileMenuContainer');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    
    if (mobileMenuContainer && mobileMenuBtn) {
        mobileMenuContainer.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ============================================
// SISTEMA DE BÚSQUEDA
// ============================================
function handleSearch(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
}

function handleMainSearch(event) {
    if (event.key === 'Enter') {
        performMainSearch();
    }
}

function performSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        currentSearchTerm = searchInput.value.trim().toLowerCase();
        showPage('inicio');
        setTimeout(filterAndDisplayResults, 100);
    }
}

function performMainSearch() {
    const searchInput = document.getElementById('mainSearchInput');
    if (searchInput) {
        currentSearchTerm = searchInput.value.trim().toLowerCase();
        filterAndDisplayResults();
    }
}

function filterByCategory(category) {
    currentCategory = category;
    
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.classList.remove('active');
        if ((category === 'all' && btn.textContent.includes(translations[currentLanguage].allCategory)) ||
            (category === 'coffee' && btn.textContent.includes('Café')) ||
            (category === 'drinks' && btn.textContent.includes(translations[currentLanguage].drinksCategory))) {
            btn.classList.add('active');
        }
    });
    
    filterAndDisplayResults();
}

function filterAndDisplayResults() {
    let results = [];
    
    if (currentCategory === 'all' || currentCategory === 'coffee') {
        const coffeeResults = products.filter(product => 
            product.name.toLowerCase().includes(currentSearchTerm) ||
            product.origin.toLowerCase().includes(currentSearchTerm)
        );
        results = [...results, ...coffeeResults.map(p => ({...p, itemType: 'coffee'}))];
    }
    
    if (currentCategory === 'all' || currentCategory === 'drinks') {
        const allDrinks = Object.values(menuItems).flat();
        const drinkResults = allDrinks.filter(drink => 
            drink.name.toLowerCase().includes(currentSearchTerm)
        );
        results = [...results, ...drinkResults.map(d => ({...d, itemType: 'drink'}))];
    }
    
    displaySearchResults(results);
}

function displaySearchResults(results) {
    const searchResultsContainer = document.getElementById('searchResults');
    if (!searchResultsContainer) return;
    
    if (results.length === 0) {
        searchResultsContainer.innerHTML = `
            <div class="no-results">
                <p>No se encontraron resultados para "${currentSearchTerm}"</p>
                <p>Intenta con otras palabras clave o revisa la categoría seleccionada.</p>
            </div>
        `;
        return;
    }
    
    searchResultsContainer.innerHTML = `
        <div class="search-results-header">
            <h3>Resultados de búsqueda (${results.length})</h3>
        </div>
        <div class="search-results-grid">
            ${results.map(item => createSearchResultCard(item)).join('')}
        </div>
    `;
}

function createSearchResultCard(item) {
    if (item.itemType === 'coffee') {
        const selectedWeight = selectedWeights[item.id] || '250g';
        const currentPrice = item.prices[selectedWeight];
        
        return `
            <div class="search-result-card coffee-card" onclick="navigateToProduct('coffee', ${item.id})">
                <div class="result-image">
                    <img src="${item.image}" alt="${item.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\\'font-size:3rem;display:flex;align-items:center;justify-content:center;height:100%\\'>☕</div>'">
                </div>
                <div class="result-info">
                    <h4>${item.name}</h4>
                    <p class="result-origin">${item.origin}</p>
                    <p class="result-price">$${currentPrice}.00 MXN</p>
                    <button class="result-add-btn" onclick="event.stopPropagation(); addToCart(${item.id})">
                        ${translations[currentLanguage].addToCart}
                    </button>
                </div>
            </div>
        `;
    } else {
        const hasMultipleSizes = item.prices && typeof item.prices === 'object';
        const selectedSize = selectedMenuSizes[item.id];
        const currentPrice = hasMultipleSizes ? item.prices[selectedSize] : item.price;
        
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
                    <p class="result-price">$${currentPrice}.00</p>
                    <button class="result-add-btn" onclick="event.stopPropagation(); addMenuToCart(${item.id})">
                        ${translations[currentLanguage].addToCart}
                    </button>
                </div>
            </div>
        `;
    }
}

function navigateToProduct(type, id) {
    if (type === 'coffee') {
        showPage('productos');
        setTimeout(() => {
            const productsSection = document.getElementById('productsGrid');
            if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 300);
    } else if (type === 'drink') {
        showPage('menu');
        setTimeout(() => {
            const menuSection = document.querySelector('.menu-content');
            if (menuSection) {
                menuSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 300);
    }
}

function getDrinkTypeName(type) {
    const typeNames = {
        'frappe': 'Bebida Fría',
        'hot-coffee': 'Café Caliente',
        'tea': 'Té'
    };
    return typeNames[type] || 'Bebida';
}

// ============================================
// SISTEMA MULTI-IDIOMA
// ============================================
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('cafeElementosLanguage', lang);
    applyTranslations();
}

function applyTranslations() {
    const t = translations[currentLanguage];
    
    // Actualizar nav
    const navLinks = document.querySelectorAll('#navMenu a');
    if (navLinks[0]) navLinks[0].textContent = t.welcome;
    if (navLinks[1]) navLinks[1].textContent = t.home;
    if (navLinks[2]) navLinks[2].textContent = t.menu;
    if (navLinks[3]) navLinks[3].textContent = t.products;
    if (navLinks[4]) navLinks[4].textContent = t.more;
    
    // Actualizar búsqueda
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.placeholder = t.search;
    
    const mainSearchInput = document.getElementById('mainSearchInput');
    if (mainSearchInput) mainSearchInput.placeholder = t.searchPlaceholder;
    
    // Actualizar principal text
    const principalText = document.querySelector('.principal-text');
    if (principalText) principalText.textContent = t.principal;
    
    // Actualizar chat
    const chatText = document.querySelector('.chat-text');
    if (chatText) chatText.textContent = t.chatBtn;
    
    const chatInput = document.getElementById('chatInput');
    if (chatInput) chatInput.placeholder = t.chatPlaceholder;
    
    // Re-renderizar productos y menú con traducciones
    renderProducts();
    renderMenuItems();
}

// ============================================
// PROMOCIONES Y OFERTAS
// ============================================
function setupPromotionTimer() {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);
    
    function updateTimer() {
        const now = new Date();
        const timeLeft = endDate - now;
        
        const timerEl = document.getElementById('promotionTimer');
        if (!timerEl) return;
        
        if (timeLeft <= 0) {
            timerEl.textContent = currentLanguage === 'es' ? '¡La promoción ha terminado!' : 'Promotion has ended!';
            return;
        }
        
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        timerEl.textContent = `${translations[currentLanguage].promotionEnds} ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
    
    setInterval(updateTimer, 1000);
    updateTimer();
}

// ============================================
// FECHA DE ACTUALIZACIÓN
// ============================================
function updateLastUpdateDate() {
    const lastUpdateElement = document.getElementById('lastUpdateDate');
    if (lastUpdateElement) {
        const today = new Date();
        const formattedDate = today.toLocaleDateString('es-MX', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
        lastUpdateElement.textContent = formattedDate;
    }
}

// ============================================
// RENDERIZADO DE PRODUCTOS (CAFÉ)
// ============================================
function createProductCard(product, containerId) {
    const selectedWeight = selectedWeights[product.id] || '250g';
    const currentPrice = product.prices[selectedWeight];
    const t = translations[currentLanguage];
    
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-badge">${t.newBadge}</div>
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.parentElement.innerHTML='<div style=\\'font-size:4rem;display:flex;align-items:center;justify-content:center;height:100%;color:#F59026\\'>☕</div>'">
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})" title="${t.addToCart}">+</button>
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-origin">${product.origin}</div>
                <div class="product-price" id="price-${containerId}-${product.id}">$${currentPrice}.00 MXN</div>
                <div class="product-weight">
                    ${Object.keys(product.prices).map(weight => `
                        <button class="weight-btn ${selectedWeight === weight ? 'active' : ''}" 
                                onclick="selectWeight(${product.id}, '${weight}', '${containerId}')">
                            ${weight}
                        </button>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderProducts() {
    const container = document.getElementById('productsGrid');
    if (container) {
        container.innerHTML = products.map(product => createProductCard(product, 'productos')).join('');
    }
}

// ============================================
// RENDERIZADO DE MENÚ (BEBIDAS)
// ============================================
function createMenuItem(item) {
    const hasMultipleSizes = item.prices && typeof item.prices === 'object';
    const selectedSize = selectedMenuSizes[item.id];
    const currentPrice = hasMultipleSizes ? item.prices[selectedSize] : item.price;
    const t = translations[currentLanguage];
    
    return `
        <div class="menu-item" data-menu-id="${item.id}">
            <div class="menu-item-header">
                <div class="menu-item-name">${item.name}</div>
                <div class="menu-item-price" id="menu-price-${item.id}">$${currentPrice}.00</div>
            </div>
            ${hasMultipleSizes ? `
                <div class="menu-item-sizes">
                    ${Object.keys(item.prices).map(size => `
                        <button class="size-btn ${selectedSize === size ? 'active' : ''}" 
                                onclick="selectMenuSize(${item.id}, '${size}')">
                            ${size}
                        </button>
                    `).join('')}
                </div>
            ` : ''}
            <button class="menu-item-add" onclick="addMenuToCart(${item.id})">
                + ${t.addToCart}
            </button>
        </div>
    `;
}

function renderMenuItems() {
    const frappesContainer = document.getElementById('menuFrappes');
    const hotCoffeeContainer = document.getElementById('menuHotCoffee');
    const teasContainer = document.getElementById('menuTeas');
    
    if (frappesContainer) {
        frappesContainer.innerHTML = menuItems.frappes.map(item => createMenuItem(item)).join('');
    }
    
    if (hotCoffeeContainer) {
        hotCoffeeContainer.innerHTML = menuItems.hotCoffee.map(item => createMenuItem(item)).join('');
    }
    
    if (teasContainer) {
        teasContainer.innerHTML = menuItems.teas.map(item => createMenuItem(item)).join('');
    }
}

// ============================================
// SELECCIÓN DE PESO (CAFÉ)
// ============================================
function selectWeight(productId, weight, containerId) {
    selectedWeights[productId] = weight;
    const product = products.find(p => p.id === productId);
    
    const priceEl = document.getElementById(`price-${containerId}-${productId}`);
    if (priceEl) {
        priceEl.textContent = `$${product.prices[weight]}.00 MXN`;
    }
    
    const card = document.querySelector(`.product-card[data-product-id="${productId}"]`);
    if (card) {
        const buttons = card.querySelectorAll('.weight-btn');
        buttons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.textContent.trim() === weight) {
                btn.classList.add('active');
            }
        });
    }
}

// ============================================
// SELECCIÓN DE TAMAÑO (MENÚ)
// ============================================
function selectMenuSize(itemId, size) {
    selectedMenuSizes[itemId] = size;
    const item = Object.values(menuItems).flat().find(i => i.id === itemId);
    
    const priceEl = document.getElementById(`menu-price-${itemId}`);
    if (priceEl && item.prices) {
        priceEl.textContent = `$${item.prices[size]}.00`;
    }
    
    const menuItem = document.querySelector(`.menu-item[data-menu-id="${itemId}"]`);
    if (menuItem) {
        const buttons = menuItem.querySelectorAll('.size-btn');
        buttons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.textContent.trim() === size) {
                btn.classList.add('active');
            }
        });
    }
}

// ============================================
// FUNCIONES DEL CARRITO
// ============================================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const weight = selectedWeights[productId] || '250g';
    const existingItem = cart.find(item => item.id === productId && item.weight === weight && item.type === 'product');
    
    if (existingItem) {
        existingItem.quantity++;
    } else
{
cart.push({
id: productId,
type: 'product',
name: product.name,
origin: product.origin,
weight: weight,
price: product.prices[weight],
quantity: 1,
image: product.image
});
}
updateCart();
showNotification(`${product.name} (${weight}) ${translations[currentLanguage].addedToCart}`, 'success');
}
function addMenuToCart(itemId) {
const item = Object.values(menuItems).flat().find(i => i.id === itemId);
if (!item) return;
const size = selectedMenuSizes[itemId];
const price = item.prices ? item.prices[size] : item.price;
const sizeText = item.prices ? size : 'Único';

const existingItem = cart.find(cartItem => 
    cartItem.id === itemId && 
    cartItem.size === sizeText && 
    cartItem.type === 'menu'
);

if (existingItem) {
    existingItem.quantity++;
} else {
    cart.push({
        id: itemId,
        type: 'menu',
        name: item.name,
        size: sizeText,
        price: price,
        quantity: 1,
        category: item.category
    });
}

updateCart();
showNotification(`${item.name} (${sizeText}) ${translations[currentLanguage].addedToCart}`, 'success');
}
function removeFromCart(index) {
const item = cart[index];
cart.splice(index, 1);
updateCart();
showNotification(${item.name} ${translations[currentLanguage].removedFromCart}, 'success');
}
function updateQuantity(index, change) {
cart[index].quantity += change;
if (cart[index].quantity <= 0) {
removeFromCart(index);
} else {
updateCart();
}
}
function updateCart() {
updateCartCount();
renderCartItems();
updateCartTotal();
}
function updateCartCount() {
const cartCount = document.getElementById('cartCount');
const cartCount2 = document.getElementById('cartCount2');
const total = cart.reduce((sum, item) => sum + item.quantity, 0);
if (cartCount) cartCount.textContent = total;
if (cartCount2) cartCount2.textContent = total;
}
function renderCartItems() {
const cartItems = document.getElementById('cartItems');
if (!cartItems) return;
const t = translations[currentLanguage];

if (cart.length === 0) {
    cartItems.innerHTML = `
        <div class="empty-cart">
            <p style="font-size: 3rem; margin-bottom: 1rem;">🛒</p>
            <p>${t.emptyCart}</p>
            <p style="font-size: 0.85rem; margin-top: 0.5rem;">${t.addDelicious}</p>
        </div>
    `;
    return;
}

cartItems.innerHTML = cart.map((item, index) => {
    const displayInfo = item.type === 'product' ? item.weight : item.size;
    const imageHTML = item.image 
        ? `<img src="${item.image}" alt="${item.name}" onerror="this.parentElement.innerHTML='<div style=\\'font-size:2.5rem;color:#F59026\\'>☕</div>'">`
        : '<div style="font-size:2.5rem;color:#F59026;">☕</div>';
    
    return `
        <div class="cart-item">
            <div class="cart-item-image">
                ${imageHTML}
            </div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-weight">${displayInfo}</div>
                <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)} MXN</div>
                <div class="cart-item-quantity">
                    <button class="qty-btn" onclick="updateQuantity(${index}, -1)">−</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${index}, 1)">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${index})" title="Eliminar">✕</button>
        </div>
    `;
}).join('');
}
function updateCartTotal() {
const cartTotal = document.getElementById('cartTotal');
if (cartTotal) {
const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
cartTotal.textContent = $${total.toFixed(2)} MXN;
}
}
function toggleCart() {
const modal = document.getElementById('cartModal');
const overlay = document.getElementById('cartOverlay');
modal.classList.toggle('active');
overlay.classList.toggle('active');
if (modal.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
} else {
    document.body.style.overflow = '';
}
}
// ============================================
// CHECKOUT
// ============================================
function openCheckout() {
if (cart.length === 0) {
showNotification('Tu carrito está vacío', 'error');
return;
}
toggleCart();

const modal = document.getElementById('checkoutModal');
const overlay = document.getElementById('checkoutOverlay');
const summaryItems = document.getElementById('orderSummaryItems');
const orderTotal = document.getElementById('orderTotal');

const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

summaryItems.innerHTML = cart.map(item => {
    const displayInfo = item.type === 'product' ? `(${item.weight})` : `(${item.size})`;
    return `
        <div class="summary-item">
            <span>${item.name} ${displayInfo} x${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)} MXN</span>
        </div>
    `;
}).join('');

orderTotal.textContent = `$${total.toFixed(2)} MXN`;

modal.classList.add('active');
overlay.classList.add('active');
document.body.style.overflow = 'hidden';
}
function closeCheckout() {
const modal = document.getElementById('checkoutModal');
const overlay = document.getElementById('checkoutOverlay');
modal.classList.remove('active');
overlay.classList.remove('active');
document.body.style.overflow = '';
}
function togglePaymentForm(method) {
const cardForm = document.getElementById('cardPaymentForm');
const paypalForm = document.getElementById('paypalPaymentForm');
if (method === 'card') {
    cardForm.style.display = 'block';
    paypalForm.style.display = 'none';
} else if (method === 'paypal') {
    cardForm.style.display = 'none';
    paypalForm.style.display = 'block';
}
}
function confirmOrder() {
showNotification('Función de pago en desarrollo', 'success');
closeCheckout();
}
function closeSuccess() {
const modal = document.getElementById('successModal');
const overlay = document.getElementById('successOverlay');
modal.classList.remove('active');
overlay.classList.remove('active');
document.body.style.overflow = '';
showPage('inicio');
}
// ============================================
// NEWSLETTER Y CONTACTO
// ============================================
function subscribeNewsletter() {
const emailInput = document.getElementById('newsletterEmail');
const email = emailInput.value.trim();
if (!email) {
    showNotification('Por favor ingresa tu correo electrónico', 'error');
    return;
}

if (!validateEmail(email)) {
    showNotification('Por favor ingresa un correo válido', 'error');
    return;
}

showNotification('¡Gracias por suscribirte! Te enviaremos las últimas noticias.', 'success');
emailInput.value = '';
}
function sendContact() {
const name = document.getElementById('contactName')?.value.trim();
const email = document.getElementById('contactEmail')?.value.trim();
const message = document.getElementById('contactMessage')?.value.trim();
if (!name || !email || !message) {
    showNotification('Por favor completa todos los campos', 'error');
    return;
}

if (!validateEmail(email)) {
    showNotification('Por favor ingresa un correo válido', 'error');
    return;
}

showNotification('¡Gracias por contactarnos! Te responderemos pronto.', 'success');

if (document.getElementById('contactName')) document.getElementById('contactName').value = '';
if (document.getElementById('contactLastName')) document.getElementById('contactLastName').value = '';
if (document.getElementById('contactEmail')) document.getElementById('contactEmail').value = '';
if (document.getElementById('contactPhone')) document.getElementById('contactPhone').value = '';
if (document.getElementById('contactMessage')) document.getElementById('contactMessage').value = '';
}
// ============================================
// CHAT
// ============================================
function toggleChat() {
const chatButton = document.getElementById('chatButton');
const chatWindow = document.getElementById('chatWindow');
if (chatWindow.classList.contains('active')) {
    chatWindow.classList.remove('active');
    chatButton.style.display = 'flex';
} else {
    chatWindow.classList.add('active');
    chatButton.style.display = 'none';
}
}
function sendChatMessage() {
const input = document.getElementById('chatInput');
const message = input.value.trim();
if (!message) return;

const messagesContainer = document.getElementById('chatMessages');

const messageDiv = document.createElement('div');
messageDiv.className = 'chat-message sent';
messageDiv.innerHTML = `<p>${escapeHtml(message)}</p>`;
messagesContainer.appendChild(messageDiv);

input.value = '';
messagesContainer.scrollTop = messagesContainer.scrollHeight;

setTimeout(() => {
    const responses = [
        '¡Gracias por tu mensaje! Un representante te atenderá pronto.',
        '¿Te gustaría conocer nuestros productos destacados?',
        'Estamos aquí para ayudarte. ¿En qué más puedo asistirte?',
        '¡Excelente pregunta! Déjame verificar esa información para ti.'
    ];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    const responseDiv = document.createElement('div');
    responseDiv.className = 'chat-message received';
    responseDiv.innerHTML = `<p>${randomResponse}</p>`;
    messagesContainer.appendChild(responseDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}, 1500);
}
function handleChatEnter(event) {
if (event.key === 'Enter') {
sendChatMessage();
}
}
// ============================================
// UTILIDADES
// ============================================
function validateEmail(email) {
const re = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
return re.test(email);
}
function escapeHtml(text) {
const div = document.createElement('div');
div.textContent = text;
return div.innerHTML;
}
function showNotification(message, type = 'success') {
const existing = document.querySelectorAll('.notification');
existing.forEach(n => n.remove());
const notification = document.createElement('div');
notification.className = `notification ${type}`;
notification.textContent = message;
document.body.appendChild(notification);

setTimeout(() => {
    notification.style.animation = 'slideIn 0.3s ease reverse';
    setTimeout(() => notification.remove(), 300);
}, 3000);
}
function setupCardFormatting() {
const cardNumberInput = document.getElementById('cardNumber');
if (cardNumberInput) {
cardNumberInput.addEventListener('input', function(e) {
let value = e.target.value.replace(/\s/g, '').replace(/\D/g, '');
let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
e.target.value = formattedValue.slice(0, 19);
});
}
const cardExpiryInput = document.getElementById('cardExpiry');
if (cardExpiryInput) {
    cardExpiryInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 2) {
            value = value.slice(0, 2) + '/' + value.slice(2, 4);
        }
        e.target.value = value;
    });
}

const cardCVVInput = document.getElementById('cardCVV');
if (cardCVVInput) {
    cardCVVInput.addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/\D/g, '').slice(0, 4);
    });
}
}
