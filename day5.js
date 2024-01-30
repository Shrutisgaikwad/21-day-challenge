let favoriteColors = ["Blue", "Purple","Pink","Red","Yellow"];
console.log("original array:",favoriteColors);

// accessing by index
console.log("4th indexth color:",favoriteColors[4]);

// adding element beggining
favoriteColors.unshift("orange");
console.log("after adding orange at start:",favoriteColors);

// adding element at the end
favoriteColors.push("Green");
console.log("after adding green at last:",favoriteColors);

// removing starting element 
favoriteColors.shift();
console.log("after removing orange:",favoriteColors);

// removing ending element 
favoriteColors.pop();
console.log("after removing Green:",favoriteColors);