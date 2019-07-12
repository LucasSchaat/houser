CREATE TABLE IF NOT EXISTS houses (
    id SERIAL PRIMARY KEY,
    propertyName TEXT,
    address TEXT,
    city TEXT,
    state TEXT,
    zip INTEGER
);