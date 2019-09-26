INSERT INTO employertech (skill1, skill2, skill3, skill4, experience, joblength, bio, state)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
returning *;