SELECT * FROM developer
INNER JOIN devtech
ON developer.developer_id = devtech.developer_id
WHERE developer.username = $1;