// const userEmail = "-0"// truthy value
const userEmail = []
if(userEmail)
{
    console.log("Got user Email")
}
else 
{
    console.log("Don't  have user email")
}

if(userEmail.length === 0)
{
    console.log("Array is empty")
}

const emptyObj ={}

if(Object.keys(emptyObj).length==0)
{
    console.log("Object is empty")
}

//Nullish Coalescing operator(??):null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 10
val1 = null ?? 10 ?? 20 

//terniary operator

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
