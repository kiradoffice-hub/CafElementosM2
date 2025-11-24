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
    renderStoreProducts();
    renderMenuItems();
    showPage('bienvenido');
    updateCartCount();
}

// ============================================
// NAVEGACIÓN DE PÁGINAS
// ============================================
function showPage(pageName) {
    const pages = ['bienvenido', 'inicio', 'menu', 'tienda', 'productos', 'nosotros'];
    
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
// RENDERIZADO DE PRODUCTOS (CAFÉ)
// ============================================
function createProductCard(product, containerId) {
    const selectedWeight = selectedWeights[product.id] || '1/4';
    const currentPrice = product.prices[selectedWeight];
    
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-badge">Nuevo</div>
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\\'font-size:4rem;display:flex;align-items:center;justify-content:center;height:100%\\'>☕</div>'">
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})" title="Agregar al carrito">+</button>
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

function renderStoreProducts() {
    const container = document.getElementById('storeProductsGrid');
    if (container) {
        container.innerHTML = products.map(product => createProductCard(product, 'tienda')).join('');
        document.getElementById('totalProducts').textContent = products.length;
    }
}

// ============================================
// RENDERIZADO DE MENÚ (BEBIDAS)
// ============================================
function createMenuItem(item) {
    const hasMultipleSizes = item.prices && typeof item.prices === 'object';
    const selectedSize = selectedMenuSizes[item.id];
    const currentPrice = hasMultipleSizes ? item.prices[selectedSize] : item.price;
    
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
                + Agregar al carrito
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
    showNotification(`${product.name} (${weight}) agregado al carrito`, 'success');
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
    showNotification(`${item.name} (${sizeText}) agregado al carrito`, 'success');
}

function removeFromCart(index) {
    const item = cart[index];
    cart.splice(index, 1);
    updateCart();
    showNotification(`${item.name} eliminado del carrito`, 'success');
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
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <p style="font-size: 3rem; margin-bottom: 1rem;">🛒</p>
                <p>Tu carrito está vacío</p>
                <p style="font-size: 0.85rem; margin-top: 0.5rem;">¡Agrega algunos productos deliciosos!</p>
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
        showNotification('Por favor completa todos los campos', 'error');
        return;
    }
    
    if (!validateEmail(email)) {
        showNotification('Por favor ingresa un correo válido', 'error');
        return;
    }
    
    // Validaciones específicas según método de pago
    if (paymentMethod === 'card') {
        const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
        const cardExpiry = document.getElementById('cardExpiry').value;
        const cardCVV = document.getElementById('cardCVV').value;
        const cardName = document.getElementById('cardName').value.trim();
        
        if (!cardNumber || !cardExpiry || !cardCVV || !cardName) {
            showNotification('Por favor completa los datos de la tarjeta', 'error');
            return;
        }
        
        if (cardNumber.length < 13) {
            showNotification('Número de tarjeta inválido', 'error');
            return;
        }
        
        if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) {
            showNotification('Formato de fecha inválido (MM/AA)', 'error');
            return;
        }
        
        if (cardCVV.length < 3) {
            showNotification('CVV inválido', 'error');
            return;
        }
    } else if (paymentMethod === 'paypal') {
        const paypalEmail = document.getElementById('paypalEmail').value.trim();
        
        if (!paypalEmail) {
            showNotification('Por favor ingresa tu correo de PayPal', 'error');
            return;
        }
        
        if (!validateEmail(paypalEmail)) {
            showNotification('Por favor ingresa un correo de PayPal válido', 'error');
            return;
        }
    }
    
    // Deshabilitar botón mientras procesa
    const confirmBtn = document.querySelector('.confirm-btn');
    const originalText = confirmBtn.textContent;
    confirmBtn.disabled = true;
    confirmBtn.innerHTML = '<span class="loading-spinner"></span>Procesando...';
    
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
     CONFIRMACIÓN DE PEDIDO - CAFÉ ELEMENTOS
╚══════════════════════════════════════════╝

Número de Orden: ${orderNumber}
Fecha: ${new Date().toLocaleDateString('es-MX', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
})}

──────────────────────────────────────────
DATOS DEL CLIENTE
──────────────────────────────────────────
Nombre: ${name}
Email: ${email}
Teléfono: ${phone}
Dirección: ${address}
Ciudad: ${city}
Código Postal: ${postal}

──────────────────────────────────────────
PRODUCTOS ORDENADOS
──────────────────────────────────────────
${itemsList}

──────────────────────────────────────────
                    TOTAL: $${total.toFixed(2)} MXN
──────────────────────────────────────────

INFORMACIÓN DE PAGO
──────────────────────────────────────────
Método: ${paymentMethod === 'card' ? 'Tarjeta de Crédito/Débito' : 'PayPal'}
${paymentInfo}
Estado: ✓ PAGADO

╔══════════════════════════════════════════╗

¡Gracias por tu compra!

Tu pedido será procesado y enviado en las próximas 24-48 horas.
Te enviaremos un correo con el número de seguimiento cuando tu pedido sea enviado.

Para cualquier duda, contáctanos:
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
            paymentMethodText.textContent = 'Tu pago ha sido procesado con PayPal. Hemos enviado la confirmación y el ticket a tu correo electrónico.';
        } else {
            paymentMethodText.textContent = 'Hemos enviado la confirmación y el ticket a tu correo electrónico.';
        }
        
        const successModal = document.getElementById('successModal');
        const successOverlay = document.getElementById('successOverlay');
        successModal.classList.add('active');
        successOverlay.classList.add('active');
        
        // Limpiar carrito y formulario
        cart = [];
        updateCart();
        document.getElementById('checkoutForm').reset();
        
    } catch (error) {
        console.error('Error enviando email:', error);
        showNotification('Error al procesar el pedido. Intenta de nuevo.', 'error');
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
            const container = document.getElementById('storeProductsGrid');
            const criteria = e.target.value;
            let sorted = products;
            
            if (criteria.includes('Menor')) {
                sorted = sortProducts('price-asc');
            } else if (criteria.includes('Mayor')) {
                sorted = sortProducts('price-desc');
            } else if (criteria.includes('A-Z')) {
                sorted = sortProducts('name');
            }
            
            container.innerHTML = sorted.map(product => createProductCard(product, 'tienda')).join('');
        });
    }
});