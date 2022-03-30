import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>JavaScript Promise</h1>
`;

// creating a promise
const promise1 = new Promise((resolve, reject) => {
  let randomNumber = Math.ceil(Math.random() * 100);
  setTimeout(() => {
    if (randomNumber % 2 === 0) {
      resolve("Promise resolved");
    } else {
      reject("Promise rejected");
    }
  }, 1000);
});

// consuming a promise
promise1
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// async await way
(async () => {
  try {
    console.log(await promise1);
  } catch (error) {
    console.log(error);
  }
})();

// calling an API, always return a promise
const apiCall = (delay) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`API resolved in ${delay} ms time`);
    }, delay);
  });
};

let multiPromise = [apiCall(1000), apiCall(2000), apiCall(1500)];
// promise.all return an array of promise, when all are resolved
Promise.all(multiPromise)
  .then((data) => {
    console.log("Promise all:", data);
  })
  .catch((err) => {
    console.log("Promise all:", err);
  });

// promise.race only return the fastest promise which got resolved
Promise.race(multiPromise)
  .then((data) => {
    console.log("Promise race:", data);
  })
  .catch((err) => {
    console.log("Promise race:", err);
  });

// promise.allsettled return an array containing status of promise and values of res/rej
Promise.allSettled(multiPromise).then((data) => {
  console.log("allSettled:", data);
});
