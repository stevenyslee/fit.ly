const { Client } = require('pg');

const client = new Client({
  user: 'Steven',
  host: 'localhost',
  database: 'fitness',
  password: 'password',
  port: 5432,
});

client.connect();

client.on('error', (err) => {
  console.error('An idle client has experienced an error', err.stack);
});

const getWorkout = (split, length, cb) => {
  let exercises = [];
  if (split === 'Abs') {
    let query = `SELECT * FROM abs ORDER BY random() LIMIT ${length}`
    client.query(query, (err, res) => {
      if (err) console.log(err);
      cb(res.rows);
    });
  } else if (split === 'Fullbody') {
    if (length === '2') {
      let chestQuery = `SELECT * FROM chest WHERE type = 'P' ORDER BY random() LIMIT 1`
      let legsQuery = `SELECT * FROM legs WHERE type = 'P' ORDER BY random() LIMIT 1`

      client.query(chestQuery, (err, res) => {
        if (err) console.log(err);
        exercises = exercises.concat(res.rows);
        client.query(legsQuery, (err, res) => {
          if (err) console.log(err);
          exercises = exercises.concat(res.rows);
          cb(exercises);
        });
      });
    } else if (length === '4') {
      let chestQuery = `SELECT * FROM chest WHERE type = 'P' ORDER BY random() LIMIT 1`
      let legsQuery = `SELECT * FROM legs WHERE type = 'P' ORDER BY random() LIMIT 1`
      let shouldersQuery = `SELECT * FROM shoulders WHERE type = 'P' ORDER BY random() LIMIT 1`
      let backQuery = `SELECT * FROM back WHERE type = 'P' ORDER BY random() LIMIT 1`

      client.query(chestQuery, (err, res) => {
        if (err) console.log(err);
        exercises = exercises.concat(res.rows);
        client.query(legsQuery, (err, res) => {
          if (err) console.log(err);
          exercises = exercises.concat(res.rows);
          client.query(shouldersQuery, (err, res) => {
            if (err) console.log(err);
            exercises = exercises.concat(res.rows);
            client.query(backQuery, (err, res) => {
              if (err) console.log(err);
              exercises = exercises.concat(res.rows);
              cb(exercises);
            });
          });
        });
      });
    } else {
      let chestQuery = `SELECT * FROM chest WHERE type = 'P' ORDER BY random() LIMIT 1`
      let legsQuery = `SELECT * FROM legs WHERE type = 'P' ORDER BY random() LIMIT 1`
      let shouldersQuery = `SELECT * FROM shoulders WHERE type = 'P' ORDER BY random() LIMIT 1`
      let backQuery = `SELECT * FROM back WHERE type = 'P' ORDER BY random() LIMIT 1`
      let tricepsQuery = `SELECT * FROM triceps WHERE type = 'P' ORDER BY random() LIMIT 1`
      let bicepsQuery = `SELECT * FROM biceps WHERE type = 'P' ORDER BY random() LIMIT 1`

      client.query(chestQuery, (err, res) => {
        if (err) console.log(err);
        exercises = exercises.concat(res.rows);
        client.query(legsQuery, (err, res) => {
          if (err) console.log(err);
          exercises = exercises.concat(res.rows);
          client.query(shouldersQuery, (err, res) => {
            if (err) console.log(err);
            exercises = exercises.concat(res.rows);
            client.query(backQuery, (err, res) => {
              if (err) console.log(err);
              exercises = exercises.concat(res.rows);
              client.query(tricepsQuery, (err, res) => {
                if (err) console.log(err);
                exercises = exercises.concat(res.rows);
                client.query(bicepsQuery, (err, res) => {
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
