UPDATE employer
SET email = $1
WHERE employer_id = $2
RETURNING *;