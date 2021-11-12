# ModeloEpidemico
Modelo epidemico, FINAL de Telematica:

La aplicacion web trata sobre un programa que simula con procesos aleatorios como es el contagio de un virus del cual se pide la probabilidad de contagio
y la cantidad de insteracciones. para asi saber que tan probable es que en una poblacion de 5 personas al final todos queden enfermos o sigan quedando personas sanas.

Paso a Paso de Montaje de Contenedor:
1. se debe clonar el repositorio en el dispositivo local, para esto utilizamos el comando de git "git clone" y pues pegamos el link del repositorio, 
2. nos encontraremos con 3 archivos este README, un Dockerfile y una carpeta con un documento html uno css y uno js, el dockerfile es el documento de tipo Docker
que nos ayudara con el montaje de la imagen en el contenedor.
3. ahora abriremos el terminal sea "cmd" o "terminal" siempre con permisos de administrador ya que si no contamos con esos permisos no nos 
dejara manipular los puertos de red del equipo.
4. entramos a la carpeta que acabamos de clonar y con el codigo "Docker build ." crearemos la imagen con el archivo dockerfile que alli se encuentra.
5. ahora buscaremos el ID de nuestra imagen con el comando "Docker images" 
6. ahora usaremos el comando “ docker run -d -p 80:80 [ID] apachectl -D FOREGROUND ”, y donde dice ID pondremos el ID de la imagen creada anteriormente.
7. ahora para conectarnos a dicho contenedor pondremos la ip del equipo y seguido el puerto al que se relaciono dicho contenedor, en el ejemplo se uso el 
puerto 80 y es por alli por donde nos conectaremos. 