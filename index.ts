
    /////////////////////////////////////////////
    //1. Creating a Lesson Plan(Using for loop )
    /////////////////////////////////////////////


// Step 1: Create a blank array named myWork
  let myWork: { name: string; status: boolean }[] = [];

    // Step 2: Use a loop to create lessons
  for (let i = 1; i <= 10; i++) {
    // Create an object representing a lesson
    let lesson = {
        name: `Lesson ${i}`,
           // Alternate status: true for odd, false for even
           status: i % 2 !== 0
    };
     // Step 3: Add the lesson to the array
     myWork.push(lesson);
    }
      // Step 4: Print the result
       console.log(myWork);


/////////////////////////////////////////////////////////////////////////////
                 //2. Guessing Game (Using while loop ) //////////////////
////////////////////////////////////////////////////////////////////////////

          // Step 1: Set a maximum value
             const maxValue: number = 10;

             // Step 2: Generate a random number
  const targetNumber: number = Math.floor(Math.random() * maxValue) + 1;
  console.log(`Target Number (for development purposes): ${targetNumber}`);

       // Step 3: Track the guess status
       let guessCorrect: boolean = false;

       // Step 4: Simulate user guesses
    const userGuesses: number[] = [3, 7, 1, 8, 5, 2, 4, 9, 6, 10]; // Predefined guesses

    // Step 5: Iterate over guesses using a while loop
     let index: number = 0;
     while (!guessCorrect && index < userGuesses.length) {
     let currentGuess: number = userGuesses[index];
     console.log(`User guessed: ${currentGuess}`);

      // Step 6: Check the user's guess
    if (currentGuess === targetNumber) {
        console.log("Congratulations! You guessed the correct number.");
        guessCorrect = true;
    } else if (currentGuess < targetNumber) {
        console.log("Your guess is too low.");
    } else {
        console.log("Your guess is too high.");
    }
    index++;
}

if (!guessCorrect) {
    console.log("Sorry, you've used all your guesses.");
}
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    //3. Counter Incrementer (Using do while loop )
    /////////////////////////////////////////////
    
    // Step 1: Set the starting counter to 0
        
        let counter: number = 0;
        // Step 2: Create a variable, step, to increase your counter by
          const step: number = 7;     // You can choose any step value

          // Step 3: Add a do...while loop
do {
    // Print the counter to the console
    console.log(`Counter: ${counter}`);
     
     // Increment the counter by the step amount
     counter += step;
     // Step 4: Continue to loop until the counter is equal to or more than 100
} while (counter < 100);

 /////////////////////////////////////////////////////////
/////4.Exploring Objects with for...in Loop  
 ///////////////////////////////////////////////////////

   // Step 1: Create a simple object with three items
 let myObject = {
    item1: "Value 1",
    item2: "Value 2",
    item3: "Value 3"

 };
 // Step 2: Use a for...in loop to get properties' names and values from the object
for (let key in myObject) {
    if (myObject.hasOwnProperty(key)) {
        console.log(`${key}: ${myObject[key]}`);
    }
}

///////////////////////////////////////////////////////////////
//////5.Exploring Arrays with Loops(Using loop )
///////////////////////////////////////////////////////////////

   // Step 1: Create an empty array
  let myArray: number[] = [];

  // Step 2: Run a loop 10 times, adding a new incrementing value to the array
for (let i = 1; i <= 10; i++) {
    myArray.push(i);
}

  // Step 3: Log the array into the console
  console.log('Array:', myArray);

  // Step 4: Use a for loop to iterate through the array elements
for (let index = 0; index < myArray.length; index++) {
    console.log(`Index ${index}: Value ${myArray[index]}`);
}

// Step 5: Use the for...of loop to output the value into the console from the array
for (let value of myArray) {
    console.log(`Value: ${value}`);
}

//////////////////MOHSIN RAZA /////////////////////////

