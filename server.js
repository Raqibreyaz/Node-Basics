const fs = require("fs");

console.log("node basics begins");

// create a file
fs.writeFile("hey.txt", "hi  i am working with files in node", (error) => {
  if (error) console.error(error);
  else console.log("file created");
});

// integrate data in file
fs.appendFile("hey.txt", "\nthis is another data", (error) => {
  if (error) console.error(error);
  else console.error("file modified");
});

// rename a file
fs.rename("hey.txt", "hello.txt", (error) => {
  if (error) console.log(error);
  else console.log("file renamed");
});

// reading a file
fs.readFile("hello.txt", "utf8", (error, content) => {
  if (error) console.log(error);
  else {
    console.log(content);
  }
});

// delete a file
fs.unlink("hello.txt", (error) => {
  console.log(error);
});

// create a folder
fs.mkdir("test", (error) => {
  if (error) console.log(error);
  else {
    console.log("folder created successfully");

    fs.writeFile(
      "./test/hello.txt",
      "hi this file is in test folder",
      (error) => {
        if (error) console.log(error);
        else {
          console.log("file created inside folder");
        }
      }
    );
  }
});

// delete a folder
fs.rm("./test", { recursive: true }, (error) => {
  if (error) console.log(error);
  else {
    console.log("folder deleted");
  }
});
