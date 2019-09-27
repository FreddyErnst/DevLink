UPDATE employer
SET username = $1
WHERE employer_id = $2
RETURNING *;