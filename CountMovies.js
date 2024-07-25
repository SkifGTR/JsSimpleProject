let numberOfFilms = +prompt('How many movies did you watch?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let a = prompt('Which one movie did you watch?', ''),
    b = prompt('How did you like it ?', ''),
    c = prompt('Which one movie did you watch?', ''),
    d = prompt('How did you like it ?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);