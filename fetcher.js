const request = require("request");
const fs = require("fs");

const url = process.argv[2];
const file = process.argv[3]; //local path

request(url, (error, response, body) => {
  console.log("Connecting to server...");
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  console.log("body:", body); // Print the HTML for homepage.
  //Check http response code
  if (response.statusCode === 200) {
    fs.writeFile(file, body, (error) => {
      if (error) {
        console.log("Failed to write to localPath", file);
        return;
      } else {
        console.log(`Downloaded and saved ${body.length} bytes to ${file}`);
      }
    });
  }
});