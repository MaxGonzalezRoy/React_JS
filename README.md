# **Mi Tienda**

Este proyecto es una aplicación web desarrollada con React+Vite que simula una tienda en línea. Incluye navegación entre vistas, un saludo de bienvenida, un carrito de compras y funcionalidades de detalle de productos.

## **Características**
### **Barra de navegación "NavBar"**
- Incluye enlaces dinámicos para navegar entre las principales secciones de la tienda:
  - *Inicio* (catálogo completo de productos).
  - Categorías específicas como *Electrónica* o *Libros*.
  - *Detalle de productos* para acceder a información individual.
- Implementada con `react-router-dom` para una experiencia de navegación fluida.

### **Contenedor de productos "ItemListContainer"**
- Muestra un listado de productos dinámico obtenido desde una API simulada.
- Funcionalidades:
  - Filtrar productos por categorías utilizando parámetros de URL.
  - Renderización optimizada con el método `Array.map()` y uso correcto de la prop `key`.

### **Detalle de productos "ItemDetailContainer"**
- Muestra información detallada de un producto seleccionado.
- Implementa `useParams` de `react-router-dom` para capturar el ID del producto desde la URL.
- Integra un contador para agregar productos al carrito (funcionalidad futura).

### **Carrito de compras "CartWidget"**
- Visualización del carrito de compras en la barra de navegación.
- Incluye un ícono y un contador que refleja el número de productos (placeholder estático actualmente).

## **Tecnologías utilizadas**
- **React**: Framework principal para la creación de la interfaz de usuario.
- **Vite**: Herramienta para un desarrollo rápido y eficiente.
- **React Router DOM**: Manejo de rutas dinámicas.
- **Bootstrap**: Estilos y componentes reutilizables.
- **API Simulada**: Uso de `dummyjson.com` para obtener productos y categorías.

## **Requisitos de Preentrega**
- Implementación de rutas dinámicas con `react-router-dom`:
  - `/` - Muestra el catálogo completo de productos.
  - `/category/:categoryId` - Filtra productos por categoría.
  - `/product/:productId` - Muestra el detalle de un producto.
  - `*` - Muestra una página de error para rutas no definidas.
- Manejo de datos:
  - Consumo de una API con `fetch` y manejo de promesas.
  - Renderizado condicional y manejo de errores.
- Componentes:
  - División entre **contenedores** (manejo de estado) y **presentación** (estructura visual).

## **Contacto**
Desarrollado por [MaxGonzalezRoy](https://github.com/MaxGonzalezRoy).
Proyecto (https://github.com/MaxGonzalezRoy/React_JS.git).
Último commit: `"NavegaLasRutas+Gonzalez"`

Saludos,  
**Maximiliano Gonzalez Roy**
