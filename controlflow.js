let marks=85
if(marks>=90){
    console.log("A+ grade")
}
else if(marks>=80){
    console.log("A grade")
}
else if(marks>=70){
    console.log("B grade")
}
 else {
    console.log("Fail")
}

let day=1
switch(day)
{
    case 1:console.log("monday")
    break
    case 2:console.log("tuesday")
    break
    case 3:console.log("wednesday")
    break
    case 4:console.log("thursday")
    break
    case 5:console.log("friday")
    break
    case 6:console.log("saturday")
    break
    case 7:console.log("sunday")
    break 
    default:console.log("invalid")
    break
}

let num=5
for(i=0;i<num;i++)
{
    console.log(i)
}
let number=5
while(number<6){
    console.log(number)
    number++
}
let colors=["red" ,"blue", "pink"]
for(i=0;i<colors.length;i++)
{
    console.log(colors[i])
}
for(let color of colors)
{
    console.log(color)
}
let person ={
    name:"mouni",
    age:18,
    college:"jntugv"
}
for(let key in person){
    console.log(`${key}: ${person[key]}`)
}


for(let i=5;i>=0;i--)
{
    if(i==3)
  {      continue;
  }
  else if(i==2)
  {
    break;
  }
  console.log(i)
}