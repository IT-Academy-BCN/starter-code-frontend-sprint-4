const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(movie => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}
// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const result = array.filter( movie => movie.director === director);
  result.map(movie => movie.title);
  console.log("EXERCICE 2 ->", result);
 return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const movies = getMoviesFromDirector(array, director);
  const result=movies.reduce((a,b)=>{
    return a+b.score/2;
  }, 0);
  console.log("EXERCISE 3 ->", result);
 return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const titles = array.map(movie => movie.title);
  let result = titles.sort();
  console.log("EXERCISE 4 ->", result.SPLI);
  return result.splice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const result = array.slice().sort((a,b) => (a.year - b.year || a.title.localeCompare(b.title) ));
  console.log('Ejercicio 5:', result);
return result;
}
// Exercise 6: Calculate the average of the movies in a category
function moviesAverage(array){
  const newArray = array.map(movie => movie.score).reduce((a,b) => a+b);
  
  return newArray/2;
}
function moviesAverageByCategory(array, categoria) {
  const movies = array.filter(movie => movie.genre.includes(categoria));
  const result = moviesAverage(movies);
  console.log("EXERCISE 6 ->", result);
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
