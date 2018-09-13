const {Cakes,Comments}= require("./model.js");
module.exports = {
    allCake : (req,res) => Cakes.find({})
                        .then(data => console.log("root success")||res.json(data))
                        .catch(errs => console.log("root error")||res.json(errs)),
    createCake :(req,res) =>{
                        // var newCake = new Cakes()
                        // newCake.name = req.body.name
                        // newCake.image = req.body.image
                        Cakes.create(req.body) 
                        .then(data => console.log("create cake success")||res.json(data))
                        
                        .catch(errs => console.log("create cake error")||res.json(errs))
                        },
    showCake : (req,res) => Cakes.find({_id :req.params.id})
                        .then(data => console.log("show Cake success")||res.json(data))
                        .catch(errs => console.log("show Cake error")||res.json(errs)),
    createCmt :(req,res) =>{
                        var newCmt = new Comments()
                        newCmt.rating = req.body.rating
                        newCmt.content = req.body.content
                        newCmt.save()
                        .then(data => {
                            Cakes.update({_id :req.params.id},{$push : {Comment : data}})
                                .then(data => console.log("create comment and add to cake success")||res.json(data))
                                .catch(errs => console.log("create comment and add to cake error")||res.json(errs)),                         
                            console.log("create comment success")||res.json(data)}
                        )
                        .catch(errs => console.log("create comment error")||res.json(errs))
                        }
}