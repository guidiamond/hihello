
# Hihello

## Project: IOS Calculator Simulator
This project aims to show the exact value in the terminal as it would in your IOS device if you were to type the exact same keys.

## Available keys:
- `0-9`: numbers
- `c`: clear last value
- `.`: decimal
- `+`: sum
- `-`: subtract
- `*`: multiply
- `/`: divide
- `!`: opposite of last value
- `%`: divide last value by 100
- `=`: result

## Requirements:
- yarn (Tested on: v1.22.18)
- nodeJs (Tested on: v16.14.2)

## How to run:
Type on the terminal the following command:
```yarn start```

## Algorithim showcase (simplification)
```
Input: 3+3-+4!+

After Running the Tokenizer = [3, +, 3, -, +, 4, !, +]

Running the parser (Iterations):
	0: operands=[3]     operators="" 
	1: operands=[3]     operators="+" # OP: 3+0
	2: operands=[3,3]   operators="+"
	3: operands=[6]     operators="-" # OP: 3+3
	4: operands=[6]     operators="+" # OP: 6+0
	5: operands=[6,4]   operators="+"
	5: operands=[6,-4]  operators="+" # Change signal (Caused by !)
	5: operands=[2]     operators="+" # OP: 6 + -4

Notes:
OP: operation caused by change of operator
% and ! act on the last operand
```
