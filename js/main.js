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
        name_en: 'Aldama, Chiapas',
        origin: 'Cafeología Natural',
        origin_en: 'Natural Cafecology',
        prices: { '1/4': 350, '1/2': 700, '1kg': 1400 },
        image: PRODUCT_IMAGE,
        category: 'coffee'
    },
    {
        id: 2,
        name: 'Tatetela, Veracruz',
        name_en: 'Tatetela, Veracruz', 
        origin: 'Lavado',
        origin_en: 'Washed',
        prices: { '1/4': 120, '1/2': 240, '1kg': 480 },
        image: PRODUCT_IMAGE,
        category: 'coffee'
    },
    {
        id: 3,
        name: 'Adelitas, Chiapas',
        name_en: 'Adelitas, Chiapas',
        origin: 'Lavado',
        origin_en: 'Washed',
        prices: { '1/4': 120, '1/2': 240, '1kg': 480 },
        image: PRODUCT_IMAGE,
        category: 'coffee'
    }
];

// ============================================
// DATOS DEL MENÚ - CON TRADUCCIONES
// ============================================
const menuItems = {
    frappes: [
        { id: 101, name: 'Frapuccino', name_en: 'Frapuccino', price: 75, category: 'drinks', type: 'frappe' },
        { id: 102, name: 'Cajeta', name_en: 'Caramel', price: 75, category: 'drinks', type: 'frappe' },
        { id: 103, name: 'Oreo', name_en: 'Oreo', price: 75, category: 'drinks', type: 'frappe' },
        { id: 104, name: 'Moca', name_en: 'Mocha', price: 75, category: 'drinks', type: 'frappe' }
    ],
    hotCoffee: [
        { id: 201, name: 'Espresso', name_en: 'Espresso', prices: { 'Chico': 45, 'Grande': 48 }, category: 'drinks', type: 'hot-coffee' },
        { id: 202, name: 'Latte', name_en: 'Latte', prices: { 'Chico': 68, 'Grande': 72 }, category: 'drinks', type: 'hot-coffee' },
        { id: 203, name: 'Espresso cortado', name_en: 'Cortado', price: 48, category: 'drinks', type: 'hot-coffee' },
        { id: 204, name: 'Capuchino', name_en: 'Cappuccino', price: 65, category: 'drinks', type: 'hot-coffee' },
        { id: 205, name: 'Americano', name_en: 'Americano', price: 48, category: 'drinks', type: 'hot-coffee' },
        { id: 206, name: 'Moca', name_en: 'Mocha', prices: { 'Chico': 68, 'Grande': 72 }, category: 'drinks', type: 'hot-coffee' },
        { id: 207, name: 'Latte caramelo', name_en: 'Caramel Latte', price: 72, category: 'drinks', type: 'hot-coffee' },
        { id: 208, name: 'Choco-latte', name_en: 'Choco-Latte', prices: { 'Chico': 68, 'Grande': 72 }, category: 'drinks', type: 'hot-coffee' },
        { id: 209, name: 'Chocolatada', name_en: 'Hot Chocolate', prices: { 'Chico': 68, 'Grande': 72 }, category: 'drinks', type: 'hot-coffee' }
    ],
    teas: [
        { id: 301, name: 'Té Negro (Earl Grey)', name_en: 'Black Tea (Earl Grey)', prices: { 'Chico': 68, 'Grande': 72 }, category: 'drinks', type: 'tea' },
        { id: 302, name: 'Té Negro Chai', name_en: 'Chai Black Tea', prices: { 'Chico': 68, 'Grande': 72 }, category: 'drinks', type: 'tea' },
        { id: 303, name: 'Té Verde Flamingo Limonada', name_en: 'Green Tea Flamingo Lemonade', prices: { 'Chico': 68, 'Grande': 72 }, category: 'drinks', type: 'tea' },
        { id: 304, name: 'Matcha', name_en: 'Matcha', prices: { 'Chico': 68, 'Grande': 72 }, category: 'drinks', type: 'tea' },
        { id: 305, name: 'Variedad de Tisanas', name_en: 'Herbal Tea Variety', prices: { 'Chico': 68, 'Grande': 72 }, category: 'drinks', type: 'tea' }
    ]
};

// ============================================
// TEXTO MULTI-IDIOMA
// ============================================
const translations = {
    es: {
        // Navegación
        'bienvenido': 'Bienvenido',
        'inicio': 'Inicio', 
        'menu': 'Menú',
        'productos': 'Productos',
        'mas': 'Más',
        'principal': 'Principal',
        'chat': '¡Vamos a chatear!',
        
        // Búsqueda
        'buscarPlaceholder': 'Buscar productos...',
        'buscarButton': '🔍 Buscar',
        'todos': 'Todos',
        'cafe': 'Café a Granel',
        'bebidas': 'Bebidas',
        'resultados': 'Resultados de búsqueda',
        'noResultados': 'No se encontraron resultados para',
        
        // Productos
        'nuevo': 'Nuevo',
        'agregarCarrito': 'Agregar al carrito',
        'carrito': 'Carrito',
        'vacío': 'vacío',
        'total': 'Total',
        'procederPago': 'Proceder al Pago',
        
        // Menú
        'frappes': '🧊 FRAPPES (Bebidas Frías)',
        'bebidasCalientes': '🔥 BEBIDAS CALIENTES',
        'baseCafe': 'A base de café y chocolate',
        'tesCalientes': 'Tés Calientes',
        
        // General
        'promocion': '🔥 PROMOCIÓN',
        'promocionTexto': '¡2 Frappes por $120!',
        'promocionDesc': 'Disfruta de nuestra promoción especial por tiempo limitado',
        'promocionTermina': 'La promoción termina en:',
        'envioGratis': '🚚 Envío gratis en compras mayores a $300 en zonas cercanas',
        'suscribete': 'SUSCRÍBETE',
        'newsletter': 'Regístrate al correo electrónico para no perderte de nuestros eventos 2025',
        'introduceEmail': 'Introduce tu correo electrónico aquí',
        'enviar': 'Enviar',
        'explora': 'EXPLORA<br>NUESTRO CAFÉ',
        'descubre': 'Descubre el sabor del café perfecto',
        'verMenu': 'VER MENÚ',
        'acercaDe': 'Acerca de Nosotros',
        'bienvenidoTitulo': 'Bienvenido a Café Elementos',
        'bienvenidoTexto': 'El lugar donde el café cobra vida. Nos dedicamos a ofrecer café de alta calidad con un toque especial que deleita tus sentidos. Descubre nuestra pasión por el café en cada taza que preparamos.',
        'explorarCafe': 'Explorar Nuestro Café',
        'contactanos': 'Contáctanos',
        'direccion': 'Dirección',
        'telefono': 'Teléfono',
        'correo': 'Correo',
        'nombre': 'Nombre',
        'apellido': 'Apellido',
        'mensaje': 'Mensaje',
        'nuestroMenu': 'Nuestro Menú',
        'descubreBebidas': 'Descubre nuestras deliciosas bebidas',
        'nuestrosProductos': 'Nuestros Productos',
        
        // Carrito y Checkout
        'finalizarCompra': 'Finalizar Compra',
        'informacionEnvio': '📦 Información de Envío',
        'nombreCompleto': 'Nombre Completo *',
        'correoElectronico': 'Correo Electrónico *',
        'telefonoContacto': 'Teléfono *',
        'direccionEntrega': 'Dirección de Entrega *',
        'ciudad': 'Ciudad *',
        'codigoPostal': 'Código Postal *',
        'metodoPago': '💳 Método de Pago',
        'tarjetaCredito': '💳 Tarjeta de Crédito/Débito',
        'paypal': 'PayPal',
        'numeroTarjeta': 'Número de Tarjeta *',
        'fechaVencimiento': 'Fecha de Vencimiento *',
        'cvv': 'CVV *',
        'nombreTarjeta': 'Nombre en la Tarjeta *',
        'correoPaypal': 'Correo de PayPal *',
        'resumenPedido': '📋 Resumen del Pedido',
        'confirmarPedido': '✓ Confirmar Pedido',
        'pedidoConfirmado': '¡Pedido Confirmado!',
        'procesadoExitosamente': 'Tu pedido ha sido procesado exitosamente.',
        'enviadoConfirmacion': 'Hemos enviado la confirmación y el ticket a tu correo electrónico.',
        'numeroOrden': 'Número de Orden:',
        'continuarComprando': 'Continuar Comprando',
        
        // Notificaciones
        'agregadoCarrito': 'agregado al carrito',
        'eliminadoCarrito': 'eliminado del carrito',
        'carritoVacio': 'Tu carrito está vacío',
        'graciasSuscripcion': '¡Gracias por suscribirte! Te enviaremos las últimas noticias.',
        'graciasContacto': '¡Gracias por contactarnos! Te responderemos pronto.',
        'pagoDesarrollo': 'Función de pago en desarrollo'
    },
    en: {
        // Navigation
        'bienvenido': 'Welcome',
        'inicio': 'Home',
        'menu': 'Menu', 
        'productos': 'Products',
        'mas': 'More',
        'principal': 'Main',
        'chat': "Let's chat!",
        
        // Search
        'buscarPlaceholder': 'Search products...',
        'buscarButton': '🔍 Search',
        'todos': 'All',
        'cafe': 'Bulk Coffee',
        'bebidas': 'Drinks',
        'resultados': 'Search results',
        'noResultados': 'No results found for',
        
        // Products
        'nuevo': 'New',
        'agregarCarrito': 'Add to cart',
        'carrito': 'Cart',
        'vacío': 'empty',
        'total': 'Total',
        'procederPago': 'Proceed to Checkout',
        
        // Menu
        'frappes': '🧊 FRAPPES (Cold Drinks)',
        'bebidasCalientes': '🔥 HOT DRINKS',
        'baseCafe': 'Coffee and chocolate based',
        'tesCalientes': 'Hot Teas',
        
        // General
        'promocion': '🔥 PROMOTION',
        'promocionTexto': '2 Frappes for $120!',
        'promocionDesc': 'Enjoy our special promotion for a limited time',
        'promocionTermina': 'Promotion ends in:',
        'envioGratis': '🚚 Free shipping on orders over $300 in nearby areas',
        'suscribete': 'SUBSCRIBE',
        'newsletter': 'Sign up for email to not miss our 2025 events',
        'introduceEmail': 'Enter your email here',
        'enviar': 'Send',
        'explora': 'EXPLORE<br>OUR COFFEE',
        'descubre': 'Discover the taste of perfect coffee',
        'verMenu': 'VIEW MENU',
        'acercaDe': 'About Us',
        'bienvenidoTitulo': 'Welcome to Café Elementos',
        'bienvenidoTexto': 'The place where coffee comes to life. We are dedicated to offering high-quality coffee with a special touch that delights your senses. Discover our passion for coffee in every cup we prepare.',
        'explorarCafe': 'Explore Our Coffee',
        'contactanos': 'Contact Us',
        'direccion': 'Address',
        'telefono': 'Phone',
        'correo': 'Email',
        'nombre': 'Name',
        'apellido': 'Last Name',
        'mensaje': 'Message',
        'nuestroMenu': 'Our Menu',
        'descubreBebidas': 'Discover our delicious drinks',
        'nuestrosProductos': 'Our Products',
        
        // Cart and Checkout
        'finalizarCompra': 'Checkout',
        'informacionEnvio': '📦 Shipping Information',
        'nombreCompleto': 'Full Name *',
        'correoElectronico': 'Email *',
        'telefonoContacto': 'Phone *',
        'direccionEntrega': 'Delivery Address *',
        'ciudad': 'City *',
        'codigoPostal': 'Postal Code *',
        'metodoPago': '💳 Payment Method',
        'tarjetaCredito': '💳 Credit/Debit Card',
        'paypal': 'PayPal',
        'numeroTarjeta': 'Card Number *',
        'fechaVencimiento': 'Expiration Date *',
        'cvv': 'CVV *',
        'nombreTarjeta': 'Name on Card *',
        'correoPaypal': 'PayPal Email *',
        'resumenPedido': '📋 Order Summary',
        'confirmarPedido': '✓ Confirm Order',
        'pedidoConfirmado': 'Order Confirmed!',
        'procesadoExitosamente': 'Your order has been processed successfully.',
        'enviadoConfirmacion': 'We have sent the confirmation and receipt to your email.',
        'numeroOrden': 'Order Number:',
        'continuarComprando': 'Continue Shopping',
        
        // Notifications
        'agregadoCarrito': 'added to cart',
        'eliminadoCarrito': 'removed from cart',
        'carritoVacio': 'Your cart is empty',
        'graciasSuscripcion': 'Thank you for subscribing! We will send you the latest news.',
        'graciasContacto': 'Thank you for contacting us! We will respond soon.',
        'pagoDesarrollo': 'Payment function in development'
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
let searchExpanded = false;

// ============================================
// INICIALIZACIÓN MEJORADA
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    init();
    setupCardFormatting();
    setupMobileMenu();
    setupPromotionTimer();
    updateLastUpdateDate();
    setupSearchExpansion();
    
    // Cargar idioma guardado y sincronizar selectores
    const savedLanguage = localStorage.getItem('cafeElementosLanguage');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        const mainSelector = document.getElementById('languageSelect');
        const mobileSelector = document.getElementById('languageSelectMobile');
        
        if (mainSelector) mainSelector.value = currentLanguage;
        if (mobileSelector) mobileSelector.value = currentLanguage;
        
        // Actualizar interfaz al idioma guardado
        setTimeout(() => updateInterfaceLanguage(), 100);
    }
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
        
        // Actualizar contenido específico de la página
        updatePageContent(pageName);
    }
    
    // Cerrar menú móvil si está abierto
    closeMobileMenu();
    
    // Colapsar búsqueda si está expandida
    collapseSearch();
}

function updatePageContent(pageName) {
    const t = translations[currentLanguage];
    
    switch(pageName) {
        case 'bienvenido':
            updateWelcomePage(t);
            break;
        case 'inicio':
            updateHomePage(t);
            break;
        case 'menu':
            updateMenuPage(t);
            break;
        case 'productos':
            updateProductsPage(t);
            break;
        case 'nosotros':
            updateAboutPage(t);
            break;
    }
}

function updateWelcomePage(t) {
    const welcomeTitle = document.querySelector('.welcome-content h1');
    const welcomeText = document.querySelector('.welcome-content p');
    const welcomeButton = document.querySelector('.welcome-btn');
    const promotionBadge = document.querySelector('.promotion-badge');
    const promotionTitle = document.querySelector('.promotion-content h3');
    const promotionDesc = document.querySelector('.promotion-content p:nth-child(3)');
    const shippingInfo = document.querySelector('.shipping-info');
    
    if (welcomeTitle) welcomeTitle.textContent = t['bienvenidoTitulo'];
    if (welcomeText) welcomeText.textContent = t['bienvenidoTexto'];
    if (welcomeButton) welcomeButton.textContent = t['explorarCafe'];
    if (promotionBadge) promotionBadge.textContent = t['promocion'];
    if (promotionTitle) promotionTitle.textContent = t['promocionTexto'];
    if (promotionDesc) promotionDesc.textContent = t['promocionDesc'];
    if (shippingInfo) shippingInfo.textContent = t['envioGratis'];
}

function updateHomePage(t) {
    const heroTitle = document.querySelector('.hero h1');
    const heroText = document.querySelector('.hero p');
    const newsletterInput = document.getElementById('newsletterEmail');
    const newsletterButton = document.querySelector('.newsletter button');
    const sectionTitle = document.querySelector('.section-title h2');
    const sectionDesc = document.querySelector('.section-title p');
    const aboutTitle = document.querySelector('.about-content h2');
    const contactTitle = document.querySelector('.contact-container h2');
    
    if (heroTitle) heroTitle.textContent = t['suscribete'];
    if (heroText) heroText.textContent = t['newsletter'];
    if (newsletterInput) newsletterInput.placeholder = t['introduceEmail'];
    if (newsletterButton) newsletterButton.textContent = t['enviar'];
    if (sectionTitle) sectionTitle.innerHTML = t['explora'];
    if (sectionDesc) {
        const viewMenuLink = sectionDesc.querySelector('a');
        if (viewMenuLink) {
            viewMenuLink.textContent = t['verMenu'];
        }
        sectionDesc.innerHTML = `${t['descubre']} <a onclick="showPage('productos')">${t['verMenu']}</a>`;
    }
    if (aboutTitle) aboutTitle.textContent = t['acercaDe'];
    if (contactTitle) contactTitle.textContent = t['contactanos'];
    
    // Actualizar formulario de contacto
    updateContactForm(t);
}

function updateMenuPage(t) {
    const menuHeroTitle = document.querySelector('.menu-hero h1');
    const menuHeroDesc = document.querySelector('.menu-hero p');
    
    if (menuHeroTitle) menuHeroTitle.textContent = t['nuestroMenu'];
    if (menuHeroDesc) menuHeroDesc.textContent = t['descubreBebidas'];
    
    renderMenuItems();
}

function updateProductsPage(t) {
    const productsTitle = document.querySelector('#page-productos h2');
    if (productsTitle) productsTitle.textContent = t['nuestrosProductos'];
    
    renderProducts();
}

function updateAboutPage(t) {
    const aboutTitle = document.querySelector('.about-content h2');
    const contactTitle = document.querySelector('.contact-container h2');
    
    if (aboutTitle) aboutTitle.textContent = t['acercaDe'];
    if (contactTitle) contactTitle.textContent = t['contactanos'];
    
    updateContactForm(t);
}

function updateContactForm(t) {
    const contactName = document.getElementById('contactName');
    const contactLastName = document.getElementById('contactLastName');
    const contactEmail = document.getElementById('contactEmail');
    const contactPhone = document.getElementById('contactPhone');
    const contactMessage = document.getElementById('contactMessage');
    const submitButton = document.querySelector('.submit-btn');
    
    if (contactName) contactName.placeholder = t['nombre'];
    if (contactLastName) contactLastName.placeholder = t['apellido'];
    if (contactEmail) contactEmail.placeholder = t['correo'];
    if (contactPhone) contactPhone.placeholder = t['telefono'];
    if (contactMessage) contactMessage.placeholder = t['mensaje'];
    if (submitButton) submitButton.textContent = t['enviar'];
}

// ============================================
// BÚSQUEDA EXPANDIBLE - NUEVA FUNCIONALIDAD
// ============================================
function setupSearchExpansion() {
    const searchContainer = document.getElementById('searchContainer');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchContainer && searchInput && searchBtn) {
        // Expandir al hacer clic en la lupa
        searchBtn.addEventListener('click', function(e) {
            if (!searchExpanded) {
                // Primera vez: expandir
                expandSearch();
                e.stopPropagation();
            } else {
                // Segunda vez: realizar búsqueda
                performSearch();
            }
        });
        
        // Colapsar al hacer clic fuera
        document.addEventListener('click', function(e) {
            if (searchExpanded && !searchContainer.contains(e.target)) {
                collapseSearch();
            }
        });
        
        // Prevenir que se colapse al hacer clic dentro
        searchContainer.addEventListener('click', function(e) {
            e.stopPropagation();
        });
        
        // Buscar al presionar Enter
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

function expandSearch() {
    const searchContainer = document.getElementById('searchContainer');
    const searchInput = document.getElementById('searchInput');
    
    if (searchContainer && searchInput) {
        searchContainer.classList.add('expanded');
        searchInput.focus();
        searchExpanded = true;
    }
}

function collapseSearch() {
    const searchContainer = document.getElementById('searchContainer');
    const searchInput = document.getElementById('searchInput');
    
    if (searchContainer && searchInput) {
        searchContainer.classList.remove('expanded');
        searchInput.value = '';
        searchExpanded = false;
    }
}

// ============================================
// MENÚ MÓVIL
// ============================================
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function(e) {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
            e.stopPropagation();
        });
        
        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', function(e) {
            if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                closeMobileMenu();
            }
        });
    }
}

function closeMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    
    if (navMenu && mobileMenuBtn) {
        navMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    }
}

// ============================================
// SISTEMA DE BÚSQUEDA MEJORADO
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
    let searchInput = document.getElementById('searchInput');
    if (!searchInput || searchInput.value === '') {
        searchInput = document.getElementById('searchInputMobile');
    }
    
    if (searchInput && searchInput.value.trim() !== '') {
        currentSearchTerm = searchInput.value.trim().toLowerCase();
        showPage('inicio');
        // Pequeño delay para asegurar que la página se cargue
        setTimeout(filterAndDisplayResults, 100);
    }
    
    collapseSearch();
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
    
    // Actualizar botones activos
    const categoryBtns = document.querySelectorAll('.category-btn');
    const t = translations[currentLanguage];
    
    categoryBtns.forEach(btn => {
        btn.classList.remove('active');
        const btnText = btn.textContent.trim();
        if ((category === 'all' && btnText === t['todos']) ||
            (category === 'coffee' && btnText === t['cafe']) ||
            (category === 'drinks' && btnText === t['bebidas'])) {
            btn.classList.add('active');
        }
    });
    
    filterAndDisplayResults();
}

function filterAndDisplayResults() {
    let results = [];
    
    // Buscar en productos de café
    if (currentCategory === 'all' || currentCategory === 'coffee') {
        const coffeeResults = products.filter(product => {
            const name = currentLanguage === 'en' ? product.name_en : product.name;
            const origin = currentLanguage === 'en' ? product.origin_en : product.origin;
            return name.toLowerCase().includes(currentSearchTerm) ||
                   origin.toLowerCase().includes(currentSearchTerm);
        });
        results = [...results, ...coffeeResults.map(p => ({...p, itemType: 'coffee'}))];
    }
    
    // Buscar en bebidas
    if (currentCategory === 'all' || currentCategory === 'drinks') {
        const allDrinks = Object.values(menuItems).flat();
        const drinkResults = allDrinks.filter(drink => {
            const name = currentLanguage === 'en' ? drink.name_en : drink.name;
            return name.toLowerCase().includes(currentSearchTerm);
        });
        results = [...results, ...drinkResults.map(d => ({...d, itemType: 'drink'}))];
    }
    
    displaySearchResults(results);
}

function displaySearchResults(results) {
    const searchResultsContainer = document.getElementById('searchResults');
    const t = translations[currentLanguage];
    
    if (!searchResultsContainer) return;
    
    if (results.length === 0) {
        searchResultsContainer.innerHTML = `
            <div class="no-results">
                <p>${t['noResultados']} "${currentSearchTerm}"</p>
                <p>Intenta con otras palabras clave o revisa la categoría seleccionada.</p>
            </div>
        `;
        return;
    }
    
    searchResultsContainer.innerHTML = `
        <div class="search-results-header">
            <h3>${t['resultados']} (${results.length})</h3>
        </div>
        <div class="search-results-grid">
            ${results.map(item => createSearchResultCard(item)).join('')}
        </div>
    `;
}

function createSearchResultCard(item) {
    const t = translations[currentLanguage];
    
    if (item.itemType === 'coffee') {
        const selectedWeight = selectedWeights[item.id] || '1/4';
        const currentPrice = item.prices[selectedWeight];
        const productName = currentLanguage === 'en' ? item.name_en : item.name;
        const productOrigin = currentLanguage === 'en' ? item.origin_en : item.origin;
        
        return `
            <div class="search-result-card coffee-card" onclick="navigateToProduct('coffee', ${item.id})">
                <div class="result-image">
                    <img src="${item.image}" alt="${productName}" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\\'font-size:3rem;display:flex;align-items:center;justify-content:center;height:100%\\'>☕</div>'">
                </div>
                <div class="result-info">
                    <h4>${productName}</h4>
                    <p class="result-origin">${productOrigin}</p>
                    <p class="result-price">$${currentPrice}.00 MXN</p>
                    <button class="result-add-btn" onclick="event.stopPropagation(); addToCart(${item.id})">
                        ${t['agregarCarrito']}
                    </button>
                </div>
            </div>
        `;
    } else {
        const hasMultipleSizes = item.prices && typeof item.prices === 'object';
        const selectedSize = selectedMenuSizes[item.id];
        const currentPrice = hasMultipleSizes ? item.prices[selectedSize] : item.price;
        const itemName = currentLanguage === 'en' ? item.name_en : item.name;
        
        return `
            <div class="search-result-card drink-card" onclick="navigateToProduct('drink', ${item.id})">
                <div class="result-image">
                    <div style="font-size:3rem;display:flex;align-items:center;justify-content:center;height:100%;background:#f5f5f5;border-radius:8px;">
                        ${item.type === 'frappe' ? '🧊' : item.type === 'tea' ? '🍵' : '☕'}
                    </div>
                </div>
                <div class="result-info">
                    <h4>${itemName}</h4>
                    <p class="result-type">${getDrinkTypeName(item.type)}</p>
                    <p class="result-price">$${currentPrice}.00</p>
                    <button class="result-add-btn" onclick="event.stopPropagation(); addMenuToCart(${item.id})">
                        ${t['agregarCarrito']}
                    </button>
                </div>
            </div>
        `;
    }
}

function navigateToProduct(type, id) {
    if (type === 'coffee') {
        showPage('productos');
        // Scroll suave a los productos
        setTimeout(() => {
            const productsSection = document.getElementById('productsGrid');
            if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 300);
    } else if (type === 'drink') {
        showPage('menu');
        // Scroll suave al menú
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
    const typeNamesEn = {
        'frappe': 'Cold Drink',
        'hot-coffee': 'Hot Coffee',
        'tea': 'Tea'
    };
    
    return currentLanguage === 'en' ? typeNamesEn[type] || 'Drink' : typeNames[type] || 'Bebida';
}

// ============================================
// SISTEMA MULTI-IDIOMA MEJORADO
// ============================================
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('cafeElementosLanguage', lang);
    
    // Sincronizar ambos selectores de idioma
    const mainSelector = document.getElementById('languageSelect');
    const mobileSelector = document.getElementById('languageSelectMobile');
    
    if (mainSelector) mainSelector.value = lang;
    if (mobileSelector) mobileSelector.value = lang;
    
    // Actualizar toda la interfaz
    updateInterfaceLanguage();
}

function updateInterfaceLanguage() {
    const t = translations[currentLanguage];
    
    // Actualizar navegación
    document.querySelectorAll('nav a').forEach(link => {
        const key = link.getAttribute('data-es');
        if (key && t[key]) {
            link.textContent = t[key];
        }
    });
    
    // Actualizar textos principales
    const principalText = document.querySelector('.principal-text');
    if (principalText) principalText.textContent = t['principal'];
    
    const chatText = document.querySelector('.chat-text');
    if (chatText) chatText.textContent = t['chat'];
    
    // Actualizar placeholders de búsqueda
    const searchInputs = document.querySelectorAll('input[type="text"]');
    searchInputs.forEach(input => {
        if (input.placeholder.includes('Buscar') || input.placeholder.includes('Search')) {
            input.placeholder = t['buscarPlaceholder'];
        }
    });
    
    // Actualizar botones de búsqueda
    const searchButtons = document.querySelectorAll('.search-main-btn');
    searchButtons.forEach(btn => {
        if (btn.textContent.includes('Buscar') || btn.textContent.includes('Search')) {
            btn.textContent = t['buscarButton'];
        }
    });
    
    // Actualizar categorías
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        const text = btn.textContent.trim();
        if (text.includes('Todos') || text.includes('All')) {
            btn.textContent = t['todos'];
        } else if (text.includes('Café') || text.includes('Bulk')) {
            btn.textContent = t['cafe'];
        } else if (text.includes('Bebidas') || text.includes('Drinks')) {
            btn.textContent = t['bebidas'];
        }
    });
    
    // Actualizar página actual
    updatePageContent(currentPage);
    
    // Actualizar carrito si está abierto
    if (document.getElementById('cartModal').classList.contains('active')) {
        renderCartItems();
        updateCartTotal();
    }
}

// ============================================
// PROMOCIONES Y OFERTAS
// ============================================
function setupPromotionTimer() {
    // Establecer fecha de finalización de la promoción (7 días desde hoy)
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);
    
    function updateTimer() {
        const now = new Date();
        const timeLeft = endDate - now;
        const t = translations[currentLanguage];
        
        if (timeLeft <= 0) {
            document.getElementById('promotionTimer').textContent = t['promocionTermina'] + ' 0d 0h 0m 0s';
            return;
        }
        
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        document.getElementById('promotionTimer').textContent = 
            `${t['promocionTermina']} ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
    
    // Actualizar cada segundo
    setInterval(updateTimer, 1000);
    updateTimer();
}

// ============================================
// FECHA DE ACTUALIZACIÓN
// ============================================
function updateLastUpdateDate() {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('es-MX', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    
    // Actualizar todas las fechas de última actualización
    const updateElements = document.querySelectorAll('[id*="lastUpdateDate"]');
    updateElements.forEach(element => {
        element.textContent = formattedDate;
    });
}

// ============================================
// RENDERIZADO DE PRODUCTOS (CAFÉ)
// ============================================
function createProductCard(product, containerId) {
    const selectedWeight = selectedWeights[product.id] || '1/4';
    const currentPrice = product.prices[selectedWeight];
    const t = translations[currentLanguage];
    
    const productName = currentLanguage === 'en' ? product.name_en : product.name;
    const productOrigin = currentLanguage === 'en' ? product.origin_en : product.origin;
    
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-badge">${t['nuevo']}</div>
            <div class="product-image">
                <img src="${product.image}" alt="${productName}" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\\'font-size:4rem;display:flex;align-items:center;justify-content:center;height:100%\\'>☕</div>'">
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})" title="${t['agregarCarrito']}">+</button>
            </div>
            <div class="product-info">
                <div class="product-name">${productName}</div>
                <div class="product-origin">${productOrigin}</div>
                <div class="product-price" id="price-${containerId}-${product.id}">$${currentPrice}.00 MXN</div>
                <div class="product-weight">
                    ${Object.keys(product.prices).map(weight => `
                        <button class="weight-btn ${selectedWeight === weight ? 'active' : ''}" 
                                onclick="selectWeight(${product.id}, '${weight}', '${containerId}')">
                            ${weight === '1kg' ? '1 kg' : weight + ' kg'}
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
    
    const itemName = currentLanguage === 'en' ? item.name_en : item.name;
    
    return `
        <div class="menu-item" data-menu-id="${item.id}">
            <div class="menu-item-header">
                <div class="menu-item-name">${itemName}</div>
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
                + ${t['agregarCarrito']}
            </button>
        </div>
    `;
}

function renderMenuItems() {
    const frappesContainer = document.getElementById('menuFrappes');
    const hotCoffeeContainer = document.getElementById('menuHotCoffee');
    const teasContainer = document.getElementById('menuTeas');
    const t = translations[currentLanguage];
    
    // Actualizar títulos de categorías
    const frappesTitle = document.querySelector('.menu-category h2');
    const hotCoffeeTitle = document.querySelector('.menu-category:nth-child(2) h2');
    const hotCoffeeSubtitle = document.querySelector('.menu-category:nth-child(2) h3');
    const teasTitle = document.querySelector('.menu-category:nth-child(3) h3');
    
    if (frappesTitle) frappesTitle.textContent = t['frappes'];
    if (hotCoffeeTitle) hotCoffeeTitle.textContent = t['bebidasCalientes'];
    if (hotCoffeeSubtitle) hotCoffeeSubtitle.textContent = t['baseCafe'];
    if (teasTitle) teasTitle.textContent = t['tesCalientes'];
    
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
    
    // Actualizar precio mostrado
    const priceEl = document.getElementById(`price-${containerId}-${productId}`);
    if (priceEl) {
        priceEl.textContent = `$${product.prices[weight]}.00 MXN`;
    }
    
    // Actualizar botones activos
    const card = document.querySelector(`.product-card[data-product-id="${productId}"]`);
    if (card) {
        const buttons = card.querySelectorAll('.weight-btn');
        buttons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.textContent.trim().includes(weight)) {
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
    
    // Actualizar precio mostrado
    const priceEl = document.getElementById(`menu-price-${itemId}`);
    if (priceEl && item.prices) {
        priceEl.textContent = `$${item.prices[size]}.00`;
    }
    
    // Actualizar botones activos
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
    const weight = selectedWeights[productId] || '1/4';
    const existingItem = cart.find(item => item.id === productId && item.weight === weight && item.type === 'product');
    const t = translations[currentLanguage];
    
    const productName = currentLanguage === 'en' ? product.name_en : product.name;
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: productId,
            type: 'product',
            name: product.name,
            name_en: product.name_en,
            origin: product.origin,
            weight: weight,
            price: product.prices[weight],
            quantity: 1,
            image: product.image
        });
    }
    
    updateCart();
    showNotification(`${productName} (${weight}) ${t['agregadoCarrito']}`, 'success');
}

function addMenuToCart(itemId) {
    const item = Object.values(menuItems).flat().find(i => i.id === itemId);
    const size = selectedMenuSizes[itemId];
    const price = item.prices ? item.prices[size] : item.price;
    const sizeText = item.prices ? size : 'Único';
    const t = translations[currentLanguage];
    
    const itemName = currentLanguage === 'en' ? item.name_en : item.name;
    
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
            name_en: item.name_en,
            size: sizeText,
            price: price,
            quantity: 1,
            category: item.category
        });
    }
    
    updateCart();
    showNotification(`${itemName} (${sizeText}) ${t['agregadoCarrito']}`, 'success');
}

function removeFromCart(index) {
    const item = cart[index];
    const t = translations[currentLanguage];
    const itemName = currentLanguage === 'en' && item.name_en ? item.name_en : item.name;
    
    cart.splice(index, 1);
    updateCart();
    showNotification(`${itemName} ${t['eliminadoCarrito']}`, 'success');
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
    if (cartCount) {
        const total = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = total;
    }
}

function renderCartItems() {
    const cartItems = document.getElementById('cartItems');
    const cartHeader = document.querySelector('.cart-header h2');
    const checkoutBtn = document.querySelector('.checkout-btn');
    const cartTotal = document.querySelector('.cart-total span:first-child');
    const t = translations[currentLanguage];
    
    if (cartHeader) cartHeader.textContent = `🛒 ${t['carrito']}`;
    if (checkoutBtn) checkoutBtn.textContent = t['procederPago'];
    if (cartTotal) cartTotal.textContent = t['total'] + ':';
    
    if (!cartItems) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <p style="font-size: 3rem; margin-bottom: 1rem;">🛒</p>
                <p>${t['carrito']} ${t['vacío']}</p>
                <p style="font-size: 0.85rem; margin-top: 0.5rem;">¡Agrega algunos productos deliciosos!</p>
            </div>
        `;
        return;
    }
    
    cartItems.innerHTML = cart.map((item, index) => {
        const displayInfo = item.type === 'product' 
            ? `${item.weight} kg` 
            : item.size;
        
        const itemName = currentLanguage === 'en' && item.name_en ? item.name_en : item.name;
        const imageHTML = item.image 
            ? `<img src="${item.image}" alt="${itemName}" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\\'font-size:2.5rem\\'>☕</div>'">`
            : '<div style="font-size:2.5rem;">☕</div>';
        
        return `
            <div class="cart-item">
                <div class="cart-item-image">
                    ${imageHTML}
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${itemName}</div>
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
        cartTotal.textContent = `$${total.toFixed(2)} MXN`;
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
// CHECKOUT (funcionalidad básica)
// ============================================
function openCheckout() {
    if (cart.length === 0) {
        const t = translations[currentLanguage];
        showNotification(t['carritoVacio'], 'error');
        return;
    }
    
    toggleCart();
    
    const modal = document.getElementById('checkoutModal');
    const overlay = document.getElementById('checkoutOverlay');
    const summaryItems = document.getElementById('orderSummaryItems');
    const orderTotal = document.getElementById('orderTotal');
    const t = translations[currentLanguage];
    
    // Actualizar textos del checkout
    const checkoutHeader = document.querySelector('.checkout-header h2');
    const infoEnvio = document.querySelector('.checkout-form h3:nth-child(1)');
    const metodoPago = document.querySelector('.checkout-form h3:nth-child(2)');
    const resumenPedido = document.querySelector('.order-summary h3');
    const confirmBtn = document.querySelector('.confirm-btn');
    
    if (checkoutHeader) checkoutHeader.textContent = t['finalizarCompra'];
    if (infoEnvio) infoEnvio.textContent = t['informacionEnvio'];
    if (metodoPago) metodoPago.textContent = t['metodoPago'];
    if (resumenPedido) resumenPedido.textContent = t['resumenPedido'];
    if (confirmBtn) confirmBtn.textContent = t['confirmarPedido'];
    
    // Actualizar labels del formulario
    updateCheckoutFormLabels();
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    summaryItems.innerHTML = cart.map(item => {
        const displayInfo = item.type === 'product' ? `(${item.weight})` : `(${item.size})`;
        const itemName = currentLanguage === 'en' && item.name_en ? item.name_en : item.name;
        return `
            <div class="summary-item">
                <span>${itemName} ${displayInfo} x${item.quantity}</span>
                <span>$${(item.price * item.quantity).toFixed(2)} MXN</span>
            </div>
        `;
    }).join('');
    
    orderTotal.textContent = `$${total.toFixed(2)} MXN`;
    
    modal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateCheckoutFormLabels() {
    const t = translations[currentLanguage];
    const labels = {
        'checkoutName': t['nombreCompleto'],
        'checkoutEmail': t['correoElectronico'],
        'checkoutPhone': t['telefonoContacto'],
        'checkoutAddress': t['direccionEntrega'],
        'checkoutCity': t['ciudad'],
        'checkoutPostal': t['codigoPostal'],
        'cardNumber': t['numeroTarjeta'],
        'cardExpiry': t['fechaVencimiento'],
        'cardCVV': t['cvv'],
        'cardName': t['nombreTarjeta'],
        'paypalEmail': t['correoPaypal']
    };
    
    Object.keys(labels).forEach(id => {
        const label = document.querySelector(`label[for="${id}"]`);
        if (label) {
            label.textContent = labels[id];
        }
    });
    
    // Actualizar placeholders
    const cardNumber = document.getElementById('cardNumber');
    const cardExpiry = document.getElementById('cardExpiry');
    const paypalEmail = document.getElementById('paypalEmail');
    
    if (cardNumber) cardNumber.placeholder = currentLanguage === 'en' ? '1234 5678 9012 3456' : '1234 5678 9012 3456';
    if (cardExpiry) cardExpiry.placeholder = currentLanguage === 'en' ? 'MM/YY' : 'MM/AA';
    if (paypalEmail) paypalEmail.placeholder = currentLanguage === 'en' ? 'your@email.com' : 'tu@email.com';
    
    // Actualizar opciones de pago
    const tarjetaOption = document.querySelector('.payment-option:nth-child(1) span');
    const paypalOption = document.querySelector('.payment-option:nth-child(2) span');
    
    if (tarjetaOption) tarjetaOption.textContent = t['tarjetaCredito'];
    if (paypalOption) {
        paypalOption.innerHTML = `<span style="background: #0070ba; color: white; padding: 4px 12px; border-radius: 4px; font-weight: 600;">${t['paypal']}</span>`;
    }
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
    const t = translations[currentLanguage];
    showNotification(t['pagoDesarrollo'], 'success');
    
    // Mostrar modal de éxito
    const successModal = document.getElementById('successModal');
    const successOverlay = document.getElementById('successOverlay');
    const successTitle = document.querySelector('.success-modal h2');
    const successText1 = document.querySelector('.success-modal p:nth-child(3)');
    const successText2 = document.getElementById('paymentMethodText');
    const orderNumber = document.getElementById('orderNumber');
    const continueBtn = document.querySelector('.close-modal');
    
    if (successTitle) successTitle.textContent = t['pedidoConfirmado'];
    if (successText1) successText1.textContent = t['procesadoExitosamente'];
    if (successText2) successText2.textContent = t['enviadoConfirmacion'];
    if (continueBtn) continueBtn.textContent = t['continuarComprando'];
    
    // Generar número de orden aleatorio
    const randomOrderNumber = 'CE-' + Math.floor(100000 + Math.random() * 900000);
    if (orderNumber) orderNumber.textContent = randomOrderNumber;
    
    closeCheckout();
    
    // Mostrar modal de éxito
    successModal.classList.add('active');
    successOverlay.classList.add('active');
    
    // Limpiar carrito
    cart = [];
    updateCart();
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
    const t = translations[currentLanguage];
    
    if (!email) {
        showNotification('Por favor ingresa tu correo electrónico', 'error');
        return;
    }
    
    if (!validateEmail(email)) {
        showNotification('Por favor ingresa un correo válido', 'error');
        return;
    }
    
    showNotification(t['graciasSuscripcion'], 'success');
    emailInput.value = '';
}

function sendContact() {
    const name = document.getElementById('contactName')?.value.trim();
    const email = document.getElementById('contactEmail')?.value.trim();
    const message = document.getElementById('contactMessage')?.value.trim();
    const t = translations[currentLanguage];
    
    if (!name || !email || !message) {
        showNotification('Por favor completa todos los campos', 'error');
        return;
    }
    
    if (!validateEmail(email)) {
        showNotification('Por favor ingresa un correo válido', 'error');
        return;
    }
    
    showNotification(t['graciasContacto'], 'success');
    
    // Limpiar formulario
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
    
    // Agregar mensaje del usuario
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message sent';
    messageDiv.innerHTML = `<p>${escapeHtml(message)}</p>`;
    messagesContainer.appendChild(messageDiv);
    
    input.value = '';
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    // Simular respuesta
    setTimeout(() => {
        const responses = currentLanguage === 'en' ? [
            'Thanks for your message! A representative will assist you shortly.',
            'Would you like to know about our featured products?',
            'We are here to help you. How else can I assist you?',
            'Great question! Let me check that information for you.'
        ] : [
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
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function showNotification(message, type = 'success') {
    // Remover notificaciones existentes
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
