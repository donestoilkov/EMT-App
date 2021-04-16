INSERT INTO country (continent, name)
VALUES ('Europe', 'Great Britain');

INSERT INTO country (continent, name)
VALUES ('Europe', 'Macedonia');

INSERT INTO country (continent, name)
VALUES ('North America', 'USA');

INSERT INTO author (name, surname, country_id)
VALUES ('Ernest', 'Hemingway', (SELECT id FROM country WHERE country.name = 'USA'));

INSERT INTO author (name, surname, country_id)
VALUES ('Blazhe', 'Koneski', (SELECT id FROM country WHERE country.name = 'Macedonia'));

INSERT INTO author (name, surname, country_id)
VALUES ('William', 'Shakespeare', (SELECT id FROM country WHERE country.name = 'Great Britain'));

INSERT INTO book (available_copies, category, name, author_id)
VALUES ('4', 'THRILLER', 'Hamlet', (SELECT id FROM author WHERE author.name = 'William'));

INSERT INTO book (available_copies, category, name, author_id)
VALUES ('3', 'HISTORY', 'Teskoto', (SELECT id FROM author WHERE author.name = 'Blazhe'));

INSERT INTO book (available_copies, category, name, author_id)
VALUES ('6', 'BIOGRAPHY', 'The old man and the sea', (SELECT id FROM author WHERE author.name = 'Ernest'));

INSERT INTO book (available_copies, category, name, author_id)
VALUES ('5', 'DRAMA', 'Romeo and Juliet ', (SELECT id FROM author WHERE author.name = 'William'));

INSERT INTO book (available_copies, category, name, author_id)
VALUES ('2', 'CLASSICS', 'Poems', (SELECT id FROM author WHERE author.name = 'Blazhe'));

INSERT INTO book (available_copies, category, name, author_id)
VALUES ('8', 'FANTASY', 'A farewell to arms', (SELECT id FROM author WHERE author.name = 'Ernest'));

INSERT INTO book (available_copies, category, name, author_id)
VALUES ('15', 'BIOGRAPHY', 'Macbeth', (SELECT id FROM author WHERE author.name = 'William'));

INSERT INTO book (available_copies, category, name, author_id)
VALUES ('1', 'NOVEL', 'For whom the bell tolls', (SELECT id FROM author WHERE author.name = 'Ernest'));