/*In the following code and explanation 
we are going to understand what async/await is
in modern javascript */


// Lets define a normal function

const myFunction = () =>{
   
}
console.log(myFunction()) // This will print 'undefined' becuase any function without return value returns undefined

//Now lets add an 'async' keyword to the function and see what happens

/*const myFunction = async () =>{

}*/

/* If we console.log the return of this async function
we will get Promese {undefined}, so the major concept
here is "any async function or a function that is defined 
with async keyword returns always always always a promise" */

/*Explanation of async/await
async Function: Declaring a function with async means that the function
 will return a promise and can contain one or more await expressions. 
 It allows the function to be paused in a non-blocking way.
await Operator: Used to pause the execution of the function until the 
Promise is resolved or rejected. It helps in writing asynchronous code 
in a more synchronous, linear manner. */
