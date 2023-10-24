# **<p align="center"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="drawing" style="width:50px;"/>  React Js Interview <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="drawing" style="width:50px;"/></p>**

[Prince Makavana](https://princemakavana.com)


<br />

---

## UseFull ShortCuts

---
<br />

-   ### **convert Number(Intger) to Array**
    > '`${x}`.split('').map(Number)'
    
    > ``
    
    > ``

    **Note :**

<br />

---

## Methods of Concole

---
<br />

-   ### **console.assert();**
    > 'Log a message and stack trace to console if the first argument is false.'
    
-   ### **console.clear();**
    > 'Clear the console'

-   ### **console.countReset();**
    > 'Resets the value of the counter with the given label.'

-   ### **console.debug();**
    > 'Outputs a message to the console with the log level "debug".'

-   ### **console.dir();**
    > 'Displays an interactive listing of the properties of a specified JavaScript object.This listinglets you use disclosure triangles to examine the contents of child objects'
    
-   ### **console.dir();**
    > 'Displays an interactive listing of the properties of a specified JavaScript object.This listinglets you use disclosure triangles to examine the contents of child objects'

-   ### **console.dirxml();** 
    > 'Displays an XML/HTML Element representation of the specified object if possible or the JavaScript Object view if it is not possible.'

-   ### **console.error();** 
    > 'Outputs an error message. You may use string substitution and additional arguments with this method.'

-   ### **console.group();** 
    > 'Creates a new inline group, indenting all following output by another level. To move back out a level, call groupEnd().'

-   ### **console.groupEnd();** 
    > 'Exits the current inline group.'

-   ### **console.log();** 
    > 'For general output of logging information. You may use string substitution and additional arguments with this method.'

-   ### **console.profile();** 
    > 'Starts the browser's built-in profiler (for example, the Firefox performance tool). You can specify an optional name for the profile'

-   ### **console.profileEnd();** 
    > 'Stops the profiler. You can see the resulting profile in the browser's performance tool (for example, the Firefox performance tool).'

-   ### **console.table()** 
    > 'Displays tabular data as a table'

-   ### **console.time()** 
    > 'Starts a timer with a name specified as an input parameter. Up to 10,000 simultaneous timers can run on a given page'

-   ### **console.timeEnd()** 
    > 'Stops the specified timer and logs the elapsed time in seconds since it started'

-   ### **console.timeLog()** 
    > 'Logs the value of the specified timer to the console.'

-   ### **console.timeStamp()** 
    > 'Adds a marker to the browser's Timeline or Waterfall tool.'

-   ### **console.trace()** 
    > 'Outputs a stack trace.'

-   ### **console.warn()** 
    > 'Outputs a warning message. You may use string substitution and additional arguments with this method'


-   ### **console.groupCollapsed();** 
    > 'Creates a new inline group, indenting all following output by another level. However, unlike group() this starts with the inline group collapsed requiring the use of a disclosure button to expand it. To move back out a level, call groupEnd().'

    **Note :**



----------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------
Variable
-----

main type of variable :- var , let , const 

      var :- 'var' is a globle variable 
      let :- it is used for reassinable value
      const :- it is used for constant value ; this value is not changeable 
-----
----------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------
----------
Data-Types
----------
           for check the data-type of VARIABLE :- console.log(typeof variable_name);
-----
main type of Data-Types :- String , Numbers , Boolean , null , undefined , symbol

      String :- let name = 'Prince';
      Numbers :- let num = 52 ;
      Boolean :- let isbol = true ;
      Null :- let x = null ;
      undefined :- let y = undefined ; OR let z;
----------------------------------------------------------------------------------------------------------------------
-----------------------------------
Concatenation (join to variable) :- 
-----------------------------------
Concatenation :-
                  let name = 'princ'; 
                  let age = 18 ;
                  console.log('my name is' + name + 'and my age is ' + age);
Template String :- 
                  console.log('my name is ${name} and my age is ${age}');                  

---------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------
-------------------------------
To get a The Length of variable :-     variable_name.length 
-------------------------------
---------------------------------------------------------------------------------------------------------------------
-------------------------------
To get a string in Upper-Case :-     variable_name.toUpperCase() 
-------------------------------
---------------------------------------------------------------------------------------------------------------------
-------------------------------
To get a string in Lower-Case :-     variable_name.toLowerCase() 
-------------------------------
---------------------------------------------------------------------------------------------------------------------
-------------------------------
To get a sub-string :-     variable_name.substring(start_point , end_point) 
-------------------------------
---------------------------------------------------------------------------------------------------------------------
-------------------------------
To get a split value :-     variable_name.split('give the split value') 
-------------------------------
---------------------------------------------------------------------------------------------------------------------
-------------------------------
To get a String to Array conversation  :-     variable_name.split('give the value for split ') 
-------------------------------      
---------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------
Arrays :- variables that hold multiple values 
-------------------------------      
Create new array :-  let numbers = new Array(1,2,3,4);
                     let fruits = ['apple' , 'grapes' , 'banana' , 'oranges'];
                     let diff_data_type = ['apple' , 10 , true , 'prince' ];

Access array element :- variable_name[index] 
                      variable_name.index 

Add new value in the define Array :- 
                   this is added to the end of array  :- variable_name.push('value');
                   this is added to the starting of array :- variable_name.unshift('value');


change the value of array element :- variable_name[index] = value ;  
                                   
To check this is array or not :- Array.isArray(variable_name);

To Remove the last element of Array :- variable_name.pop();

To check the Index of array element :- variable_name.indexOf('element');                                    

complete example of array :- let person = {
                                           Name : 'Prince Makavana',
                                           Age : '35',
                                           Hobbies : ['cricket' , 'games' , 'gym'],
                                           Adderess : {
                                             soc : 'kedarnath-6',
                                             city : 'Rajkot',
                                             District : 'Rajkot',
                                             State : 'Gujrat',
                                             Country : 'India'  
                                              } 	
                                           }
-------------------------------      
---------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------
Loops :-
-------------------------------
    ------------------      
    1] For Loop :- 
    ------------------
            Formate :-    for(starting ; condition ; increment)
                          {
                          content
                          }
      
            Exe :-       for (let i = 0 ; i < 10 ; i++)
                         {
                         console.log('For Loop number ${i}');
                         }

    ------------------      
    2] while Loop :- 
    ------------------
            Formate :- while(codition){
                        content

                        increment
                        }
            Exe :-     let i = 0 ;
                        while(i < 10){
                         console.log('For Loop number ${i}');
                         i++;
                         }
    ----------------------------      
    3] Foreach for variable Loop :- 
    ----------------------------
              Formate :- name_of_variable.forEach(function(variable_name_to_use){
                                                 content
                                          });    
              Exe :- let todos =
							        [{
							            id: 1,
							            name: 'prince',
							            iscompleted : true
							        },
							        {
							            id: 2,
							            name: 'romik'
							            iscompleted : flase
							        },
							        {
							            id: 3,
							            name: 'yash'
							            iscompleted : true
							        },
							        {
							            id: 4,
							            name: 'dwarkesh'
							            iscompleted : true
							        }];
					todos.forEach(function(todo) {
							        console.log(todo.id);
							     });		        
    ----------------------------      
    4] map for variable Loop :-  it is same as forEach just difference is create the data in the array 
    ----------------------------

          exe :-                 todos.map(function(todo) {
							           console.log(todo.id);
							     });

    ------------------      
    5] filter for array Loop :- is the filter the data of any array variable . 
    ------------------
          exe :-        var     todoFilter = todos.filter(function(todo) {
							           return todo.iscompleted === true ;
							     });    


-------------------------------      
---------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------
-----------------      
 Turnary Operator :-
-----------------
            it is use as a if-else condition . 

            formate :-
                       condition ? data if condition true : data if condition false               
---------------------------------------------------------------------------------------------------------------------



## Basics

---
<br /> 

>  JavaScript / TypeScript (Optional)<br />

> React Js <br />


<br />

---

## List Of Consepts

---
<br />


- **JavaScript**
    - Basic   (Boxes , Variable , Data Type , Math Object ,  Array , Conditional Statement , Function)
    - DOM
    - Event Handling
    - Local Storage 
    - OOP
    - DOM
    - Async and sync
    - interview questions

<br />

- **React JS**
    - Node.js
    - npm or Yarn


<br />

---

## JavaScript Basic

---
<br />

-   ### **Boxes**
    > `alert('This is alert Box it stop the current process and ask for conformation')`
    
    > `console.log('console box is used to print in consol of browser')`
    
    > `prompt('promp is use for get input form user')`

-   ### **Variables**
    >    **var**:  function scoped , allow redeclare

    >    **let**: block scoped (you can used it only in function if it is declare in the function), not allow to redeclare 
    
    >    **const**: it create the constent which is after intialize not changeable

    > **Note :** variable name starts with letter ,  _ , $ (Never Start with number)

    ```sh
       // calling x after definition
        var x = 5;
        document.write(x, "\n");
 
        // calling y after definition
        let y = 10;
        document.write(y, "\n");
 
        // calling var z before definition will return undefined
        document.write(z, "\n");
        var z = 2;
 
        // calling let a before definition will give error
        document.write(a);
        let a = 3;

    ```

    **a gives an error because used befor declare when let not give an error for that**
<br />

-   ### **Data Types**
    >    **Primitive DataType**:  String , Number , Boolean , Null , Undefind

    >    **Reference DataType**: Array , Object ,  Function , Dates , etc .. 
<br />


-   ### **Math Object**
    >    **Primitive DataType**:  String , Number , Boolean , Null , Undefind

    >    **Reference DataType**: Array , Object ,  Function , Dates , etc .. 

    |Math Object                |Used For                         |
    |---------------------------|---------------------------------|
    |**Math.PI**|get an value of Pi|
    |**Math.E**|give value of e|
    |**Math.round(2.4)**|give round value , give before value "2"|
    |**Math.ceil(2.4)**| give round value , give after value "3"|
    |**Math.sqrt(64)**| give sqroot of value "8"|
    |**Math.abs(-3)**| give absolute value "3" |
    |**Math.pow(8 , 2)**| give proer of first parameter "64"|
    |**Math.min(8,2,4,1,2,3,4,5)**|get min from all for them|
    |**Math.random()**|generate any random number|
<br />

-   ### **Array**
    
    ```sh
       // calling x after definition
        const num = [1 ,2 ,3 ,4, 5 ,6];
        const num2 = new Array(1 ,2 ,3, 4,5);
        const mixed = [22 , 'hello' , true , undefind , null , {a:1 , b:2} , new Date()]

      // Length of Array 
      var_name.length

      // Check is Array
      Array.isArray(var_name);

      //Get single value
      var_name[index]

      //Mutating Array
      var_name.push(data) // Add on the end
      var_name.unshift(data) // add to front
      var_name.pop() // Take of from end
      var_name.reverse() // reverse the array
      var_name.sort() // sort the array

    ```


<br />

-   ### **Conditional Satements**
    
    ```sh
        if (condition) {}

        if (condition) {} else {}

        for (let index = 0; index < array.length; index++) {
          const element = array[index];
        }

        array.forEach((element , index) => {
            console.log(element);    
        });

        while (condition) {}

        switch (key) {
            case value:

                break;

            default:
                break;
        }
    ```


<br />

-   ### **Function**
    
    ```sh
        //Declaring the Function
        function name(params) {...code...}

        //Use Function
        name(params);
    ```


<br />



---

## Document Object Model (DOM)

---
<br />

```sh
      // DOM selectors
      document.getElementById
      document.getElementsByClassName
      document.querySelector('#id') // it cam select only single element
      document.querySelectorAll('.className') // it can select more then one element


      //get things from Element
      document.getElementById('id').id
      document.getElementById('id').className

      //Change Styleing
      let ele = document.getElementById('id');
      ele.style.background = "";
      ele.style.color = "";
      ele.style.padding = "";
      ele.style.opacity = "";

      // Change Content
      ele.textContent = "Lorem"
      ele.innerText = "Lorem"
      ele.innerHTML = "<p>Html</p>"
```

<br />

## Event Listeners & the Event Object (DOM)
<br />


  > **.addEventListener('EventName' , ..code on event occure..)**
```sh
    document.getElementById('id').addEventListener('click' , function () {console.log("Hello World");})
```

  > **Add Event Listener direct in element using attribute**
  ```sh
    <p onclick="function_name()">Handle Event</p>

    List of Events

      Click => click
      Double Click => dblclick
      Mousedown => mousedown
      MouseUp => mouseup
      Mouseenter => mouseenter
      Mouseover => moouseover
      MouseLeave => mouseleave
      MouseOut => mouseout
      submit
  ```

## Local and Session Storage
<br />


  > **inspect > Application > Storage > Local Storage**

  > **set Item in Storage :** localStorage.setItem('key' , 'value')

  > **get Item from Storage :** localStorage.getItem('key')

  > **Remove Item From Storage :** localStorage.removeItem('key')
  
  > **Clear Storage :** localStorage.clear()
  

<br />


---

## OOP with Java Script

  - List of Topic
    - Constructors 
    - this key-word
    - Prototypes
    - Inheritance
    - Object.create
    - Classes
    - Sub Classes
    - Encapsulation
    - Interfaces

---
<br />


-   ### **Constructors :**
    >  constructors is an initializes an object when it is created

    >  When Constructors gets invoked in java Script , the following sequence of operations take place: 
      - empty object gets created.
      - The **this** keyword begins to refer to the new object and it becomes the current instance object.
      - The new object is then returned as the return value of the constructor.
    
    ```sh
      function fun_name(name) {
        this.name = name;
      }
      
      var user = new fun_name("prince");
      
    ```

    > An object literal is typically used to create a single object whereas a constructor is useful for creating multiple objects:

      ```sh
      //Object
      let user = {
        name: 'Name'
      }

      //Constructor
      function fun_name(name) {
        this.name = name;
      }
      
      var user1 = new fun_name("user1");
      var user2 = new fun_name("user2");
    ```

    > Built in Constructor

      ```sh
      var a = new Object(); 

      var b = new String();
      var c = new String('Bob')

      var d = new Number();
      var e = new Number(25);

      var f = new Boolean();
      var g = new Boolean(true);
    ```



<br />

-   ### **ProtoType :**
    >  Prototype is used to modify methods of object out of object

    > objectName.prototype.methodname = .. code ..
    
    ```sh
      function Person(firstName , lastName , dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    
    // Create Using Prototype
    // this.calculateAge = function() {
    //     const diff = Date.now() = this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getFullYear() - 1970);
    // }
    }
    
    Person.prototype.calculateAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getFullYear() - 1970);
    }
    
    
    const prince = new Person('Prince' , 'Makavana' , '8-01-2002'); 


      
    ```

    
    >  **Prototype Inheritance**
      - when any object call in another object at that time it used

    ```sh
    
      function Person(firstName, lastName, dob) {
          this.firstName = firstName;
          this.lastName = lastName;
          this.birthday = new Date(dob);
      }

      Person.prototype.calculateAge = function () {
          const diff = Date.now() = this.birthday.getTime();
          const ageDate = new Date(diff);
          return Math.abs(ageDate.getFullYear() - 1970);
      }


      const prince = new Person('Prince', 'Makavana', '8-01-2002');

      //Inherit the Person Prototype Methods
      Customer.prototype = Object.create(Person.prototype);

      //It is Used to add Customer Constructor in Cunstomer object otherwise it is use Person Constructor beacuse of inheritance
      Customer.prototype.constructor = Customer;



      function Customer(firstName, lastName, dob , phone , membership) {
          Person.call(firstName, lastName, dob); // Call is used for call object in object
          this.phone = phone;
          this.membership = membership;
      }

      const customer1 = new Customer('Prince', 'Makavana', '8-01-2002' , '2334234234234' , 'Standard');
      console.log(customer1.calculateAge());




    ``` 


<br />

-   ### **ES6 Classes :**
    


    ```sh
    class Person {
        constructor(fname, lname) {
            this.firstName = fname;
            this.lastName = lname;
        }

        greeting() {
            return `Hello there ${this.firstName} ${this.lastName}`;
        }
    }

    const prince = new Person("Prince", "Makavana");
    console.log(prince.greeting());
    ```

    > Inheritance in ES6 Classes

    ```sh
          class Person {
          constructor(fname, lname) {
              this.firstName = fname;
              this.lastName = lname;
          }

          greeting() {
              return `Hello there ${this.firstName} ${this.lastName}`;
          }
      }

      //InHeritance in ES6
      class Customer extends Person {
          constructor(fname, lname, phone, membership) {
              super(fname, lname); // This is used to call parent Class Constructor
              this.phone = phone;
              this.membership = membership;
          }

          static GetMembershipCost () {
              return 500;
          }
      }

      const prince = new Customer("Prince", "Makavana" , '123456789' , 'Standard');
      console.log(prince.greeting());
      console.log(Customer.GetMembershipCost());
    ```

<br />





## Synchronous Code And ASynchronous Code
---
<br />

<img src="https://www.mendix.com/wp-content/uploads/Blog-ThumbnailSync-vs-Async.png" alt="drawing" style="width:1000px;"/>

  - There are Few way to work with async code
    - Callback 
    - promises
    - Async/Await

  
-   ### **Promices**
    > 
    
    ```sh
        const posts = [
        { title: "Post One", body: "this is post one" },
        { title: "Post Two", body: "this is post two" }
    ]
    function GetData(post) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                posts.push(post);
                let con = false;
                if (!con) {
                    resolve();
                }
                else {
                    reject();
                }
            }, 2000);
        });
    }

    GetData({ title: "New Post", body: "This is new Post" })
        .then("this is run")
        .catch(function (err) { console.log(err); })
    ```


<br />
---





## Some UseFull for api with Ajax
---
<br />

  > **Call API and Get Data from it**
    - XHR object is used to load api

    ```sh
        function loadData(params) {
        const xhr = new XMLHttpRequest();

        xhr.open('GET' , 'data.txt' , true);

        xhr.onload  = function() {
                if(this.status === 200){
                    console.log(this.responseText);
                }
        }

        xhr.send();

        //HTTP Status
        //200 : "OK"
        // 403 : "Forbidden"
        // 404: "Not Found"
    }
    ```

  > **Fetch API**
    - XHR object is used to load api

    ```sh
        function fetchAPI() {
        fetch('URL')
            .then((res) => {
                return res
            })
            .then(data => {
                console.log(data);
            })
            .catch(er => { console.log(er) })
    }
    ```


  



