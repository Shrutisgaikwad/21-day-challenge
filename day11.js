function validateEmail(email) {

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    const isValid = emailRegex.test(email);
  
    if (isValid) {
      console.log(`"${email}" is a valid email address.`);
    } else {
      console.log(`"${email}" is invalid email address.`);
    }
  }
  
  validateEmail("eve.doe@gmail.com");
  validateEmail("abc");
  

