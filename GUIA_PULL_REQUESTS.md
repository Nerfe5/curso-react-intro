# 📖 Guía de Pull Requests - Curso React Intro

## 🎯 Análisis de tu Repositorio

He analizado tu repositorio **curso-react-intro** y encontré lo siguiente:

### Estado Actual del Repositorio

- **Rama principal (`main`)**: Contiene solo los archivos básicos (README, LICENSE, .gitignore)
- **Rama de desarrollo (`develop`)**: Contiene documentación importante y configuración
- **Rama de feature (`feature/01-introduction-jsx`)**: Contiene la implementación completa de los componentes TODO

---

## 🔍 Las Dos Solicitudes Pendientes

### 1️⃣ Rama: `develop`

**Contenido:**
- ✅ GITFLOW.md - Estrategia de Git para el curso
- ✅ ROADMAP.md - Plan de desarrollo del curso
- ✅ README.md actualizado con información del curso
- ✅ package.json y package-lock.json actualizados
- ✅ Estructura del proyecto React con carpetas public/ y src/

**Importancia:** ⭐⭐⭐⭐⭐ (CRÍTICA)

Esta rama contiene la **base fundamental del curso** con toda la documentación y configuración necesaria.

### 2️⃣ Rama: `feature/01-introduction-jsx`

**Contenido:**
- ✅ Todos los componentes TODO implementados:
  - `TodoCounter.js` y `TodoCounter.css`
  - `TodoSearch.js` y `TodoSearch.css`
  - `TodoList.js` y `TodoList.css`
  - `TodoItem.js` y `TodoItem.css`
  - `CreateTodoButton.js` y `CreateTodoButton.css`
- ✅ App.js con la estructura completa
- ✅ Estilos CSS actualizados

**Importancia:** ⭐⭐⭐⭐⭐ (CRÍTICA)

Esta rama contiene la **maquetación completa** del proyecto TODO Machine (Fase 2, sección 3 del ROADMAP).

---

## 💡 Recomendaciones: ¿Cuál es la Mejor Opción?

### ✅ OPCIÓN RECOMENDADA: Mergear Ambas en Secuencia

**Estrategia sugerida:**

#### Paso 1: Mergear `develop` a `main` PRIMERO

**¿Por qué primero?**
- Establece la base de documentación del curso
- Configura el proyecto React correctamente
- Define el flujo de trabajo (GitFlow)
- Sin esta base, el código de la feature no tiene contexto

**Cómo hacerlo:**

```bash
# Opción A: Pull Request en GitHub (RECOMENDADO)
1. Ve a: https://github.com/Nerfe5/curso-react-intro/compare
2. Selecciona: base: main ← compare: develop
3. Crea el PR con título: "docs: agregar documentación del curso y configuración base"
4. Revisa los cambios
5. Haz merge del PR

# Opción B: Línea de comandos
git checkout main
git pull origin main
git merge develop
git push origin main
```

#### Paso 2: Mergear `feature/01-introduction-jsx` a `develop`

**¿Por qué a develop y no a main?**
- Sigue el flujo de GitFlow documentado en GITFLOW.md
- `develop` es la rama de trabajo activo
- Mantiene `main` limpio para releases estables

**Cómo hacerlo:**

```bash
# Opción A: Pull Request en GitHub (RECOMENDADO)
1. Ve a: https://github.com/Nerfe5/curso-react-intro/compare
2. Selecciona: base: develop ← compare: feature/01-introduction-jsx
3. Crea el PR con título: "feat: completar maquetación inicial con todos los componentes TODO"
4. Revisa los cambios
5. Haz merge del PR

# Opción B: Línea de comandos
git checkout develop
git pull origin develop
git merge feature/01-introduction-jsx
git push origin develop
```

#### Paso 3: (Opcional) Mergear `develop` actualizado a `main`

Cuando consideres que la implementación está lista para "producción":

```bash
git checkout main
git merge develop
git push origin main
git tag -a v1.0-maquetacion -m "Fase 2: Maquetación inicial completada"
git push origin v1.0-maquetacion
```

---

## 📚 Cómo Crear un Pull Request en GitHub

### Método 1: Interfaz Web de GitHub (Más Fácil)

1. **Navega a tu repositorio:**
   ```
   https://github.com/Nerfe5/curso-react-intro
   ```

2. **Accede a la página de comparación:**
   - Opción A: Click en "Pull requests" → "New pull request"
   - Opción B: Ve directo a: `https://github.com/Nerfe5/curso-react-intro/compare`

3. **Selecciona las ramas:**
   - **base:** La rama destino (ej: `main` o `develop`)
   - **compare:** La rama con tus cambios (ej: `develop` o `feature/01-introduction-jsx`)

4. **Revisa los cambios:**
   - GitHub te mostrará todos los archivos modificados
   - Revisa que todo sea correcto

5. **Crea el Pull Request:**
   - Click en "Create pull request"
   - Añade un título descriptivo
   - Añade una descripción explicando los cambios
   - (Opcional) Añade reviewers, labels, etc.
   - Click en "Create pull request"

6. **Mergea el Pull Request:**
   - Una vez creado, revisa una última vez
   - Click en "Merge pull request"
   - Confirma el merge
   - (Opcional) Elimina la rama si ya no la necesitas

### Método 2: GitHub CLI (Para Usuarios Avanzados)

```bash
# Instalar GitHub CLI si no lo tienes
# https://cli.github.com/

# Crear PR desde develop a main
gh pr create --base main --head develop --title "docs: agregar documentación del curso" --body "Agrega GITFLOW.md, ROADMAP.md y configuración base"

# Crear PR desde feature a develop
gh pr create --base develop --head feature/01-introduction-jsx --title "feat: maquetación inicial TODO Machine" --body "Implementa todos los componentes de la fase 2"

# Ver PRs abiertos
gh pr list

# Mergear un PR
gh pr merge 1 --merge
```

---

## 🎓 Comandos Git Útiles

### Verificar el Estado de tu Repositorio

```bash
# Ver en qué rama estás
git branch

# Ver todas las ramas (incluyendo remotas)
git branch -a

# Ver el estado de los archivos
git status

# Ver el historial de commits
git log --oneline --graph --all
```

### Actualizar desde el Remoto

```bash
# Descargar cambios sin mergear
git fetch origin

# Descargar y mergear cambios
git pull origin main
```

### Comparar Ramas

```bash
# Ver diferencias entre dos ramas
git diff develop feature/01-introduction-jsx

# Ver solo los nombres de archivos diferentes
git diff --name-only develop feature/01-introduction-jsx

# Ver commits únicos de una rama
git log develop..feature/01-introduction-jsx --oneline
```

---

## ⚠️ Consideraciones Importantes

### 1. No Eliminar las Ramas Feature

Según tu GITFLOW.md, las ramas de feature deben **mantenerse como referencia** del progreso del curso. No las borres después del merge.

### 2. Usar Mensajes de Commit Descriptivos

Sigue la convención de Conventional Commits:
- `feat:` - Nueva funcionalidad
- `fix:` - Corrección de bugs
- `docs:` - Cambios en documentación
- `style:` - Cambios de estilos CSS
- `refactor:` - Refactorización de código

### 3. Probar Antes de Mergear

Antes de hacer merge, asegúrate de que el código funciona:

```bash
# Cambiar a la rama que quieres probar
git checkout develop

# Instalar dependencias
npm install

# Ejecutar la aplicación
npm start

# Si funciona correctamente, procede con el merge
```

---

## 🚀 Plan de Acción Recomendado

### Orden de Ejecución:

```
1. [INMEDIATO] Mergear develop → main
   ↓
2. [INMEDIATO] Mergear feature/01-introduction-jsx → develop  
   ↓
3. [CUANDO ESTÉ LISTO] Mergear develop → main (versión con código)
   ↓
4. [OPCIONAL] Crear tag v1.0-maquetacion en main
```

### Checklist de Tareas:

- [ ] Crear PR: `develop` → `main` (documentación)
- [ ] Revisar y mergear el PR
- [ ] Crear PR: `feature/01-introduction-jsx` → `develop`
- [ ] Revisar y mergear el PR
- [ ] Probar que `npm start` funciona en `develop`
- [ ] (Opcional) Mergear `develop` → `main`
- [ ] (Opcional) Crear tag de versión

---

## 📊 Visualización de la Estrategia

```
Estado Actual:
main (solo README básico)
  ↓
develop (documentación + estructura React)
  ↓
feature/01-introduction-jsx (componentes TODO completos)

Después de Merges Recomendados:
main (con documentación) ←──────────┐
  ↑                                  │
  │ (merge cuando esté listo)        │
  ↓                                  │
develop (con documentación + componentes TODO)
  ↑                                  │
  │ (merge completado)               │
  ↓                                  │
feature/01-introduction-jsx (mantenida como referencia)
```

---

## 🆘 ¿Necesitas Ayuda?

### Recursos:
- [GitHub Docs - About Pull Requests](https://docs.github.com/es/pull-requests)
- [Atlassian Git Tutorial](https://www.atlassian.com/es/git/tutorials)
- [Git Flow Workflow](https://nvie.com/posts/a-successful-git-branching-model/)

### Comandos de Emergencia:

```bash
# Si algo sale mal y quieres volver atrás
git reflog  # Ver historial de acciones
git reset --hard HEAD@{1}  # Volver al estado anterior

# Si tienes conflictos al mergear
git merge --abort  # Cancelar el merge
# Resuelve conflictos manualmente y luego:
git add .
git commit -m "fix: resolver conflictos de merge"
```

---

**Última actualización:** Diciembre 10, 2025

---

## 🎯 Conclusión

La **mejor opción** es mergear ambas ramas siguiendo el orden propuesto:

1. **`develop` → `main`** primero (base de documentación)
2. **`feature/01-introduction-jsx` → `develop`** después (implementación)
3. Opcionalmente, **`develop` → `main`** cuando esté listo para "producción"

Esto sigue el flujo de GitFlow documentado y mantiene un historial limpio y organizado del curso.

¡Buena suerte con tus Pull Requests! 🚀
