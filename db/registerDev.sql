INSERT INTO developer
(username, password, firstname, lastname, email)
VALUES
($1, $2, $3, $4, $5)

RETURNING*;