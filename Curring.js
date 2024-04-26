
const adder = (a) =>{
   return (b) =>{
       return (c) => {
           return a + b + c
       }
   }
}

console.log(adder(3)(4)(5)) // this is what curring is.

// it is a proccess of transforming a function with multiple argumnet in to a sequence of functions each taking a single argument

// traditionaly it would be the following with out curring

const adderWithOutCurring = (a,b,c) => {
    return a + b + c
}

// Done understanding curring