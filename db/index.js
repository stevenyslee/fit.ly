const pgp = require('pg-promise')();
const { user, host, database, password, port } = require('./../config.js');

const db = pgp({ 
  user,
  host, 
  database,
  password, 
  port
});

const getWorkout = (split, length, cb) => {
  if (split === 'Abs') {
    db.tx(t => {
      const q1 = t.many(`SELECT * FROM abs ORDER BY random() LIMIT $1`, length);
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
      db.tx(t => {
        const q1 = t.one(`SELECT * FROM biceps WHERE type = 'P' ORDER BY random() LIMIT 1`);
        const q2 = t.one(`SELECT * FROM triceps WHERE type = 'P' ORDER BY random() LIMIT 1`);
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
        const q1 = t.one(`SELECT * FROM biceps WHERE type = 'P' ORDER BY random() LIMIT 1`);
        const q2 = t.one(`SELECT * FROM triceps WHERE type = 'P' ORDER BY random() LIMIT 1`);
        const q3 = t.one(`SELECT * FROM biceps WHERE type = 'S' ORDER BY random() LIMIT 1`);
        const q4 = t.one(`SELECT * FROM triceps WHERE type = 'S' ORDER BY random() LIMIT 1`);
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
        const q1 = t.one(`SELECT * FROM biceps WHERE type = 'P' ORDER BY random() LIMIT 1`);
        const q2 = t.one(`SELECT * FROM triceps WHERE type = 'P' ORDER BY random() LIMIT 1`);
        const q3 = t.one(`SELECT * FROM biceps WHERE type = 'S' ORDER BY random() LIMIT 1`);
        const q4 = t.one(`SELECT * FROM triceps WHERE type = 'S' ORDER BY random() LIMIT 1`);
        const q5 = t.one(`SELECT * FROM biceps WHERE type = 'A' ORDER BY random() LIMIT 1`);
        const q6 = t.one(`SELECT * FROM triceps WHERE type = 'A' ORDER BY random() LIMIT 1`);
        return t.batch([q1, q2, q3, q4, q5, q6]);
      })
      .then((data) => {
        cb(data);
      })
      .catch(error => {
        console.log(error);
      });
    }
  } else {
    // Chest, Shoulders, Legs, Back for 2, 4, 6 
    if (length === '2') {
      db.tx(t => {
        const q1 = t.many(`SELECT * FROM $1~ WHERE type = 'P' ORDER BY random() LIMIT 2`, split.toLowerCase());
        return t.batch([q1]);
      })
      .then(([data]) => {
        console.log(data);
        cb(data);
      })
      .catch(error => {
        console.log(error);
      });
    } else if (length === '4') {
      db.tx(t => {
        const q1 = t.many(`SELECT * FROM $1~ WHERE type = 'P' ORDER BY random() LIMIT 2`, split.toLowerCase());
        const q2 = t.many(`SELECT * FROM $1~ WHERE type = 'S' ORDER BY random() LIMIT 2`, split.toLowerCase());
        return t.batch([q1, q2]);
      })
      .then((data) => {
        data = [].concat(...data);
        cb(data);
      })
      .catch(error => {
        console.log(error);
      });
    } else {
      db.tx(t => {
        const q1 = t.many(`SELECT * FROM $1~ WHERE type = 'P' ORDER BY random() LIMIT 2`, split.toLowerCase());
        const q2 = t.many(`SELECT * FROM $1~ WHERE type = 'S' ORDER BY random() LIMIT 2`, split.toLowerCase());
        const q3 = t.many(`SELECT * FROM $1~ WHERE type = 'A' ORDER BY random() LIMIT 2`, split.toLowerCase());
        return t.batch([q1, q2, q3]);
      })
      .then((data) => {
        data = [].concat(...data);
        cb(data);
      })
      .catch(error => {
        console.log(error);
      });
    }
  }
};

module.exports = {
  getWorkout,
};
