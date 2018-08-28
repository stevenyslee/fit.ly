const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/:split/:length', (req, res) => {
	const { params } = req;
  db.getWorkout(params.split, params.length, (results) => (res.send(results)));
});

app.listen(3000, () => console.log('listening on port 3000'));
