UPDATE developer
SET username = $1
WHERE developer_id = $2
RETURNING *;
