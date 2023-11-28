CREATE TABLE energy_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    timestamp DATETIME,
    kwh DECIMAL(10,2),
    pressure DECIMAL(10,2),
    temperature DECIMAL(10,2)
);

LOAD DATA INFILE '/var/lib/mysql-files/energy_data.csv'
INTO TABLE energy_data
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(@timestamp, kwh, pressure, temperature)  
SET timestamp = STR_TO_DATE(@timestamp, '%d/%m/%Y %H:%i');