"use strict"; 

const numberOfFilms = +prompt('How many films did you watch?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('One of the last moviews you saw?', ''),
      b = prompt('How do you rate the film?', ''),
      c = prompt('One of the last moviews you saw?', ''),
      d = prompt('How do you rate the film?', '');
      e = prompt('Is it good or bad film?', '');
      f = prompt('Would you recommend the film to other?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);