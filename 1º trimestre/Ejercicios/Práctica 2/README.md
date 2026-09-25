# Práctica 2: Calculadora de notas

## Descripción

Esta práctica consiste en crear una calculadora que obtiene la nota final a partir de la nota del examen y de la nota de la práctica.

## Funcionamiento

1. Se introduce la nota del examen.
2. Se introduce la nota de la práctica.
3. Se pulsa el botón **Calcular**.
4. La aplicación calcula la media de las dos notas:

   ```text
   nota final = (nota del examen + nota de la práctica) / 2
   ```

5. La nota final se muestra con dos decimales.
6. Si la nota final es igual o superior a 5, se muestra **Aprobado** en verde. Si es inferior a 5, se muestra **Suspenso** en rojo.

El formulario no recarga la página al realizar el cálculo.

## Archivos

- `index.html`: contiene el formulario y la estructura de la página.
- `estilos.css`: contiene los estilos de la calculadora y de los resultados.
- `calculadora.js`: realiza el cálculo y muestra el resultado.

## Cómo usarla

Abrir el archivo `index.html` en un navegador, introducir las dos notas y pulsar **Calcular**.
