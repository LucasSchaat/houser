INSERT INTO houses (propertyName, address, city, state, zip)
VALUES ('Triplex', '4567 S Road St', 'Orem', 'UT', 84097),
        ('Duplex', '456 E Bakers St.', 'Salt Lake City', 'UT', 84091)
RETURNING *;
