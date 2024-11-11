{
//
/*
## Problem 4:

Define a union type Circle and Rectangle, where each type has a unique shape property.
 Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

```tsx
// Sample Input 1:
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// Sample Output 1:
78.54;

// Sample Input 2:
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});

// Sample Output 2:
24;
```
*/ 
// solution:
type Circle ={
    shape:'circle';
    radius : number;
}

type Rectangle = {
    shape:'rectangle';
    height:number;
    width:number;
}

type Shape = Circle | Rectangle;

function calculateShapeArea (param:Shape):number | string{
    if(param.shape === "circle"){
        return (Math.PI * param.radius * param.radius).toFixed(2);
    }
    else if(param.shape === "rectangle"){
        return(param.height*param.width)
    }else{
        return("Invalid shape type .please try a different shape type")
    }

}


const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });

console.log(circleArea);
console.log(rectangleArea);


// 
}