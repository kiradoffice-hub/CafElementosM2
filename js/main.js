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
            added: 'agregado al carrito'
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
            added: 'added to cart'
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
});

function init() {
    products.forEach(p => {
        selectedWeights[p.id] = '1/4';
    });
    
    Object.values(menuItems).flat().forEach(item => {
        if (item.prices) {
            selectedMenuSizes[item.id] = Object.keys(item.prices)[0];
        }
    });
    
    renderProducts();
    renderStoreProducts();
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
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMobileMenu();
        });
    }
    
    // Cerrar menú al hacer click en un enlace
    const navLinks = document.querySelectorAll('#navMenu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMobileMenu();
        });
    });
    
    // Cerrar menú al hacer click fuera
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
    
    mobileMenuBtn.classList.remove('active');
    mobileMenuContainer.classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// CAMBIO DE IDIOMA
// ============================================
function changeLanguage(lang) {
    currentLang = lang;
    updateLanguage();
    closeMobileMenu();
}

function updateLanguage() {
    const t = translations[currentLang];
    
    // Actualizar navegación
    const navLinks = document.querySelectorAll('#navMenu a');
    if (navLinks.length >= 5) {
        navLinks[0].textContent = t.nav.welcome;
        navLinks[1].textContent = t.nav.home;
        navLinks[2].textContent = t.nav.menu;
        navLinks[3].textContent = t.nav.products;
        navLinks[4].textContent = t.nav.more;
    }
    
    // Actualizar búsqueda
    const searchInput = document.getElementById('searchInput');
    const mainSearchInput = document.getElementById('mainSearchInput');
    if (searchInput) searchInput.placeholder = t.search.placeholder;
    if (mainSearchInput) mainSearchInput.placeholder = t.search.mainPlaceholder;
    
    // Actualizar página de bienvenida
    updateWelcomePage(t);
    
    // Actualizar página de inicio
    updateHomePage(t);
    
    // Actualizar menú
    updateMenuPage(t);
    
    // Actualizar productos
    updateProductsPage(t);
    
    // Actualizar carrito
    updateCartTexts(t);
    
    // Actualizar chat
    updateChatTexts(t);
    
    // Actualizar footer
    updateFooterTexts(t);
}

function updateWelcomePage(t) {
    const welcomeTitle = document.querySelector('.welcome-content h1');
    const welcomeDesc = document.querySelector('.welcome-content > p');
    const welcomeBtn = document.querySelector('.welcome-btn');
    
    if (welcomeTitle) welcomeTitle.textContent = t.welcome.title;
    if (welcomeDesc) welcomeDesc.textContent = t.welcome.description;
    if (welcomeBtn) welcomeBtn.textContent = t.welcome.button;
    
    // Actualizar banner de promoción
    const promoBadge = document.querySelector('.promotion-badge');
    const promoTitle = document.querySelector('.promotion-content h3');
    const promoDesc = document.querySelector('.promotion-content > p');
    const shippingInfo = document.querySelector('.shipping-info');
    
    if (promoBadge) promoBadge.textContent = t.welcome.promotion.badge;
    if (promoTitle) promoTitle.textContent = t.welcome.promotion.title;
    if (promoDesc) promoDesc.textContent = t.welcome.promotion.description;
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
    
    // Actualizar sección "Explora"
    const sectionTitle = document.querySelector('.section-title h2');
    if (sectionTitle) {
        sectionTitle.innerHTML = `${t.section.explore}<br>${t.section.ourCoffee}`;
    }
    
    // Actualizar "Acerca de"
    const aboutTitle = document.querySelector('.about-section h2');
    const aboutParas = document.querySelectorAll('.about-section p');
    if (aboutTitle) aboutTitle.textContent = t.about.title;
    if (aboutParas.length >= 2) {
        aboutParas[0].textContent = t.about.text1;
        aboutParas[1].textContent = t.about.text2;
    }
    
    // Actualizar contacto
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
        if (categorySubtitles.length >= 2) {
            categorySubtitles[1].textContent = t.menu.teas;
        }
    }
    
    // Actualizar botones de agregar al carrito
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
}

function updateCartTexts(t) {
    const cartTitle = document.querySelector('.cart-header h2');
    if (cartTitle) cartTitle.textContent = t.cart.title;
    
    const cartTotal = document.querySelector('.cart-total span:first-child');
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
    if (footerLinks.length >= 1) {
        footerLinks[0].textContent = t.footer.privacy;
    }
    
    const footerBottom = document.querySelector('.footer-bottom');
    if (footerBottom) footerBottom.textContent = t.footer.copyright;
}

// ============================================
// NAVEGACIÓN DE PÁGINAS
// ============================================
function showPage(pageName) {
    const pages = ['bienvenido', 'inicio', 'menu', 'tienda', 'productos', 'nosotros', 'privacy'];
    
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
}

// ============================================
// RENDERIZADO DE PRODUCTOS
// ============================================
function createProductCard(product, containerId) {
    const selectedWeight = selectedWeights[product.id] || '1/4';
    const currentPrice = product.prices[selectedWeight];
    const t = translations[currentLang];
    
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-badge">${t.products.badge}</div>
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\\'font-size:4rem;display:flex;align-items:center;justify-content:center;height:100%\\'>☕</div>'">
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})" title="Agregar al carrito">+</button>
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-origin">${product.origin}</div>
<div class="product-price" id="price-${containerId}-${product.id}">$${currentPrice}.00 MXN</div>
<div class="product-weight">
${Object.keys(product.prices).map(weight =>                         <button class="weight-btn ${selectedWeight === weight ? 'active' : ''}"                                  onclick="selectWeight(${product.id}, '${weight}', '${containerId}')">                             ${weight === '1kg' ? '1 kg' : weight + ' kg'}                         </button>                    ).join('')}
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
function renderStoreProducts() {
const container = document.getElementById('storeProductsGrid');
if (container) {
container.innerHTML = products.map(product => createProductCard(product, 'tienda')).join('');
const totalProducts = document.getElementById('totalProducts');
if (totalProducts) totalProducts.textContent = products.length;
}
}
// ============================================
// RENDERIZADO DE MENÚ
// ============================================
function createMenuItem(item) {
const hasMultipleSizes = item.prices && typeof item.prices === 'object';
const selectedSize = selectedMenuSizes[item.id];
const currentPrice = hasMultipleSizes ? item.prices[selectedSize] : item.price;
const t = translations[currentLang];
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
            ${t.menu.addToCart}
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
// SELECCIÓN DE PESO Y TAMAÑO
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
// CARRITO
// ============================================
function addToCart(productId) {
const product = products.find(p => p.id === productId);
const weight = selectedWeights[productId] || '1/4';
const existingItem = cart.find(item => item.id === productId && item.weight === weight && item.type === 'product');
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
const t = translations[currentLang];
showNotification(`${product.name} (${weight}) ${t.cart.added}`, 'success');
}
function addMenuToCart(itemId) {
const item = Object.values(menuItems).flat().find(i => i.id === itemId);
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
const t = translations[currentLang];
showNotification(`${item.name} (${sizeText}) ${t.cart.added}`, 'success');
}
function removeFromCart(index) {
const item = cart[index];
cart.splice(index, 1);
updateCart();
const t = translations[currentLang];
showNotification(${item.name} ${t.notifications.removed}, 'success');
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
const cartCounts = document.querySelectorAll('.cart-count');
const total = cart.reduce((sum, item) => sum + item.quantity, 0);
cartCounts.forEach(count => {
count.textContent = total;
});
}
function renderCartItems() {
const cartItems = document.getElementById('cartItems');
if (!cartItems) return;
const t = translations[currentLang];

if (cart.length === 0) {
    cartItems.innerHTML = `
        <div class="empty-cart">
            <p style="font-size: 3rem; margin-bottom: 1rem;">🛒</p>
            <p>${t.cart.empty}</p>
            <p style="font-size: 0.85rem; margin-top: 0.5rem;">${t.cart.emptyMessage}</p>
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
const t = translations[currentLang];
if (cart.length === 0) {
    showNotification(t.notifications.emptyCart, 'error');
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
async function confirmOrder() {
const t = translations[currentLang];
const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
const name = document.getElementById('checkoutName').value.trim();
const email = document.getElementById('checkoutEmail').value.trim();
const phone = document.getElementById('checkoutPhone').value.trim();
const address = document.getElementById('checkoutAddress').value.trim();
const city = document.getElementById('checkoutCity').value.trim();
const postal = document.getElementById('checkoutPostal').value.trim();

if (!name || !email || !phone || !address || !city || !postal) {
    showNotification(t.notifications.fillFields, 'error');
    return;
}

if (!validateEmail(email)) {
    showNotification(t.notifications.invalidEmail, 'error');
    return;
}

if (paymentMethod === 'card') {
    const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
    const cardExpiry = document.getElementById('cardExpiry').value;
    const cardCVV = document.getElementById('cardCVV').value;
    const cardName = document.getElementById('cardName').value.trim();
    
    if (!cardNumber || !cardExpiry || !cardCVV || !cardName) {
        showNotification(t.notifications.fillFields, 'error');
        return;
    }
    
    if (cardNumber.length < 13) {
        showNotification(t.notifications.invalidEmail, 'error');
        return;
    }
} else if (paymentMethod === 'paypal') {
    const paypalEmail = document.getElementById('paypalEmail').value.trim();
    
    if (!paypalEmail) {
        showNotification(t.notifications.fillFields, 'error');
        return;
    }
    
    if (!validateEmail(paypalEmail)) {
        showNotification(t.notifications.invalidEmail, 'error');
        return;
    }
}

const confirmBtn = document.querySelector('.confirm-btn');
const originalText = confirmBtn.textContent;
confirmBtn.disabled = true;
confirmBtn.innerHTML = '<span class="loading-spinner"></span>Procesando...';

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
        paymentMethodText.textContent = currentLang === 'es' 
            ? 'Tu pago ha sido procesado con PayPal. Hemos enviado la confirmación y el ticket a tu correo electrónico.'
            : 'Your payment has been processed with PayPal. We have sent the confirmation and ticket to your email.';
    } else {
        paymentMethodText.textContent = t.success.emailSent;
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
    showNotification(t.notifications.orderError, 'error');
} finally {
    confirmBtn.disabled = false;
    confirmBtn.textContent = originalText;
}
}
async function sendOrderEmail(params) {
if (EMAILJS_SERVICE_ID === 'service_xxxxxxx') {
console.warn('EmailJS no está configurado. Mostrando email en consola:');
console.log('╔═══════════════════════════════════════════╗');
console.log('TICKET DE COMPRA - SIMULACIÓN');
console.log('╚═══════════════════════════════════════════╝');
console.log('Para:', params.to_email);
console.log('Nombre:', params.to_name);
console.log('Orden:', params.order_number);
console.log('──────────────────────────────────────────────');
console.log(params.email_body);
console.log('╚═══════════════════════════════════════════╝');
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
const t = translations[currentLang];
const emailInput = document.getElementById('newsletterEmail');
const email = emailInput.value.trim();
if (!email) {
    showNotification(t.notifications.fillFields, 'error');
    return;
}

if (!validateEmail(email)) {
    showNotification(t.notifications.invalidEmail, 'error');
    return;
}

showNotification(t.notifications.newsletterSuccess, 'success');
emailInput.value = '';
}
function sendContact() {
const t = translations[currentLang];
const name = document.getElementById('contactName')?.value.trim();
const email = document.getElementById('contactEmail')?.value.trim();
const message = document.getElementById('contactMessage')?.value.trim();
if (!name || !email || !message) {
    showNotification(t.notifications.fillFields, 'error');
    return;
}

if (!validateEmail(email)) {
    showNotification(t.notifications.invalidEmail, 'error');
    return;
}

showNotification(t.notifications.contactSuccess, 'success');

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
    const t = translations[currentLang];
    const responses = [
        currentLang === 'es' ? '¡Gracias por tu mensaje! Un representante te atenderá pronto.' : 'Thanks for your message! A representative will assist you soon.',
        currentLang === 'es' ? '¿Te gustaría conocer nuestros productos destacados?' : 'Would you like to know our featured products?',
        currentLang === 'es' ? 'Estamos aquí para ayudarte. ¿En qué más puedo asistirte?' : 'We are here to help. How else can I assist you?',
        currentLang === 'es' ? '¡Excelente pregunta! Déjame verificar esa información para ti.' : 'Excellent question! Let me verify that information for you.'
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
function performSearch() {
const query = document.getElementById('searchInput').value.trim().toLowerCase();
if (query) {
searchProducts(query);
}
}
function handleSearch(event) {
if (event.key === 'Enter') {
performSearch();
}
}
function performMainSearch() {
const query = document.getElementById('mainSearchInput').value.trim().toLowerCase();
if (query) {
searchProducts(query);
}
}
function handleMainSearch(event) {
if (event.key === 'Enter') {
performMainSearch();
}
}
function searchProducts(query) {
const allItems = [
...products.map(p => ({ ...p, type: 'coffee' })),
...Object.values(menuItems).flat().map(m => ({ ...m, type: 'drink' }))
];
const results = allItems.filter(item => 
    item.name.toLowerCase().includes(query) ||
    (item.origin && item.origin.toLowerCase().includes(query))
);

displaySearchResults(results);
}
function filterByCategory(category) {
const buttons = document.querySelectorAll('.category-btn');
buttons.forEach(btn => btn.classList.remove('active'));
event.target.classList.add('active');
if (category === 'all') {
    document.getElementById('searchResults').innerHTML = '';
    return;
}

const allItems = [
    ...products.map(p => ({ ...p, type: 'coffee' })),
    ...Object.values(menuItems).flat().map(m => ({ ...m, type: 'drink' }))
];

const results = allItems.filter(item => 
    (category === 'coffee' && item.type === 'coffee') ||
    (category === 'drinks' && item.type === 'drink')
);

displaySearchResults(results);
}
function displaySearchResults(results) {
const container = document.getElementById('searchResults');
const t = translations[currentLang];
if (results.length === 0) {
    container.innerHTML = `
        <div class="no-results">
            <p>${currentLang === 'es' ? 'No se encontraron resultados' : 'No results found'}</p>
            <p>${currentLang === 'es' ? 'Intenta con otra búsqueda' : 'Try another search'}</p>
        </div>
    `;
    return;
}

container.innerHTML = `
    <div class="search-results">
        <div class="search-results-header">
            <h3>${currentLang === 'es' ? 'Resultados de búsqueda' : 'Search results'} (${results.length})</h3>
        </div>
        <div class="search-results-grid">
            ${results.map(item => createSearchResultCard(item)).join('')}
        </div>
    </div>
`;
}
function createSearchResultCard(item) {
const isCoffee = item.type === 'coffee';
const price = isCoffee ? item.prices['1/4'] : (item.prices ? item.prices[Object.keys(item.prices)[0]] : item.price);
return `
    <div class="search-result-card ${isCoffee ? 'coffee-card' : 'drink-card'}" onclick="${isCoffee ? `showPage('productos')` : `showPage('menu')`}">
        ${isCoffee ? `
            <div class="result-image">
                <img src="${item.image}" alt="${item.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\\'font-size:2.5rem\\'>☕</div>'">
            </div>
        ` : `
            <div class="result-image">
                <div style="font-size:2.5rem;">☕</div>
            </div>
        `}
        <div class="result-info">
            <h4>${item.name}</h4>
            ${isCoffee ? `<div class="result-origin">${item.origin}</div>` : `<div class="result-type">${currentLang === 'es' ? 'Bebida' : 'Drink'}</div>`}
            <div class="result-price">$${price}.00 MXN</div>
            <button class="result-add-btn" onclick="event.stopPropagation(); ${isCoffee ? `addToCart(${item.id})` : `addMenuToCart(${item.id})`}">
                ${currentLang === 'es' ? '+ Agregar' : '+ Add'}
            </button>
        </div>
    </div>
`;
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
    notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// FORMATEO DE TARJETA
// ============================================
function setupCardFormatting() {
    const cardNumber = document.getElementById('cardNumber');
    const cardExpiry = document.getElementById('cardExpiry');
    const cardCVV = document.getElementById('cardCVV');

    if (cardNumber) {
        cardNumber.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s/g, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            e.target.value = formattedValue;
        });
    }

    if (cardExpiry) {
        cardExpiry.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.slice(0, 2) + '/' + value.slice(2, 4);
            }
            e.target.value = value;
        });
    }

    if (cardCVV) {
        cardCVV.addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/\D/g, '').slice(0, 4);
        });
    }
}

// ============================================
// TEMPORIZADOR DE PROMOCIÓN
// ============================================
function startPromotionTimer() {
    const timerElement = document.getElementById('promotionTimer');
    if (!timerElement) return;

    const endTime = new Date();
    endTime.setHours(23, 59, 59, 999);

    function updateTimer() {
        const now = new Date();
        const diff = endTime - now;

        if (diff <= 0) {
            timerElement.textContent = currentLang === 'es' 
                ? 'La promoción ha terminado' 
                : 'Promotion has ended';
            return;
        }

        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        const t = translations[currentLang];
        timerElement.textContent = `${t.welcome.promotion.timer} ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    updateTimer();
    setInterval(updateTimer, 1000);
}

// Iniciar el temporizador cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    startPromotionTimer();
});

// ============================================
// INICIALIZACIÓN DE EMAILJS
// ============================================
(function() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }
})();
