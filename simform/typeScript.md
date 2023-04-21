# **<p align="center"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="drawing" style="width:50px;"/>  Type Script <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="drawing" style="width:50px;"/></p>**

<br>

----

## Introduction

----
<br>

    - Superset of Java Script (Java Script plus some other Feature)
    - Using Types are Optional
    - Typscript -> compile -> Java Script
    - Usend in Frond End also Backend with Node.js
    - Includes most features from ES6 , ES7
    - extenctions : .ts and .tsx
    - tsconfig.json file used to configure how Typescript works


<br>

----

## Dynamic vs Static Typing

----
<br>

  - **Dynamically Typed Languages**, the types are associated with run-time values and not named explicitly in your code Eg : JavaScript , PHP , Python
  - **Statically Typed Languages**, you explicitly assign types to variables, function paramers , return values. Eg : Java , C , C++ , Go


<br>

----

## Pros & Cons

----
<br>


![Screenshot from 2023-03-24 10-18-55](https://user-images.githubusercontent.com/125016923/227427259-54efcd74-c66b-4eae-946f-448664591886.png)

<br>

----

## Installation

----
<br>

 - `npm i -g typescript`
 - `tsc --init`

<br>

----

## Basic Type Declaration

----
<br>

```

  let id: number = 5
  let compney: string = "Simform"
  let isPublished: boolean = true
  let x: any = 'Hello'

  let age: number
  age = 30

  // Union

  let idUnion: string | number = 22;
  idUnion = '22'

  // Arrays

  let ids: number[] = [1, 2, 3, 4, 5]
  ids.push(12);
  
  // Tuple
  let person: [number, string, boolean] = [1, 'Brad', true]
  
  let employee: [number, string][]
  employee = [[1, 'Prince'], [2, 'Romik'], [3, 'HD']]

  // Enums : set of name constants
  
  enum Direction1 {
      Up, Down, Left, Right
  }

  // Enums Has Own By Default value


  // Objects
  const user: { id: number, name: string, age: number, status: boolean } = {
      id: 1,
      name: 'Prince',
      age: 23,
      status: true
  }


  // External Type of Object

  type EmployeeType = { id: number, name: string, age: number, status: boolean }

  const Employees: EmployeeType = {
      id: 1,
      name: 'Prince',
      age: 23,
      status: true
  }


```
<br>

----

## Expicitly Type

----
<br>

```

  let cid: any = 1;
  let customerId1 = <number>cid
  let customerId2 = cid as string

```
<br>

----

## Function Types

----

<br>

```

  // "noImplicitAny": false, => will automaticly get type any if you don't gave to it

  function addNum(x: number, y: number): number {
      return x + y;
  }

  console.log(addNum(1, 3));

  // Void
  function log(msg: string | number): void {
      console.log(msg);
  }


```


<br>

----

## InterFaces

----

<br>

  - InterFaces : Custom Types or Specific Structure to an Object or Function
  - Can not use Interface with Premitives or Union

```
// Interface Over Type

  interface EmployeeInterface {
      readonly id: number,
      name: string,
      age: number,
      atOffice?: boolean,
      status: boolean
  }

  const Employees1: EmployeeInterface = {
      id: 1,
      name: 'Prince',
      age: 23,
      status: true
  }

```

```
// Interfaces with Function

  interface MathFunc {
      (x: number, y: number): number
  }

  const add: MathFunc = (x: number, y: number): number => x + y
  const sub: MathFunc = (x: number, y: number): number => x - y

```

<br>

----

## Classes

----

<br>


```

  class Person {
      id: number
      name: string

      // constructor is a method which is called automaticaly whenever an object is instantiated from that class
      constructor(id: number, name: string) {
          this.id = id;
          this.name = name;
      }
  }

  const prince = new Person(2, 'Prince');
  const romik = new Person(2, 'Romik');

  console.log(prince, romik);


```

```

  // Access Modifiers , Data Modifiers : public , private , protected

  interface Student {
      id: number,
      subject: string,
      marks: number
      getName(): string

  }
  class StudentData implements Student {
      id: number
      private name: string
      subject: string
      marks: number

      constructor(id: number, name: string, subject: string, marks: number) {
          this.id = id
          this.name = name
          this.subject = subject
          this.marks = marks
      }

      getName(): string {
          return this.name
      }
  }

  const student1 = new StudentData(1, 'Prince', 'Maths', 23);
  const student2 = new StudentData(2, 'Romik', 'Maths', 30);
  console.log(student1);


```


```

  // Extend Inherit Class

  class Teacher extends StudentData {
      position: string

      constructor(id: number, name: string, subject: string, marks: number, position: string) {
          super(id, name, subject, marks);
          this.position = position
      }
  }

  const teacher1 = new Teacher(2, 'Prince', 'Maths', 23, 'Head');
  const teacher2 = new Teacher(3, 'Romik', 'Maths', 23, 'Manager');

  console.log(teacher1.getName());


```

<br>

----

## Generics

----

<br>

```

  function getArr<T>(items: T[]): T[] {
      return new Array().concat(items)
  }
  
  let numArr = getArr<number | string>([1, 2, 3, 4, 5])
  let strArr = getArr<string>(['brad', 'john', 'jim'])
  
  numArr.push('hello')

```