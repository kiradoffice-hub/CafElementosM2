/* ============================================
   CAFÉ ELEMENTOS - JAVASCRIPT PRINCIPAL
   ============================================ */

// ============================================
// CONFIGURACIÓN EMAILJS (sin cambios)
// ============================================
// IMPORTANTE: Reemplaza estos valores con tus credenciales de EmailJS
const EMAILJS_SERVICE_ID = 'service_ez74agp';  // Tu Service ID
const EMAILJS_TEMPLATE_ID = 'template_rv4qwdj'; // Tu Template ID
const EMAILJS_PUBLIC_KEY = 'nb75RxYtqPNBOw3O2';   // Tu Public Key

// ============================================
// DATOS DE PRODUCTOS Y MENÚ (AÑADIENDO CATEGORÍA/KEYWORDS PARA BÚSQUEDA)
// ============================================
const PRODUCT_IMAGE = 'https://scontent.fvsa2-1.fna.fbcdn.net/v/t39.30808-6/495601645_1198908208917618_4324142393229895495_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=LXQAJeKjCkkQ7kNvwFqblSH&_nc_oc=AdkL2rT9E5JKzvVmYsi5-gLaOLbuHT6JczBiQV2q7aCERwvnpKFL6Zr_pqRez0eVilI&_nc_zt=23&_nc_ht=scontent.fvsa2-1.fna&_nc_gid=HT-GbkexYubjTnC9fSSDrA&oh=00_AfiUM5WCTaSSWSi5eqGiH24eiM0wJkiRFN91bBvjT7juw&oe=6925534E';

const products = [
    {
        id: 1,
        name: 'Aldama, Chiapas',
        origin: 'Cafeología Natural',
        prices: { '1/4': 350, '1/2': 700, '1kg': 1400 },
        image: PRODUCT_IMAGE,
        category: 'cafe-granel' // Categoría para búsqueda
    },
    {
        id: 2,
        name: 'Tatetela, Veracruz',
        origin: 'Lavado',
        prices: { '1/4': 120, '1/2': 240, '1kg': 480 },
        image: PRODUCT_IMAGE,
        category: 'cafe-granel'
    },
    {
        id: 3,
        name: 'Adelitas, Chiapas',
        origin: 'Lavado',
        prices: { '1/4': 120, '1/2': 240, '1kg': 480 },
        image: PRODUCT_IMAGE,
        category: 'cafe-granel'
    }
];

const menuItems = {
    frappes: [
        { id: 101, name: 'Frapuccino', price: 75, category: 'bebidas', keywords: 'frappe frapuccino moka' },
        { id: 102, name: 'Cajeta', price: 75, category: 'bebidas', keywords: 'frappe cajeta dulce' },
        { id: 103, name: 'Oreo', price: 75, category: 'bebidas', keywords: 'frappe oreo galleta' },
        { id: 104, name: 'Moca', price: 75, category: 'bebidas', keywords: 'frappe moca chocolate' }
    ],
    hotCoffee: [
        { id: 201, name: 'Espresso', prices: { 'Chico': 45, 'Grande': 48 }, category: 'bebidas', keywords: 'espresso cafe' },
        { id: 202, name: 'Latte', prices: { 'Chico': 68, 'Grande': 72 }, category: 'bebidas', keywords: 'latte cafe leche' },
        { id: 203, name: 'Espresso cortado', price: 48, category: 'bebidas', keywords: 'cortado espresso cafe' },
        { id: 204, name: 'Capuchino', price: 65, category: 'bebidas', keywords: 'capuchino cappuccino cafe leche espuma' },
        { id: 205, name: 'Americano', price: 48, category: 'bebidas', keywords: 'americano cafe negro' },
        { id: 206, name: 'Moca', prices: { 'Chico': 68, 'Grande': 72 }, category: 'bebidas', keywords: 'moca cafe chocolate' },
        { id: 207, name: 'Latte caramelo', price: 72, category: 'bebidas', keywords: 'latte caramelo cafe dulce' },
        { id: 208, name: 'Choco-latte', prices: { 'Chico': 68, 'Grande': 72 }, category: 'bebidas', keywords: 'chocolate caliente choco-latte' },
        { id: 209, name: 'Chocolatada', prices: { 'Chico': 68, 'Grande': 72 }, category: 'bebidas', keywords: 'chocolate caliente chocolatada' }
    ],
    teas: [
        { id: 301, name: 'Té Negro (Earl Grey)', prices: { 'Chico': 68, 'Grande': 72 }, category: 'bebidas', keywords: 'te negro earl grey infusion' },
        { id: 302, name: 'Té Negro Chai', prices: { 'Chico': 68, 'Grande': 72 }, category: 'bebidas', keywords: 'te negro chai infusion especias' },
        { id: 303, name: 'Té Verde Flamingo Limonada', prices: { 'Chico': 68, 'Grande': 72 }, category: 'bebidas', keywords: 'te verde flamingo limonada infusion' },
        { id: 304, name: 'Matcha', prices: { 'Chico': 68, 'Grande': 72 }, category: 'bebidas', keywords: 'matcha te verde' },
        { id: 305, name: 'Variedad de Tisanas', prices: { 'Chico': 68, 'Grande': 72 }, category: 'bebidas', keywords: 'tisana infusion frutas' }
    ]
};

// Combinar todos los productos en una sola lista para la búsqueda
const allSearchableItems = [
    ...products.map(p => ({
        id: `p-${p.id}`,
        name: p.name,
        price: p.prices['1/4'], 
        category: 'cafe-granel',
        keywords: `${p.name} ${p.origin} ${p.category} café grano a granel`.toLowerCase(),
        type: 'product',
        item: p
    })),
    ...Object.values(menuItems).flat().map(m => ({
        id: `m-${m.id}`,
        name: m.name,
        price: m.price || Object.values(m.prices)[0],
        category: 'bebidas',
        keywords: `${m.name} ${m.keywords} ${m.category} bebida`.toLowerCase(),
        type: 'menuItem',
        item: m
    }))
];

// ============================================
// CONFIGURACIÓN DE IDIOMA
// ============================================
let currentLang = 'es'; // Estado global del idioma
const translations = {
    'es': {
        'nav_bienvenido': 'Bienvenido', 'nav_inicio': 'Inicio', 'nav_menu': 'Menú', 
        'nav_productos': 'Productos', 'nav_mas': 'Más', 'nav_principal': 'Principal',
        'nav_privacy': 'Política de Privacidad', 'nav_accessibility': 'Declaración de Accesibilidad',
        'nav_terms': 'Términos y Condiciones', 'nav_refund': 'Política de Reembolso', 'nav_shipping': 'Política de Envío',
        'search_placeholder': 'Buscar café a granel o bebidas...',
        'search_category_all': 'Todas las categorías', 'search_category_cafe': 'Café a granel', 'search_category_bebidas': 'Bebidas',
        'last_update': 'Última actualización:', 'last_update_date': '20 de Noviembre, 2025',
        'promo_title': '¡Promoción Especial!', 'promo_frappes': '2 Frappes por $120. ¡Solo esta semana!',
        'promo_shipping': 'Envío GRATIS en compras de $300+ (zonas cercanas).',
        'welcome_title': 'Bienvenido a Café Elementos', 'welcome_text': 'El lugar donde el café cobra vida. Nos dedicamos a ofrecer café de alta calidad con un toque especial que deleita tus sentidos. Descubre nuestra pasión por el café en cada taza que preparamos.',
        'explore_btn': 'Explorar Nuestro Café',
        'privacy_title': 'Política de Privacidad', 'privacy_text': 'Aviso Legal: En nuestra cafetería, nos tomamos muy en serio la privacidad y seguridad de la información de nuestros clientes. El contenido de este documento tiene como objetivo ofrecer una guía general sobre nuestras prácticas de recopilación, uso y protección de datos. Esta información no constituye asesoría legal, por lo que te recomendamos consultar a un especialista para elaborar una Política de Privacidad totalmente adaptada a tus necesidades y obligaciones legales.',
    },
    'en': {
        'nav_bienvenido': 'Welcome', 'nav_inicio': 'Home', 'nav_menu': 'Menu', 
        'nav_productos': 'Products', 'nav_mas': 'More', 'nav_principal': 'Main',
        'nav_privacy': 'Privacy Policy', 'nav_accessibility': 'Accessibility Statement',
        'nav_terms': 'Terms and Conditions', 'nav_refund': 'Refund Policy', 'nav_shipping': 'Shipping Policy',
        'search_placeholder': 'Search bulk coffee or drinks...',
        'search_category_all': 'All Categories', 'search_category_cafe': 'Bulk Coffee', 'search_category_bebidas': 'Drinks',
        'last_update': 'Last Update:', 'last_update_date': 'November 20, 2025',
        'promo_title': 'Special Promotion!', 'promo_frappes': '2 Frappes for $120. This week only!',
        'promo_shipping': 'FREE Shipping on purchases of $300+ (nearby areas).',
        'welcome_title': 'Welcome to Café Elementos', 'welcome_text': 'The place where coffee comes to life. We are dedicated to offering high-quality coffee with a special touch that delights your senses. Discover our passion for coffee in every cup we prepare.',
        'explore_btn': 'Explore Our Coffee',
        'privacy_title': 'Privacy Policy', 'privacy_text': 'Legal Notice: In our coffee shop, we take our customers\' privacy and security seriously. The content of this document is intended to offer a general guide on our data collection, use, and protection practices. This information does not constitute legal advice, so we recommend consulting a specialist to prepare a Privacy Policy fully adapted to your needs and legal obligations.',
    }
};

function getText(key) {
    return translations[currentLang][key] || key;
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('cafeElementosLang', lang);
    applyTranslations();
    // Re-renderizar para asegurar que los precios y nombres en el carrito/tienda se actualicen
    renderStoreProducts();
    renderMenuItems();
    renderCartItems(); 
    updateCartTotal();
}

function applyTranslations() {
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.getAttribute('data-lang-key');
        const text = getText(key);
        if (el.tagName === 'INPUT' && el.type === 'email') {
             el.placeholder = text;
        } else if (el.tagName === 'INPUT' && el.type === 'text' && el.id === 'searchInput') {
             el.placeholder = text;
        } else if (el.tagName === 'OPTION') {
             el.textContent = text;
        } else {
             el.textContent = text;
        }
    });
}

// ============================================
// NAVEGACIÓN Y MENÚ MÓVIL
// ============================================

function toggleMobileMenu() {
    const navList = document.querySelector('nav ul');
    const menuToggle = document.querySelector('.menu-toggle');
    if (navList && menuToggle) {
        navList.classList.toggle('active');
        menuToggle.classList.toggle('active');
    }
}

function showPage(pageName) {
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => {
        page.classList.add('hidden');
    });

    const targetPage = document.getElementById(`page-${pageName}`);
    if (targetPage) {
        targetPage.classList.remove('hidden');
    }
    
    // Si la página es 'productos', asegura que la cuadrícula de productos normal esté visible inicialmente
    if (pageName === 'productos') {
        renderStoreProducts();
        document.getElementById('searchResultsGrid')?.classList.add('hidden');
        document.getElementById('storeProductsGrid')?.classList.remove('hidden');
        document.getElementById('searchInput').value = ''; // Limpiar búsqueda
    }
    
    // Cierra el menú móvil si está abierto
    const mobileMenu = document.querySelector('nav ul');
    const menuToggle = document.querySelector('.menu-toggle');
    if (mobileMenu && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    }
}


// ============================================
// BÚSQUEDA DE PRODUCTOS
// ============================================

function handleSearchEnter(event) {
    if (event.key === 'Enter') {
        handleProductSearch();
    }
}

function handleProductSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const category = document.getElementById('searchCategory').value;
    const resultsContainer = document.getElementById('searchResultsGrid');
    const productsGrid = document.getElementById('storeProductsGrid'); 

    if (!query) {
        // Si la búsqueda está vacía, mostrar la cuadrícula normal de la tienda
        if (productsGrid) productsGrid.classList.remove('hidden');
        if (resultsContainer) resultsContainer.classList.add('hidden');
        return;
    }
    
    // Ocultar la cuadrícula normal y mostrar el contenedor de resultados
    if (productsGrid) productsGrid.classList.add('hidden');
    if (resultsContainer) resultsContainer.classList.remove('hidden');

    const filteredItems = allSearchableItems.filter(item => {
        const matchesQuery = item.keywords.includes(query) || item.name.toLowerCase().includes(query);
        const matchesCategory = category === 'all' || item.category === category;
        return matchesQuery && matchesCategory;
    });

    if (resultsContainer) {
        if (filteredItems.length === 0) {
            resultsContainer.innerHTML = `<div class="empty-search">No se encontraron productos para "${query}" en la categoría seleccionada.</div>`;
        } else {
            // Mapear los resultados filtrados a tarjetas de producto/menú
            resultsContainer.innerHTML = filteredItems.map(result => {
                if (result.type === 'product') {
                    return createStoreProductCard(result.item); 
                } else if (result.type === 'menuItem') {
                    return createMenuItemCardForSearch(result.item);
                }
            }).join('');
        }
    }
}

// Función de ayuda para crear tarjeta de menú en resultados de búsqueda
function createMenuItemCardForSearch(item) {
    const priceDisplay = item.price ? `$${item.price.toFixed(2)}` : (item.prices ? `$${Object.values(item.prices)[0].toFixed(2)} +` : 'Consultar');
    const typeLabel = item.category === 'bebidas' ? getText('search_category_bebidas') : '';

    return `
        <div class="product-card">
            <div class="product-image" style="background-color: #f0f0f0; border-radius: 8px 8px 0 0;">
                <span style="font-size: 3rem;">☕</span>
            </div>
            <div class="product-info">
                <span class="product-category">${typeLabel}</span>
                <h3 class="product-name">${item.name}</h3>
                <p class="product-price">${priceDisplay} MXN</p>
                <button class="add-to-cart-btn" onclick="addMenuToCart(${item.id})">
                    +
                </button>
            </div>
        </div>
    `;
}

// ============================================
// PROMOCIONES (Temporizador)
// ============================================
function updatePromoTimer() {
    const timerElement = document.getElementById('promoTimer');
    if (!timerElement) return;

    // Establecer la fecha de caducidad (ej: una semana a partir de ahora, o una fecha fija)
    // Para simplificar, lo mantendremos como un contador de 7 días desde la carga
    const ONE_WEEK_IN_MS = 7 * 24 * 60 * 60 * 1000;
    const expiryDate = new Date().getTime() + ONE_WEEK_IN_MS;

    // Función que se ejecuta cada segundo
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = expiryDate - now;

        // Cálculos de tiempo
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Formatear la salida
        const twoDigits = (num) => String(num).padStart(2, '0');

        // Mostrar el resultado en el elemento
        timerElement.innerHTML = `${twoDigits(days)}d ${twoDigits(hours)}h ${twoDigits(minutes)}m ${twoDigits(seconds)}s`;

        // Si la cuenta atrás termina, escribir un texto
        if (distance < 0) {
            clearInterval(interval);
            timerElement.innerHTML = "¡LA PROMOCIÓN HA TERMINADO!";
        }
    }, 1000);
}


// ============================================
// ESTADO GLOBAL (sin cambios)
// ============================================
let cart = [];
let currentPage = 'bienvenido';
let selectedWeights = {};
let selectedMenuSizes = {};

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Cargar idioma desde localStorage o usar 'es' por defecto
    const savedLang = localStorage.getItem('cafeElementosLang');
    const langSelector = document.getElementById('langSelector');
    if (savedLang && langSelector) {
        currentLang = savedLang;
        langSelector.value = savedLang;
    }
    
    init();
    setupCardFormatting();
    applyTranslations(); // Aplica traducciones al cargar la página
    updatePromoTimer(); // Inicia el temporizador de la promoción
});

function init() {
    // Inicializar pesos seleccionados por defecto
    products.forEach(p => {
        selectedWeights[p.id] = '1/4';
    });
    
    // Inicializar tamaños de menú por defecto
    Object.values(menuItems).flat().forEach(item => {
        if (item.prices) {
            selectedMenuSizes[item.id] = Object.keys(item.prices)[0];
        }
    });
    
    // Se elimina renderProducts() y solo se usa renderStoreProducts()
    renderStoreProducts();
    renderMenuItems();
    showPage('bienvenido');
    updateCartCount();
}

// ... (Resto del código JS - createProductCard, renderStoreProducts, createMenuItem, renderMenuItems, selectWeight, selectMenuSize, addToCart, addMenuToCart, updateCart, sendContact, subscribeNewsletter, etc. - sin cambios funcionales mayores) ...
