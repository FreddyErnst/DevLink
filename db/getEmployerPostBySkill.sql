SELECT * from employertech
INNER JOIN employer
ON employertech.employer_id = employer.employer_id
WHERE skill1 = $1;