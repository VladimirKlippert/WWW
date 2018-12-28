module.exports = {
    start: function (db, callbacks) {
        db.all("SELECT * FROM entry", [], (err, rows) => {
            if (err) {
                console.error(err);
            }

            callbacks(rows);
        });
    },
};