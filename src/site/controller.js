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
            rows.forEach(row=>
            {
                text.push (row.Text);

            });
            res.render('entry', {text:text},'');
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


};
