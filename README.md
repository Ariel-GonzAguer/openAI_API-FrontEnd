# Proyecto OpenAI API Fullstack

Este proyecto es una aplicación fullstack que permite enviar texto desde un frontend en React a un backend en Node.js/Express, el cual utiliza la API de OpenAI para generar texto de respuesta.

## Estructura del proyecto

- `src/` — Código del frontend en React (Vite).
- `api/` — Lógica de backend y servicios para OpenAI.
- `server.js` — Servidor Express que expone la API.

## Instalación

1. Clona el repositorio y entra a la carpeta del proyecto.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Crea un archivo `.env` en la raíz con tu clave de OpenAI:
   ```env
   OPENAI_API_KEY=tu_clave_aqui
   ```

## Uso

## Desarrollo

Para desarrollo local, ejecuta:
```bash
npm run dev
```
Esto levantará tanto el frontend (Vite) como el backend (Express) en paralelo usando `concurrently`.

- El backend escuchará en `http://localhost:3001`.
- El frontend estará en `http://localhost:5173` (por defecto).

El frontend envía peticiones POST a `/api/generate` con el texto a procesar. El backend responde con el texto generado por OpenAI.

## Notas

- El proxy en `vite.config.ts` permite que el frontend acceda al backend sin problemas de CORS.
- Puedes modificar el modelo o la lógica de generación en `api/openAI_Service.js`.

## Despliegue

Para producción, puedes desplegar el backend y frontend en servicios como Vercel, Netlify, o tu propio servidor.

---
Hecho con ❤️ usando React, Express y OpenAI.
