CREATE DATABASE IF NOT EXISTS app_db;
USE app_db;

CREATE TABLE messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  content VARCHAR(255) NOT NULL
);

INSERT INTO messages (content) VALUES ('Hello from the database!');
