module.exports = function(app, passport, db) {

//main page routes
//dont want to require signup to use site
  app.get( "/", function(req, res){
    res.render("index.html");
  });

  app.get("/info", isLogged, function(req, res) {
    db.collection("userInfo").find().toArray((err, result) => {
      if (err) return console.log(err)
      res.render("views/login.ejs", {

      })
    })
  });

  app.get("/science", function(req, res) {
    res.render("sci.ejs");
  });
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
