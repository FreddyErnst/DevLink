SELECT * FROM devtech
INNER JOIN developer
ON devtech.developer_id = developer.developer_id
WHERE devtech.developer_id = $1;