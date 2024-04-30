// Retrieve the element with the id "level"
var element = document.getElementById('level');

// Initialize a variable to store the DOM level
var domLevel = 0;

// Traverse up the DOM tree until reaching the root <html> element
while (element !== document.documentElement) {
    // Move to the parent element
    element = element.parentElement;
    
    // Increment the DOM level
    domLevel++;
}

// Display the DOM level in an alert
alert("The level of the element is: " + domLevel);
