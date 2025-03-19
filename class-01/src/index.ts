console.log("Hello TypeScript")

let fullname: string = "Areeb Sheikh"

let num: number = 10

let arrStr: string[] = ["areeb","Ali"]
let arrNum: number[] = [10,20]
let unionArr: (string | number)[] = ["Areeb", 20]

function sayHello(name: string, age: number){
    console.log("Hello", name, age)
}

sayHello("areeb", 20)