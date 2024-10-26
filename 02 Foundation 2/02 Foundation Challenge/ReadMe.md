## Coding Challenge #1 &mdash;

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function `calcAverage` to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function `checkWinner` that takes the average score of each team as parameters
   (`avgDolphins` and `avgKoalas`), and then logs the winner to the console, together with the victory points, according to the rule above, Example: "Koalas win (30 vs. 13)".
4. Use the "checkWInner" function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

<br />

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas socre 65, 54 and 49.

TEST DATA 2: Dolphins score 85, 54 and 41. Koalas socre 23, 34 and 27.

> HINT: To calculate average of 3 values, add them all together and divide by 3

> HINT: To check if number A is at least double number B, check for A >= 2 \* B. Apply this to the team's average scores 😊

GOOD LUCK 😊

## Coding Challenge #2 &mdash;

Steven is still building this tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%

1. Write a funciton `calcTip` that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! SO create an array `bills` containing the test data below.
3. Create an array `tips` containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array `total` Containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

## Coding Challenge #3 &mdash;

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height \* 2 = mass / (height \* height ). [mass in kg height in meter]

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)

2. Create a `calcBMI` method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.

3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

TEST DATA: Marks weight 78kg and is 1.60m tall. Jhon weight 92kg and is 1.95m tall.

GOOD LUCK 😊

## Coding Challenge #4 &mdash;

Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array `bills` containing all 10 test bill values
2. Create emptry arrays for the tips and the totals ('tips' and 'totals')
3. Use the "calcTips' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array.Use a for loop to preform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😊

4. BONUS: Write a function 'calcAverage' Which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:

   4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together

   4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)

   4.3. Call the function with the 'totals' array

GOOD LUCK 😊
