require("./db/connection");
const { default: mongoose } = require("mongoose");
const yargs = require("yargs");
const { addMovie, listMovies } = require("./movie/methods");

const app = async (yargsObj) => {
    try {
        if (yargsObj.add) {
            // add movie function that takes yargsObj terminal input
            await addMovie({title: yargsObj.title, actor: yargsObj.actor})
            console.log(`Successfully added ${yargsObj.title}.`);
        } else if (yargsObj.list) {
            //list movies from database
            const list = await listMovies();
            console.log(list);
        } else if (yargsObj.update) {
            //update movies with filterObj and updateObj
        } else if (yargsObj.delete) {
            //delete movie with filterObj
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