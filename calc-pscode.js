// The Odin Project: Foundations - Project: Calculator Pseudocode
/*
Pseudocode and steps per Instructions

1) Start by creating functions for math operators; Add, Subtract, Multiply, and Divide, then test them in the browser's console
    1a) write a number array that contains 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    1b) write a function for each math operators
        1c) this function will look into the number array 

2) Create new function "operate" that takes an operator and 2 numbers and then calls one of the above functions on the numbers
    2a) math operator (a, b)
        2b) return a " + - * / " b
            2c) example:
                    const add = function(Num1, Num2) {
                        const newNum = Num1 + Num2;
                        return Num1 + Num2;
                    };

3) Draft up a calculator design
    *Assign class/id to each button*
    *Each button will have an addEventListener "click"*

	3a) Numeric buttons 0 through 9
        3b) Assign each button a numeric value 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ~ same as numeric array

	3c) Operator buttons: Add | Subtract | Multiply | Divide
	3d) Equal button
	3e) Clear button
	3f) Create a calculator display needed for steps 4 and 5
        3e) Will need to research this once since I don't think I have displayed results in anything else other than Alert or console.log

4)Create the functions that populate the display when you click the number buttons… you should be storing the ‘display value’ in a variable somewhere for use in the next step.
    4a) Function will create a new array?

5) You’ll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen and then 
   operate() on them when the user presses the “=” key. 
    5a) You should already have the code that can populate the display, so once operate() has been called, update the display with the ‘solution’ to the operation.
*/