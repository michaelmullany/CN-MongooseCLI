const Movie = require("./model");

exports.addMovie = async (movieObj) => {
    try {
        await Movie.create(movieObj);
    } catch (error) {
        console.log(error);
    }
}

exports.listMovies = async () => {
    try {
        return await Movie.find();
    } catch (error) {
        console.log(error);
    }
}