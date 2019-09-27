DELETE FROM devtech
WHERE developer_id = $1;
DELETE FROM developer
where developer_id = $1;