C++
------------------------------------------------------------------------------------------------------------------------

------------------------------------------------------------------------------------------------------------------------
Code Editor
------------------------------------------------------------------------------------------------------------------------
As per Your Choice 

------------------------------------------------------------------------------------------------------------------------
Basic Program 
-----------------
	#include<iostream>
	using namespace std;
	int main(){
		cout << "Hello World"; // std::cout << "Hello World";
		return 0;
	}//output : Hello World

	Line 1 :- #include<iostream> -> Header File library -> use for I/O operation 
	line 2 :- using namespace std; -> means that we can use names for objects and variabled from the Standard library
	line 3 :- int main() -> this is function
	line 4 :- cout << ""; -> syntex to get output
	line 5 :- return 0 -> used for coplete function

------------------------------------------------------------------------------------------------------------------------
Output 
-----------------
	Syntex : cin >> variable_name ;

	exe :-

		#include <iostream>
		using namespace std;

		int main() {
		   int myNum ;
		    cin >> myNum; // Takes input from user
		    cout << myNum; // Print input on the output screen  
		  return 0;
		}






------------------------------------------------------------------------------------------------------------------------
New Line  
-----------------
	Syntex : "\n",endl

	exe :- 
		#include <iostream>
		using namespace std;

		int main() {
		  cout << "Hello World! \n";
		  cout << "I am john Doe ";
		  return 0;
		}
		 Hello World!
		 I am john Doe

.....................................................

		#include <iostream>
		using namespace std;

		int main() {
		  cout << "Hello World!" << endl;
		  cout << "I am learning C++";
		  return 0;
		}


------------------------------------------------------------------------------------------------------------------------
Comments   
-----------------
Syntex : // , /*...*/

// This is a comment


/* The code below will print the words Hello World!
to the screen, and it is amazing */


------------------------------------------------------------------------------------------------------------------------
C++ Data Types   
-----------------

		int -> 4 bytes 
		float -> 4 bytes 
		Double -> 8 bytes
		char -> 1 bytes
		string -> not specific "based on char"
		bool -> 1 bytes 

	exe :- 
		int myNum = 1000;
		cout << myNum;

		float myNum = 5.75;
		cout << myNum;

		double myNum = 19.99;
		cout << myNum;

		Scientific Numbers

		float f1 = 35e3; (10 res to  3)
		double d1 = 12E4;(10 res to  4)
		cout << f1;
		cout << d1;

		bool isCodingFun = true;
		bool isFishTasty = false;
		cout << isCodingFun;  // Outputs 1 (true)
		cout << isFishTasty;  // Outputs 0 (false)


		// Include the string library
		#include <string>

		// Create a string variable
		string greeting = "Hello";

		// Output string value
		cout << greeting;


------------------------------------------------------------------------------------------------------------------------
C++ Variables   
-----------------
	Declaring (Creating) Variables :- data_type variable=value;

	types of variable :- 
					 Globle & Local variable  
					 Independent & Dependent

	Note :- only one time declaring


Exe :-

		int myInt = 11;
		int x = 5, y = 6, z = 50;
		cout << myInt ; //access the variable
		cout << x + y + z;

		cout << "this is I =" << myInt ;

		int myNum = 5;               // Integer (whole number without decimals)
		double myFloatNum = 5.99;    // Floating point number (with decimals)
		char myLetter = 'D';         // Character
		string myText = "Hello";     // String (text)
		bool myBoolean = true;       // Boolean (true or false)


------------------------------------------------------------------------------------------------------------------------
Get Max and Min of Intger 
------------------------------------------------------------------------------------------------------------------------
		#include <bits/stdc++.h>
		using namespace std;
		int main()
		{
		    cout << INT_MAX << endl;
		    cout << INT_MIN;
		    return 0;
		}

C++ Constant 
------------------------------------------------------------------------------------------------------------------------
only readable value

		syntex :- const data_type variable_name = value;

------------------------------------------------------------------------------------------------------------------------
C++ Input 
------------------------------------------------------------------------------------------------------------------------
	Syntex :- cout >> variable ;

			int x, y;
			int sum;
			cout << "Type a number: ";
			cin >> x;
			cout << "Type another number: ";
			cin >> y;
			sum = x + y;
			cout << "Sum is: " << sum;

------------------------------------------------------------------------------------------------------------------------
C++ Operators 
------------------------------------------------------------------------------------------------------------------------

		+ -> Addition 
		- -> Subtration
		* -> Multiplication
		/ -> Division
		% -> Modulus
		++ -> Increment
		-- -> Decrement

 Assinment Operators 

		 = -> a = 5
		 += -> a += a + 5 
		 -= -> a -= a - 5
		 *= -> a *= a *  5
		 /= -> a /= a / 5
		 %= -> a %= a % 5 
		 ^= -> a ^= a^5 

Comparison Operators 

		== Equal
		!= Not Equal
		> Greater 
		< Lees then
		>= Greater then or equal to 
		<= Less then or equal to 


Logical Operators 

		&& and
		|| or
		! not

------------------------------------------------------------------------------------------------------------------------
String 
------------------------------------------------------------------------------------------------------------------------
	STL :
		#include<string>	

	Input: 
  		string variable = "value";
		
		cin >> fullName; // I => John Doe , O => John 
		getline (cin, fullName); // I => John Doe , O => John Doe  		

	access  
			cout << myString[0];

	Concatnation

			string fullName = firstName + lastName;
			string fullName = firstName + " " + lastName;
			string fullName = firstName.append(lastName);

	Length 

			variable.length();
			variable.size();



------------------------------------------------------------------------------------------------------------------------
Math Function 
------------------------------------------------------------------------------------------------------------------------
		STL :- 	#include<cmath>
		Function		Description
		abs(x)			Returns the absolute value of x
		acos(x)			Returns the arccosine of x, in radians
		asin(x)			Returns the arcsine of x, in radians
		atan(x)			Returns the arctangent of x, in radians
		cbrt(x)			Returns the cube root of x
		ceil(x)			Returns the value of x rounded up to its nearest integer
		cos(x)			Returns the cosine of x, in radians
		cosh(x)			Returns the hyperbolic cosine of x, in radians
		exp(x)			Returns the value of Ex
		expm1(x)		Returns ex -1
		fabs(x)			Returns the absolute value of a floating x
		fdim(x, y)		Returns the positive difference between x and y
		floor(x)		Returns the value of x rounded down to its nearest integer
		hypot(x, y)		Returns sqrt(x2 +y2) without intermediate overflow or underflow
		fma(x, y, z)	Returns x*y+z without losing precision
		fmax(x, y)		Returns the highest value of a floating x and y
		fmin(x, y)		Returns the lowest value of a floating x and y
		fmod(x, y)		Returns the floating point remainder of x/y
		pow(x, y)		Returns the value of x to the power of y
		sin(x)			Returns the sine of x (x is in radians)
		sinh(x)			Returns the hyperbolic sine of a double value
		tan(x)			Returns the tangent of an angle
		tanh(x)			Returns the hyperbolic tangent of a double value

------------------------------------------------------------------------------------------------------------------------
Condition Statement
------------------------------------------------------------------------------------------------------------------------
	If
------------------------------------------------------------------------------------------------------------------------

	  if(condition)
	  		{..code..}

	If..Else

      if(condition)
	  	{...code...}
	  else{
		  ...code..
	  }	  

	If..Elseif...Else

		if(condition)
	  	{...code...}
	  	else if{
		  ...code..
	  	}
		else{
		  ...code..
	  	}	  	  


	Switch
------------------------------------------------------------------------------------------------------------------------

		switch(expression) {
	  		case x:
	  		  // code block
	  		  break;
	  		case y:
	  		  // code block
	  		  break;
	  		default:
	  		  // code block
	}
------------------------------------------------------------------------------------------------------------------------
Looping 	
------------------------------------------------------------------------------------------------------------------------
	While Loop
------------------------------------------------------------------------------------------------------------------------

			while(condition){
				Increment
				...code...
			}

------------------------------------------------------------------------------------------------------------------------
	Do..While Loop
------------------------------------------------------------------------------------------------------------------------

			do{
				..code..
			}while(condition)
			

------------------------------------------------------------------------------------------------------------------------
	For Loop
------------------------------------------------------------------------------------------------------------------------

			for(starting ; Ending ; Condition)
			{..code..}

------------------------------------------------------------------------------------------------------------------------
	ForEach Loop
------------------------------------------------------------------------------------------------------------------------

			for(int variable : your_variable)
				{..code..}

			Exe :- 

				int main() 
						{ 
						    int arr[] = { 10, 20, 30, 40 }; 

						    // Printing elements of an array using 
						    // foreach loop 
						    for (int x : arr) 
						        cout << x << endl; 
						} 	
------------------------------------------------------------------------------------------------------------------------
Break & Continue Statement 	
------------------------------------------------------------------------------------------------------------------------

------------------------------------------------------------------------------------------------------------------------
	Break :
------------------------------------------------------------------------------------------------------------------------
	       it is use for break the code

		   exe :- 
		   		for (int i = 0; i < 10; i++) {
					  if (i == 4) {
					    break;
					  }
					  cout << i << "\n";
		   		 }//if i == 4 then loop will break

------------------------------------------------------------------------------------------------------------------------
	Continue :
------------------------------------------------------------------------------------------------------------------------
			it is use for Skip at Specific condition		

			exe :- 
		   		for (int i = 0; i < 10; i++) {
					  if (i == 4) {
					    break;
					  }
					  cout << i << "\n";
		   		 }//if i == 4 then not print i


------------------------------------------------------------------------------------------------------------------------
C++ Arrays : Arrays are used to store multiple values in a single variable 
------------------------------------------------------------------------------------------------------------------------
	Input :
			string cars[4];
			string cars[4] = {"Volvo", "BMW", "Ford", "Mazda"};
			int myNum[3] = {10, 20, 30};


			string cars[4] = {"Volvo", "BMW", "Ford", "Mazda"};
			for(int i = 0; i < 4; i++) {
			  cout << cars[i] << "\n";
			}

		
	access  
			cout << myNum[0];

	Length 

			variable.length();
			variable.size();

------------------------------------------------------------------------------------------------------------------------
C++ Reference : Create using & operator
------------------------------------------------------------------------------------------------------------------------
	string food = "Pizza";  // food variable
	string &meal = food;    // reference to food

	exe :
			string food = "Pizza";
			string &meal = food;

			cout << food << "\n";  // Outputs Pizza
			cout << meal << "\n";  // Outputs Pizza

------------------------------------------------------------------------------------------------------------------------
C++ Memory Address : you can get memory address using & operator 
------------------------------------------------------------------------------------------------------------------------

		string food = "Pizza";
		cout << &food; // Outputs 0x6dfed4

Pointer : Pointer is a variable that stores the memory address as its value.
------------------------------------------------------------------------------------------------------------------------
A pointer variable points to a data type (like int or string) of the same type, and is created with the * operator. The address of the variable you're working with is assigned to the pointer

	There are three ways to declare pointer variables
			string* mystring; // Preferred
			string *mystring;
			string * mystring;

	Exe :
   		string food = "Pizza";  // A food variable of type string
		string* ptr = &food;    // A pointer variable, with the name ptr, that stores the address of food

		
		cout << food << "\n"; // Output the value of food (Pizza)
		cout << &food << "\n"; // Output the memory address of food (0x6dfed4)
		cout << ptr << "\n"; // Output the memory address of food with the pointer (0x6dfed4)

		// Dereference: Output the value of food with the pointer (Pizza)
		cout << *ptr << "\n";

		//Modify : Change the value of the pointer
		*ptr = "Hamburger";

------------------------------------------------------------------------------------------------------------------------
Functions : 

------------------------------------------------------------------------------------------------------------------------
A function is a set of statements that take inputs, do some specific computation and produces output.

The idea is to put some commonly or repeatedly done task together and make a function so that instead of writing the same code again and again for different inputs, we can call the function.

The general form of a function is:
	
	Syntex : 
	         Return_type Name_Of_Function(parameters){
				 ...code..
			}

	Parameters : Parameters act as variables inside the function.

			Default Parameter Value :	
					void myFunction(string country = "Norway") {
  						cout << country << "\n";
					}

			Multiple Parameters:
					void myFunction(string fname, int age) {
 						 cout << fname << " Refsnes. " << age << " years old. \n";
					}

	Return Values : The void keyword, used for  indicates that the function should not return a value.If you want the 	function to return a value, you can use a data type (such as int, string, etc.) instead of void, and use the return keyword inside the function:

	Exe : 
			int myFunction(int x) {
		  		return 5 + x;
			}


	Pass By Reference : we used normal variables when we passed parameters to a function. You can also pass a reference to the function. This can be useful when you need to change the value of the arguments

	Exe :
		   int z = x;
			  x = y;
			  y = z;
			}

			int main() {
			  int firstNum = 10;
			  int secondNum = 20;

			  cout << "Before swap: " << "\n";
			  cout << firstNum << secondNum << "\n";

			  // Call the function, which will change the values of firstNum and secondNum
			  swapNums(firstNum, secondNum);

			  cout << "After swap: " << "\n";
			  cout << firstNum << secondNum << "\n";

			  return 0;
			}				


	Argument : When a parameter is passed to the function, it is called an argument.	//function_name(argument);


	Exe : 
	    void myFunction(string fname) {
		  cout << fname << " Refsnes\n";
		}

		int main() {
		  myFunction("Liam");
		  myFunction("Jenny");
		  myFunction("Anja");
		  return 0;
		}

		// Liam Refsnes
		// Jenny Refsnes
		// Anja Refsnes
   

------------------------------------------------------------------------------------------------------------------------
Function Overloading :
------------------------------------------------------------------------------------------------------------------------
 With function overloading, multiple functions can have the same name with different parameters:

	Exe : 
		int myFunction(int x)
		float myFunction(float x)
		double myFunction(double x, double y)

    Note : Multiple functions can have the same name as long as the number and/or type of parameters are different.

	Exe :
	    int plusFunc(int x, int y) {
		  return x + y;
		}

		double plusFunc(double x, double y) {
		  return x + y;
		}

		int main() {
		  int myNum1 = plusFunc(8, 5);
		  double myNum2 = plusFunc(4.3, 6.26);
		  cout << "Int: " << myNum1 << "\n";
		  cout << "Double: " << myNum2;
		  return 0;
		}		

------------------------------------------------------------------------------------------------------------------------
STL (Standard Template Library) : 
------------------------------------------------------------------------------------------------------------------------
The Standard Template Library (STL) is a set of C++ template classes to provide common programming data structures and functions such as lists, stacks, arrays, etc.

	STL has four components

					Algorithms
					Containers
					Functions
					Iterators
					List


	Algorithms : 
	         sort(first_iterator, last_iterator) – To sort the given vector.
			 binary_search(startaddress,endaddress, valuetofind) - Find Element
			 reverse(first_iterator, last_iterator) – To reverse a vector.
			 *max_element (first_iterator, last_iterator) – To find the maximum element of a vector.
			 *min_element (first_iterator, last_iterator) – To find the minimum element of a vector.
			 accumulate(first_iterator, last_iterator, initial value of sum) – Does the summation of vector elements	

	
	Sorting Using STL :		 
						// C++ progrma to sort an array
						#include <algorithm>
						#include <iostream>

						using namespace std;

						void show(int a[], int array_size)
						{
						    for (int i = 0; i < array_size; ++i)
						        cout << a[i] << " ";
						}

						// Driver code
						int main()
						{
						    int a[] = { 1, 5, 8, 9, 6, 7, 3, 4, 2, 0 };

						    // size of the array
						    int asize = sizeof(a) / sizeof(a[0]);
						    cout << "The array before sorting is : \n";

						    // print the array
						    show(a, asize);

						      // sort the array
						    sort(a, a + asize);

						    cout << "\n\nThe array after sorting is :\n";

						    // print the array after sorting
						    show(a, asize);

						    return 0;
						}

						// Output : 
									The array before sorting is : 
									1 5 8 9 6 7 3 4 2 0 
									The array after sorting is :
									0 1 2 3 4 5 6 7 8 9 
              			
------------------------------------------------------------------------------------------------------------------------
Vector In STL : #include<vector>
------------------------------------------------------------------------------------------------------------------------
Vectors are same as dynamic arrays with the ability to resize itself automatically when an element is inserted or deleted, with their storage being handled automatically by the container.


	Certain functions associated with the vector are:
		Iterators

		vector::begin() 								vector::end()
		vector rbegin() and rend()					
		vector::cbegin() 	 							vector::cend()
		vector::crend() 								vector::crbegin()
		vector::assign() 								vector::insert()
		vector::at() 									vector::back()
		vector::capacity()        						vector::clear()
		vector::push_back()								vector::pop_back()
		vector::empty()  								vector::erase()
		vector::swap() 									vector::size()
		vector::resize()								vector::reserve()
		vector::operator=								vector::shrink_to_fit()
		vector::operator[]								vector::front()
		vector::emplace_back()							vector::data()
		vector::max_size()	 							vector::emplace()
		
		Exe : 

			// C++ program to illustrate the 
			// iterators in vector 
			#include <iostream> 
			#include <vector> 

			using namespace std; 

			int main() 
			{ 
			    vector<int> g1; 

			    for (int i = 1; i <= 5; i++) 
			        g1.push_back(i); 

			    cout << "Output of begin and end: "; 
			    for (auto i = g1.begin(); i != g1.end(); ++i) 
			        cout << *i << " "; 

			    cout << "\nOutput of cbegin and cend: "; 
			    for (auto i = g1.cbegin(); i != g1.cend(); ++i) 
			        cout << *i << " "; 

			    cout << "\nOutput of rbegin and rend: "; 
			    for (auto ir = g1.rbegin(); ir != g1.rend(); ++ir) 
			        cout << *ir << " "; 

			    cout << "\nOutput of crbegin and crend : "; 
			    for (auto ir = g1.crbegin(); ir != g1.crend(); ++ir) 
			        cout << *ir << " "; 

			    return 0; 
			} 

			// Output : 
			           Output of begin and end: 1 2 3 4 5 
					   Output of cbegin and cend: 1 2 3 4 5 
					   Output of rbegin and rend: 5 4 3 2 1 
					   Output of crbegin and crend : 5 4 3 2 1 

