# ¿Qué es el asíncronismo?

Los lenguajes de programación son síncronos por defecto, sólo utiliza un sub proceso (hilo).

- JavaScript es single-threaded, así fué como se consignió y así funciona.

## Conceptos importantes:

### Bloqueante: 

Una tarea no devuelve el control hasta que es completada.

### No bloqueante: 

Una tarea se devuelve inmediatamente como independencia del resultado. Si se completó devuelve los datos. Si no, un error.

### Síncrono:

Las tareas que se ejecutan de forma secuancial deben esperar a que se completen para continuar con la siguiente tarea. 

### Asíncrono: 

Las tareas pueden ser completadas más tarde, haciendo posible que la respuesta pueda ser diferida y continuar haciendo otras tareas y seguir obteniendo la información.

### Concurrencia de JavaScript:

Utiliza un modelo de concurrencia basado en un 'loop' de eventos.

### Callbacks:

Una función que se pasa como argumento de otra función y que será invocada.

### Promesas (ES6):

Son funciones no-bloqueantes y asíncronia la cual puede retornar un valor ahora, en el futuro o nunca.

### Async / Await (2017):

Permite estructurar una función asíncrona sin bloqueo de una manera similar a una función ordinaria.

En conslusión... JavaScript no deja de ser un lenguaje síncrono pero nos permite herramientas como las antes mencionadas que nos permite trabajar de forma asíncrona.

### Event Loop

El bucle de evento es un patrón de diseño que espera y distribuye eventos y mensajes en un programa.

### Memory Heap 

Los objetos son asignados a un montículo o espacio (espacio grande en memoria no organizado).

### Call Stack (Pila)

Apila de forma organizada las intrucciones de nuestro programa.

### Task Queue

Cola de tareas, se maneja la concurrencia, se agregan las tareas que ya están listas para pasar al Stack (pila).

El Stack debe estar vacío.

### Micro Task Queue

Las promesas tienen otra forma de ejecutarse y una prioridad superior.

### Web APIs

JavaScript del lado del cliente: setTimeout, XMLHttpRequest, File Reader, DOM.

Node: fs, https.