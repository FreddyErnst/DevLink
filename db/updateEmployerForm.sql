UPDATE employertech
SET skill1 = $1, skill2 = $2, skill3 = $3, skill4 = $4, experience = $5, joblength = $6,  bio = $7,  state = $8
WHERE employer_id = $9
RETURNING * ;