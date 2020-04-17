var express = require('express');
var app = express();app.set('view engine', 'ejs');
module.exports = function(app, passport, db) {

//main page routes
//dont want to require signup to use site
  app.get( "/", function(req, res){
    db.collection("stats").find().toArray((err, result) => {
      if (err) return console.log(err)
      res.render("index.ejs", {
        stats: result
      })
    })
  });

  app.get("/info", function(req, res) {
    db.collection("userInfo").find().toArray((err, result) => {
      if (err) return console.log(err)
      res.render("login.ejs")
    })
  });

  app.get( "/sci", function(req, res){
    db.collection("comments").find().toArray((err, result) => {
      if (err) return console.log(err)
      res.render("sci.ejs", {
        comments: result
      })
    })
  });
  // app.get( "/3D", function(req, res){
  //   db.collection("stats").find().toArray((err, result) => {
  //     if (err) return console.log(err)
  //     res.render("three.ejs", {
  //       stats: result
  //     })
  //   })
  // });


  app.post("/comments", (req, res) => {
    db.collection("comments").save({msg: req.body.msg}, (err, result) => {
      if (err) return console.log(err)
      console.log("saved to DB")
      res.redirect("/sci")
      console.log(req);
    })
  })

  app.get("/tech", function(req, res) {
    console.log(req, res);
    res.render("tech.ejs");
  });

  app.get("/engineering", function(req, res) {
    res.render("engi.ejs");
  });

  app.get("/math", function(req, res) {
    res.render("math.ejs");
  });


}
