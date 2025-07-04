# 🚗 Concesionario Sport - React JS

🌐 **Demo en producción:** [Ver la aplicación aquí](https://fantastic-kitten-2748bf.netlify.app/)


**Concesionario Sport** es una aplicación **e-commerce** para la compra de autos nuevos y usados, desarrollada con **React JS** y conectada a **Firebase** para la gestión del stock y las ventas.

Permite visualizar un catálogo de vehículos, filtrar por marcas, consultar stock disponible y realizar compras de forma simple e intuitiva.

---

## 🌟 Características principales

✅ Visualización de **22 autos** con sus descripciones, marcas y precios.  
✅ Filtrado por **marca** a través de la barra de navegación.  
✅ Detalle de cada vehículo con imágenes y características.  
✅ **Carrito de compras** con control de cantidad de unidades.  
✅ Generación de **ventas en Firebase** y actualización automática de stock.  
✅ Preparado para implementar una funcionalidad de “Venta de auto por parte del usuario” en futuras versiones.  

---

## 🛠️ Tecnologías utilizadas

- **React JS** (react, react-dom, react-router-dom)
- **Bootstrap** (para estilos, tarjetas y botones)
- **Firebase** (Realtime Database para stock y ventas)
- **JavaScript (ES6+)**
- **CSS3**
- **Git y GitHub**

---

## 📂 Estructura de componentes

| **Componente** | **Descripción** |
| --- | --- |
| `CartWidget` | Ícono de carrito con contador de ítems |
| `Cart` | Vista del carrito con productos y opción de eliminar |
| `CheckOut` | Lógica de crear venta, actualizar stock y mostrar ID |
| `CheckOutForm` | Formulario de datos del cliente vinculado a la venta |
| `Context` | Funciones globales (total de venta, cantidad de ítems, etc.) |
| `Item` | Tarjeta con datos resumidos y botón de detalles |
| `ItemCount` | Selector de cantidad de unidades para compra |
| `ItemDetail` | Vista detallada del vehículo seleccionado |
| `ItemDetailContainer` | Renderiza `ItemDetail` según selección |
| `ItemList` | Mapeo de autos a mostrar |
| `ItemListContainer` | Contenedor con mensaje de bienvenida |
| `Navbar` | Barra de navegación con filtros por marca |

---

## 🎥 Demo en funcionamiento

A continuación, un video mostrando cómo funciona la página web:

![video-muestra-2](https://github.com/IgnacioRojos/preEntrega-2-Rojos/assets/99892732/e0f9b930-05e3-4771-84a1-30181a8f2fcd)

---

## 🖼️ Captura de compra y actualización de stock

Aquí puedes ver cómo se genera una compra y se actualiza automáticamente el stock en Firebase. Algunos autos aparecen con stock cero ya que fueron utilizados para pruebas.

![muestra-de-compra-2](https://github.com/IgnacioRojos/preEntrega-2-Rojos/assets/99892732/f9cd20fe-bac7-47d3-bde8-4b0ded97ba5b)

---

## 🚀 Instalación y ejecución local

1️⃣ **Clonar el repositorio:**

git clone https://github.com/IgnacioRojos/Concesionario-Sport-React-Js.git

2️⃣ **Instalar dependencias:**

npm install


3️⃣ **Ejecutar la aplicación en modo desarrollo:**

npm start


La aplicación se abrirá automáticamente en [http://localhost:3000](http://localhost:3000).

🌐 También puedes ver la aplicación en producción aquí:
**https://fantastic-kitten-2748bf.netlify.app/**

---

## 📈 Estado del proyecto

✅ Proyecto completado como práctica de React y simulación de un e-commerce de autos.  
🚀 Próximas mejoras:
- Responsividad total en dispositivos móviles.
- Implementar pasarela de pagos simulada.
- Permitir a los usuarios publicar sus propios vehículos en venta.

---

## 📫 Contacto

✉️ [nachorojos99@gmail.com](mailto:nachorojos99@gmail.com)  
🌐 [LinkedIn](https://www.linkedin.com/in/ignaciorojos)  
💻 [GitHub](https://github.com/IgnacioRojos)

---

¡Gracias por visitar este repositorio! Si te interesa colaborar o tienes sugerencias, no dudes en contactarme.


