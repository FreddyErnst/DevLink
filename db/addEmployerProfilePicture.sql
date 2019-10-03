UPDATE employer
SET profilepic = $1
WHERE employer_id = $2
RETURNING *;