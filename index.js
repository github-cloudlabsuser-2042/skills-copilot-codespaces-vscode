function reverseSentence(sentence) {
    // Split the sentence into words, reverse the array, and join it back into a string
    let reversed = sentence.split(' ').reverse().join(' ');

    // Capitalize the first letter of the reversed sentence
    reversed = reversed.charAt(0).toUpperCase() + reversed.slice(1);

    return reversed;
}

// Example usage
let inputSentence = "hello world this is a test";
let outputSentence = reverseSentence(inputSentence);
console.log(outputSentence); // Output: "Test a is this world hello"

// Example data array
let data = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

// Extract names from the data array
let names = data.map(person => person.name);
console.log(names); // Output: ["Alice", "Bob", "Charlie"]