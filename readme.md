

# 🛍️ CLI de Gestión de Productos con Node.js & FakeStore API

## 📘 Descripción

Este repositorio ofrece una aplicación de línea de comandos en Node.js para gestionar productos utilizando la [FakeStore API](https://fakestoreapi.com/). Puedes listar, ver, crear y eliminar productos directamente desde tu terminal, simulando un sistema real de gestión de inventario.

---

## 🚀 Funcionalidades

- **Listar todos los productos:**
   ```bash
   npm run start GET products
   ```
   Obtiene y muestra todos los productos desde la FakeStore API.

- **Ver un producto específico:**
   ```bash
   npm run start GET products/<productId>
   # Example:
   npm run start GET products/15
   ```
   Muestra los detalles de un producto por su ID.

- **Crear un nuevo producto:**
   ```bash
   npm run start POST products <title> <price> <category>
   # Example:
   npm run start POST products "T-Shirt Rex" 300 shirts
   ```
   Agrega un nuevo producto a la FakeStore API con el título, precio y categoría indicados.

- **Eliminar un producto:**
   ```bash
   npm run start DELETE products/<productId>
   # Example:
   npm run start DELETE products/7
   ```
   Elimina un producto por su ID.

---

## ⚙️ ¿Cómo funciona?

El CLI interpreta los argumentos de la terminal usando `process.argv` y llama a la función correspondiente de `fakeStore.js`:

- Utiliza `fetch` para las peticiones HTTP a la FakeStore API.
- Maneja operaciones asíncronas y muestra los resultados en consola.
- Soporta operaciones CRUD (GET, POST, DELETE) para productos.

---

## 🧪 Ejemplos de uso

```bash
# Listar todos los productos
npm run start GET products

# Obtener producto con ID 10
npm run start GET products/10

# Crear un nuevo producto
npm run start POST products "Urban Sneakers" 25000 shoes

# Eliminar producto con ID 5
npm run start DELETE products/5
```

---

## 🧰 Tecnologías

- Node.js v18+
- NPM
- Fetch API
- FakeStore API

---

## 👨‍💻 Autor

- **Nombre:** Sergio Fernández
- **Tecnología:** Node.js
- **Versión:** 1.0.0
- **Fecha de entrega:** Octubre 2025

---

## 🧠 Conceptos Aplicados

- Node.js (ESModules)
- Peticiones HTTP asíncronas (GET, POST, DELETE)
- Programación orientada a consola
- Manejo de argumentos con `process.argv`
- Buenas prácticas de estructura de proyecto
- Fetch API y promesas

---

## 🧪 Ejemplo de Uso

```bash
# Listar todos los productos
npm run start GET products

# Obtener producto con ID 10
npm run start GET products/10

# Crear un nuevo producto
npm run start POST products "Zapatillas Urbanas" 25000 calzado

# Eliminar producto con ID 5
npm run start DELETE products/5
```

---

## 🧰 Tecnologías Utilizadas

- Node.js v18+
- NPM como gestor de dependencias
- Fetch API
- FakeStore API ([https://fakestoreapi.com/](https://fakestoreapi.com/))

---

## 🧾 Conclusión

> “Este desafío no solo mide tus habilidades técnicas, sino también tu capacidad para organizarte, resolver problemas y crear soluciones escalables. Si logras superar este reto, estaremos más que seguros de que estás listo para unirte a TechLab.”  
> — Matías

> “Este será el corazón de tu proyecto. Queremos un entorno limpio y profesional, como si estuvieras trabajando en un proyecto real.”  
> — Sabrina

---

## 👨‍💻 Autor

- **Nombre:** Sergio Fernández
- **Tecnología:** Node.js
- **Versión del Proyecto:** 1.0.0
- **Fecha de entrega:** Octubre 2025
