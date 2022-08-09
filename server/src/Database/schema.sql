CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  username VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  password VARCHAR
);

CREATE TABLE drawings (
   id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
   dataURL VARCHAR,
   user_id UUID REFERENCES users(id),
   author VARCHAR,
   isPrivate BOOLEAN,
   timeToDraw INT,
   dateCompleted TIMESTAMP
);

