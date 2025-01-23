// Numeric Types:

// Declare a variable age of type number and assign it a value of 25.
let age:number = 25;
// Declare a variable largeNumber of type bigint and assign it a value of 9007199254740991n.
let largeNumber:bigint = 9007199254740991n;
// String Type:

// Declare a variable name of type string and assign it a value of "John Doe".
{
      let name : string ="John Doe";
}

// Boolean Type:
// Declare a variable isStudent of type boolean and assign it a value of true.
let isStudent:boolean =true;
// Array Types:

// Declare a variable scores of type number[] and assign it an array of numbers [85, 90, 95].
let scores : number[] = [85, 90, 95];
// Declare a variable colors of type string[] and assign it an array of strings ["red", "green", "blue"].
let colors : string[] =["red", "green", "blue"];
// Declare a variable answers of type boolean[] and assign it an array of booleans [true, false, true].
let answers : boolean[] =[true, false, true];

// Tuple Type:

// Declare a variable person of type [string, number] and assign it a tuple ["Alice", 30].
let person : [string,number] = ['Alice',30];
// Enum Type:

// Declare an enum Direction with members North, East, South, and West.
enum Direction {
      North ='North',
      East ='East',
      South ='South',
      West ='West'
}
// Declare a variable currentDirection of type Direction and assign it the value Direction.North.
let currentDirection:Direction =Direction.North;
// Any Type:

// Declare a variable randomValue of type any and assign it a value of "Hello".
let  randomValue:any="Hello";
// Void Type:

// Declare a function logMessage that returns void and takes a parameter message of type string. The function should log the message to the console.
function logMessage(message:string):void {
      console.log(message);
}
// Null and Undefined Types:

// Declare a variable emptyValue of type null and assign it a value of null.
let emptyValue: null =null;
// Declare a variable notAssigned of type undefined and assign it a value of undefined.
let notAssigned: undefined =undefined;
// Function Declarations: Define functions with parameter and return type annotations:
function Declarations():void{
      console.log('kuch bhi')
}

// Function Parameters: Declare parameters with type annotations.
// Return Types: Specify return types for functions.
// Object Types: Define object types using interfaces and type aliases:

// Interface: Create interfaces to define object shapes with specific properties and types.
// Type Alias: Use type aliases to create custom type names for complex data structures.