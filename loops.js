//High order array loops
//for of

//["", "", ""]
//[{}, {}, {}]

const arr =[1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
    
}

// Maps
//for-of loop
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('IN',"India")

for (const key of map) {
    console.log(key)
}

for (const [key,value] of map) {
    console.log(key, ':-' ,value)
}

console.log(`value of key is : ${map.get('IN')}`)
//object is not iterable by for-of loop

//object
//for-in loop

const myObject ={
    js : 'javascript',
    cpp: 'C++',
    swift:'swift by apple'
}

for (const key in myObject) {
    //console.log(key);
    console.log(`${key} key is for ${myObject[key]}`);

}

//array
const programming = ["js", "rb" , "py"]

for(const key in programming)
{
    // console.log(key)
    //expected output : 0,1,2 #because array key is fixed
    console.log(programming[key]);
}

//map is not iterable by for-in loop

//for each

const coding =["js", "rb" , "py"]
//arraow function
coding.forEach( (val)=>{console.log(val)});
//CallBackFunction
coding.forEach(function (val){
    console.log(val);
})


function Display(coding){
    console.log(coding);
}
coding.forEach(Display)


coding.forEach((val ,index,arr) =>{console.log(val,index,arr)})


//[{},{}]

const StuInfo =[
    {
        Name: "Neha",
        RollNo : 1,
    },
    {
        Name:"Harshal",
        RollNo : 2,
    }
]

StuInfo.forEach((val) => {console.log(val.Name)});