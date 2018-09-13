const goose = require("mongoose");


goose.connect("mongodb://localhost:27017/CakeApi", {useNewUrlParser: true},(errs)=> console.log(errs?errs:"db CakeApi"));

const CommentSchema = new goose.Schema({
    rating:{
        type :Number,
        require:true
    },
    content:{
        type:String,
        minlength:[10, "Longer Comment"]
    }
},{timestamps : true});
const CakeSchema = new goose.Schema({
    name:{
        type:String,
        required:true,
        minlength:[2,"Baker name should be longer"]
    },
    image:{
        type:String,
        required:true,
    },
    Comment : [CommentSchema]
},{timestamps : true})

const Cakes = goose.model('Cake', CakeSchema);
const Comments = goose.model('Comments', CommentSchema);

module.exports = {Cakes,Comments};