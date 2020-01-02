-- https://www.db-fiddle.com/

CREATE TABLE note (
  id integer primary key autoincrement,
  title varchar(50) not null,
  content text
);

INSERT INTO note (title,content) VALUES ('note title 1', 'note content 1');
INSERT INTO note (title,content) VALUES ('note title 2', 'note content 2');
INSERT INTO note (id,title,content) VALUES (5,'note title 3', 'note content 3');
INSERT INTO note (title,content) VALUES ('note title 4', 'note content 4');
INSERT INTO note (title,content) VALUES ('note title 5', 'note content 5');
