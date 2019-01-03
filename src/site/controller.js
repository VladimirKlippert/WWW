const model = require("./model");


module.exports = {
    start: function (db, req, res) {
        model.start(db, (rows) => {
            let text =[];
            let headline = [];
            rows.forEach(row=>
            {
                text.push (row.Text);


            });
            res.render('index', {text:text},'');
        });
    },

    post: function (db, req, res) {
        let id = Number(req.params.id);
        model.post(db, id, (rows) => {
            let text =[]
            rows.forEach(row=>
            {
                text.push (row.Text);


            });
            res.render('index', {text:text},'');
        });
    },

    contact: function (db, req, res) {
        res.render('kontakt','');
    },

    impressum: function (db, req, res) {
        res.render('impressum','');
    },

};
