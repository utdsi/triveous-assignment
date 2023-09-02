# triveous-assignment
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

## Product
#### Add Product
```` javascript
  POST https://kind-lime-bass-tam.cyclic.app/addProducts
  ````
```` javascript
  {
 title:string (required)
 category:string (required)
 description:string (required)
 price:Number (required)
 category:String
}

  ````
Role: seller

```` javascript
return res.status(201).send({ msg: "product addedd successfully" })
res.status(500).send({ msg: "something went wrong try again " })
````
#### GetProduct By Category
```` javascript
  GET https://kind-lime-bass-tam.cyclic.app/getProductsByCategory
  ````


  

```` javascript
res.status(200).send({ products: products })
res.status(500).send({ msg: "something went wrong try again " })
````

#### GetProduct By id
```` javascript
  GET https://kind-lime-bass-tam.cyclic.app/getproductById
  ````


  

```` javascript
res.status(200).send({ products: products })
res.status(500).send({ msg: "something went wrong try again " })
````

#### Remove Product

```` javascript
  DELETE https://kind-lime-bass-tam.cyclic.app/RemoveProducts
  ````


  

```` javascript
res.status(201).send({ msg: " Product has been removed" });
res.status(500).send({ msg: "something went wrong try again " })
````

#### Update Product

```` javascript
  PATCH https://kind-lime-bass-tam.cyclic.app/updateProducts
  ````


  

```` javascript
res.status(201).send({ msg: " Product has been updated" });
res.status(500).send({ msg: "something went wrong try again " })
````

## Cart
#### Add to Cart
```` javascript
  POST https://kind-lime-bass-tam.cyclic.app/AddToCart
  ````



  

```` javascript
res.status(204).send({ "msg": "product already exist in your cart" })
res.status(500).send({ msg: "something went wrong try again " })
res.status(201).send({ msg: "product has been added in cart" });
````

#### Remove From Cart

```` javascript
  DELETE https://kind-lime-bass-tam.cyclic.app/RemoveFromCart
  ````



  

```` javascript
res.status(204).send({ msg: "product has been removed from cart" });
res.status(500).send({ msg: "something went wrong try again " })

````

#### Update Cart Product 
```` javascript
  PATCH https://kind-lime-bass-tam.cyclic.app/UpdateCartProduct 
  ````



  

```` javascript
res.status(204).send({ msg: "product has been updated in cart" });
res.status(500).send({ msg: "something went wrong try again " })

````

#### Get Cart Products

```` javascript
  GET https://kind-lime-bass-tam.cyclic.app/GetCartProducts
  ````



  

```` javascript
res.status(200).send(AllCartProducts);
res.status(500).send({ msg: "something went wrong try again " })

````

## Order
#### Order place
```` javascript
  POST https://kind-lime-bass-tam.cyclic.app/Orderplaced
  ````



  

```` javascript
res.status(201).send({ "msg": "order has been placed" })
res.status(500).send({ msg: "something went wrong try again " })

````

#### Get All Order History
```` javascript
  GET https://kind-lime-bass-tam.cyclic.app/GetAllOrderHistory
  ````



  

```` javascript
res.status(200).send(AllOrderProducts)
res.status(500).send({ msg: "something went wrong try again " })

````

#### Get User History
```` javascript
  GET https://kind-lime-bass-tam.cyclic.app/GetparticularUserHistory
  ````



  

```` javascript
res.status(200).send(UserOrderHistory)
res.status(500).send({ msg: "something went wrong try again " })
res.status(404).send({ "msg": "Did not placed any order" })

````


















  




 
