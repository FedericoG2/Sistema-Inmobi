# 🏠 Zitelli & Asociados - Sistema de Gestión Inmobiliaria

## Descripción

Sistema de Gestión Inmobiliaria.

---

## Tecnologías

| Tecnología | Uso |
|------------|-----|
| [React](https://react.dev/) | Interfaz y componentes |
| [Vite](https://vite.dev/) | Entorno de desarrollo y empaquetado |
| [JavaScript (ES modules)](https://developer.mozilla.org/es/docs/Web/JavaScript) | Lenguaje del proyecto |
| [Bootstrap 5](https://getbootstrap.com/) | Estilos y layout (CSS + JS del bundle) |
| [React Router](https://reactrouter.com/) | Rutas, navegación y layouts anidados |
| [ESLint](https://eslint.org/) | Análisis estático del código |

---

## Cómo clonar el repositorio y trabajar con cambios

### Requisitos

- [Node.js](https://nodejs.org/) (versión LTS recomendada; incluye `npm`)

### Clonar (con Git)

Si el proyecto está en un remoto (GitHub, GitLab, etc.):

```bash
git clone <URL-del-repositorio>
cd <nombre-de-la-carpeta-del-clone>
```



### Instalar dependencias

Desde la raíz del proyecto:

```bash
npm install
```

### Desarrollo (ver cambios al momento)

```bash
npm run dev
```

Se abrirá la URL que indique la terminal (por lo general `http://localhost:5173`). Guardar archivos en `src/` recarga la página con **HMR** (recarga rápida).


## Estructura de carpetas

Árbol orientativo de la raíz del proyecto y de `src/`. Algunas carpetas pueden contener solo un `.gitkeep` para reservar el lugar hasta que agregues archivos.

```
.
├── public/              # Archivos estáticos servidos tal cual (favicon, etc.)
├── src/
│   ├── assets/          # Imágenes, logos, íconos importados desde el código
│   ├── components/
│   │   ├── common/      # Componentes reutilizables (botones, inputs, modales…)
│   │   └── layout/      # Shell de la app: sidebar, navbar, layouts admin/usuario
│   ├── context/         # Reservado para React Context (estado global, ej. auth)
│   ├── hooks/           # Reservado para hooks personalizados
│   ├── routes/          # Definición de rutas de la aplicación
│   ├── services/        # Reservado para llamadas a API, Firebase, etc.
│   ├── utils/           # Reservado para funciones puras (formatos, fechas…)
│   ├── views/
│   │   ├── admin/       # Pantallas del panel de administración
│   │   ├── user/        # Pantallas del área inquilino
│   │   └── public/      # Páginas públicas (login, landing…)
│   ├── App.jsx          # Raíz de la app: enrutador y montaje de rutas
│   ├── main.jsx         # Entrada: React DOM, Bootstrap, estilos globales
│   └── index.css        # Estilos globales propios
├── index.html           # HTML base que monta la app
├── package.json         # Dependencias y scripts npm
├── vite.config.js       # Configuración de Vite
└── eslint.config.js     # Reglas de ESLint
```

---

## Publicar en GitHub

El proyecto ya tiene **Git inicializado** y un **commit inicial** en la rama `main`. Falta crear el repositorio vacío en GitHub y subir el código (GitHub no permite crear el remoto sin iniciar sesión en tu cuenta).

1. Entrá a [github.com](https://github.com), iniciá sesión y pulsá **New repository** (o **+** → **New repository**).
2. Elegí un nombre (por ejemplo `sistema-gestion-inmobiliaria`), dejalo **público** o **privado** según prefieras.
3. **No** marques “Add a README”, “Add .gitignore” ni “Choose a license” (el proyecto local ya tiene archivos; evitás conflictos al hacer push).
4. Creá el repositorio. GitHub mostrará la URL; copiá la que termina en `.git` (HTTPS o SSH).

En la carpeta del proyecto (PowerShell o terminal):

```bash
cd "ruta\a\Sistema de Gestión Inmobiliaria"
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin main
```

Si GitHub te pide autenticación, usá un **Personal Access Token** como contraseña (HTTPS) o configurá **SSH**. Si el remoto ya existía mal configurado: `git remote remove origin` y volvé a agregarlo.

---

