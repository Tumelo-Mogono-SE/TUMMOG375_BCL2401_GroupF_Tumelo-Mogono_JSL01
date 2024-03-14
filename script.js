function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
    let validator = /^pet_(19|20)\d{2}[A-Z]\w+$/;

    if (validator.test(input)){
        result  = "Valid Syntax";
    } else {
        result = "Invalid Syntax";
    }

    document.getElementById('result').innerText = result;
}


