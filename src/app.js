require("./db/connection");
const { default: mongoose } = require("mongoose");
const yargs = require("yargs");
const { addMovie, listMovies, updateMovie, deleteMovie } = require("./movie/methods");

const app = async (yargsObj) => {
    try {
        if (yargsObj.add) {
            // add movie function that takes yargsObj terminal input
            await addMovie({title: yargsObj.title, actor: yargsObj.actor, year: yargsObj.year})
            console.log(`Successfully added ${yargsObj.title}.`);
        } else if (yargsObj.list) {
            //list movies from database
            const list = await listMovies({ title: yargsObj.title, actor: yargsObj.actor, year: yargsObj.year});
            console.log(list);
        } else if (yargsObj.update) {
            //update movies with filterObj and updateObj
            await updateMovie({ title: yargsObj.title }, { actor: yargsObj.actor, year: yargsObj.year });
        } else if (yargsObj.delete) {
            //delete movie with filterObj
            await deleteMovie({ title: yargsObj.title });
        } else {
            console.log("Incorrect Command");
        }
        await mongoose.disconnect();
    } catch (error) {
        console.log(error);
        await mongoose.disconnect();
    }
};

app(yargs.argv);