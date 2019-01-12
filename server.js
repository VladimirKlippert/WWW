//Hausarbeit WWW-Programierung
//Wintersemester 2018/2019
//jaro2158 & vlkl1082 & flbr2986

const express = require("express");
const expressNunjucks = require("express-nunjucks");
const sqlite3 = require("sqlite3");

const controller = require("./src/site/controller");
const formcontroller =require("./src/site/formcontroller")

const app = express();
app.use(express.static("public"));

const port = 3000;
const host = "127.0.0.1";
const isDev = app.get("env") === "development";
const njk = expressNunjucks(app, {
    watch: isDev,
    noCache: isDev,
    autoescape: true
});

app.get("/", function(req, res) {
    const db = new sqlite3.Database("./data/posts.db", err => {
        if (err) {
            console.error(err);
        }
        controller.start(db, req, res);
    });
});

app.get("/entry/:id", function(req, res) {
    const db = new sqlite3.Database("./data/posts.db", err => {
        if (err) {
            console.error(err);
        }
        controller.post(db, req, res);
    });
});

app.get("/contact", function(req, res) {
    const db = new sqlite3.Database("./data/posts.db", err => {
        if (err) {
            console.error(err);
        }
        controller.contact(db, req, res);
    });
});

app.get('/add',function(req, res){
    const db = new sqlite3.Database("./data/posts.db", err => {
        if (err) {
            console.error(err);
        }
    formcontroller.add(db, req, res);
    });
});

app.post('/add',function(req, res){
    const db = new sqlite3.Database("./data/posts.db", err => {
        if (err) {
            console.error(err);
        }
    formcontroller.adddata(db, req, res)
    });
});

app.get('/login',function(req, res){
    controller.login(req, res);
});
app.get('/logout',function(req, res){
    controller.logout(db, req, res);
});
app.get('/impressum',function(req, res){

    const db = new sqlite3.Database("./data/posts.db", err => {
        if (err) {
            console.error(err);
        }
        controller.impressum(db, req, res);
    });
});

app.get('/info',function(req, res){
    const db = new sqlite3.Database("./data/posts.db", err => {
        if (err) {
            console.error(err);
        }
    controller.info(db, req, res);
    });
});

app.use(function (req, res) {
    res.send("404 Not Found, blyat!");
});

app.listen(port, host, () => {
    console.log(`Server (${host}) listening on port ${port}!`);
});