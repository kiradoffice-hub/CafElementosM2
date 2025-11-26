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
// TRADUCCIONES
// ============================================
const translations = {
    es: {
        // Navegación
        nav_welcome: 'Bienvenido',
        nav_home: 'Inicio',
        nav_menu: 'Menú',
        nav_products: 'Productos',
        nav_more: 'Más',
        nav_principal: 'Principal',
        
        // Bienvenida
        welcome_title: 'Bienvenido a Café Elementos',
        welcome_description: 'El lugar donde el café cobra vida. Nos dedicamos a ofrecer café de alta calidad con un toque especial que deleita tus sentidos. Descubre nuestra pasión por el café en cada taza que preparamos.',
        welcome_button: 'Explorar Nuestro Café',
        
        // Promoción
        promo_badge: '🔥 PROMOCIÓN',
        promo_title: '¡2 Frappes por $120!',
        promo_description: 'Disfruta de nuestra promoción especial por tiempo limitado',
        promo_timer: 'La promoción termina en:',
        promo_shipping: '🚚 Envío gratis en compras mayores a $300 en zonas cercanas',
        
        // Búsqueda
        search_placeholder: 'Buscar productos...',
        search_main_placeholder: 'Buscar café, bebidas, productos...',
        search_button: '🔍 Buscar',
        search_all: 'Todos',
        search_coffee: 'Café a Granel',
        search_drinks: 'Bebidas',
        
        // Newsletter
        newsletter_title: 'SUSCRÍBETE',
        newsletter_description: 'Regístrate al correo electrónico para no perderte de nuestros eventos 2025',
        newsletter_placeholder: 'Introduce tu correo electrónico aquí',
        newsletter_button: 'Enviar',
        
        // Secciones
        explore_title: 'EXPLORA<br>NUESTRO CAFÉ',
        explore_description: 'Descubre el sabor del café perfecto',
        view_menu: 'VER MENÚ',
        about_title: 'Acerca de Nosotros',
        about_text1: 'Bienvenido a Café Elementos, el lugar donde el café cobra vida. Nos dedicamos a ofrecer café de alta calidad con un toque especial que deleita tus sentidos. Nuestra pasión por el café se refleja en cada taza que preparamos, buscando brindarte una experiencia única en cada sorbo.',
        about_text2: 'En Café Elementos, nos esforzamos por crear un ambiente acogedor donde te sientas como en casa. Nuestro equipo de baristas expertos está listo para guiarte a través de nuestro menú y recomendarte la combinación perfecta para tu paladar. ¡Ven y disfruta de la verdadera esencia del café con nosotros!',
        
        // Contacto
        contact_title: 'Contáctanos',
        contact_address: 'Dirección',
        contact_phone: 'Teléfono',
        contact_email: 'Correo',
        contact_name: 'Nombre',
        contact_lastname: 'Apellido',
        contact_message: 'Mensaje',
        contact_submit: 'Enviar',
        
        // Menú
        menu_title: 'Nuestro Menú',
        menu_description: 'Descubre nuestras deliciosas bebidas',
        menu_frappes: '🧊 FRAPPES (Bebidas Frías)',
        menu_hot: '🔥 BEBIDAS CALIENTES',
        menu_hot_subtitle: 'A base de café y chocolate',
        menu_teas: 'Tés Calientes',
        
        // Productos
        products_title: 'Nuestros Productos',
        product_badge: 'Nuevo',
        add_to_cart: 'Agregar al carrito',
        
        // Carrito
        cart_title: '🛒 Carrito',
        cart_empty: 'Tu carrito está vacío',
        cart_empty_subtitle: '¡Agrega algunos productos deliciosos!',
        cart_total: 'Total:',
        cart_checkout: 'Proceder al Pago',
        
        // Checkout
        checkout_title: 'Finalizar Compra',
        checkout_shipping: '📦 Información de Envío',
        checkout_payment: '💳 Método de Pago',
        checkout_name: 'Nombre Completo *',
        checkout_email: 'Correo Electrónico *',
        checkout_phone: 'Teléfono *',
        checkout_address: 'Dirección de Entrega *',
        checkout_city: 'Ciudad *',
        checkout_postal: 'Código Postal *',
        checkout_card: '💳 Tarjeta de Crédito/Débito',
        checkout_paypal: 'PayPal',
        checkout_card_number: 'Número de Tarjeta *',
        checkout_card_expiry: 'Fecha de Vencimiento *',
        checkout_card_cvv: 'CVV *',
        checkout_card_name: 'Nombre en la Tarjeta *',
        checkout_paypal_info: 'Al confirmar el pedido, serás redirigido a PayPal para completar el pago de forma segura.',
        checkout_paypal_email: 'Correo de PayPal *',
        checkout_summary: '📋 Resumen del Pedido',
        checkout_confirm: '✓ Confirmar Pedido',
        
        // Éxito
        success_title: '¡Pedido Confirmado!',
        success_message: 'Tu pedido ha sido procesado exitosamente.',
        success_email: 'Hemos enviado la confirmación y el ticket a tu correo electrónico.',
        success_order: 'Número de Orden:',
        success_continue: 'Continuar Comprando',
        
        // Chat
        chat_button: '¡Vamos a chatear!',
        chat_title: 'Café Elementos',
        chat_status: '● Te responderemos tan pronto como podamos',
        chat_placeholder: 'Escribe tu mensaje...',
        chat_initial: '¡Hola! Bienvenido a Café Elementos. ¿En qué podemos ayudarte hoy?',
        
        // Footer
        footer_privacy: 'Política de Privacidad',
        footer_accessibility: 'Declaración de Accesibilidad',
        footer_terms: 'Términos y Condiciones',
        footer_refund: 'Política de Reembolso',
        footer_shipping: 'Política de Envío',
        footer_rights: '© 2025 Café Elementos. Todos los derechos reservados.',
        
        // Notificaciones
        notif_added: 'agregado al carrito',
        notif_removed: 'eliminado del carrito',
        notif_empty_cart: 'Tu carrito está vacío',
        notif_fill_fields: 'Por favor completa todos los campos',
        notif_invalid_email: 'Por favor ingresa un correo válido',
        notif_invalid_card: 'Número de tarjeta inválido',
        notif_invalid_expiry: 'Formato de fecha inválido (MM/AA)',
        notif_invalid_cvv: 'CVV inválido',
        notif_processing: 'Procesando...',
        notif_subscribed: '¡Gracias por suscribirte! Te enviaremos las últimas noticias.',
        notif_contact_sent: '¡Gracias por contactarnos! Te responderemos pronto.'
    },
    en: {
        // Navigation
        nav_welcome: 'Welcome',
        nav_home: 'Home',
        nav_menu: 'Menu',
        nav_products: 'Products',
        nav_more: 'More',
        nav_principal: 'Main',
        
        // Welcome
        welcome_title: 'Welcome to Café Elementos',
        welcome_description: 'The place where coffee comes to life. We are dedicated to offering high-quality coffee with a special touch that delights your senses. Discover our passion for coffee in every cup we prepare.',
        welcome_button: 'Explore Our Coffee',
        
        // Promotion
        promo_badge: '🔥 PROMOTION',
        promo_title: '2 Frappes for $120!',
        promo_description: 'Enjoy our special promotion for a limited time',
        promo_timer: 'Promotion ends in:',
        promo_shipping: '🚚 Free shipping on purchases over $300 in nearby areas',
        
        // Search
        search_placeholder: 'Search products...',
        search_main_placeholder: 'Search coffee, drinks, products...',
        search_button: '🔍 Search',
        search_all: 'All',
        search_coffee: 'Bulk Coffee',
        search_drinks: 'Drinks',
        
        // Newsletter
        newsletter_title: 'SUBSCRIBE',
        newsletter_description: 'Sign up for our email list to stay updated on our 2025 events',
        newsletter_placeholder: 'Enter your email here',
        newsletter_button: 'Submit',
        
        // Sections
        explore_title: 'EXPLORE<br>OUR COFFEE',
        explore_description: 'Discover the taste of perfect coffee',
        view_menu: 'VIEW MENU',
        about_title: 'About Us',
        about_text1: 'Welcome to Café Elementos, the place where coffee comes to life. We are dedicated to offering high-quality coffee with a special touch that delights your senses. Our passion for coffee is reflected in every cup we prepare, seeking to provide you with a unique experience in every sip.',
        about_text2: 'At Café Elementos, we strive to create a welcoming environment where you feel at home. Our team of expert baristas is ready to guide you through our menu and recommend the perfect combination for your palate. Come and enjoy the true essence of coffee with us!',
        
        // Contact
        contact_title: 'Contact Us',
        contact_address: 'Address',
        contact_phone: 'Phone',
        contact_email: 'Email',
        contact_name: 'Name',
        contact_lastname: 'Last Name',
        contact_message: 'Message',
        contact_submit: 'Submit',
        
        // Menu
        menu_title: 'Our Menu',
        menu_description: 'Discover our delicious drinks',
        menu_frappes: '🧊 FRAPPES (Cold Drinks)',
        menu_hot: '🔥 HOT DRINKS',
        menu_hot_subtitle: 'Coffee and chocolate based',
        menu_teas: 'Hot Teas',
        
        // Products
        products_title: 'Our Products',
        product_badge: 'New',
        add_to_cart: 'Add to cart',
        
        // Cart
        cart_title: '🛒 Cart',
        cart_empty: 'Your cart is empty',
        cart_empty_subtitle: 'Add some delicious products!',
        cart_total: 'Total:',
        cart_checkout: 'Proceed to Checkout',
        
        // Checkout
        checkout_title: 'Complete Purchase',
        checkout_shipping: '📦 Shipping Information',
        checkout_payment: '💳 Payment Method',
        checkout_name: 'Full Name *',
        checkout_email: 'Email *',
        checkout_phone: 'Phone *',
        checkout_address: 'Delivery Address *',
        checkout_city: 'City *',
        checkout_postal: 'Postal Code *',
        checkout_card: '💳 Credit/Debit Card',
        checkout_paypal: 'PayPal',
        checkout_card_number: 'Card Number *',
        checkout_card_expiry: 'Expiration Date *',
        checkout_card_cvv: 'CVV *',
        checkout_card_name: 'Name on Card *',
        checkout_paypal_info: 'Upon confirming your order, you will be redirected to PayPal to complete the payment securely.',
        checkout_paypal_email: 'PayPal Email *',
        checkout_summary: '📋 Order Summary',
        checkout_confirm: '✓ Confirm Order',
        
        // Success
        success_title: 'Order Confirmed!',
        success_message: 'Your order has been successfully processed.',
        success_email: 'We have sent the confirmation and ticket to your email.',
        success_order: 'Order Number:',
        success_continue: 'Continue Shopping',
        
        // Chat
        chat_button: "Let's chat!",
        chat_title: 'Café Elementos',
        chat_status: '● We will respond as soon as possible',
        chat_placeholder: 'Type your message...',
        chat_initial: 'Hello! Welcome to Café Elementos. How can we help you today?',
        
        // Footer
        footer_privacy: 'Privacy Policy',
        footer_accessibility: 'Accessibility Statement',
        footer_terms: 'Terms and Conditions',
        footer_refund: 'Refund Policy',
        footer_shipping: 'Shipping Policy',
        footer_rights: '© 2025 Café Elementos. All rights reserved.',
        
        // Notifications
        notif_added: 'added to cart',
        notif_removed: 'removed from cart',
        notif_empty_cart: 'Your cart is empty',
        notif_fill_fields: 'Please fill in all fields',
        notif_invalid_email: 'Please enter a valid email',
        notif_invalid_card: 'Invalid card number',
        notif_invalid_expiry: 'Invalid date format (MM/YY)',
        notif_invalid_cvv: 'Invalid CVV',
        notif_processing: 'Processing...',
        notif_subscribed: 'Thank you for subscribing! We will send you the latest news.',
        notif_contact_sent: 'Thank you for contacting us! We will respond soon.'
    }
};

let currentLanguage = 'es';

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
        image: PRODUCT_IMAGE
    },
    {
        id: 2,
        name: 'Tatetela, Veracruz',
        origin: 'Lavado',
        prices: { '1/4': 120, '1/2': 240, '1kg': 480 },
        image: PRODUCT_IMAGE
    },
    {
        id: 3,
        name: 'Adelitas, Chiapas',
        origin: 'Lavado',
        prices: { '1/4': 120, '1/2': 240, '1kg': 480 },
        image: PRODUCT_IMAGE
    }
];

// ============================================
// DATOS DEL MENÚ
// ============================================
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
        { id: 204, name: 'Capuchino', price: 65, category: 'hot-coffee' },
        { id: 205, name: 'Americano', price: 48, category: 'hot-coffee' },
        { id: 206, name: 'Moca', prices: { 'Chico': 68, 'Grande': 72 }, category: 'hot-coffee' },
        { id: 207, name: 'Latte caramelo', price: 72, category: 'hot-coffee' },
        { id: 208, name: 'Choco-latte', prices: { 'Chico': 68, 'Grande': 72 }, category: 'hot-coffee' },
        { id: 209, name: 'Chocolatada', prices: { 'Chico': 68, 'Grande': 72 }, category: 'hot-coffee' }
    ],
    teas: [
        { id: 301, name: 'Té Negro (Earl Grey)', prices: { 'Chico': 68, 'Grande': 72 }, category: 'tea' },
        { id: 302, name: 'Té Negro Chai', prices: { 'Chico': 68, 'Grande': 72 }, category: 'tea' },
        { id: 303, name: 'Té Verde Flamingo Limonada', prices: { 'Chico': 68, 'Grande': 72 }, category: 'tea' },
        { id: 304, name: 'Matcha', prices: { 'Chico': 68, 'Grande': 72 }, category: 'tea' },
        { id: 305, name: 'Variedad de Tisanas', prices: { 'Chico': 68, 'Grande': 72 }, category: 'tea' }
    ]
};

// ============================================
// ESTADO GLOBAL
// ============================================
let cart = [];
let currentPage = 'bienvenido';
let selectedWeights = {};
let selectedMenuSizes = {};

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    init();
    setupCardFormatting();
    setupMobileMenu();
    setupLanguageSelector();
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
    updateLanguage();
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
            mobileMenuBtn.classList.toggle('active');
            mobileMenuContainer.classList.toggle('active');
            
            if (mobileMenuContainer.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Cerrar al hacer clic en un enlace
        const navLinks = mobileMenuContainer.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuBtn.classList.remove('active');
                mobileMenuContainer.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Cerrar al hacer clic fuera
        document.addEventListener('click', function(e) {
            if (mobileMenuContainer.classList.contains('active') && 
                !mobileMenuContainer.contains(e.target) && 
                !mobileMenuBtn.contains(e.target)) {
                mobileMenuBtn.classList.remove('active');
                mobileMenuContainer.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// ============================================
// CAMBIO DE IDIOMA
// ============================================
function setupLanguageSelector() {
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            changeLanguage(this.value);
        });
    }
}

function changeLanguage(lang) {
    currentLanguage = lang;
    updateLanguage();
    
    // Actualizar selector en ambas ubicaciones (móvil y desktop)
    const selects = document.querySelectorAll('#languageSelect');
    selects.forEach(select => {
        select.value = lang;
    });
}

function updateLanguage() {
    const t = translations[currentLanguage];
    
    // Actualizar navegación
    updateTextContent('nav-welcome', t.nav_welcome);
    updateTextContent('nav-home', t.nav_home);
    updateTextContent('nav-menu', t.nav_menu);
    updateTextContent('nav-products', t.nav_products);
    updateTextContent('nav-more', t.nav_more);
    
    // Actualizar elementos con data-translate
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (t[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else {
                el.innerHTML = t[key];
            }
        }
    });
    
    // Actualizar placeholders
    updatePlaceholder('searchInput', t.search_placeholder);
    updatePlaceholder('mainSearchInput', t.search_main_placeholder);
    updatePlaceholder('newsletterEmail', t.newsletter_placeholder);
    updatePlaceholder('chatInput', t.chat_placeholder);
    
    // Actualizar textos específicos
    const principalTexts = document.querySelectorAll('.principal-text');
    principalTexts.forEach(text => text.textContent = t.nav_principal);
    
    // Actualizar botones de búsqueda
    const searchButtons = document.querySelectorAll('.search-btn, .search-main-btn');
    searchButtons.forEach(btn => {
        if (btn.textContent.includes('Buscar') || btn.textContent.includes('Search')) {
            btn.textContent = t.search_button;
        }
    });
}

function updateTextContent(id, text) {
    const elements = document.querySelectorAll(`[data-translate="${id}"], #${id}`);
    elements.forEach(el => {
        if (el) el.textContent = text;
    });
}

function updatePlaceholder(id, text) {
    const el = document.getElementById(id);
    if (el) el.placeholder = text;
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
    
    // Cerrar menú móvil si está abierto
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenuContainer = document.getElementById('mobileMenuContainer');
    if (mobileMenuBtn && mobileMenuContainer) {
        mobileMenuBtn.classList.remove('active');
        mobileMenuContainer.classList.remove('active');
        document.body.style.overflow = '';
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
            <div class="product-badge">${t.product_badge}</div>
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\\'font-size:4rem;display:flex;align-items:center;justify-content:center;height:100%\\'>☕</div>'">
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})" title="${t.add_to_cart}">+</button>
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
                + ${t.add_to_cart}
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
    const cards = document.querySelectorAll(`.product-card[data-product-id="${productId}"]`);
    cards.forEach(card => {
        const buttons = card.querySelectorAll('.weight-btn');
        buttons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.textContent.trim().includes(weight === '1kg' ? '1 kg' : weight)) {
                btn.classList.add('active');
            }
        });
    });
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
showNotification(`${product.name} (${weight}) ${t.notif_added}`, 'success');
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
showNotification(`${item.name} (${sizeText}) ${t.notif_added}`, 'success');
}
function removeFromCart(index) {
const item = cart[index];
const t = translations[currentLanguage];
cart.splice(index, 1);
updateCart();
showNotification(${item.name} ${t.notif_removed}, 'success');
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
const total = cart.reduce((sum, item) => sum + item.quantity, 0);
const cartCounts = document.querySelectorAll('.cart-count');
cartCounts.forEach(count => {
count.textContent = total;
});
}
function renderCartItems() {
const cartItems = document.getElementById('cartItems');
const t = translations[currentLanguage];
if (!cartItems) return;
if (cart.length === 0) {
    cartItems.innerHTML = `
        <div class="empty-cart">
            <p style="font-size: 3rem; margin-bottom: 1rem;">🛒</p>
            <p>${t.cart_empty}</p>
            <p style="font-size: 0.85rem; margin-top: 0.5rem;">${t.cart_empty_subtitle}</p>
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
            <button class="cart-item-remove" onclick="removeFromCart(${index})" title="${t.notif_removed}">✕</button>
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
const t = translations[currentLanguage];
if (cart.length === 0) {
    showNotification(t.notif_empty_cart, 'error');
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
// ============================================
// TOGGLE PAYMENT FORM
// ============================================
function togglePaymentForm(method) {
const cardForm = document.getElementById('cardPaymentForm');
const paypalForm = document.getElementById('paypalPaymentForm');
if (method === 'card') {
    cardForm.style.display = 'block';
    paypalForm.style.display = 'none';
    
    document.getElementById('cardNumber').required = true;
    document.getElementById('cardExpiry').required = true;
    document.getElementById('cardCVV').required = true;
    document.getElementById('cardName').required = true;
    document.getElementById('paypalEmail').required = false;
} else if (method === 'paypal') {
    cardForm.style.display = 'none';
    paypalForm.style.display = 'block';
    
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
const name = document.getElementById('checkoutName').value.trim();
const email = document.getElementById('checkoutEmail').value.trim();
const phone = document.getElementById('checkoutPhone').value.trim();
const address = document.getElementById('checkoutAddress').value.trim();
const city = document.getElementById('checkoutCity').value.trim();
const postal = document.getElementById('checkoutPostal').value.trim();

if (!name || !email || !phone || !address || !city || !postal) {
    showNotification(t.notif_fill_fields, 'error');
    return;
}

if (!validateEmail(email)) {
    showNotification(t.notif_invalid_email, 'error');
    return;
}

if (paymentMethod === 'card') {
    const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
    const cardExpiry = document.getElementById('cardExpiry').value;
    const cardCVV = document.getElementById('cardCVV').value;
    const cardName = document.getElementById('cardName').value.trim();
    
    if (!cardNumber || !cardExpiry || !cardCVV || !cardName) {
        showNotification(t.notif_fill_fields, 'error');
        return;
    }
    
    if (cardNumber.length < 13) {
        showNotification(t.notif_invalid_card, 'error');
        return;
    }
    
    if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) {
        showNotification(t.notif_invalid_expiry, 'error');
        return;
    }
    
    if (cardCVV.length < 3) {
        showNotification(t.notif_invalid_cvv, 'error');
        return;
    }
} else if (paymentMethod === 'paypal') {
    const paypalEmail = document.getElementById('paypalEmail').value.trim();
    
    if (!paypalEmail) {
        showNotification(t.notif_fill_fields, 'error');
        return;
    }
    
    if (!validateEmail(paypalEmail)) {
        showNotification(t.notif_invalid_email, 'error');
        return;
    }
}

const confirmBtn = document.querySelector('.confirm-btn');
const originalText = confirmBtn.textContent;
confirmBtn.disabled = true;
confirmBtn.innerHTML = `<span class="loading-spinner"></span>${t.notif_processing}`;

const orderNumber = 'CE' + Date.now().toString().slice(-8);
const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

const itemsList = cart.map(item => {
    const displayInfo = item.type === 'product' ? `(${item.weight})` : `(${item.size})`;
    return `• ${item.name} ${displayInfo} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)} MXN`;
}).join('\n');

const paymentInfo = paymentMethod === 'card' 
    ? `Tarjeta: **** **** **** ${document.getElementById('cardNumber').value.replace(/\s/g, '').slice(-4)}\nTitular: ${document.getElementById('cardName').value.trim()}`
    : `PayPal: ${document.getElementById('paypalEmail').value.trim()}`;

const emailBody = `
╔═══════════════════════════════════════════╗
CONFIRMACIÓN DE PEDIDO - CAFÉ ELEMENTOS
╚═══════════════════════════════════════════╝
Número de Orden: ${orderNumber}
Fecha: ${new Date().toLocaleDateString('es-MX', {
weekday: 'long',
year: 'numeric',
month: 'long',
day: 'numeric',
hour: '2-digit',
minute: '2-digit'
})}
──────────────────────────────────────────────
DATOS DEL CLIENTE
──────────────────────────────────────────────
Nombre: ${name}
Email: ${email}
Teléfono: ${phone}
Dirección: ${address}
Ciudad: ${city}
Código Postal: ${postal}
──────────────────────────────────────────────
PRODUCTOS ORDENADOS
──────────────────────────────────────────────
${itemsList}
──────────────────────────────────────────────
TOTAL: $${total.toFixed(2)} MXN
──────────────────────────────────────────────
INFORMACIÓN DE PAGO
──────────────────────────────────────────────
Método: ${paymentMethod === 'card' ? 'Tarjeta de Crédito/Débito' : 'PayPal'}
${paymentInfo}
Estado: ✓ PAGADO
╔═══════════════════════════════════════════╗
¡Gracias por tu compra!
Tu pedido será procesado y enviado en las próximas 24-48 horas.
Te enviaremos un correo con el número de seguimiento cuando tu pedido sea enviado.
Para cualquier duda, contáctanos:
📞 993 426 3253
📧 cafelementos@gmail.com
──────────────────────────────────────────────
Café Elementos
Av Paseo Tabasco 1124, Jesus Garcia
86040 Villahermosa, Tabasco, México
╚═══════════════════════════════════════════╝
`.trim();
try {
    await sendOrderEmail({
        to_email: email,
        to_name: name,
        order_number: orderNumber,
        email_body: emailBody
    });
    
    closeCheckout();
    document.getElementById('orderNumber').textContent = orderNumber;
    
    const paymentMethodText = document.getElementById('paymentMethodText');
    if (paymentMethod === 'paypal') {
        paymentMethodText.textContent = currentLanguage === 'es' 
            ? 'Tu pago ha sido procesado con PayPal. Hemos enviado la confirmación y el ticket a tu correo electrónico.'
            : 'Your payment has been processed with PayPal. We have sent the confirmation and ticket to your email.';
    } else {
        paymentMethodText.textContent = t.success_email;
    }
    
    const successModal = document.getElementById('successModal');
    const successOverlay = document.getElementById('successOverlay');
    successModal.classList.add('active');
    successOverlay.classList.add('active');
    
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
if (typeof emailjs === 'undefined') {
console.warn('EmailJS no está cargado. Simulando envío...');
console.log('Email simulado:', params);
await new Promise(resolve => setTimeout(resolve, 1500));
return { status: 200 };
}
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
const t = translations[currentLanguage];
const emailInput = document.getElementById('newsletterEmail');
const email = emailInput.value.trim();
if (!email) {
    showNotification(t.notif_fill_fields, 'error');
    return;
}

if (!validateEmail(email)) {
    showNotification(t.notif_invalid_email, 'error');
    return;
}

showNotification(t.notif_subscribed, 'success');
emailInput.value = '';
}
function sendContact() {
const t = translations[currentLanguage];
const name = document.getElementById('contactName')?.value.trim();
const email = document.getElementById('contactEmail')?.value.trim();
const message = document.getElementById('contactMessage')?.value.trim();
if (!name || !email || !message) {
    showNotification(t.notif_fill_fields, 'error');
    return;
}

if (!validateEmail(email)) {
    showNotification(t.notif_invalid_email, 'error');
    return;
}

showNotification(t.notif_contact_sent, 'success');

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
    const responses = currentLanguage === 'es' ? [
        '¡Gracias por tu mensaje! Un representante te atenderá pronto.',
        '¿Te gustaría conocer nuestros productos destacados?',
        'Estamos aquí para ayudarte. ¿En qué más puedo asistirte?',
        '¡Excelente pregunta! Déjame verificar esa información para ti.'
    ] : [
        'Thank you for your message! A representative will assist you soon.',
        'Would you like to know about our featured products?',
        'We are here to help you. What else can I assist you with?',
        'Excellent question! Let me verify that information for you.'
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
// BÚSQUEDA
// ============================================
function handleSearch(event) {
if (event.key === 'Enter') {
performSearch();
}
}
function performSearch() {
const searchInput = document.getElementById('searchInput');
if (searchInput && searchInput.value.trim()) {
showPage('productos');
}
}
function handleMainSearch(event) {
if (event.key === 'Enter') {
performMainSearch();
}
}
function performMainSearch() {
const searchInput = document.getElementById('mainSearchInput');
if (searchInput && searchInput.value.trim()) {
// Implementar lógica de búsqueda aquí
console.log('Buscando:', searchInput.value);
}
}
function filterByCategory(category) {
// Actualizar botones activos
const buttons = document.querySelectorAll('.category-btn');
buttons.forEach(btn => {
btn.classList.remove('active');
if (btn.textContent.toLowerCase().includes(category) || category === 'all') {
if (btn.onclick && btn.onclick.toString().includes(category)) {
btn.classList.add('active');
}
}
});
// Implementar filtrado aquí
console.log('Filtrando por:', category);
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
function createProductCard(product, containerId) {
    const selectedWeight = selectedWeights[product.id] || '1/4';
    const currentPrice = product.prices[selectedWeight];
    const t = translations[currentLanguage];
    
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-badge">${t.product_badge}</div>
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" 
                    onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\\'font-size:4rem;display:flex;align-items:center;justify-content:center;height:100%\\'>☕</div>'">
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})" title="${t.add_to_cart}">+</button>
            </div>

            <h3>${product.name}</h3>
            <p>${product.origin}</p>

            <select onchange="changeWeight(${product.id}, this.value)">
                ${Object.keys(product.prices).map(weight => 
                    `<option value="${weight}" ${selectedWeight === weight ? 'selected' : ''}>
                        ${weight} - $${product.prices[weight]}
                    </option>`
                ).join('')}
            </select>

            <span class="product-price">$${currentPrice}</span>
        </div>
    `;
}
