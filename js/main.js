/* ============================================
   CAFÉ ELEMENTOS - MAIN JAVASCRIPT
   ============================================ */

// ============================================
// DATOS DE PRODUCTOS Y MENÚ
// ============================================

const menuData = {
    frappes: [
        { name: 'Frappe de Café', price: 65, sizes: ['Chico', 'Mediano', 'Grande'] },
        { name: 'Frappe de Chocolate', price: 65, sizes: ['Chico', 'Mediano', 'Grande'] },
        { name: 'Frappe de Vainilla', price: 65, sizes: ['Chico', 'Mediano', 'Grande'] },
        { name: 'Frappe de Caramelo', price: 65, sizes: ['Chico', 'Mediano', 'Grande'] },
        { name: 'Frappe de Oreo', price: 75, sizes: ['Chico', 'Mediano', 'Grande'] },
        { name: 'Frappe de Nutella', price: 75, sizes: ['Chico', 'Mediano', 'Grande'] }
    ],
    hotCoffee: [
        { name: 'Café Americano', price: 35, sizes: ['Chico', 'Mediano', 'Grande'] },
        { name: 'Cappuccino', price: 45, sizes: ['Chico', 'Mediano', 'Grande'] },
        { name: 'Latte', price: 45, sizes: ['Chico', 'Mediano', 'Grande'] },
        { name: 'Mocha', price: 50, sizes: ['Chico', 'Mediano', 'Grande'] },
        { name: 'Chocolate Caliente', price: 40, sizes: ['Chico', 'Mediano', 'Grande'] }
    ],
    teas: [
        { name: 'Té Verde', price: 30, sizes: ['Chico', 'Mediano', 'Grande'] },
        { name: 'Té Negro', price: 30, sizes: ['Chico', 'Mediano', 'Grande'] },
        { name: 'Té de Manzanilla', price: 30, sizes: ['Chico', 'Mediano', 'Grande'] },
        { name: 'Té de Menta', price: 30, sizes: ['Chico', 'Mediano', 'Grande'] }
    ]
};

const productsData = [
    {
        id: 1,
        name: 'Café Chiapas',
        origin: 'Chiapas, México',
        price: 180,
        weights: ['250g', '500g', '1kg'],
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400',
        badge: 'Nuevo'
    },
    {
        id: 2,
        name: 'Café Oaxaca',
        origin: 'Oaxaca, México',
        price: 200,
        weights: ['250g', '500g', '1kg'],
        image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400',
        badge: 'Popular'
    },
    {
        id: 3,
        name: 'Café Veracruz',
        origin: 'Veracruz, México',
        price: 190,
        weights: ['250g', '500g', '1kg'],
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400',
        badge: ''
    },
    {
        id: 4,
        name: 'Café Colombia',
        origin: 'Colombia',
        price: 220,
        weights: ['250g', '500g', '1kg'],
        image: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=400',
        badge: 'Premium'
    }
];

// ============================================
// ESTADO DE LA APLICACIÓN
// ============================================

let cart = [];
let currentLanguage = 'es';

// ============================================
// TRADUCCIONES
// ============================================

const translations = {
    es: {
        welcome: 'Bienvenido a Café Elementos',
        explore: 'Explorar Nuestro Café',
        subscribe: 'SUSCRÍBETE',
        menu: 'Menú',
        products: 'Productos',
        about: 'Más',
        search: 'Buscar productos...',
        cart: 'Carrito',
        checkout: 'Proceder al Pago',
        total: 'Total',
        emptyCart: 'Tu carrito está vacío'
    },
    en: {
        welcome: 'Welcome to Café Elementos',
        explore: 'Explore Our Coffee',
        subscribe: 'SUBSCRIBE',
        menu: 'Menu',
        products: 'Products',
        about: 'More',
        search: 'Search products...',
        cart: 'Cart',
        checkout: 'Proceed to Checkout',
        total: 'Total',
        emptyCart: 'Your cart is empty'
    }
};

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initializeEmailJS();
    loadMenuItems();
    loadProducts();
    showPage('bienvenido');
    updateCart();
    startPromotionTimer();
    setupMobileMenu();
});

// ============================================
// NAVEGACIÓN
// ============================================

function showPage(pageId) {
    // Ocultar todas las páginas
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => page.classList.add('hidden'));
    
    // Mostrar la página seleccionada
    const selectedPage = document.getElementById(`page-${pageId}`);
    if (selectedPage) {
        selectedPage.classList.remove('hidden');
    }
    
    // Scroll al inicio
    window.scrollTo(0, 0);
    
    // Cerrar menú móvil si está abierto
    closeMobileMenu();
}

// ============================================
// MENÚ MÓVIL
// ============================================

function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenuContainer = document.getElementById('mobileMenuContainer');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // Cerrar menú al hacer clic en un link
    const navLinks = document.querySelectorAll('#navMenu a');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Cerrar menú al hacer clic fuera
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
    
    // Prevenir scroll del body cuando el menú está abierto
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
// CARGAR ITEMS DEL MENÚ
// ============================================

function loadMenuItems() {
    // Cargar Frappes
    const frappesContainer = document.getElementById('menuFrappes');
    if (frappesContainer) {
        frappesContainer.innerHTML = menuData.frappes.map(item => createMenuItem(item, 'frappe')).join('');
    }
    
    // Cargar Bebidas Calientes
    const hotCoffeeContainer = document.getElementById('menuHotCoffee');
    if (hotCoffeeContainer) {
        hotCoffeeContainer.innerHTML = menuData.hotCoffee.map(item => createMenuItem(item, 'hot')).join('');
    }
    
    // Cargar Tés
    const teasContainer = document.getElementById('menuTeas');
    if (teasContainer) {
        teasContainer.innerHTML = menuData.teas.map(item => createMenuItem(item, 'tea')).join('');
    }
}

function createMenuItem(item, type) {
    return `
        <div class="menu-item">
            <div class="menu-item-header">
                <span class="menu-item-name">${item.name}</span>
                <span class="menu-item-price">$${item.price} MXN</span>
            </div>
            <div class="menu-item-sizes">
                ${item.sizes.map(size => `<button class="size-btn" onclick="selectSize(this)">${size}</button>`).join('')}
            </div>
            <button class="menu-item-add" onclick="addMenuItemToCart('${item.name}', ${item.price}, '${type}')">
                Agregar al Carrito
            </button>
        </div>
    `;
}

function selectSize(btn) {
    const sizeBtns = btn.parentElement.querySelectorAll('.size-btn');
    sizeBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function addMenuItemToCart(name, price, type) {
    const size = event.target.previousElementSibling.querySelector('.size-btn.active');
    const selectedSize = size ? size.textContent : 'Mediano';
    
    addToCart({
        id: `${type}-${name}-${selectedSize}`,
        name: name,
        price: price,
        size: selectedSize,
        type: 'drink',
        quantity: 1
    });
    
    showNotification('Producto agregado al carrito', 'success');
}

// ============================================
// CARGAR PRODUCTOS
// ============================================

function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = productsData.map(product => createProductCard(product)).join('');
}

function createProductCard(product) {
    return `
        <div class="product-card">
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <button class="add-to-cart-btn" onclick="addProductToCart(${product.id})">+</button>
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-origin">${product.origin}</div>
                <div class="product-price">$${product.price} MXN</div>
                <div class="product-weight">
                    ${product.weights.map(weight => 
                        `<button class="weight-btn" onclick="selectWeight(this)">${weight}</button>`
                    ).join('')}
                </div>
            </div>
        </div>
    `;
}

function selectWeight(btn) {
    const weightBtns = btn.parentElement.querySelectorAll('.weight-btn');
    weightBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function addProductToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    
    const weightBtn = event.target.closest('.product-card').querySelector('.weight-btn.active');
    const selectedWeight = weightBtn ? weightBtn.textContent : product.weights[0];
    
    addToCart({
        id: `product-${product.id}-${selectedWeight}`,
        name: product.name,
        price: product.price,
        weight: selectedWeight,
        type: 'coffee',
        image: product.image,
        quantity: 1
    });
    
    showNotification('Producto agregado al carrito', 'success');
}

// ============================================
// CARRITO DE COMPRAS
// ============================================

function addToCart(item) {
    const existingItem = cart.find(i => i.id === item.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push(item);
    }
    
    updateCart();
}

function updateCart() {
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Actualizar contadores (tanto móvil como desktop)
    document.getElementById('cartCount').textContent = cartCount;
    document.getElementById('cartCount2').textContent = cartCount;
    
    // Actualizar items del carrito
    const cartItemsContainer = document.getElementById('cartItems');
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <p style="font-size: 3rem; margin-bottom: 1rem;">🛒</p>
                <p>Tu carrito está vacío</p>
            </div>
        `;
    } else {
        cartItemsContainer.innerHTML = cart.map(item => createCartItem(item)).join('');
    }
    
    // Actualizar total
    document.getElementById('cartTotal').textContent = `$${cartTotal.toFixed(2)} MXN`;
}

function createCartItem(item) {
    return `
        <div class="cart-item">
            <div class="cart-item-image">
                ${item.image ? `<img src="${item.image}" alt="${item.name}">` : '☕'}
            </div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                ${item.weight ? `<div class="cart-item-weight">${item.weight}</div>` : ''}
                ${item.size ? `<div class="cart-item-weight">${item.size}</div>` : ''}
                <div class="cart-item-price">$${item.price} MXN</div>
                <div class="cart-item-quantity">
                    <button class="qty-btn" onclick="updateQuantity('${item.id}', -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">🗑️</button>
        </div>
    `;
}

function updateQuantity(itemId, change) {
    const item = cart.find(i => i.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            updateCart();
        }
    }
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCart();
}

function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    const cartOverlay = document.getElementById('cartOverlay');
    
    cartModal.classList.toggle('active');
    cartOverlay.classList.toggle('active');
}

// ============================================
// CHECKOUT
// ============================================

function openCheckout() {
    if (cart.length === 0) {
        showNotification('El carrito está vacío', 'error');
        return;
    }
    
    toggleCart();
    
    const checkoutModal = document.getElementById('checkoutModal');
    const checkoutOverlay = document.getElementById('checkoutOverlay');
    
    checkoutModal.classList.add('active');
    checkoutOverlay.classList.add('active');
    
    updateOrderSummary();
}

function closeCheckout() {
    const checkoutModal = document.getElementById('checkoutModal');
    const checkoutOverlay = document.getElementById('checkoutOverlay');
    
    checkoutModal.classList.remove('active');
    checkoutOverlay.classList.remove('active');
}

function updateOrderSummary() {
    const orderSummaryItems = document.getElementById('orderSummaryItems');
    const orderTotal = document.getElementById('orderTotal');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    orderSummaryItems.innerHTML = cart.map(item => `
        <div class="summary-item">
            <span>${item.name} (${item.weight || item.size}) x${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `).join('');
    
    orderTotal.textContent = `$${total.toFixed(2)} MXN`;
}

function togglePaymentForm(method) {
    const cardForm = document.getElementById('cardPaymentForm');
    const paypalForm = document.getElementById('paypalPaymentForm');
    
    if (method === 'card') {
        cardForm.style.display = 'block';
        paypalForm.style.display = 'none';
    } else {
        cardForm.style.display = 'none';
        paypalForm.style.display = 'block';
    }
}

function confirmOrder() {
    // Validar formulario
    const name = document.getElementById('checkoutName').value;
    const email = document.getElementById('checkoutEmail').value;
    const phone = document.getElementById('checkoutPhone').value;
    const address = document.getElementById('checkoutAddress').value;
    
    if (!name || !email || !phone || !address) {
        showNotification('Por favor completa todos los campos', 'error');
        return;
    }
    
    // Generar número de orden
    const orderNumber = 'CE' + Date.now().toString().slice(-8);
    
    // Enviar confirmación por email
    sendOrderConfirmation(email, orderNumber);
    
    // Mostrar modal de éxito
    closeCheckout();
    showSuccessModal(orderNumber);
    
    // Limpiar carrito
    cart = [];
    updateCart();
}

function showSuccessModal(orderNumber) {
    const successModal = document.getElementById('successModal');
    const successOverlay = document.getElementById('successOverlay');
    const orderNumberElement = document.getElementById('orderNumber');
    
    orderNumberElement.textContent = orderNumber;
    successModal.classList.add('active');
    successOverlay.classList.add('active');
}

function closeSuccess() {
    const successModal = document.getElementById('successModal');
    const successOverlay = document.getElementById('successOverlay');
    
    successModal.classList.remove('active');
    successOverlay.classList.remove('active');
}

// ============================================
// BÚSQUEDA
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
    const query = searchInput.value.trim().toLowerCase();
    
    if (query) {
        showPage('inicio');
        setTimeout(() => {
            const mainSearchInput = document.getElementById('mainSearchInput');
            mainSearchInput.value = query;
            performMainSearch();
        }, 100);
    }
}

function performMainSearch() {
    const searchInput = document.getElementById('mainSearchInput');
    const query = searchInput.value.trim().toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    
    if (!query) {
        resultsContainer.innerHTML = '';
        return;
    }
    
    // Buscar en productos
    const productResults = productsData.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.origin.toLowerCase().includes(query)
    );
    
    // Buscar en menú
    const menuResults = [
        ...menuData.frappes,
        ...menuData.hotCoffee,
        ...menuData.teas
    ].filter(item => item.name.toLowerCase().includes(query));
    
    displaySearchResults(productResults, menuResults);
}

function displaySearchResults(products, menuItems) {
    const resultsContainer = document.getElementById('searchResults');
    
    if (products.length === 0 && menuItems.length === 0) {
        resultsContainer.innerHTML = `
            <div class="search-results">
                <div class="no-results">
                    <p>No se encontraron resultados</p>
                    <p>Intenta con otros términos de búsqueda</p>
                </div>
            </div>
        `;
        return;
    }
    
    let html = '<div class="search-results"><div class="search-results-header"><h3>Resultados de Búsqueda</h3></div><div class="search-results-grid">';
    
    // Agregar productos
    products.forEach(product => {
        html += `
            <div class="search-result-card coffee-card" onclick="showPage('productos')">
                <div class="result-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="result-info">
                    <h4>${product.name}</h4>
                    <p class="result-origin">${product.origin}</p>
                    <p class="result-price">$${product.price} MXN</p>
                    <button class="result-add-btn" onclick="event.stopPropagation(); addProductToCart(${product.id})">
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        `;
    });
    
    // Agregar items del menú
    menuItems.forEach(item => {
        html += `
            <div class="search-result-card drink-card" onclick="showPage('menu')">
                <div class="result-image">☕</div>
                <div class="result-info">
                    <h4>${item.name}</h4>
                    <p class="result-type">Bebida</p>
                    <p class="result-price">$${item.price} MXN</p>
                    <button class="result-add-btn" onclick="event.stopPropagation(); addMenuItemToCart('${item.name}', ${item.price}, 'drink')">
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        `;
    });
    
    html += '</div></div>';
    resultsContainer.innerHTML = html;
}

function filterByCategory(category) {
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const resultsContainer = document.getElementById('searchResults');
    
    if (category === 'all') {
        resultsContainer.innerHTML = '';
        return;
    }
    
    if (category === 'coffee') {
        displaySearchResults(productsData, []);
    } else if (category === 'drinks') {
        const allDrinks = [...menuData.frappes, ...menuData.hotCoffee, ...menuData.teas];
        displaySearchResults([], allDrinks);
    }
}

// ============================================
// CHAT
// ============================================

function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    const chatButton = document.getElementById('chatButton');
    
    chatWindow.classList.toggle('active');
    
    if (chatWindow.classList.contains('active')) {
        chatButton.style.display = 'none';
    } else {
        chatButton.style.display = 'flex';
    }
}

function handleChatEnter(event) {
    if (event.key === 'Enter') {
        sendChatMessage();
    }
}

function sendChatMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();
    
    if (!message) return;
    
    const chatMessages = document.getElementById('chatMessages');
    
    // Agregar mensaje del usuario
    const userMessage = document.createElement('div');
    userMessage.className = 'chat-message sent';
    userMessage.innerHTML = `<p>${message}</p>`;
    chatMessages.appendChild(userMessage);
    
    chatInput.value = '';
    
    // Scroll al final
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Respuesta automática
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.className = 'chat-message received';
        botMessage.innerHTML = '<p>Gracias por tu mensaje. Un miembro de nuestro equipo te responderá pronto.</p>';
        chatMessages.appendChild(botMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
}

// ============================================
// NEWSLETTER Y CONTACTO
// ============================================

function initializeEmailJS() {
    emailjs.init('YOUR_PUBLIC_KEY'); // Reemplazar con tu clave pública de EmailJS
}

function subscribeNewsletter() {
    const emailInput = document.getElementById('newsletterEmail');
    const email = emailInput.value.trim();
    
    if (!email || !isValidEmail(email)) {
        showNotification('Por favor ingresa un correo válido', 'error');
        return;
    }
    
    showNotification('¡Gracias por suscribirte!', 'success');
    emailInput.value = '';
}

function sendContact() {
    const name = document.getElementById('contactName').value;
    const lastName = document.getElementById('contactLastName').value;
    const email = document.getElementById('contactEmail').value;
    const phone = document.getElementById('contactPhone').value;
    const message = document.getElementById('contactMessage').value;
    
    if (!name || !email || !message) {
        showNotification('Por favor completa los campos requeridos', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Por favor ingresa un correo válido', 'error');
        return;
    }
    
    showNotification('¡Mensaje enviado! Te contactaremos pronto.', 'success');
    
    // Limpiar formulario
    document.getElementById('contactName').value = '';
    document.getElementById('contactLastName').value = '';
    document.getElementById('contactEmail').value = '';
    document.getElementById('contactPhone').value = '';
    document.getElementById('contactMessage').value = '';
}

function sendOrderConfirmation(email, orderNumber) {
    // Aquí puedes integrar EmailJS para enviar el correo
    console.log(`Confirmación enviada a ${email} - Orden: ${orderNumber}`);
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ============================================
// CAMBIO DE IDIOMA
// ============================================

function changeLanguage(lang) {
    currentLanguage = lang;
    // Aquí puedes implementar la lógica para cambiar todos los textos
    showNotification(`Idioma cambiado a ${lang === 'es' ? 'Español' : 'English'}`, 'success');
}

// ============================================
// UTILIDADES
// ============================================

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function startPromotionTimer() {
    const timerElement = document.getElementById('promotionTimer');
    if (!timerElement) return;
    
    let hours = 7;
    let minutes = 23;
    let seconds = 45;
    
    setInterval(() => {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }
        if (minutes < 0) {
            minutes = 59;
            hours--;
        }
        if (hours < 0) {
            hours = 23;
            minutes = 59;
            seconds = 59;
        }
        
        timerElement.textContent = `La promoción termina en: ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

// Actualizar fecha de última actualización
const lastUpdateElement = document.getElementById('lastUpdateDate');
if (lastUpdateElement) {
    const today = new Date();
    lastUpdateElement.textContent = today.toLocaleDateString('es-MX');
}
