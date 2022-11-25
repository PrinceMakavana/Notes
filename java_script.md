----------------------------------------------------------------------------------------------------------------------
For alert Massage
-----
alert("Your Text");
----------------------------------------------------------------------------------------------------------------------
For Print in Devloper-Tool
-----
consol  (For information ->  search :- MDN consol)
----------------------------------------------------------------------------------------------------------------------
   The console object provides access to the browser's debugging console (e.g. the Web Console in Firefox). The specifics of how it works varies from browser to browser, but there is a de facto set of features that are typically provided.
----------------------------------------------------------------------------------------------------------------------
Methods of Concole  
-----
console.assert(); -> Log a message and stack trace to console if the first argument is false.
console.clear();  -> Clear the console
console.countReset(); -> Resets the value of the counter with the given label.
console.debug(); -> Outputs a message to the console with the log level "debug".

console.dir(); -> Displays an interactive listing of the properties of a specified JavaScript object.This listinglets you use disclosure triangles to examine the contents of child objects

console.dirxml(); -> Displays an XML/HTML Element representation of the specified object if possible or the JavaScript Object view if it is not possible.

console.error(); -> Outputs an error message. You may use string substitution and additional arguments with this method.

console.group(); -> Creates a new inline group, indenting all following output by another level. To move back out a level, call groupEnd().

console.groupCollapsed(); -> Creates a new inline group, indenting all following output by another level. However, unlike group() this starts with the inline group collapsed requiring the use of a disclosure button to expand it. To move back out a level, call groupEnd().

console.groupEnd(); -> Exits the current inline group.

console.log(); -> For general output of logging information. You may use string substitution and additional arguments with this method.

console.profile(); -> Starts the browser's built-in profiler (for example, the Firefox performance tool). You can specify an optional name for the profile

console.profileEnd(); -> Stops the profiler. You can see the resulting profile in the browser's performance tool (for example, the Firefox performance tool).

console.table() -> Displays tabular data as a table

console.time() -> Starts a timer with a name specified as an input parameter. Up to 10,000 simultaneous timers can run on a given page

console.timeEnd() -> Stops the specified timer and logs the elapsed time in seconds since it started

console.timeLog() -> Logs the value of the specified timer to the console.

console.timeStamp() -> Adds a marker to the browser's Timeline or Waterfall tool.

console.trace() -> Outputs a stack trace.

console.warn() -> Outputs a warning message. You may use string substitution and additional arguments with this method

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
---------------------------------------------------------------------------------------------------------------------
-----------------      
 Functions :-
-----------------

 Define a function :- function function_name(parameters){ content }
 call a function   :- function_name(parameters);
---------------------------------------------------------------------------------------------------------------------





























