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

# 3. ¿Cuales son las 3 funciones de string en JS?
JavaScript trata las cadenas como objetos al ejecutar métodos y propiedades; Esencialmente, una función le permite encapsular el comportamiento. En este caso, no somos nosotros los que realmente creamos las funciones, estas se proporcionan en la biblioteca central de javascript, por lo que simplemente podemos llamarlas. Las cadenas de caracteres en JavaScript son fundamentales para representar y manipular texto.
+ length: Esta función te permite verificar la longitud de una cadena. Por ejemplo, si tienes la cadena "Hola, mundo", puedes obtener su longitud con cadena.length, que devolverá el valor 11.
+ concatenación: Puedes unir dos o más cadenas utilizando el operador + o el operador +=. Por ejemplo, si tienes dos cadenas "Hola" y "mundo", puedes concatenarlas así: const resultado = cadena1 + " " + cadena2;
+ indexOf(): Esta función te permite encontrar la posición de una subcadena dentro de una cadena más grande. Por ejemplo, si tienes la cadena "JavaScript es genial", puedes usar cadena.indexOf("genial") para obtener la posición del texto "genial" en la cadena original.

# 4. ¿Que es un condicional en JS?
En JavaScript, los condicionales son estructuras de control del flujo del programa que permiten ejecutar diferentes bloques de código dependiendo de una condición específica. La condición se evalúa como verdadera o falsa, y el flujo del programa se dirige en consecuencia, es una estructura que permite ejecutar diferentes bloques de código según si se cumple o no una condición. Es como tomar decisiones en función de ciertas circunstancias. Para esto vamos el siguiente ejemplo y los tipos de condicional:

- *Los condicionales más comunes son `if` y `else`:*
   `let edad = 18;`
 
 `if (edad >= 18) {
   console.log("Eres mayor de edad");
 } else {
   console.log("Eres menor de edad");
 }`
En pocas palabras, esta condición, nos indicaría si al tener 18 años o más, eres mayor de edad la mayoria de paises. 
Los condicionales son fundamentales para la programación en JavaScript, ya que permiten tomar decisiones y ejecutar diferentes acciones en función de las condiciones que se cumplan. Son utilizados en una amplia variedad de escenarios, como validar datos de usuario, controlar el flujo de una aplicación, mostrar diferentes interfaces de usuario, etc.

La instrucción if...else es la base de las decisiones en JavaScript. Permite ejecutar un bloque de código si se cumple una condición específica, y otro bloque si no se cumple.
Sintaxis:
`if (condicion) {
  // Bloque de código si la condición es true
} else {
  // Bloque de código si la condición es false
}`

Puntos clave:
- La condición debe ser una expresión booleana que resulte en true o false.
- Los bloques de código pueden contener múltiples instrucciones, incluso otras sentencias if...else.
- La cláusula else es opcional, pero se recomienda para manejar todos los casos posibles.

* **Sentencias switch: dominando múltiples opciones**
Las sentencias switch permiten evaluar una variable contra una serie de valores y ejecutar un bloque de código correspondiente a cada caso.

Sintaxis:

switch (variable) {
  case valor1:
    // Código para el caso 1
    break;
  case valor2:
    // Código para el caso 2
    break;
  default:
    // Código para el caso por defecto
}

Puntos clave:
•	Útil para manejar múltiples opciones de manera organizada.
•	Cada caso debe ir seguido de la instrucción break para evitar la ejecución accidental de código posterior.
•	La cláusula default es opcional, pero se recomienda para manejar casos no contemplados.
Operadores lógicos: dominando el lenguaje de la lógica (continuación)
Los operadores lógicos permiten combinar y evaluar múltiples condiciones, controlando el flujo del programa con precisión.
* **Operadores lógicos básicos:**
-	*&& (And):* Evalúa si todas las condiciones son verdaderas. 
-	Sintaxis: condicion1 && condicion2 && ...
	Ejemplo: (edad >= 18) && (pais === "España") (Verifica si la persona es mayor de edad y reside en España).
	|| (Or): Evalúa si al menos una condición es verdadera. 
	Sintaxis: condicion1 || condicion2 || ...
	Ejemplo: (edad >= 18) || (tienePermisoEspecial) (Verifica si la persona es mayor de edad o tiene un permiso especial).
-	! (Not): Invierte el valor de una condición. 
	Sintaxis: !condicion
	Ejemplo: !esEstudiante (Verifica si la persona no es estudiante).
+ **Operadores lógicos avanzados:**
-	&&= (Logical AND assignment): Asigna un valor a una variable solo si la condición es verdadera. 
	Sintaxis: variable &&= valor
	Ejemplo: mensaje &&= (edad >= 18) ? "Mayor de edad" : "Menor de edad" (Asigna el mensaje correspondiente según la edad).
-	||= (Logical OR assignment): Asigna un valor a una variable si al menos una condición es verdadera. 
	Sintaxis: variable ||= valor
	Ejemplo: accesoPermitido ||= (esAdmin || tienePermiso) (Asigna true a accesoPermitido si la persona es administrador o tiene permiso).

+ **Consejos para usar operadores lógicos:**
•	Agrupar condiciones con paréntesis: Para mayor claridad y evitar ambigüedades en la evaluación.
•	Utilizar la precedencia de operadores: Conocer el orden de evaluación de los operadores para obtener el resultado esperado.
•	Evitar negaciones innecesarias: Simplificar las expresiones utilizando operadores lógicos más directos.

* **Evaluando condiciones con precisión**
Evaluar correctamente las condiciones es crucial para el buen funcionamiento de los condicionales. A continuación, se presentan herramientas y técnicas para lograrlo:
*Operadores de comparación:*
-	== (Igualdad): Compara valores, sin considerar el tipo.
-	=== (Igualdad estricta): Compara valores y tipos.
-	!= (Desigualdad): Compara valores, sin considerar el tipo.
-	!== (Desigualdad estricta): Compara valores y tipos.
-	< (Menor que): Compara valores numéricos.
-	> (Mayor que): Compara valores numéricos.
-	<= (Menor o igual que): Compara valores numéricos.
-	>= (Mayor o igual que): Compara valores numéricos.
*Comprobación de tipos de datos:*
-	typeof(variable): Obtiene el tipo de dato de una variable.
-	instanceof: Verifica si una variable es instancia de un tipo de dato específico.
-	variable === undefined: Verifica si una variable es undefined.
*Consejos para evaluar condiciones:*
-	Elegir el operador de comparación adecuado: Considerar el tipo de datos y la comparación deseada.
-	Validar valores antes de compararlos: Evitar errores por valores nulos o indefinidos.
-	Utilizar sentencias if anidadas para condiciones complejas: Desglosar condiciones extensas en bloques más manejables.

# 5. ¿Qué es un operador ternario?
El operador ternario en JavaScript es una herramienta poderosa y concisa para escribir declaraciones condicionales. A menudo se utiliza como un atajo para la instrucción if.
Para dar un mejor entendimiento a este concepto voy a utilizar un ejemplo; 
Imaginemos que eres un detective y tu misión es resolver un caso. Tienes dos pistas: una que te lleva al culpable si es cierta, y otra que te lleva a un callejón sin salida si es falsa. El operador ternario en JavaScript es como tener un informante que te dice cuál pista seguir en un solo paso. Entonces la **condición** es la pista principal: Decide si la información es verdadera o falsa.
- El valor si verdadero es el callejón correcto: Si la pista principal te lleva al culpable, este valor es la respuesta que buscabas.
- El valor si falso es el callejón sin salida: Si la pista principal te lleva a un callejón sin salida, este valor indica que no hay información útil en esa dirección.

***Volviendo al ejemplo de la edad podemos hacerlo de la siguiente manera:***
`let edad = 18;`

`let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";`

`console.log(mensaje); // Imprime "Eres mayor de edad"`

* ¿Por qué usar el operador ternario?
Simplifica tu código: En lugar de escribir una larga sentencia if...else, puedes hacerlo en una sola línea.
Haz tu código más legible: Es más fácil entender qué sucede en una línea que en un bloque de código más extenso.
* ¿Cuándo usar el operador ternario?
Para expresiones simples: Si la decisión que debes tomar es simple y concisa, el operador ternario es perfecto.
Para asignaciones rápidas: Si solo necesitas asignar un valor en función de una condición, el operador ternario es ideal.
* ¿Cuándo no usar el operador ternario?
Para expresiones complejas: Si la decisión que debes tomar es compleja o involucra múltiples condiciones, una sentencia if...else es más clara.
Para mejorar la legibilidad: Si usar el operador ternario hace que tu código sea difícil de leer, opta por una sentencia if...else.
Recuerda: El operador ternario es una herramienta poderosa, pero como cualquier herramienta, debe usarse con cuidado. Elige la mejor opción para cada situación y mantén tu código limpio y fácil de entender.

# 6. Cuál es la diferencia entre una declaración de función y una expresión de función?
En JavaScript, las declaraciones de función y las expresiones de función son dos maneras de definir bloques de código reutilizables que realizan una tarea específica. Ambas permiten crear funciones que pueden ser llamadas desde otras partes del programa. Sin embargo, existen algunas diferencias clave entre ellas:

***Declaración de función:***
- Se define usando la palabra clave function seguida del nombre de la función, paréntesis para los parámetros y llaves para el bloque de código.
- Se declara antes de ser utilizada.
- Se puede llamar antes de su declaración en el código (hoisting).
- Su alcance es global si no está dentro de un bloque de código (función o bloque {}).

*Ejemplo:*
  `function multiplicar(a, b) {
      return a * b;
  }`

***Expresión de función:***
Una expresión de función funciona de manera similar a una declaración de función, pero con una diferencia crucial: el nombre de la función no se inicia en una expresión de función.
- Las funciones anónimas se crean en expresiones de función.
- Las expresiones de función se ejecutan tan pronto como se definen.
- Se declaran utilizando la sintaxis de asignación de variables.

*Ejemplo:*
  `var multiplicar = function(a, b) {
    return a * b;
 };`

***¿Cuándo usar una declaración de función?***
Se prefiere cuando la función se va a utilizar en varias partes del programa.
Si se necesita hoisting para llamar a la función antes de su definición.
Cuando se quiere definir una función con un nombre descriptivo.

***¿Cuándo usar una expresión de función?***
- Cuando la función se define y utiliza en el mismo lugar.
- Para funciones anónimas que se pasan como argumentos a otras funciones.
- Cuando se quiere evitar la creación de variables innecesarias (al usar const).

En general, las expresiones de función son más concisas y modernas, mientras que las declaraciones de función son más claras y explícitas. La elección entre una y otra depende del contexto y las preferencias de cada persona que este realizando el programa. En resumen, las declaraciones de función se definen con la palabra clave function, mientras que las expresiones de función se crean mediante asignación de variables.

# 7. Qué es la palabra clave "this" en JS?
En JavaScript, la palabra clave this es una referencia especial que se refiere al objeto actual en el que se está ejecutando el código. El valor de this cambia dependiendo del contexto en el que se use. En JavaScript, la palabra clave this funciona como un megáfono que te permite dirigirte a un objeto específico dentro de tu código. Veamos un 'ejemplo' que podriamos aplicar en la vida real, y digamos que nos encontramos en medio de una multitud de personas y necesitamos encontrar a alguien en especifico, ahí es cuando la palabra 'this' actuaria como un megáfono, con el que llamaremos la atención de esta persona. 

*Ejemplo*
`const perro = {
  nombre: "Toby",
  ladrar: function() {
    console.log("¡Guau! Soy", this.nombre); // "this.nombre" hace referencia al nombre del perro, "Toby"
  }
};`

`perro.ladrar(); // Imprime "¡Guau! Soy Toby"`

En resumen:
"this" es una herramienta esencial en JavaScript para interactuar con objetos y controlar el contexto de ejecución. Su valor cambia dependiendo de dónde te encuentres en tu código. Puedes usar "this" para acceder a propiedades y métodos de objetos, crear nuevos objetos y cambiar el contexto de funciones.
