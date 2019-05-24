# write-api-using-nodejs-and-mysql
API implementation in nodejs with mysql.

Technologies _**NodeJS**_, _**mysql**_

To connect mysql with node and write API in nodejs need to follow the following steps.

1. Install Express using the following command
    - _**npm install express**_

2. Install CORS using the following command
    - _**npm install cors**_

3. Install MongoDB using the following command
    - _**npm install mysql**_

4. Change the mysql connection
`var con = mysql.createConnection({`
  `host: "localhost",`
  `user: "root",`
  `password: "password",`
  `database: "Database"`
`});`

5. Run
    - _**node index.js**_

After running above command, We can be able to access the nodejs API with mysql.

### Following are the Examples to access the API
1) GET Method
`URL: http://localhost:8080/posts`
   - This is the simple GET request, Here we are showing all the posts stored in posts collections.


2) POST Method
`URL: http://localhost:8080/posts`
`Parameters: {`
    `"name": "Avadhut"`
    `"title": "Sample Title"`
    `"body": "Sample Post Body"`
`}`
`Headers : `
	`Content-Type: application/json`


3) PUT Method
`URL: http://localhost:8080/posts`
`Parameters: {`
    `"id": 1`
    `"name": "Avadhut"`
    `"title": "Sample Title"`
    `"body": "Sample Post Body"`
`}`
`Headers : `
	`Content-Type: application/json`


4) DELETE Method
`URL: http://localhost:8080/posts/_**PostID**_`

_**Note:**_ _The application that we have developed running on 8080 port._


Here you go,
**Best Luck**
