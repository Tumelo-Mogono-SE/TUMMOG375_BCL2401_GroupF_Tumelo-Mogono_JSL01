function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
    // Check if input starts with 'pet_' and followed by alphanumeric characters
    
    /*Using regex I added an expression which only checks if a string starts with pet_ and contains either four digits which start with 
    either 19 or 20 followed by two random numbers for birth year and a string which starts with an Uppercase alphabet and any alphabet
    can follow.*/
    /*There is also an if statement which checks whether the input matches the regular expression and if it does it passes a valid syntax 
    string to a variable, if the input does not match it passes the string invalid syntax.
    The variable is used to be passed to an element with the id results. */
    let validator = /^pet_(19|20)\d{2}[A-Z]\w+$/;

    if (validator.test(input)){
        result  = "Valid Syntax \uD83D\uDFE2";
    } else {
        result = "Invalid Syntax \uD83D\uDD34";
    }

    document.getElementById('result').innerText = result;
}


