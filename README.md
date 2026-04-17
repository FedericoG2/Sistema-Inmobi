# 🏠 Inmobi Sistema de Gestión Inmobiliaria

## Descripción del Proyecto

Sistema Web de Gestión Inmobiliaria que permitirá centralizar la gestión e información de propiedades e inquilinos; automatizar procesos críticos, como el cálculo masivo de aumentos de alquileres, además de optimizar la atención al cliente mediante el seguimiento de reclamos junto al acceso centralizado a la documentación.


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

