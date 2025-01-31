//database
const connectDB = async() => {
    try{
        console.log('hello db');
    }catch(err){
        console.log(err.message)
    }
};
module.exports = connectDB; 