﻿# triveous-assignment
This repository contains API documentation for Triveous E-commerce-backend
# Tech-Stack-Used
<p align = "center">
<img src="https://github.com/PrinceCorwin/Useful-tech-icons/blob/main/images/HTML.png" alt="html" width="55" height="55"/>
<img src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" width="50" height="55"/>
<img src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="js" width="50" height="50"/>
<img src="https://raw.githubusercontent.com/PrinceCorwin/Useful-tech-icons/main/images/nodejs.png" alt="nodejs" width="50" height="50"/>
<img src="https://res.cloudinary.com/kc-cloud/images/f_auto,q_auto/v1651772163/expressjslogo/expressjslogo.webp?_i=AA" alt="express" width="50" height="50"/>
<img src="https://raw.githubusercontent.com/PrinceCorwin/Useful-tech-icons/main/images/mongodb-leaf.png" alt="mongo" width="50" height="50"/> 
<img src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png" alt="npm" width="50" height="50"/>
  
</p>


# API Endpoints
  #### Home
  ```` javascript
  GET https://kind-lime-bass-tam.cyclic.app
  ````
  ## User

  #### Signup
  ```` javascript
  POST https://kind-lime-bass-tam.cyclic.app/signUp
  ````
````javascript
  {
    name: string (required),
    email: demoo@gmail.com in email format (required),
    password: 123456,
    role: (admin seller or default customer)
  }
````
```` javascript
200 (Ok): { msg: "user already exist" }
201 (ok): { msg: "signup has been done"}
````

#### Login
```` javascript
  POST https://kind-lime-bass-tam.cyclic.app/logIn
  ````
````javascript
  {
    
    email: demoo@gmail.com in email format (required),
    password: 123456,
    
  }
````
```` javascript
200 (Ok): { msg: "login successful", token }
401 (account does not exists): {msg: 'user not found'  }
````
#### Logout
```` javascript
  POST https://kind-lime-bass-tam.cyclic.app/logout
  ````
````javascript

```` javascript
res.status(200).send({ msg: "logout successfull" });
res.status(500).send({ msg: "something went wrong" });
````
#### Delete user

```` javascript
  Delete https://kind-lime-bass-tam.cyclic.app/user
  ````

Role:Admin

```` javascript
res.status(204).send({ "msg": "user has been deleted" })
res.status(500).send({ msg: "something went wrong" });
````






  




 
