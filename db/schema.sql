CREATE DATABASE burgers_db,
USE burgers_db,

CREATE TABLE burger (
    id INTEGER(200)AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN NOT NULL,
    date TIMESTAMP DEFAULT now(),
    PRIMARY KEY (id)
);
    
