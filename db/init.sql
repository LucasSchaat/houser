CREATE TABLE IF NOT EXISTS houses (
    id SERIAL PRIMARY KEY,
    propertyName TEXT,
    address TEXT,
    city TEXT,
    state TEXT,
    zip INTEGER
);


-- ALTERATIONS TO TABLE FOR PART 2
ALTER TABLE houses
ADD COLUMN image TEXT,
ADD COLUMN mortgage INTEGER,
ADD COLUMN rent INTEGER;

UPDATE houses
SET image = '',
    mortgage = 0,
    rent = 0;