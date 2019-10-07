SELECT * from devtech 
INNER JOIN developer
ON devtech.developer_id = developer.developer_id
WHERE skill1 = $1
AND state = $2;