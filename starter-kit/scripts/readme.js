import fs from "fs";
import path from "path";

const url = 'https://molis-house.vercel.app/';
const __dirname = path.resolve();

// Read .astro files from the pages folder
const folderPath = path.resolve(__dirname, "./src/pages");

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  // Generate URLs for each page
  const urls = files.map((file) => {
    const pageName = path.parse(file).name;
    return `Pages:\n${url}${pageName}`;
  });

  // Write URLs to readme.txt
  fs.writeFile("./readme.txt", urls.join("\n"), (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log("URLs written to readme.txt successfully.");
  });
});
