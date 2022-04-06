const calculator = {
    add :function(a, b){
        console.log(a + b);
    },
    minus :function(a, b){
        console.log(a - b);
    },
    multiply :function(a, b){
        console.log(a * b)
    },
    division :function(a, b){
        console.log(a / b);
    },
    powerOf :function(a, b){
        console.log(a ** b);
    },
};

calculator.add(9, 1);
calculator.minus(20, 4);
calculator.multiply(46, 8);
calculator.division(32, 2);
calculator.powerOf(4, 3);