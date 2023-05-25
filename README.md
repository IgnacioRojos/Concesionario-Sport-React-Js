# Concesionario Sport 

Esta pagina web es un ecommerce de compra de autos usados y 0km, como se puede observar
hay una lista de 22 autos con sus respectivas descripciones,marca y precio.
La pagina solo tiene el catalago de los autos y en la barra de navegaciones se encuentran
las marcas que tiene el concesionario. Si hacemos click en el titulo de la pagina nos va a enviar al inicio que seria donde se muestran todos los autos. En el caso que se haga click en el carrito(cartWidget) nos enviara al carrito. Cada boton que tiene la barra de navegacion filtra por la marca y muestra los respectivos Autos.
El objetivo de esta pagina es que el cliente se sienta comodo a la hora de comprar un auto, mas adelante se vera de implementar una funcion para que el usuario pueda vender su auto.

##Tecnologias Usadas en el proyecto:

Bootstrap: utilize esta libreria para darle un estilo como colores, fue usada para las tarjetas,botones.

react-dom y react-router-dom: estas tecnologias las use para implementar los enrutamientos
a los diferentes componentes, utilize navlink y link.

firebase: Esta base de datos la use para almacenar los autos con sus atributos y además
fue utilizada para guardar las ventas.

##Componentes:

| Componente | Que Contiene Y Que hace |
| ----------- | ----------- |
| CartWidget | Dentro de cartWidget hay una imagen de un carrito con el numero de items que hay en el componente cart (cantidad de itemes)|
| Cart |Contiene una tarjeta donde se ve el detalle del producto que estamos por comprar, si el usuario no quiere comprarlo puede eliminar ese producto |
|CheckOut|Este componente dentro de el tiene a checkOutFomr,checkOut es el componente que tiene la logica de crear una venta, actualizar el stock y mostrar el id de la venta|
|CheckOutForm|Como se menciono anteriormente este componente se encuentra dentro de checkOut, este componente se caracteriza por tener el formulario que el usuario va a completar con sus datos para su compra. Además este formulario esta sincronizado para que lo que escriba el cliente sea recibido y guardado en los datos de la venta|
|Context|Este componente fue creado para almacenar funciones globales que pueden ser usadas en cualquier componente, entre las funciones se encuentra una que retorna el total de la venta, otra que devuelve la cantidad de items en el carrito,etc...|
|Item|Componente que muestra una tarjeta con pocos datos, incluye un boton que redirecciona al detalle del auto|
|ItemCount|Se creo este componente con la finalidad de crear un contador para ver la cantidad de autos que el usuario quiere comprar|
|itemDetail|Es el componente que muestra una tarjeta con los detalles del vehiculo, desde alli puede seleccionar la cantidad de autos que quiere (este componente tiene a itemCount) al finalizar la tarjeta hay un boton que redirige al cart|
|itemDetailContainer|Este componente se encarga de mostrar el itemDetail de cada uno de los Autos|
|itemContainer|Como lo sugiere el nombre es el contenedor del itemList, en este componente se agrego un mensaje de bienvenida para el usuario|
|itemList| Este componente se encarga de hacer un map a los item para mostrarlos en itemListContainer|
|navbar| Es el componente que tiene los botones que filtran los autos segun su marca|

#A continuación hay un video de muestra de como funciona la pagina web:
![video-muestra-2](https://github.com/IgnacioRojos/preEntrega-2-Rojos/assets/99892732/e0f9b930-05e3-4771-84a1-30181a8f2fcd)



#Captura de pantalla donde se visualiza que se hizo la  compra, se guardo en la base de datos y se actualizo el stock:
hay algunos autos que en el video se muestran con stock cero, ya que se utilizaron para pruebas. El proyecto ya entregado tendra el stock renovado de esos autos.

![muestra-de-compra-2](https://github.com/IgnacioRojos/preEntrega-2-Rojos/assets/99892732/f9cd20fe-bac7-47d3-bde8-4b0ded97ba5b)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instructivo de como instalar el proyecto:

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


