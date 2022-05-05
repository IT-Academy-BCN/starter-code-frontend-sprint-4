// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let allDirectors = array.map((item) => item.director);
  return allDirectors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let moviesFromDirector = array.filter((item) => item.director === director);
  return moviesFromDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let moviesFromDirector = getMoviesFromDirector(array, director);
  let scoresFromDirector = getScores(moviesFromDirector);
  let averageFromDirector = getAverageScore(scoresFromDirector);

  return Number(averageFromDirector.toFixed(2));
}

// Estas son algunas funciones que reutilizo en otros ejercicios
const getScores = (movies) => movies.map((movie) => movie.score);
const getAverageScore = (arrScores) => {
  let cleanScores = arrScores.filter(
    (item) => !Number.isNaN(item) && item !== ''
  );
  let averageScore =
    cleanScores.reduce(
      (prevScore, currentScore) => prevScore + currentScore,
      0
    ) / cleanScores.length;
  return averageScore;
};

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let moviesCopy = [...array];
  let sortedMovies = moviesCopy.sort((a, b) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });

  let firstTwentyMovies = sortedMovies.slice(0, 20).map((movie) => movie.title);

  return firstTwentyMovies;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let moviesCopy = [...array];
  let sortedMovies = moviesCopy.sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    }
    if (a.year > b.year) {
      return 1;
    }
    if (a.year === b.year) {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      return 0;
    }
  });

  return sortedMovies;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let moviesFromCategory = array.filter((item) =>
    item.genre.includes(category)
  );
  let scoresFromCategory = getScores(moviesFromCategory);
  let averageFromCategory = getAverageScore(scoresFromCategory);

  return Number(averageFromCategory.toFixed(2));
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let clean = array.map((item) => ({
    ...item,
    duration: toMinutes(item.duration)
  }));
  return clean;
}

const toMinutes = (duration) => {
  let [hours, minutes, ...rest] = duration.split(' ');

  minutes = minutes == undefined ? 0 : parseInt(minutes);
  hours = hours.endsWith('h') ? parseInt(hours) : 0;

  if (rest.length !== 0) {
    console.log(`Sorry, ${rest} could not be computed`);
  }

  return hours * 60 + minutes;
};

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let allMoviesFromYear = array.filter((item) => item.year === year);
  let allScoresFromYear = getScores(allMoviesFromYear);
  let greatestScore = Math.max(...allScoresFromYear);

  let bestMovie = allMoviesFromYear.filter(
    (item) => item.score === greatestScore
  );

  return bestMovie;
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
    bestFilmOfYear
  };
}
