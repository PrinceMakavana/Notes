## function borrowing (call , apply , bind)

- Function Borrowing is the consept of use method of another object without redefine it.
- there are main three method of it : `call` , `apply` , `bind`

```js
let name = {
  firstName: "Prince",
  lastName: "Makavana",
};
let printFullName = function (homeState, workState) {
  console.log(this.firstName + " " + this.lastName);
};
let name2 = {
  firstName: "Romik",
  lastName: "Makavana",
};

//call
console.log("call");
printFullName.call(name, "one Home", "second Home");
printFullName.call(name2, "one Home", "second Home");
//apply
console.log("apply");
printFullName.apply(name, ["one Home", "second Home"]);
//bind
console.log("bind");
const printFullNameBind = printFullName.bind(name, ["one Home", "second Home"]);
console.log(printFullNameBind());
```

## polyfill for bind method

- polyfill is the browser fallback , eg : your browser does not have bind function

<!-- example of bind method -->

```js
let name = {
  firstName: "Prince",
  lastName: "Makavana",
};

let printFullName = function () {
  console.log(this.firstName + " " + this.lastName);
};
const printFullNameBind = printFullName.bind(name);
printFullNameBind();
```

<!-- create custom bind method -->

- **step 1** : add your function to Function Prototype so that every function can access the mybind method

  ```js
  Function.prototype.mybind = function () {};
  ```

- **step 2** : when we call .bind method which not invoke directly it will invoke when we call it. means bind method returns a copy actual function

  ```js
  Function.prototype.mybind = function () {
    return function () {};
  };
  ```

- **step 3** : when the bind method is invoke it will execute the copy of main function , so how to create copy of actual function

  - using `this` keyword under the bind method we can get the actual function

    ```js
    Function.prototype.mybind = function () {
      let copyFunction = this;
      console.log(copyFunction); // This will return complete function code
      return function () {};
    };
    ```

- **step 4** : now we have to return `copyFunction` with call method so if function is invoke the `copyFunction` is invoked

  ```js
  Function.prototype.mybind = function () {
    let copyFunction = this;
    return function () {
      copyFunction.call();
    };
  };
  ```

- **step 5** : now we have to pass parameter so that it can resolve the this of actual function

  ```js
  Function.prototype.mybind = function (args) {
    let copyFunction = this;
    return function () {
      copyFunction.call(args);
    };
  };
  ```

  ```js
  let name = {
    firstName: "Prince",
    lastName: "Makavana",
  };
  let printFullName = function () {
    console.log(this.firstName + " " + this.lastName);
  };
  const fun = printFullName.mybind(name);
  fun();
  ```

**Now : if user Pass any parameter into function then it not working**

- **step 6** : now if use pass any parameter into function

  ```js
  Function.prototype.mybind = function (...args) {
    let copyFunction = this;
    let parameter = args.slice(1); // to get other paramaters
    let arg1 = args[0]; // which use for resolve this
    return function () {
      copyFunction.call(arg1, ...parameter); // here ... for sparade all parameters
    };
  };
  ```

<!-- Polyfills -->

- when you cerate any Polyfills of any function first check what it is get as `argument` and what it is `return`
<!-- Call -->

```js
Function.prototype.mycall = function (obj, ...args) {
  obj.fn = this;
  obj.fn(...args);
};

function printAge(age) {
  console.log(`${this.name} is ${age} year old`);
}
printAge.mycall({ name: "prince" }, 25);
```

<!-- Apply polyfill -->

```js
Function.prototype.myApply = function (context, args) {
  context.fn = this;
  context.fn(...args);
};
fullName.myApply(name, [5, 6]);
```

<!-- Bind -->

```js
Function.prototype.mybind = function (...args) {
  let copyFunction = this;
  let parameter = args.slice(1); // to get other paramaters
  let arg1 = args[0]; // which use for resolve this
  return function (...args2) {
    copyFunction.call(arg1, [...parameter, ...args2]); // here ... for sparade all parameters
  };
};

// small way Call polyfill

Function.prototype.myCall = function (context, ...args) {
  // here call is used for the create the this scope to function
  context.fn = this;
  context.fn(...args);
};
```

<!-- Map -->

- it used to transform (transform each and every of array and get new array from it) an array
  ```js
  const arr = [5, 1, 2, 6, 7];
  function double(x) {
    return x * 2;
  }
  arr.map(double);
  ```
- what map get as an argument -> function with 3 argument (element , index , array)
- what it return -> new array

```js
Array.prototype.customMap = function (funArg) {
  let newArray = [];
  for (let inx = 0; inx < this.length; inx++) {
    newArray.push(funArg(arr[inx], inx, this));
  }
  return newArray;
};
```

<!-- Filter -->

- takeing array as input and find out an new array which has only the values based on given logic
- what filter get as an argument -> takeing logic function as an input
- it will return only true/false

```js
const arr = [5, 1, 2, 6, 7];
function isOdd(x) {
  return x % 2;
}
arr.filter(isOdd);
```

```js
Array.prototype.customFilter = function (funArg) {
  let newArray = [];
  for (let inx = 0; inx < this.length; inx++) {
    if (funArg(arr[inx], inx, this)) {
      newArray.push(arr[inx]);
    }
  }
  return newArray;
};
```

<!-- Reduce -->

- Reduce is used in place where you need to iterate over all the elements and find out the perticular value
- what Reduce get as an argument -> ( `function` , `initialValue of acc`)as an argument // function has two argument (acc , curr) -> curr => represent an value of an araay , acc => used to acumalate the value ,

```js
Array.prototype.customReduce = function (reduceFunction, acc) {
  let inx = 0;
  if (inx == 0 && acc == undefined) {
    acc = this[inx];
    inx++;
  }
  for (inx; inx < this.length; inx++) {
    acc = reduceFunction(acc, this[inx]);
  }
  return acc;
};
```

```

```

## Palindrom -> number or word which reads same from backword and forward

```js
const str = prompt("Add string");
console.log(str);
let revStr = "";
for (let index = str.length - 1; index >= 0; index--) {
  revStr += str[index];
}
console.log(revStr);
if (revStr === str) {
  console.log(" string is Palindrom");
} else {
  console.log(" not Palindrom");
}
```

## Prime Number : number which is only devideble by 1 and itself

```js
function checkPrime(num) {
  if (num == 2 || num == 3 || num == 5 || num == 7) {
    return true;
  } else {
    for (let index = 2; index < Math.sqrt(num); index++) {
      if (Number.isInteger(num / index)) {
        return false;
      }
    }
    return true;
  }
}

const num = prompt("Add Number");
console.log(num);
const isPrime = checkPrime(num);
if (isPrime) {
  console.log("I am Prime");
} else {
  console.log("i am not prime");
}
```

## Prime Number Range : series of numbers which is only devideble by 1 and itself

```js
function checkPrime(num) {
  if (num == 2 || num == 3 || num == 5 || num == 7) {
    return true;
  } else {
    for (let index = 2; index < Math.sqrt(num); index++) {
      if (Number.isInteger(num / index)) {
        return false;
      }
    }
    return true;
  }
}

const startOfSeries = prompt("Add Start of Series");
const endOfSeries = prompt("End of Series");

for (let index = startOfSeries; index <= endOfSeries; index++) {
  let isPrime = checkPrime(index);
  if (isPrime) {
    console.log(index);
  }
}
```

## string Reverse

```js
const str = prompt("Enter Sting");
const reverseString = str.split("").reverse().join(""); // complete reverse
const reverseStringWord = reverseString.split(" ").reverse().join(" "); // only word reverse
console.log(str);
console.log(reverseString);
console.log(reverseStringWord);
```

## Type checking

```js
const arr = [1, 2, 3];
console.log(typeof arr);
console.log(Object.prototype.toString.call(arr).slice(8, -1));
console.log(arr instanceof Array);
console.log(Array.isArray(arr));

const str = "abc";
console.log(typeof str);
console.log(Object.prototype.toString.call(str).slice(8, -1));

const obj = { name: "Prine", id: 1 };
console.log(typeof obj);
console.log(Object.prototype.toString.call(obj).slice(8, -1));
```

## Swap without variable

```js
let a = prompt("Enter one number");
let b = prompt("Enter second number");
a = Number(a);
b = Number(b);
function swap(a, b) {
  console.log(a, b);
  a = a + b;
  console.log(a, b);
  b = a - b;
  console.log(a, b);
  a = a - b;
  console.log(a, b);

  return [a, b];
}

console.log(swap(a, b));
```

## check is vowel Present

```js
function hasVowel(str) {
  const vowel = ["a", "e", "i", "o", "u"];
  for (let index = 0; index < str?.length; index++) {
    if (vowel.includes(str[index])) {
      return true;
    }
  }
  return false;
}
```

## fibonacci

```js
let f1 = 0;
let f2 = 1;
let f3;
const fibArr = [f1, f2];

for (let i = 2; i <= 10; i++) {
  f3 = f1 + f2;
  fibArr.push(f3);
  f1 = f2;
  f2 = f3;
}

console.log(fibArr.join("  "));
```

## fibonacci recursive

```js
let f1 = 0;
let f2 = 1;
let f3;
const fibArr = [f1, f2];
const fibFunc = (f1, f2, n) => {
  if (n < 2) return;

  fibArr.push(f1 + f2);
  fibFunc(f2, f1 + f2, n - 1);
};

fibFunc(f1, f2, 10);

console.log(fibArr.join("  "));
```

## Infinite currying

```js
function multiply(a) {
  return function (b) {
    if (!b) {
      return a;
    }
    return multiply(a * b);
  };
}

console.log(multiply(1)(2)(3)(4)());
```

## Factorial

```js
let a = prompt("Enter one number");

function factorial(a) {
  if (a == 1) {
    return 1;
  } else {
    return a * factorial(a - 1);
  }
}

console.log(factorial(a));
```

## sum of array

```js
const arr = [1, 2, 3, 4, 4, 5, 6];

console.log(
  arr.reduce((crr, acc) => {
    return (acc = acc + crr);
  }, 0)
);
```

## freeze makes an object completely immutable, while Object. seal allows existing properties to be modified, but prevents the addition and deletion of new properties.

```js
const obj = {
  fname: "vanshita",
  age: 20,
};

console.log(obj, obj2);
obj.lname = "shah";
Object.freeze(obj);
// Object.seal(obj)

obj.mname = "ashishkumar";
obj.age = 21;
const obj2 = obj;
console.log(obj, obj2);
```

## get only unique from array

## find key value from object without dot

```js
const myObj = {
  name: "vanshita",
  age: 20,
  address: {
    city: "gnr",
  },
};
const pathFinder = (obj, path) => {
  let ans;
  for (let key in obj) {
    if (key == path) {
      return obj[key];
    } else {
      if (typeof obj[key] === "object") ans = pathFinder(obj[key], path);
    }
  }
  return ans;
};

console.log(pathFinder(myObj, "city"));
```

##

    ```js
    const users = [
      { fname: "vanshita", lname: "shah", age: 20 },
      { fname: "kashyap", lname: "patel", age: 21 },
      { fname: "prince", lname: "makavana", age: 22 },
      { fname: "gunjan", lname: "patel", age: 20 },
    ];
    const ansObj = {};
    const ans = users.reduce((acc, curr) => {
      if (acc[curr.age]) {
        acc[curr.age] = acc[curr.age] + 1;
      } else {
        acc[curr.age] = 1;
      }
      return acc;
    }, {});
    console.log(ans);
    // {20: 2, 21: 1, 22: 1}
    ```

const flatAraay = (arr) => arr.reduce((acc , val) => {
    if(val instanceof Array){
        return acc.concat(flatAraay(val))
    }else {
        acc.push(val);
        return acc;
    }
}, []);