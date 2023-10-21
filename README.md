## CSS AVANZADO

### Primeros pasos:

1. Navegar a la carpeta donde clonaremos el repositorio, por ejemplo Desktop
    - `cd` navega a la carpeta que le indiques después `cd Desktop/`
    - `ls` lista los elementos de la carpeta en la que nos encontramos
    - `cd ..` navegas a la carpeta anterior, la que contiene la carpeta en la que estás en ese momento

3. Clonar repositorio el dicha carpeta con el siguiente comando `gh repo clone FSDSTR1023/css-avanzado` (ir a github y copiar el comando que os indique desplegando el botón verde Code)

4. Crear una rama nueva: `git branch nombre-rama`

    - Estándar nombre ramas: nombre/ft-flex `cpicatoste/ft-nav`
    
    - Ejemplo = `git branch cpicatoste/ft-nav`

5. Navegar a la rama creada: `git checkout nombre-rama`

    - ejemplo: `git checkout cpicatoste/ft-nav`

6. Instalar las dependencias de node: `npm i` o `npm install`

7. Levantar el proyecto: `npm run`

8. Hacer los cambios del código

9. Hacer commit y push de nuestra rama a github desde el menú lateral (icono de git)
    - Añadir archivos que queremos subir con el icono +
    - Escribir un mensaje en el input: `Feat: navbar implementation`
    - Hacer `commit`
    - Hacer `push` desplegando el menú o `Syncronize branch`

### Configuración global de git

`git config --global user.name` # to check username
 
`git config --global user.email` # to check email
