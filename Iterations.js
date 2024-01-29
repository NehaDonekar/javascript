//for 

let myArray = [10,20,30]
// console.log(`Length of array is : ${myArray.length}`)
for(let i = 0; i<myArray.length ; i++)
{
    const element = myArray[i];
    // console.log(element);
}

//break and continue keywords

console.log("for continue  keyword : ")
for(let i = 1 ; i<=20 ; i++)
{
    if(i == 5)
    {
        console.log("detected 5 ok ok continue but this condition skipped")
        continue;
    }
    console.log(i);
}
console.log("\n")

console.log("for break keyword : ")

for(let i = 1 ; i<=20 ; i++)
{
    if(i == 5)
    {
        console.log("detected 5 now break")
        break;
    }
    console.log(i);
}
console.log("\n")

console.log("normal condition for : ")
for(let i = 1 ; i<=20 ; i++)
{
    if(i == 5)
    {
        console.log("detected 5")
    }
    console.log(i);
}
console.log("\n")


