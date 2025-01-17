# Unexpected String Concatenation in JavaScript
This example demonstrates a common error in JavaScript stemming from its dynamic typing.  When adding a number and a string, JavaScript performs string concatenation instead of numerical addition. This can lead to unexpected results if not handled carefully.

## Bug
The `foo` function intends to add two numbers. However, due to loose typing, if one of the inputs is a string, JavaScript treats the addition as string concatenation.

## Solution
The solution involves explicitly converting the inputs to numbers using `parseInt()` or `Number()` before performing the addition. This ensures numerical addition regardless of input types.