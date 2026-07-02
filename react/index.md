# REACT

## ¿Qué es React?
React es una librería de JavaScript para construir interfaces de usuario, especialmente para aplicaciones web de una sola página(*Single Page Applications* o SPAs).

## ¿Por qué es conocido?
React es conocido por su capacidad de crear interfaces de usuario interactivas y dinámicas, su enfoque en la reutilización de componentes y su rendimiento eficiente gracias a su virtual DOM.

React trabaja a través de componentes, una página se puede dividir en varios componentes y estos al mismo tiempo pueden ser reutilizables, los componentes están constituidos por HTML, CSS y JS (React es la combinación de estos lenguajes).

React trabaja con un solo index.html y aquí va a vivir todo el proyecto, también trabaja de acuerdo a qué se esté mostrando en la página, es decir, si estamos en la página de inicio, solo se va a mostrar el componente de inicio y así con los demás componentes.

#### React:
* No tiene herramientas por defecto.
* Uno decide cuándo renderizar, qué usar (Es libre de usar librerías externas para manejar rutas, estados, etc.)
* Es una librería, no un framework
* Es declarativo, no imperativo. Esto significa que no le decimos al navegador cómo hacer las cosas, sino que le decimos qué queremos que haga y React se encarga de hacerlo.
* Si queremos usar un framework completo, podemos usar Next.js que es un framework basado en React. Next.js trae todo incluido, nos dice cómo organizar archivos, cómo hacer rutas, cómo renderizar.

## Crear una aplicación
Debemos tener una herramienta de compilación como vite, parcel o rsbuild.

### Matriz de Decisión Arquitectónica: Selección de Bundler

| Factor Crítico | Vite si... | Rsbuild si... | Parcel si... |
| :--- | :--- | :--- | :--- |
| **Tamaño de la App** | Menos de 5,000 módulos en el código fuente. | Más de 5,000 módulos o monorepos masivos. | Proyectos pequeños, componentes aislados o scripts. |
| **Infraestructura** | Buscas la arquitectura estándar y recomendada por el ecosistema actual. | Tienes una configuración compleja de Webpack/CRA que no puedes rediseñar desde cero. | Requieres cero configuración técnica (`0 config`) y despliegue inmediato. |
| **Arquitectura Web** | Single Page Application (SPA) tradicional o aplicaciones medianas/grandes. | Microfrontends distribuidos basados en *Module Federation*. | Prototipos rápidos, MVPs, pruebas de concepto (POCs) o Landing Pages. |
| **Ecosistema y DX** | Necesitas la mayor comunidad disponible, plugins maduros y herramientas de testing integradas (Vitest). | Requieres compilación extrema en Rust (Rspack) sin perder compatibilidad con el ecosistema Webpack. | Prefieres que las dependencias de assets (Sass, Less, SVGs) se autogestionen internamente. |

#### Justificación Técnica Breve
* Vite: Eficiencia estándar vía ESM Nativo en desarrollo y Rollup optimizado en producción.
* Rsbuild: Rendimiento multinúcleo en Rust (Rspack) para mitigar la latencia de red en cascada de proyectos masivos.
* Parcel: Abstracción total de la complejidad de configuración para maximizar la velocidad de entrega en fases tempranas.