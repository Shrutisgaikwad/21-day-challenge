function divideNumbers(num1, num2) {
    try {
      const result = num1 / num2;
      if (isNaN(result)) {
        throw new Error("Division by zero or invalid input");
      }
      console.log(`Result of division: ${result}`);
    } catch (error) {
    
      console.error(`Error: ${error}`);
    }
  }
  
  divideNumbers(10, 2);   
  divideNumbers(8, 0);   
  divideNumbers("abc", 2); 
  