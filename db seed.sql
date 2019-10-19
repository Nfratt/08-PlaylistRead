DROP DATABASE IF EXISTS playlist_db;

CREATE DATABASE playlist_db;

USE playlist_db;

CREATE TABLE songs (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NULL,
  artist VARCHAR(50) NULL,
  genre VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre)
VALUES ("Hard Times", "Paramore", "Alt-Rock");

INSERT INTO songs (title, artist, genre)
VALUES ("New Rules", "DUA LIPA", "POP");

INSERT INTO songs (title, artist, genre)
VALUES ("Truth Hurts", "Lizzo", "HIP HOP");
SELECT * FROM `songs`;
