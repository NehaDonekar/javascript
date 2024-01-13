//singleton(constructor)
// Object.create

const mySym = Symbol("key1")
//object literals
const JsUser ={
    name:"Neha",
    "full name" :"neha Donekar",
    mySym1 :"myKey2",
    [mySym]:"myKey1",//correct symbol syntax
    age:20,
    location:"Nagpur",
    email:"nehadonekar@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(JsUser.email)//it is not good progr prac
// // console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "neha@gmail.com"
//console.log(JsUser.email)
//Object.freeze(JsUser)
JsUser.email = "neha.sit@gmail.com"
// console.log(JsUser.email)//no change bcoz we freeze the obj
// console.log(JsUser)

JsUser.greeting = function()
{
    console.log("Hello")
}
// console.log(JsUser.greeting)
// console.log(JsUser.greeting())

JsUser.greeting = function()
{
    console.log(`Hello,${this.name}`)
}
// console.log(JsUser.greeting)
// console.log(JsUser.greeting())

// const tinderUser = new Object()//singleton object
// console.log(tinderUser)

const tinderUser ={} // non singleton object
// console.log(tinderUser)
tinderUser.id ="1357"
tinderUser.name ="harshal"
//console.log(tinderUser)

const regularUser = {
    email :"harshal@gmail.com",
    fullname :
    {
        userFullname:
        {
            firstname:"harshal",
            lastname : "patil"
        }
    }
}
console.log(regularUser.fullname.userFullname.firstname)
//merge object
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c"}
const obj3 = {obj1,obj2}
console.log(obj3)

const obj4 = Object.assign(obj1,obj2)//terget on obj1

//const obj4 = Object.assign({},obj1,obj2)//target on empty object
// console.log(obj4)

// console.log(obj4 === obj1 )

const obj5 = {...obj1, ...obj2}//most time usable synatx
// console.log(obj5)

//output in array(easy to loop through)
// console.log(tinderUser);
// console.log(Object.keys(tinderUser))// imp 
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('name'))
// console.log(tinderUser.hasOwnProperty('location'))

const course ={
    coursename:"js ",
    price:"1000"
}

const{price}=course
console.log(price)
//object de-structure
const{price: fees}=course
console.log(fees)

//react method 
// de-structure
// const navbar =({company}) => {

// }

// navbar(company = "Neha")