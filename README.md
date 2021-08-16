# Venturing Prueba técnica
Una app de películas

### ¿ Cómo descargar el repositorio y correr el proyecto localmente ? 
* **Paso 1:** Instalar la versión más reciente de [NodeJs](https://nodejs.org/es/).
* **Paso 2:** Tener instalado el gestor de base de datos MySQL.
        NOTA: en caso de problemas de autenticación en la conexión entre el backend y la base de datos ingrese [aqui](https://www.digitalocean.com/community/tutorials/como-instalar-mysql-en-ubuntu-18-04-es) y siga el paso 3 
* **Paso 3:** Clonar este repositorio usando <code>git clone https://github.com/CardozoCasariegoLuciano/Venturing_Prueba_tecnica.git</code>.
* **Paso 4:** Moverse hacia la carpeta del proyecto y tanto en la carpeta backend como frontend ejecutar <code>npm install</code> para instalar dependencias.
*  **Paso 5:**  Crear la base de datos y la tabla correspondiente tal como indica el archivo 
backend > database > db_creation.sql
*  **Paso 6:**  en el archivo backend > config.json ingresar en los campos "user" y "password" su usuario y contraseña para conectarse a la base de datos
* **Paso 7:** dentro de la carpeta backend ejecute <code>node index.js</code>.
* **Paso 8:** dentro de la carpeta frontend ejecute <code>npm start</code> o <code>yarn start</code> e ingresar a http://localhost:3000/ (si es que no se abrió la página automáticamente).
___
