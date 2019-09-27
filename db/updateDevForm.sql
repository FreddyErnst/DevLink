UPDATE devtech
SET skill1 = $1, skill2 = $2, skill3 = $3, skill4 = $4, experience = $5, joblength = $6,  bio = $7,  state = $8
WHERE developer_id= $9
RETURNING * ;