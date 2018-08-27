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

    } else if (length === '4') {

    } else {
      
    }
  } else {

  }
  // let query = `SELECT avatar, username, backer, comment, date_prod FROM comments WHERE comments.projects_id = ${projects_id}`;
  // client.query(query, (err, res) => {
  //   if (err) console.log(err);
  //   cb(res.rows);
  // });
};

module.exports = {
  getWorkout,
};
