# ☕ Café Elementos

![Café Elementos](https://img.shields.io/badge/Café-Elementos-orange?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📖 Descripción

**Café Elementos** es un sitio web de e-commerce para una cafetería ubicada en Villahermosa, Tabasco, México. Este proyecto es una simulación completa de una tienda en línea de café de especialidad con carrito de compras funcional, menú de bebidas y múltiples métodos de pago con confirmación por correo electrónico.

## ✨ Características

- 🛒 **Carrito de compras funcional** - Agregar, eliminar y modificar productos
- 📧 **Confirmación por email** - Envío automático de tickets de compra via EmailJS
- 💳 **Múltiples métodos de pago** - Tarjeta de crédito/débito y PayPal (simulación)
- ☕ **Menú de bebidas completo** - Frappes, bebidas calientes y tés
- 🛍️ **Tienda de café** - Café de especialidad de diferentes orígenes
- 💬 **Chat en vivo** - Sistema de chat integrado para atención al cliente
- 📱 **Diseño responsivo** - Adaptable a todos los dispositivos
- 🎨 **UI/UX moderno** - Interfaz limpia y profesional
- 📍 **Mapa integrado** - Ubicación de la tienda con Google Maps
- 📰 **Newsletter** - Suscripción a boletín informativo

## 🚀 Demo

[Ver Demo en Vivo](https://tu-usuario.github.io/cafe-elementos)

## 📁 Estructura del Proyecto

```
cafe-elementos/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos del sitio
├── js/
│   └── main.js         # Lógica JavaScript
├── assets/
│   └── images/         # Imágenes del proyecto
├── README.md           # Documentación
├── LICENSE             # Licencia MIT
└── .gitignore          # Archivos ignorados
```

## 🛠️ Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/kiradoffice-hub/CafeElementos.git
   ```

2. **Navega al directorio**
   ```bash
   cd CafeElementos
   ```

3. **Abre en el navegador**
   ```bash
   # Opción 1: Abrir directamente
   open index.html
   
   # Opción 2: Usar Live Server (VS Code)
   # Instala la extensión Live Server y haz clic en "Go Live"
   ```

## ⚙️ Configuración de EmailJS

Para que funcione el envío de correos, configura EmailJS:

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Crea un servicio de email (Gmail, Outlook, etc.)
3. Crea una plantilla de email
4. Actualiza las credenciales en `js/main.js`:
   ```javascript
   const EMAILJS_SERVICE_ID = 'tu_service_id';
   const EMAILJS_TEMPLATE_ID = 'tu_template_id';
   const EMAILJS_PUBLIC_KEY = 'tu_public_key';
   ```

### 📧 Plantilla de Email (EmailJS)

Usa esta plantilla en tu cuenta de EmailJS:

```
Asunto: Confirmación de Pedido #{{order_number}} - Café Elementos

{{email_body}}
```

Variables disponibles:
- `{{to_email}}` - Email del cliente
- `{{to_name}}` - Nombre del cliente
- `{{order_number}}` - Número de orden
- `{{email_body}}` - Contenido completo del ticket

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Verde Lima | `#C0FC4F` | Botones principales, acentos |
| Naranja | `#F59026` | Logo, precios, hover effects |
| Negro | `#000000` | Textos, fondos oscuros |
| Blanco | `#FFFFFF` | Fondos claros |

## 📱 Páginas

1. **Bienvenido** - Página de landing inicial
2. **Inicio** - Hero, galería, about y contacto
3. **Menú** - Bebidas frías y calientes con sistema de pedidos
4. **Tienda** - Catálogo completo de café con filtros
5. **Productos** - Vista de productos destacados
6. **Más** - Información adicional y contacto

## 🍹 Menú de Bebidas

### Frappes (Bebidas Frías)
- Frapuccino - $75.00
- Cajeta - $75.00
- Oreo - $75.00
- Moca - $75.00

### Bebidas Calientes
**A base de café y chocolate:**
- Espresso - $45/$48
- Latte - $68/$72
- Espresso cortado - $48
- Capuchino - $65
- Americano - $48
- Moca - $68/$72
- Latte caramelo - $72
- Choco-latte - $68/$72
- Chocolatada - $68/$72

**Tés Calientes:**
- Té Negro (Earl Grey) - $68/$72
- Té Negro Chai - $68/$72
- Té Verde Flamingo Limonada - $68/$72
- Matcha - $68/$72
- Variedad de Tisanas - $68/$72

## 💳 Métodos de Pago

El sistema soporta dos métodos de pago (simulación):

1. **Tarjeta de Crédito/Débito**
   - Validación de número de tarjeta
   - Fecha de vencimiento (MM/AA)
   - CVV
   - Nombre del titular

2. **PayPal**
   - Correo electrónico de PayPal
   - Simulación de pago seguro

Ambos métodos envían confirmación por correo electrónico con:
- Número de orden único
- Detalles del pedido
- Información de pago
- Datos de contacto y envío

## 🛒 Funcionalidades del Carrito

- ➕ Agregar productos de café (diferentes pesos: 1/4kg, 1/2kg, 1kg)
- ➕ Agregar bebidas del menú (diferentes tamaños cuando aplique)
- 🔢 Modificar cantidades
- ❌ Eliminar productos
- 💰 Cálculo automático de totales
- 📦 Resumen completo antes del pago

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Haz fork del repositorio
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

**Café Elementos**
- 📍 Av Paseo Tabasco 1124, Jesus Garcia, 86040 Villahermosa, Tab.
- 📞 993 426 3253
- 📧 cafelementos@gmail.com

## 🆕 Actualizaciones Recientes (v2.0)

### Nuevas Funcionalidades:
- ✅ Menú completo de bebidas (frappes, café caliente, tés)
- ✅ Sistema de pago con PayPal
- ✅ Confirmación por email para ambos métodos de pago
- ✅ Carrito unificado para café y bebidas
- ✅ Selección de tamaños para bebidas
- ✅ Mejoras en el sistema de navegación

---

⭐ Si te gustó este proyecto, ¡dale una estrella!

Hecho con ❤️ y ☕ en Villahermosa, Tabasco