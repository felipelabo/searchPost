# SearchPost

Es una aplicacion para las busqueda de post utilizando etiquetas. 

El usuario dispone de una barra de busqueda, la cual nos permite ingresar un tag para buscar publicaciones que correspondan con el mismo. La aplicacion nos dara los resultados dependiendo del tag suministrado.

**¡Importante!**
 Todos los componentes utilizados para el desarrollo de la aplicacion estan comentados a detalle.

## Herramientas Utilizadas
  - HTML y CSS
  - ReactJs
  - PropTypes
  - API Fetch
  - Bootstrap

## Componentes React
  - index.js
  - App.js
  - Tags.js
  - Api.js
  - Post.js
## 1. index.js

Este archivo ejecuta el renderizado de la aplicacion en el archivo public index.html

## 2. App.js

Este es el componente principal de la aplicacion. Este se encarga de renderizar los componentes Tags.js y Api.js. Tambien es el que recibe la informacion sumistrada por el componente Tags.js y enviada al componente Api.js.

| this.state | caracteristica |
| ------ | ------ |
|tag|Almacena informacion entregada por el usuario|

| Métodos | caracteristicas |
| ------ | ------ |
|getTag()|Realiza el cambio de estado al recibir informacion del componente Tags.js|  
## 3. Tags.js

Este componente tiene como funcion principal adquirir informacion ingresada por el usuario.

| this.props | caracteristica |
| ------ | ------ |
|onChange|Función pasa informacion al componente App.js|

| this.state | caracteristica |
| ------ | ------ |
|tagName|Almacena informacion entregada por el usuario|

| Métodos | caracteristicas |
| ------ | ------ |
|handleChange()|Maneja el evento de cambios en la entrada del formulario| 
|handleSubmit()|Maneja el evento submit en el formulario|

## 4. Api.js

Este componente se encarga de la comunicacion con el API y el renderizado según su respuesta de la misma.

| this.props | caracteristica |
| ------ | ------ |
|tagName|Almacena informacion entregada por el usuario|

| this.state | caracteristica |
| ------ | ------ |
|response|Almacena el objeto recibido por el API|
|loading|Indica en que estado se encuentra la solicitud del Request|
|error|Indica el estado del error del Request|

| Métodos | caracteristicas |
| ------ | ------ |
|fetchGet()|Ejecuta la solicitud al API segun la informacion recibida por el usuario| 

## 5. Post

Este componente recibe los datos adquiridos por el API y renderiza un post

| this.props | caracteristica |
| ------ | ------ |
|owner|Objeto que contiene la informacion del usuario|
|image|Direccion url de la imagen principal del Post|
|message|Mensaje que acompaña la publicacion del Post|
|tags|Vector que contiene todos los tags que poseé el Post|

| Métodos | caracteristicas |
| ------ | ------ |
|handleClick()|Maneja el evento del cambio de color en el "Me Gusta"| 

**Desarrollado por:**
Felipe Laboren: felipelaboren93@gmail.com