const fs = require('fs');

// Write content to welcome.txt
const content = 'Hello Node';

fs.writeFile('welcome.txt', content, (err) => {
  if (err) {
    console.error('Error creating file:', err);
    return;
  }
  console.log("Hello Node");
});
