{
//
/*
## Problem 7:

Create a TypeScript class Car with properties make, model, and year. 
Include a method getCarAge that returns the car's age based on the current year.

```tsx
// Sample Input 1:
const car = new Car("Honda", "Civic", 2018);
car.getCarAge();

// Sample Output 1:
6 (assuming current year is 2024)
```

*/  

class Car {
    make:string;
    model:string;
    year:number;

    constructor(make:string,model:string, year:number){
        this.make = make;
        this.model = model;
        this.year= year;
    }
     getCarAge():number{
        const oldYear = this.year;
        const currentYear = new Date().getFullYear(); // get the current year.
        return currentYear - oldYear;  
    }
}


const car = new Car("Honda", "Civic", 2018);
console.log(car.getCarAge());















// 
}