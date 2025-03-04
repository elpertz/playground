# Framer Motion Playground

Este proyecto es un playground para experimentar con animaciones usando \Motion en Next.js. Incluye tarjetas interactivas con efectos de scroll, rotación y escala.

## Características

- Tarjetas animadas con efectos de scroll (staking cards with offset)
- Transiciones suaves de escala y rotación (rotation animation when the card enter to de view port)

## Tecnologías utilizadas

- [Next.js](https://nextjs.org/) - Framework de React
- [Motion](https://www.motion.dev) - Biblioteca de animaciones
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado de JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitario

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/elpertz/playground.git
cd playground
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Estructura del proyecto

- `app/` - Código fuente de la aplicación
  - `components/` - Componentes reutilizables
  - `data.ts` - Datos para las tarjetas
- `public/images/` - Imágenes utilizadas en el proyecto

## Aprendizajes

Este proyecto demuestra cómo:

- Usar `useScroll` y `useTransform` para crear animaciones basadas en el scroll
- Aplicar transformaciones de rotación y escala a elementos
- Trabajar con referencias en React para seguir elementos en el viewport
- Implementar interfaces tipadas en TypeScript para props de componentes
