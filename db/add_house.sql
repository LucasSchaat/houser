INSERT INTO houses (propertyName, address, city, state, zip)
VALUES ($1,$2, $3, $4, $5);

SELECT *
FROM houses;