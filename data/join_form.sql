-- studentsforelectricbuses/join_form

CREATE TABLE join_form(
    id SERIAL PRIMARY KEY,
    date_submitted TIMESTAMP, --utc
    name VARCHAR(128) NOT NULL,
    email VARCHAR(256),
    school_name VARCHAR(256),
    num_buses VARCHAR(32), --approximate
    why_you_want_to_join TEXT
);

SELECT * FROM join_form;

INSERT INTO join_form (date_submitted, name, email, school_name, num_buses, why_you_want_to_join)
VALUES
    ();

