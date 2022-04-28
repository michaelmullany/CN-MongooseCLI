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

exports.updateMovie = async (filterObj, updateObj) => {
    try {
        const updateResult = await Movie.updateOne(filterObj, updateObj);
        if (updateResult.modifiedCount > 0) {
            console.log("Update successful");
        } else {
            console.log("Could not update")
        }
    } catch (error) {
        console.log(error);
    }
}