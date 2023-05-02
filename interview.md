HTML
why use <!DOCTYPE html>
Meta List
HTML Layout
diff of attech script using `defer` and `async`
Block lavel Element Vs Linline Element
sementic element
Table
Attribute -> class , id
iframe
images
form
attribute
elements
inputs
audio tag

CSS
JavaScript
TypeScript
why typescript
-> superset of java script
-> Typescriipt is get the error before the code executed
Types - built in types - string , number , boolean , null , undefind , void , symbol - user defind types - array , enum , classes , interfaces - specific types - any , never , unkonwn

        any Type :
                if we define any type , typescript will never checks the type for that specifc variable, and where these variable are used it will create it to any so that .. it leads to bad version of code.
        any Vs Unknown :
                any : stop type checking , can not detect errors on compile time
                unknown : check type on performing operation , can detect errors on compile time
        Unknown Vs never :
                unknown returns a vaue the type of any
                never reperesent a value that can never be obtained
                if function return nothing then the retrun type is never
                if the variable can never be assign a value

        Never :
                never means the end of the function will never be reached
                -> if any function has never type then it will must throw error

        Top type vs bottom types
                Top Types : it can hold any value
                            Type : any
                Bottom Types : It can hold no value
                            Type : never

-> void type :
the function will have nothing to return
but it can be reach to end

-> Give type to Array

const arr : number[]
const arr : Array<number>

-> define object => var obj : {a : type1 , b : type2} = {a : value ,b : value }

-> define optional parameter => var obj : {a : type1 , b ?: type2} = {a : value ,b : value }

-> Consept of Null : - indecates the absence of value

-> Higher Order Log Comprasion
null == undefined => true
null === undefined => false
0 == undefined => false
false == undefined => false

-> How Enum Work => allow us to create name constant

        ```
        enum Team {
        Alpha,
        Beta,
        Gamma,
        Delta
        }
        ```

-> Rest Parameter => `...`

```js
function restCheck(...value: number[]) {
  let sum = 0;
  value.forEach((val) => (sum += val));
  return sum;
}

restCheck(20, 1, 112, 15);
```

Parameter Destructure =>

```js
        function multiply({ a, b, c }: { a: number; b: number; c: number }) {
        console.log(a * b * c);
        }

        multiply({ a: 1, b: 2, c: 3 });

        You can simplify the above code by using an interface or a named type, as follows:
        type ABC = { a: number; b: number; c: number };

        function multiply({ a, b, c }: ABC) {
        console.log(a * b * c);
        }

        multiply({ a: 1, b: 2, c: 3 });
```

Optional Para Meter => `?` , `!`

Webpack
React
Redux

```

```
