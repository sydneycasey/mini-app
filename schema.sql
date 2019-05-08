CREATE DATABASE IF NOT EXISTS jobsearch;

USE jobsearch;

CREATE TABLE IF NOT EXISTS apps (
  id INT NOT NULL AUTO_INCREMENT,
  company TINYTEXT,
  applied BOOLEAN,
  sent_app DATE,
  outreach BOOLEAN,
  sent_email DATE,
  callback BOOLEAN,
  received DATE,
  PRIMARY KEY (id)
);

