# 📋 ROADMAP - Curso de Introducción a React.js

Este roadmap está diseñado para el desarrollo progresivo del proyecto TODO Machine, desde los fundamentos de React hasta el deploy final.

> **Retomado el:** 26 de Mayo, 2026 — después de una pausa desde Diciembre 2025.

---

## **Fase 1: Fundamentos de React** ✅ COMPLETADA

### 1. Introducción a React y JSX ✅
- **Objetivos:**
  - Entender la estructura del proyecto (src/, public/)
  - Comprender cómo funciona JSX
  - Conocer los componentes básicos de React
- **Archivos clave:** `App.js`, `index.js`

**Conceptos aprendidos:**

**¿Qué es React?**
React es una librería de JavaScript para construir interfaces de usuario. En lugar de manipular el HTML directamente (como con `document.getElementById`), describes cómo quieres que se vea la pantalla y React se encarga de actualizarla automáticamente cuando los datos cambian.

**¿Qué es JSX?**
JSX es la sintaxis que parece HTML dentro de JavaScript. No es HTML real — es azúcar sintáctica que React transforma en JavaScript:
```jsx
// Esto es JSX (lo que escribes)
<h1 className="TodoCounter">Has completado 2 de 5 TODOS</h1>

// Esto es lo que React hace internamente
React.createElement('h1', { className: 'TodoCounter' }, 'Has completado 2 de 5 TODOS')
```
> Regla clave: en JSX usas `className` en lugar de `class` porque `class` es una palabra reservada de JavaScript.

---

### 2. Componentes y Props ✅
- **Objetivos:**
  - Crear componentes funcionales
  - Entender Props y comunicación entre componentes

**Conceptos aprendidos:**

**Componentes**
Un componente es una función de JavaScript que devuelve JSX. Toda la app está dividida en piezas reutilizables:
```
App.js               ← componente raíz, el "jefe"
├── TodoCounter      ← muestra "X de Y completados"
├── TodoSearch       ← campo de búsqueda
├── TodoList         ← contenedor de la lista
│   └── TodoItem     ← cada tarea individual
└── CreateTodoButton ← botón de "+"
```
Cada componente vive en su propio archivo `.js` con su propio `.css`.

**Props (propiedades)**
Las props son la forma en que los componentes se pasan información entre sí, de padre a hijo. Son como los parámetros de una función:
```jsx
// App.js le pasa props a TodoCounter
<TodoCounter completed={2} total={5} />

// TodoCounter las recibe y las usa
function TodoCounter({ total, completed }) {
  return <h1>Has completado {completed} de {total} TODOS</h1>;
}
```
> Las props fluyen **solo hacia abajo** (de padre a hijo), nunca al revés.

---

## **Fase 2: Proyecto TODO Machine** ✅ COMPLETADA

### 3. Maquetación Inicial ✅
- **Objetivos:**
  - Crear estructura de componentes del TODO
  - Aplicar CSS modular a cada componente
- **Componentes creados:**
  - `TodoCounter` - Contador de tareas completadas
  - `TodoSearch` - Buscador de tareas
  - `TodoList` - Lista contenedora
  - `TodoItem` - Item individual de tarea
  - `CreateTodoButton` - Botón para agregar tareas

---

### 4. Estados y Eventos ✅
- **Objetivos:**
  - Implementar `useState` para manejo de TODOs
  - Agregar eventos `onClick`, `onChange`
  - Funcionalidad de completar/eliminar TODOs

**Conceptos aprendidos:**

**Estado (`useState`)**
El estado es data que puede cambiar y que cuando cambia, hace que React vuelva a dibujar la pantalla automáticamente:
```jsx
const [todos, setTodos] = React.useState(defaultTodos);
//     ^dato   ^función para cambiarlo   ^valor inicial
```
En `App.js` hay dos estados activos:
- `todos` — la lista completa de tareas
- `searchValue` — el texto que el usuario escribe en el buscador

> Regla de oro: nunca modifiques el estado directamente (`todos.push(...)` está prohibido). Siempre usa la función setter (`setTodos(...)`).

**Eventos**
Los eventos son las acciones del usuario (clicks, escribir texto, etc.). En React se pasan como props que comienzan con `on`:
```jsx
// Al hacer click en ✓, llama a la función onComplete
<span onClick={props.onComplete}>✓</span>

// Al escribir en el input, actualiza el estado
<input onChange={(event) => setSearchValue(event.target.value)} />
```

**Elevación de estado (State Lifting)**
Cuando dos componentes necesitan compartir el mismo dato, ese estado sube al componente padre común. El estado vive en `App.js` y se le pasa a los hijos tanto el valor como la función para cambiarlo:
```jsx
// App.js tiene el estado
const [searchValue, setSearchValue] = React.useState('');

// Y se lo pasa a TodoSearch
<TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
```

---

### 5. Búsqueda y Filtrado ✅
- **Objetivos:**
  - Implementar buscador funcional
  - Filtrar TODOs en tiempo real según búsqueda

**Conceptos aprendidos:**

**Renderizado de listas**
Para mostrar una lista de elementos se usa `.map()` y cada elemento necesita una `key` única:
```jsx
{searchedTodos.map(todo => (
  <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
))}
```

**Renderizado condicional**
Mostrar contenido distinto según el estado de la app:
```jsx
{allCompleted ? '🎉 ¡Felicidades! Completaste todos tus TODOS' : `Has completado ${completed} de ${total}`}
```

---

## **Fase 3: Funcionalidades Avanzadas** ⏳ PENDIENTE

### 6. Local Storage ✅

- **Objetivos:**
  - Persistir TODOs en localStorage del navegador
  - Cargar datos al iniciar la aplicación
  - Guardar cambios automáticamente al completar o eliminar TODOs

**Conceptos aprendidos:**

**¿Qué es localStorage?**
`localStorage` es una pequeña base de datos que el navegador guarda en tu computadora. A diferencia del estado de React (que se borra al recargar la página), localStorage persiste aunque cierres el navegador. Solo puede guardar texto (`strings`), por eso convertimos los objetos con `JSON.stringify` y los recuperamos con `JSON.parse`:
```js
// Guardar (convierte el array a texto)
localStorage.setItem('TODOS_V1', JSON.stringify([ { text: 'Tarea', completed: false } ]));

// Leer (convierte el texto de vuelta a array)
const data = JSON.parse(localStorage.getItem('TODOS_V1'));
```

**Patrón implementado: leer al arrancar, escribir al cambiar**
La estrategia usada fue:
1. Al iniciar la app, leer de localStorage y usarlo como valor inicial del estado.
2. Cada vez que el usuario complete o elimine un TODO, escribir el nuevo array en localStorage.

```js
// 1. Leer al arrancar (se ejecuta una sola vez cuando React carga el componente)
function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([])); // primera vez: lista vacía
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos); // ya hay datos: los usamos
  }

  const [todos, setTodos] = React.useState(parsedTodos); // estado inicial = localStorage
  ...
}

// 2. Escribir cada vez que cambia algo
const saveTodos = (newTodos) => {
  localStorage.setItem('TODOS_V1', JSON.stringify(newTodos)); // persiste
  setTodos(newTodos);                                          // actualiza pantalla
};
```

> `saveTodos` reemplaza a `setTodos` directo. Ahora cualquier cambio primero se guarda en disco y luego actualiza la UI.

**Bug encontrado: typo en la clave del localStorage**
Durante la implementación se cometió un error muy común: usar nombres distintos para leer y escribir.
```js
// ❌ ERROR: claves diferentes → nunca persiste
localStorage.getItem('TODOS_V1');       // lee de aquí...
localStorage.setItem('TODO_V1', ...);   // ...pero escribe aquí (falta la S)

// ✅ CORRECTO: misma clave en ambos lados
localStorage.getItem('TODOS_V1');
localStorage.setItem('TODOS_V1', ...);
```
> Lección: cuando los datos no persisten, lo primero que debes revisar es que las claves de lectura y escritura sean idénticas.

**¿Y `useEffect`?**
El curso menciona `useEffect` como la forma "oficial" de React para sincronizar con sistemas externos (como localStorage). La diferencia con el enfoque actual es:

| Enfoque actual | Con `useEffect` |
|---|---|
| Lee en el cuerpo de la función (al montar) | Lee en el estado inicial del `useState` |
| Escribe manualmente en `saveTodos` | Escribe automáticamente cuando `todos` cambia |
| Más explícito, fácil de seguir | Más idiomático, menos código repetido |

Ambos funcionan. `useEffect` se verá más adelante en el curso.

---

### 6.1 Custom Hooks ✅

- **Objetivos:**
  - Extraer lógica reutilizable fuera de los componentes
  - Crear el hook `useLocalStorage` para encapsular toda la lógica de persistencia
  - Entender la convención de nomenclatura de los hooks

**Conceptos aprendidos:**

**¿Qué es un Custom Hook?**
Un custom hook es simplemente una función de JavaScript cuyo nombre empieza con `use` y que puede llamar a otros hooks de React adentro (`useState`, `useEffect`, etc.). Sirven para extraer lógica que se repetiría en varios componentes y ponerla en un solo lugar.

Antes del hook, toda la lógica de localStorage vivía mezclada dentro de `App.js`. Con el custom hook, `App.js` solo necesita una línea:
```js
// Antes: ~15 líneas de lógica en App.js
// Después: una sola línea limpia
const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
```

**Anatomía de `useLocalStorage`**
```js
function useLocalStorage(itemName, initialValue) {
  // 1. Intentar leer del localStorage
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;

  // 2. Si no existe, inicializarlo; si existe, parsearlo
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  // 3. Crear el estado de React con el valor leído
  const [item, setItem] = React.useState(parsedItem);

  // 4. Función que guarda en localStorage Y actualiza el estado
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  // 5. Devolver igual que useState: [valor, funcionParaCambiarlo]
  return [item, saveItem];
}
```

> El hook devuelve `[item, saveItem]` siguiendo exactamente la misma convención de `useState`. Quien lo use ni siquiera necesita saber que hay localStorage adentro.

**Reglas de los hooks (obligatorias)**
React impone dos reglas que nunca se pueden romper:
1. Solo llama hooks en el nivel superior de una función — nunca dentro de `if`, `for` o funciones anidadas.
2. Solo llama hooks desde componentes de React o desde otros custom hooks — nunca desde funciones normales de JavaScript.

```js
// ❌ PROHIBIDO: hook dentro de un if
if (condicion) {
  const [value, setValue] = React.useState(0);
}

// ✅ CORRECTO: siempre en el nivel superior
const [value, setValue] = React.useState(0);
```

**Convención de nombres**
Todos los hooks empiezan con `use`. Esto no es solo estilo — React usa ese prefijo para aplicar las reglas anteriores automáticamente:
- `useState` — estado local
- `useEffect` — efectos secundarios
- `useLocalStorage` — tu hook personalizado

---

### 6.2 Organización de Carpetas ✅

- **Objetivos:**
  - Mover cada componente a su propia carpeta
  - Seguir la convención `NombreComponente/index.js`
  - Mantener el CSS junto al componente que lo usa
  - Extraer el custom hook a su propia carpeta

**¿Por qué organizar en carpetas?**
Cuando el proyecto crece, tener todos los archivos en la raíz de `src/` se vuelve caótico. Agrupar por componente hace que cada pieza sea fácil de encontrar, modificar y eventualmente borrar:

```
// ❌ Antes: todo mezclado en src/
src/
├── App.js
├── TodoCounter.js
├── TodoCounter.css
├── TodoItem.js
├── TodoItem.css
├── ...

// ✅ Después: cada componente tiene su propio "cuarto"
src/
├── App.js
├── TodoCounter/
│   ├── index.js        ← el componente
│   └── TodoCounter.css ← su estilo
├── TodoItem/
│   ├── index.js
│   └── TodoItem.css
├── useLocalStorage/
│   └── index.js        ← el hook
├── ...
```

**¿Por qué el archivo se llama `index.js`?**
Cuando importas una carpeta, JavaScript automáticamente busca el archivo `index.js` dentro de ella. Esto permite que los imports en `App.js` queden exactamente igual aunque los archivos se hayan movido:

```js
// Este import funciona tanto si existe:
// - src/TodoCounter.js           (archivo directo)
// - src/TodoCounter/index.js     (carpeta con index)
import { TodoCounter } from './TodoCounter';
```

> La carpeta actúa como un "módulo" y `index.js` es su punto de entrada. Es el mismo concepto que el `index.html` de una página web.

**Estructura final del proyecto**
```
src/
├── App.js                          ← orquesta todo, solo lógica de UI
├── App.css
├── index.js                        ← punto de entrada de React
├── index.css                       ← estilos globales
├── useLocalStorage/
│   └── index.js                    ← hook de persistencia
├── CreateTodoButton/
│   ├── index.js
│   └── CreateTodoButton.css
├── TodoCounter/
│   ├── index.js
│   └── TodoCounter.css
├── TodoItem/
│   ├── index.js
│   └── TodoItem.css
├── TodoList/
│   ├── index.js
│   └── TodoList.css
└── TodoSearch/
    ├── index.js
    └── TodoSearch.css
```

> Regla práctica: si un componente tuviera tests, imágenes o subcomponentes propios, también irían dentro de su carpeta. Todo lo que pertenece a un componente vive junto.

---

### 7. Estados de Carga y Errores
- **Objetivos:**
  - Simular carga asíncrona de datos
  - Implementar skeleton loaders
  - Manejo de estados vacíos y errores
- **UX:** Loading states, empty states, error handling
- **Duración estimada:** 2-3 horas

### 8. Modal para Crear TODOs
- **Objetivos:**
  - Implementar React Portals
  - Crear formulario de creación de TODOs
  - Validación de formularios
- **Conceptos:** Portals, formularios controlados
- **Duración estimada:** 3-4 horas

---

## **Fase 4: Organización y Deploy** ⏳ PENDIENTE

### 9. Context API
- **Objetivos:**
  - Evitar prop drilling
  - Centralizar estado global de la aplicación
  - Refactorizar componentes para usar Context
- **Conceptos:** Context, `useContext`, patrones de estado global
- **Duración estimada:** 4-5 horas

### 10. Deploy y Optimización
- **Objetivos:**
  - Preparar aplicación para producción
  - Deploy en GitHub Pages
  - Optimización de performance
- **Tareas:**
  - Configurar gh-pages
  - Build de producción
  - Testing final
- **Duración estimada:** 2-3 horas

---

## 📊 Resumen del Proyecto

| Fase | Estado | Temas |
|------|--------|-------|
| Fase 1 - Fundamentos | ✅ Completada | React, JSX, Componentes, Props |
| Fase 2 - TODO Machine | ✅ Completada | Maquetación, useState, Eventos, Filtrado |
| Fase 3 - Avanzado | 🔄 En curso | useEffect, localStorage ✅, Modal, Portals |
| Fase 4 - Deploy | ⏳ Pendiente | Context API, GitHub Pages |

- **Duración total estimada:** 25-35 horas
- **Nivel:** Principiante a Intermedio
- **Tecnologías:** React 18, CSS3, LocalStorage
- **Resultado final:** Aplicación TODO completa y deployada

---

## ✅ Estado Actual

**Fase actual:** Fase 3 - Funcionalidades Avanzadas
**Progreso:** Fases 1 y 2 completadas ✅ — localStorage ✅ — Custom Hook ✅ — Organización de carpetas ✅ — PR abierto hacia `main` ✅
**Siguiente paso:** Implementar estados de carga y errores — paso 7 (skeleton loaders, empty states, error handling).

---

## 📚 Recursos Adicionales

- [Documentación oficial de React](https://react.dev)
- [Curso en Platzi](https://platzi.com/reactjs)
- [Create React App Docs](https://create-react-app.dev)

---

**Última actualización:** 27 de Mayo, 2026 — PR `feature/04-estados-eventos` → `main` abierto
