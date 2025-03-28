console.log("Let's Play with Types in TypeScript")

interface ProcessDataType {
    (input: string | number[]): string | number
}

const processData: ProcessDataType = (input) => {
    if (typeof input === "string") {
        return input.toLowerCase()
    } else {
        const result = input.length ? input.reduce((a, b) => a + b) : 0;
        return result
    }
}


let strLower = processData("AREEB SHEIKH")
let numSum = processData([1,2,3,4,5,6,7,8,9,10])

console.log(strLower)
console.log(numSum)