const terms = [
    {
        id: 1,
        category: "OOP",
        term: "Inheritance",
        explanation: `Inheritance in Java is a concept that acquires the
         properties from one class to other classes; for example, the 
         relationship between father and son. In Java, a class can inherit 
         attributes and methods from another class. The class that inherits 
         the properties is known as the sub-class or the child class.`
    }, 
    {
        id: 2,
        category: "Hardware",
        term: "Transistor",
        explanation: "This is what it is"
    }, 
    {
        id: 3,
        category: "OOP",
        term: "Polymorphism",
        explanation: `It is an ability of object to behave in multiple
        forms. The most common use of polymorphism is Java, when a
        parent class reference type of variable is used to refer to a child
        class object.In the technical world, polymorphism in java allows 
        one to do multiple implementations by defining one interface. 
        \n E.g.: WebDriver driver = new ChromeDriver();`
    },
    {
        id: 4,
        category: "OOP",
        term: "Method Overloading",
        explanation: `Method Overloading is a feature that allows a class 
        to have more than one method having the same name, if their argument 
        lists are different. It is similar to constructor overloading in Java, 
        that allows a class to have more than one constructor having different argument lists.`
    }, 
    {
        id: 5,
        category: "Hardware",
        term: "Transistor",
        explanation: "This is what it is"
    }, 
    {
        id: 6,
        category: "OOP",
        term: "Dynamic binding",
        explanation: `When the compiler resolves the method call binding during
         the execution of the program, such a process is known as Dynamic or 
         Late Binding in Java. We also call Dynamic binding as Late Binding
          because binding takes place during the actual execution of the program.
          Overriding is a perfect example of dynamic binding. In overriding
           both parent and child classes have same method.`
    },

    {
        id: 7,
        category: "OOP",
        term: "Static binding",
        explanation: ` The binding which can be resolved at compile time by 
        compiler is known as static or early binding. Binding of all the static, 
        private and final methods is done at compile-time. Overloaded methods are
         resolved (deciding which method to be called when there are multiple 
            methods with same name) using static binding`
    },

    {
        id: 8,
        category: "OOP",
        term: "Deadlock",
        explanation: `Deadlock is a situation where a set of processes 
        are blocked because each process is holding a resource 
        and waiting for another resource acquired by some other
        process.Process 1 is holding Resource 1 and waiting for
        resource 2 which is acquired by process 2, and process 2
        is waiting for resource 1.`
    },

    {
        id: 9,
        category: "OOP",
        term: "Abstract classes",
        explanation: `Sometimes we may come across a situation where we cannot provide 
        implementation to all the methods in a class. We want to leave the 
        implementation to a class that extends it. In such case we declare a class
        as abstract.To make a class abstract we use key word abstract. 
        Any class that contains one or more abstract methods is declared as abstract. 
        If we don’t declare class as abstract which contains abstract methods we get 
        compile time error. Abstract classes cannot be instantiated. Any class which
         extends abstract class must override all methods of abstract class.`
    },


    {
        id: 10,
        category: "OOP",
        term: "Abstract methods",
        explanation: `ABSTRACT METHOD in Java, is a method that has just the method 
        definition but does not contain implementation. A method without a body
         is known as an Abstract Method. It must be declared in an abstract class. 
         The abstract method will never be final because the abstract class must
          implement all the abstract methods.`
    },


    {
        id: 11,
        category: "OOP",
        term: "Static method",
        explanation: `Static methods are the methods in Java that can be called 
        without creating an object of class. They are referenced by 
        the class name itself or reference to the Object of that class.
        Static methods can access the static variables and static methods directly.`
    },
]

exports.terms = terms
