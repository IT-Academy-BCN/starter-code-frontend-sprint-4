//Fuente de consulta .map, .filter y .reduce: https://www.youtube.com/watch?v=tP8JiVUiyDo & https://stackoverflow.com/questions/42146272/how-to-use-javascript-reduce-function-to-calculate-average-of-items-meeting-a-sp 
//Fuente consulta  Arrow functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions  
// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
 //Crea una nueva array y extrae el valor de la propiedad "director" de cada objeto de la array
  const result =  array.map(movie => movie.director); 
  /*El siguiente método hace lo mismo que el anterior, pero eliminando el parámetro e indicando directamente el tipo de valor que se extrae de cada objeto.
  const result =  array.map(({director}) => director); */
  return result;
}

// Exercise 2: Get the films of a certain director
/* Crea una nueva array únicamente con los elementos que cumplen con la condición que se indica, 
en este caso el valor del parámetro "director" coincide con el valor de la propiedad "director" de la array*/
function getMoviesFromDirector(array, director) {
 const result = array.filter(movie => movie.director == director);
 return result; 
}

// Exercise 3: Calculate the average of the films of a given director.
/*Creamos una función de moviesAverage que se podrá utilizar para hacer la media de la puntuación teniendo en cuenta cualquier propiedad del objeto (director, género, título...)*/
function moviesAverage(array){
  //Creamos una array para extraer los valores de la propiedad del objeto "score"
  const scores =  array.map(movie => movie.score);
  //Hacemos la media a partir del array "scores". El método .reduce va acumulando los valores hasta que queda solo uno.
  const result =  scores.reduce((valorAnterior, valorActual) => {  
    return valorAnterior + valorActual;  
  }, 0) / scores.length;
  return result;
}
function moviesAverageOfDirector(array, director) {
  //Utilizamos la función con el método .filter para extraer los objetos del array que coincidan con "director"
  const directorFilms = getMoviesFromDirector(array, director);
  //Del array que nos crea la función anterior, extraemos únicamente el valor de las propiedad "score" de cada objeto del array
  const result = moviesAverage(directorFilms);
  console.log ("EXERCISE 3 ->", result.toFixed(2)); // .toFixed(2) sirve para limitar los decimales a dos cifras
  return result; 
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
//Fuentes de consulta .sort: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort & https://www.youtube.com/watch?v=k-zv7s_YKWM 
//Crear una nueva array solo con los títulos de las películas
  const arrayToBeSorted = array.map(movie => movie.title);
  /* Para ordenar alfabéticamente, se utiliza .sort y se añaden dos parámetros que se compararán entre sí para poder establecer el orden. 
  Si no se usara la función para comparar los parámetros, se ordenaría según la posición del valor Unicode de cada caracter (1º números, 2º mayúsculas, 3º minúsculas...)*/
  const sortedArray =  arrayToBeSorted.sort(function (a, b) {
    //Si b es menor que a, el 1 indica que el valor b va antes que el valor a
    if (a > b) {
      return 1;
    }
    //Si a es menor que b el -1 indica que el valor a va antes que el valor b 
    else if (a < b) {
      return -1;
    } else {
    // no se modifica porque los dos elementos que se comparan son iguales
    return 0;
    }
  });
//Extraer con .slice los 20 primeros elementos de la array. Con (0,20) extraerá desde el elemento con índice 0 hasta el 19 de la array.
//Fuente de consulta .slice: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
  const result = sortedArray.slice(0,20);
  console.log ("EXERCISE 4 ->", result);
  return result;              
}

// Exercise 5: Order by year, ascending
/* Fuente de consulta: https://stackoverflow.com/questions/2466356/sorting-objects-by-property-values 
& https://stackoverflow.com/questions/63712871/sort-array-of-objects-by-multiple-properties-of-string-type  */
function orderByYear(array) {
  //Clonar la array original con .slice()
  const newArray = array.slice();
 /* Ordenar por año
 const result = newArray.sort((a,b) => a.year - b.year);*/
 const result = newArray.sort((a, b) => {
   //Primero ordenar por año haciendo un condicional
   if ((a.year - b.year) > 0){
     return 1;
   }else if ((a.year - b.year) < 0) {
     return -1;
   //En caso de que los años coincida se hace el condicional con los títulos
   }else if (a.year === b.year) {
     if (a.title > b.title){
      return 1;
     }else if (a.title < b.title) {
      return -1;
     }else {
      return 0;
     }
   }
 });
  console.log ("EXERCISE 5 ->", result);
  return result;    
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  //Creamos una nueva array que extraiga las películas que contengan el género indicado en el parámetro (en este caso "género")
  const genreArray = array.filter(movie => movie.genre == genre);
  //Eliminamos las películas que no tengan valor en la propiedad "score". Según films.spec.js si hay 2 películas y una tiene una puntuación de 5 y la otra no tiene puntuación, debería retornar 5, por lo tanto hay que eliminarla, ya que si le damos valor "0" la media será 2,5
  const scoredMovies = genreArray.filter(movie => movie.score !== '');
  //Utilizamos la función de moviesAverage del ejercicio 3 para extraer el valor de "score" y hacer la media.
  const result = moviesAverage(scoredMovies);
 
console.log ("EXERCISE 6 ->", result.toFixed(2)); // .toFixed(2) sirve para limitar los decimales a dos cifras
return result; 
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
