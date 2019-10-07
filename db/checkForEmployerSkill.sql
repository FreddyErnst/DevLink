SELECT * FROM employer
INNER JOIN employertech
ON employer.employer_id = employertech.employer_id
WHERE employer.username = $1;