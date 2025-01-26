# **Mi Tienda - React JS**

Este proyecto es una aplicación web desarrollada con **React** y **Vite** que simula una tienda en línea. Permite navegar entre distintas vistas, agregar productos al carrito de compras, filtrar productos por categoría y acceder a los detalles de cada artículo.

## **Características principales**
### **Barra de navegación (NavBar)**
- Enlaces dinámicos para navegar entre las secciones principales de la tienda.
  - *Inicio*: Muestra el catálogo completo de productos.
  - *Categorías*: Filtra productos por categorías (Televisores, Relojes, Auriculares, Celulares, Laptops).
  - *Detalle de productos*: Muestra información detallada de cada producto.
- Implementada con `react-router-dom` para una navegación fluida entre páginas.

### **Contenedor de productos (ItemListContainer)**
- Muestra un listado de productos dinámico obtenido desde una API simulada.
- Funcionalidades:
  - Filtrar productos por categorías utilizando parámetros de URL.
  - Renderización optimizada con `Array.map()` y uso adecuado de la prop `key`.

### **Detalle de productos (ItemDetailContainer)**
- Muestra la información detallada de un producto seleccionado.
- Implementación de `useParams` de `react-router-dom` para capturar el ID del producto desde la URL.
- Cuenta con un contador para agregar productos al carrito (funcionalidad en desarrollo).

### **Carrito de compras (CartWidget)**
- Visualización del carrito de compras en la barra de navegación.
- Incluye un ícono con un contador que refleja el número de productos (por ahora, es un placeholder estático).

## **Tecnologías utilizadas**
- **React**: Framework principal para el desarrollo de la interfaz de usuario.
- **Vite**: Herramienta moderna y rápida para el desarrollo de aplicaciones React.
- **React Router DOM**: Manejo de rutas dinámicas y navegación entre vistas.
- **Bootstrap**: Biblioteca de estilos y componentes reutilizables para una interfaz atractiva.



## **Contacto**
Desarrollado por [MaxGonzalezRoy](https://github.com/MaxGonzalezRoy).
Proyecto (https://github.com/MaxGonzalezRoy/React_JS.git).
Último commit: `"ProyectoFinal+GonzalezRoy"`



Saludos,  
**Maximiliano Gonzalez Roy**