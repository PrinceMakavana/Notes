<h2> Object Oriented Programming</h2>

<p> Procedural programming is about writing procedures or methods that perform operations on the data,  It is about to create a objects that contain both data and methods</p>

Advantages
easy to execute , understand
provide clear structure
work on DRY "DO NOT REPEAT YOURSELF"

Main Topics
Classes => Eg : car , fruit
Object => Eg : volvo , BMW , etc.. , apple ,
Attributes => variables of class is the attributes of the class
Method
Constructors
Modifiers
Encapsulation
Inheritance
Polymorphism
Abstraction
Interface
Enums
HasMap
Exception
Threads

Classes :
public class Main {
int a = 5 ;
public static void main(String[] args){
Main obj = new Main(); // Object of class
}
}

Attributes :
variables of class is the attributes of the class
Type : int ,
String ,
const ,
final : don't want the ability to override existing values, declare the attribute as final

Method : Function Of Class is known as Method of any class
static : which means that it can be accessed without creating an object of the class
public : which can only be accessed by objects

            Syntax :
                    Access Specifier | static | Method Name (Parameters) {...code...}

Constructors :
It is a Special Method that is used to initialize objects
The constructor is called when an object of a class is created
<b>Note :</b> that the constructor name must match the class name, and it cannot have a return type (like void).

     eg : public class name {
         public name() {
             String Myname = prince;
         }
     }

Access Modifiers :  Public : The code is accessible for all classes
                 ,  Protected : The code is only accessible within the declared class
                ,   Private : The code is accessible in the same package and subclasses.

Encapsulation : 
                is to make sure that "sensitive" data is hidden from users


                Some Basic Steps : 
                                declare class attribute as private
                                make public get and set method to retrieve or update private attribute.


                public class Person {
                  private String name; // private = restricted access

                  // Getter
                  public String getName() {
                    return name;
                  }

                  // Setter
                  public void setName(String newName) {
                    this.name = newName;
                  }
                }

Inheritance : 
                it is possible to inherit attributes and methods from one class to another.

                categories : subclass : the class that inherits from another class
                             superclass : the class being inherited from

                To inherit from a class, use the extends keyword.


Polymorphism : 
                polymorphism means "many forms", and it occurs when we have many classes that are related to each other by inheritance.

                class Animal {
                  public void animalSound() {
                    System.out.println("The animal makes a sound");
                  }
                }

                class Pig extends Animal {
                  public void animalSound() {
                    System.out.println("The pig says: wee wee");
                  }
                }

                class Dog extends Animal {
                  public void animalSound() {
                    System.out.println("The dog says: bow wow");
                  }
                }

                class Main {
                  public static void main(String[] args) {
                    Animal myAnimal = new Animal();  // Create a Animal object
                    Animal myPig = new Pig();  // Create a Pig object
                    Animal myDog = new Dog();  // Create a Dog object
                    myAnimal.animalSound();
                    myPig.animalSound();
                    myDog.animalSound();
                  }
                }


Abstraction : Data abstraction is the process of hiding certain details and showing only essential information to the user

Abstraction can be achieved with either abstract classes or interfaces

abstract class Animal {
  // Abstract method (does not have a body)
  public abstract void animalSound();
  // Regular method
  public void sleep() {
    System.out.println("Zzz");
  }
}

// Subclass (inherit from Animal)
class Pig extends Animal {
  public void animalSound() {
    // The body of animalSound() is provided here
    System.out.println("The pig says: wee wee");
  }
}