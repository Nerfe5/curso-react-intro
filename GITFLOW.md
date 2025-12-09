# 🌿 GitFlow - Curso de Introducción a React.js

Este documento define la estrategia de Git para el desarrollo ordenado del curso, asegurando que cada fase del aprendizaje esté documentada en ramas separadas.

---

## 📌 Estructura de Ramas

### **Ramas Principales**

#### `main`
- **Propósito:** Código base inicial del curso
- **Contenido:** Proyecto Create React App sin modificaciones
- **Protección:** No hacer commits directos (excepto configuración inicial)

#### `develop`
- **Propósito:** Rama de desarrollo activo
- **Contenido:** Última versión estable del curso en progreso
- **Uso:** Base para crear ramas de feature

---

## 🎯 Ramas por Fase del Curso

Cada fase del ROADMAP tendrá su propia rama para mantener el historial de aprendizaje:

### **Fase 1: Fundamentos**
```
feature/01-introduccion-jsx
feature/02-primer-componente
```

### **Fase 2: TODO Machine**
```
feature/03-maquetacion-inicial
feature/04-estados-eventos
feature/05-busqueda-filtrado
```

### **Fase 3: Funcionalidades Avanzadas**
```
feature/06-local-storage
feature/07-estados-carga-errores
feature/08-modal-crear-todos
```

### **Fase 4: Organización y Deploy**
```
feature/09-context-api
feature/10-deploy
```

---

## 🔄 Flujo de Trabajo

### 1. **Iniciar Nueva Fase**
```bash
# Asegurarte de estar en develop actualizado
git checkout develop
git pull origin develop

# Crear nueva rama de feature
git checkout -b feature/01-introduccion-jsx
```

### 2. **Desarrollar en la Rama**
```bash
# Hacer cambios y commits descriptivos
git add .
git commit -m "feat: implementar componente básico de saludo"

# Commits frecuentes con mensajes claros
git commit -m "style: agregar estilos al componente App"
git commit -m "docs: actualizar comentarios en App.js"
```

### 3. **Finalizar Fase**
```bash
# Push de la rama al repositorio remoto
git push origin feature/01-introduccion-jsx

# Merge a develop (localmente o vía Pull Request)
git checkout develop
git merge feature/01-introduccion-jsx
git push origin develop
```

### 4. **Mantener la Rama para Referencia**
**Importante:** NO eliminar las ramas de feature. Mantenerlas como referencia del progreso del curso.

---

## 📝 Convenciones de Commits

Usar **Conventional Commits** para mensajes claros:

### Tipos de Commits

- `feat:` - Nueva funcionalidad
  ```bash
  git commit -m "feat: agregar componente TodoItem"
  ```

- `style:` - Cambios de estilos CSS
  ```bash
  git commit -m "style: aplicar estilos a TodoCounter"
  ```

- `refactor:` - Refactorización de código
  ```bash
  git commit -m "refactor: extraer lógica de búsqueda a custom hook"
  ```

- `fix:` - Corrección de bugs
  ```bash
  git commit -m "fix: corregir filtrado de TODOs vacíos"
  ```

- `docs:` - Documentación
  ```bash
  git commit -m "docs: agregar comentarios a Context API"
  ```

- `chore:` - Tareas de mantenimiento
  ```bash
  git commit -m "chore: actualizar dependencias"
  ```

---

## 🏷️ Etiquetas (Tags)

Crear tags al completar cada fase importante:

```bash
# Al completar Fase 1
git tag -a v1.0-fundamentos -m "Fase 1: Fundamentos completada"
git push origin v1.0-fundamentos

# Al completar Fase 2
git tag -a v2.0-todo-machine -m "Fase 2: TODO Machine completada"
git push origin v2.0-todo-machine

# Al completar Fase 3
git tag -a v3.0-avanzado -m "Fase 3: Funcionalidades avanzadas completadas"
git push origin v3.0-avanzado

# Al completar Fase 4
git tag -a v4.0-production -m "Fase 4: Deploy completado"
git push origin v4.0-production
```

---

## 🎓 Comandos Útiles para el Curso

### Ver Historial del Curso
```bash
# Ver todas las ramas
git branch -a

# Ver historial gráfico
git log --oneline --graph --all --decorate

# Ver cambios entre fases
git diff feature/01-introduccion-jsx feature/02-primer-componente
```

### Volver a una Fase Anterior
```bash
# Ver código de una fase específica
git checkout feature/03-maquetacion-inicial

# Volver a develop
git checkout develop
```

### Comparar Progreso
```bash
# Ver qué cambió desde el inicio
git diff main develop

# Ver archivos modificados en una rama
git diff --name-only main feature/04-estados-eventos
```

---

## 📊 Ejemplo de Estructura Final

```
main (código base inicial)
  │
  ├── develop (progreso actual)
  │     │
  │     ├── feature/01-introduccion-jsx ✅
  │     ├── feature/02-primer-componente ✅
  │     ├── feature/03-maquetacion-inicial ✅
  │     ├── feature/04-estados-eventos ✅
  │     ├── feature/05-busqueda-filtrado ✅
  │     ├── feature/06-local-storage ✅
  │     ├── feature/07-estados-carga-errores ✅
  │     ├── feature/08-modal-crear-todos ✅
  │     ├── feature/09-context-api ✅
  │     └── feature/10-deploy ✅
  │
  └── gh-pages (deploy en GitHub Pages)
```

---

## 🚀 Configuración Inicial

### 1. Crear Rama Develop
```bash
git checkout -b develop
git push origin develop
```

### 2. Configurar GitHub (Opcional)
- Proteger rama `main` (Settings → Branches → Branch protection rules)
- Hacer `develop` la rama por defecto para PRs

### 3. Preparar para Deploy
```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Agregar scripts en package.json
# "predeploy": "npm run build"
# "deploy": "gh-pages -d build"
```

---

## ✅ Checklist por Fase

Antes de pasar a la siguiente fase:

- [ ] Código funcionando sin errores
- [ ] Commits con mensajes descriptivos
- [ ] Rama pusheada a remoto
- [ ] Merge a develop realizado
- [ ] Tag creado (en fases importantes)
- [ ] Probar que npm start funciona

---

## 📚 Recursos

- [Git Flow Original](https://nvie.com/posts/a-successful-git-branching-model/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [GitHub Flow](https://guides.github.com/introduction/flow/)

---

**Última actualización:** Diciembre 9, 2025
