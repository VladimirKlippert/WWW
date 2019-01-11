const model = require("./model");

module.exports = {
    add: function (db, req, res) {
        res.render('addentry', '');
    },

    adddata: function (db, req, res) {
        model.addData(db, redirectHome, req, res);
    },
};

redirectHome = function(res){
    res.redirect('/');
};