# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

First, I would add unit tests to ensure that the existing functionality is not broken during the refactor. Next, I would refactor the function to make it more readable. One way to do this would be to add descriptive variable names, breaking up the function into smaller, more manageable chunks, and using more modern JS language features (EcmaScript) such as destructuring and arrow functions, move outside the component and export constants for using them in the tests. These changes makes the function more readable by providing clear separation of responsibilities and making use of modern and concise syntax, making the overall logic of the function more clear and easy to understand.
