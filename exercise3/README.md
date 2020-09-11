EXERCISE 3

(Simulation: The Tortoise and the Hare) 

In this problem, you’ll re-create one of the truly
great moments in history, namely the classic race of the tortoise and the hare. You’ll use random
number generation to develop a simulation of this memorable event.
Our contenders begin the race at square 1 of 70 squares. Each square represents a possible
position along the race course. The finish line is at square 70. The first contender to reach or pass
square 70 is rewarded with a pail of fresh carrots and lettuce. The course weaves its way up the side
of a slippery mountain, so occasionally the contenders lose ground.
There’s a clock that ticks once per second. With each tick of the clock, your script should
adjust the position of the animals according to the rules in figures below. 

![ImgName](https://github.com/uendihoxha/JavaScriptExercises/blob/master/exercise3/rules/figure1.PNG)

![ImgName](https://github.com/uendihoxha/JavaScriptExercises/blob/master/exercise3/rules/figure2.PNG)

Use variables to keep track of the positions of the animals (i.e., position numbers are 1–70).
Start each animal at position 1 (i.e., the “starting gate”). If an animal slips left before square 1,
move the animal back to square 1.
Generate the percentages in Fig. 1 by producing a random integer i in the range
1 ≤i ≤10. For the tortoise, perform a “fast plod” when 1 ≤i ≤5, a “slip” when 6 ≤i ≤7 and a “slow
plod” when 8 ≤i ≤10. Use a similar technique to move the hare.

Begin the race by printing

BANG !!!!!

AND THEY'RE OFF !!!!!

Then, for each tick of the clock (i.e., each repetition of a loop), print a 70-position line showing the letter T in the position of the tortoise and the letter H in the position of the hare. Occasionally, the contenders will land on the same square. In this case, the tortoise bites the hare, and
your script should print OUCH!!! beginning at that position. All print positions other than the T,
the H or the OUCH!!! (in case of a tie) should be blank.
After each line is printed, test whether either animal has reached or passed square 70. If so,
print the winner, and terminate the simulation. If the tortoise wins, print TORTOISE WINS!!! YAY!!!
If the hare wins, print Hare wins. Yuck! If both animals win on the same tick of the clock, you may
want to favor the turtle (the “underdog”), or you may want to print It's a tie. If neither animal
wins, perform the loop again to simulate the next tick of the clock. When you’re ready to run your
script, assemble a group of fans to watch the race. You’ll be amazed at how involved your audience
gets!

![ImgName](https://github.com/uendihoxha/JavaScriptExercises/blob/master/gifs/gif3.gif)
