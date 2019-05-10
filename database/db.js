const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'jobsearch'
});

db.connect( err => {
  if (err) throw err;
  console.log('connected to mysql');
});

const getJobs = callback => {
  db.query('SELECT * FROM apps', callback);
};

const addJob = (data, callback) => {
  db.query('INSERT INTO apps (company, applied, sent_app, outreach, sent_email, callback, received) VALUES ? ', [data], callback);
};

const editAppStatus = (status, id, callback) => {
  db.query(`UPDATE apps SET applied = ? WHERE id = ?`, [status], [id], callback);
}

const deleteJob = (id, callback) => {
  db.query('DELETE FROM apps WHERE id = ? ', [id], callback);
};

module.exports = {
  getJobs,
  addJob,
  editAppStatus,
  deleteJob
};