# Mini App del Clima con Favoritos

Inicializa Node:

    npm init -y

Instala dependencias principales:

    npm install express mongoose dotenv cors axios

Explicación:

    express: framework para manejar rutas del backend.

    mongoose: para hablar con MongoDB.

    dotenv: manejar variables de entorno (API keys, URL BD).

    cors: permitir que tu frontend (otra URL) hable con tu backend.

    axios: para hacer requests HTTP (a la API del clima).

Estructura de Archivos

    clima-app/
    │── backend/
    │   │── index.js        # servidor principal
    │   │── models/
    │   │   └── Ciudad.js   # modelo para Mongo
    │── frontend/
    │   │── index.html
    │   │── style.css
    │   │── script.js
    │── .env
