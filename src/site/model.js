module.exports = {
    start: function (db, callbacks) {
        db.all("SELECT * FROM entry", [], (err, rows) => {
            if (err) {
                console.error(err);
            }

            callbacks(rows);
        });
    },

    post: function (db, callbacks) {
        db.all("SELECT * FROM entry WHERE Id = " + id, [], (err, rows) => {
            if (err) {
                console.error(err);
            }

            callbacks(rows);
        });
    },
};