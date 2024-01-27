//this only use in object
const user ={
    username:"Neha",
    price:100,

    welcomeMessage :function()
    {
        console.log(`${this.username}, welcome to website`);

        console.log(this);
    }
}

user.welcomeMessage();

user.username = "Harshal"
user.welcomeMessage();

// function newFun(){
//     // console.log(this);
//     let username ="Diyansh"
//     console.log(this.username);
// }
// newFun()

// const newFun = function(){
//     let username ="Diyansh"
//     console.log(this.username);
// }

// newFun()

// const newFun = ()=>{
//     let username ="Diyansh"
//     console.log(this.username);
// }

// newFun()
