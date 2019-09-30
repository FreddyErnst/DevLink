UPDATE developer
SET profilepic = $1
WHERE developer_id = $2
RETURNING *