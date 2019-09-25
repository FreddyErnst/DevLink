INSERT INTO devtech (skill1, skill2, skill3, skill4, experience, joblength, bio)
VALUES ($1, $2, $3, $4, $5, $6, $7)
returning *;