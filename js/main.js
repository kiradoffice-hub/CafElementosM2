/* ============================================
   CAFÉ ELEMENTOS - JAVASCRIPT PRINCIPAL
   ============================================ */

// ============================================
// CONFIGURACIÓN EMAILJS
// ============================================
const EMAILJS_SERVICE_ID = 'service_ez74agp';
const EMAILJS_TEMPLATE_ID = 'template_rv4qwdj';
const EMAILJS_PUBLIC_KEY = 'nb75RxYtqPNBOw3O2';

// Inicializar EmailJS
(function() {
    // Verificar si emailjs está disponible antes de inicializar
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    } else {
        console.warn("EmailJS SDK no cargado. Las funciones de envío de correo no estarán disponibles.");
    }
})();

// ============================================
// TRADUCCIONES (Mantenido sin cambios)
// ============================================
const translations = {
    es: {
        nav: {
            welcome: 'Bienvenido',
            home: 'Inicio',
            menu: 'Menú',
            products: 'Productos',
            more: 'Más'
        },
        search: {
            placeholder: 'Buscar productos...',
            mainPlaceholder: 'Buscar café, bebidas, productos...',
            button: '🔍 Buscar',
            lastUpdate: 'Última actualización:',
            categories: {
                all: 'Todos',
                coffee: 'Café a Granel',
                drinks: 'Bebidas'
            }
        },
        welcome: {
            title: 'Bienvenido a Café Elementos',
            description: 'El lugar donde el café cobra vida. Nos dedicamos a ofrecer café de alta calidad con un toque especial que deleita tus sentidos. Descubre nuestra pasión por el café en cada taza que preparamos.',
            button: 'Explorar Nuestro Café',
            promotion: {
                badge: '🔥 PROMOCIÓN',
                title: '¡2 Frappes por $120!',
                description: 'Disfruta de nuestra promoción especial por tiempo limitado',
                timer: 'La promoción termina en:',
                shipping: '🚚 Envío gratis en compras mayores a $300 en zonas cercanas'
            }
        },
        hero: {
            title: 'SUSCRÍBETE',
            description: 'Regístrate al correo electrónico para no perderte de nuestros eventos 2025',
            emailPlaceholder: 'Introduce tu correo electrónico aquí',
            button: 'Enviar'
        },
        section: {
            explore: 'EXPLORA',
            ourCoffee: 'NUESTRO CAFÉ',
            subtitle: 'Descubre el sabor del café perfecto',
            viewMenu: 'VER MENÚ'
        },
        about: {
            title: 'Acerca de Nosotros',
            text1: 'Bienvenido a Café Elementos, el lugar donde el café cobra vida. Nos dedicamos a ofrecer café de alta calidad con un toque especial que deleita tus sentidos. Nuestra pasión por el café se refleja en cada taza que preparamos, buscando brindarte una experiencia única en cada sorbo.',
            text2: 'En Café Elementos, nos esforzamos por crear un ambiente acogedor donde te sientas como en casa. Nuestro equipo de baristas expertos está listo para guiarte a través de nuestro menú y recomendarte la combinación perfecta para tu paladar. ¡Ven y disfruta de la verdadera esencia del café con nosotros!'
        },
        contact: {
            title: 'Contáctanos',
            address: 'Dirección',
            phone: 'Teléfono',
            email: 'Correo',
            namePlaceholder: 'Nombre',
            lastNamePlaceholder: 'Apellido',
            emailPlaceholder: 'Correo',
            phonePlaceholder: 'Teléfono',
            messagePlaceholder: 'Mensaje',
            button: 'Enviar'
        },
        menu: {
            title: 'Nuestro Menú',
            subtitle: 'Descubre nuestras deliciosas bebidas',
            frappes: '🧊 FRAPPES (Bebidas Frías)',
            hotDrinks: '🔥 BEBIDAS CALIENTES',
            hotSubtitle: 'A base de café y chocolate',
            teas: 'Tés Calientes',
            addToCart: '+ Agregar al carrito'
        },
        products: {
            title: 'Nuestros Productos',
            badge: 'Nuevo',
            showing: 'Mostrando',
            results: 'resultados'
        },
        cart: {
            title: '🛒 Carrito',
            empty: 'Tu carrito está vacío',
            emptyMessage: '¡Agrega algunos productos deliciosos!',
            total: 'Total:',
            checkout: 'Proceder al Pago',
            added: 'agregado al carrito',
            quantity: 'Cantidad',
            remove: 'Eliminar'
        },
        checkout: {
            title: 'Finalizar Compra',
            shipping: '📦 Información de Envío',
            name: 'Nombre Completo *',
            email: 'Correo Electrónico *',
            phone: 'Teléfono *',
            address: 'Dirección de Entrega *',
            city: 'Ciudad *',
            postal: 'Código Postal *',
            payment: '💳 Método de Pago',
            card: '💳 Tarjeta de Crédito/Débito',
            cardNumber: 'Número de Tarjeta *',
            cardExpiry: 'Fecha de Vencimiento *',
            cardCVV: 'CVV *',
            cardName: 'Nombre en la Tarjeta *',
            paypalInfo: 'Al confirmar el pedido, serás redirigido a PayPal para completar el pago de forma segura.',
            paypalEmail: 'Correo de PayPal *',
            orderSummary: '📋 Resumen del Pedido',
            confirm: '✓ Confirmar Pedido'
        },
        success: {
            title: '¡Pedido Confirmado!',
            message: 'Tu pedido ha sido procesado exitosamente.',
            emailSent: 'Hemos enviado la confirmación y el ticket a tu correo electrónico.',
            orderNumber: 'Número de Orden:',
            button: 'Continuar Comprando'
        },
        chat: {
            button: '¡Vamos a chatear!',
            title: 'Café Elementos',
            status: '● Te responderemos tan pronto como podamos',
            placeholder: 'Escribe tu mensaje...',
            welcome: '¡Hola! Bienvenido a Café Elementos. ¿En qué podemos ayudarte hoy?'
        },
        privacy: {
            title: 'Aviso Legal',
            lastUpdate: 'Última actualización: 15 de Enero, 2025'
        },
        footer: {
            privacy: 'Política de Privacidad',
            terms: 'Términos y Condiciones',
            copyright: '© 2025 Café Elementos. Todos los derechos reservados.'
        },
        notifications: {
            invalidEmail: 'Por favor ingresa un correo válido',
            fillFields: 'Por favor completa todos los campos',
            newsletterSuccess: '¡Gracias por suscribirte! Te enviaremos las últimas noticias.',
            contactSuccess: '¡Gracias por contactarnos! Te responderemos pronto.',
            emptyCart: 'Tu carrito está vacío',
            orderError: 'Error al procesar el pedido. Intenta de nuevo.',
            removed: 'eliminado del carrito'
        }
    },
    en: {
        nav: {
            welcome: 'Welcome',
            home: 'Home',
            menu: 'Menu',
            products: 'Products',
            more: 'More'
        },
        search: {
            placeholder: 'Search products...',
            mainPlaceholder: 'Search coffee, drinks, products...',
            button: '🔍 Search',
            lastUpdate: 'Last update:',
            categories: {
                all: 'All',
                coffee: 'Bulk Coffee',
                drinks: 'Drinks'
            }
        },
        welcome: {
            title: 'Welcome to Café Elementos',
            description: 'The place where coffee comes to life. We are dedicated to offering high-quality coffee with a special touch that delights your senses. Discover our passion for coffee in every cup we prepare.',
            button: 'Explore Our Coffee',
            promotion: {
                badge: '🔥 PROMOTION',
                title: '2 Frappes for $120!',
                description: 'Enjoy our special promotion for a limited time',
                timer: 'Promotion ends in:',
                shipping: '🚚 Free shipping on purchases over $300 in nearby areas'
            }
        },
        hero: {
            title: 'SUBSCRIBE',
            description: 'Sign up for email to stay updated on our 2025 events',
            emailPlaceholder: 'Enter your email here',
            button: 'Submit'
        },
        section: {
            explore: 'EXPLORE',
            ourCoffee: 'OUR COFFEE',
            subtitle: 'Discover the taste of perfect coffee',
            viewMenu: 'VIEW MENU'
        },
        about: {
            title: 'About Us',
            text1: 'Welcome to Café Elementos, the place where coffee comes to life. We are dedicated to offering high-quality coffee with a special touch that delights your senses. Our passion for coffee is reflected in every cup we prepare, seeking to provide you with a unique experience in every sip.',
            text2: 'At Café Elementos, we strive to create a welcoming environment where you feel at home. Our team of expert baristas is ready to guide you through our menu and recommend the perfect combination for your palate. Come and enjoy the true essence of coffee with us!'
        },
        contact: {
            title: 'Contact Us',
            address: 'Address',
            phone: 'Phone',
            email: 'Email',
            namePlaceholder: 'Name',
            lastNamePlaceholder: 'Last Name',
            emailPlaceholder: 'Email',
            phonePlaceholder: 'Phone',
            messagePlaceholder: 'Message',
            button: 'Send'
        },
        menu: {
            title: 'Our Menu',
            subtitle: 'Discover our delicious drinks',
            frappes: '🧊 FRAPPES (Cold Drinks)',
            hotDrinks: '🔥 HOT DRINKS',
            hotSubtitle: 'Based on coffee and chocolate',
            teas: 'Hot Teas',
            addToCart: '+ Add to cart'
        },
        products: {
            title: 'Our Products',
            badge: 'New',
            showing: 'Showing',
            results: 'results'
        },
        cart: {
            title: '🛒 Cart',
            empty: 'Your cart is empty',
            emptyMessage: 'Add some delicious products!',
            total: 'Total:',
            checkout: 'Proceed to Checkout',
            added: 'added to cart',
            quantity: 'Quantity',
            remove: 'Remove'
        },
        checkout: {
            title: 'Checkout',
            shipping: '📦 Shipping Information',
            name: 'Full Name *',
            email: 'Email *',
            phone: 'Phone *',
            address: 'Delivery Address *',
            city: 'City *',
            postal: 'Postal Code *',
            payment: '💳 Payment Method',
            card: '💳 Credit/Debit Card',
            cardNumber: 'Card Number *',
            cardExpiry: 'Expiration Date *',
            cardCVV: 'CVV *',
            cardName: 'Name on Card *',
            paypalInfo: 'Upon confirming the order, you will be redirected to PayPal to complete the payment securely.',
            paypalEmail: 'PayPal Email *',
            orderSummary: '📋 Order Summary',
            confirm: '✓ Confirm Order'
        },
        success: {
            title: 'Order Confirmed!',
            message: 'Your order has been successfully processed.',
            emailSent: 'We have sent the confirmation and ticket to your email.',
            orderNumber: 'Order Number:',
            button: 'Continue Shopping'
        },
        chat: {
            button: "Let's chat!",
            title: 'Café Elementos',
            status: '● We will respond as soon as possible',
            placeholder: 'Type your message...',
            welcome: 'Hello! Welcome to Café Elementos. How can we help you today?'
        },
        privacy: {
            title: 'Legal Notice',
            lastUpdate: 'Last updated: January 15, 2025'
        },
        footer: {
            privacy: 'Privacy Policy',
            terms: 'Terms and Conditions',
            copyright: '© 2025 Café Elementos. All rights reserved.'
        },
        notifications: {
            invalidEmail: 'Please enter a valid email',
            fillFields: 'Please fill all fields',
            newsletterSuccess: 'Thanks for subscribing! We will send you the latest news.',
            contactSuccess: 'Thanks for contacting us! We will respond soon.',
            emptyCart: 'Your cart is empty',
            orderError: 'Error processing order. Please try again.',
            removed: 'removed from cart'
        }
    }
};

let currentLang = 'es';

// ============================================
// DATOS DE PRODUCTOS Y MENÚ (Mantenido sin cambios)
// ============================================
const PRODUCT_IMAGE = 'https://scontent.fvsa2-1.fna.fbcdn.net/v/t39.30808-6/495601645_1198908208917618_4324142393229895495_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=LXQAJeKjCkkQ7kNvwFqblSH&_nc_oc=AdkL2rT9E5JKzvVmYsi5-gLaOLbuHT6JczBiQV2q7aCERwvnpKFL6Zr_pqRez0eVilI&_nc_zt=23&_nc_ht=scontent.fvsa2-1.fna&_nc_gid=HT-GbkexYubjTnC9fSSDrA&oh=00_AfiUM5WCTaSSWSi5eqGiH24eiM0wJkiRFN91bYEvjT7juw&oe=6925534E';

const products = [
    {
        id: 1,
        name: 'Aldama, Chiapas',
        origin: 'Cafeología Natural',
        prices: { '1/4': 350, '1/2': 700, '1kg': 1400 },
        category: 'coffee',
        image: PRODUCT_IMAGE
    },
    {
        id: 2,
        name: 'Tatetela, Veracruz',
        origin: 'Lavado',
        prices: { '1/4': 120, '1/2': 240, '1kg': 480 },
        category: 'coffee',
        image: PRODUCT_IMAGE
    },
    {
        id: 3,
        name: 'Adelitas, Chiapas',
        origin: 'Lavado',
        prices: { '1/4': 120, '1/2': 240, '1kg': 480 },
        category: 'coffee',
        image: PRODUCT_IMAGE
    }
];

const menuItems = {
    frappes: [
        { id: 101, name: 'Frapuccino', price: 75, category: 'drinks' },
        { id: 102, name: 'Cajeta', price: 75, category: 'drinks' },
        { id: 103, name: 'Oreo', price: 75, category: 'drinks' },
        { id: 104, name: 'Moca', price: 75, category: 'drinks' }
    ],
    hotCoffee: [
        { id: 201, name: 'Espresso', prices: { 'Chico': 45, 'Grande': 48 }, category: 'drinks' },
        { id: 202, name: 'Latte', prices: { 'Chico': 68, 'Grande': 72 }, category: 'drinks' },
        { id: 203, name: 'Espresso cortado', price: 48, category: 'drinks' },
        { id: 204, name: 'Capuchino', price: 65, category: 'drinks' },
        { id: 205, name: 'Americano', price: 48, category: 'drinks' },
        { id: 206, name: 'Moca', prices: { 'Chico': 68, 'Grande': 72 }, category: 'drinks' },
        { id: 207, name: 'Latte caramelo', price: 72, category: 'drinks' },
        { id: 208, name: 'Choco-latte', prices: { 'Chico': 68, 'Grande': 72 }, category: 'drinks' },
        { id: 209, name: 'Chocolatada', prices: { 'Chico': 68, 'Grande': 72 }, category: 'drinks' }
    ],
    teas: [
        { id: 301, name: 'Té Negro (Earl Grey)', prices: { 'Chico': 68, 'Grande': 72 }, category: 'drinks' },
        { id: 302, name: 'Té Negro Chai', prices: { 'Chico': 68, 'Grande': 72 }, category: 'drinks' },
        { id: 303, name: 'Té Verde Flamingo Limonada', prices: { 'Chico': 68, 'Grande': 72 }, category: 'drinks' },
        { id: 304, name: 'Matcha', prices: { 'Chico': 68, 'Grande': 72 }, category: 'drinks' },
        { id: 305, name: 'Variedad de Tisanas', prices: { 'Chico': 68, 'Grande': 72 }, category: 'drinks' }
    ]
};

// Combinar productos y elementos del menú en una sola lista para búsqueda y carrito
const allItems = [
    ...products.map(p => ({ ...p, type: 'product' })),
    ...Object.values(menuItems).flat().map(m => ({ ...m, type: 'menu' }))
];

// ============================================
// ESTADO GLOBAL
// ============================================
let cart = JSON.parse(localStorage.getItem('cafeElementosCart')) || [];
let currentPage = 'bienvenido';
let selectedWeights = {}; // Para productos de café a granel
let selectedMenuSizes = {}; // Para bebidas con diferentes tamaños
let currentFilter = 'all'; // Para la página de productos

// ============================================
// UTILIDADES
// ============================================

/**
 * Valida un correo electrónico.
 * @param {string} email - Correo a validar.
 * @returns {boolean} - true si es válido, false si no.
 */
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/**
 * Muestra una notificación temporal.
 * @param {string} message - El mensaje a mostrar.
 * @param {string} type - Tipo de mensaje (success, error, info).
 */
function showNotification(message, type = 'info') {
    const container = document.getElementById('notificationContainer');
    if (!container) return;

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    container.appendChild(notification);
    
    // Auto-eliminar la notificación después de 3 segundos
    setTimeout(() => {
        notification.classList.add('hide');
        notification.addEventListener('transitionend', () => {
            container.removeChild(notification);
        }, { once: true });
    }, 3000);
}

// ============================================
// INICIALIZACIÓN (Modificado para cargar estado del carrito)
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    init();
    setupEventListeners();
    setupMobileMenu();
});

function init() {
    // Inicializar pesos/tamaños seleccionados por defecto
    products.forEach(p => {
        selectedWeights[p.id] = Object.keys(p.prices)[0];
    });

    Object.values(menuItems).flat().forEach(item => {
        if (item.prices) {
            selectedMenuSizes[item.id] = Object.keys(item.prices)[0];
        }
    });

    renderProducts();
    renderMenuItems();
    showPage('bienvenido');
    updateCartDisplay();
    updateLanguage();
    startPromotionTimer();
}

function setupEventListeners() {
    // Formularios
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) newsletterForm.addEventListener('submit', handleNewsletterSubmit);

    const contactForm = document.getElementById('contactForm');
    if (contactForm) contactForm.addEventListener('submit', handleContactSubmit);

    const mainSearchForm = document.getElementById('mainSearchForm');
    if (mainSearchForm) mainSearchForm.addEventListener('submit', handleMainSearchSubmit);

    const productsSearchForm = document.getElementById('productsSearchForm');
    if (productsSearchForm) productsSearchForm.addEventListener('submit', handleProductsSearchSubmit);

    // Carrito
    const cartIcon = document.getElementById('cartIcon');
    if (cartIcon) cartIcon.addEventListener('click', toggleCartModal);

    const closeCartBtn = document.getElementById('closeCartBtn');
    if (closeCartBtn) closeCartBtn.addEventListener('click', toggleCartModal);

    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) checkoutBtn.addEventListener('click', () => {
        if (cart.length > 0) {
            showPage('checkout');
        } else {
            showNotification(translations[currentLang].notifications.emptyCart, 'error');
        }
    });

    // Idioma
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.getAttribute('data-lang');
            if (lang) changeLanguage(lang);
        });
    });

    // Chat
    const chatBtn = document.getElementById('chatBtn');
    if (chatBtn) chatBtn.addEventListener('click', toggleChatWindow);

    const closeChatBtn = document.getElementById('closeChatBtn');
    if (closeChatBtn) closeChatBtn.addEventListener('click', toggleChatWindow);

    const chatForm = document.getElementById('chatForm');
    if (chatForm) chatForm.addEventListener('submit', handleChatSubmit);

    // Filtros de productos
    const filterButtons = document.querySelectorAll('.search-category-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.target.getAttribute('data-category');
            if (category) filterProducts(category);
        });
    });
}

// ============================================
// MENÚ MÓVIL (Mantenido sin cambios)
// ============================================
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenuContainer = document.getElementById('mobileMenuContainer');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMobileMenu();
        });
    }

    const navLinks = document.querySelectorAll('#navMenu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMobileMenu();
        });
    });

    document.addEventListener('click', function(e) {
        if (mobileMenuContainer && mobileMenuContainer.classList.contains('active')) {
            if (!mobileMenuContainer.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                closeMobileMenu();
            }
        }
    });
}

function toggleMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenuContainer = document.getElementById('mobileMenuContainer');

    mobileMenuBtn.classList.toggle('active');
    mobileMenuContainer.classList.toggle('active');

    if (mobileMenuContainer.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

function closeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenuContainer = document.getElementById('mobileMenuContainer');

    if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
    if (mobileMenuContainer) mobileMenuContainer.classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// CAMBIO DE IDIOMA (Mantenido sin cambios)
// ============================================
function changeLanguage(lang) {
    currentLang = lang;
    updateLanguage();
    closeMobileMenu();
    renderProducts(document.getElementById('productsSearchInput').value, currentFilter); // Rerenderiza productos con nuevo idioma
    renderMenuItems(); // Rerenderiza menú con nuevo idioma
    updateCartDisplay(); // Rerenderiza carrito con nuevo idioma
}

function updateLanguage() {
    const t = translations[currentLang];

    const navLinks = document.querySelectorAll('#navMenu a');
    if (navLinks.length >= 5) {
        navLinks[0].textContent = t.nav.welcome;
        navLinks[1].textContent = t.nav.home;
        navLinks[2].textContent = t.nav.menu;
        navLinks[3].textContent = t.nav.products;
        navLinks[4].textContent = t.nav.more;
    }

    const searchInput = document.getElementById('searchInput');
    const mainSearchInput = document.getElementById('mainSearchInput');
    if (searchInput) searchInput.placeholder = t.search.placeholder;
    if (mainSearchInput) mainSearchInput.placeholder = t.search.mainPlaceholder;

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
    const promoTitle = document.querySelector('.promotion-content h3');
    const promoDesc = document.querySelector('.promotion-content > p');
    const shippingInfo = document.querySelector('.shipping-info');
    const timerTitle = document.getElementById('promotionTimerTitle');

    if (promoBadge) promoBadge.textContent = t.welcome.promotion.badge;
    if (promoTitle) promoTitle.textContent = t.welcome.promotion.title;
    if (promoDesc) promoDesc.textContent = t.welcome.promotion.description;
    if (shippingInfo) shippingInfo.textContent = t.welcome.promotion.shipping;
    if (timerTitle) timerTitle.textContent = t.welcome.promotion.timer;
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
    if (sectionTitle) {
        sectionTitle.innerHTML = `${t.section.explore}<br>${t.section.ourCoffee}`;
    }

    const sectionSubtitle = document.querySelector('.section-subtitle');
    if (sectionSubtitle) sectionSubtitle.textContent = t.section.subtitle;
    
    const viewMenuBtn = document.getElementById('viewMenuBtn');
    if (viewMenuBtn) viewMenuBtn.textContent = t.section.viewMenu;

    const aboutTitle = document.querySelector('.about-section h2');
    const aboutParas = document.querySelectorAll('.about-section p');
    if (aboutTitle) aboutTitle.textContent = t.about.title;
    if (aboutParas.length >= 2) {
        // Asegurarse de que estamos actualizando los <p> dentro de .about-section
        const principalText = document.querySelector('.about-section .principal-text');
        const secondaryText = document.querySelector('.about-section .secondary-text');
        if (principalText) principalText.textContent = t.about.text1;
        if (secondaryText) secondaryText.textContent = t.about.text2;
    }

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

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const nameInput = contactForm.querySelector('input[name="user_name"]');
        const lastNameInput = contactForm.querySelector('input[name="user_lastname"]');
        const emailInput = contactForm.querySelector('input[name="user_email"]');
        const phoneInput = contactForm.querySelector('input[name="user_phone"]');
        const messageInput = contactForm.querySelector('textarea[name="message"]');
        const contactBtn = contactForm.querySelector('.submit-btn');

        if (nameInput) nameInput.placeholder = t.contact.namePlaceholder;
        if (lastNameInput) lastNameInput.placeholder = t.contact.lastNamePlaceholder;
        if (emailInput) emailInput.placeholder = t.contact.emailPlaceholder;
        if (phoneInput) phoneInput.placeholder = t.contact.phonePlaceholder;
        if (messageInput) messageInput.placeholder = t.contact.messagePlaceholder;
        if (contactBtn) contactBtn.textContent = t.contact.button;
    }
}

function updateMenuPage(t) {
    const menuTitle = document.querySelector('.menu-hero h1');
    const menuSubtitle = document.querySelector('.menu-hero p');

    if (menuTitle) menuTitle.textContent = t.menu.title;
    if (menuSubtitle) menuSubtitle.textContent = t.menu.subtitle;

    const frappesTitle = document.getElementById('frappesTitle');
    const hotDrinksTitle = document.getElementById('hotDrinksTitle');
    const hotCoffeeSubtitle = document.getElementById('hotCoffeeSubtitle');
    const teasSubtitle = document.getElementById('teasSubtitle');

    if (frappesTitle) frappesTitle.textContent = t.menu.frappes;
    if (hotDrinksTitle) hotDrinksTitle.textContent = t.menu.hotDrinks;
    if (hotCoffeeSubtitle) hotCoffeeSubtitle.textContent = t.menu.hotSubtitle;
    if (teasSubtitle) teasSubtitle.textContent = t.menu.teas;

    const addButtons = document.querySelectorAll('.menu-item-add');
    addButtons.forEach(btn => {
        btn.textContent = t.menu.addToCart;
    });
}

function updateProductsPage(t) {
    const productsTitle = document.querySelector('.products-hero h1');
    if (productsTitle) productsTitle.textContent = t.products.title;

    const badges = document.querySelectorAll('.product-badge');
    badges.forEach(badge => {
        badge.textContent = t.products.badge;
    });

    const categories = document.querySelectorAll('.search-category-btn');
    if (categories.length > 0) {
        categories[0].textContent = t.search.categories.all;
        categories[1].textContent = t.search.categories.coffee;
        categories[2].textContent = t.search.categories.drinks;
    }

    const searchButton = document.getElementById('productsSearchButton');
    if (searchButton) searchButton.textContent = t.search.button;

    const lastUpdate = document.getElementById('productsLastUpdate');
    if (lastUpdate) lastUpdate.textContent = `${t.search.lastUpdate} 15 de Enero, 2025`; // Mantengo la fecha en español por ser un dato fijo.
}

function updateCartTexts(t) {
    const cartTitle = document.querySelector('.cart-header h2');
    if (cartTitle) cartTitle.textContent = t.cart.title;

    const cartTotal = document.querySelector('.cart-total .total-label');
    if (cartTotal) cartTotal.textContent = t.cart.total;

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
    const privacyLink = document.querySelector('.footer-section li:nth-child(1) a');
    const termsLink = document.querySelector('.footer-section li:nth-child(3) a');

    if (privacyLink) privacyLink.textContent = t.footer.privacy;
    // Asumo que el link de Términos y Condiciones es el tercero
    if (termsLink) termsLink.textContent = t.footer.terms;

    const footerBottom = document.querySelector('.footer-bottom');
    if (footerBottom) footerBottom.textContent = t.footer.copyright;
}

// ============================================
// NAVEGACIÓN DE PÁGINAS (Mantenido sin cambios)
// ============================================
function showPage(pageName) {
    const pages = ['bienvenido', 'inicio', 'menu', 'productos', 'nosotros', 'privacy', 'checkout', 'success'];

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

        if (pageName === 'checkout') renderCheckoutSummary();
    }
}

// ============================================
// RENDERIZADO DE PRODUCTOS Y MENÚ
// ============================================

/**
 * Crea la tarjeta HTML para un producto (Café a granel).
 */
function createProductCard(product) {
    const selectedWeight = selectedWeights[product.id] || Object.keys(product.prices)[0];
    const currentPrice = product.prices[selectedWeight];
    const t = translations[currentLang];

    const priceOptions = Object.keys(product.prices).map(weight =>
        `<option value="${weight}" ${weight === selectedWeight ? 'selected' : ''}>${weight} - $${product.prices[weight]}</option>`
    ).join('');

    return `
        <div class="product-card" data-product-id="${product.id}" data-category="${product.category}">
            <div class="product-badge">${t.products.badge}</div>
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\\'font-size:4rem;display:flex;align-items:center;justify-content:center;height:100%\\'>☕</div>'">
                <button class="add-to-cart-btn" onclick="addToCart(${product.id}, 'product')" title="${t.menu.addToCart.replace('+', '').trim()}">+</button>
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-origin">${product.origin}</div>
                <div class="product-price-selector">
                    <select onchange="updateSelectedWeight(${product.id}, this.value)">
                        ${priceOptions}
                    </select>
                </div>
            </div>
        </div>
    `;
}

/**
 * Crea la tarjeta HTML para un ítem del menú (Bebidas).
 */
function createMenuItemCard(item) {
    const t = translations[currentLang];
    let priceDisplay = `$${item.price}`;
    let selector = '';

    if (item.prices) {
        const selectedSize = selectedMenuSizes[item.id] || Object.keys(item.prices)[0];
        const currentPrice = item.prices[selectedSize];
        priceDisplay = `$${currentPrice}`;
        const sizeOptions = Object.keys(item.prices).map(size =>
            `<option value="${size}" ${size === selectedSize ? 'selected' : ''}>${size} - $${item.prices[size]}</option>`
        ).join('');
        
        selector = `
            <select onchange="updateSelectedMenuSize(${item.id}, this.value)">
                ${sizeOptions}
            </select>
        `;
    }

    return `
        <div class="menu-item-card" data-menu-id="${item.id}" data-category="${item.category}">
            <div class="item-details">
                <div class="item-name">${item.name}</div>
                <div class="item-price-selector">
                    ${selector}
                </div>
                <div class="item-price">${priceDisplay}</div>
            </div>
            <button class="menu-item-add" onclick="addToCart(${item.id}, 'menu')">
                ${t.menu.addToCart}
            </button>
        </div>
    `;
}

/**
 * Actualiza el peso seleccionado para un producto de café a granel.
 */
function updateSelectedWeight(id, weight) {
    selectedWeights[id] = weight;
    renderProducts(); // Vuelve a renderizar para actualizar el display
}

/**
 * Actualiza el tamaño seleccionado para un ítem del menú.
 */
function updateSelectedMenuSize(id, size) {
    selectedMenuSizes[id] = size;
    renderMenuItems(); // Vuelve a renderizar para actualizar el display
}

/**
 * Renderiza los productos de café a granel en las secciones de productos y inicio.
 * @param {string} searchTerm - Término de búsqueda.
 * @param {string} filterCategory - Categoría de filtro (all, coffee, drinks).
 */
function renderProducts(searchTerm = '', filterCategory = 'all') {
    const productsContainer = document.getElementById('productsGrid');
    const homeProductsContainer = document.getElementById('homeProductsGrid');
    const resultsCountEl = document.getElementById('productsResultsCount');
    const t = translations[currentLang];

    const allProductItems = [...products.map(p => ({ ...p, type: 'product', category: 'coffee' })),
                             ...Object.values(menuItems).flat().map(m => ({ ...m, type: 'menu', category: 'drinks' }))];

    const normalizedSearch = searchTerm.toLowerCase().trim();

    const filteredItems = allProductItems.filter(item => {
        const matchesSearch = normalizedSearch === '' || item.name.toLowerCase().includes(normalizedSearch) || (item.origin && item.origin.toLowerCase().includes(normalizedSearch));
        const matchesFilter = filterCategory === 'all' || item.category === filterCategory;
        return matchesSearch && matchesFilter;
    });

    const productCardsHTML = filteredItems
        .filter(item => item.type === 'product')
        .map(createProductCard)
        .join('');

    const allItemsCardsHTML = filteredItems.map(item =>
        item.type === 'product' ? createProductCard(item) : createMenuItemCard(item)
    ).join('');

    if (productsContainer) productsContainer.innerHTML = allItemsCardsHTML;
    if (homeProductsContainer) homeProductsContainer.innerHTML = productCardsHTML;

    if (resultsCountEl) {
        resultsCountEl.innerHTML = `${t.products.showing} ${filteredItems.length} ${t.products.results}`;
    }

    // Actualiza los botones de categoría
    document.querySelectorAll('.search-category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === filterCategory) {
            btn.classList.add('active');
        }
    });
}

/**
 * Renderiza los elementos del menú en la página de menú.
 */
function renderMenuItems() {
    const frappesContainer = document.getElementById('frappesContainer');
    const hotCoffeeContainer = document.getElementById('hotCoffeeContainer');
    const teasContainer = document.getElementById('teasContainer');

    if (frappesContainer) {
        frappesContainer.innerHTML = menuItems.frappes.map(createMenuItemCard).join('');
    }
    if (hotCoffeeContainer) {
        hotCoffeeContainer.innerHTML = menuItems.hotCoffee.map(createMenuItemCard).join('');
    }
    if (teasContainer) {
        teasContainer.innerHTML = menuItems.teas.map(createMenuItemCard).join('');
    }
    updateMenuPage(translations[currentLang]);
}

/**
 * Filtra los productos mostrados en la página de productos.
 * @param {string} category - La categoría a filtrar.
 */
function filterProducts(category) {
    currentFilter = category;
    const searchTerm = document.getElementById('productsSearchInput').value;
    renderProducts(searchTerm, category);
}

// ============================================
// LÓGICA DEL CARRITO
// ============================================

/**
 * Busca un ítem por ID en la lista de todos los ítems.
 * @param {number} id - ID del ítem.
 * @param {string} type - 'product' o 'menu'.
 * @returns {object|null} - El objeto ítem o null.
 */
function findItem(id, type) {
    const item = allItems.find(item => item.id === id && item.type === type);
    if (!item) return null;

    if (type === 'product') {
        const weight = selectedWeights[id] || Object.keys(item.prices)[0];
        const price = item.prices[weight];
        return {
            ...item,
            selectedOption: weight,
            unitPrice: price,
            name: `${item.name} (${weight})`
        };
    }

    if (type === 'menu') {
        if (item.prices) {
            const size = selectedMenuSizes[id] || Object.keys(item.prices)[0];
            const price = item.prices[size];
            return {
                ...item,
                selectedOption: size,
                unitPrice: price,
                name: `${item.name} (${size})`
            };
        }
        return {
            ...item,
            selectedOption: 'standard',
            unitPrice: item.price
        };
    }

    return null;
}

/**
 * Agrega un ítem al carrito.
 * @param {number} id - ID del ítem.
 * @param {string} type - 'product' o 'menu'.
 */
function addToCart(id, type) {
    const itemToAdd = findItem(id, type);
    if (!itemToAdd) return;

    // Generar un identificador único para el carrito basado en ID, tipo y opción seleccionada
    const cartItemId = `${type}-${id}-${itemToAdd.selectedOption}`;

    const existingItem = cart.find(item => item.cartItemId === cartItemId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...itemToAdd,
            cartItemId: cartItemId,
            quantity: 1,
            subtotal: itemToAdd.unitPrice * 1
        });
    }

    updateCartDisplay();
    showNotification(`"${itemToAdd.name}" ${translations[currentLang].cart.added}`, 'success');
}

/**
 * Elimina un ítem del carrito.
 * @param {string} cartItemId - ID único del ítem en el carrito.
 */
function removeFromCart(cartItemId) {
    const index = cart.findIndex(item => item.cartItemId === cartItemId);
    if (index > -1) {
        const removedItemName = cart[index].name;
        cart.splice(index, 1);
        updateCartDisplay();
        showNotification(`"${removedItemName}" ${translations[currentLang].notifications.removed}`, 'info');
    }
}

/**
 * Actualiza la cantidad de un ítem en el carrito.
 * @param {string} cartItemId - ID único del ítem en el carrito.
 * @param {number} quantity - Nueva cantidad.
 */
function updateCartQuantity(cartItemId, quantity) {
    const item = cart.find(item => item.cartItemId === cartItemId);
    if (!item) return;

    const newQuantity = parseInt(quantity);
    if (newQuantity <= 0) {
        removeFromCart(cartItemId);
    } else {
        item.quantity = newQuantity;
        item.subtotal = item.unitPrice * newQuantity;
        updateCartDisplay();
    }
}

/**
 * Calcula el total del carrito.
 * @returns {number} - El total.
 */
function getCartTotal() {
    return cart.reduce((total, item) => total + item.subtotal, 0);
}

/**
 * Renderiza el contenido del carrito (modal y contador).
 */
function updateCartDisplay() {
    const cartContent = document.getElementById('cartContent');
    const cartTotalEl = document.getElementById('cartTotal');
    const cartCountEl = document.getElementById('cartCount');
    const checkoutBtn = document.querySelector('.checkout-btn');
    const t = translations[currentLang];

    // Actualizar el contador en el ícono de navegación
    const totalItems = cart.reduce((count, item) => count + item.quantity, 0);
    if (cartCountEl) {
        cartCountEl.textContent = totalItems;
        cartCountEl.classList.toggle('hidden', totalItems === 0);
    }

    // Renderizar contenido del modal
    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="cart-empty">
                <h3>${t.cart.empty}</h3>
                <p>${t.cart.emptyMessage}</p>
            </div>
        `;
        cartTotalEl.textContent = `$0.00`;
        if (checkoutBtn) checkoutBtn.disabled = true;
    } else {
        const itemsHTML = cart.map(item => `
            <div class="cart-item" data-id="${item.cartItemId}">
                <div class="item-name-price">
                    <span class="item-name">${item.name}</span>
                    <span class="item-price">$${item.unitPrice.toFixed(2)}</span>
                </div>
                <div class="item-actions">
                    <label>${t.cart.quantity}: </label>
                    <input type="number" min="1" value="${item.quantity}" onchange="updateCartQuantity('${item.cartItemId}', this.value)">
                    <span class="item-subtotal">$${item.subtotal.toFixed(2)}</span>
                    <button class="remove-item-btn" onclick="removeFromCart('${item.cartItemId}')" title="${t.cart.remove}">&#x2715;</button>
                </div>
            </div>
        `).join('');

        cartContent.innerHTML = itemsHTML;
        cartTotalEl.textContent = `$${getCartTotal().toFixed(2)}`;
        if (checkoutBtn) checkoutBtn.disabled = false;
    }

    // Guardar el carrito en localStorage
    localStorage.setItem('cafeElementosCart', JSON.stringify(cart));
}

/**
 * Muestra u oculta el modal del carrito.
 */
function toggleCartModal() {
    const modal = document.getElementById('cartModal');
    if (modal) {
        modal.classList.toggle('active');
        document.body.style.overflow = modal.classList.contains('active') ? 'hidden' : '';
    }
    updateCartDisplay();
}

// ============================================
// PÁGINA DE CHECKOUT
// ============================================

/**
 * Renderiza el resumen del pedido en la página de checkout.
 */
function renderCheckoutSummary() {
    const summaryContainer = document.getElementById('orderSummaryContent');
    const totalContainer = document.getElementById('orderTotal');
    const t = translations[currentLang];

    if (!summaryContainer || !totalContainer) return;

    if (cart.length === 0) {
        summaryContainer.innerHTML = `<p>${t.cart.empty}</p>`;
        totalContainer.textContent = `$0.00`;
        document.getElementById('checkoutForm').classList.add('hidden');
        return;
    }

    const summaryHTML = cart.map(item => `
        <div class="summary-item">
            <span class="item-details">${item.quantity} x ${item.name}</span>
            <span class="item-price">$${item.subtotal.toFixed(2)}</span>
        </div>
    `).join('');

    summaryContainer.innerHTML = summaryHTML;
    totalContainer.textContent = `$${getCartTotal().toFixed(2)}`;
    document.getElementById('checkoutForm').classList.remove('hidden');
}

/**
 * Maneja el envío del formulario de checkout (simulado).
 */
function handleCheckoutSubmit(e) {
    e.preventDefault();
    const t = translations[currentLang];

    const form = e.target;
    // Validar campos requeridos (ejemplo básico, se requiere validación más robusta en un entorno real)
    const requiredFields = form.querySelectorAll('input[required], select[required], textarea[required]');
    let allFilled = true;
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            allFilled = false;
            field.classList.add('error');
        } else {
            field.classList.remove('error');
        }
    });

    if (!allFilled) {
        showNotification(t.notifications.fillFields, 'error');
        return;
    }

    // Generar un número de orden simple
    const orderNumber = 'CE-' + Date.now().toString().slice(-6);

    // Simular envío de correo de confirmación
    if (typeof emailjs !== 'undefined') {
        const orderDetails = cart.map(item => `${item.quantity} x ${item.name} ($${item.subtotal.toFixed(2)})`).join('\n');
        const templateParams = {
            order_number: orderNumber,
            total: getCartTotal().toFixed(2),
            to_email: form.elements['shipping_email'].value,
            customer_name: form.elements['shipping_name'].value,
            order_details: orderDetails
            // ... otros datos del formulario que quieras enviar
        };

        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
            .then((response) => {
                console.log('Correo de pedido enviado!', response.status, response.text);
                finalizeOrder(orderNumber);
            }, (error) => {
                console.error('Error al enviar correo de pedido:', error);
                // A pesar del error de correo, se asume que el pedido se procesó en el backend
                finalizeOrder(orderNumber);
                showNotification(t.notifications.orderError, 'error');
            });
    } else {
        // Ejecución sin EmailJS (solo simulación)
        finalizeOrder(orderNumber);
    }
}

/**
 * Finaliza la orden, vacía el carrito y muestra la página de éxito.
 * @param {string} orderNumber - El número de orden.
 */
function finalizeOrder(orderNumber) {
    const orderNumberEl = document.getElementById('successOrderNumber');
    if (orderNumberEl) orderNumberEl.textContent = orderNumber;

    cart = [];
    localStorage.removeItem('cafeElementosCart');
    updateCartDisplay();
    showPage('success');
}

// ============================================
// MANEJO DE FORMULARIOS
// ============================================

/**
 * Maneja el envío del formulario de suscripción (Newsletter).
 */
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const t = translations[currentLang];
    const emailInput = document.getElementById('newsletterEmail');
    const email = emailInput.value.trim();

    if (!isValidEmail(email)) {
        showNotification(t.notifications.invalidEmail, 'error');
        return;
    }

    // Simulación de envío a EmailJS
    if (typeof emailjs !== 'undefined') {
        emailjs.send(EMAILJS_SERVICE_ID, 'template_newsletter_id', {
            to_email: email
        })
        .then((response) => {
            showNotification(t.notifications.newsletterSuccess, 'success');
            emailInput.value = '';
        }, (error) => {
            console.error('Error al enviar suscripción:', error);
            showNotification(t.notifications.newsletterSuccess, 'success'); // Mostrar éxito a pesar del error de envío
            emailInput.value = '';
        });
    } else {
        showNotification(t.notifications.newsletterSuccess, 'success');
        emailInput.value = '';
    }
}

/**
 * Maneja el envío del formulario de contacto.
 */
function handleContactSubmit(e) {
    e.preventDefault();
    const t = translations[currentLang];
    const form = e.target;
    const formData = new FormData(form);
    let allFilled = true;

    // Validación simple de campos
    for (let [name, value] of formData.entries()) {
        if (value.trim() === '') {
            allFilled = false;
            break;
        }
    }

    if (!allFilled) {
        showNotification(t.notifications.fillFields, 'error');
        return;
    }

    if (!isValidEmail(formData.get('user_email'))) {
        showNotification(t.notifications.invalidEmail, 'error');
        return;
    }

    // Simulación de envío a EmailJS
    if (typeof emailjs !== 'undefined') {
        const templateParams = {
            from_name: formData.get('user_name') + ' ' + formData.get('user_lastname'),
            from_email: formData.get('user_email'),
            phone_number: formData.get('user_phone'),
            message: formData.get('message')
        };

        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
            .then((response) => {
                showNotification(t.notifications.contactSuccess, 'success');
                form.reset();
            }, (error) => {
                console.error('Error al enviar contacto:', error);
                showNotification(t.notifications.contactSuccess, 'success'); // Mostrar éxito a pesar del error de envío
                form.reset();
            });
    } else {
        showNotification(t.notifications.contactSuccess, 'success');
        form.reset();
    }
}

/**
 * Maneja el envío del formulario de búsqueda principal.
 */
function handleMainSearchSubmit(e) {
    e.preventDefault();
    const searchTerm = document.getElementById('mainSearchInput').value;
    if (searchTerm) {
        document.getElementById('productsSearchInput').value = searchTerm;
        showPage('productos');
        renderProducts(searchTerm, 'all');
    }
}

/**
 * Maneja el envío del formulario de búsqueda de productos.
 */
function handleProductsSearchSubmit(e) {
    e.preventDefault();
    const searchTerm = document.getElementById('productsSearchInput').value;
    renderProducts(searchTerm, currentFilter);
}

// ============================================
// CHAT
// ============================================

/**
 * Muestra u oculta la ventana de chat.
 */
function toggleChatWindow() {
    const chatWindow = document.getElementById('chatWindow');
    if (chatWindow) {
        chatWindow.classList.toggle('active');
        if (chatWindow.classList.contains('active')) {
            // Agregar mensaje de bienvenida solo si es la primera vez que se abre
            if (document.querySelectorAll('.chat-message').length === 0) {
                appendChatMessage(translations[currentLang].chat.welcome, 'bot');
            }
        }
    }
}

/**
 * Agrega un mensaje a la ventana de chat.
 * @param {string} message - El mensaje.
 * @param {string} sender - 'user' o 'bot'.
 */
function appendChatMessage(message, sender) {
    const messagesContainer = document.getElementById('chatMessages');
    if (!messagesContainer) return;

    const messageEl = document.createElement('div');
    messageEl.className = `chat-message ${sender}`;
    messageEl.innerHTML = `<p>${message}</p>`; // Usar innerHTML para permitir etiquetas simples como <a>, aunque aquí solo es <p>

    messagesContainer.appendChild(messageEl);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll al final
}

/**
 * Maneja el envío de mensajes de chat.
 */
function handleChatSubmit(e) {
    e.preventDefault();
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (message) {
        appendChatMessage(message, 'user');
        input.value = '';
        // Simular respuesta del bot
        setTimeout(() => {
            appendChatMessage("Gracias por tu mensaje. Un miembro de nuestro equipo te atenderá pronto.", 'bot');
        }, 1500);
    }
}

// ============================================
// PROMOCIÓN Y TIEMPO
// ============================================

/**
 * Inicia el temporizador de la promoción.
 */
function startPromotionTimer() {
    // Establece la fecha de finalización de la promoción (ejemplo: mañana a las 10 AM)
    const now = new Date();
    const endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 10, 0, 0);

    const timerInterval = setInterval(() => {
        const distance = endDate - new Date();
        const timerEl = document.getElementById('promotionTimer');

        if (distance < 0) {
            clearInterval(timerInterval);
            if (timerEl) timerEl.textContent = "¡Promoción Terminada!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (timerEl) {
            timerEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }, 1000);
}

// ============================================
// TARJETAS DE CRÉDITO/DÉBITO (Simulación de formato)
// ============================================

function setupCardFormatting() {
    const cardNumberInput = document.getElementById('cardNumber');
    const cardExpiryInput = document.getElementById('cardExpiry');
    const cardCVVInput = document.getElementById('cardCVV');

    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', formatCardNumber);
    }
    if (cardExpiryInput) {
        cardExpiryInput.addEventListener('input', formatCardExpiry);
    }
    if (cardCVVInput) {
        cardCVVInput.addEventListener('input', formatCardCVV);
    }

    // Añadir el manejador del formulario de checkout al evento DOMContentLoaded
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) checkoutForm.addEventListener('submit', handleCheckoutSubmit);
}

function formatCardNumber(e) {
    let value = e.target.value.replace(/\D/g, ''); // Remover no-dígitos
    value = value.substring(0, 16); // Limitar a 16 dígitos
    e.target.value = value.replace(/(\d{4})(?=\d)/g, '$1 '); // Insertar espacio cada 4 dígitos
}

function formatCardExpiry(e) {
    let value = e.target.value.replace(/\D/g, ''); // Remover no-dígitos
    value = value.substring(0, 4); // Limitar a 4 dígitos

    if (value.length > 2) {
        e.target.value = value.replace(/^(\d{2})/, '$1/');
    } else {
        e.target.value = value;
    }
}

function formatCardCVV(e) {
    e.target.value = e.target.value.replace(/\D/g, '').substring(0, 4); // Limitar a 3 o 4 dígitos
}

// Asignar funciones al objeto global 'window' para que sean accesibles desde el HTML
window.showPage = showPage;
window.updateSelectedWeight = updateSelectedWeight;
window.updateSelectedMenuSize = updateSelectedMenuSize;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.toggleCartModal = toggleCartModal;
window.updateCartQuantity = updateCartQuantity;
window.filterProducts = filterProducts;
window.changeLanguage = changeLanguage;
window.toggleMobileMenu = toggleMobileMenu;
window.closeMobileMenu = closeMobileMenu;
window.toggleChatWindow = toggleChatWindow;
