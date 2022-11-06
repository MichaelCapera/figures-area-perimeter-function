

function calculateFigure(figure, operation, args) {


    if(figure == "triangle"){

        triangle(operation, args);

    }else if( figure == "square") {

        square(operation, args);

    }else if(figure == "rectangle") {

        rectangle(operation, args);

    }else if(figure == "circle") {

        circle(operation, args);

    } else {
        console.log("error");
    }
}

const triangle = (operation, args) => {

    let base = args.base;
    let height = args.height;
    let triangleSide = args.side1;

    if(operation == "perimeter") {
      
     console.log("The perimeter of the triangle is = ", base + height + triangleSide);
    
    }else if( operation == "area") {

        console.log("The area of the triangle is = ", ((base * height)/triangleSide));

    }else {
        
        console.log("Error");
    }

}

const square = (operation, args) => {

    let squareSide = Number(args.side1);

    if(operation == "perimeter") {
      
        console.log("The perimeter of the square is = ", squareSide * 4 );
       
       }else if( operation == "area") {
   
           console.log("The area of the square is = ", squareSide * squareSide);
   
       }else {
           
           console.log("Error");
       }
    
}

const rectangle = (operation, args) => {

    let base = args.base;
    let height = args.height;

    if(operation == "perimeter") {
      
        console.log("The perimeter of the rectangle is = ", 2 * (base + height));
       
       }else if( operation == "area") {
   
           console.log("The area of the rectangle is = ", base * height);
   
       }else {
           
           console.log("Error");
       }

}

const circle = (operation, args) => {

    let radio = args.radio;
    let pi = 3.1415;
    
    if(operation == "perimeter") {
      
        console.log("The perimeter of the circle is = ", (2 * (pi * radio)));
       
       }else if( operation == "area") {
   
           console.log("The area of the circle is = ", (pi * (radio * radio)));
   
       }else {
           
           console.log("Error");
       }

}


/** Arguments triangle */
//args = {"base":2, "height":3, "side1":4}
//calculateFigure("triangle", "area", args);
//calculateFigure("triangle", "perimeter", args);

/**Arguments square */
//args = {"side1":4,"side2":4,"side3":4,"side4":4}
//calculateFigure("square", "perimeter", args);
//calculateFigure("square", "area", args);

/**Arguments rectangle */
//args = {"base":8,"height":4}
//("rectangle", "perimeter", args);
//calculateFigure("rectangle", "area", args);

/**Arguments circle */
//args = {"radio": 3}
//calculateFigure("circle", "area", args);
//calculateFigure("circle", "perimeter", args);