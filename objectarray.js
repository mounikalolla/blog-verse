let person={
    name:"mouni",
    age:18,
    college:"jntu"
}
console.log(person.name)
console.log(person["age"])

const {name,age}=person;  //destructing assingment
console.log(name)
console.log(age)

let fruits=["apple","mango","banana"]
console.log(fruits[1])
 let numbers=[1,2,3,4,5]
  //aray manipulations
 let square=numbers.map((num)=>num*num);
 console.log(square)

 let evens=numbers.filter((num)=>num%2==0)
 console.log(evens)

 let sum=numbers.reduce((present,num)=>present+num,0)
 console.log(sum)  

let persons=[{name:"mouni",marks:90},{name:"pravali",marks:85},{name:"haari",marks:80}]
console.log(persons[0])
let max=0
let topper=""
for(person of persons)
{
    if(person.marks>max)
{
    max=person.marks
    topper=person.name
}
}
console.log(`topper is ${topper} and she got ${max}`)

