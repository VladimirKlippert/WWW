const model = require("./model");

module.exports = {
    start: function (db, req, res) {
        model.start(db, (rows) => {
            let array =[];
            rows.forEach(row=>
            {
                array.push ('ID: ' + row.Id + ', Title: ' + row.Title + ', Text: ' + row.Text + ', Date: ' + row.Date );
            });
            res.render('index', {array:array},'');
        });
    },
};