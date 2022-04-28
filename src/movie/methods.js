const Movie = require("./model");

exports.addMovie = async (movieObj) => {
    try {
        await Movie.create(movieObj);
    } catch (error) {
        console.log(error);
    }
}

exports.listMovies = async (filterObj) => {
    try {
        const cleanFilter = removeUndefinedFromObject(filterObj);
        return await Movie.find(cleanFilter);
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

exports.deleteMovie = async (filterObj) => {
    try {
        const deleteResult = await Movie.deleteOne(filterObj);
        if (deleteResult > 0) {
            console.log("Deletion successful");
        } else {
            console.log("Could not delete");
        }
    } catch (error) {
        console.log(error);
    }
}

// Take an object and remove keys with a value of undefined
// This allows us to delete using only the properties passed in on the CLI
function removeUndefinedFromObject(initialObject) {
    const cleanObject = {};
    Object.keys(initialObject).forEach(key => {
        if (initialObject[key] != undefined) {
            cleanObject[key] = initialObject[key];
        }
    });
    return cleanObject;
}