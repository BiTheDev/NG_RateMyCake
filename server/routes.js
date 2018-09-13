const {allCake,createCake,showCake,createCmt} = require("./controller.js");

function router(app)
{
    app.get("/Cakes/", allCake);
    app.post("Cakes/new/", createCake);
    app.get("/Cakes/show/:id/",showCake);
    app.post("/Cakes/comment/new/",createCmt)
}

module.exports = router;