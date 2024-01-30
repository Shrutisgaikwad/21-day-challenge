
const saveToLocalStorage = (key, data) => {
    try {
      const jsonData = JSON.stringify(data);
      localStorage.setItem(key, jsonData);
      console.log(`Data saved to local storage with key: ${key}`);
    } catch (error) {
      console.error('Error saving data to local storage:', error);
    }
  };
  
 
  const getFromLocalStorage = (key) => {
    try {
      
      const jsonData = localStorage.getItem(key);
      const data = JSON.parse(jsonData);
      console.log(`Data retrieved from local storage with key: ${key}`);
      return data;
    } catch (error) {
      console.error('Error retrieving data from local storage:', error);
      return null;
    }
  };

  const dataToStore = { name: 'John', age: 25, city: 'Example City' };
  saveToLocalStorage('userData', dataToStore); 
   const retrievedData = getFromLocalStorage('userData');  
  console.log('Retrieved Data:', retrievedData);
  