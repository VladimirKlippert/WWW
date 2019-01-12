const model = require("./model");


module.exports = {
    start: function (db, req, res) {
        model.start(db, (rows) => {
            let text =[];
            let headline = [];
            let img = [];
            let id = [];
            rows.forEach(row=>
            {
                text.push (row.Text);
                headline.push(row.Title);
                img.push(row.imgid);
                id.push(row.Id);

            });
            res.render('index', {text:text, headline:headline, img:img, id:id},'');
        });
    },

    post: function (db, req, res) {
        let id = Number(req.params.id);
        model.post(db, id, (rows) => {
            let text =[];
            let headline = [];
            let img = [];
            rows.forEach(row=>
            {
                text.push (row.Text);
                headline.push(row.Title);
                img.push(row.imgid);
            });
            res.render('entry', {text:text, headline:headline, img:img, id:id},'');
        });
    },

    edit: function (db, req, res) {
        let id = Number(req.params.id);
        model.post(db, id, (rows) => {
            let text =[];
            let headline = [];
            let img = [];
            rows.forEach(row=>
            {
                text.push (row.Text);
                headline.push(row.Title);
                img.push(row.imgid);
            });
            res.render('editentry', {text:text, headline:headline, img:img, id:id},'');
        });
    },

    contact: function (db, req, res) {
        res.render('kontakt','');
    },

    impressum: function (db, req, res) {
        res.render('impressum','');
    },

    login: function (req, res) {
        res.render('login','');
    },

    info: function (db,req, res) {
        res.render('info','');
    },

};
