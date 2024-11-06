## Coding Challenge #1 &mdash;

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:

> BMI = mass / height \*_ 2 = mass / (height _ height) (mass in kg and height in meter).

#### Your tasks &mdash;

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (You can even impllement both versions)
3. Create a Boolean variable `markHigherBMI` containing infomation about whether Mark has a higher BMI than John.

#### Test Data &mdash;

- Data 1: Marks weights 78kg and is 1.69 m tall. John weights 92kg and is 1.95 m tall.
- Data 2: Marks weights 95kg and is 1.88 m tall. John weights 85kg and is 1.76 m tall.

GOOD LUCK 😊

<br />

## Coding Challenge #2 &mdash;

Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

#### Your tasks &mdash;

1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than Jhon's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than Jhon's (23.9)!"

> Hint: Use an `if/else` statement

GOOD LUCK 😊

## Coding Challenge #3 &mdash;

There are two gymnastics teams, `Dolphins` and `Koalas`. They compete againt each other 3 teims. The winner with the highter average score wins a trophy!

#### Your Tasks :

1. Calcuate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, a test for that as well (draw means the same average score)
3. <b>Bonus 1: </b> Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points.<b> Hint: </b> Use a logical operator to test for minimum score, as well as multiple else-if blocks 😁
4. <b>Bonus 2 : </b>Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

#### Test Data:

- Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110.
- Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123.
- Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106.

GOOD LUCK 😊

## Coding Challenge #4

- Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to calculate the tip, depending on the bill value. Creeate a variable called `tip` for this. It's not allowed to use an `if/else` statement 😊 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternarty operator!)

2. Print a string to the console containing the bill value, the tip, and the final value (bill+tip). Example: `The bill was 275, the tip was 41.25, and the total value 316.25`

TEST DATA: Test for bill values 275, 40 and 430
