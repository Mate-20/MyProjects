Spring Boot Project :

Step 1: Get a random user by calling the above API.
API 1: https://randomuser.me/api
(It calls the first API to fetch a random user)
Note: This API will have details like gender, naƟonality, name(combining first name and last name) and
age. 


Step 2: Get the natonality of the user by providing the name from step 1
API 2: https://api.natonalize.io/?name=Rishaan
(Calling second API to fetch the Nationalities of the user by name)

Step 3: Get the gender of the user by providing the name from step 1
API 3: https://api.genderize.io/?name=Rishaan
(Calling third API to get the gender using name)

NOTE : API2 and API3 are called parallely with the help of executor framework.

We verify Natiaonality of the user from API1 and API2, and verify Gender from API1 and API3. If both of them matches, we mark the user 
as VERIFIED or TO_BE_VERIFIED, and save them to database.