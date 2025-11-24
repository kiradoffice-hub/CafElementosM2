/* ============================================
   CAFÉ ELEMENTOS - JAVASCRIPT PRINCIPAL
   ============================================ */

// ============================================
// CONFIGURACIÓN EMAILJS
// ============================================
// IMPORTANTE: Reemplaza estos valores con tus credenciales de EmailJS
const EMAILJS_SERVICE_ID = 'service_ez74agp';  // Tu Service ID
const EMAILJS_TEMPLATE_ID = 'template_rv4qwdj'; // Tu Template ID
const EMAILJS_PUBLIC_KEY = 'nb75RxYtqPNBOw3O2';   // Tu Public Key

// ============================================
// DATOS DE PRODUCTOS
// ============================================
const PRODUCT_IMAGE = 'https://scontent.fvsa2-1.fna.fbcdn.net/v/t39.30808-6/495601645_1198908208917618_4324142393229895495_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=LXQAJeKjCkkQ7kNvwFqblSH&_nc_oc=AdkL2rT9E5JKzvVmYsi5-gLaOLbuHT6JczBiQV2q7aCERwvnpKFL6Zr_pqRez0eVilI&_nc_zt=23&_nc_ht=scontent.fvsa2-1.fna&_nc_gid=HT-GbkexYubjTnC9fSSDrA&oh=00_AfiUM5WCTaSSWSi5eqGiH24eiM0wJkiRFN91bYEvjT7juw&oe=6925534E';

const products = [
    {
        id: 1,
        name: 'Aldama, Chiapas',
        origin: 'Cafeología Natural',
        prices: { '1/4': 350, '1/2': 700, '1kg': 1400 },
        image: PRODUCT_IMAGE,
        category: 'coffee'
    },
    {
        id: 2,
        name: 'Tatetela, Veracruz',
        origin: 'Lavado',
        prices: { '1/4': 120, '1/2': 240, '1kg': 480 },
        image: PRODUCT_IMAGE,
        category: 'coffee'
    },
    {
        id: 3,
        name: 'Adelitas, Chiapas',
        origin: 'Lavado',
        prices: { '1/4': 120, '1/2': 240, '1kg': 480 },
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
        // Navegación
        welcome: 'Bienvenido',
        home: 'Inicio',
        menu: 'Menú',
        products: 'Productos',
        more: 'Más',
        main: 'Principal',
        searchPlaceholder: 'Buscar productos...',
        searchButton: 'Buscar',
        
        // Página de Bienvenida
        welcomeTitle: 'Bienvenido a Café Elementos',
        welcomeText: 'El lugar donde el café cobra vida. Nos dedicamos a ofrecer café de alta calidad con un toque especial que deleita tus sentidos. Descubre nuestra pasión por el café en cada taza que preparamos.',
        exploreButton: 'Explorar Nuestro Café',
        promotionBadge: '🔥 PROMOCIÓN',
        promotionTitle: '¡2 Frappes por $120!',
        promotionText: 'Disfruta de nuestra promoción especial por tiempo limitado',
        promotionTimer: 'La promoción termina en: ',
        shippingInfo: '🚚 Envío gratis en compras mayores a $300 en zonas cercanas',
        
        // Búsqueda
        lastUpdate: 'Última actualización: ',
        searchPlaceholderMain: 'Buscar café, bebidas, productos...',
        categoriesAll: 'Todos',
        categoriesCoffee: 'Café a Granel',
        categoriesDrinks: 'Bebidas',
        noResults: 'No se encontraron resultados para',
        tryDifferent: 'Intenta con otras palabras clave o revisa la categoría seleccionada.',
        resultsCount: 'Resultados de búsqueda',
        
        // Hero Section
        subscribeTitle: 'SUSCRÍBETE',
        subscribeText: 'Regístrate al correo electrónico para no perderte de nuestros eventos 2025',
        emailPlaceholder: 'Introduce tu correo electrónico aquí',
        sendButton: 'Enviar',
        
        // Secciones
        exploreTitle: 'EXPLORA<br>NUESTRO CAFÉ',
        exploreText: 'Descubre el sabor del café perfecto ',
        viewMenu: 'VER MENÚ',
        aboutTitle: 'Acerca de Nosotros',
        aboutText1: 'Bienvenido a Café Elementos, el lugar donde el café cobra vida. Nos dedicamos a ofrecer café de alta calidad con un toque especial que deleita tus sentidos. Nuestra pasión por el café se refleja en cada taza que preparamos, buscando brindarte una experiencia única en cada sorbo.',
        aboutText2: 'En Café Elementos, nos esforzamos por crear un ambiente acogedor donde te sientas como en casa. Nuestro equipo de baristas expertos está listo para guiarte a través de nuestro menú y recomendarte la combinación perfecta para tu paladar. ¡Ven y disfruta de la verdadera esencia del café con nosotros!',
        
        // Contacto
        contactTitle: 'Contáctanos',
        address: 'Dirección',
        addressText: 'Av Paseo Tabasco 1124, Jesus Garcia, 86040 Villahermosa, Tab.',
        phone: 'Teléfono',
        phoneText: '993 426 3253',
        email: 'Correo',
        emailText: 'cafelementos@gmail.com',
        namePlaceholder: 'Nombre',
        lastNamePlaceholder: 'Apellido',
        emailInputPlaceholder: 'Correo',
        phoneInputPlaceholder: 'Teléfono',
        messagePlaceholder: 'Mensaje',
        sendMessageButton: 'Enviar',
        
        // Menú
        menuTitle: 'Nuestro Menú',
        menuSubtitle: 'Descubre nuestras deliciosas bebidas',
        frappesTitle: '🧊 FRAPPES (Bebidas Frías)',
        hotDrinksTitle: '🔥 BEBIDAS CALIENTES',
        hotDrinksSubtitle: 'A base de café y chocolate',
        teasTitle: 'Tés Calientes',
        addToCart: '+ Agregar al carrito',
        
        // Productos
        productsTitle: 'Nuestros Productos',
        newBadge: 'Nuevo',
        
        // Carrito
        cartTitle: '🛒 Carrito',
        emptyCart: 'Tu carrito está vacío',
        emptyCartText: '¡Agrega algunos productos deliciosos!',
        total: 'Total:',
        checkoutButton: 'Proceder al Pago',
        remove: 'Eliminar',
        
        // Checkout
        checkoutTitle: 'Finalizar Compra',
        shippingInfoTitle: '📦 Información de Envío',
        fullName: 'Nombre Completo *',
        email: 'Correo Electrónico *',
        phone: 'Teléfono *',
        address: 'Dirección de Entrega *',
        city: 'Ciudad *',
        postal: 'Código Postal *',
        paymentTitle: '💳 Método de Pago',
        cardPayment: '💳 Tarjeta de Crédito/Débito',
        paypalPayment: 'PayPal',
        cardNumber: 'Número de Tarjeta *',
        cardNumberPlaceholder: '1234 5678 9012 3456',
        expiryDate: 'Fecha de Vencimiento *',
        expiryPlaceholder: 'MM/AA',
        cvv: 'CVV *',
        cvvPlaceholder: '123',
        cardName: 'Nombre en la Tarjeta *',
        paypalEmail: 'Correo de PayPal *',
        paypalPlaceholder: 'tu@email.com',
        paypalInfo: 'Al confirmar el pedido, serás redirigido a PayPal para completar el pago de forma segura.',
        orderSummary: '📋 Resumen del Pedido',
        confirmOrder: '✓ Confirmar Pedido',
        
        // Success
        successTitle: '¡Pedido Confirmado!',
        successText: 'Tu pedido ha sido procesado exitosamente.',
        successEmail: 'Hemos enviado la confirmación y el ticket a tu correo electrónico.',
        successPaypal: 'Tu pago ha sido procesado con PayPal. Hemos enviado la confirmación y el ticket a tu correo electrónico.',
        orderNumber: 'Número de Orden:',
        continueShopping: 'Continuar Comprando',
        
        // Footer
        privacyPolicy: 'Política de Privacidad',
        accessibility: 'Declaración de Accesibilidad',
        terms: 'Términos y Condiciones',
        refund: 'Política de Reembolso',
        shipping: 'Política de Envío',
        rights: 'Todos los derechos reservados.',
        
        // Notificaciones
        newsletterSuccess: '¡Gracias por suscribirte! Te enviaremos las últimas noticias.',
        contactSuccess: '¡Gracias por contactarnos! Te responderemos pronto.',
        emptyCartError: 'Tu carrito está vacío',
        requiredFields: 'Por favor completa todos los campos',
        invalidEmail: 'Por favor ingresa un correo válido',
        invalidCard: 'Número de tarjeta inválido',
        invalidExpiry: 'Formato de fecha inválido (MM/AA)',
        invalidCVV: 'CVV inválido',
        paypalEmailRequired: 'Por favor ingresa tu correo de PayPal',
        cardDetailsRequired: 'Por favor completa los datos de la tarjeta',
        
        // Chat
        chatTitle: 'Café Elementos',
        chatStatus: '● Te responderemos tan pronto como podamos',
        chatInput: 'Escribe tu mensaje...',
        chatButton: '¡Vamos a chatear!'
    },
    en: {
        // Navigation
        welcome: 'Welcome',
        home: 'Home',
        menu: 'Menu',
        products: 'Products',
        more: 'More',
        main: 'Main',
        searchPlaceholder: 'Search products...',
        searchButton: 'Search',
        
        // Welcome Page
        welcomeTitle: 'Welcome to Café Elementos',
        welcomeText: 'The place where coffee comes to life. We are dedicated to offering high-quality coffee with a special touch that delights your senses. Discover our passion for coffee in every cup we prepare.',
        exploreButton: 'Explore Our Coffee',
        promotionBadge: '🔥 PROMOTION',
        promotionTitle: '2 Frappes for $120!',
        promotionText: 'Enjoy our special promotion for a limited time',
        promotionTimer: 'Promotion ends in: ',
        shippingInfo: '🚚 Free shipping on orders over $300 in nearby areas',
        
        // Search
        lastUpdate: 'Last update: ',
        searchPlaceholderMain: 'Search coffee, drinks, products...',
        categoriesAll: 'All',
        categoriesCoffee: 'Bulk Coffee',
        categoriesDrinks: 'Drinks',
        noResults: 'No results found for',
        tryDifferent: 'Try different keywords or check the selected category.',
        resultsCount: 'Search results',
        
        // Hero Section
        subscribeTitle: 'SUBSCRIBE',
        subscribeText: 'Sign up for email to not miss our 2025 events',
        emailPlaceholder: 'Enter your email here',
        sendButton: 'Send',
        
        // Sections
        exploreTitle: 'EXPLORE<br>OUR COFFEE',
        exploreText: 'Discover the taste of perfect coffee ',
        viewMenu: 'VIEW MENU',
        aboutTitle: 'About Us',
        aboutText1: 'Welcome to Café Elementos, the place where coffee comes to life. We are dedicated to offering high-quality coffee with a special touch that delights your senses. Our passion for coffee is reflected in every cup we prepare, seeking to provide you with a unique experience in every sip.',
        aboutText2: 'At Café Elementos, we strive to create a welcoming environment where you feel at home. Our team of expert baristas is ready to guide you through our menu and recommend the perfect combination for your palate. Come and enjoy the true essence of coffee with us!',
        
        // Contact
        contactTitle: 'Contact Us',
        address: 'Address',
        addressText: 'Av Paseo Tabasco 1124, Jesus Garcia, 86040 Villahermosa, Tab.',
        phone: 'Phone',
        phoneText: '993 426 3253',
        email: 'Email',
        emailText: 'cafelementos@gmail.com',
        namePlaceholder: 'Name',
        lastNamePlaceholder: 'Last Name',
        emailInputPlaceholder: 'Email',
        phoneInputPlaceholder: 'Phone',
        messagePlaceholder: 'Message',
        sendMessageButton: 'Send',
        
        // Menu
        menuTitle: 'Our Menu',
        menuSubtitle: 'Discover our delicious drinks',
        frappesTitle: '🧊 FRAPPES (Cold Drinks)',
        hotDrinksTitle: '🔥 HOT DRINKS',
        hotDrinksSubtitle: 'Coffee and chocolate based',
        teasTitle: 'Hot Teas',
        addToCart: '+ Add to Cart',
        
        // Products
        productsTitle: 'Our Products',
        newBadge: 'New',
        
        // Cart
        cartTitle: '🛒 Cart',
        emptyCart: 'Your cart is empty',
        emptyCartText: 'Add some delicious products!',
        total: 'Total:',
        checkoutButton: 'Proceed to Checkout',
        remove: 'Remove',
        
        // Checkout
        checkoutTitle: 'Checkout',
        shippingInfoTitle: '📦 Shipping Information',
        fullName: 'Full Name *',
        email: 'Email *',
        phone: 'Phone *',
        address: 'Delivery Address *',
        city: 'City *',
        postal: 'Postal Code *',
        paymentTitle: '💳 Payment Method',
        cardPayment: '💳 Credit/Debit Card',
        paypalPayment: 'PayPal',
        cardNumber: 'Card Number *',
        cardNumberPlaceholder: '1234 5678 9012 3456',
        expiryDate: 'Expiry Date *',
        expiryPlaceholder: 'MM/YY',
        cvv: 'CVV *',
        cvvPlaceholder: '123',
        cardName: 'Name on Card *',
        paypalEmail: 'PayPal Email *',
        paypalPlaceholder: 'your@email.com',
        paypalInfo: 'When confirming the order, you will be redirected to PayPal to complete the payment securely.',
        orderSummary: '📋 Order Summary',
        confirmOrder: '✓ Confirm Order',
        
        // Success
        successTitle: 'Order Confirmed!',
        successText: 'Your order has been processed successfully.',
        successEmail: 'We have sent the confirmation and receipt to your email.',
        successPaypal: 'Your payment has been processed with PayPal. We have sent the confirmation and receipt to your email.',
        orderNumber: 'Order Number:',
        continueShopping: 'Continue Shopping',
        
        // Footer
        privacyPolicy: 'Privacy Policy',
        accessibility: 'Accessibility Statement',
        terms: 'Terms and Conditions',
        refund: 'Refund Policy',
        shipping: 'Shipping Policy',
        rights: 'All rights reserved.',
        
        // Notifications
        newsletterSuccess: 'Thank you for subscribing! We will send you the latest news.',
        contactSuccess: 'Thank you for contacting us! We will respond soon.',
        emptyCartError: 'Your cart is empty',
        requiredFields: 'Please complete all fields',
        invalidEmail: 'Please enter a valid email',
        invalidCard: 'Invalid card number',
        invalidExpiry: 'Invalid date format (MM/YY)',
        invalidCVV: 'Invalid CVV',
        paypalEmailRequired: 'Please enter your PayPal email',
        cardDetailsRequired: 'Please complete card details',
        
        // Chat
        chatTitle: 'Café Elementos',
        chatStatus: '● We will respond as soon as we can',
        chatInput: 'Type your message...',
        chatButton: "Let's chat!"
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
let searchResults = [];

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    init();
    setupCardFormatting();
    setupMobileMenu();
    setupPromotionTimer();
    updateLastUpdateDate();
    
    // Cargar idioma guardado
    const savedLanguage = localStorage.getItem('cafeElementosLanguage');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        document.getElementById('languageSelect').value = currentLanguage;
        updatePageContent();
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
        
        // Si es la página de inicio, mostrar resultados de búsqueda si existen
        if (pageName === 'inicio' && (currentSearchTerm || currentCategory !== 'all')) {
            filterAndDisplayResults();
        }
    }
    
    // Cerrar menú móvil si está abierto
    closeMobileMenu();
}

// ============================================
// MENÚ MÓVIL
// ============================================
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
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
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        currentSearchTerm = searchInput.value.trim().toLowerCase();
        showPage('inicio');
        // Pequeño delay para asegurar que la página se cargue
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
    
    // Actualizar botones activos
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.classList.remove('active');
        if ((category === 'all' && btn.textContent.includes('Todos')) ||
            (category === 'coffee' && btn.textContent.includes('Café')) ||
            (category === 'drinks' && btn.textContent.includes('Bebidas'))) {
            btn.classList.add('active');
        }
    });
    
    filterAndDisplayResults();
}

function filterAndDisplayResults() {
    searchResults = [];
    
    // Buscar en productos de café
    if (currentCategory === 'all' || currentCategory === 'coffee') {
        const coffeeResults = products.filter(product => 
            product.name.toLowerCase().includes(currentSearchTerm) ||
            product.origin.toLowerCase().includes(currentSearchTerm)
        );
        searchResults = [...searchResults, ...coffeeResults.map(p => ({...p, itemType: 'coffee'}))];
    }
    
    // Buscar en bebidas
    if (currentCategory === 'all' || currentCategory === 'drinks') {
        const allDrinks = Object.values(menuItems).flat();
        const drinkResults = allDrinks.filter(drink => 
            drink.name.toLowerCase().includes(currentSearchTerm)
        );
        searchResults = [...searchResults, ...drinkResults.map(d => ({...d, itemType: 'drink'}))];
    }
    
    displaySearchResults();
}

function displaySearchResults() {
    let searchResultsContainer = document.getElementById('searchResults');
    
    // Crear contenedor si no existe
    if (!searchResultsContainer) {
        searchResultsContainer = document.createElement('div');
        searchResultsContainer.id = 'searchResults';
        searchResultsContainer.className = 'search-results';
        
        const searchInfo = document.querySelector('.search-info');
        if (searchInfo) {
            searchInfo.appendChild(searchResultsContainer);
        }
    }
    
    if (searchResults.length === 0) {
        const noResultsText = currentLanguage === 'es' ? 
            `No se encontraron resultados para "${currentSearchTerm}"` :
            `No results found for "${currentSearchTerm}"`;
            
        const tryDifferentText = currentLanguage === 'es' ?
            'Intenta con otras palabras clave o revisa la categoría seleccionada.' :
            'Try different keywords or check the selected category.';
            
        searchResultsContainer.innerHTML = `
            <div class="no-results">
                <p>${noResultsText}</p>
                <p>${tryDifferentText}</p>
            </div>
        `;
        return;
    }
    
    const resultsText = currentLanguage === 'es' ? 
        `Resultados de búsqueda (${searchResults.length})` :
        `Search results (${searchResults.length})`;
        
    searchResultsContainer.innerHTML = `
        <div class="search-results-header">
            <h3>${resultsText}</h3>
        </div>
        <div class="search-results-grid">
            ${searchResults.map((item, index) => createSearchResultCard(item, index)).join('')}
        </div>
    `;
}

function createSearchResultCard(item, index) {
    const t = translations[currentLanguage];
    
    if (item.itemType === 'coffee') {
        const selectedWeight = selectedWeights[item.id] || '1/4';
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
                        ${t.addToCart}
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
                        ${t.addToCart}
                    </button>
                </div>
            </div>
        `;
    }
}

function navigateToProduct(type, id) {
    if (type === 'coffee') {
        showPage('productos');
        // Aquí podrías implementar scroll automático al producto específico
    } else if (type === 'drink') {
        showPage('menu');
        // Aquí podrías implementar scroll automático a la bebida específica
    }
}

function getDrinkTypeName(type) {
    const typeNames = {
        'frappe': currentLanguage === 'es' ? 'Bebida Fría' : 'Cold Drink',
        'hot-coffee': currentLanguage === 'es' ? 'Café Caliente' : 'Hot Coffee',
        'tea': currentLanguage === 'es' ? 'Té' : 'Tea'
    };
    return typeNames[type] || (currentLanguage === 'es' ? 'Bebida' : 'Drink');
}

// ============================================
// SISTEMA MULTI-IDIOMA COMPLETO
// ============================================
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('cafeElementosLanguage', lang);
    updatePageContent();
}

function updatePageContent() {
    const t = translations[currentLanguage];
    
    // Actualizar navegación
    updateNavigation(t);
    
    // Actualizar páginas según la página actual
    switch(currentPage) {
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
        case 'privacy':
            // La política de privacidad se mantiene en español por ahora
            break;
    }
    
    // Actualizar elementos globales
    updateGlobalElements(t);
    
    // Si hay resultados de búsqueda, actualizarlos
    if (searchResults.length > 0) {
        displaySearchResults();
    }
}

function updateNavigation(t) {
    // Actualizar enlaces de navegación
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        const text = link.textContent.trim();
        if (text === 'Bienvenido' || text === 'Welcome') link.textContent = t.welcome;
        if (text === 'Inicio' || text === 'Home') link.textContent = t.home;
        if (text === 'Menú' || text === 'Menu') link.textContent = t.menu;
        if (text === 'Productos' || text === 'Products') link.textContent = t.products;
        if (text === 'Más' || text === 'More') link.textContent = t.more;
    });
    
    // Actualizar texto principal
    const principalText = document.querySelector('.principal-text');
    if (principalText) principalText.textContent = t.main;
    
    // Actualizar placeholder de búsqueda
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.placeholder = t.searchPlaceholder;
    
    // Actualizar botón de búsqueda
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) searchBtn.textContent = '🔍';
}

function updateWelcomePage(t) {
    const welcomeContent = document.querySelector('.welcome-content');
    if (welcomeContent) {
        const h1 = welcomeContent.querySelector('h1');
        const p = welcomeContent.querySelector('p:not(.shipping-info)');
        const button = welcomeContent.querySelector('.welcome-btn');
        
        if (h1) h1.textContent = t.welcomeTitle;
        if (p) p.textContent = t.welcomeText;
        if (button) button.textContent = t.exploreButton;
    }
    
    // Actualizar promoción
    const promotionBadge = document.querySelector('.promotion-badge');
    const promotionTitle = document.querySelector('.promotion-content h3');
    const promotionText = document.querySelector('.promotion-content p');
    const shippingInfo = document.querySelector('.shipping-info');
    
    if (promotionBadge) promotionBadge.textContent = t.promotionBadge;
    if (promotionTitle) promotionTitle.textContent = t.promotionTitle;
    if (promotionText) promotionText.textContent = t.promotionText;
    if (shippingInfo) shippingInfo.textContent = t.shippingInfo;
}

function updateHomePage(t) {
    // Actualizar sección de búsqueda
    const lastUpdate = document.querySelector('.last-update span');
    const mainSearch = document.getElementById('mainSearchInput');
    const searchBtn = document.querySelector('.search-main-btn');
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    if (lastUpdate) lastUpdate.innerHTML = `${t.lastUpdate}<span id="lastUpdateDate">15/01/2025</span>`;
    if (mainSearch) mainSearch.placeholder = t.searchPlaceholderMain;
    if (searchBtn) searchBtn.textContent = `🔍 ${t.searchButton}`;
    
    // Actualizar botones de categoría
    if (categoryBtns[0]) categoryBtns[0].textContent = t.categoriesAll;
    if (categoryBtns[1]) categoryBtns[1].textContent = t.categoriesCoffee;
    if (categoryBtns[2]) categoryBtns[2].textContent = t.categoriesDrinks;
    
    // Actualizar hero section
    const heroTitle = document.querySelector('.hero h1');
    const heroText = document.querySelector('.hero p');
    const newsletterInput = document.getElementById('newsletterEmail');
    const newsletterBtn = document.querySelector('.newsletter button');
    
    if (heroTitle) heroTitle.textContent = t.subscribeTitle;
    if (heroText) heroText.textContent = t.subscribeText;
    if (newsletterInput) newsletterInput.placeholder = t.emailPlaceholder;
    if (newsletterBtn) newsletterBtn.textContent = t.sendButton;
    
    // Actualizar sección de exploración
    const exploreTitle = document.querySelector('.section-title h2');
    const exploreText = document.querySelector('.section-title p');
    const viewMenuLink = document.querySelector('.section-title a');
    
    if (exploreTitle) exploreTitle.innerHTML = t.exploreTitle;
    if (exploreText) exploreText.innerHTML = `${t.exploreText}<a onclick="showPage('productos')">${t.viewMenu}</a>`;
    if (viewMenuLink) viewMenuLink.textContent = t.viewMenu;
    
    // Actualizar about section
    const aboutTitle = document.querySelector('.about-content h2');
    const aboutParagraphs = document.querySelectorAll('.about-content p');
    
    if (aboutTitle) aboutTitle.textContent = t.aboutTitle;
    if (aboutParagraphs[0]) aboutParagraphs[0].textContent = t.aboutText1;
    if (aboutParagraphs[1]) aboutParagraphs[1].textContent = t.aboutText2;
    
    // Actualizar contacto
    updateContactSection(t);
}

function updateMenuPage(t) {
    const menuTitle = document.querySelector('.menu-hero h1');
    const menuSubtitle = document.querySelector('.menu-hero p');
    const frappesTitle = document.querySelector('.menu-category h2');
    const hotDrinksTitle = document.querySelectorAll('.menu-category h2')[1];
    const hotDrinksSubtitle = document.querySelector('.menu-category h3');
    const teasTitle = document.querySelectorAll('.menu-category h3')[1];
    
    if (menuTitle) menuTitle.textContent = t.menuTitle;
    if (menuSubtitle) menuSubtitle.textContent = t.menuSubtitle;
    if (frappesTitle) frappesTitle.textContent = t.frappesTitle;
    if (hotDrinksTitle) hotDrinksTitle.textContent = t.hotDrinksTitle;
    if (hotDrinksSubtitle) hotDrinksSubtitle.textContent = t.hotDrinksSubtitle;
    if (teasTitle) teasTitle.textContent = t.teasTitle;
    
    // Actualizar botones de agregar al carrito
    const addButtons = document.querySelectorAll('.menu-item-add');
    addButtons.forEach(btn => {
        btn.textContent = t.addToCart;
    });
}

function updateProductsPage(t) {
    const productsTitle = document.querySelector('#page-productos h2');
    if (productsTitle) productsTitle.textContent = t.productsTitle;
    
    const newBadges = document.querySelectorAll('.product-badge');
    newBadges.forEach(badge => {
        badge.textContent = t.newBadge;
    });
}

function updateAboutPage(t) {
    const aboutTitle = document.querySelector('#page-nosotros .about-content h2');
    const aboutParagraphs = document.querySelectorAll('#page-nosotros .about-content p');
    
    if (aboutTitle) aboutTitle.textContent = t.aboutTitle;
    if (aboutParagraphs[0]) aboutParagraphs[0].textContent = t.aboutText1;
    if (aboutParagraphs[1]) aboutParagraphs[1].textContent = t.aboutText2;
    
    updateContactSection(t);
}

function updateContactSection(t) {
    const contactTitle = document.querySelector('.contact-container h2');
    const contactItems = document.querySelectorAll('.contact-item');
    
    if (contactTitle) contactTitle.textContent = t.contactTitle;
    
    if (contactItems[0]) {
        contactItems[0].querySelector('h3').textContent = t.address;
        contactItems[0].querySelector('p').textContent = t.addressText;
    }
    if (contactItems[1]) {
        contactItems[1].querySelector('h3').textContent = t.phone;
        contactItems[1].querySelector('p').textContent = t.phoneText;
    }
    if (contactItems[2]) {
        contactItems[2].querySelector('h3').textContent = t.email;
        contactItems[2].querySelector('p').textContent = t.emailText;
    }
    
    // Actualizar formulario
    const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    const submitBtn = document.querySelector('.submit-btn');
    
    if (formInputs[0]) formInputs[0].placeholder = t.namePlaceholder;
    if (formInputs[1]) formInputs[1].placeholder = t.lastNamePlaceholder;
    if (formInputs[2]) formInputs[2].placeholder = t.emailInputPlaceholder;
    if (formInputs[3]) formInputs[3].placeholder = t.phoneInputPlaceholder;
    if (formInputs[4]) formInputs[4].placeholder = t.messagePlaceholder;
    if (submitBtn) submitBtn.textContent = t.sendMessageButton;
}

function updateGlobalElements(t) {
    // Actualizar carrito
    const cartTitle = document.querySelector('.cart-header h2');
    const cartTotal = document.querySelector('.cart-total span:first-child');
    const checkoutBtn = document.querySelector('.checkout-btn');
    
    if (cartTitle) cartTitle.textContent = t.cartTitle;
    if (cartTotal) cartTotal.textContent = t.total;
    if (checkoutBtn) checkoutBtn.textContent = t.checkoutButton;
    
    // Actualizar chat
    const chatButton = document.querySelector('.chat-text');
    const chatTitle = document.querySelector('.chat-header h3');
    const chatStatus = document.querySelector('.chat-status');
    const chatInput = document.getElementById('chatInput');
    
    if (chatButton) chatButton.textContent = t.chatButton;
    if (chatTitle) chatTitle.textContent = t.chatTitle;
    if (chatStatus) chatStatus.textContent = t.chatStatus;
    if (chatInput) chatInput.placeholder = t.chatInput;
    
    // Actualizar footer
    const footerLinks = document.querySelectorAll('.footer-section a');
    if (footerLinks[0]) footerLinks[0].textContent = t.privacyPolicy;
    if (footerLinks[1]) footerLinks[1].textContent = t.accessibility;
    if (footerLinks[2]) footerLinks[2].textContent = t.terms;
    if (footerLinks[3]) footerLinks[3].textContent = t.refund;
    if (footerLinks[4]) footerLinks[4].textContent = t.shipping;
    
    const footerBottom = document.querySelector('.footer-bottom');
    if (footerBottom) footerBottom.innerHTML = `© 2025 Café Elementos. ${t.rights}`;
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
        
        if (timeLeft <= 0) {
            const timerText = currentLanguage === 'es' ? 
                '¡La promoción ha terminado!' : 
                'The promotion has ended!';
            document.getElementById('promotionTimer').textContent = timerText;
            return;
        }
        
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        const timerText = currentLanguage === 'es' ?
            `La promoción termina en: ${days}d ${hours}h ${minutes}m ${seconds}s` :
            `Promotion ends in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
            
        document.getElementById('promotionTimer').textContent = timerText;
    }
    
    // Actualizar cada segundo
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
    const selectedWeight = selectedWeights[product.id] || '1/4';
    const currentPrice = product.prices[selectedWeight];
    const t = translations[currentLanguage];
    
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-badge">${t.newBadge}</div>
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\\'font-size:4rem;display:flex;align-items:center;justify-content:center;height:100%\\'>☕</div>'">
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
                ${t.addToCart}
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
    
    // Actualizar precio mostrado
    const priceEl = document.getElementById(`price-${containerId}-${productId}`);
    if (priceEl) {
        priceEl.textContent = `$${product.prices[weight]}.00 MXN`;
    }
    
    // Actualizar botones activos
    const card = document.querySelector(`.product-card[data-product-id="${productId}"]`);
    if (card) {
        const container = card.closest(`#page-${containerId === 'productos' ? 'productos' : 'tienda'}`);
        if (container) {
            const buttons = container.querySelectorAll(`.product-card[data-product-id="${productId}"] .weight-btn`);
            buttons.forEach(btn => {
                btn.classList.remove('active');
                if (btn.textContent.trim().includes(weight)) {
                    btn.classList.add('active');
                }
            });
        }
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
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
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
    showNotification(`${product.name} (${weight}) ${currentLanguage === 'es' ? 'agregado al carrito' : 'added to cart'}`, 'success');
}

function addMenuToCart(itemId) {
    const item = Object.values(menuItems).flat().find(i => i.id === itemId);
    const size = selectedMenuSizes[itemId];
    const price = item.prices ? item.prices[size] : item.price;
    const sizeText = item.prices ? size : 'Único';
    const t = translations[currentLanguage];
    
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
    showNotification(`${item.name} (${sizeText}) ${currentLanguage === 'es' ? 'agregado al carrito' : 'added to cart'}`, 'success');
}

function removeFromCart(index) {
    const item = cart[index];
    cart.splice(index, 1);
    updateCart();
    showNotification(`${item.name} ${currentLanguage === 'es' ? 'eliminado del carrito' : 'removed from cart'}`, 'success');
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
    if (!cartItems) return;
    
    const t = translations[currentLanguage];
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <p style="font-size: 3rem; margin-bottom: 1rem;">🛒</p>
                <p>${t.emptyCart}</p>
                <p style="font-size: 0.85rem; margin-top: 0.5rem;">${t.emptyCartText}</p>
            </div>
        `;
        return;
    }
    
    cartItems.innerHTML = cart.map((item, index) => {
        const displayInfo = item.type === 'product' 
            ? `${item.weight} kg` 
            : item.size;
        
        const imageHTML = item.image 
            ? `<img src="${item.image}" alt="${item.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\\'font-size:2.5rem\\'>☕</div>'">`
            : '<div style="font-size:2.5rem;">☕</div>';
        
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
                <button class="cart-item-remove" onclick="removeFromCart(${index})" title="${t.remove}">✕</button>
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
// CHECKOUT
// ============================================
function openCheckout() {
    const t = translations[currentLanguage];
    
    if (cart.length === 0) {
        showNotification(t.emptyCartError, 'error');
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
    
    // Actualizar textos del checkout
    updateCheckoutTexts();
}

function updateCheckoutTexts() {
    const t = translations[currentLanguage];
    
    // Actualizar títulos
    const checkoutTitle = document.querySelector('.checkout-header h2');
    const shippingTitle = document.querySelector('.checkout-content h3:nth-child(1)');
    const paymentTitle = document.querySelector('.checkout-content h3:nth-child(3)');
    const orderSummaryTitle = document.querySelector('.order-summary h3');
    
    if (checkoutTitle) checkoutTitle.textContent = t.checkoutTitle;
    if (shippingTitle) shippingTitle.textContent = t.shippingInfoTitle;
    if (paymentTitle) paymentTitle.textContent = t.paymentTitle;
    if (orderSummaryTitle) orderSummaryTitle.textContent = t.orderSummary;
    
    // Actualizar labels
    const labels = document.querySelectorAll('.form-group label');
    if (labels[0]) labels[0].textContent = t.fullName;
    if (labels[1]) labels[1].textContent = t.email;
    if (labels[2]) labels[2].textContent = t.phone;
    if (labels[3]) labels[3].textContent = t.address;
    if (labels[4]) labels[4].textContent = t.city;
    if (labels[5]) labels[5].textContent = t.postal;
    if (labels[6]) labels[6].textContent = t.cardNumber;
    if (labels[7]) labels[7].textContent = t.expiryDate;
    if (labels[8]) labels[8].textContent = t.cvv;
    if (labels[9]) labels[9].textContent = t.cardName;
    if (labels[10]) labels[10].textContent = t.paypalEmail;
    
    // Actualizar placeholders
    const inputs = document.querySelectorAll('.checkout-form input');
    if (inputs[6]) inputs[6].placeholder = t.cardNumberPlaceholder;
    if (inputs[7]) inputs[7].placeholder = t.expiryPlaceholder;
    if (inputs[8]) inputs[8].placeholder = t.cvvPlaceholder;
    if (inputs[10]) inputs[10].placeholder = t.paypalPlaceholder;
    
    // Actualizar métodos de pago
    const paymentOptions = document.querySelectorAll('.payment-option span');
    if (paymentOptions[0]) paymentOptions[0].textContent = t.cardPayment;
    if (paymentOptions[1]) {
        paymentOptions[1].innerHTML = `<span style="background: #0070ba; color: white; padding: 4px 12px; border-radius: 4px; font-weight: 600;">${t.paypalPayment}</span>`;
    }
    
    // Actualizar info de PayPal
    const paypalInfo = document.querySelector('.paypal-info p');
    if (paypalInfo) paypalInfo.textContent = t.paypalInfo;
    
    // Actualizar botón de confirmar
    const confirmBtn = document.querySelector('.confirm-btn');
    if (confirmBtn) confirmBtn.textContent = t.confirmOrder;
}

function closeCheckout() {
    const modal = document.getElementById('checkoutModal');
    const overlay = document.getElementById('checkoutOverlay');
    modal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// TOGGLE PAYMENT FORM
// ============================================
function togglePaymentForm(method) {
    const cardForm = document.getElementById('cardPaymentForm');
    const paypalForm = document.getElementById('paypalPaymentForm');
    
    if (method === 'card') {
        cardForm.style.display = 'block';
        paypalForm.style.display = 'none';
        
        // Hacer campos requeridos
        document.getElementById('cardNumber').required = true;
        document.getElementById('cardExpiry').required = true;
        document.getElementById('cardCVV').required = true;
        document.getElementById('cardName').required = true;
        document.getElementById('paypalEmail').required = false;
    } else if (method === 'paypal') {
        cardForm.style.display = 'none';
        paypalForm.style.display = 'block';
        
        // Hacer campos no requeridos
        document.getElementById('cardNumber').required = false;
        document.getElementById('cardExpiry').required = false;
        document.getElementById('cardCVV').required = false;
        document.getElementById('cardName').required = false;
        document.getElementById('paypalEmail').required = true;
    }
}

// ============================================
// CONFIRMAR ORDEN
// ============================================
async function confirmOrder() {
    const t = translations[currentLanguage];
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    
    // Obtener valores comunes del formulario
    const name = document.getElementById('checkoutName').value.trim();
    const email = document.getElementById('checkoutEmail').value.trim();
    const phone = document.getElementById('checkoutPhone').value.trim();
    const address = document.getElementById('checkoutAddress').value.trim();
    const city = document.getElementById('checkoutCity').value.trim();
    const postal = document.getElementById('checkoutPostal').value.trim();
    
    // Validaciones comunes
    if (!name || !email || !phone || !address || !city || !postal) {
        showNotification(t.requiredFields, 'error');
        return;
    }
    
    if (!validateEmail(email)) {
        showNotification(t.invalidEmail, 'error');
        return;
    }
    
    // Validaciones específicas según método de pago
    if (paymentMethod === 'card') {
        const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
        const cardExpiry = document.getElementById('cardExpiry').value;
        const cardCVV = document.getElementById('cardCVV').value;
        const cardName = document.getElementById('cardName').value.trim();
        
        if (!cardNumber || !cardExpiry || !cardCVV || !cardName) {
            showNotification(t.cardDetailsRequired, 'error');
            return;
        }
        
        if (cardNumber.length < 13) {
            showNotification(t.invalidCard, 'error');
            return;
        }
        
        if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) {
            showNotification(t.invalidExpiry, 'error');
            return;
        }
        
        if (cardCVV.length < 3) {
            showNotification(t.invalidCVV, 'error');
            return;
        }
    } else if (paymentMethod === 'paypal') {
        const paypalEmail = document.getElementById('paypalEmail').value.trim();
        
        if (!paypalEmail) {
            showNotification(t.paypalEmailRequired, 'error');
            return;
        }
        
        if (!validateEmail(paypalEmail)) {
            showNotification(t.invalidEmail, 'error');
            return;
        }
    }
    
    // Deshabilitar botón mientras procesa
    const confirmBtn = document.querySelector('.confirm-btn');
    const originalText = confirmBtn.textContent;
    confirmBtn.disabled = true;
    confirmBtn.innerHTML = '<span class="loading-spinner"></span>' + (currentLanguage === 'es' ? 'Procesando...' : 'Processing...');
    
    // Generar número de orden
    const orderNumber = 'CE' + Date.now().toString().slice(-8);
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Preparar contenido del email
    const itemsList = cart.map(item => {
        const displayInfo = item.type === 'product' ? `(${item.weight})` : `(${item.size})`;
        return `• ${item.name} ${displayInfo} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)} MXN`;
    }).join('\n');
    
    const paymentInfo = paymentMethod === 'card' 
        ? `Tarjeta: **** **** **** ${document.getElementById('cardNumber').value.replace(/\s/g, '').slice(-4)}\nTitular: ${document.getElementById('cardName').value.trim()}`
        : `PayPal: ${document.getElementById('paypalEmail').value.trim()}`;
    
    const emailBody = `
╔══════════════════════════════════════════╗
     ${currentLanguage === 'es' ? 'CONFIRMACIÓN DE PEDIDO - CAFÉ ELEMENTOS' : 'ORDER CONFIRMATION - CAFÉ ELEMENTOS'}
╚══════════════════════════════════════════╝

${currentLanguage === 'es' ? 'Número de Orden' : 'Order Number'}: ${orderNumber}
${currentLanguage === 'es' ? 'Fecha' : 'Date'}: ${new Date().toLocaleDateString(currentLanguage === 'es' ? 'es-MX' : 'en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
})}

──────────────────────────────────────────
${currentLanguage === 'es' ? 'DATOS DEL CLIENTE' : 'CUSTOMER INFORMATION'}
──────────────────────────────────────────
${currentLanguage === 'es' ? 'Nombre' : 'Name'}: ${name}
Email: ${email}
${currentLanguage === 'es' ? 'Teléfono' : 'Phone'}: ${phone}
${currentLanguage === 'es' ? 'Dirección' : 'Address'}: ${address}
${currentLanguage === 'es' ? 'Ciudad' : 'City'}: ${city}
${currentLanguage === 'es' ? 'Código Postal' : 'Postal Code'}: ${postal}

──────────────────────────────────────────
${currentLanguage === 'es' ? 'PRODUCTOS ORDENADOS' : 'ORDERED PRODUCTS'}
──────────────────────────────────────────
${itemsList}

──────────────────────────────────────────
                    ${currentLanguage === 'es' ? 'TOTAL' : 'TOTAL'}: $${total.toFixed(2)} MXN
──────────────────────────────────────────

${currentLanguage === 'es' ? 'INFORMACIÓN DE PAGO' : 'PAYMENT INFORMATION'}
──────────────────────────────────────────
${currentLanguage === 'es' ? 'Método' : 'Method'}: ${paymentMethod === 'card' ? (currentLanguage === 'es' ? 'Tarjeta de Crédito/Débito' : 'Credit/Debit Card') : 'PayPal'}
${paymentInfo}
${currentLanguage === 'es' ? 'Estado' : 'Status'}: ✓ ${currentLanguage === 'es' ? 'PAGADO' : 'PAID'}

╔══════════════════════════════════════════╗

${currentLanguage === 'es' ? '¡Gracias por tu compra!' : 'Thank you for your purchase!'}

${currentLanguage === 'es' ? 'Tu pedido será procesado y enviado en las próximas 24-48 horas.' : 'Your order will be processed and shipped within the next 24-48 hours.'}
${currentLanguage === 'es' ? 'Te enviaremos un correo con el número de seguimiento cuando tu pedido sea enviado.' : 'We will send you an email with the tracking number when your order is shipped.'}

${currentLanguage === 'es' ? 'Para cualquier duda, contáctanos:' : 'For any questions, contact us:'}
📞 993 426 3253
📧 cafelementos@gmail.com

──────────────────────────────────────────
Café Elementos
Av Paseo Tabasco 1124, Jesus Garcia
86040 Villahermosa, Tabasco, México
╚══════════════════════════════════════════╝
    `.trim();

    try {
        // Enviar email usando EmailJS
        await sendOrderEmail({
            to_email: email,
            to_name: name,
            order_number: orderNumber,
            email_body: emailBody
        });
        
        // Éxito
        closeCheckout();
        document.getElementById('orderNumber').textContent = orderNumber;
        
        // Actualizar texto según método de pago
        const paymentMethodText = document.getElementById('paymentMethodText');
        if (paymentMethod === 'paypal') {
            paymentMethodText.textContent = t.successPaypal;
        } else {
            paymentMethodText.textContent = t.successEmail;
        }
        
        const successModal = document.getElementById('successModal');
        const successOverlay = document.getElementById('successOverlay');
        
        // Actualizar textos del modal de éxito
        const successIcon = successModal.querySelector('.success-icon');
        const successTitle = successModal.querySelector('h2');
        const successText = successModal.querySelector('p:nth-child(3)');
        const orderNumberLabel = successModal.querySelector('p:nth-child(5)');
        const continueBtn = successModal.querySelector('.close-modal');
        
        if (successIcon) successIcon.textContent = '✓';
        if (successTitle) successTitle.textContent = t.successTitle;
        if (successText) successText.textContent = t.successText;
        if (orderNumberLabel) orderNumberLabel.innerHTML = `<strong>${t.orderNumber}</strong>`;
        if (continueBtn) continueBtn.textContent = t.continueShopping;
        
        successModal.classList.add('active');
        successOverlay.classList.add('active');
        
        // Limpiar carrito y formulario
        cart = [];
        updateCart();
        document.getElementById('checkoutForm').reset();
        
    } catch (error) {
        console.error('Error enviando email:', error);
        showNotification(currentLanguage === 'es' ? 'Error al procesar el pedido. Intenta de nuevo.' : 'Error processing order. Please try again.', 'error');
    } finally {
        confirmBtn.disabled = false;
        confirmBtn.textContent = originalText;
    }
}

// ============================================
// ENVÍO DE EMAILS CON EMAILJS
// ============================================
async function sendOrderEmail(params) {
    // Verificar si EmailJS está configurado
    if (EMAILJS_SERVICE_ID === 'service_xxxxxxx') {
        console.warn('EmailJS no está configurado. Mostrando email en consola:');
        console.log('╔══════════════════════════════════════════╗');
        console.log('TICKET DE COMPRA - SIMULACIÓN');
        console.log('╚══════════════════════════════════════════╝');
        console.log('Para:', params.to_email);
        console.log('Nombre:', params.to_name);
        console.log('Orden:', params.order_number);
        console.log('──────────────────────────────────────────');
        console.log(params.email_body);
        console.log('╚══════════════════════════════════════════╝');
        
        // Simular delay de envío
        await new Promise(resolve => setTimeout(resolve, 1500));
        return { status: 200 };
    }
    
    // Enviar con EmailJS
    return emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        params,
        EMAILJS_PUBLIC_KEY
    );
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
        showNotification(t.requiredFields, 'error');
        return;
    }
    
    if (!validateEmail(email)) {
        showNotification(t.invalidEmail, 'error');
        return;
    }
    
    showNotification(t.newsletterSuccess, 'success');
    emailInput.value = '';
}

function sendContact() {
    const name = document.getElementById('contactName')?.value.trim();
    const email = document.getElementById('contactEmail')?.value.trim();
    const message = document.getElementById('contactMessage')?.value.trim();
    const t = translations[currentLanguage];
    
    if (!name || !email || !message) {
        showNotification(t.requiredFields, 'error');
        return;
    }
    
    if (!validateEmail(email)) {
        showNotification(t.invalidEmail, 'error');
        return;
    }
    
    showNotification(t.contactSuccess, 'success');
    
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
        const responses = currentLanguage === 'es' ? [
            '¡Gracias por tu mensaje! Un representante te atenderá pronto.',
            '¿Te gustaría conocer nuestros productos destacados?',
            'Estamos aquí para ayudarte. ¿En qué más puedo asistirte?',
            '¡Excelente pregunta! Déjame verificar esa información para ti.'
        ] : [
            'Thank you for your message! A representative will assist you shortly.',
            'Would you like to know about our featured products?',
            'We are here to help you. How else can I assist you?',
            'Great question! Let me check that information for you.'
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

// ============================================
// ORDENAMIENTO DE PRODUCTOS
// ============================================
function sortProducts(criteria) {
    let sortedProducts = [...products];
    
    switch(criteria) {
        case 'price-asc':
            sortedProducts.sort((a, b) => a.prices['1/4'] - b.prices['1/4']);
            break;
        case 'price-desc':
            sortedProducts.sort((a, b) => b.prices['1/4'] - a.prices['1/4']);
            break;
        case 'name':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    
    return sortedProducts;
}

// Event listener para el selector de ordenamiento
document.addEventListener('DOMContentLoaded', function() {
    const sortSelect = document.querySelector('.sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', function(e) {
            const container = document.getElementById('productsGrid');
            const criteria = e.target.value;
            let sorted = products;
            
            if (criteria.includes('Menor') || criteria.includes('Lowest')) {
                sorted = sortProducts('price-asc');
            } else if (criteria.includes('Mayor') || criteria.includes('Highest')) {
                sorted = sortProducts('price-desc');
            } else if (criteria.includes('A-Z') || criteria.includes('Name')) {
                sorted = sortProducts('name');
            }
            
            container.innerHTML = sorted.map(product => createProductCard(product, 'productos')).join('');
        });
    }
});
