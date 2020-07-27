


SECTION: Comment Your JavaScript Code


CONCEPT:  comments won’t be shown in javascript


DEFINITIONS:  // is an inline comment
			/*    */   will comment out multi lines


OPERATORS: ctrl + / will comment out line


QUIZ QUESTIONS




SECTION: Declare JavaScript Variables

CONCEPTS: Data is anything that is meaningful to the computer

VARIABLE: allows a  computer to store many types of data in a dynamic fashion.  
A label to point to data.

3 ways to declare :

OPERATORS:		Var :  is going to be able to used through your whole program

Let : only used inside of routine

Const : YOU CAN NEVER CHANGE IT.	

DEFINITIONS: 7 types :        Undefined ; hasn’t been defined
				Null: means nothing(set to nothing)
				Boolean: true or false
				String: any sort of text
				Symbol: immutable primitive value that is unique
				Number: is a number
				Object: store a lot of key value pairs.

EXAMPLE:     var name = Steve


QUIZ QUESTIONS





SECTION: Storing Values with the Assignment Operator



CONCEPTS:  Declare a variable     var a;
		Assign a value          var b =2;
= is the assignment operator

DEFINITIONS:


OPERATORS:


QUIZ QUESTIONS:


EXAMPLES:





SECTION: Initializing Variables with the Assignment Operator


CONCEPTS: initializing value when the variable is declared: var a = 9;
	Var a is declaring it
 = 9 is initializing it
(equals sign is the assignment operator)

DEFINITIONS:


OPERATORS:

EXAMPLES:


QUIZ QUESTIONS





SECTION: Understanding Uninitialized Variables



CONCEPTS:	UNINITIALIZED; var a;
		INITIALIZED : var a = 65
				Var b = ‘I am a string’

DEFINITIONS:


OPERATORS:


EXAMPLES:


QUIZ QUESTIONS



SECTION: Understanding Case Sensitivity in Variables


CONCEPTS: CAPITALIZATION MATTERS MUST ALWAYS MATCH


DEFINITIONS: CAMELCASE: first letter of first word is lowercase, any new word is capitalized.


OPERATORS: ProperCamelCase  ………..wrong
		properCamelCase…………….correct


EXAMPLES:


QUIZ QUESTIONS




SECTION: Add Two Numbers with JavaScript

CONCEPTS: USE THE + OPERATOR



DEFINITIONS:


OPERATORS:


EXAMPLES: var sum = 10 + 10
		console.log(sum) will read 20


QUIZ QUESTIONS



SECTION:Subtract One Number from Another with JavaScript



CONCEPTS: USE THE - OPERATOR



DEFINITIONS:


OPERATORS:


EXAMPLES:   var sum = 10 - 10
		console.log(sum) will read 0



QUIZ QUESTIONS


SECTION: Multiply Two Numbers with JavaScript


CONCEPTS: USE THE * OPERATOR



DEFINITIONS:


OPERATORS:


EXAMPLES:   var sum = 10 * 10
		console.log(sum) will read 100



QUIZ QUESTIONS





SECTION: DIVISIONDivide One Number by Another with JavaScript


CONCEPTS: USE THE / OPERATOR



DEFINITIONS:


OPERATORS:


EXAMPLES:   var sum = 10 / 10
		console.log(sum) will read 1



QUIZ QUESTIONS






SECTION: Increment a Number with JavaScript


CONCEPTS:


DEFINITIONS: to INCREMENT a number menas to add “1” to it


OPERATORS: ++


EXAMPLES:   var myVar= 87;
		myVar = myvar +1 ;
	QUICKER WAY	
		myVar++  MEANS MYVAR PLUS ONE

		


QUIZ QUESTIONS



SECTION:Decrement a Number with JavaScript

CONCEPTS :subtracting one

DEFINITIONS:to decrement a number means to subtract “1” from it

OPERATORS:--



EXAMPLES: var myVar = 87;
		myVar = myvar - 1 ;
	QUICKER WAY	
		myVar--  MEANS MYVAR PLUS ONE



QUIZ QUESTIONS




SECTION: Divide One Decimal by Another with JavaScript


CONCEPTS: YOU CAN CREATE DECIMAL NUMBERS


DEFINITIONS:OFTEN REFERRED TO AS FLOATS


OPERATORS:

EXAMPLES: var myVal = 6.7



QUIZ QUESTIONS



SECTION: Multiply Two Decimals with JavaScript



CONCEPTS: this is the same as multiplying two integers


DEFINITIONS:


OPERATORS:


EXAMPLES: var product = 2.0 * 2.5;
		console.log(product) will equal 5


QUIZ QUESTIONS




SECTION: Divide One Decimal by Another with JavaScript


CONCEPTS: 	can divide just like with integers


DEFINITIONS:


OPERATORS:


EXAMPLES: var quotient = 5.0/2.5;

		console.log(quotient) will equal 2



QUIZ QUESTIONS



SECTION: Finding a Remainder in JavaScript


CONCEPTS:


DEFINITIONS: the remainder operator looks like a % sign and it gives the remainder of the division of 2 numbers

Often used to find if number is even or odd
	If you divide by 2 and the remainder is 0, it’s an even number


OPERATORS: %


EXAMPLES: var remainder;
		remainder = 11 % 3;

		console.log(remainder)    will show 2, not answer, just the remainder

		


QUIZ QUESTIONS



SECTION: 	Compound Assignment With Augmented Addition



CONCEPTS: common to want to add a number to a variable after it has been declared and initialized.


DEFINITIONS:


OPERATORS: +=


EXAMPLES: var a = 3;

		A = a + 12;

		So…..a would equal 15

The shorthand for this would be

		A += 12 and would equal 15




QUIZ QUESTIONS



SECTION:Compound Assignment With Augmented Subtraction


CONCEPTS:common to want to subtract  a number to a variable after it has been declared and initialized.



DEFINITIONS:


OPERATORS:-=


EXAMPLES: var a = 12;

		A = a - 3;

		So…..a would equal 9

The shorthand for this would be

		A -= 3 and would also equal 9



QUIZ QUESTIONS




SECTION:Compound Assignment With Augmented Multiplication



CONCEPTS:common to want to multiply  a number to a variable after it has been declared and initialized.



DEFINITIONS:


OPERATORS:


EXAMPLES:var a = 12;

		A = a * 3;

		So…..a would equal 36

The shorthand for this would be

		A *= 3 and would also equal 36




QUIZ QUESTIONS




SECTION:Compound Assignment With Augmented Division



CONCEPTS:common to want to multiply  a number to a variable after it has been declared and initialized.



DEFINITIONS:


OPERATORS:


EXAMPLES:var a = 12;

		A = a /  3;

		So…..a would equal 4

The shorthand for this would be

		A /= 3 and would also equal 4



QUIZ QUESTIONS



SECTION: Declare String Variables

CONCEPTS: any time you have some characters surrounded by quotation marks
		...it’s a string

DEFINITIONS: STRING LITERALS 


OPERATORS: can be single quotation marks, double, or back tics,..it’s a string (they must match)


EXAMPLES: var myString = “this is a string”;


QUIZ QUESTIONS:



SECTION: Escaping Literal Quotes in Strings

CONCEPTS: sometimes your string will need to include quote marks as punctuation


DEFINITIONS:


OPERATORS: ESCAPE CHARACTER place before ignored quotes >>>  \  <<<


EXAMPLES:
var myStr = “ I am a “double quoted” string inside “double quotes””; WRONG
var myStr = “ I am a \“double quoted\” string inside \“double quotes\””;  Correct



QUIZ QUESTIONS:


SECTION: Quoting Strings with Single Quotes

CONCEPTS: rather than use escape character use mixture of single and double quotes


DEFINITIONS:


OPERATORS:


EXAMPLES: ‘ I am a “double quoted” string inside “double quotes”’

If you need to show both double quote and single quotes inside of your string, use back tics  `:
` ‘ I am a “double quoted” string inside “double quotes”’`




QUIZ QUESTIONS:


SECTION: Escape Sequences in Strings

CONCEPTS:there are other things you can escape out besides double quotes


DEFINITIONS:\’  single quote
		\”  double quote
		\\  backslash
\n  newline
\r  carriage return
\t  tab
\b  backspace
\f  form feed

		


OPERATORS:


EXAMPLES: var myStr = “Firstline\n\t\\SecondLine\ThirdLine”


QUIZ QUESTIONS:


SECTION: Concatenating Strings with Plus Operator

CONCEPTS: add things together


DEFINITIONS:


OPERATORS:


EXAMPLES: var ourString = ‘ I come first’ + ‘I come second’;


QUIZ QUESTIONS:


SECTION: Concatenating Strings with the Plus Equals Operator

CONCEPTS: can also use the += operator
		Just like the += operator above you can use it as a shorthand to add onto an existing value. 


DEFINITIONS:


OPERATORS:


EXAMPLES: var ourString = ‘I come first.”
		ourString += ‘I come second.

console.log(ourString)     will be……” I come first. I come Second.”




QUIZ QUESTIONS:


SECTION: Constructing Strings with Variables

CONCEPTS: You can concatenate strings together with variables


DEFINITIONS:


OPERATORS:


EXAMPLES:   var ourName = “freecodecamp”;
		Var ourStr = “hello, our name is” + ourName + “ how are you?”

		console.log(ourName);       gets you “ hello our name is free code camp how are you?”


QUIZ QUESTIONS:


SECTION: Appending Variables to Strings

CONCEPTS:make a variable equal a string then use that variable to add the string to another variable. 


DEFINITIONS:


OPERATORS:


EXAMPLES: var anAdjective = ‘awesome’;
		Var ourString = “ freecodecamp is”;

		ourStr += anAdjective;


		Console.log(ourStr);   reads ‘freecodecamp is awesome’
		


QUIZ QUESTIONS:


SECTION: Find the Length of a String

CONCEPTS:finding the length of a string


DEFINITIONS:use the .length property


OPERATORS:


EXAMPLES: var firstNameLenght = 0;
		Var firstName = ‘ada’;

fristNameLength = fristName.length;

console.log(firstNameLength);   wil return 3 


QUIZ QUESTIONS:


SECTION: Use Bracket Notation to Find the First Character in a String

CONCEPTS: bracket notation indexes start at 0 and count up, not 1. 


DEFINITIONS:BRACKET NOTATION is a way to get a CHARACTER AT A SPECIFIC INDEX WITHIN A STRING.


OPERATORS:


EXAMPLES: 


QUIZ QUESTIONS:


SECTION: Understand String Immutability

CONCEPTS:strings are immutable, meaning they can not be altered once created. This doesn’t mean that they can be changed.


DEFINITIONS:


OPERATORS:


EXAMPLES:var myStr = “Jello world”;

		Can’t go in and change the J to H, must change the whole thing.

		myStr = “Hello World”;


QUIZ QUESTIONS:


SECTION: Use Bracket Notation to Find the Nth Character in a String

CONCEPTS:you can use Bracket Notation to get any character position in a string


DEFINITIONS:


OPERATORS:


EXAMPLES:

var firstLetterOf FirstName = “”;
Var firstName = ‘ade’;

  firstLetterOf FirstName =firstName[2];
console.log(firstLetterOf FirstName)  will return e




QUIZ QUESTIONS:


SECTION: Use Bracket Notation to Find the Last Character in a String

CONCEPTS:


DEFINITIONS:


OPERATORS: [variable.length -1 ]

EXAMPLES:  var firstname = “ada”;
		Var lastLetter = firstName[firstname.length - 1]

We use -1 because we start on 0

		console.log(lastLetter)   will return the second a
QUIZ QUESTIONS:


SECTION: Use Bracket Notation to Find the Nth-to-Last Character in a String

CONCEPTS: you can do third to last or second to last just depending on the - value


DEFINITIONS:


OPERATORS:


EXAMPLES: var firstName = “ada”;
		Var thirdToLast = firstname[firstname.length - 3];
 console.log (firstname) should give you d because it would be the 2nd value.


QUIZ QUESTIONS:


SECTION: Word Blanks

CONCEPTS:


DEFINITIONS:


OPERATORS:


var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";
 
var wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";


QUIZ QUESTIONS:


SECTION: Store Multiple Values in one Variable using JavaScript Arrays

CONCEPTS: ARRAYS let you store several pieces of data in one place. Arrays are placed in between [ ] brackets.


DEFINITIONS: Elements are the things inside of the Array and can be any data type.


OPERATORS:


EXAMPLES: var ourArray = [‘john’, 4, 8];   john and numbers are elements.


QUIZ QUESTIONS:


SECTION: Nest one Array within Another Array

CONCEPTS:


DEFINITIONS: When one of the elements inside of an array is an array, that is called a nested array.


OPERATORS:


EXAMPLES: var ourArray = [[“bulls”, 2], [“tim”,3]];


QUIZ QUESTIONS:


SECTION: Access Array Data with Indexes

CONCEPTS: You can use bracket notation to find values within an array.


DEFINITIONS:


OPERATORS:


EXAMPLES: var ourArray = [50,60,70]
		Var ourData = ourArray[0]; //equals 50


QUIZ QUESTIONS:


SECTION: Modify Array Data With Indexes

CONCEPTS: You can use array indexes to modify arrays


DEFINITIONS:


OPERATORS:


EXAMPLES:  var  ourArray = [18, 19, 20];
		Var ourArray[1] = 45; // ourArray now equals [18,45,20];


QUIZ QUESTIONS:


SECTION: Access Multi-Dimensional Arrays With Indexes

CONCEPTS:you can also use bracket notation to select a value in a  multi-dimensional array.


DEFINITIONS:


OPERATORS:multiple bracket notation


EXAMPLES:
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[0][0]; //equals 1
 
 
 



QUIZ QUESTIONS:


SECTION: Manipulate Arrays With push()

CONCEPTS:

DEFINITIONS:Append data to end of an array with the push function



OPERATORS: .push()


EXAMPLES

:var arr1 = [1,2,3];
arr1.push(4);
// arr1 is now [1,2,3,4]

var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
// arr2 now equals ["Stimpson", "J", "cat", ["happy", "joy"]]



QUIZ QUESTIONS:


SECTION: Manipulate Arrays With pop()

CONCEPTS: you can remove an item form an array with the pop function.


DEFINITIONS:


OPERATORS:


EXAMPLES:
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();

// one down will equal [6]      and threeArr will equal [1,4]


console.log(oneDown); // Returns 6
console.log(threeArr); // Returns [1, 4]



QUIZ QUESTIONS:


SECTION: Manipulate Arrays With shift()

CONCEPTS:


DEFINITIONS:.shift removes the first element of the array 


OPERATORS:


EXAMPLES:
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].



QUIZ QUESTIONS:


SECTION: Manipulate Arrays With unshift()

CONCEPTS:


DEFINITIONS:.unshift adds an element to the beginning of an array


OPERATORS:


EXAMPLES:
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]



QUIZ QUESTIONS:


SECTION: Shopping List

CONCEPTS:


DEFINITIONS:


OPERATORS:


EXAMPLES:



QUIZ QUESTIONS:


SECTION: Write Reusable JavaScript with Functions

CONCEPTS:functions allow us to write reusable code in javascript


DEFINITIONS:


OPERATORS:

EXAMPLES:
 function ourReusableFunction() {
console.log(“hi world”);
}

//Function must be called to run
ourReusableFunction();




QUIZ QUESTIONS:



SECTION: Passing Values to Functions with Arguments

CONCEPTS:


DEFINITIONS:Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "passed") into a function when it is called are known as arguments.


OPERATORS:


EXAMPLES:
Here is a function with two parameters, param1 and param2:
function testFun(param1, param2) {
  console.log(param1, param2);
}
testFun(1,7)  // returns 1,7

function testFun(param1, param2) {
  console.log(param1 + param2);
}
testFun(1,7)  // returns 8


QUIZ QUESTIONS:


SECTION: Global Scope and Functions

CONCEPTS:


DEFINITIONS:Variables which are defined outside of a function block have Global scope.

scope refers to the visibility of variables. Global means they can be seen                                                 everywhere in your code

		Variables which are defined outside of a function block have global scope

Variables defined within the function have local scope which means that they are only visible from within the function






OPERATORS:


EXAMPLES:


QUIZ QUESTIONS:


SECTION: Global vs. Local Scope in Functions

CONCEPTS:It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.


DEFINITIONS:



OPERATORS:


EXAMPLES:

var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}

The function myFun will return "Head" because the local version of the variable is present.



QUIZ QUESTIONS:


SECTION: Return a Value from a Function with Return

CONCEPTS: you can return a value from a function with a RETURN statement


DEFINITIONS:We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.


OPERATORS:Return


EXAMPLES:
function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5); // 8

plusThree takes an argument for num and returns a value equal to num + 3.



QUIZ QUESTIONS:


SECTION: Understanding Undefined Value returned from a Function

CONCEPTS:A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.


DEFINITIONS:


OPERATORS:


EXAMPLES:
var sum = 0;
function addSum(num) {
  sum = sum + num;
}
addSum(3); // sum will be modified but returned value is undefined


QUIZ QUESTIONS:
















SECTION: Assignment with a Returned Value

CONCEPTS:it’s simple to assign a returned value to a variable


DEFINITIONS:


OPERATORS:


EXAMPLES:

Var changed = 0

Function change(num) {
Return (num + 5) /3;
}

Changed = change(10)// returns 5


QUIZ QUESTIONS:


SECTION: Stand in Line

CONCEPTS:In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.


DEFINITIONS:a queue is an abstract Data Structure where items are kept in order.


OPERATORS:


EXAMPLES:
function nextInLine(arr, item) {
  arr.push(item);
  var removed = arr.shift();
  return removed; 



QUIZ QUESTIONS:


SECTION: Understanding Boolean Values

CONCEPTS:another data type, only 2 values, true or false.


DEFINITIONS:


OPERATORS:Boolean values are never written with quotes. The strings "true" and "false" are not Boolean and have no special meaning in JavaScript.


EXAMPLES:


QUIZ QUESTIONS:


SECTION: Use Conditional Logic with If Statements

CONCEPTS:If statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. 


DEFINITIONS:These conditions are known as Boolean conditions and they may only be true or false.
When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.



OPERATORS:


EXAMPLES:

function test (myCondition) {
  if (myCondition) {
     return "It was true";
  }
  return "It was false";
}
test(true);  // returns "It was true"
test(false); // returns "It was false"



QUIZ QUESTIONS:


SECTION: Comparison with the Equality Operator

CONCEPTS:There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.


DEFINITIONS:


OPERATORS:The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent or false if they are not. Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left.


EXAMPLES:

function equalityTest(myVal) {
  if (myVal == 10) {
     return "Equal";
  }
  return "Not Equal";
}
If myVal is equal to 10, the equality operator returns true, so the code in the curly braces will execute, and the function will return "Equal". Otherwise, the function will return "Not Equal".



QUIZ QUESTIONS:


SECTION: Comparison with the Strict Equality Operator

CONCEPTS:Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.


DEFINITIONS:


OPERATORS:===


EXAMPLES:
3 ===  3   // true
3 === '3'  // false



QUIZ QUESTIONS:


SECTION: Practice comparing different values

CONCEPTS:remember that == will compare a number to a string
		=== will not 


DEFINITIONS:


OPERATORS:


EXAMPLES:


QUIZ QUESTIONS:


SECTION: Comparison with the Inequality Operator

CONCEPTS:The inequality operator (!=) is the opposite of the equality operator. It means "Not Equal" and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing


DEFINITIONS: (!=) is the opposite of the equality operator. It means "Not Equal"


OPERATORS: !=


EXAMPLES:
1 !=  2     // true
1 != "1"    // false
1 != '1'    // false
1 != true   // false
0 != false  // false



QUIZ QUESTIONS:


SECTION: Comparison with the Strict Inequality Operator

CONCEPTS:The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. Strict inequality will not convert data types.


DEFINITIONS:


OPERATORS: !==


EXAMPLES:
3 !==  3   // false
3 !== '3'  // true
4 !==  3   // true


QUIZ QUESTIONS:


SECTION: Comparison with the Greater Than Operator

CONCEPTS:The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.


DEFINITIONS:


OPERATORS: >


EXAMPLES:
5   >  3   // true
7   > '3'  // true
2   >  3   // false
'1' >  9   // false





QUIZ QUESTIONS:


SECTION: Comparison with the Greater Than Or Equal To Operator

CONCEPTS:The greater than or equal to operator (>=) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns true. Otherwise, it returns false.


DEFINITIONS:


OPERATORS:>=


EXAMPLES:
6   >=  6   // true
7   >= '3'  // true
2   >=  3   // false
'7' >=  9   // false



QUIZ QUESTIONS:


SECTION: Comparison with the Less Than Operator

CONCEPTS:The less than operator (<) compares the values of two numbers. If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false. Like the equality operator, less than operator converts data types while comparing.


DEFINITIONS:


OPERATORS:<


EXAMPLES:
2   < 5  // true
'3' < 7  // true
5   < 5  // false
3   < 2  // false
'8' < 4  // false





QUIZ QUESTIONS:


SECTION: Comparison with the Less Than Or Equal To Operator

CONCEPTS:The less than or equal to operator (<=) compares the values of two numbers. If the number to the left is less than or equal to the number to the right, it returns true. If the number on the left is greater than the number on the right, it returns false. Like the equality operator, less than or equal to converts data types.


DEFINITIONS:


OPERATORS:<=


EXAMPLES:
4   <= 5  // true
'7' <= 7  // true
5   <= 5  // true
3   <= 2  // false
'8' <= 4  // false



QUIZ QUESTIONS:


SECTION: Comparisons with the Logical And Operator

CONCEPTS:

Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.


DEFINITIONS:


OPERATORS: &&   tests both things to the sides of it


EXAMPLES:
if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";

will only return "Yes" if num is greater than 5 and less than 10. The same logic can be written as:
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";





QUIZ QUESTIONS:


SECTION:Comparisons with the Logical Or Operator

CONCEPTS:The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.


DEFINITIONS:The logical or operator is composed of two pipe symbols: (||). This can typically be found between your Backspace and Enter keys.

OPERATORS: ||


EXAMPLES:
if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";

will return "Yes" only if num is between 5 and 10 (5 and 10 included). The same logic can be written as:
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";



QUIZ QUESTIONS:



SECTION:Introducing Else Statements

CONCEPTS:When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an else statement, an alternate block of code can be executed.


DEFINITIONS:


OPERATORS:


EXAMPLES:

if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}



QUIZ QUESTIONS:


SECTION:Introducing Else If Statements

CONCEPTS:If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.

Chaining together if else statements


DEFINITIONS:


OPERATORS:


EXAMPLES:
if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}



QUIZ QUESTIONS:


SECTION:Logical Order in If Else Statements

CONCEPTS:Order is important in if, else if statements.
The function is executed from top to bottom so you will want to be careful of what statement comes first.

Once the first condition is met it will stop running

DEFINITIONS:


OPERATORS:


EXAMPLES:
function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}

And the second just switches the order of the statements:
function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}



QUIZ QUESTIONS:


SECTION:Chaining If Else Statements

CONCEPTS:if/else statements can be chained together for complex logic. Here is pseudocode of multiple chained if / else if statements:


DEFINITIONS:


OPERATORS:


EXAMPLES:
if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}



QUIZ QUESTIONS:




SECTION:Golf Code

CONCEPTS:


DEFINITIONS:


OPERATORS:


EXAMPLES:


QUIZ QUESTIONS:


SECTION:Selecting from Many Options with Switch Statements

CONCEPTS:If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements which define various possible values. Statements are executed from the first matched case value until a break is encountered.


DEFINITIONS:


OPERATORS:case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed.

EXAMPLES:
function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return "gamma";
      break;
    case 4:
      return "delta";
      break;
  }
 
  // Only change code above this line
  return answer;




QUIZ QUESTIONS:


SECTION:Adding a Default Option in Switch Statements

CONCEPTS:In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the default statement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/else chain.


DEFINITIONS:


OPERATORS:


EXAMPLES:
function switchOfStuff(val) {
  var answer = "";
 
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
  }
 
  return answer;
}




QUIZ QUESTIONS:


SECTION:Multiple Identical Options in Switch Statements

CONCEPTS:
If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. If you have multiple inputs with the same output, you can represent them in a switch statement like this:


DEFINITIONS:


OPERATORS:


EXAMPLES:
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}

Cases for 1, 2, and 3 will all produce the same result.




QUIZ QUESTIONS:


SECTION:Replacing If Else Chains with Switch

CONCEPTS:
If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements. The following:


DEFINITIONS:


OPERATORS:


EXAMPLES:
if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
can be replaced with:
switch(val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";



QUIZ QUESTIONS:


SECTION:Returning Boolean Values from Functions

CONCEPTS:You may recall from Comparison with the Equality Operator that all comparison operators return a boolean true or false value.
Sometimes people use an if/else statement to do a comparison, like this:



DEFINITIONS:


OPERATORS:


EXAMPLES:
function isEqual(a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

But there's a better way to do this. Since === returns true or false, we can return the result of the comparison:
function isEqual(a,b) {
  return a === b;
}
This will return a true or false without typing that into your code.



QUIZ QUESTIONS:


SECTION:Return Early Pattern for Functions

CONCEPTS:
When a return statement is reached, the execution of the current function stops and control returns to the calling location.


DEFINITIONS:


OPERATORS:


EXAMPLES:
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();

The above outputs "Hello" to the console, returns "World", but "byebye" is never output, because the function exits at the return statement.



QUIZ QUESTIONS:


SECTION:Build JavaScript Objects

CONCEPTS:
You may have heard the term object before.
Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.  
Properties are everything before the colons
Values are after the colons
 
 



DEFINITIONS:


OPERATORS:


EXAMPLES:
var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};



QUIZ QUESTIONS:


SECTION:Accessing Object Properties with Dot Notation

CONCEPTS:There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.
Dot notation is what you use when you know the name of the property you're trying to access ahead of time.



DEFINITIONS:


OPERATORS:


EXAMPLES:
var myObj = {
  prop1: "val1",
  prop2: "val2"
};
var prop1val = myObj.prop1; // val1
var prop2val = myObj.prop2; // val2



QUIZ QUESTIONS:


SECTION:Accessing Object Properties with Bracket Notation

CONCEPTS:
The second way to access the properties of an object is bracket notation ([]). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.


DEFINITIONS:


OPERATORS:


EXAMPLES:
var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};
myObj["Space Name"]; // Kirk
myObj['More Space']; // Spock
myObj["NoSpace"];    // USS Enterprise



QUIZ QUESTIONS:


SECTION:Accessing Object Properties with Variables

CONCEPTS:
Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.


DEFINITIONS:


OPERATORS:


EXAMPLES:
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
var playerNumber = 16; 
var player = testObj[playerNumber]; 
 
Made playerNumber equal to 16 and thusly equal to “montana”


QUIZ QUESTIONS:


SECTION:Updating Object Properties

CONCEPTS:
After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable. You can use either dot or bracket notation to update.


DEFINITIONS:


OPERATORS:


EXAMPLES:
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
ourDog.name = "Happy Camper";   dot notation
ourDog["name"] = "Happy Camper";  bracket notation



QUIZ QUESTIONS:


SECTION:Add New Properties to a JavaScript Object

CONCEPTS:
You can add new properties to existing JavaScript objects the same way you would modify them.
Here's how we would add a "bark" property to ourDog:
ourDog.bark = "bow-wow";
or
ourDog["bark"] = "bow-wow";



DEFINITIONS:


OPERATORS:


EXAMPLES:
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";



QUIZ QUESTIONS:


SECTION:Delete Properties from a JavaScript Object

CONCEPTS:
We can also delete properties from objects like this:
delete ourDog.bark;



DEFINITIONS:


OPERATORS: delete


EXAMPLES:
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;
Removes value pair for “bark”


QUIZ QUESTIONS:


SECTION:Using Objects for Lookups

CONCEPTS:Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to "lookup" values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range.


DEFINITIONS:


OPERATORS:


EXAMPLES:
var alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};
alpha[2]; // "Y"
alpha[24]; // "C"

var value = 2;
alpha[value]; // "Y"





QUIZ QUESTIONS:


SECTION:Testing Objects for Properties

CONCEPTS:
Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.


DEFINITIONS:


OPERATORS:hasOwnProperty()


EXAMPLES:
var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");    // true
myObj.hasOwnProperty("middle"); // false



QUIZ QUESTIONS:



SECTION:Manipulating Complex Objects

CONCEPTS
:Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.


DEFINITIONS:


OPERATORS:


EXAMPLES:
var ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];
You can store arrays strings other objects


QUIZ QUESTIONS:


SECTION:Accessing Nested Objects

CONCEPTS:
The sub-properties of objects can be accessed by chaining together the dot and or bracket notation.


DEFINITIONS:


OPERATORS:


EXAMPLES:
var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
ourStorage.cabinet["top drawer"].folder2;  // "secrets"
ourStorage.desk.drawer; // "stapler"



QUIZ QUESTIONS:


SECTION:Accessing Nested Arrays

CONCEPTS:
As we have seen in earlier examples, objects can contain both nested objects and nested arrays. Similar to accessing nested objects, Array bracket notation can be chained to access nested arrays.


DEFINITIONS:


OPERATORS:


EXAMPLES:
var ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];
ourPets[0].names[1]; // "Fluffy"
ourPets[1].names[0]; // "Spot"



QUIZ QUESTIONS:


SECTION:Record Collection

CONCEPTS:


DEFINITIONS:


OPERATORS:


EXAMPLES:


QUIZ QUESTIONS:


SECTION:Iterate with JavaScript While Loops

CONCEPTS:
You can run the same code multiple times by using a loop.

The first type of loop we will learn is called a while loop because it runs "while" a specified condition is true and stops once that condition is no longer true.



DEFINITIONS:


OPERATORS:while


EXAMPLES:
var ourArray = [];

var i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}
In the code example above, the while loop will execute 5 times and append the numbers 0 through 4 to ourArray.
Let's try getting a while loop to work by pushing values to an array.




QUIZ QUESTIONS:


SECTION:Iterate with JavaScript For Loops

CONCEPTS:
You can run the same code multiple times by using a loop.
The most common type of JavaScript loop is called a for loop because it runs "for" a specific number of times.
DEFINITIONS:
For loops are declared with three optional expressions separated by semicolons:
for ([initialization]; [condition]; [final-expression])
The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.
The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When condition is false at the start of the iteration, the loop will stop executing. This means if condition starts as false, your loop will never execute.
The final-expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter.



OPERATORS:


EXAMPLES:In the following example we initialize with i = 0 and iterate while our condition i < 5 is true. We'll increment i by 1 in each loop iteration with i++ as our final-expression.
var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

ourArray will now contain [0,1,2,3,4].




QUIZ QUESTIONS:


SECTION:Iterate Odd Numbers With a For Loop

CONCEPTS:For loops don't have to iterate one at a time. By changing our final-expression, we can count by even numbers.
We'll start at i = 0 and loop while i < 10. We'll increment i by 2 each loop with i += 2.



DEFINITIONS:


OPERATORS:


EXAMPLES:
var ourArray = [];
for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

ourArray will now contain [0,2,4,6,8]
If you start at i = 1 and go up by 2 it will ba odd numbers.



QUIZ QUESTIONS:


SECTION:Count Backwards With a For Loop

CONCEPTS:
A for loop can also count backwards, so long as we can define the right conditions.


DEFINITIONS:


OPERATORS:


EXAMPLES:
We'll start at i = 10 and loop while i > 0. We'll decrement i by 2 each loop with i -= 2.
var ourArray = [];
for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
ourArray will now contain [10,8,6,4,2]
 
var ourArray = [];
for (var i = 9; i > 0; i -= 2) {
  ourArray.push(i);
[9,7,5,3,1].


 



QUIZ QUESTIONS:



SECTION:Iterate Through an Array with a For Loop

CONCEPTS:
A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a for loop. 

DEFINITIONS:


OPERATORS:


EXAMPLES:
This code will output each element of the array arr to the console:
var arr = [10, 9, 8, 7, 6];
for (var i = 0; i < arr.length; i++) {
   console.log(arr[i]);
Remember that arrays have zero-based indexing, which means the last index of the array is length - 1. Our condition for this loop is i < arr.length, which stops the loop when i is equal to length. In this case the last iteration is i === 4 i.e. when i becomes equal to arr.length and outputs 6 to the console.




QUIZ QUESTIONS:


SECTION:Nesting For Loops

CONCEPTS:2.18.22


DEFINITIONS:


OPERATORS:


EXAMPLES:


QUIZ QUESTIONS:


SECTION:Iterate with JavaScript Do...While Loops

CONCEPTS:


DEFINITIONS:


OPERATORS:


EXAMPLES:


QUIZ QUESTIONS:


SECTION:Replace Loops using Recursion

CONCEPTS:


DEFINITIONS:


OPERATORS:


EXAMPLES:


QUIZ QUESTIONS:


SECTION:Profile Lookup

CONCEPTS:


DEFINITIONS:


OPERATORS:


EXAMPLES:


QUIZ QUESTIONS:


SECTION:Generate Random Fractions with JavaScript

CONCEPTS:


DEFINITIONS:


OPERATORS:


EXAMPLES:


QUIZ QUESTIONS:


SECTION:Generate Random Whole Numbers with JavaScript

CONCEPTS:


DEFINITIONS:


OPERATORS:


EXAMPLES:


QUIZ QUESTIONS:


SECTION:Generate Random Whole Numbers within a Range

CONCEPTS:


DEFINITIONS:


OPERATORS:


EXAMPLES:


QUIZ QUESTIONS:


SECTION:

CONCEPTS:


DEFINITIONS:


OPERATORS:


EXAMPLES:


QUIZ QUESTIONS:


SECTION:Use the parseInt Function

CONCEPTS:


DEFINITIONS:


OPERATORS:


EXAMPLES:


QUIZ QUESTIONS:


SECTION:Use the parseInt Function with a Radix

CONCEPTS:


DEFINITIONS:


OPERATORS:


EXAMPLES:


QUIZ QUESTIONS:


SECTION:Use the Conditional (Ternary) Operator

CONCEPTS:


DEFINITIONS:


OPERATORS:


EXAMPLES:


QUIZ QUESTIONS:


SECTION:Use Recursion to Create a Countdown

CONCEPTS:


DEFINITIONS:


OPERATORS:


EXAMPLES:


QUIZ QUESTIONS:


SECTION:Use Recursion to Create a Range of Numbers

CONCEPTS:


DEFINITIONS:


OPERATORS:


EXAMPLES:


QUIZ QUESTIONS:


SECTION:

CONCEPTS:


DEFINITIONS:


OPERATORS:


EXAMPLES:


QUIZ QUESTIONS:


SECTION:

CONCEPTS:


DEFINITIONS:


OPERATORS:


EXAMPLES:


QUIZ QUESTIONS:


SECTION:

CONCEPTS:


DEFINITIONS:


OPERATORS:


EXAMPLES:


QUIZ QUESTIONS:


SECTION:

CONCEPTS:


DEFINITIONS:


OPERATORS:


EXAMPLES:


QUIZ QUESTIONS:


SECTION:

CONCEPTS:


DEFINITIONS:


OPERATORS:


EXAMPLES:


QUIZ QUESTIONS:


SECTION:

CONCEPTS:


DEFINITIONS:


OPERATORS:


EXAMPLES:


QUIZ QUESTIONS:











