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
        sql = `INSERT INTO entry (Id, Title, Text, Date) VALUES ($id, $headline, $text, $date)`;


    },
};