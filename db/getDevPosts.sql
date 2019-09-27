SELECT * FROM developer
inner join devtech
ON developer.developer_id = devtech.developer_id
WHERE skill1 = $1 or skill2 = $1 or skill3 = $1 or skill4 = $1;
