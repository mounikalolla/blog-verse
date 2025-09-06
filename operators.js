let a=10,b=15
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a**b)

//assignment
let c=5
c+=3
console.log(c)
c-=3
console.log(c)
c*=4
console.log(c)
c/=1
console.log(c)
c%=2
console.log(c)

//comparison
let x=10,y="10"
console.log(x==y)
console.log(x!=y)
console.log(x===y)
console.log(x!==y)
console.log(x>=y)
console.log(x<=y)
console.log(x<y)
console.log(x>y)

//logical
let age=20
console.log(age>=20 && age<=40)
console.log(age<20 || age>10)
console.log(!(age<18))

//string
let firstname="mouni"
let lastname="Lolla"
let fullname=firstname+" "+lastname
console.log(fullname)
let correctName=`hello ${firstname} ${lastname},welcome`
console.log(correctName)

//ternary
let myAge=19
if(myAge>=18){
    console.log("ELIGIBLE TO VOTE")

}
else{
    console.log("not eligible to vote")
}
let result=myAge>=18 ? "eligible to vote":"not eligible to vote"
console.log(result)

//increment
let count=5
console.log(count++)
console.log(count)
console.log(++count)
console.log(count--)

//typeof
console.log(typeof count)
console.log(typeof "mouni")
console.log(typeof 18)