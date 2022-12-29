## Descripción

Este contenedor permite el desarrollo local de aplicaciones de VueJS 3.

## Instrucciones

1. No clone este repositorio; por el contrario, descarguelo como archivo comprimido, descomprimalo en la ruta deseada y cambie el nombre de la carpeta por el nombre que desee darle a su proyecto.
2. Para crear el proyecto de vue se utilizará el script `create-vue-app.sh` ejecutando desde la consola el siguiente comando: `sh create-vue-app.sh`.
    * Una vez ejecutado este comando, se pedirá el nombre del proyecto. Se recomienda llamarlo `project` para no tener que cambiar una variable de entorno posteriormente; sin embargo, si desea ponerle otro nombre, deberá ir a la carpeta `container` y, en el archivo `.env`, cambiar el valor de la variable de entorno `PROJECTFOLDER` por `../nombre_proyecto` por dar un ejemplo.
    * Después de ingresado el nombre del proyecto, se preguntará por la inclusión de algunas características al proyecto. Seleccione sí o no según sus necesidades.
3. Establezca el nombre de su proyecto en el archivo `.env` dentro de la carpeta `container` editando el contenido de la variable de entorno `COMPOSE_PROJECT_NAME`.
4. Una vez terminada la creación del proyecto, ejecutar el comando `sudo chmod -R 757 ./project` con el fin de solucionar problemas de permisos.
4. Posteriormente, entrar a la carpeta `project` y abrir el archivo `vite.config.ts` y agregar el siguiente contenido al principio del arreglo `defineConfig`:
    ```
    server: {
        watch: {
        usePolling: true,
        },
        host: true, // needed for the Docker Container port mapping to work
        strictPort: true,
        port: 5173, // you can replace this port with any port
    },
    ```
    Por ejemplo, si en un inicio el arreglo aparece de la siguiente manera:
    ```
    export default defineConfig({
        plugins: [vue(), vueJsx()],
        resolve: {
            alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        }
    })
    ```
    Editarlo para que quede de la siguiente manera:
    ```
    export default defineConfig({
        server: {
            watch: {
            usePolling: true,
            },
            host: true, // needed for the Docker Container port mapping to work
            strictPort: true,
            port: 5173, // you can replace this port with any port
        },
        plugins: [vue(), vueJsx()],
        resolve: {
            alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        }
    })
    ```
5. Finalmente, ir a la carpeta `container` y ejecutar `docker compose up`. Una vez realizado esto se podrá acceder al proyecto desde `localhost` en el puerto especificado en la variable de entorno `NODE_PORT_MAPPING`