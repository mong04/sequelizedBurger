CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

CREATE TABLE `burgers` (
    `id` INT(15) AUTO_INCREMENT NOT NULL,
    `burger_name` VARCHAR(25),
    `devoured` BOOLEAN NOT NULL,
    `ts` DATETIME DEFAULT CURRENT_DATE,
    PRIMARY KEY(id)
);