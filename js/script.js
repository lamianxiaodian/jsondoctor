// JSON Doctor Main Script
const input = document.getElementById('input');
const output = document.getElementById('output');

function sanitizeInput(inputText) {
  return inputText.replace(/[<>&"']/g, (char) => {
    const entityMap = {
      '<': '&lt;',
      '>': '&gt;',
      '&': '&amp;',
      '"': '&quot;',
      "'": '&#39;'
    };
    return entityMap[char];
  });
}

function format() {
  try {
    output.value = JSON.stringify(JSON.parse(input.value), null, 2);
  } catch (e) {
    output.value = "Invalid JSON: " + sanitizeInput(e.message);
  }
}

function minify() {
  try {
    output.value = JSON.stringify(JSON.parse(input.value));
  } catch (e) {
    output.value = "Invalid JSON: " + sanitizeInput(e.message);
  }
}

function clearAll() {
  input.value = '';
  output.value = '';
}

function copyResult() {
  if (output.value) {
    navigator.clipboard.writeText(output.value)
      .then(() => alert('Copied'))
      .catch(err => console.error('Copy failed:', err));
  }
}

function loadExample() {
  const exampleJSON = {
    "name": "John Doe",
    "age": 30,
    "isActive": true,
    "email": "john@example.com",
    "address": {
      "street": "123 Main St",
      "city": "New York",
      "country": "USA"
    },
    "hobbies": ["reading", "coding", "hiking"],
    "projects": [
      {
        "name": "JSON Doctor",
        "description": "A JSON formatting and validation tool",
        "technologies": ["JavaScript", "HTML", "CSS"]
      },
      {
        "name": "API Client",
        "description": "A tool for testing REST APIs",
        "technologies": ["React", "Node.js"]
      }
    ]
  };
  
  input.value = JSON.stringify(exampleJSON, null, 2);
  output.value = '';
}

// Add event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Add event listeners for buttons
  const buttons = document.querySelectorAll('.toolbar button');
  
  if (buttons.length >= 5) {
    buttons[0].addEventListener('click', format); // Format button
    buttons[1].addEventListener('click', minify); // Minify button
    buttons[2].addEventListener('click', clearAll); // Clear button
    buttons[3].addEventListener('click', copyResult); // Copy button
    buttons[4].addEventListener('click', loadExample); // Example button
  }
});
