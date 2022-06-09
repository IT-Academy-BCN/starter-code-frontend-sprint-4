// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(movie => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const result = array.filter(movie => movie.director == director);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const movies = getMoviesFromDirector(array, director);
  const result = moviesAverage(movies);
  return result;
}

function moviesAverage(array){
  const scores = array.map(movie => movie.score).filter(score => score !== ''); 
  const result = scores.reduce((prevValue, currentValue) => (prevValue + currentValue)) / scores.length;
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const titles = array.map(m => m.title);
  titles.sort();
  return titles.slice(0,20); 
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const orderedMovies = [...array];
  
  orderedMovies.sort((a,b) => {
    if(a.year > b.year){
      return 1;
    }
    else if (a.year < b.year) {
      return -1;
    }
    else { // in case of same year, order alphabetically by title
      if(a.title > b.title){
        return 1;
      }
      else if(a.title < b.title){
        return -1;
      }
      else {
        return 0;
      }
    }
  });

  return orderedMovies;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  const movies = array.filter(m => m.genre.includes(category));
  const result = moviesAverage(movies);
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let movies = array.map(m => {
    const hoursStr = m.duration.split('h ')[0] !== undefined ? m.duration.split('h ')[0] : 0;
    const minStr = m.duration.split('h ')[1] !== undefined? m.duration.split('h ')[1].slice(0,-3) : 0;
    const totalMin = parseInt(hoursStr) * 60 + parseInt(minStr);
    return {...m, duration: totalMin};
  });

  return movies;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  // get just this year's movies
  const movies = array.filter(m => m.year == year);
  // sort them by score number
  movies.sort((a,b) => a.score - b.score);
  // reverse the order (so the first movie is the one with the highest score)
  movies.reverse();
  // check if there are more movies with the same score
  const maxScore = movies[0].score;
  return movies.filter(m => m.score == maxScore);
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
