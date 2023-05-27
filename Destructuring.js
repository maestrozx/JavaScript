//const vehicles = ['maybach', 'f120', 'tata'];
//const [car, truck, suv] = vehicles;

function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
  
    return [add, subtract, multiply, divide];
}
  
const [add, subtract, multiply, divide] = calculate(16, 2);
console.log(calculate(16,2));