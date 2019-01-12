module.exports = {
    start: function (db, callbacks) {
        db.all("SELECT * FROM entry", [], (err, rows) => {
            if (err) {
                console.error(err);
            }

            callbacks(rows);
        });
    },

    post: function (db, id, callbacks) {
        db.all("SELECT * FROM entry WHERE Id = " + id, [], (err, rows) => {
            if (err) {
                console.error(err);
            }

            callbacks(rows);
        });
    },

    addData: function (db,next, req,res){
        sql = "INSERT INTO eintrag (Title, Text, Date) VALUES ($headline, $text, $date)";
        db.run(sql,{$headline: req.body.headline, $text:req.body.text, $date:req.body.date}, function(err){
            if(err) throw err;
            next(res);
        })

    },
};