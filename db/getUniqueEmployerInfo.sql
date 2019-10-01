SELECT * from employertech
INNER JOIN employer
ON employertech.employer_id = employer.employer_id
WHERE employertech.employer_id = $1;