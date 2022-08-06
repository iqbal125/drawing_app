CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  username VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  password VARCHAR
);
