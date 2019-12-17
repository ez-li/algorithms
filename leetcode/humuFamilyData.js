/*
humu test, ingest family data csv
id,name,gender,birth,death,parent1,parent2
today's date

return
id,name,gender,birth,death,parent1,parent2,age,descendants

needed to
calculate age in days, if have a valid birthdate
use date of death or today's date

calculate number of descendants
used recursive function to add count to id's parents, if valid parent id

return as array of strings
*/