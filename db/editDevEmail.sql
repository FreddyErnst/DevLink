UPDATE developer
SET email = $1
WHERE developer_id = $2
RETURNING *;