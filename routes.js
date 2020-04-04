module.exports = function(app, passport, db) {

//main page routes
//dont want to require signup to use site
  app.get( "/", function(req, res){
    res.render("index.ejs");
  });

  app.get("/info", isLogged, function(req, res) {
    db.collection("userInfo").find().toArray((err, result) => {
      if (err) return console.log(err)
      res.render("login.ejs")
    })
  });

  app.get("/science", function(req, res) {
    res.render("sci.ejs");
  });

  app.post("/comments", (req, res) => {
    db.collection("comments").save({msg: req.body.msg, vote: req.body.vote}, (err, result) => {
      if (err) return console.log(err)
      console.log("saved to DB")
      res.redirect("/")
      console.log(req);
    })
  })

  app.get("/tech", function(req, res) {
    res.render("tech.ejs");
  });

  app.get("/engineering", function(req, res) {
    res.render("engi.ejs");
  });

  app.get("/math", function(req, res) {
    res.render("views/math.ejs");
  });


}
