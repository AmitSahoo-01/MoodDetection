//  for register a new user in a website you have to followed these steps.
    --------STEPS----------
1- extract the user details from the user body.
2- Then you have to check any user is already exist with this email-id or username.
3- then you have to check if the user avilable then return a messgae of "user already exist with this email/username".
4- Then you have to hash the password.
5- Then create a user in usermodel using the creadintials.
6- create token using screat key.
7- save it in the cookie.
8- then return a message with user registered successfully.

//  for login a  user in a website you have to followed these steps.
------------STEPS---------
1-  Frist you have to get the user credential from the request body.
2- then you have to check the user by username/email-address, if you not find then you have to show a message of invalid credentials.
3- After find the user then you have to compare the password with the hash password which is save in the database.
4- If password is not match then also you have to send a message that invalid credentials.
5-  After that create token and save it in the cookies.
6-  Then return with user logged in successfully message.

