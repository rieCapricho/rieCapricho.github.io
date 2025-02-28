const jsonDisplay = document.getElementById('jsonDisplay');

// Create a JSON object
const person = {
    name: "Abrienne",
    age: 25,
    hobbies: ["reading", "coding", "hiking"]
};

// Convert the object to a JSON string
const jsonString = JSON.stringify(person);

// Display the JSON string
jsonDisplay.innerHTML = `<pre>${jsonString}</pre>`;