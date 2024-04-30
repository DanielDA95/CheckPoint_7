# JAVASCRIPT.
JavaScript (abreviado comúnmente como JS) es un lenguaje de programación interpretado, basado en el estándar ECMAScript. Se define como orientado a objetos, basado en prototipos, imperativo, débilmente tipado y dinámico.
Se utiliza principalmente del lado del cliente, implementado como parte de un navegador web, lo que permite mejoras en la interfaz de usuario y la creación de páginas web dinámicas. Además, JavaScript también se emplea en el lado del servidor (Server-side JavaScript o SSJS). Su uso no se limita solo a la web; por ejemplo, se encuentra en documentos PDF y aplicaciones de escritorio (principalmente widgets).
Desde 2012, todos los navegadores modernos brindan soporte completo para ECMAScript 5.1, una versión de JavaScript. Incluso los navegadores más antiguos admiten al menos ECMAScript 3. La sexta edición, ECMAScript 6, se liberó en julio de 2015.
JavaScript se diseñó con una sintaxis similar a C++ y Java, aunque adopta nombres y convenciones del lenguaje de programación Java. Sin embargo, Java y JavaScript tienen semánticas y propósitos diferentes. Su relación es puramente comercial, resultado de la adquisición de Netscape Navigator (creador de LiveScript) por parte de Sun Microsystems (creador de Java) y el cambio de nombre del lenguaje de programación.
En la actualidad, todos los navegadores modernos interpretan el código JavaScript integrado en las páginas web. Para interactuar con una página, JavaScript se comunica con el Document Object Model (DOM), proporcionando una interfaz para manipular elementos de la página web de manera dinámica.
Tradicionalmente, JavaScript se utilizaba en páginas web HTML para realizar operaciones en el cliente, sin acceso a funciones del servidor. Sin embargo, en la actualidad, se emplea ampliamente para enviar y recibir información del servidor, a menudo en combinación con tecnologías como AJAX. JavaScript se interpreta en el navegador del usuario mientras las sentencias se descargan junto con el código HTML.
Desde su lanzamiento en junio de 1997 con el estándar ECMAScript 1, han surgido versiones como ECMAScript 2, 3 y 5 (la más utilizada actualmente). En junio de 2015, se publicó la versión ECMAScript 6, marcando un hito en la evolución de este lenguaje de programación.
![Captura de pantalla 2024-04-30 104849](https://github.com/DanielDA95/CheckPoint_7/assets/126833141/e41b14f1-7dc0-4d77-97c0-d352c690a95e)

*Luego de la anterior puesta en contexto continuemos...*

# 1. ¿cómo se diferencia de otros lenguajes? 
- **Interpretación:** JavaScript es un lenguaje interpretado. Esto significa que no necesitamos un proceso de compilación antes de ejecutar nuestro código. Imaginemos que estás leyendo un libro en tu castellano el cual es nuestro idioma nativo, por lo que no necesitas traducirlo a otro idioma antes de entenderlo. Así es como funciona JavaScript. Escribimos el código directamente en el navegador y este lo interpreta y ejecuta. En cambio, otros lenguajes como Java o C++ requieren una fase de compilación antes de que puedan ser ejecutados.
- **Ejecución:** Cuando navegas por Internet, estás interactuando con sitios web creados con JavaScript. Este lenguaje se ejecuta directamente en tu navegador. Es como si el navegador fuera un chef que sigue una receta para preparar una deliciosa comida. En este caso, la receta es el código JavaScript. Así que, cuando haces clic en un botón o llenas un formulario en una página web, estás interactuando con JavaScript.
- **Orientación a objetos:** Imaginemos que tienemos una caja de herramientas con diferentes tipos de herramientas: martillos, destornilladores, llaves inglesas, etc. Cada herramienta tiene una función específica. JavaScript es como esa caja de herramientas. Es un lenguaje orientado a objetos, lo que significa que podemos agrupar funciones y datos relacionados en objetos. Por ejemplo, si queremos representar un coche, podemos crear un objeto llamado “Coche” con propiedades como “color”, “modelo” y “velocidad”. Esto nos ayuda a organizar nuestro código y reutilizarlo fácilmente para crear nuestro programa como lo necesitamos.
- En conclusión:
  ***Javascript:*** Se utiliza principalmente para crear interacciones dinámicas en páginas web. Se ejecuta en el navegador del usuario, lo que le permite controlar elementos HTML, responder a eventos de usuario y realizar solicitudes a servidores web.
  ***Otros lenguajes:*** Se pueden utilizar para una amplia gama de tareas, incluyendo el desarrollo de aplicaciones web y móviles, back-end, análisis de datos, inteligencia artificial y mucho más. En resumen, Javascript es un lenguaje de programación versátil y potente que se ha convertido en una herramienta esencial para el desarrollo web moderno. Si bien comparte algunas similitudes con otros lenguajes de programación, también tiene sus propias características únicas que lo hacen ideal para crear experiencias web interactivas y dinámicas.
  
# 2. ¿Cuáles son algunos tipos de datos JS?
Los tipos de datos en JavaScript, son los bloques de construcción básicos para almacenar y manipular información en nuestros programas.
Imaginemos que estamos construyendo una casa. Para construirla, necesitamos diferentes materiales como ladrillos, cemento, madera y vidrio. De la misma manera, en JavaScript, utilizamos distintos tipos de datos para representar diferentes tipos de información para edificar o construir nuestro programa. Los tipos de datos que podamos encontrar son:
## - Numeros:
Los números son el tipo de dato más básico en JavaScript. Permiten almacenar y operar con valores numéricos, son perfectos para contar, calcular y realizar operaciones matemáticas básicas o complejas utilizando los operadores aritméticos que todos conocemos. Ademas podemos usar tipos de numeros tales como, los ***Enteros*** y ***Decimales***.

*Ejemplo:*
 - Calcular el total de una compra: `var total = 10.50 + 7.25 + 5.30;`
 - Obtener el promedio de calificaciones: `var promedio = (8 + 9 + 10) / 3;`
 - Calcular el área de un rectángulo: `var area = base * altura;`

## - Cadenas de texto ó "strings":
Las cadenas de caracteres, también conocidas como strings en JavaScript, son secuencias de caracteres que se utilizan para representar texto en programas, son el tipo de dato que nos permite almacenar y manipular texto. Son ideales para mostrar información al usuario, crear mensajes dinámicos y almacenar datos textuales.

*Ejemplo de uso:*
![Captura de pantalla 2024-04-30 104849](https://github.com/DanielDA95/CheckPoint_7/assets/126833141/868a97fa-d3a5-4d3e-8ce0-eb61c40b1362)

## - Booleanos:
Los booleanos son un tipo de dato especial que solo puede tener dos valores: true o false. Son útiles para representar condiciones, tomar decisiones y controlar el flujo de nuestros programas, por lo anterior expuesto, las unicas decisiones que tomamos se reducen a 'Verdadero' o 'Falso', haciendo que sea un poco mas fácil al momento de programar y que condicionado a estas respuestas lo que tengamos que solucionar tenga ese proposito de responder a una pregunta cerrada. 

*Ejemplo*
 - Verificar si un usuario es mayor de edad: `var esMayor = edad >= 18; `
 - Comprobar si un archivo está cargado: `var archivoCargado = true;`
 - Determinar si un número es par: `var esPar = numero % 2 === 0;`

## - Null y undefined:
- `null` representa la ausencia intencional de un valor. Se utiliza cuando una variable no tiene ningún valor asignado o cuando queremos eliminar un valor existente. Y lo podemos usar para definirlo o reasignarlo nuevamente mas adelante en nuestro programa. 
- `undefined` representa un valor no inicializado. Se asigna automáticamente a las variables que no han sido declaradas o inicializadas.
*Ejemplos de uso:*
 + Inicializar una variable sin valor: `var nombreUsuario = null;`
 + Verificar si una variable ha sido declarada: `if (typeof variable === "undefined") { ... }`
![null](https://github.com/DanielDA95/CheckPoint_7/assets/126833141/d9cb2a0b-0e72-4b29-81a9-81ca445a6d78)

## - Objetos:
Los objetos son el tipo de dato más versátil en JavaScript. Permiten almacenar colecciones de datos interrelacionados, organizados en pares de ***clave-valor*** (key-value). Son ideales para representar información compleja, como información de usuarios, productos o configuraciones, podriamos decir que es la estructura y tipo de datos más complejos en JS. Veamos los siguientes ejemplos:

-	*Almacenar datos de un usuario:*
`var usuario = {
  nombre: "Daniel",
  edad: 29,
  correo: "daniel@email.com"
};`
-	*Representar un producto:*

`var producto = {
  id: 1234,
  nombre: "Camiseta negra",
  precio: 25.99,
  categoria: "Ropa"
};`

## - **symbol:** 
Los símbolos son un tipo de dato *especial* introducido en ES6. Se utilizan para crear identificadores únicos que no pueden ser redefinidos o chocar con otros nombres de variables o propiedades. Son útiles para crear claves privadas en objetos o implementar patrones de diseño avanzados.

*Ejemplo:*
![Captura de pantalla 2024-04-30 150134](https://github.com/DanielDA95/CheckPoint_7/assets/126833141/c3265bf7-5b7b-4b73-b932-8463174d0ea8)
