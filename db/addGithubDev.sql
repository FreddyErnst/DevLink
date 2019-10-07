UPDATE developer
SET github = $1
WHERE developer_id = $2
RETURNING *;
