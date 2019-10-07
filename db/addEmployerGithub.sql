UPDATE employer
SET github = $1
WHERE employer_id = $2
RETURNING *;
