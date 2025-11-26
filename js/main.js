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
    emailjs.init(EMAILJS_PUBLIC_KEY);
})();

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
// CAMBIO DE IDIOMA
// ============================================
function changeLanguage(lang) {
    currentLang = lang;
    updateLanguage();
    closeMobileMenu();
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
    
    const sectionTitle = document.querySelector('.section-title h2');
    if (sectionTitle) {
        sectionTitle.innerHTML = `${t.section.explore}<br>${t.section.ourCoffee}`;
    }
    
    const aboutTitle = document.querySelector('.about-section h2');
    const aboutParas = document.querySelectorAll('.about-section p');
    if (aboutTitle) aboutTitle.textContent = t.about.title;
    if (aboutParas.length >= 2) {
        aboutParas[0].textContent = t.about.text1;
        aboutParas[1].textContent = t.about.text2;
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
                <div class="product-origin
