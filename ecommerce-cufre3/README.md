#Proyecto final Ecommerce-Cufre

##Introduccion
El proyecto está diseñado con un enfoque en la simplicidad y usabilidad. Se busca ofrecer una experiencia de usuario fluida al navegar por productos, agregar artículos al carrito, y gestionar las compras. Además, se utilizó Firebase como backend para la gestión de los productos y la persistencia de datos.

Algunas caracteristicas claves incluyen
-Listado de productos que puede cambiar segun la categoria seleccionada, cargados desde Firebase.
-Carrito de compras interactivo con actualizacion en tiempo real.
-Visualizacion del carrito a traves de un CartWidget visible en todo momento.

##Idea y enfoque
El objetivo principal de este eCommerce es ofrecer una plataforma funcional, sencilla y escalable. El usuario puede agregar productos al carrito desde la página principal y generar una orden con su nombre y apellido y Email. Los datos se gestionan con Firebase, lo que permite la persistencia y escalabilidad futura de la aplicación.

##Extensiones y Dependencias Adicionales
Durante el desarrollo de este proyecto, se incluyeron algunas dependencias adicionales de npm que mejoran la funcionalidad y la presentación del eCommerce, además de las trabajadas en clase.

###fortawesome/react-fontawesome
Se utilizó el paquete @fortawesome/react-fontawesome para integrar íconos, específicamente en el botón de "Agregar al Carrito" y en el CartWidget. Esta decisión se tomó para darle una mejor experiencia visual y usabilidad al usuario. Los íconos proporcionados por FontAwesome son altamente personalizables y aportan una capa profesional a la interfaz gráfica del proyecto.

-Agregar al carrito: El botón para agregar productos al carrito incluye un ícono de carrito de compras, lo que mejora la intuición del usuario al realizar esta acción.
-CartWidget: El ícono del carrito se muestra en la barra de navegación y refleja el número de artículos en el carrito. Esto proporciona una referencia visual clara de la cantidad de productos seleccionados en tiempo real.

### react-toastify

Se utilizó `react-toastify` para agregar notificaciones emergentes (toasts) que brindan retroalimentación inmediata cuando un usuario añade productos al carrito. Esto mejora la experiencia del usuario al hacerle saber que sus acciones fueron exitosas sin necesidad de recargar la página.

- **Notificaciones**: Cuando el usuario agrega un producto al carrito, aparece una notificación de éxito en la esquina inferior derecha.

### SweetAlert2

Se integró `SweetAlert2` para mostrar mensajes de éxito o error de forma visualmente atractiva cuando el usuario finaliza su compra. Esta librería permite mostrar modales estilizados que mejoran la estética y la claridad de los mensajes.

- **Confirmación de compra**: Al generar una orden exitosa, se muestra un modal que confirma la compra con el número de orden.
