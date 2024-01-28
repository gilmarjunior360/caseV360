CREATE TABLE lists (
    id SERIAL PRIMARY KEY,
    title varchar(60) NOT NULL
);

CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title varchar(60) NOT NULL,
    status varchar(60) NOT NULL,
    list_id INTEGER NOT NULL,
    CONSTRAINT fk_tasks_list_id FOREIGN KEY (list_id) REFERENCES lists(id)
);