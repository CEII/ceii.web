# CEII Web
Desarrollo en NextJS con TypeScript

## Resumen
- [Configuraciones](#configuracion)
- [Convenciones](#convenciones)
- [Diseño](#diseño)
- [Flujo de trabajo](#flujo-de-trabajo)

---
## Configuracion

### Prerequisitos
- WSL 2
- [NVM](https://github.com/nvm-sh/nvm)

### Pasos
1. Clonar repositorio

2. Correr `npm run dev`

3. Al configurar la primera vez, o cuando exista una nueva migración actualizar base de datos. [Ver mas (migraciones)](#comandos)

4. Correr proyecto localmente, desde raiz del repositorio. Se pueden seleccionar distintos perfiles, se recomienda usar ceii_api

    ```bash
    dotnet watch run --project src/Ceii.Api.Core --launch-profile ceii_api
    ```

- De preferencia, crear alias para los comandos

---
## Convenciones

- Los tamaños de pantalla que tienen que verificarse irán según los breakpoints de TailwindCSS
- Los dispositivos a probar son
    |  Dispositivo | Tamaño |
    |:------------:|:------:|
    | iphone 6/7/8 |  375px |
    |     ipad     |  768px |
    |   ipad pro   | 1024px |
    |  Portátil L  | 1440px |
    |  Portátil XL | 1920px |


---
## Diseño

### Figma

Seguir [figma](https://www.figma.com/file/y33oRxqjrUhaQQIP6Qii07/CEII-UCA?node-id=0%3A1) lo más pixel perfect posible

### 

---
### Flujo
1. Crear una rama segun convenciones de **git flow**.

    **OJO**: Solo usar git flow para la creacion de ramas

2. Commitear segun [estandares](#estandar-para-repositorios)

3. Crear un Pull Request desde **gh cli**

4. Avisar al reviewer de la creacion del PR
    - Si son necesarios cambios posterior a la revision, y han realizado nuevos commits unicamente pushearlos a la rama correspondiente


### Git Flow
Para facilitar el desarrollo, se usará [GitFlow](https://danielkummer.github.io/git-flow-cheatsheet/) y su manejo por ramas.

#### Prefijos de ramas
- Feature: feature/
- Bugfix: bugfix/
- Release: release/
- Hotfix: hotfix/

#### Escenarios
- Feature: para agregar funcionalidad
- Bugfix: para reparar errores que no están en producción
- Release: para publicar una versión a producción
- Hotfix: para reparar errores en caliente, generados o encontrados en producción

### GH CLI
Para facilitar la creacion de PR's. [Instalar](https://cli.github.com/)

#### Comandos

- **`gh pr create`**
    
    Permite crear PR's a traves de flags.
    - `-f` completa la descripcion con los nombres de los commits de la rama existente
    - `-a <login>` completa el assignee por su usuario. Usar @me para autoasignarse
    - `-r <login>` completa el reviewer por su usuario.

    Ejemplo (desde rama ejemplo/PR-01):
    
    **`gh pr create -f -a @me -r wmoralesdev`**

---

## Estandar para repositorios

### Ramas
- Los nombres de las ramas tendran el prefijo de git flow y de nombre el numero de ticket en el proyecto seguido de una breve descripcion 

    `(feature|bug|hotfix)/GH-PJ-NUM <descripcion-breve>`


### Commits
- Practicar mensajes de commmit semanticos. Los mensajes seguirán un formato estandar:

`(feat|fix|docs|style|refactor|perf|test|chore): <descripcion-breve>`

#### Tipos de commit
- **`feat`**: Agregar una característica
- **`fix`**: Solucionar un bug
- **`docs`**: Cambios en la documentación
- **`style`**: Cambio en el formato del código (salto de linea, indentacion, etc. que no implique cambio en funcionalidad)
- **`refactor`**: Refactorizar código
- **`perf`**: Actualizar código en su desempeño
- **`test`**: Agregar tests, actualizar o refactorizar tests
- **`chore`**: Actualizar sin afectar el uso. Por ejemplo, actualización de paquetes, cambio de mensajes en strings, etc.
