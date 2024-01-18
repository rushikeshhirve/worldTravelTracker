CREATE TABLE countries (
    id serial primary key,
    country_code char(2),
    country_name varchar(100)
);

CREATE TABLE visited_countries (
    id serial primary key,
    country_code char(2) not null unique,
    country_name varchar(100)
);

