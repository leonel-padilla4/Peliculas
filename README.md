# 🎬 Peliculas — Plataforma Web de Gestión de Contenido Cinematográfico

Aplicación web construida con React y TypeScript que permite buscar películas populares, ver su información y guardarlas como favoritas con persistencia local.

## 🚀 Funcionalidades

- Listado de películas populares consumidas desde una API externa
- Búsqueda de películas por nombre
- Guardado de películas como favoritas
- Persistencia de favoritos en el navegador (LocalStorage), aunque se cierre o recargue la página
- Navegación entre páginas (Inicio / Favoritos) con React Router

## 🛠️ Tecnologías utilizadas

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **React Router DOM**
- **Context API** (manejo global del estado de favoritos)
- **TMDB API** (The Movie Database) — fuente de datos de películas

## 📂 Estructura del proyecto

```
src/
├── Components/       # Navbar, MovieCard
├── context/          # MovieContext (estado global de favoritos)
├── interfaces/        # Tipado de datos (Movie)
├── pages/            # Home, Favorites
├── services/          # Conexión con la API de TMDB
└── styles/            # Estilos globales y Tailwind
```

## 📦 Instalación y uso

```bash
git clone https://github.com/leonel-padilla4/Peliculas.git
cd Peliculas
npm install
npm run dev
```

La aplicación se ejecutará en modo desarrollo con Vite (por defecto en `http://localhost:5173`).

## 📸 Capturas

<img width="1366" height="768" alt="imagen" src="https://github.com/user-attachments/assets/88ddbe6e-91ba-4119-8c95-ab28811a68ab" />
favoritos
<img width="1366" height="768" alt="imagen" src="https://github.com/user-attachments/assets/4b30f31a-781b-493e-85be-4af51895a59e" />


## 👤 Autor

**Leonel Padilla Torres**
Estudiante de Desarrollo de Software — SENATI
[github.com/leonel-padilla4](https://github.com/leonel-padilla4)
