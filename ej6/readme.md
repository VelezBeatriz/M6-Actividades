# Ejercicio 6 - Ahorcado
Crea el juego del ahorcado.
1. La pantalla inicial tendrá un prompt para entrar la palabra
2. Aparecerá en pantalla tantas casillas como letras tiene la palabra
3. Podemos entrar a través de un input la letra que queremos probar
4. Si la letra existe se muestra en sus casillas correspondientes
5. Si no existe contará un fallo
6. Si después de 6 oportunidades no ha completado la partida fracasa
7. Cada fallo se representará con una parte del ahorcado

## Procedimiento
1. Guarda la entrada del prompt en una variable
2. Convierte la palabra a mayúsculas
3. Elimina los espacios inicial y final
4. Crea un array vacío ('*casillas*') del mismo tamaño y llenalo de '_'
5. Crea una función que pinte en pantalla el contenido del array casillas con un div para cada casilla. Ejecútala
6. Captura el click del botón y captura la letra del input en una variable. Conviertela en mayúscula
7. Recorre la palabra y verifica, para cada posición, si la letra coincide con la letra entrada.
   1. Si coincide, insertala en la posición correspondiente del array 'casillas'
   2. Si al acabar de recorrer el array, no se ha encontrado ninguna coincidencia, suma el contador de fallos
8. Al acabar de recorrer la palabra pinta de nuevo el array casillas y borra la letra del input
9. Si el contador de fallos es igual a 6 acaba la partida
10. Cada vez que se sume un fallo, muestra una parte del ahorcado.

## Figma
![image](https://github.com/carrebola/m6/assets/61465929/ceb42790-f546-44c0-8577-46b4a659189f)
![image](https://github.com/carrebola/m6/assets/61465929/75ae1dc1-0213-4efc-8b5d-0daa585577e5)
![image](https://github.com/carrebola/m6/assets/61465929/c6dbc0f4-d4a2-4012-957c-2d19af48b2fe)


