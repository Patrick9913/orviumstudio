# Paleta de Colores OrviumStudio

## 🎨 Descripción General

La paleta de colores de OrviumStudio está basada en los tonos del logo principal, creando una identidad visual coherente y profesional. La paleta se centra en tonos cyan/azul como color principal, complementados con grises neutros y colores de acento.

## 🎯 Colores Principales

### Cyan (Color Principal)
- **`--orvium-primary`**: `#06b6d4` (cyan-500) - Color principal del logo
- **`--orvium-primary-dark`**: `#0891b2` (cyan-600) - Versión más oscura
- **`--orvium-primary-light`**: `#67e8f9` (cyan-300) - Versión más clara
- **`--orvium-primary-50`**: `#ecfeff` (cyan-50) - Versión muy clara

### Acento (Sky Blue)
- **`--orvium-accent`**: `#0ea5e9` (sky-500) - Color de acento complementario
- **`--orvium-accent-dark`**: `#0284c7` (sky-600) - Versión más oscura
- **`--orvium-accent-light`**: `#7dd3fc` (sky-300) - Versión más clara

## 🖤 Colores Neutros

### Grises
- **`--orvium-gray-900`**: `#111827` (gray-900) - Texto principal
- **`--orvium-gray-800`**: `#1f2937` (gray-800) - Texto secundario
- **`--orvium-gray-700`**: `#374151` (gray-700) - Texto terciario
- **`--orvium-gray-600`**: `#4b5563` (gray-600) - Texto deshabilitado
- **`--orvium-gray-500`**: `#6b7280` (gray-500) - Bordes
- **`--orvium-gray-400`**: `#9ca3af` (gray-400) - Bordes suaves
- **`--orvium-gray-300`**: `#d1d5db` (gray-300) - Bordes muy suaves
- **`--orvium-gray-200`**: `#e5e7eb` (gray-200) - Fondos suaves
- **`--orvium-gray-100`**: `#f3f4f6` (gray-100) - Fondos muy suaves
- **`--orvium-gray-50`**: `#f9fafb` (gray-50) - Fondos principales

## 🚦 Colores de Estado

- **`--orvium-success`**: `#10b981` (emerald-500) - Éxito/Confirmación
- **`--orvium-warning`**: `#f59e0b` (amber-500) - Advertencia/Importante
- **`--orvium-error`**: `#ef4444` (red-500) - Error/Peligro

## 🌈 Gradientes

- **`--orvium-gradient-primary`**: Gradiente de cyan a sky blue
- **`--orvium-gradient-neutral`**: Gradiente de grises suaves
- **`--orvium-gradient-dark`**: Gradiente de grises oscuros

## 📝 Uso en Componentes

### Logo
- **Icono**: `text-orvium-primary`
- **"Studio"**: `text-orvium-primary`
- **"Orvium"**: Hereda del className padre

### Cards de Servicios
- **Desarrollo Web**: `from-orvium-primary-50 to-orvium-primary-light`
- **Aplicaciones Web**: `from-orvium-accent-light to-orvium-accent`
- **E-commerce**: `from-orvium-success/10 to-orvium-success/20`
- **Diseño UI/UX**: `from-orvium-warning/10 to-orvium-warning/20`
- **Consultoría Web**: `from-orvium-gray-50 to-orvium-gray-100`
- **Mantenimiento**: `from-orvium-primary-50 to-orvium-primary-light`

### Cards de Templates
- **Profesional**: `from-orvium-primary-50 to-orvium-primary-light`
- **E-commerce**: `from-orvium-warning/10 to-orvium-warning/20`
- **Consultoría**: `from-orvium-success/10 to-orvium-success/20`
- **Corporativo**: `from-orvium-gray-50 to-orvium-gray-100`
- **Portfolio**: `from-orvium-warning/10 to-orvium-warning/20`
- **Blog**: `from-orvium-success/10 to-orvium-success/20`
- **Restaurante**: `from-orvium-warning/10 to-orvium-warning/20`
- **SaaS**: `from-orvium-primary-50 to-orvium-primary-light`

### Cards de FAQ
- **Precios y Costos**: `from-orvium-success/10 to-orvium-success/20`
- **Tiempo y Proceso**: `from-orvium-primary-50 to-orvium-primary-light`
- **Tecnología y Seguridad**: `from-orvium-accent-light to-orvium-accent`
- **SEO y Marketing**: `from-orvium-warning/10 to-orvium-warning/20`

## 🎨 Clases CSS Disponibles

### Texto
```css
.text-orvium-primary
.text-orvium-primary-dark
.text-orvium-primary-light
.text-orvium-gray-900
.text-orvium-gray-800
.text-orvium-gray-700
```

### Fondo
```css
.bg-orvium-primary
.bg-orvium-primary-dark
.bg-orvium-primary-light
.bg-orvium-primary-50
.bg-orvium-gradient-primary
.bg-orvium-gradient-neutral
.bg-orvium-gradient-dark
```

### Bordes
```css
.border-orvium-primary
.border-orvium-primary-light
```

## 🔧 Implementación

La paleta se implementa mediante variables CSS en `src/app/globals.css` y se puede usar en cualquier componente React con las clases utilitarias de Tailwind CSS o directamente con las variables CSS.

## 📱 Responsive y Accesibilidad

Todos los colores de la paleta cumplen con los estándares de contraste WCAG 2.1 AA para garantizar la accesibilidad en todos los dispositivos y tamaños de pantalla.
