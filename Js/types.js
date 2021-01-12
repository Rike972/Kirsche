//Datentypen

//string
const a = 'Hello world!'
const a1 = 'Michael'
console.log(a) //Expected output:'Hello world!'
console.log(a + a1) //Expected output: 'Hello world!Michael'

const text = `${a} ${a1}`
console.log(text) //Expected output: 'Hello world! Michael

//number
const b = 23
const c =32
console.log(b) //Expected output:23
console.log(b+c) // Expected output : 55

//undefined /null
var d 
console.log(d)
const f = null
console.log(f)

//console.log(g) variable g is undeclared


//array
const arr = ['blau', 'weiss', 'orange']
console.log(arr)
console.log(arr[0])


//object
const person = {
    age: 4,
    name: 'Michael',
    hobbies: ['segeln', 'schlafen', 'Stress machen'],
    paymentMethods: {
        sepa:{
            iban: 'DE12345'
        },
        creditCard: {
            number: '123456',
            expireDate: '03/30',
        }
    }
}

console.log(person.age)
console.log(person.paymentMethods.creditCard.number)


//Object value überschreiben
person.age = 23
console.log(person.age)
console.log(person.buch)  //expected output: 'undefined'
//console.log(person.buch.seite) expected output: 'TypeError: Cannot read property 'seite' of undefined
