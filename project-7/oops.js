//1
/*

class School {
    studentDetails(name, email, contact) {
      console.log("Student Details:");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Contact:", contact);
    }
  
    facultyDetails(name, email, contact) {
      console.log("Faculty Details:");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Contact:", contact);
    }
  }
  
 
  let obj = new School();
  
  obj.studentDetails("Peter", "peter@123.com", "780-456-2810");
 
  obj.facultyDetails("John", "john@xyz.com", "808-893-1254");

  */

  /* Output :

        Student Details :
        Name: Peter
        Email: peter@123. com
        Contact: 780-456-2810
        Faculty Details :
        Name: John
        Email: john@xyz.com
        Contact: 808-893-1254
 */


//2

/*
class Person {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email=email;
    }
  }
  
  class Employee extends Person {
    details() {
    console.log("Name:",this.name);
    console.log("Age:",this.age);
    console.log("Email:",this.email);
    }
  }
  
 let obj = new Employee("jolly", 20 ," peter@123.com ");
  

 obj.details();
 */

 /* Output:
    Name: jolly
    Age :20
    Email : peter@123.com
*/



// 3

/*
class Employee {
    constructor() {
      console.log("An Object is created.");
    }
  }
  
  let obj = new Employee();
  
*/

  /* Output :
      An Object is created.
  */



//4
/*
class Shape {

    circleArea(radius) {
      let area = 3.14 * radius * radius;
      console.log("Circle Area:",area);
    }
  
    
    rectangleArea(width, height) {
      let area = width * height;
      console.log("Rectangle Area:",area);
    }

  }
  
  let obj = new Shape();

  obj.circleArea(8);      
  obj.rectangleArea(6, 11);
  
*/
  /* Output:
  Circle Area: 200.96
  Rectangle Area: 
  66
  */