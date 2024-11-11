[[>>>2. How to handle asynchronous operations using `async/await` over `callback/promise` TypeScript.<<]]

Blog:>>>>
      

<!-- #-Point-1>:why use async/await? -->
-Handle asynchronous operations is very impotent in modern world javascript and typeScript.there are many way to do it.In modern world async/await is one of the most popular methods.
              <!-- #callback/promise -->

<!-- #-Point-2>:why callback/promise less popular or old school ? -->
-there are several reason callback/promise less popular or old school.they are used traditionally asynchronous operations.they are very messy when they dealing with nested asynchronous operations calls. 

<!-- #-Example-code-Typescript when they dealing with nested asynchronous operations calls  -->

function getUser(callback: (data: string) => void) {
    setTimeout(() => {
        callback('data user ');
    }, 1000);
}
 
 getUser(data => {
    console.log(data);
});
 <!-- #-point-3>:Problem with callbacks/promises -->
callback code very hard to maintain especially when many asynchronous are chained.promises show the eventual or failed of an asynchronous operation and its resulting value.
<!-- #-Example: -->
  function createPromise():promise<string>{
    return new promise ((resolve, reject))=>{
        setTimeout(()=>{
            resolve('data');

        },1000);

    }
 }
 
 <!-- #-point-4>:Last-word for callback/promise -->
 they are old school thing but they are useful.while promises improve performance callbacks by providing  .then() and .catch() chaining.they are still very complex. 
             

<!-- #point-5>:- why we called Async/Await modern -->
- Async/Await is built on very top of promises and provides a more readable then other, easy to handle the code and maintain understand.synchronous-like syntax for handling asynchronous code. await is used to pause execution until the promise is resolved or rejected.so it easy to call api using asynchronous.
<!-- #Example: -->

async function getUserData(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("User data");
        }, 1000);
    });
}

async function fetchData() {
    const data = await getUserData();
    console.log(data);
}

fetchData();

<!-- #point-6>:-Advantages of async/await: -->
 #-1:More readable and synchronous-like flow.
#-2:Easier to handle errors using try/catch. 
#-3:Avoids callback hell and deeply nested promises.
#-4:easy to handle errors and callbacks.

<!-- #Example:try/c -->
async function fetchData() {
    try {
        const data = await getUserData();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

 <!-- #-point-4>:Last-word for Async/Await -->
 In our modern code world async/await in very important and easy to handle and fix the error.
