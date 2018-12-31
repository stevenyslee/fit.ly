const { Client } = require('pg');
const pgp = require('pg-promise')();
const { user, host, database, password, port } = require('./../config.js');

const db = pgp({ 
  user,
  host, 
  database,
  password, 
  port
});

const client = new Client({ 
  user,
  host, 
  database,
  password, 
  port
});

client.connect();

client.on('error', (err) => {
  console.error('An idle client has experienced an error', err.stack);
});

const getWorkout = (split, length, cb) => {
  let exercises = [];

  if (split === 'Abs') {
    db.tx(t => {
      const q1 = t.many(`SELECT * FROM abs ORDER BY random() LIMIT $1`, [length]);
      return t.batch([q1]);
    })
    .then(([data]) => {
      cb(data);
    })
    .catch(error => {
      console.log(error);
    });
  } else if (split === 'Fullbody') {
    if (length === '2') {
      db.tx(t => {
        const q1 = t.one(`SELECT * FROM chest WHERE type = 'P' ORDER BY random() LIMIT 1`);
        const q2 = t.one(`SELECT * FROM legs WHERE type = 'P' ORDER BY random() LIMIT 1`);
        return t.batch([q1, q2]);
      })
      .then((data) => {
        cb(data);
      })
      .catch(error => {
        console.log(error);
      });
    } else if (length === '4') {
      db.tx(t => {
        const q1 = t.one(`SELECT * FROM chest WHERE type = 'P' ORDER BY random() LIMIT 1`);
        const q2 = t.one(`SELECT * FROM legs WHERE type = 'P' ORDER BY random() LIMIT 1`);
        const q3 = t.one(`SELECT * FROM shoulders WHERE type = 'P' ORDER BY random() LIMIT 1`);
        const q4 = t.one(`SELECT * FROM back WHERE type = 'P' ORDER BY random() LIMIT 1`);
        return t.batch([q1, q2, q3, q4]);
      })
      .then((data) => {
        cb(data);
      })
      .catch(error => {
        console.log(error);
      });
    } else {
      db.tx(t => {
        const q1 = t.one(`SELECT * FROM chest WHERE type = 'P' ORDER BY random() LIMIT 1`);
        const q2 = t.one(`SELECT * FROM legs WHERE type = 'P' ORDER BY random() LIMIT 1`);
        const q3 = t.one(`SELECT * FROM shoulders WHERE type = 'P' ORDER BY random() LIMIT 1`);
        const q4 = t.one(`SELECT * FROM back WHERE type = 'P' ORDER BY random() LIMIT 1`);
        const q5 = t.one(`SELECT * FROM triceps WHERE type = 'P' ORDER BY random() LIMIT 1`);
        const q6 = t.one(`SELECT * FROM biceps WHERE type = 'P' ORDER BY random() LIMIT 1`);
        return t.batch([q1, q2, q3, q4, q5, q6]);
      })
      .then((data) => {
        cb(data);
      })
      .catch(error => {
        console.log(error);
      });
    }
  } else if (split === 'Arms') {
    if (length === '2') {
      let bicepsQuery = `SELECT * FROM biceps WHERE type = 'P' ORDER BY random() LIMIT 1`
      let tricepsQuery = `SELECT * FROM triceps WHERE type = 'P' ORDER BY random() LIMIT 1`

      client.query(bicepsQuery, (err, res) => {
        if (err) console.log(err);
        exercises = exercises.concat(res.rows);
        client.query(tricepsQuery, (err, res) => {
          if (err) console.log(err);
          exercises = exercises.concat(res.rows);
          cb(exercises);
        });
      });
    } else if (length === '4') {
      let bicepsQuery1 = `SELECT * FROM biceps WHERE type = 'P' ORDER BY random() LIMIT 1`
      let tricepsQuery1 = `SELECT * FROM triceps WHERE type = 'P' ORDER BY random() LIMIT 1`
      let bicepsQuery2 = `SELECT * FROM biceps WHERE type = 'S' ORDER BY random() LIMIT 1`
      let tricepsQuery2 = `SELECT * FROM triceps WHERE type = 'S' ORDER BY random() LIMIT 1`

      client.query(bicepsQuery1, (err, res) => {
        if (err) console.log(err);
        exercises = exercises.concat(res.rows);
        client.query(tricepsQuery1, (err, res) => {
          if (err) console.log(err);
          exercises = exercises.concat(res.rows);
          client.query(bicepsQuery2, (err, res) => {
            if (err) console.log(err);
            exercises = exercises.concat(res.rows);
            client.query(tricepsQuery2, (err, res) => {
              if (err) console.log(err);
              exercises = exercises.concat(res.rows);
              cb(exercises);
            });
          });
        });
      });
    } else {
      let bicepsQuery1 = `SELECT * FROM biceps WHERE type = 'P' ORDER BY random() LIMIT 1`
      let tricepsQuery1 = `SELECT * FROM triceps WHERE type = 'P' ORDER BY random() LIMIT 1`
      let bicepsQuery2 = `SELECT * FROM biceps WHERE type = 'S' ORDER BY random() LIMIT 1`
      let tricepsQuery2 = `SELECT * FROM triceps WHERE type = 'S' ORDER BY random() LIMIT 1`
      let bicepsQuery3 = `SELECT * FROM biceps WHERE type = 'A' ORDER BY random() LIMIT 1`
      let tricepsQuery3 = `SELECT * FROM triceps WHERE type = 'A' ORDER BY random() LIMIT 1`

      client.query(bicepsQuery1, (err, res) => {
        if (err) console.log(err);
        exercises = exercises.concat(res.rows);
        client.query(tricepsQuery1, (err, res) => {
          if (err) console.log(err);
          exercises = exercises.concat(res.rows);
          client.query(bicepsQuery2, (err, res) => {
            if (err) console.log(err);
            exercises = exercises.concat(res.rows);
            client.query(tricepsQuery2, (err, res) => {
              if (err) console.log(err);
              exercises = exercises.concat(res.rows);
              client.query(bicepsQuery3, (err, res) => {
                if (err) console.log(err);
                exercises = exercises.concat(res.rows);
                client.query(tricepsQuery3, (err, res) => {
                  if (err) console.log(err);
                  exercises = exercises.concat(res.rows);
                  cb(exercises);
                });
              });
            });
          });
        });
      });
    }
  } else {
    // Chest, Shoulders, Legs, Back for 2, 4, 6 
    if (length === '2') {
      let query = `SELECT * FROM ${split} WHERE type = 'P' ORDER BY random() LIMIT 2`

      client.query(query, (err, res) => {
        if (err) console.log(err);
        exercises = exercises.concat(res.rows);
        cb(exercises);
      });
    } else if (length === '4') {
      let query1 = `SELECT * FROM ${split} WHERE type = 'P' ORDER BY random() LIMIT 2`
      let query2 = `SELECT * FROM ${split} WHERE type = 'S' ORDER BY random() LIMIT 2`

      client.query(query1, (err, res) => {
        if (err) console.log(err);
        exercises = exercises.concat(res.rows);
        client.query(query2, (err, res) => {
          if (err) console.log(err);
          exercises = exercises.concat(res.rows);
          cb(exercises);
        });
      });
    } else {
      let query1 = `SELECT * FROM ${split} WHERE type = 'P' ORDER BY random() LIMIT 2`
      let query2 = `SELECT * FROM ${split} WHERE type = 'S' ORDER BY random() LIMIT 2`
      let query3 = `SELECT * FROM ${split} WHERE type = 'A' ORDER BY random() LIMIT 2`

      client.query(query1, (err, res) => {
        if (err) console.log(err);
        exercises = exercises.concat(res.rows);
        client.query(query2, (err, res) => {
          if (err) console.log(err);
          exercises = exercises.concat(res.rows);
          client.query(query3, (err, res) => {
            if (err) console.log(err);
            exercises = exercises.concat(res.rows);
            cb(exercises);
          });
        });
      });
    }
  }
};

module.exports = {
  getWorkout,
};
