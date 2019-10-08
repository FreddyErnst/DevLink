DELETE FROM employertech
WHERE employer_id = $1;
DELETE FROM employer
where employer_id = $1;