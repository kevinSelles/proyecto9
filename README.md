# Proyecto9: Scraper Kelme API

Este proyecto es una API REST hecha con Node.js, Express y MongoDB Atlas.  
El objetivo es scrapear productos (fotos, nombre y precio) de la web de **Kelme**, guardarlos en un archivo JSON.
Aunque no entra en los requisitos del proyecto, para practicar también lo he configurado para que desde el JSON se
suban los datos a la base de datos en MongoDB y luego se puedan consultar mediante un GET.

## Tecnologías

- Node.js  
- Express  
- MongoDB Atlas  
- Mongoose  
- Puppeteer (para scraping)  
- dotenv  

## Endpoints de Shoes

| Método | Ruta        | Descripción |
|--------|-------------|-------------|
| GET    | /shoes      | Devuelve todos los zapatos guardados en la base de datos |
| POST   | /shoes/upload | Ejecuta el scraper y guarda los productos en MongoDB |

## Flujo del proyecto

1. El scraper obtiene de la web de Kelme:
   - Nombre de producto  
   - Precio  
   - Imagen  

2. La información se guarda en un archivo **JSON**.  

3. El endpoint `POST /shoes/upload` inserta estos datos en **MongoDB Atlas**.  

4. El endpoint `GET /shoes` permite consultar todos los zapatos almacenados.  

## Nota
 
- Los datos scrapeados (nombre, precio e imagen) son únicamente de ejemplo académico y no tienen fines comerciales.
